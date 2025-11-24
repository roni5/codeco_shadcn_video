// Server-only shim to neutralize Node's experimental WebStorage if present
// Some environments start Node with flags like:
//   --experimental-webstorage --localstorage-file=...
// That can inject a broken globalThis.localStorage during SSR and crash code that checks for it.
// This shim removes those injected globals on the server so SSR doesn't see them.

if (typeof window === 'undefined') {
  try {
    if ('localStorage' in globalThis) {
      // @ts-expect-error: deleting injected property if present
      delete (globalThis as any).localStorage;
    }
    if ('sessionStorage' in globalThis) {
      // @ts-expect-error: deleting injected property if present
      delete (globalThis as any).sessionStorage;
    }
  } catch {}
}
