import { NextResponse } from 'next/server';
 
export async function GET(request: Request) {
  const { searchParams } = new URL(request.url);
  
  const echo = searchParams.get('message');

  return NextResponse.json(`${echo}, it was a pleasure meeting you`);
}