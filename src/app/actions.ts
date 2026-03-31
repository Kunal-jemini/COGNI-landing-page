'use server';

export async function submitHomeContact(formData: FormData) {
  // Mock success response (replace with real email/DB later)
  await new Promise(resolve => setTimeout(resolve, 1000)); // Simulate network
  
  return {
    success: true,
    message: 'Thank you! We\'ll respond within 24 hours.'
  };
}