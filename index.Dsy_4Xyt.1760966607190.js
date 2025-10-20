import { a as i, g as f } from "./index.1760966607190.js";
function p(r, n) {
  for (var o = 0; o < n.length; o++) {
    const e = n[o];
    if (typeof e != "string" && !Array.isArray(e)) {
      for (const t in e) if (t !== "default" && !(t in r)) {
        const a = Object.getOwnPropertyDescriptor(e, t);
        a && Object.defineProperty(r, t, a.get ? a : { enumerable: true, get: () => e[t] });
      }
    }
  }
  return Object.freeze(Object.defineProperty(r, Symbol.toStringTag, { value: "Module" }));
}
var s = i();
const c = f(s), g = p({ __proto__: null, default: c }, [s]);
export {
  g as i
};
