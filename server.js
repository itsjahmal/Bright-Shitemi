
const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');
const fetch = require('node-fetch');

const app = express();
app.use(cors());
app.use(bodyParser.json());

// PesaPal Configuration (Sandbox)
const PESAPAL_CONFIG = {
  CONSUMER_KEY: process.env.PESAPAL_CONSUMER_KEY || 'qkio1BGGYAXTu2JOfm7XSXNruoZsrqEW',
  CONSUMER_SECRET: process.env.PESAPAL_CONSUMER_SECRET || 'osGQ364R49cXKeOYSpaOnT++rHs=',
  BASE_URL: 'https://cybqa.pesapal.com/pesapalv3', // Change to pay.pesapal.com for production
  CALLBACK_URL: 'https://www.brightshitemi.com/#/donate/return',
  IPN_ID: '779d4941-8664-4e31-8e7c-87d21c607f90' // Example ID from registration
};

// Simulated Database
const donations = new Map();

/**
 * Get PesaPal Auth Token
 */
async function getAuthToken() {
  const response = await fetch(`${PESAPAL_CONFIG.BASE_URL}/api/Auth/RequestToken`, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json', 'Accept': 'application/json' },
    body: JSON.stringify({
      consumer_key: PESAPAL_CONFIG.CONSUMER_KEY,
      consumer_secret: PESAPAL_CONFIG.CONSUMER_SECRET
    })
  });
  const data = await response.json();
  if (!response.ok) throw new Error(data.error?.message || 'Auth failed');
  return data.token;
}

/**
 * Create Donation Endpoint
 */
app.post('/api/donations/create', async (req, res) => {
  try {
    const { amount, name, email, phone, currency } = req.body;
    const token = await getAuthToken();
    const merchantRef = `DON-${Date.now()}-${Math.floor(Math.random() * 1000)}`;

    const orderRequest = {
      id: merchantRef,
      currency: currency || 'KES',
      amount: amount,
      description: `Donation by ${name}`,
      callback_url: PESAPAL_CONFIG.CALLBACK_URL,
      notification_id: PESAPAL_CONFIG.IPN_ID,
      billing_address: {
        email_address: email,
        phone_number: phone,
        first_name: name.split(' ')[0],
        last_name: name.split(' ').slice(1).join(' ') || 'Donor'
      }
    };

    const response = await fetch(`${PESAPAL_CONFIG.BASE_URL}/api/Transactions/SubmitOrderRequest`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Accept': 'application/json',
        'Authorization': `Bearer ${token}`
      },
      body: JSON.stringify(orderRequest)
    });

    const result = await response.json();
    if (!response.ok) throw new Error(result.error?.message || 'Order failed');

    // Save pending donation
    donations.set(result.order_tracking_id, {
      merchant_reference: merchantRef,
      amount,
      currency,
      name,
      email,
      phone,
      status: 'PENDING',
      createdAt: new Date()
    });

    res.json({ redirect_url: result.redirect_url, order_tracking_id: result.order_tracking_id });
  } catch (error) {
    console.error('Create Error:', error);
    res.status(500).json({ error: error.message });
  }
});

/**
 * Verify Transaction Status Endpoint (Idempotent)
 */
async function verifyTransaction(orderTrackingId) {
  const token = await getAuthToken();
  const response = await fetch(`${PESAPAL_CONFIG.BASE_URL}/api/Transactions/GetTransactionStatus?orderTrackingId=${orderTrackingId}`, {
    method: 'GET',
    headers: {
      'Accept': 'application/json',
      'Authorization': `Bearer ${token}`
    }
  });

  const statusData = await response.json();
  if (!response.ok) throw new Error(statusData.error?.message || 'Verify failed');

  // Logic: Map PesaPal status codes to our internal statuses
  // 0: INVALID, 1: COMPLETED, 2: FAILED, 3: REVERSED
  const internalStatus = statusData.status_code === 1 ? 'COMPLETED' : 
                         statusData.status_code === 2 ? 'FAILED' : 'PENDING';

  const donation = donations.get(orderTrackingId);
  if (donation) {
    // Only update if not already final
    if (donation.status !== 'COMPLETED') {
      donation.status = internalStatus;
      donation.payment_method = statusData.payment_method;
      donation.updatedAt = new Date();
    }
    return { ...donation, order_tracking_id: orderTrackingId };
  }
  
  return { status: internalStatus, ...statusData };
}

app.get('/api/donations/verify', async (req, res) => {
  try {
    const { orderTrackingId } = req.query;
    if (!orderTrackingId) return res.status(400).json({ error: 'Missing ID' });
    
    const result = await verifyTransaction(orderTrackingId);
    res.json(result);
  } catch (error) {
    console.error('Verify Error:', error);
    res.status(500).json({ error: error.message });
  }
});

/**
 * IPN Receiver (Registered in PesaPal Dashboard)
 */
app.get('/api/pesapal/ipn', async (req, res) => {
  const { OrderTrackingId, OrderNotificationType } = req.query;
  console.log(`IPN Received: ${OrderTrackingId} type: ${OrderNotificationType}`);

  // Immediate 200 OK as per PesaPal requirements
  res.status(200).json({
    orderTrackingId: OrderTrackingId,
    status: "ok"
  });

  // Perform background verification
  if (OrderTrackingId && OrderNotificationType === 'IPNCHANGE') {
    try {
      await verifyTransaction(OrderTrackingId);
      console.log(`IPN Processed for ${OrderTrackingId}`);
    } catch (e) {
      console.error(`IPN Background Verify Failed:`, e);
    }
  }
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => console.log(`Backend running on port ${PORT}`));
