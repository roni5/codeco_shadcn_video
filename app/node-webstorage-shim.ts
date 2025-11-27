// Server-only shim to neutralize Node's experimental WebStorage during SSR.
// Prevents crashes when Node is started with flags like:
//   --experimental-webstorage --localstorage-file=...
// by removing globalThis.localStorage/sessionStorage on the server.

function neutralizeStorage(name: 'localStorage' | 'sessionStorage') {
  const g = globalThis as Record<string, unknown>;

  if (!(name in g)) return;

  try {
    g[name] = undefined;
  } catch {
    // non-writable: ignore
  }

  if (typeof g[name] !== 'undefined') {
    try {
      Reflect.deleteProperty(g, name);
    } catch {
      // non-configurable: ignore
    }
  }
}

if (typeof window === 'undefined') {
  neutralizeStorage('localStorage');
  neutralizeStorage('sessionStorage');
}

// Mark this file as a module for TypeScript to silence "is not a module".
export {};



// function neutralizeStorage(name: "localStorage" | "sessionStorage") {
// 	const g = globalThis as Record<string, unknown>;

// 	if (!(name in g)) return;

// 	// Fast path: try to nullify without de-optimizing the global object
// 	try {
// 		(g as Record<string, unknown>)[name] = undefined;
// 	} catch {
// 		// ignore if non-writable
// 	}

// 	// If still present (e.g., non-writable accessor), try removal as a fallback
// 	if (typeof (g as Record<string, unknown>)[name] !== "undefined") {
// 		try {
// 			// Use Reflect.deleteProperty; runs once at boot, so perf impact is negligible
// 			Reflect.deleteProperty(g, name);
// 		} catch {
// 			// ignore if non-configurable
// 		}
// 	}
// }

// if (typeof window === "undefined") {
// 	neutralizeStorage("localStorage");
// 	neutralizeStorage("sessionStorage");
// }

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
