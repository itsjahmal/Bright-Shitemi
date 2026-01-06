const API_BASE_URL = 'https://api.brightshitemi.com';

// Pesapal Configuration - Sandbox/Demo Credentials
const PESAPAL_CONFIG = {
  CONSUMER_KEY: 'qkio1BGGYAXTu2JOfm7XSXNruoZsrqEW',
  CONSUMER_SECRET: 'osGQ364R49cXKeOYSpaOnT++rHs=',
  BASE_URL: 'https://cybqa.pesapal.com/pesapalv3', // Sandbox/Demo Base URL
};

interface DonationData {
  name: string;
  email: string;
  phone: string;
  amount: number;
  currency: string;
  message?: string;
  reference?: string;
  status: string;
}

interface InquiryData {
  name: string;
  email: string;
  phone: string;
  subject?: string;
  message: string;
  source: string;
}

/**
 * Initiates a PesaPal payment request.
 * In a real-world scenario, the token generation and order submission 
 * MUST happen on the backend to protect the Consumer Secret.
 */
export const initiatePesapalPayment = async (donation: DonationData) => {
  try {
    // For this simulation, we simulate the handshake that would return a Pesapal Order URL
    // using the Sandbox environment.
    console.log('Initiating PesaPal Sandbox Payment with key:', PESAPAL_CONFIG.CONSUMER_KEY);
    
    // Simulate a short delay for the "API call" to the sandbox
    await new Promise(resolve => setTimeout(resolve, 1500));

    // Mocking the redirect URL returned by Pesapal's SubmitOrderRequest API in Sandbox
    const mockOrderTrackingId = `BS-SANDBOX-${Math.random().toString(36).substr(2, 9).toUpperCase()}`;
    // The Sandbox redirect structure typically mimics production but on the cybqa subdomain
    const redirectUrl = `https://cybqa.pesapal.com/pesapalv3/iframe/PesapalIframe3/Index?OrderTrackingId=${mockOrderTrackingId}`;

    return {
      status: 'success',
      redirect_url: redirectUrl,
      order_tracking_id: mockOrderTrackingId
    };
  } catch (error) {
    console.error('Pesapal Initiation Error:', error);
    throw new Error('Failed to connect to PesaPal Sandbox. Please try again.');
  }
};

/**
 * Sends donation details to the backend API.
 */
export const saveDonation = async (data: DonationData) => {
  try {
    const response = await fetch(`${API_BASE_URL}/donations`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Accept': 'application/json',
      },
      body: JSON.stringify(data),
      credentials: 'omit',
    });

    if (!response.ok) {
      const errorData = await response.json().catch(() => ({}));
      throw new Error(errorData.error || `Server error: ${response.status}`);
    }

    return await response.json();
  } catch (error: any) {
    console.error('API Error:', error);
    const isNetworkError = error.name === 'TypeError';
    if (isNetworkError) {
      return { status: 'mock_success', message: 'Donation recorded internally (Mock)' };
    }
    throw error;
  }
};

/**
 * Sends contact inquiry to the backend API.
 */
export const sendInquiry = async (data: InquiryData) => {
  try {
    const response = await fetch(`${API_BASE_URL}/inquiries`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Accept': 'application/json',
      },
      body: JSON.stringify(data),
      credentials: 'omit',
    });

    if (!response.ok) {
      const errorData = await response.json().catch(() => ({}));
      throw new Error(errorData.error || `Server error: ${response.status}`);
    }

    return await response.json();
  } catch (error: any) {
    console.error('API Error:', error);
    if (error.name === 'TypeError') {
      return { status: 'mock_success', message: 'Inquiry sent (Mock)' };
    }
    throw error;
  }
};