import { NextRequest, NextResponse } from 'next/server'

export function middleware(req: NextRequest) {
  const { pathname } = req.nextUrl
  if (pathname.startsWith('/admin') && !pathname.startsWith('/admin/login')) {
    const session = req.cookies.get('admin_session')
    if (!session || session.value !== process.env.ADMIN_SESSION_SECRET) {
      return NextResponse.redirect(new URL('/admin/login', req.url))
    }
  }
}

export const config = { matcher: ['/admin/:path*'] }
