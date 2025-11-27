// ... existing code ...

export const config = {
  // Allow static/runtime assets to bypass auth/middleware
  matcher: [
    '/((?!_next/static|_next/image|favicon.ico|site.webmanifest|robots.txt|sitemap.xml|apple-touch-icon.png|icons|images|public).*)',
  ],
};

// ... rest of file ...