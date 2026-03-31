import { NextRequest, NextResponse } from 'next/server';

export async function POST(request: NextRequest) {
  // Later for backend form handling
  const body = await request.json();
  // Process the contact form data here
  return NextResponse.json({ message: 'Contact form submitted successfully' });
}