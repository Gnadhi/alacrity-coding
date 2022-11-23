// The middleware checks if a user is logged in if true it allows the user to access restricted logged in required pages
// https://nextjs.org/docs/advanced-features/middleware
import { createMiddlewareSupabaseClient } from '@supabase/auth-helpers-nextjs';
import { NextResponse } from 'next/server';
import type { NextRequest } from 'next/server';

export async function middleware(req: NextRequest) {
  const res = NextResponse.next();

  const supabase = createMiddlewareSupabaseClient({ req, res });

  const {
    data: { session },
  } = await supabase.auth.getSession();

  // Auth Condition Check
  if (session?.user.email?.endsWith('@gmail.com')) {
    return res;
  }

  const redirectUrl = req.nextUrl.clone();
  redirectUrl.pathname = '/';
  redirectUrl.searchParams.set('redirectedFrom', req.nextUrl.pathname);

  return NextResponse.redirect(redirectUrl);
}

export const config = {
  matcher: '/app/:path*',
};
