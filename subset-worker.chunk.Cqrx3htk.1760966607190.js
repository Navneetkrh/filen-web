import { Commands as t, subsetToBinary as e } from "./subset-shared.chunk.YhixWhk2.1760966607190.js";
import "./percentages-BXMCSKIN.D0yBlsLW.1760966607190.js";
import "./index.1760966607190.js";
var i = import.meta.url ? new URL(import.meta.url) : void 0;
typeof window > "u" && typeof self < "u" && (self.onmessage = async (a) => {
  switch (a.data.command) {
    case t.Subset:
      let s = await e(a.data.arrayBuffer, a.data.codePoints);
      self.postMessage(s, { transfer: [s] });
      break;
  }
});
export {
  i as WorkerUrl
};
