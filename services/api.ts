
const API_BASE_URL = ''; // Relative path to local backend

export const initiatePesapalPayment = async (donation: any) => {
  try {
    const response = await fetch(`${API_BASE_URL}/api/donations/create`, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(donation)
    });

    if (!response.ok) {
      const errorData = await response.json();
      throw new Error(errorData.error || 'Failed to initiate payment');
    }

    return await response.json();
  } catch (error: any) {
    console.error('API Error:', error);
    throw error;
  }
};

export const saveDonation = async (data: any) => {
  // Logic is now handled by the backend 'create' endpoint
  return { status: 'success' };
};

export const sendInquiry = async (data: any) => {
  // Mocking inquiry send
  return { status: 'success' };
};
