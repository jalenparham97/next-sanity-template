import { draftMode } from 'next/headers';
import { type NextRequest, NextResponse } from 'next/server';

export async function GET(request: NextRequest) {
  const mode = await draftMode();
  mode.disable();
  const url = new URL(request.nextUrl);
  return NextResponse.redirect(new URL('/', url.origin));
}
