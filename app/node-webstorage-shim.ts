// Server-only shim to neutralize Node's experimental WebStorage if present.
// Some environments start Node with flags like:
//   --experimental-webstorage --localstorage-file=...
// That can inject a broken globalThis.localStorage during SSR and crash code that checks for it.
// This shim nullifies those globals on the server so SSR doesn't see them.

function neutralizeStorage(name: 'localStorage' | 'sessionStorage') {
  const g = globalThis as Record<string, unknown>;

  if (!(name in g)) return;

  // Fast path: try to nullify without de-optimizing the global object
  try {
    (g as any)[name] = undefined;
  } catch {
    // ignore if non-writable
  }

  // If still present (e.g., non-writable accessor), try removal as a fallback
  if (typeof (g as any)[name] !== 'undefined') {
    try {
      // Use Reflect.deleteProperty; runs once at boot, so perf impact is negligible
      Reflect.deleteProperty(g, name);
    } catch {
      // ignore if non-configurable
    }
  }
}

if (typeof window === 'undefined') {
  neutralizeStorage('localStorage');
  neutralizeStorage('sessionStorage');
}

// if (typeof window === 'undefined') {
//   try {
//     if ('localStorage' in globalThis) {
//       // deleting injected property if present
//       // eslint-disable-next-line @typescript-eslint/no-dynamic-delete
//       delete (globalThis as Record<string, unknown>)['localStorage'];
//     }
//     if ('sessionStorage' in globalThis) {
//       // deleting injected property if present
//       // eslint-disable-next-line @typescript-eslint/no-dynamic-delete
//       delete (globalThis as Record<string, unknown>)['sessionStorage'];
//     }
//   } catch {}
// }
