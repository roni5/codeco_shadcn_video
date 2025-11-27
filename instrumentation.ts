// Runs once at server/edge boot before any routes.
export async function register() {
  if (typeof window === 'undefined') {
    await import('./app/node-webstorage-shim');
  }
}
// import type { NextConfig } from 'next';

// const nextConfig: NextConfig = {
//   experimental: {
//     instrumentationHook: true
//   }
//   // ... existing config ...
// };

// export default nextConfig;