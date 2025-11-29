import { NextResponse } from 'next/server';
import type { NextRequest } from 'next/server';

export function middleware(request: NextRequest): NextResponse {
  // Detect preflight
  const isPreflight = request.method === 'OPTIONS';

  // Echo origin/method/headers for reliable CORS handling
  // Note: If you use cookies/sessions, do not use '*' and do set a specific origin.
  const origin = request.headers.get('origin') ?? '*';
  const requestedMethod =
    request.headers.get('access-control-request-method') ??
    'GET, POST, PUT, PATCH, DELETE, OPTIONS';
  const requestedHeaders =
    request.headers.get('access-control-request-headers') ??
    'Content-Type, Authorization';

  const corsHeaders = new Headers({
    'Access-Control-Allow-Origin': origin,
    // Ensure caches vary by Origin and preflight headers
    Vary: 'Origin, Access-Control-Request-Method, Access-Control-Request-Headers',
    'Access-Control-Allow-Methods': requestedMethod,
    'Access-Control-Allow-Headers': requestedHeaders,
    'Access-Control-Max-Age': '86400',
    // Uncomment if you need cookies/sessions across origins.
    // Then, DO NOT use '*' for Allow-Origin; set it to your site origin.
    // 'Access-Control-Allow-Credentials': 'true',
    // Optionally expose headers to the browser
    // 'Access-Control-Expose-Headers': 'Content-Length, Content-Type',
  });

  if (isPreflight) {
    // Short-circuit preflight
    return new NextResponse(null, { status: 204, headers: corsHeaders });
  }

  // Proceed and attach CORS headers on the response
  const res = NextResponse.next();
  corsHeaders.forEach((v, k) => res.headers.set(k, v));
  return res;
}

export const config = {
  // Apply to API routes and to all non-static pages. Skip Next internals and static assets.
  matcher: ['/api/:path*', '/((?!_next|.*\\..*).*)'],
};

// import { NextResponse } from 'next/server';
// import type { NextRequest } from 'next/server';

// export function middleware(request: NextRequest) {
//   const headers = new Headers({
//     'Access-Control-Allow-Origin': '*',
//     'Access-Control-Allow-Methods': 'GET, POST, PUT, DELETE, OPTIONS',
//     'Access-Control-Allow-Headers': 'Content-Type, Authorization',
//   });

//   if (request.method === 'OPTIONS') {
//     return new NextResponse(null, { headers, status: 204 });
//   }

//   const res = NextResponse.next();
//   headers.forEach((v, k) => res.headers.set(k, v));
//   return res;
// }

// export const config = {
//   matcher: [
//     '/((?!api|_next|.*\\..*).*)',
//   ],
// };

