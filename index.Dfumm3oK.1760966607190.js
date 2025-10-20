const __vite__mapDeps=(i,m=__vite__mapDeps,d=(m.f||(m.f=["c4Diagram-3d4e48cf.Bj0Ynon4.1760966607190.js","svgDrawCommon-08f97a94.DPvXNwx2.1760966607190.js","percentages-BXMCSKIN.D0yBlsLW.1760966607190.js","index.1760966607190.js","assets/index-CTYSv12L.1760966607190.css","flowDiagram-66a62f08.CKf1T85G.1760966607190.js","flowDb-956e92f1.B-D1NVQK.1760966607190.js","graph.DhjqBz52.1760966607190.js","layout.CqBSxywX.1760966607190.js","styles-c10674c1.BxyhZVQQ.1760966607190.js","index-3862675e.DqXX75S3.1760966607190.js","clone.BL4jgHi2.1760966607190.js","edges-e0da2a9e.pUEwyU0X.1760966607190.js","createText-2e5e7dd3.BtlU1DrF.1760966607190.js","line.jIL4itrg.1760966607190.js","array.BKyUJesY.1760966607190.js","path.CbwjOpE9.1760966607190.js","channel.BNwECGkz.1760966607190.js","flowDiagram-v2-96b9c2cf.B0YHg3xl.1760966607190.js","erDiagram-9861fffd.Cg5sSXS_.1760966607190.js","gitGraphDiagram-72cf32ee.PZ96C8yd.1760966607190.js","ganttDiagram-c361ad54.CLlhPMYP.1760966607190.js","linear.D9h8z7QS.1760966607190.js","init.Gi6I4Gst.1760966607190.js","infoDiagram-f8f76790.DvYlDL1B.1760966607190.js","pieDiagram-8a3498a8.ByAUFwVZ.1760966607190.js","arc.Budyuigr.1760966607190.js","ordinal.DNLwDuR1.1760966607190.js","quadrantDiagram-120e2f19.tZaLgMNi.1760966607190.js","xychartDiagram-e933f94c.BmU1jZvQ.1760966607190.js","requirementDiagram-deff3bca.BPZdU2Db.1760966607190.js","sequenceDiagram-704730f1.BjJRhqwm.1760966607190.js","classDiagram-70f12bd4.CwmWCD5x.1760966607190.js","styles-9a916d00.Brq39RTM.1760966607190.js","classDiagram-v2-f2320105.CeuigHKD.1760966607190.js","stateDiagram-587899a1.Df1_ajb0.1760966607190.js","styles-6aaf32cf.BcpWhUxF.1760966607190.js","stateDiagram-v2-d93cdb3a.w4s6kNVg.1760966607190.js","journeyDiagram-49397b02.ABDJI9wV.1760966607190.js","flowchart-elk-definition-4a651766.DAQus9T_.1760966607190.js","timeline-definition-85554ec2.CW0gQ76E.1760966607190.js","mindmap-definition-fc14e90a.C-glPoYv.1760966607190.js","sankeyDiagram-04a897e0.DOugCBFg.1760966607190.js","Tableau10.B-NsZVaP.1760966607190.js","blockDiagram-38ab4fdb.DXBBsgUG.1760966607190.js"])))=>i.map(i=>d[i]);
import { g as Vc, m as Hi, _ as J, __tla as __tla_0 } from "./index.1760966607190.js";
import { d as Kc, __tla as __tla_1 } from "./percentages-BXMCSKIN.D0yBlsLW.1760966607190.js";
let ly, fC, to, Wt, Y1, U1, ms, gs, G1, X1, j1, z1, W1, K1, H1, V1, J0, U0, Zs, J1, mo, q, q0, Yt, Z1, V_, iy, gy, rC, Ms, Ff, my, $i, O, D, sC, _i, Wl, xt, Fa, wg, so, vl, xl, Sm, xm, qm, Km, Ni, Ke, xr, Fm, y0, Di, Tr, km, pl, Bg, Lg, me, Ps, Fg, ao, Eg, Mg, Ze, fe, vh, Gg, oo, yt, sd, Vn, Oa, Mi, $a, q1, gh, Kn, le, cs, fd, ki, uh, ke, Um, Pm, Xm, Gm, bl, zr, jr, vr, eC, lo, ml, Pn, Pg, _n, oT, tC, kt, uc, lt, bo, kr, Li, fo, vy, $, Ri, oC, nC, nT, Q_, Mf, iC, Ol, bi, Ey, by, rT, hC, _y;
let __tla = Promise.all([
  (() => {
    try {
      return __tla_0;
    } catch {
    }
  })(),
  (() => {
    try {
      return __tla_1;
    } catch {
    }
  })()
]).then(async () => {
  const Ir = 20, Zc = {
    rect: "rectangle",
    circle: "ellipse"
  }, Ko = {
    startOnLoad: false,
    flowchart: {
      curve: "linear"
    },
    themeVariables: {
      fontSize: `${Ir * 1.25}px`
    },
    maxEdges: 500,
    maxTextSize: 5e4
  };
  class Mr {
    constructor({ converter: e }) {
      this.convert = (i, r) => this.converter(i, {
        ...r,
        fontSize: r.fontSize || Ir
      }), this.converter = e;
    }
  }
  var ye;
  (function(t) {
    t.ROUND = "round", t.STADIUM = "stadium", t.DOUBLECIRCLE = "doublecircle", t.CIRCLE = "circle", t.DIAMOND = "diamond";
  })(ye || (ye = {}));
  var vn;
  (function(t) {
    t.COLOR = "color";
  })(vn || (vn = {}));
  var Me;
  (function(t) {
    t.FILL = "fill", t.STROKE = "stroke", t.STROKE_WIDTH = "stroke-width", t.STROKE_DASHARRAY = "stroke-dasharray";
  })(Me || (Me = {}));
  var ri = {}, Zo;
  function Jc() {
    if (Zo) return ri;
    Zo = 1, Object.defineProperty(ri, "__esModule", {
      value: true
    }), ri.removeMarkdown = void 0;
    var t = function(e, i) {
      i === void 0 && (i = {
        listUnicodeChar: ""
      }), i = i || {}, i.listUnicodeChar = i.hasOwnProperty("listUnicodeChar") ? i.listUnicodeChar : false, i.stripListLeaders = i.hasOwnProperty("stripListLeaders") ? i.stripListLeaders : true, i.gfm = i.hasOwnProperty("gfm") ? i.gfm : true, i.useImgAltText = i.hasOwnProperty("useImgAltText") ? i.useImgAltText : true, i.preserveLinks = i.hasOwnProperty("preserveLinks") ? i.preserveLinks : false;
      var r = e || "";
      r = r.replace(/^(-\s*?|\*\s*?|_\s*?){3,}\s*$/gm, "");
      try {
        i.stripListLeaders && (i.listUnicodeChar ? r = r.replace(/^([\s\t]*)([\*\-\+]|\d+\.)\s+/gm, i.listUnicodeChar + " $1") : r = r.replace(/^([\s\t]*)([\*\-\+]|\d+\.)\s+/gm, "$1")), i.gfm && (r = r.replace(/\n={2,}/g, `
`).replace(/~{3}.*\n/g, "").replace(/~~/g, "").replace(/`{3}.*\n/g, "")), i.preserveLinks && (r = r.replace(/\[(.*?)\][\[\(](.*?)[\]\)]/g, "$1 ($2)")), r = r.replace(/<[^>]*>/g, "").replace(/^[=\-]{2,}\s*$/g, "").replace(/\[\^.+?\](\: .*?$)?/g, "").replace(/\s{0,2}\[.*?\]: .*?$/g, "").replace(/\!\[(.*?)\][\[\(].*?[\]\)]/g, i.useImgAltText ? "$1" : "").replace(/\[(.*?)\][\[\(].*?[\]\)]/g, "$1").replace(/^\s{0,3}>\s?/g, "").replace(/(^|\n)\s{0,3}>\s?/g, `

`).replace(/^\s{1,2}\[(.*?)\]: (\S+)( ".*?")?\s*$/g, "").replace(/^(\n)?\s{0,}#{1,6}\s+| {0,}(\n)?\s{0,}#{0,} {0,}(\n)?\s{0,}$/gm, "$1$2$3").replace(/([\*_]{1,3})(\S.*?\S{0,1})\1/g, "$2").replace(/([\*_]{1,3})(\S.*?\S{0,1})\1/g, "$2").replace(/(`{3,})(.*?)\1/gm, "$2").replace(/`(.+?)`/g, "$1").replace(/\n{2,}/g, `

`);
      } catch (n) {
        return console.error(n), e;
      }
      return r;
    };
    return ri.removeMarkdown = t, ri;
  }
  var Qc = Jc();
  const th = {
    arrow_circle: {
      endArrowhead: "dot"
    },
    arrow_cross: {
      endArrowhead: "bar"
    },
    arrow_open: {
      endArrowhead: null,
      startArrowhead: null
    },
    double_arrow_circle: {
      endArrowhead: "dot",
      startArrowhead: "dot"
    },
    double_arrow_cross: {
      endArrowhead: "bar",
      startArrowhead: "bar"
    },
    double_arrow_point: {
      endArrowhead: "arrow",
      startArrowhead: "arrow"
    }
  }, eh = (t) => th[t], ji = (t) => {
    let e = t.text;
    return t.labelType === "markdown" && (e = Qc.removeMarkdown(t.text)), ih(e);
  }, ih = (t) => {
    const e = /\s?(fa|fab):[a-zA-Z0-9-]+/g;
    return t.replace(e, "");
  }, rh = (t) => {
    const e = {};
    return Object.keys(t).forEach((i) => {
      var _a2;
      switch (i) {
        case Me.FILL: {
          e.backgroundColor = t[i], e.fillStyle = "solid";
          break;
        }
        case Me.STROKE: {
          e.strokeColor = t[i];
          break;
        }
        case Me.STROKE_WIDTH: {
          e.strokeWidth = Number((_a2 = t[i]) == null ? void 0 : _a2.split("px")[0]);
          break;
        }
        case Me.STROKE_DASHARRAY: {
          e.strokeStyle = "dashed";
          break;
        }
      }
    }), e;
  }, nh = (t) => {
    const e = {};
    return Object.keys(t).forEach((i) => {
      switch (i) {
        case vn.COLOR: {
          e.strokeColor = t[i];
          break;
        }
      }
    }), e;
  }, oh = (t) => {
    const e = {};
    t.subGraphs.map((r) => {
      r.nodeIds.forEach((n) => {
        e[r.id] = {
          id: r.id,
          parent: null,
          isLeaf: false
        }, e[n] = {
          id: n,
          parent: r.id,
          isLeaf: t.vertices[n] !== void 0
        };
      });
    });
    const i = {};
    return [
      ...Object.keys(t.vertices),
      ...t.subGraphs.map((r) => r.id)
    ].forEach((r) => {
      if (!e[r]) return;
      let n = e[r];
      const s = [];
      for (n.isLeaf || s.push(`subgraph_group_${n.id}`); n.parent; ) s.push(`subgraph_group_${n.parent}`), n = e[n.parent];
      i[r] = s;
    }), {
      getGroupIds: (r) => i[r] || [],
      getParentId: (r) => e[r] ? e[r].parent : null
    };
  }, sh = new Mr({
    converter: (t, e) => {
      const i = [], r = e.fontSize, { getGroupIds: n, getParentId: s } = oh(t);
      return t.subGraphs.reverse().forEach((o) => {
        const a = n(o.id), l = {
          id: o.id,
          type: "rectangle",
          groupIds: a,
          x: o.x,
          y: o.y,
          width: o.width,
          height: o.height,
          label: {
            groupIds: a,
            text: ji(o),
            fontSize: r,
            verticalAlign: "top"
          }
        };
        i.push(l);
      }), Object.values(t.vertices).forEach((o) => {
        if (!o) return;
        const a = n(o.id), l = rh(o.containerStyle), c = nh(o.labelStyle);
        let h = {
          id: o.id,
          type: "rectangle",
          groupIds: a,
          x: o.x,
          y: o.y,
          width: o.width,
          height: o.height,
          strokeWidth: 2,
          label: {
            groupIds: a,
            text: ji(o),
            fontSize: r,
            ...c
          },
          link: o.link || null,
          ...l
        };
        switch (o.type) {
          case ye.STADIUM: {
            h = {
              ...h,
              roundness: {
                type: 3
              }
            };
            break;
          }
          case ye.ROUND: {
            h = {
              ...h,
              roundness: {
                type: 3
              }
            };
            break;
          }
          case ye.DOUBLECIRCLE: {
            a.push(`doublecircle_${o.id}}`);
            const u = {
              type: "ellipse",
              groupIds: a,
              x: o.x + 5,
              y: o.y + 5,
              width: o.width - 5 * 2,
              height: o.height - 5 * 2,
              strokeWidth: 2,
              roundness: {
                type: 3
              },
              label: {
                groupIds: a,
                text: ji(o),
                fontSize: r
              }
            };
            h = {
              ...h,
              groupIds: a,
              type: "ellipse"
            }, i.push(u);
            break;
          }
          case ye.CIRCLE: {
            h.type = "ellipse";
            break;
          }
          case ye.DIAMOND: {
            h.type = "diamond";
            break;
          }
        }
        i.push(h);
      }), t.edges.forEach((o) => {
        let a = [];
        const l = s(o.start), c = s(o.end);
        l && l === c && (a = n(l));
        const { startX: h, startY: d, reflectionPoints: u } = o, f = u.map((x) => [
          x.x - u[0].x,
          x.y - u[0].y
        ]), m = eh(o.type), T = {
          id: `${o.start}_${o.end}`,
          type: "arrow",
          groupIds: a,
          x: h,
          y: d,
          strokeWidth: o.stroke === "thick" ? 4 : 2,
          strokeStyle: o.stroke === "dotted" ? "dashed" : void 0,
          points: f,
          ...o.text ? {
            label: {
              text: ji(o),
              fontSize: r,
              groupIds: a
            }
          } : {},
          roundness: {
            type: 2
          },
          ...m
        }, E = i.find((x) => x.id === o.start), C = i.find((x) => x.id === o.end);
        !E || !C || (T.start = {
          id: E.id || ""
        }, T.end = {
          id: C.id || ""
        }, i.push(T));
      }), {
        elements: i
      };
    }
  });
  let Qt = (t = 21) => crypto.getRandomValues(new Uint8Array(t)).reduce((e, i) => (i &= 63, i < 36 ? e += i.toString(36) : i < 62 ? e += (i - 26).toString(36).toUpperCase() : i > 62 ? e += "-" : e += "_", e), "");
  const ah = new Mr({
    converter: (t) => {
      const e = Qt(), { width: i, height: r } = t, n = {
        type: "image",
        x: 0,
        y: 0,
        width: i,
        height: r,
        status: "saved",
        fileId: e
      };
      return {
        files: {
          [e]: {
            id: e,
            mimeType: t.mimeType,
            dataURL: t.dataURL
          }
        },
        elements: [
          n
        ]
      };
    }
  }), Un = (t) => t.replace(/\\n/g, `
`), mi = (t) => {
    const e = {
      type: "line",
      x: t.startX,
      y: t.startY,
      points: [
        [
          0,
          0
        ],
        [
          t.endX - t.startX,
          t.endY - t.startY
        ]
      ],
      width: t.endX - t.startX,
      height: t.endY - t.startY,
      strokeStyle: t.strokeStyle || "solid",
      strokeColor: t.strokeColor || "#000",
      strokeWidth: t.strokeWidth || 1
    };
    return t.groupId && Object.assign(e, {
      groupIds: [
        t.groupId
      ]
    }), t.id && Object.assign(e, {
      id: t.id
    }), e;
  }, hr = (t) => {
    const e = {
      type: "text",
      x: t.x,
      y: t.y,
      width: t.width,
      height: t.height,
      text: Un(t.text) || "",
      fontSize: t.fontSize,
      verticalAlign: "middle"
    };
    return t.groupId && Object.assign(e, {
      groupIds: [
        t.groupId
      ]
    }), t.id && Object.assign(e, {
      id: t.id
    }), e;
  }, ui = (t) => {
    var _a2, _b2, _c2, _d2;
    let e = {};
    t.type === "rectangle" && t.subtype === "activation" && (e = {
      backgroundColor: "#e9ecef",
      fillStyle: "solid"
    });
    const i = {
      id: t.id,
      type: t.type,
      x: t.x,
      y: t.y,
      width: t.width,
      height: t.height,
      label: {
        text: Un(((_a2 = t == null ? void 0 : t.label) == null ? void 0 : _a2.text) || ""),
        fontSize: (_b2 = t == null ? void 0 : t.label) == null ? void 0 : _b2.fontSize,
        verticalAlign: ((_c2 = t.label) == null ? void 0 : _c2.verticalAlign) || "middle",
        strokeColor: ((_d2 = t.label) == null ? void 0 : _d2.color) || "#000",
        groupIds: t.groupId ? [
          t.groupId
        ] : []
      },
      strokeStyle: t == null ? void 0 : t.strokeStyle,
      strokeWidth: t == null ? void 0 : t.strokeWidth,
      strokeColor: t == null ? void 0 : t.strokeColor,
      backgroundColor: t == null ? void 0 : t.bgColor,
      fillStyle: "solid",
      ...e
    };
    return t.groupId && Object.assign(i, {
      groupIds: [
        t.groupId
      ]
    }), i;
  }, _a = (t) => {
    var _a2;
    const e = {
      type: "arrow",
      x: t.startX,
      y: t.startY,
      points: t.points || [
        [
          0,
          0
        ],
        [
          t.endX - t.startX,
          t.endY - t.startY
        ]
      ],
      width: t.endX - t.startX,
      height: t.endY - t.startY,
      strokeStyle: (t == null ? void 0 : t.strokeStyle) || "solid",
      endArrowhead: (t == null ? void 0 : t.endArrowhead) || null,
      startArrowhead: (t == null ? void 0 : t.startArrowhead) || null,
      label: {
        text: Un(((_a2 = t == null ? void 0 : t.label) == null ? void 0 : _a2.text) || ""),
        fontSize: 16
      },
      roundness: {
        type: 2
      },
      start: t.start,
      end: t.end
    };
    return t.groupId && Object.assign(e, {
      groupIds: [
        t.groupId
      ]
    }), e;
  }, lh = new Mr({
    converter: (t) => {
      const e = [], i = [];
      if (Object.values(t.nodes).forEach((r) => {
        !r || !r.length || r.forEach((n) => {
          let s;
          switch (n.type) {
            case "line":
              s = mi(n);
              break;
            case "rectangle":
            case "ellipse":
              s = ui(n);
              break;
            case "text":
              s = hr(n);
              break;
            default:
              throw `unknown type ${n.type}`;
          }
          n.type === "rectangle" && (n == null ? void 0 : n.subtype) === "activation" ? i.push(s) : e.push(s);
        });
      }), Object.values(t.lines).forEach((r) => {
        r && e.push(mi(r));
      }), Object.values(t.arrows).forEach((r) => {
        r && (e.push(_a(r)), r.sequenceNumber && e.push(ui(r.sequenceNumber)));
      }), e.push(...i), t.loops) {
        const { lines: r, texts: n, nodes: s } = t.loops;
        r.forEach((o) => {
          e.push(mi(o));
        }), n.forEach((o) => {
          e.push(hr(o));
        }), s.forEach((o) => {
          e.push(ui(o));
        });
      }
      return t.groups && t.groups.forEach((r) => {
        const { actorKeys: n, name: s } = r;
        let o = 1 / 0, a = 1 / 0, l = 0, c = 0;
        if (!n.length) return;
        e.filter((w) => {
          if (w.id) {
            const Y = w.id.indexOf("-"), N = w.id.substring(0, Y);
            return n.includes(N);
          }
        }).forEach((w) => {
          if (w.x === void 0 || w.y === void 0 || w.width === void 0 || w.height === void 0) throw new Error(`Actor attributes missing ${w}`);
          o = Math.min(o, w.x), a = Math.min(a, w.y), l = Math.max(l, w.x + w.width), c = Math.max(c, w.y + w.height);
        });
        const d = 10, u = o - d, f = a - d, m = l - o + d * 2, y = c - a + d * 2, T = Qt(), E = ui({
          type: "rectangle",
          x: u,
          y: f,
          width: m,
          height: y,
          bgColor: r.fill,
          id: T
        });
        e.unshift(E);
        const C = Qt(), x = [
          T
        ];
        e.forEach((w) => {
          if (w.type !== "frame") {
            if (w.x === void 0 || w.y === void 0 || w.width === void 0 || w.height === void 0) throw new Error(`Element attributes missing ${w}`);
            if (w.x >= o && w.x + w.width <= l && w.y >= a && w.y + w.height <= c) {
              const Y = w.id || Qt();
              w.id || Object.assign(w, {
                id: Y
              }), x.push(Y);
            }
          }
        });
        const B = {
          type: "frame",
          id: C,
          name: s,
          children: x
        };
        e.push(B);
      }), {
        elements: e
      };
    }
  }), ch = new Mr({
    converter: (t) => {
      const e = [];
      return Object.values(t.nodes).forEach((i) => {
        !i || !i.length || i.forEach((r) => {
          let n;
          switch (r.type) {
            case "line":
              n = mi(r);
              break;
            case "rectangle":
            case "ellipse":
              n = ui(r);
              break;
            case "text":
              n = hr(r);
              break;
            default:
              throw `unknown type ${r.type}`;
          }
          e.push(n);
        });
      }), Object.values(t.lines).forEach((i) => {
        i && e.push(mi(i));
      }), Object.values(t.arrows).forEach((i) => {
        if (!i) return;
        const r = _a(i);
        e.push(r);
      }), Object.values(t.text).forEach((i) => {
        const r = hr(i);
        e.push(r);
      }), Object.values(t.namespaces).forEach((i) => {
        const r = Object.keys(i.classes), n = [
          ...r
        ], s = [
          ...t.lines,
          ...t.arrows,
          ...t.text
        ];
        r.forEach((a) => {
          const l = s.filter((c) => c.metadata && c.metadata.classId === a).map((c) => c.id);
          l.length && n.push(...l);
        });
        const o = {
          type: "frame",
          id: Qt(),
          name: i.id,
          children: n
        };
        e.push(o);
      }), {
        elements: e
      };
    }
  }), hh = (t, e = {}) => {
    switch (t.type) {
      case "graphImage":
        return ah.convert(t, e);
      case "flowchart":
        return sh.convert(t, e);
      case "sequence":
        return lh.convert(t, e);
      case "class":
        return ch.convert(t, e);
      default:
        throw new Error(`graphToExcalidraw: unknown graph type "${t.type}, only flowcharts are supported!"`);
    }
  };
  uh = function(t) {
    for (var e = [], i = 1; i < arguments.length; i++) e[i - 1] = arguments[i];
    var r = Array.from(typeof t == "string" ? [
      t
    ] : t);
    r[r.length - 1] = r[r.length - 1].replace(/\r?\n([\t ]*)$/, "");
    var n = r.reduce(function(a, l) {
      var c = l.match(/\n([\t ]+|(?!\s).)/g);
      return c ? a.concat(c.map(function(h) {
        var d, u;
        return (u = (d = h.match(/[\t ]/g)) === null || d === void 0 ? void 0 : d.length) !== null && u !== void 0 ? u : 0;
      })) : a;
    }, []);
    if (n.length) {
      var s = new RegExp(`
[	 ]{` + Math.min.apply(Math, n) + "}", "g");
      r = r.map(function(a) {
        return a.replace(s, `
`);
      });
    }
    r[0] = r[0].replace(/^\r?\n/, "");
    var o = r[0];
    return e.forEach(function(a, l) {
      var c = o.match(/(?:^|\n)( *)$/), h = c ? c[1] : "", d = a;
      typeof a == "string" && a.includes(`
`) && (d = String(a).split(`
`).map(function(u, f) {
        return f === 0 ? u : "" + h + u;
      }).join(`
`)), o += d + r[l + 1];
    }), o;
  };
  var tr = {
    exports: {}
  }, dh = tr.exports, Jo;
  function fh() {
    return Jo || (Jo = 1, function(t, e) {
      (function(i, r) {
        t.exports = r();
      })(dh, function() {
        var i = 1e3, r = 6e4, n = 36e5, s = "millisecond", o = "second", a = "minute", l = "hour", c = "day", h = "week", d = "month", u = "quarter", f = "year", m = "date", y = "Invalid Date", T = /^(\d{4})[-/]?(\d{1,2})?[-/]?(\d{0,2})[Tt\s]*(\d{1,2})?:?(\d{1,2})?:?(\d{1,2})?[.:]?(\d+)?$/, E = /\[([^\]]+)]|Y{1,4}|M{1,4}|D{1,2}|d{1,4}|H{1,2}|h{1,2}|a|A|m{1,2}|s{1,2}|Z{1,2}|SSS/g, C = {
          name: "en",
          weekdays: "Sunday_Monday_Tuesday_Wednesday_Thursday_Friday_Saturday".split("_"),
          months: "January_February_March_April_May_June_July_August_September_October_November_December".split("_"),
          ordinal: function(R) {
            var k = [
              "th",
              "st",
              "nd",
              "rd"
            ], b = R % 100;
            return "[" + R + (k[(b - 20) % 10] || k[b] || k[0]) + "]";
          }
        }, x = function(R, k, b) {
          var L = String(R);
          return !L || L.length >= k ? R : "" + Array(k + 1 - L.length).join(b) + R;
        }, B = {
          s: x,
          z: function(R) {
            var k = -R.utcOffset(), b = Math.abs(k), L = Math.floor(b / 60), S = b % 60;
            return (k <= 0 ? "+" : "-") + x(L, 2, "0") + ":" + x(S, 2, "0");
          },
          m: function R(k, b) {
            if (k.date() < b.date()) return -R(b, k);
            var L = 12 * (b.year() - k.year()) + (b.month() - k.month()), S = k.clone().add(L, d), M = b - S < 0, W = k.clone().add(L + (M ? -1 : 1), d);
            return +(-(L + (b - S) / (M ? S - W : W - S)) || 0);
          },
          a: function(R) {
            return R < 0 ? Math.ceil(R) || 0 : Math.floor(R);
          },
          p: function(R) {
            return {
              M: d,
              y: f,
              w: h,
              d: c,
              D: m,
              h: l,
              m: a,
              s: o,
              ms: s,
              Q: u
            }[R] || String(R || "").toLowerCase().replace(/s$/, "");
          },
          u: function(R) {
            return R === void 0;
          }
        }, w = "en", Y = {};
        Y[w] = C;
        var N = "$isDayjsObject", rt = function(R) {
          return R instanceof Et || !(!R || !R[N]);
        }, V = function R(k, b, L) {
          var S;
          if (!k) return w;
          if (typeof k == "string") {
            var M = k.toLowerCase();
            Y[M] && (S = M), b && (Y[M] = b, S = M);
            var W = k.split("-");
            if (!S && W.length > 1) return R(W[0]);
          } else {
            var z = k.name;
            Y[z] = k, S = z;
          }
          return !L && S && (w = S), S || !L && w;
        }, H = function(R, k) {
          if (rt(R)) return R.clone();
          var b = typeof k == "object" ? k : {};
          return b.date = R, b.args = arguments, new Et(b);
        }, P = B;
        P.l = V, P.i = rt, P.w = function(R, k) {
          return H(R, {
            locale: k.$L,
            utc: k.$u,
            x: k.$x,
            $offset: k.$offset
          });
        };
        var Et = function() {
          function R(b) {
            this.$L = V(b.locale, null, true), this.parse(b), this.$x = this.$x || b.x || {}, this[N] = true;
          }
          var k = R.prototype;
          return k.parse = function(b) {
            this.$d = function(L) {
              var S = L.date, M = L.utc;
              if (S === null) return /* @__PURE__ */ new Date(NaN);
              if (P.u(S)) return /* @__PURE__ */ new Date();
              if (S instanceof Date) return new Date(S);
              if (typeof S == "string" && !/Z$/i.test(S)) {
                var W = S.match(T);
                if (W) {
                  var z = W[2] - 1 || 0, Z = (W[7] || "0").substring(0, 3);
                  return M ? new Date(Date.UTC(W[1], z, W[3] || 1, W[4] || 0, W[5] || 0, W[6] || 0, Z)) : new Date(W[1], z, W[3] || 1, W[4] || 0, W[5] || 0, W[6] || 0, Z);
                }
              }
              return new Date(S);
            }(b), this.init();
          }, k.init = function() {
            var b = this.$d;
            this.$y = b.getFullYear(), this.$M = b.getMonth(), this.$D = b.getDate(), this.$W = b.getDay(), this.$H = b.getHours(), this.$m = b.getMinutes(), this.$s = b.getSeconds(), this.$ms = b.getMilliseconds();
          }, k.$utils = function() {
            return P;
          }, k.isValid = function() {
            return this.$d.toString() !== y;
          }, k.isSame = function(b, L) {
            var S = H(b);
            return this.startOf(L) <= S && S <= this.endOf(L);
          }, k.isAfter = function(b, L) {
            return H(b) < this.startOf(L);
          }, k.isBefore = function(b, L) {
            return this.endOf(L) < H(b);
          }, k.$g = function(b, L, S) {
            return P.u(b) ? this[L] : this.set(S, b);
          }, k.unix = function() {
            return Math.floor(this.valueOf() / 1e3);
          }, k.valueOf = function() {
            return this.$d.getTime();
          }, k.startOf = function(b, L) {
            var S = this, M = !!P.u(L) || L, W = P.p(b), z = function(Lt, nt) {
              var Ft = P.w(S.$u ? Date.UTC(S.$y, nt, Lt) : new Date(S.$y, nt, Lt), S);
              return M ? Ft : Ft.endOf(c);
            }, Z = function(Lt, nt) {
              return P.w(S.toDate()[Lt].apply(S.toDate("s"), (M ? [
                0,
                0,
                0,
                0
              ] : [
                23,
                59,
                59,
                999
              ]).slice(nt)), S);
            }, j = this.$W, et = this.$M, X = this.$D, Tt = "set" + (this.$u ? "UTC" : "");
            switch (W) {
              case f:
                return M ? z(1, 0) : z(31, 11);
              case d:
                return M ? z(1, et) : z(0, et + 1);
              case h:
                var Bt = this.$locale().weekStart || 0, ne = (j < Bt ? j + 7 : j) - Bt;
                return z(M ? X - ne : X + (6 - ne), et);
              case c:
              case m:
                return Z(Tt + "Hours", 0);
              case l:
                return Z(Tt + "Minutes", 1);
              case a:
                return Z(Tt + "Seconds", 2);
              case o:
                return Z(Tt + "Milliseconds", 3);
              default:
                return this.clone();
            }
          }, k.endOf = function(b) {
            return this.startOf(b, false);
          }, k.$set = function(b, L) {
            var S, M = P.p(b), W = "set" + (this.$u ? "UTC" : ""), z = (S = {}, S[c] = W + "Date", S[m] = W + "Date", S[d] = W + "Month", S[f] = W + "FullYear", S[l] = W + "Hours", S[a] = W + "Minutes", S[o] = W + "Seconds", S[s] = W + "Milliseconds", S)[M], Z = M === c ? this.$D + (L - this.$W) : L;
            if (M === d || M === f) {
              var j = this.clone().set(m, 1);
              j.$d[z](Z), j.init(), this.$d = j.set(m, Math.min(this.$D, j.daysInMonth())).$d;
            } else z && this.$d[z](Z);
            return this.init(), this;
          }, k.set = function(b, L) {
            return this.clone().$set(b, L);
          }, k.get = function(b) {
            return this[P.p(b)]();
          }, k.add = function(b, L) {
            var S, M = this;
            b = Number(b);
            var W = P.p(L), z = function(et) {
              var X = H(M);
              return P.w(X.date(X.date() + Math.round(et * b)), M);
            };
            if (W === d) return this.set(d, this.$M + b);
            if (W === f) return this.set(f, this.$y + b);
            if (W === c) return z(1);
            if (W === h) return z(7);
            var Z = (S = {}, S[a] = r, S[l] = n, S[o] = i, S)[W] || 1, j = this.$d.getTime() + b * Z;
            return P.w(j, this);
          }, k.subtract = function(b, L) {
            return this.add(-1 * b, L);
          }, k.format = function(b) {
            var L = this, S = this.$locale();
            if (!this.isValid()) return S.invalidDate || y;
            var M = b || "YYYY-MM-DDTHH:mm:ssZ", W = P.z(this), z = this.$H, Z = this.$m, j = this.$M, et = S.weekdays, X = S.months, Tt = S.meridiem, Bt = function(nt, Ft, vt, oe) {
              return nt && (nt[Ft] || nt(L, M)) || vt[Ft].slice(0, oe);
            }, ne = function(nt) {
              return P.s(z % 12 || 12, nt, "0");
            }, Lt = Tt || function(nt, Ft, vt) {
              var oe = nt < 12 ? "AM" : "PM";
              return vt ? oe.toLowerCase() : oe;
            };
            return M.replace(E, function(nt, Ft) {
              return Ft || function(vt) {
                switch (vt) {
                  case "YY":
                    return String(L.$y).slice(-2);
                  case "YYYY":
                    return P.s(L.$y, 4, "0");
                  case "M":
                    return j + 1;
                  case "MM":
                    return P.s(j + 1, 2, "0");
                  case "MMM":
                    return Bt(S.monthsShort, j, X, 3);
                  case "MMMM":
                    return Bt(X, j);
                  case "D":
                    return L.$D;
                  case "DD":
                    return P.s(L.$D, 2, "0");
                  case "d":
                    return String(L.$W);
                  case "dd":
                    return Bt(S.weekdaysMin, L.$W, et, 2);
                  case "ddd":
                    return Bt(S.weekdaysShort, L.$W, et, 3);
                  case "dddd":
                    return et[L.$W];
                  case "H":
                    return String(z);
                  case "HH":
                    return P.s(z, 2, "0");
                  case "h":
                    return ne(1);
                  case "hh":
                    return ne(2);
                  case "a":
                    return Lt(z, Z, true);
                  case "A":
                    return Lt(z, Z, false);
                  case "m":
                    return String(Z);
                  case "mm":
                    return P.s(Z, 2, "0");
                  case "s":
                    return String(L.$s);
                  case "ss":
                    return P.s(L.$s, 2, "0");
                  case "SSS":
                    return P.s(L.$ms, 3, "0");
                  case "Z":
                    return W;
                }
                return null;
              }(nt) || W.replace(":", "");
            });
          }, k.utcOffset = function() {
            return 15 * -Math.round(this.$d.getTimezoneOffset() / 15);
          }, k.diff = function(b, L, S) {
            var M, W = this, z = P.p(L), Z = H(b), j = (Z.utcOffset() - this.utcOffset()) * r, et = this - Z, X = function() {
              return P.m(W, Z);
            };
            switch (z) {
              case f:
                M = X() / 12;
                break;
              case d:
                M = X();
                break;
              case u:
                M = X() / 3;
                break;
              case h:
                M = (et - j) / 6048e5;
                break;
              case c:
                M = (et - j) / 864e5;
                break;
              case l:
                M = et / n;
                break;
              case a:
                M = et / r;
                break;
              case o:
                M = et / i;
                break;
              default:
                M = et;
            }
            return S ? M : P.a(M);
          }, k.daysInMonth = function() {
            return this.endOf(d).$D;
          }, k.$locale = function() {
            return Y[this.$L];
          }, k.locale = function(b, L) {
            if (!b) return this.$L;
            var S = this.clone(), M = V(b, L, true);
            return M && (S.$L = M), S;
          }, k.clone = function() {
            return P.w(this.$d, this);
          }, k.toDate = function() {
            return new Date(this.valueOf());
          }, k.toJSON = function() {
            return this.isValid() ? this.toISOString() : null;
          }, k.toISOString = function() {
            return this.$d.toISOString();
          }, k.toString = function() {
            return this.$d.toUTCString();
          }, R;
        }(), re = Et.prototype;
        return H.prototype = re, [
          [
            "$ms",
            s
          ],
          [
            "$s",
            o
          ],
          [
            "$m",
            a
          ],
          [
            "$H",
            l
          ],
          [
            "$W",
            c
          ],
          [
            "$M",
            d
          ],
          [
            "$y",
            f
          ],
          [
            "$D",
            m
          ]
        ].forEach(function(R) {
          re[R[1]] = function(k) {
            return this.$g(k, R[0], R[1]);
          };
        }), H.extend = function(R, k) {
          return R.$i || (R(k, Et, H), R.$i = true), H;
        }, H.locale = V, H.isDayjs = rt, H.unix = function(R) {
          return H(1e3 * R);
        }, H.en = Y[w], H.Ls = Y, H.p = {}, H;
      });
    }(tr)), tr.exports;
  }
  var ph = fh();
  gh = Vc(ph);
  var mh = {
    value: () => {
    }
  };
  function Ca() {
    for (var t = 0, e = arguments.length, i = {}, r; t < e; ++t) {
      if (!(r = arguments[t] + "") || r in i || /[\s.]/.test(r)) throw new Error("illegal type: " + r);
      i[r] = [];
    }
    return new er(i);
  }
  function er(t) {
    this._ = t;
  }
  function yh(t, e) {
    return t.trim().split(/^|\s+/).map(function(i) {
      var r = "", n = i.indexOf(".");
      if (n >= 0 && (r = i.slice(n + 1), i = i.slice(0, n)), i && !e.hasOwnProperty(i)) throw new Error("unknown type: " + i);
      return {
        type: i,
        name: r
      };
    });
  }
  er.prototype = Ca.prototype = {
    constructor: er,
    on: function(t, e) {
      var i = this._, r = yh(t + "", i), n, s = -1, o = r.length;
      if (arguments.length < 2) {
        for (; ++s < o; ) if ((n = (t = r[s]).type) && (n = _h(i[n], t.name))) return n;
        return;
      }
      if (e != null && typeof e != "function") throw new Error("invalid callback: " + e);
      for (; ++s < o; ) if (n = (t = r[s]).type) i[n] = Qo(i[n], t.name, e);
      else if (e == null) for (n in i) i[n] = Qo(i[n], t.name, null);
      return this;
    },
    copy: function() {
      var t = {}, e = this._;
      for (var i in e) t[i] = e[i].slice();
      return new er(t);
    },
    call: function(t, e) {
      if ((n = arguments.length - 2) > 0) for (var i = new Array(n), r = 0, n, s; r < n; ++r) i[r] = arguments[r + 2];
      if (!this._.hasOwnProperty(t)) throw new Error("unknown type: " + t);
      for (s = this._[t], r = 0, n = s.length; r < n; ++r) s[r].value.apply(e, i);
    },
    apply: function(t, e, i) {
      if (!this._.hasOwnProperty(t)) throw new Error("unknown type: " + t);
      for (var r = this._[t], n = 0, s = r.length; n < s; ++n) r[n].value.apply(e, i);
    }
  };
  function _h(t, e) {
    for (var i = 0, r = t.length, n; i < r; ++i) if ((n = t[i]).name === e) return n.value;
  }
  function Qo(t, e, i) {
    for (var r = 0, n = t.length; r < n; ++r) if (t[r].name === e) {
      t[r] = mh, t = t.slice(0, r).concat(t.slice(r + 1));
      break;
    }
    return i != null && t.push({
      name: e,
      value: i
    }), t;
  }
  var Sn = "http://www.w3.org/1999/xhtml";
  const ts = {
    svg: "http://www.w3.org/2000/svg",
    xhtml: Sn,
    xlink: "http://www.w3.org/1999/xlink",
    xml: "http://www.w3.org/XML/1998/namespace",
    xmlns: "http://www.w3.org/2000/xmlns/"
  };
  function $r(t) {
    var e = t += "", i = e.indexOf(":");
    return i >= 0 && (e = t.slice(0, i)) !== "xmlns" && (t = t.slice(i + 1)), ts.hasOwnProperty(e) ? {
      space: ts[e],
      local: t
    } : t;
  }
  function Ch(t) {
    return function() {
      var e = this.ownerDocument, i = this.namespaceURI;
      return i === Sn && e.documentElement.namespaceURI === Sn ? e.createElement(t) : e.createElementNS(i, t);
    };
  }
  function xh(t) {
    return function() {
      return this.ownerDocument.createElementNS(t.space, t.local);
    };
  }
  function xa(t) {
    var e = $r(t);
    return (e.local ? xh : Ch)(e);
  }
  function bh() {
  }
  function Xn(t) {
    return t == null ? bh : function() {
      return this.querySelector(t);
    };
  }
  function Th(t) {
    typeof t != "function" && (t = Xn(t));
    for (var e = this._groups, i = e.length, r = new Array(i), n = 0; n < i; ++n) for (var s = e[n], o = s.length, a = r[n] = new Array(o), l, c, h = 0; h < o; ++h) (l = s[h]) && (c = t.call(l, l.__data__, h, s)) && ("__data__" in l && (c.__data__ = l.__data__), a[h] = c);
    return new xt(r, this._parents);
  }
  vh = function(t) {
    return t == null ? [] : Array.isArray(t) ? t : Array.from(t);
  };
  function Sh() {
    return [];
  }
  function ba(t) {
    return t == null ? Sh : function() {
      return this.querySelectorAll(t);
    };
  }
  function kh(t) {
    return function() {
      return vh(t.apply(this, arguments));
    };
  }
  function wh(t) {
    typeof t == "function" ? t = kh(t) : t = ba(t);
    for (var e = this._groups, i = e.length, r = [], n = [], s = 0; s < i; ++s) for (var o = e[s], a = o.length, l, c = 0; c < a; ++c) (l = o[c]) && (r.push(t.call(l, l.__data__, c, o)), n.push(l));
    return new xt(r, n);
  }
  function Ta(t) {
    return function() {
      return this.matches(t);
    };
  }
  function va(t) {
    return function(e) {
      return e.matches(t);
    };
  }
  var Ah = Array.prototype.find;
  function Eh(t) {
    return function() {
      return Ah.call(this.children, t);
    };
  }
  function Bh() {
    return this.firstElementChild;
  }
  function Lh(t) {
    return this.select(t == null ? Bh : Eh(typeof t == "function" ? t : va(t)));
  }
  var Fh = Array.prototype.filter;
  function Oh() {
    return Array.from(this.children);
  }
  function Ih(t) {
    return function() {
      return Fh.call(this.children, t);
    };
  }
  function Mh(t) {
    return this.selectAll(t == null ? Oh : Ih(typeof t == "function" ? t : va(t)));
  }
  function $h(t) {
    typeof t != "function" && (t = Ta(t));
    for (var e = this._groups, i = e.length, r = new Array(i), n = 0; n < i; ++n) for (var s = e[n], o = s.length, a = r[n] = [], l, c = 0; c < o; ++c) (l = s[c]) && t.call(l, l.__data__, c, s) && a.push(l);
    return new xt(r, this._parents);
  }
  function Sa(t) {
    return new Array(t.length);
  }
  function Dh() {
    return new xt(this._enter || this._groups.map(Sa), this._parents);
  }
  function ur(t, e) {
    this.ownerDocument = t.ownerDocument, this.namespaceURI = t.namespaceURI, this._next = null, this._parent = t, this.__data__ = e;
  }
  ur.prototype = {
    constructor: ur,
    appendChild: function(t) {
      return this._parent.insertBefore(t, this._next);
    },
    insertBefore: function(t, e) {
      return this._parent.insertBefore(t, e);
    },
    querySelector: function(t) {
      return this._parent.querySelector(t);
    },
    querySelectorAll: function(t) {
      return this._parent.querySelectorAll(t);
    }
  };
  function Nh(t) {
    return function() {
      return t;
    };
  }
  function Rh(t, e, i, r, n, s) {
    for (var o = 0, a, l = e.length, c = s.length; o < c; ++o) (a = e[o]) ? (a.__data__ = s[o], r[o] = a) : i[o] = new ur(t, s[o]);
    for (; o < l; ++o) (a = e[o]) && (n[o] = a);
  }
  function Ph(t, e, i, r, n, s, o) {
    var a, l, c = /* @__PURE__ */ new Map(), h = e.length, d = s.length, u = new Array(h), f;
    for (a = 0; a < h; ++a) (l = e[a]) && (u[a] = f = o.call(l, l.__data__, a, e) + "", c.has(f) ? n[a] = l : c.set(f, l));
    for (a = 0; a < d; ++a) f = o.call(t, s[a], a, s) + "", (l = c.get(f)) ? (r[a] = l, l.__data__ = s[a], c.delete(f)) : i[a] = new ur(t, s[a]);
    for (a = 0; a < h; ++a) (l = e[a]) && c.get(u[a]) === l && (n[a] = l);
  }
  function qh(t) {
    return t.__data__;
  }
  function zh(t, e) {
    if (!arguments.length) return Array.from(this, qh);
    var i = e ? Ph : Rh, r = this._parents, n = this._groups;
    typeof t != "function" && (t = Nh(t));
    for (var s = n.length, o = new Array(s), a = new Array(s), l = new Array(s), c = 0; c < s; ++c) {
      var h = r[c], d = n[c], u = d.length, f = Wh(t.call(h, h && h.__data__, c, r)), m = f.length, y = a[c] = new Array(m), T = o[c] = new Array(m), E = l[c] = new Array(u);
      i(h, d, y, T, E, f, e);
      for (var C = 0, x = 0, B, w; C < m; ++C) if (B = y[C]) {
        for (C >= x && (x = C + 1); !(w = T[x]) && ++x < m; ) ;
        B._next = w || null;
      }
    }
    return o = new xt(o, r), o._enter = a, o._exit = l, o;
  }
  function Wh(t) {
    return typeof t == "object" && "length" in t ? t : Array.from(t);
  }
  function Yh() {
    return new xt(this._exit || this._groups.map(Sa), this._parents);
  }
  function Hh(t, e, i) {
    var r = this.enter(), n = this, s = this.exit();
    return typeof t == "function" ? (r = t(r), r && (r = r.selection())) : r = r.append(t + ""), e != null && (n = e(n), n && (n = n.selection())), i == null ? s.remove() : i(s), r && n ? r.merge(n).order() : n;
  }
  function jh(t) {
    for (var e = t.selection ? t.selection() : t, i = this._groups, r = e._groups, n = i.length, s = r.length, o = Math.min(n, s), a = new Array(n), l = 0; l < o; ++l) for (var c = i[l], h = r[l], d = c.length, u = a[l] = new Array(d), f, m = 0; m < d; ++m) (f = c[m] || h[m]) && (u[m] = f);
    for (; l < n; ++l) a[l] = i[l];
    return new xt(a, this._parents);
  }
  function Uh() {
    for (var t = this._groups, e = -1, i = t.length; ++e < i; ) for (var r = t[e], n = r.length - 1, s = r[n], o; --n >= 0; ) (o = r[n]) && (s && o.compareDocumentPosition(s) ^ 4 && s.parentNode.insertBefore(o, s), s = o);
    return this;
  }
  function Xh(t) {
    t || (t = Gh);
    function e(d, u) {
      return d && u ? t(d.__data__, u.__data__) : !d - !u;
    }
    for (var i = this._groups, r = i.length, n = new Array(r), s = 0; s < r; ++s) {
      for (var o = i[s], a = o.length, l = n[s] = new Array(a), c, h = 0; h < a; ++h) (c = o[h]) && (l[h] = c);
      l.sort(e);
    }
    return new xt(n, this._parents).order();
  }
  function Gh(t, e) {
    return t < e ? -1 : t > e ? 1 : t >= e ? 0 : NaN;
  }
  function Vh() {
    var t = arguments[0];
    return arguments[0] = this, t.apply(null, arguments), this;
  }
  function Kh() {
    return Array.from(this);
  }
  function Zh() {
    for (var t = this._groups, e = 0, i = t.length; e < i; ++e) for (var r = t[e], n = 0, s = r.length; n < s; ++n) {
      var o = r[n];
      if (o) return o;
    }
    return null;
  }
  function Jh() {
    let t = 0;
    for (const e of this) ++t;
    return t;
  }
  function Qh() {
    return !this.node();
  }
  function tu(t) {
    for (var e = this._groups, i = 0, r = e.length; i < r; ++i) for (var n = e[i], s = 0, o = n.length, a; s < o; ++s) (a = n[s]) && t.call(a, a.__data__, s, n);
    return this;
  }
  function eu(t) {
    return function() {
      this.removeAttribute(t);
    };
  }
  function iu(t) {
    return function() {
      this.removeAttributeNS(t.space, t.local);
    };
  }
  function ru(t, e) {
    return function() {
      this.setAttribute(t, e);
    };
  }
  function nu(t, e) {
    return function() {
      this.setAttributeNS(t.space, t.local, e);
    };
  }
  function ou(t, e) {
    return function() {
      var i = e.apply(this, arguments);
      i == null ? this.removeAttribute(t) : this.setAttribute(t, i);
    };
  }
  function su(t, e) {
    return function() {
      var i = e.apply(this, arguments);
      i == null ? this.removeAttributeNS(t.space, t.local) : this.setAttributeNS(t.space, t.local, i);
    };
  }
  function au(t, e) {
    var i = $r(t);
    if (arguments.length < 2) {
      var r = this.node();
      return i.local ? r.getAttributeNS(i.space, i.local) : r.getAttribute(i);
    }
    return this.each((e == null ? i.local ? iu : eu : typeof e == "function" ? i.local ? su : ou : i.local ? nu : ru)(i, e));
  }
  function ka(t) {
    return t.ownerDocument && t.ownerDocument.defaultView || t.document && t || t.defaultView;
  }
  function lu(t) {
    return function() {
      this.style.removeProperty(t);
    };
  }
  function cu(t, e, i) {
    return function() {
      this.style.setProperty(t, e, i);
    };
  }
  function hu(t, e, i) {
    return function() {
      var r = e.apply(this, arguments);
      r == null ? this.style.removeProperty(t) : this.style.setProperty(t, r, i);
    };
  }
  function uu(t, e, i) {
    return arguments.length > 1 ? this.each((e == null ? lu : typeof e == "function" ? hu : cu)(t, e, i ?? "")) : ze(this.node(), t);
  }
  function ze(t, e) {
    return t.style.getPropertyValue(e) || ka(t).getComputedStyle(t, null).getPropertyValue(e);
  }
  function du(t) {
    return function() {
      delete this[t];
    };
  }
  function fu(t, e) {
    return function() {
      this[t] = e;
    };
  }
  function pu(t, e) {
    return function() {
      var i = e.apply(this, arguments);
      i == null ? delete this[t] : this[t] = i;
    };
  }
  function gu(t, e) {
    return arguments.length > 1 ? this.each((e == null ? du : typeof e == "function" ? pu : fu)(t, e)) : this.node()[t];
  }
  function wa(t) {
    return t.trim().split(/^|\s+/);
  }
  function Gn(t) {
    return t.classList || new Aa(t);
  }
  function Aa(t) {
    this._node = t, this._names = wa(t.getAttribute("class") || "");
  }
  Aa.prototype = {
    add: function(t) {
      var e = this._names.indexOf(t);
      e < 0 && (this._names.push(t), this._node.setAttribute("class", this._names.join(" ")));
    },
    remove: function(t) {
      var e = this._names.indexOf(t);
      e >= 0 && (this._names.splice(e, 1), this._node.setAttribute("class", this._names.join(" ")));
    },
    contains: function(t) {
      return this._names.indexOf(t) >= 0;
    }
  };
  function Ea(t, e) {
    for (var i = Gn(t), r = -1, n = e.length; ++r < n; ) i.add(e[r]);
  }
  function Ba(t, e) {
    for (var i = Gn(t), r = -1, n = e.length; ++r < n; ) i.remove(e[r]);
  }
  function mu(t) {
    return function() {
      Ea(this, t);
    };
  }
  function yu(t) {
    return function() {
      Ba(this, t);
    };
  }
  function _u(t, e) {
    return function() {
      (e.apply(this, arguments) ? Ea : Ba)(this, t);
    };
  }
  function Cu(t, e) {
    var i = wa(t + "");
    if (arguments.length < 2) {
      for (var r = Gn(this.node()), n = -1, s = i.length; ++n < s; ) if (!r.contains(i[n])) return false;
      return true;
    }
    return this.each((typeof e == "function" ? _u : e ? mu : yu)(i, e));
  }
  function xu() {
    this.textContent = "";
  }
  function bu(t) {
    return function() {
      this.textContent = t;
    };
  }
  function Tu(t) {
    return function() {
      var e = t.apply(this, arguments);
      this.textContent = e ?? "";
    };
  }
  function vu(t) {
    return arguments.length ? this.each(t == null ? xu : (typeof t == "function" ? Tu : bu)(t)) : this.node().textContent;
  }
  function Su() {
    this.innerHTML = "";
  }
  function ku(t) {
    return function() {
      this.innerHTML = t;
    };
  }
  function wu(t) {
    return function() {
      var e = t.apply(this, arguments);
      this.innerHTML = e ?? "";
    };
  }
  function Au(t) {
    return arguments.length ? this.each(t == null ? Su : (typeof t == "function" ? wu : ku)(t)) : this.node().innerHTML;
  }
  function Eu() {
    this.nextSibling && this.parentNode.appendChild(this);
  }
  function Bu() {
    return this.each(Eu);
  }
  function Lu() {
    this.previousSibling && this.parentNode.insertBefore(this, this.parentNode.firstChild);
  }
  function Fu() {
    return this.each(Lu);
  }
  function Ou(t) {
    var e = typeof t == "function" ? t : xa(t);
    return this.select(function() {
      return this.appendChild(e.apply(this, arguments));
    });
  }
  function Iu() {
    return null;
  }
  function Mu(t, e) {
    var i = typeof t == "function" ? t : xa(t), r = e == null ? Iu : typeof e == "function" ? e : Xn(e);
    return this.select(function() {
      return this.insertBefore(i.apply(this, arguments), r.apply(this, arguments) || null);
    });
  }
  function $u() {
    var t = this.parentNode;
    t && t.removeChild(this);
  }
  function Du() {
    return this.each($u);
  }
  function Nu() {
    var t = this.cloneNode(false), e = this.parentNode;
    return e ? e.insertBefore(t, this.nextSibling) : t;
  }
  function Ru() {
    var t = this.cloneNode(true), e = this.parentNode;
    return e ? e.insertBefore(t, this.nextSibling) : t;
  }
  function Pu(t) {
    return this.select(t ? Ru : Nu);
  }
  function qu(t) {
    return arguments.length ? this.property("__data__", t) : this.node().__data__;
  }
  function zu(t) {
    return function(e) {
      t.call(this, e, this.__data__);
    };
  }
  function Wu(t) {
    return t.trim().split(/^|\s+/).map(function(e) {
      var i = "", r = e.indexOf(".");
      return r >= 0 && (i = e.slice(r + 1), e = e.slice(0, r)), {
        type: e,
        name: i
      };
    });
  }
  function Yu(t) {
    return function() {
      var e = this.__on;
      if (e) {
        for (var i = 0, r = -1, n = e.length, s; i < n; ++i) s = e[i], (!t.type || s.type === t.type) && s.name === t.name ? this.removeEventListener(s.type, s.listener, s.options) : e[++r] = s;
        ++r ? e.length = r : delete this.__on;
      }
    };
  }
  function Hu(t, e, i) {
    return function() {
      var r = this.__on, n, s = zu(e);
      if (r) {
        for (var o = 0, a = r.length; o < a; ++o) if ((n = r[o]).type === t.type && n.name === t.name) {
          this.removeEventListener(n.type, n.listener, n.options), this.addEventListener(n.type, n.listener = s, n.options = i), n.value = e;
          return;
        }
      }
      this.addEventListener(t.type, s, i), n = {
        type: t.type,
        name: t.name,
        value: e,
        listener: s,
        options: i
      }, r ? r.push(n) : this.__on = [
        n
      ];
    };
  }
  function ju(t, e, i) {
    var r = Wu(t + ""), n, s = r.length, o;
    if (arguments.length < 2) {
      var a = this.node().__on;
      if (a) {
        for (var l = 0, c = a.length, h; l < c; ++l) for (n = 0, h = a[l]; n < s; ++n) if ((o = r[n]).type === h.type && o.name === h.name) return h.value;
      }
      return;
    }
    for (a = e ? Hu : Yu, n = 0; n < s; ++n) this.each(a(r[n], e, i));
    return this;
  }
  function La(t, e, i) {
    var r = ka(t), n = r.CustomEvent;
    typeof n == "function" ? n = new n(e, i) : (n = r.document.createEvent("Event"), i ? (n.initEvent(e, i.bubbles, i.cancelable), n.detail = i.detail) : n.initEvent(e, false, false)), t.dispatchEvent(n);
  }
  function Uu(t, e) {
    return function() {
      return La(this, t, e);
    };
  }
  function Xu(t, e) {
    return function() {
      return La(this, t, e.apply(this, arguments));
    };
  }
  function Gu(t, e) {
    return this.each((typeof e == "function" ? Xu : Uu)(t, e));
  }
  function* Vu() {
    for (var t = this._groups, e = 0, i = t.length; e < i; ++e) for (var r = t[e], n = 0, s = r.length, o; n < s; ++n) (o = r[n]) && (yield o);
  }
  Fa = [
    null
  ];
  xt = function(t, e) {
    this._groups = t, this._parents = e;
  };
  function Ii() {
    return new xt([
      [
        document.documentElement
      ]
    ], Fa);
  }
  function Ku() {
    return this;
  }
  xt.prototype = Ii.prototype = {
    constructor: xt,
    select: Th,
    selectAll: wh,
    selectChild: Lh,
    selectChildren: Mh,
    filter: $h,
    data: zh,
    enter: Dh,
    exit: Yh,
    join: Hh,
    merge: jh,
    selection: Ku,
    order: Uh,
    sort: Xh,
    call: Vh,
    nodes: Kh,
    node: Zh,
    size: Jh,
    empty: Qh,
    each: tu,
    attr: au,
    style: uu,
    property: gu,
    classed: Cu,
    text: vu,
    html: Au,
    raise: Bu,
    lower: Fu,
    append: Ou,
    insert: Mu,
    remove: Du,
    clone: Pu,
    datum: qu,
    on: ju,
    dispatch: Gu,
    [Symbol.iterator]: Vu
  };
  kt = function(t) {
    return typeof t == "string" ? new xt([
      [
        document.querySelector(t)
      ]
    ], [
      document.documentElement
    ]) : new xt([
      [
        t
      ]
    ], Fa);
  };
  Vn = function(t, e, i) {
    t.prototype = e.prototype = i, i.constructor = t;
  };
  Oa = function(t, e) {
    var i = Object.create(t.prototype);
    for (var r in e) i[r] = e[r];
    return i;
  };
  Mi = function() {
  };
  var vi = 0.7, dr = 1 / vi, Ne = "\\s*([+-]?\\d+)\\s*", Si = "\\s*([+-]?(?:\\d*\\.)?\\d+(?:[eE][+-]?\\d+)?)\\s*", qt = "\\s*([+-]?(?:\\d*\\.)?\\d+(?:[eE][+-]?\\d+)?)%\\s*", Zu = /^#([0-9a-f]{3,8})$/, Ju = new RegExp(`^rgb\\(${Ne},${Ne},${Ne}\\)$`), Qu = new RegExp(`^rgb\\(${qt},${qt},${qt}\\)$`), td = new RegExp(`^rgba\\(${Ne},${Ne},${Ne},${Si}\\)$`), ed = new RegExp(`^rgba\\(${qt},${qt},${qt},${Si}\\)$`), id = new RegExp(`^hsl\\(${Si},${qt},${qt}\\)$`), rd = new RegExp(`^hsla\\(${Si},${qt},${qt},${Si}\\)$`), es = {
    aliceblue: 15792383,
    antiquewhite: 16444375,
    aqua: 65535,
    aquamarine: 8388564,
    azure: 15794175,
    beige: 16119260,
    bisque: 16770244,
    black: 0,
    blanchedalmond: 16772045,
    blue: 255,
    blueviolet: 9055202,
    brown: 10824234,
    burlywood: 14596231,
    cadetblue: 6266528,
    chartreuse: 8388352,
    chocolate: 13789470,
    coral: 16744272,
    cornflowerblue: 6591981,
    cornsilk: 16775388,
    crimson: 14423100,
    cyan: 65535,
    darkblue: 139,
    darkcyan: 35723,
    darkgoldenrod: 12092939,
    darkgray: 11119017,
    darkgreen: 25600,
    darkgrey: 11119017,
    darkkhaki: 12433259,
    darkmagenta: 9109643,
    darkolivegreen: 5597999,
    darkorange: 16747520,
    darkorchid: 10040012,
    darkred: 9109504,
    darksalmon: 15308410,
    darkseagreen: 9419919,
    darkslateblue: 4734347,
    darkslategray: 3100495,
    darkslategrey: 3100495,
    darkturquoise: 52945,
    darkviolet: 9699539,
    deeppink: 16716947,
    deepskyblue: 49151,
    dimgray: 6908265,
    dimgrey: 6908265,
    dodgerblue: 2003199,
    firebrick: 11674146,
    floralwhite: 16775920,
    forestgreen: 2263842,
    fuchsia: 16711935,
    gainsboro: 14474460,
    ghostwhite: 16316671,
    gold: 16766720,
    goldenrod: 14329120,
    gray: 8421504,
    green: 32768,
    greenyellow: 11403055,
    grey: 8421504,
    honeydew: 15794160,
    hotpink: 16738740,
    indianred: 13458524,
    indigo: 4915330,
    ivory: 16777200,
    khaki: 15787660,
    lavender: 15132410,
    lavenderblush: 16773365,
    lawngreen: 8190976,
    lemonchiffon: 16775885,
    lightblue: 11393254,
    lightcoral: 15761536,
    lightcyan: 14745599,
    lightgoldenrodyellow: 16448210,
    lightgray: 13882323,
    lightgreen: 9498256,
    lightgrey: 13882323,
    lightpink: 16758465,
    lightsalmon: 16752762,
    lightseagreen: 2142890,
    lightskyblue: 8900346,
    lightslategray: 7833753,
    lightslategrey: 7833753,
    lightsteelblue: 11584734,
    lightyellow: 16777184,
    lime: 65280,
    limegreen: 3329330,
    linen: 16445670,
    magenta: 16711935,
    maroon: 8388608,
    mediumaquamarine: 6737322,
    mediumblue: 205,
    mediumorchid: 12211667,
    mediumpurple: 9662683,
    mediumseagreen: 3978097,
    mediumslateblue: 8087790,
    mediumspringgreen: 64154,
    mediumturquoise: 4772300,
    mediumvioletred: 13047173,
    midnightblue: 1644912,
    mintcream: 16121850,
    mistyrose: 16770273,
    moccasin: 16770229,
    navajowhite: 16768685,
    navy: 128,
    oldlace: 16643558,
    olive: 8421376,
    olivedrab: 7048739,
    orange: 16753920,
    orangered: 16729344,
    orchid: 14315734,
    palegoldenrod: 15657130,
    palegreen: 10025880,
    paleturquoise: 11529966,
    palevioletred: 14381203,
    papayawhip: 16773077,
    peachpuff: 16767673,
    peru: 13468991,
    pink: 16761035,
    plum: 14524637,
    powderblue: 11591910,
    purple: 8388736,
    rebeccapurple: 6697881,
    red: 16711680,
    rosybrown: 12357519,
    royalblue: 4286945,
    saddlebrown: 9127187,
    salmon: 16416882,
    sandybrown: 16032864,
    seagreen: 3050327,
    seashell: 16774638,
    sienna: 10506797,
    silver: 12632256,
    skyblue: 8900331,
    slateblue: 6970061,
    slategray: 7372944,
    slategrey: 7372944,
    snow: 16775930,
    springgreen: 65407,
    steelblue: 4620980,
    tan: 13808780,
    teal: 32896,
    thistle: 14204888,
    tomato: 16737095,
    turquoise: 4251856,
    violet: 15631086,
    wheat: 16113331,
    white: 16777215,
    whitesmoke: 16119285,
    yellow: 16776960,
    yellowgreen: 10145074
  };
  Vn(Mi, ki, {
    copy(t) {
      return Object.assign(new this.constructor(), this, t);
    },
    displayable() {
      return this.rgb().displayable();
    },
    hex: is,
    formatHex: is,
    formatHex8: nd,
    formatHsl: od,
    formatRgb: rs,
    toString: rs
  });
  function is() {
    return this.rgb().formatHex();
  }
  function nd() {
    return this.rgb().formatHex8();
  }
  function od() {
    return Ia(this).formatHsl();
  }
  function rs() {
    return this.rgb().formatRgb();
  }
  ki = function(t) {
    var e, i;
    return t = (t + "").trim().toLowerCase(), (e = Zu.exec(t)) ? (i = e[1].length, e = parseInt(e[1], 16), i === 6 ? ns(e) : i === 3 ? new yt(e >> 8 & 15 | e >> 4 & 240, e >> 4 & 15 | e & 240, (e & 15) << 4 | e & 15, 1) : i === 8 ? Ui(e >> 24 & 255, e >> 16 & 255, e >> 8 & 255, (e & 255) / 255) : i === 4 ? Ui(e >> 12 & 15 | e >> 8 & 240, e >> 8 & 15 | e >> 4 & 240, e >> 4 & 15 | e & 240, ((e & 15) << 4 | e & 15) / 255) : null) : (e = Ju.exec(t)) ? new yt(e[1], e[2], e[3], 1) : (e = Qu.exec(t)) ? new yt(e[1] * 255 / 100, e[2] * 255 / 100, e[3] * 255 / 100, 1) : (e = td.exec(t)) ? Ui(e[1], e[2], e[3], e[4]) : (e = ed.exec(t)) ? Ui(e[1] * 255 / 100, e[2] * 255 / 100, e[3] * 255 / 100, e[4]) : (e = id.exec(t)) ? as(e[1], e[2] / 100, e[3] / 100, 1) : (e = rd.exec(t)) ? as(e[1], e[2] / 100, e[3] / 100, e[4]) : es.hasOwnProperty(t) ? ns(es[t]) : t === "transparent" ? new yt(NaN, NaN, NaN, 0) : null;
  };
  function ns(t) {
    return new yt(t >> 16 & 255, t >> 8 & 255, t & 255, 1);
  }
  function Ui(t, e, i, r) {
    return r <= 0 && (t = e = i = NaN), new yt(t, e, i, r);
  }
  sd = function(t) {
    return t instanceof Mi || (t = ki(t)), t ? (t = t.rgb(), new yt(t.r, t.g, t.b, t.opacity)) : new yt();
  };
  function kn(t, e, i, r) {
    return arguments.length === 1 ? sd(t) : new yt(t, e, i, r ?? 1);
  }
  yt = function(t, e, i, r) {
    this.r = +t, this.g = +e, this.b = +i, this.opacity = +r;
  };
  Vn(yt, kn, Oa(Mi, {
    brighter(t) {
      return t = t == null ? dr : Math.pow(dr, t), new yt(this.r * t, this.g * t, this.b * t, this.opacity);
    },
    darker(t) {
      return t = t == null ? vi : Math.pow(vi, t), new yt(this.r * t, this.g * t, this.b * t, this.opacity);
    },
    rgb() {
      return this;
    },
    clamp() {
      return new yt(xe(this.r), xe(this.g), xe(this.b), fr(this.opacity));
    },
    displayable() {
      return -0.5 <= this.r && this.r < 255.5 && -0.5 <= this.g && this.g < 255.5 && -0.5 <= this.b && this.b < 255.5 && 0 <= this.opacity && this.opacity <= 1;
    },
    hex: os,
    formatHex: os,
    formatHex8: ad,
    formatRgb: ss,
    toString: ss
  }));
  function os() {
    return `#${_e(this.r)}${_e(this.g)}${_e(this.b)}`;
  }
  function ad() {
    return `#${_e(this.r)}${_e(this.g)}${_e(this.b)}${_e((isNaN(this.opacity) ? 1 : this.opacity) * 255)}`;
  }
  function ss() {
    const t = fr(this.opacity);
    return `${t === 1 ? "rgb(" : "rgba("}${xe(this.r)}, ${xe(this.g)}, ${xe(this.b)}${t === 1 ? ")" : `, ${t})`}`;
  }
  function fr(t) {
    return isNaN(t) ? 1 : Math.max(0, Math.min(1, t));
  }
  function xe(t) {
    return Math.max(0, Math.min(255, Math.round(t) || 0));
  }
  function _e(t) {
    return t = xe(t), (t < 16 ? "0" : "") + t.toString(16);
  }
  function as(t, e, i, r) {
    return r <= 0 ? t = e = i = NaN : i <= 0 || i >= 1 ? t = e = NaN : e <= 0 && (t = NaN), new It(t, e, i, r);
  }
  function Ia(t) {
    if (t instanceof It) return new It(t.h, t.s, t.l, t.opacity);
    if (t instanceof Mi || (t = ki(t)), !t) return new It();
    if (t instanceof It) return t;
    t = t.rgb();
    var e = t.r / 255, i = t.g / 255, r = t.b / 255, n = Math.min(e, i, r), s = Math.max(e, i, r), o = NaN, a = s - n, l = (s + n) / 2;
    return a ? (e === s ? o = (i - r) / a + (i < r) * 6 : i === s ? o = (r - e) / a + 2 : o = (e - i) / a + 4, a /= l < 0.5 ? s + n : 2 - s - n, o *= 60) : a = l > 0 && l < 1 ? 0 : o, new It(o, a, l, t.opacity);
  }
  function ld(t, e, i, r) {
    return arguments.length === 1 ? Ia(t) : new It(t, e, i, r ?? 1);
  }
  function It(t, e, i, r) {
    this.h = +t, this.s = +e, this.l = +i, this.opacity = +r;
  }
  Vn(It, ld, Oa(Mi, {
    brighter(t) {
      return t = t == null ? dr : Math.pow(dr, t), new It(this.h, this.s, this.l * t, this.opacity);
    },
    darker(t) {
      return t = t == null ? vi : Math.pow(vi, t), new It(this.h, this.s, this.l * t, this.opacity);
    },
    rgb() {
      var t = this.h % 360 + (this.h < 0) * 360, e = isNaN(t) || isNaN(this.s) ? 0 : this.s, i = this.l, r = i + (i < 0.5 ? i : 1 - i) * e, n = 2 * i - r;
      return new yt(an(t >= 240 ? t - 240 : t + 120, n, r), an(t, n, r), an(t < 120 ? t + 240 : t - 120, n, r), this.opacity);
    },
    clamp() {
      return new It(ls(this.h), Xi(this.s), Xi(this.l), fr(this.opacity));
    },
    displayable() {
      return (0 <= this.s && this.s <= 1 || isNaN(this.s)) && 0 <= this.l && this.l <= 1 && 0 <= this.opacity && this.opacity <= 1;
    },
    formatHsl() {
      const t = fr(this.opacity);
      return `${t === 1 ? "hsl(" : "hsla("}${ls(this.h)}, ${Xi(this.s) * 100}%, ${Xi(this.l) * 100}%${t === 1 ? ")" : `, ${t})`}`;
    }
  }));
  function ls(t) {
    return t = (t || 0) % 360, t < 0 ? t + 360 : t;
  }
  function Xi(t) {
    return Math.max(0, Math.min(1, t || 0));
  }
  function an(t, e, i) {
    return (t < 60 ? e + (i - e) * t / 60 : t < 180 ? i : t < 240 ? e + (i - e) * (240 - t) / 60 : e) * 255;
  }
  Kn = (t) => () => t;
  function Ma(t, e) {
    return function(i) {
      return t + i * e;
    };
  }
  function cd(t, e, i) {
    return t = Math.pow(t, i), e = Math.pow(e, i) - t, i = 1 / i, function(r) {
      return Math.pow(t + r * e, i);
    };
  }
  q1 = function(t, e) {
    var i = e - t;
    return i ? Ma(t, i > 180 || i < -180 ? i - 360 * Math.round(i / 360) : i) : Kn(isNaN(t) ? e : t);
  };
  function hd(t) {
    return (t = +t) == 1 ? $a : function(e, i) {
      return i - e ? cd(e, i, t) : Kn(isNaN(e) ? i : e);
    };
  }
  $a = function(t, e) {
    var i = e - t;
    return i ? Ma(t, i) : Kn(isNaN(t) ? e : t);
  };
  cs = function t(e) {
    var i = hd(e);
    function r(n, s) {
      var o = i((n = kn(n)).r, (s = kn(s)).r), a = i(n.g, s.g), l = i(n.b, s.b), c = $a(n.opacity, s.opacity);
      return function(h) {
        return n.r = o(h), n.g = a(h), n.b = l(h), n.opacity = c(h), n + "";
      };
    }
    return r.gamma = t, r;
  }(1);
  le = function(t, e) {
    return t = +t, e = +e, function(i) {
      return t * (1 - i) + e * i;
    };
  };
  var wn = /[-+]?(?:\d+\.?\d*|\.?\d+)(?:[eE][-+]?\d+)?/g, ln = new RegExp(wn.source, "g");
  function ud(t) {
    return function() {
      return t;
    };
  }
  function dd(t) {
    return function(e) {
      return t(e) + "";
    };
  }
  fd = function(t, e) {
    var i = wn.lastIndex = ln.lastIndex = 0, r, n, s, o = -1, a = [], l = [];
    for (t = t + "", e = e + ""; (r = wn.exec(t)) && (n = ln.exec(e)); ) (s = n.index) > i && (s = e.slice(i, s), a[o] ? a[o] += s : a[++o] = s), (r = r[0]) === (n = n[0]) ? a[o] ? a[o] += n : a[++o] = n : (a[++o] = null, l.push({
      i: o,
      x: le(r, n)
    })), i = ln.lastIndex;
    return i < e.length && (s = e.slice(i), a[o] ? a[o] += s : a[++o] = s), a.length < 2 ? l[0] ? dd(l[0].x) : ud(e) : (e = l.length, function(c) {
      for (var h = 0, d; h < e; ++h) a[(d = l[h]).i] = d.x(c);
      return a.join("");
    });
  };
  var hs = 180 / Math.PI, An = {
    translateX: 0,
    translateY: 0,
    rotate: 0,
    skewX: 0,
    scaleX: 1,
    scaleY: 1
  };
  function Da(t, e, i, r, n, s) {
    var o, a, l;
    return (o = Math.sqrt(t * t + e * e)) && (t /= o, e /= o), (l = t * i + e * r) && (i -= t * l, r -= e * l), (a = Math.sqrt(i * i + r * r)) && (i /= a, r /= a, l /= a), t * r < e * i && (t = -t, e = -e, l = -l, o = -o), {
      translateX: n,
      translateY: s,
      rotate: Math.atan2(e, t) * hs,
      skewX: Math.atan(l) * hs,
      scaleX: o,
      scaleY: a
    };
  }
  var Gi;
  function pd(t) {
    const e = new (typeof DOMMatrix == "function" ? DOMMatrix : WebKitCSSMatrix)(t + "");
    return e.isIdentity ? An : Da(e.a, e.b, e.c, e.d, e.e, e.f);
  }
  function gd(t) {
    return t == null || (Gi || (Gi = document.createElementNS("http://www.w3.org/2000/svg", "g")), Gi.setAttribute("transform", t), !(t = Gi.transform.baseVal.consolidate())) ? An : (t = t.matrix, Da(t.a, t.b, t.c, t.d, t.e, t.f));
  }
  function Na(t, e, i, r) {
    function n(c) {
      return c.length ? c.pop() + " " : "";
    }
    function s(c, h, d, u, f, m) {
      if (c !== d || h !== u) {
        var y = f.push("translate(", null, e, null, i);
        m.push({
          i: y - 4,
          x: le(c, d)
        }, {
          i: y - 2,
          x: le(h, u)
        });
      } else (d || u) && f.push("translate(" + d + e + u + i);
    }
    function o(c, h, d, u) {
      c !== h ? (c - h > 180 ? h += 360 : h - c > 180 && (c += 360), u.push({
        i: d.push(n(d) + "rotate(", null, r) - 2,
        x: le(c, h)
      })) : h && d.push(n(d) + "rotate(" + h + r);
    }
    function a(c, h, d, u) {
      c !== h ? u.push({
        i: d.push(n(d) + "skewX(", null, r) - 2,
        x: le(c, h)
      }) : h && d.push(n(d) + "skewX(" + h + r);
    }
    function l(c, h, d, u, f, m) {
      if (c !== d || h !== u) {
        var y = f.push(n(f) + "scale(", null, ",", null, ")");
        m.push({
          i: y - 4,
          x: le(c, d)
        }, {
          i: y - 2,
          x: le(h, u)
        });
      } else (d !== 1 || u !== 1) && f.push(n(f) + "scale(" + d + "," + u + ")");
    }
    return function(c, h) {
      var d = [], u = [];
      return c = t(c), h = t(h), s(c.translateX, c.translateY, h.translateX, h.translateY, d, u), o(c.rotate, h.rotate, d, u), a(c.skewX, h.skewX, d, u), l(c.scaleX, c.scaleY, h.scaleX, h.scaleY, d, u), c = h = null, function(f) {
        for (var m = -1, y = u.length, T; ++m < y; ) d[(T = u[m]).i] = T.x(f);
        return d.join("");
      };
    };
  }
  var md = Na(pd, "px, ", "px)", "deg)"), yd = Na(gd, ", ", ")", ")"), We = 0, di = 0, ni = 0, Ra = 1e3, pr, fi, gr = 0, Te = 0, Dr = 0, wi = typeof performance == "object" && performance.now ? performance : Date, Pa = typeof window == "object" && window.requestAnimationFrame ? window.requestAnimationFrame.bind(window) : function(t) {
    setTimeout(t, 17);
  };
  function Zn() {
    return Te || (Pa(_d), Te = wi.now() + Dr);
  }
  function _d() {
    Te = 0;
  }
  function mr() {
    this._call = this._time = this._next = null;
  }
  mr.prototype = qa.prototype = {
    constructor: mr,
    restart: function(t, e, i) {
      if (typeof t != "function") throw new TypeError("callback is not a function");
      i = (i == null ? Zn() : +i) + (e == null ? 0 : +e), !this._next && fi !== this && (fi ? fi._next = this : pr = this, fi = this), this._call = t, this._time = i, En();
    },
    stop: function() {
      this._call && (this._call = null, this._time = 1 / 0, En());
    }
  };
  function qa(t, e, i) {
    var r = new mr();
    return r.restart(t, e, i), r;
  }
  function Cd() {
    Zn(), ++We;
    for (var t = pr, e; t; ) (e = Te - t._time) >= 0 && t._call.call(void 0, e), t = t._next;
    --We;
  }
  function us() {
    Te = (gr = wi.now()) + Dr, We = di = 0;
    try {
      Cd();
    } finally {
      We = 0, bd(), Te = 0;
    }
  }
  function xd() {
    var t = wi.now(), e = t - gr;
    e > Ra && (Dr -= e, gr = t);
  }
  function bd() {
    for (var t, e = pr, i, r = 1 / 0; e; ) e._call ? (r > e._time && (r = e._time), t = e, e = e._next) : (i = e._next, e._next = null, e = t ? t._next = i : pr = i);
    fi = t, En(r);
  }
  function En(t) {
    if (!We) {
      di && (di = clearTimeout(di));
      var e = t - Te;
      e > 24 ? (t < 1 / 0 && (di = setTimeout(us, t - wi.now() - Dr)), ni && (ni = clearInterval(ni))) : (ni || (gr = wi.now(), ni = setInterval(xd, Ra)), We = 1, Pa(us));
    }
  }
  function ds(t, e, i) {
    var r = new mr();
    return e = e == null ? 0 : +e, r.restart((n) => {
      r.stop(), t(n + e);
    }, e, i), r;
  }
  var Td = Ca("start", "end", "cancel", "interrupt"), vd = [], za = 0, fs = 1, Bn = 2, ir = 3, ps = 4, Ln = 5, rr = 6;
  function Nr(t, e, i, r, n, s) {
    var o = t.__transition;
    if (!o) t.__transition = {};
    else if (i in o) return;
    Sd(t, i, {
      name: e,
      index: r,
      group: n,
      on: Td,
      tween: vd,
      time: s.time,
      delay: s.delay,
      duration: s.duration,
      ease: s.ease,
      timer: null,
      state: za
    });
  }
  function Jn(t, e) {
    var i = $t(t, e);
    if (i.state > za) throw new Error("too late; already scheduled");
    return i;
  }
  function jt(t, e) {
    var i = $t(t, e);
    if (i.state > ir) throw new Error("too late; already running");
    return i;
  }
  function $t(t, e) {
    var i = t.__transition;
    if (!i || !(i = i[e])) throw new Error("transition not found");
    return i;
  }
  function Sd(t, e, i) {
    var r = t.__transition, n;
    r[e] = i, i.timer = qa(s, 0, i.time);
    function s(c) {
      i.state = fs, i.timer.restart(o, i.delay, i.time), i.delay <= c && o(c - i.delay);
    }
    function o(c) {
      var h, d, u, f;
      if (i.state !== fs) return l();
      for (h in r) if (f = r[h], f.name === i.name) {
        if (f.state === ir) return ds(o);
        f.state === ps ? (f.state = rr, f.timer.stop(), f.on.call("interrupt", t, t.__data__, f.index, f.group), delete r[h]) : +h < e && (f.state = rr, f.timer.stop(), f.on.call("cancel", t, t.__data__, f.index, f.group), delete r[h]);
      }
      if (ds(function() {
        i.state === ir && (i.state = ps, i.timer.restart(a, i.delay, i.time), a(c));
      }), i.state = Bn, i.on.call("start", t, t.__data__, i.index, i.group), i.state === Bn) {
        for (i.state = ir, n = new Array(u = i.tween.length), h = 0, d = -1; h < u; ++h) (f = i.tween[h].value.call(t, t.__data__, i.index, i.group)) && (n[++d] = f);
        n.length = d + 1;
      }
    }
    function a(c) {
      for (var h = c < i.duration ? i.ease.call(null, c / i.duration) : (i.timer.restart(l), i.state = Ln, 1), d = -1, u = n.length; ++d < u; ) n[d].call(t, h);
      i.state === Ln && (i.on.call("end", t, t.__data__, i.index, i.group), l());
    }
    function l() {
      i.state = rr, i.timer.stop(), delete r[e];
      for (var c in r) return;
      delete t.__transition;
    }
  }
  function kd(t, e) {
    var i = t.__transition, r, n, s = true, o;
    if (i) {
      e = e == null ? null : e + "";
      for (o in i) {
        if ((r = i[o]).name !== e) {
          s = false;
          continue;
        }
        n = r.state > Bn && r.state < Ln, r.state = rr, r.timer.stop(), r.on.call(n ? "interrupt" : "cancel", t, t.__data__, r.index, r.group), delete i[o];
      }
      s && delete t.__transition;
    }
  }
  function wd(t) {
    return this.each(function() {
      kd(this, t);
    });
  }
  function Ad(t, e) {
    var i, r;
    return function() {
      var n = jt(this, t), s = n.tween;
      if (s !== i) {
        r = i = s;
        for (var o = 0, a = r.length; o < a; ++o) if (r[o].name === e) {
          r = r.slice(), r.splice(o, 1);
          break;
        }
      }
      n.tween = r;
    };
  }
  function Ed(t, e, i) {
    var r, n;
    if (typeof i != "function") throw new Error();
    return function() {
      var s = jt(this, t), o = s.tween;
      if (o !== r) {
        n = (r = o).slice();
        for (var a = {
          name: e,
          value: i
        }, l = 0, c = n.length; l < c; ++l) if (n[l].name === e) {
          n[l] = a;
          break;
        }
        l === c && n.push(a);
      }
      s.tween = n;
    };
  }
  function Bd(t, e) {
    var i = this._id;
    if (t += "", arguments.length < 2) {
      for (var r = $t(this.node(), i).tween, n = 0, s = r.length, o; n < s; ++n) if ((o = r[n]).name === t) return o.value;
      return null;
    }
    return this.each((e == null ? Ad : Ed)(i, t, e));
  }
  function Qn(t, e, i) {
    var r = t._id;
    return t.each(function() {
      var n = jt(this, r);
      (n.value || (n.value = {}))[e] = i.apply(this, arguments);
    }), function(n) {
      return $t(n, r).value[e];
    };
  }
  function Wa(t, e) {
    var i;
    return (typeof e == "number" ? le : e instanceof ki ? cs : (i = ki(e)) ? (e = i, cs) : fd)(t, e);
  }
  function Ld(t) {
    return function() {
      this.removeAttribute(t);
    };
  }
  function Fd(t) {
    return function() {
      this.removeAttributeNS(t.space, t.local);
    };
  }
  function Od(t, e, i) {
    var r, n = i + "", s;
    return function() {
      var o = this.getAttribute(t);
      return o === n ? null : o === r ? s : s = e(r = o, i);
    };
  }
  function Id(t, e, i) {
    var r, n = i + "", s;
    return function() {
      var o = this.getAttributeNS(t.space, t.local);
      return o === n ? null : o === r ? s : s = e(r = o, i);
    };
  }
  function Md(t, e, i) {
    var r, n, s;
    return function() {
      var o, a = i(this), l;
      return a == null ? void this.removeAttribute(t) : (o = this.getAttribute(t), l = a + "", o === l ? null : o === r && l === n ? s : (n = l, s = e(r = o, a)));
    };
  }
  function $d(t, e, i) {
    var r, n, s;
    return function() {
      var o, a = i(this), l;
      return a == null ? void this.removeAttributeNS(t.space, t.local) : (o = this.getAttributeNS(t.space, t.local), l = a + "", o === l ? null : o === r && l === n ? s : (n = l, s = e(r = o, a)));
    };
  }
  function Dd(t, e) {
    var i = $r(t), r = i === "transform" ? yd : Wa;
    return this.attrTween(t, typeof e == "function" ? (i.local ? $d : Md)(i, r, Qn(this, "attr." + t, e)) : e == null ? (i.local ? Fd : Ld)(i) : (i.local ? Id : Od)(i, r, e));
  }
  function Nd(t, e) {
    return function(i) {
      this.setAttribute(t, e.call(this, i));
    };
  }
  function Rd(t, e) {
    return function(i) {
      this.setAttributeNS(t.space, t.local, e.call(this, i));
    };
  }
  function Pd(t, e) {
    var i, r;
    function n() {
      var s = e.apply(this, arguments);
      return s !== r && (i = (r = s) && Rd(t, s)), i;
    }
    return n._value = e, n;
  }
  function qd(t, e) {
    var i, r;
    function n() {
      var s = e.apply(this, arguments);
      return s !== r && (i = (r = s) && Nd(t, s)), i;
    }
    return n._value = e, n;
  }
  function zd(t, e) {
    var i = "attr." + t;
    if (arguments.length < 2) return (i = this.tween(i)) && i._value;
    if (e == null) return this.tween(i, null);
    if (typeof e != "function") throw new Error();
    var r = $r(t);
    return this.tween(i, (r.local ? Pd : qd)(r, e));
  }
  function Wd(t, e) {
    return function() {
      Jn(this, t).delay = +e.apply(this, arguments);
    };
  }
  function Yd(t, e) {
    return e = +e, function() {
      Jn(this, t).delay = e;
    };
  }
  function Hd(t) {
    var e = this._id;
    return arguments.length ? this.each((typeof t == "function" ? Wd : Yd)(e, t)) : $t(this.node(), e).delay;
  }
  function jd(t, e) {
    return function() {
      jt(this, t).duration = +e.apply(this, arguments);
    };
  }
  function Ud(t, e) {
    return e = +e, function() {
      jt(this, t).duration = e;
    };
  }
  function Xd(t) {
    var e = this._id;
    return arguments.length ? this.each((typeof t == "function" ? jd : Ud)(e, t)) : $t(this.node(), e).duration;
  }
  function Gd(t, e) {
    if (typeof e != "function") throw new Error();
    return function() {
      jt(this, t).ease = e;
    };
  }
  function Vd(t) {
    var e = this._id;
    return arguments.length ? this.each(Gd(e, t)) : $t(this.node(), e).ease;
  }
  function Kd(t, e) {
    return function() {
      var i = e.apply(this, arguments);
      if (typeof i != "function") throw new Error();
      jt(this, t).ease = i;
    };
  }
  function Zd(t) {
    if (typeof t != "function") throw new Error();
    return this.each(Kd(this._id, t));
  }
  function Jd(t) {
    typeof t != "function" && (t = Ta(t));
    for (var e = this._groups, i = e.length, r = new Array(i), n = 0; n < i; ++n) for (var s = e[n], o = s.length, a = r[n] = [], l, c = 0; c < o; ++c) (l = s[c]) && t.call(l, l.__data__, c, s) && a.push(l);
    return new ee(r, this._parents, this._name, this._id);
  }
  function Qd(t) {
    if (t._id !== this._id) throw new Error();
    for (var e = this._groups, i = t._groups, r = e.length, n = i.length, s = Math.min(r, n), o = new Array(r), a = 0; a < s; ++a) for (var l = e[a], c = i[a], h = l.length, d = o[a] = new Array(h), u, f = 0; f < h; ++f) (u = l[f] || c[f]) && (d[f] = u);
    for (; a < r; ++a) o[a] = e[a];
    return new ee(o, this._parents, this._name, this._id);
  }
  function tf(t) {
    return (t + "").trim().split(/^|\s+/).every(function(e) {
      var i = e.indexOf(".");
      return i >= 0 && (e = e.slice(0, i)), !e || e === "start";
    });
  }
  function ef(t, e, i) {
    var r, n, s = tf(e) ? Jn : jt;
    return function() {
      var o = s(this, t), a = o.on;
      a !== r && (n = (r = a).copy()).on(e, i), o.on = n;
    };
  }
  function rf(t, e) {
    var i = this._id;
    return arguments.length < 2 ? $t(this.node(), i).on.on(t) : this.each(ef(i, t, e));
  }
  function nf(t) {
    return function() {
      var e = this.parentNode;
      for (var i in this.__transition) if (+i !== t) return;
      e && e.removeChild(this);
    };
  }
  function of() {
    return this.on("end.remove", nf(this._id));
  }
  function sf(t) {
    var e = this._name, i = this._id;
    typeof t != "function" && (t = Xn(t));
    for (var r = this._groups, n = r.length, s = new Array(n), o = 0; o < n; ++o) for (var a = r[o], l = a.length, c = s[o] = new Array(l), h, d, u = 0; u < l; ++u) (h = a[u]) && (d = t.call(h, h.__data__, u, a)) && ("__data__" in h && (d.__data__ = h.__data__), c[u] = d, Nr(c[u], e, i, u, c, $t(h, i)));
    return new ee(s, this._parents, e, i);
  }
  function af(t) {
    var e = this._name, i = this._id;
    typeof t != "function" && (t = ba(t));
    for (var r = this._groups, n = r.length, s = [], o = [], a = 0; a < n; ++a) for (var l = r[a], c = l.length, h, d = 0; d < c; ++d) if (h = l[d]) {
      for (var u = t.call(h, h.__data__, d, l), f, m = $t(h, i), y = 0, T = u.length; y < T; ++y) (f = u[y]) && Nr(f, e, i, y, u, m);
      s.push(u), o.push(h);
    }
    return new ee(s, o, e, i);
  }
  var lf = Ii.prototype.constructor;
  function cf() {
    return new lf(this._groups, this._parents);
  }
  function hf(t, e) {
    var i, r, n;
    return function() {
      var s = ze(this, t), o = (this.style.removeProperty(t), ze(this, t));
      return s === o ? null : s === i && o === r ? n : n = e(i = s, r = o);
    };
  }
  function Ya(t) {
    return function() {
      this.style.removeProperty(t);
    };
  }
  function uf(t, e, i) {
    var r, n = i + "", s;
    return function() {
      var o = ze(this, t);
      return o === n ? null : o === r ? s : s = e(r = o, i);
    };
  }
  function df(t, e, i) {
    var r, n, s;
    return function() {
      var o = ze(this, t), a = i(this), l = a + "";
      return a == null && (l = a = (this.style.removeProperty(t), ze(this, t))), o === l ? null : o === r && l === n ? s : (n = l, s = e(r = o, a));
    };
  }
  function ff(t, e) {
    var i, r, n, s = "style." + e, o = "end." + s, a;
    return function() {
      var l = jt(this, t), c = l.on, h = l.value[s] == null ? a || (a = Ya(e)) : void 0;
      (c !== i || n !== h) && (r = (i = c).copy()).on(o, n = h), l.on = r;
    };
  }
  function pf(t, e, i) {
    var r = (t += "") == "transform" ? md : Wa;
    return e == null ? this.styleTween(t, hf(t, r)).on("end.style." + t, Ya(t)) : typeof e == "function" ? this.styleTween(t, df(t, r, Qn(this, "style." + t, e))).each(ff(this._id, t)) : this.styleTween(t, uf(t, r, e), i).on("end.style." + t, null);
  }
  function gf(t, e, i) {
    return function(r) {
      this.style.setProperty(t, e.call(this, r), i);
    };
  }
  function mf(t, e, i) {
    var r, n;
    function s() {
      var o = e.apply(this, arguments);
      return o !== n && (r = (n = o) && gf(t, o, i)), r;
    }
    return s._value = e, s;
  }
  function yf(t, e, i) {
    var r = "style." + (t += "");
    if (arguments.length < 2) return (r = this.tween(r)) && r._value;
    if (e == null) return this.tween(r, null);
    if (typeof e != "function") throw new Error();
    return this.tween(r, mf(t, e, i ?? ""));
  }
  function _f(t) {
    return function() {
      this.textContent = t;
    };
  }
  function Cf(t) {
    return function() {
      var e = t(this);
      this.textContent = e ?? "";
    };
  }
  function xf(t) {
    return this.tween("text", typeof t == "function" ? Cf(Qn(this, "text", t)) : _f(t == null ? "" : t + ""));
  }
  function bf(t) {
    return function(e) {
      this.textContent = t.call(this, e);
    };
  }
  function Tf(t) {
    var e, i;
    function r() {
      var n = t.apply(this, arguments);
      return n !== i && (e = (i = n) && bf(n)), e;
    }
    return r._value = t, r;
  }
  function vf(t) {
    var e = "text";
    if (arguments.length < 1) return (e = this.tween(e)) && e._value;
    if (t == null) return this.tween(e, null);
    if (typeof t != "function") throw new Error();
    return this.tween(e, Tf(t));
  }
  function Sf() {
    for (var t = this._name, e = this._id, i = Ha(), r = this._groups, n = r.length, s = 0; s < n; ++s) for (var o = r[s], a = o.length, l, c = 0; c < a; ++c) if (l = o[c]) {
      var h = $t(l, e);
      Nr(l, t, i, c, o, {
        time: h.time + h.delay + h.duration,
        delay: 0,
        duration: h.duration,
        ease: h.ease
      });
    }
    return new ee(r, this._parents, t, i);
  }
  function kf() {
    var t, e, i = this, r = i._id, n = i.size();
    return new Promise(function(s, o) {
      var a = {
        value: o
      }, l = {
        value: function() {
          --n === 0 && s();
        }
      };
      i.each(function() {
        var c = jt(this, r), h = c.on;
        h !== t && (e = (t = h).copy(), e._.cancel.push(a), e._.interrupt.push(a), e._.end.push(l)), c.on = e;
      }), n === 0 && s();
    });
  }
  var wf = 0;
  function ee(t, e, i, r) {
    this._groups = t, this._parents = e, this._name = i, this._id = r;
  }
  function Ha() {
    return ++wf;
  }
  var Vt = Ii.prototype;
  ee.prototype = {
    constructor: ee,
    select: sf,
    selectAll: af,
    selectChild: Vt.selectChild,
    selectChildren: Vt.selectChildren,
    filter: Jd,
    merge: Qd,
    selection: cf,
    transition: Sf,
    call: Vt.call,
    nodes: Vt.nodes,
    node: Vt.node,
    size: Vt.size,
    empty: Vt.empty,
    each: Vt.each,
    on: rf,
    attr: Dd,
    attrTween: zd,
    style: pf,
    styleTween: yf,
    text: xf,
    textTween: vf,
    remove: of,
    tween: Bd,
    delay: Hd,
    duration: Xd,
    ease: Vd,
    easeVarying: Zd,
    end: kf,
    [Symbol.iterator]: Vt[Symbol.iterator]
  };
  function Af(t) {
    return ((t *= 2) <= 1 ? t * t * t : (t -= 2) * t * t + 2) / 2;
  }
  var Ef = {
    time: null,
    delay: 0,
    duration: 250,
    ease: Af
  };
  function Bf(t, e) {
    for (var i; !(i = t.__transition) || !(i = i[e]); ) if (!(t = t.parentNode)) throw new Error(`transition ${e} not found`);
    return i;
  }
  function Lf(t) {
    var e, i;
    t instanceof ee ? (e = t._id, t = t._name) : (e = Ha(), (i = Ef).time = Zn(), t = t == null ? null : t + "");
    for (var r = this._groups, n = r.length, s = 0; s < n; ++s) for (var o = r[s], a = o.length, l, c = 0; c < a; ++c) (l = o[c]) && Nr(l, t, e, c, o, i || Bf(l, e));
    return new ee(r, this._parents, t, e);
  }
  Ii.prototype.interrupt = wd;
  Ii.prototype.transition = Lf;
  z1 = Math.abs;
  W1 = Math.atan2;
  Y1 = Math.cos;
  H1 = Math.max;
  j1 = Math.min;
  U1 = Math.sin;
  X1 = Math.sqrt;
  gs = 1e-12;
  to = Math.PI;
  ms = to / 2;
  G1 = 2 * to;
  V1 = function(t) {
    return t > 1 ? 0 : t < -1 ? to : Math.acos(t);
  };
  K1 = function(t) {
    return t >= 1 ? ms : t <= -1 ? -ms : Math.asin(t);
  };
  function ja(t) {
    this._context = t;
  }
  ja.prototype = {
    areaStart: function() {
      this._line = 0;
    },
    areaEnd: function() {
      this._line = NaN;
    },
    lineStart: function() {
      this._point = 0;
    },
    lineEnd: function() {
      (this._line || this._line !== 0 && this._point === 1) && this._context.closePath(), this._line = 1 - this._line;
    },
    point: function(t, e) {
      switch (t = +t, e = +e, this._point) {
        case 0:
          this._point = 1, this._line ? this._context.lineTo(t, e) : this._context.moveTo(t, e);
          break;
        case 1:
          this._point = 2;
        default:
          this._context.lineTo(t, e);
          break;
      }
    }
  };
  Ff = function(t) {
    return new ja(t);
  };
  class Ua {
    constructor(e, i) {
      this._context = e, this._x = i;
    }
    areaStart() {
      this._line = 0;
    }
    areaEnd() {
      this._line = NaN;
    }
    lineStart() {
      this._point = 0;
    }
    lineEnd() {
      (this._line || this._line !== 0 && this._point === 1) && this._context.closePath(), this._line = 1 - this._line;
    }
    point(e, i) {
      switch (e = +e, i = +i, this._point) {
        case 0: {
          this._point = 1, this._line ? this._context.lineTo(e, i) : this._context.moveTo(e, i);
          break;
        }
        case 1:
          this._point = 2;
        default: {
          this._x ? this._context.bezierCurveTo(this._x0 = (this._x0 + e) / 2, this._y0, this._x0, i, e, i) : this._context.bezierCurveTo(this._x0, this._y0 = (this._y0 + i) / 2, e, this._y0, e, i);
          break;
        }
      }
      this._x0 = e, this._y0 = i;
    }
  }
  function Of(t) {
    return new Ua(t, true);
  }
  function If(t) {
    return new Ua(t, false);
  }
  function ue() {
  }
  function yr(t, e, i) {
    t._context.bezierCurveTo((2 * t._x0 + t._x1) / 3, (2 * t._y0 + t._y1) / 3, (t._x0 + 2 * t._x1) / 3, (t._y0 + 2 * t._y1) / 3, (t._x0 + 4 * t._x1 + e) / 6, (t._y0 + 4 * t._y1 + i) / 6);
  }
  function Rr(t) {
    this._context = t;
  }
  Rr.prototype = {
    areaStart: function() {
      this._line = 0;
    },
    areaEnd: function() {
      this._line = NaN;
    },
    lineStart: function() {
      this._x0 = this._x1 = this._y0 = this._y1 = NaN, this._point = 0;
    },
    lineEnd: function() {
      switch (this._point) {
        case 3:
          yr(this, this._x1, this._y1);
        case 2:
          this._context.lineTo(this._x1, this._y1);
          break;
      }
      (this._line || this._line !== 0 && this._point === 1) && this._context.closePath(), this._line = 1 - this._line;
    },
    point: function(t, e) {
      switch (t = +t, e = +e, this._point) {
        case 0:
          this._point = 1, this._line ? this._context.lineTo(t, e) : this._context.moveTo(t, e);
          break;
        case 1:
          this._point = 2;
          break;
        case 2:
          this._point = 3, this._context.lineTo((5 * this._x0 + this._x1) / 6, (5 * this._y0 + this._y1) / 6);
        default:
          yr(this, t, e);
          break;
      }
      this._x0 = this._x1, this._x1 = t, this._y0 = this._y1, this._y1 = e;
    }
  };
  Mf = function(t) {
    return new Rr(t);
  };
  function Xa(t) {
    this._context = t;
  }
  Xa.prototype = {
    areaStart: ue,
    areaEnd: ue,
    lineStart: function() {
      this._x0 = this._x1 = this._x2 = this._x3 = this._x4 = this._y0 = this._y1 = this._y2 = this._y3 = this._y4 = NaN, this._point = 0;
    },
    lineEnd: function() {
      switch (this._point) {
        case 1: {
          this._context.moveTo(this._x2, this._y2), this._context.closePath();
          break;
        }
        case 2: {
          this._context.moveTo((this._x2 + 2 * this._x3) / 3, (this._y2 + 2 * this._y3) / 3), this._context.lineTo((this._x3 + 2 * this._x2) / 3, (this._y3 + 2 * this._y2) / 3), this._context.closePath();
          break;
        }
        case 3: {
          this.point(this._x2, this._y2), this.point(this._x3, this._y3), this.point(this._x4, this._y4);
          break;
        }
      }
    },
    point: function(t, e) {
      switch (t = +t, e = +e, this._point) {
        case 0:
          this._point = 1, this._x2 = t, this._y2 = e;
          break;
        case 1:
          this._point = 2, this._x3 = t, this._y3 = e;
          break;
        case 2:
          this._point = 3, this._x4 = t, this._y4 = e, this._context.moveTo((this._x0 + 4 * this._x1 + t) / 6, (this._y0 + 4 * this._y1 + e) / 6);
          break;
        default:
          yr(this, t, e);
          break;
      }
      this._x0 = this._x1, this._x1 = t, this._y0 = this._y1, this._y1 = e;
    }
  };
  function $f(t) {
    return new Xa(t);
  }
  function Ga(t) {
    this._context = t;
  }
  Ga.prototype = {
    areaStart: function() {
      this._line = 0;
    },
    areaEnd: function() {
      this._line = NaN;
    },
    lineStart: function() {
      this._x0 = this._x1 = this._y0 = this._y1 = NaN, this._point = 0;
    },
    lineEnd: function() {
      (this._line || this._line !== 0 && this._point === 3) && this._context.closePath(), this._line = 1 - this._line;
    },
    point: function(t, e) {
      switch (t = +t, e = +e, this._point) {
        case 0:
          this._point = 1;
          break;
        case 1:
          this._point = 2;
          break;
        case 2:
          this._point = 3;
          var i = (this._x0 + 4 * this._x1 + t) / 6, r = (this._y0 + 4 * this._y1 + e) / 6;
          this._line ? this._context.lineTo(i, r) : this._context.moveTo(i, r);
          break;
        case 3:
          this._point = 4;
        default:
          yr(this, t, e);
          break;
      }
      this._x0 = this._x1, this._x1 = t, this._y0 = this._y1, this._y1 = e;
    }
  };
  function Df(t) {
    return new Ga(t);
  }
  function Va(t, e) {
    this._basis = new Rr(t), this._beta = e;
  }
  Va.prototype = {
    lineStart: function() {
      this._x = [], this._y = [], this._basis.lineStart();
    },
    lineEnd: function() {
      var t = this._x, e = this._y, i = t.length - 1;
      if (i > 0) for (var r = t[0], n = e[0], s = t[i] - r, o = e[i] - n, a = -1, l; ++a <= i; ) l = a / i, this._basis.point(this._beta * t[a] + (1 - this._beta) * (r + l * s), this._beta * e[a] + (1 - this._beta) * (n + l * o));
      this._x = this._y = null, this._basis.lineEnd();
    },
    point: function(t, e) {
      this._x.push(+t), this._y.push(+e);
    }
  };
  const Nf = function t(e) {
    function i(r) {
      return e === 1 ? new Rr(r) : new Va(r, e);
    }
    return i.beta = function(r) {
      return t(+r);
    }, i;
  }(0.85);
  function _r(t, e, i) {
    t._context.bezierCurveTo(t._x1 + t._k * (t._x2 - t._x0), t._y1 + t._k * (t._y2 - t._y0), t._x2 + t._k * (t._x1 - e), t._y2 + t._k * (t._y1 - i), t._x2, t._y2);
  }
  function eo(t, e) {
    this._context = t, this._k = (1 - e) / 6;
  }
  eo.prototype = {
    areaStart: function() {
      this._line = 0;
    },
    areaEnd: function() {
      this._line = NaN;
    },
    lineStart: function() {
      this._x0 = this._x1 = this._x2 = this._y0 = this._y1 = this._y2 = NaN, this._point = 0;
    },
    lineEnd: function() {
      switch (this._point) {
        case 2:
          this._context.lineTo(this._x2, this._y2);
          break;
        case 3:
          _r(this, this._x1, this._y1);
          break;
      }
      (this._line || this._line !== 0 && this._point === 1) && this._context.closePath(), this._line = 1 - this._line;
    },
    point: function(t, e) {
      switch (t = +t, e = +e, this._point) {
        case 0:
          this._point = 1, this._line ? this._context.lineTo(t, e) : this._context.moveTo(t, e);
          break;
        case 1:
          this._point = 2, this._x1 = t, this._y1 = e;
          break;
        case 2:
          this._point = 3;
        default:
          _r(this, t, e);
          break;
      }
      this._x0 = this._x1, this._x1 = this._x2, this._x2 = t, this._y0 = this._y1, this._y1 = this._y2, this._y2 = e;
    }
  };
  const Rf = function t(e) {
    function i(r) {
      return new eo(r, e);
    }
    return i.tension = function(r) {
      return t(+r);
    }, i;
  }(0);
  function io(t, e) {
    this._context = t, this._k = (1 - e) / 6;
  }
  io.prototype = {
    areaStart: ue,
    areaEnd: ue,
    lineStart: function() {
      this._x0 = this._x1 = this._x2 = this._x3 = this._x4 = this._x5 = this._y0 = this._y1 = this._y2 = this._y3 = this._y4 = this._y5 = NaN, this._point = 0;
    },
    lineEnd: function() {
      switch (this._point) {
        case 1: {
          this._context.moveTo(this._x3, this._y3), this._context.closePath();
          break;
        }
        case 2: {
          this._context.lineTo(this._x3, this._y3), this._context.closePath();
          break;
        }
        case 3: {
          this.point(this._x3, this._y3), this.point(this._x4, this._y4), this.point(this._x5, this._y5);
          break;
        }
      }
    },
    point: function(t, e) {
      switch (t = +t, e = +e, this._point) {
        case 0:
          this._point = 1, this._x3 = t, this._y3 = e;
          break;
        case 1:
          this._point = 2, this._context.moveTo(this._x4 = t, this._y4 = e);
          break;
        case 2:
          this._point = 3, this._x5 = t, this._y5 = e;
          break;
        default:
          _r(this, t, e);
          break;
      }
      this._x0 = this._x1, this._x1 = this._x2, this._x2 = t, this._y0 = this._y1, this._y1 = this._y2, this._y2 = e;
    }
  };
  const Pf = function t(e) {
    function i(r) {
      return new io(r, e);
    }
    return i.tension = function(r) {
      return t(+r);
    }, i;
  }(0);
  function ro(t, e) {
    this._context = t, this._k = (1 - e) / 6;
  }
  ro.prototype = {
    areaStart: function() {
      this._line = 0;
    },
    areaEnd: function() {
      this._line = NaN;
    },
    lineStart: function() {
      this._x0 = this._x1 = this._x2 = this._y0 = this._y1 = this._y2 = NaN, this._point = 0;
    },
    lineEnd: function() {
      (this._line || this._line !== 0 && this._point === 3) && this._context.closePath(), this._line = 1 - this._line;
    },
    point: function(t, e) {
      switch (t = +t, e = +e, this._point) {
        case 0:
          this._point = 1;
          break;
        case 1:
          this._point = 2;
          break;
        case 2:
          this._point = 3, this._line ? this._context.lineTo(this._x2, this._y2) : this._context.moveTo(this._x2, this._y2);
          break;
        case 3:
          this._point = 4;
        default:
          _r(this, t, e);
          break;
      }
      this._x0 = this._x1, this._x1 = this._x2, this._x2 = t, this._y0 = this._y1, this._y1 = this._y2, this._y2 = e;
    }
  };
  const qf = function t(e) {
    function i(r) {
      return new ro(r, e);
    }
    return i.tension = function(r) {
      return t(+r);
    }, i;
  }(0);
  function no(t, e, i) {
    var r = t._x1, n = t._y1, s = t._x2, o = t._y2;
    if (t._l01_a > gs) {
      var a = 2 * t._l01_2a + 3 * t._l01_a * t._l12_a + t._l12_2a, l = 3 * t._l01_a * (t._l01_a + t._l12_a);
      r = (r * a - t._x0 * t._l12_2a + t._x2 * t._l01_2a) / l, n = (n * a - t._y0 * t._l12_2a + t._y2 * t._l01_2a) / l;
    }
    if (t._l23_a > gs) {
      var c = 2 * t._l23_2a + 3 * t._l23_a * t._l12_a + t._l12_2a, h = 3 * t._l23_a * (t._l23_a + t._l12_a);
      s = (s * c + t._x1 * t._l23_2a - e * t._l12_2a) / h, o = (o * c + t._y1 * t._l23_2a - i * t._l12_2a) / h;
    }
    t._context.bezierCurveTo(r, n, s, o, t._x2, t._y2);
  }
  function Ka(t, e) {
    this._context = t, this._alpha = e;
  }
  Ka.prototype = {
    areaStart: function() {
      this._line = 0;
    },
    areaEnd: function() {
      this._line = NaN;
    },
    lineStart: function() {
      this._x0 = this._x1 = this._x2 = this._y0 = this._y1 = this._y2 = NaN, this._l01_a = this._l12_a = this._l23_a = this._l01_2a = this._l12_2a = this._l23_2a = this._point = 0;
    },
    lineEnd: function() {
      switch (this._point) {
        case 2:
          this._context.lineTo(this._x2, this._y2);
          break;
        case 3:
          this.point(this._x2, this._y2);
          break;
      }
      (this._line || this._line !== 0 && this._point === 1) && this._context.closePath(), this._line = 1 - this._line;
    },
    point: function(t, e) {
      if (t = +t, e = +e, this._point) {
        var i = this._x2 - t, r = this._y2 - e;
        this._l23_a = Math.sqrt(this._l23_2a = Math.pow(i * i + r * r, this._alpha));
      }
      switch (this._point) {
        case 0:
          this._point = 1, this._line ? this._context.lineTo(t, e) : this._context.moveTo(t, e);
          break;
        case 1:
          this._point = 2;
          break;
        case 2:
          this._point = 3;
        default:
          no(this, t, e);
          break;
      }
      this._l01_a = this._l12_a, this._l12_a = this._l23_a, this._l01_2a = this._l12_2a, this._l12_2a = this._l23_2a, this._x0 = this._x1, this._x1 = this._x2, this._x2 = t, this._y0 = this._y1, this._y1 = this._y2, this._y2 = e;
    }
  };
  const zf = function t(e) {
    function i(r) {
      return e ? new Ka(r, e) : new eo(r, 0);
    }
    return i.alpha = function(r) {
      return t(+r);
    }, i;
  }(0.5);
  function Za(t, e) {
    this._context = t, this._alpha = e;
  }
  Za.prototype = {
    areaStart: ue,
    areaEnd: ue,
    lineStart: function() {
      this._x0 = this._x1 = this._x2 = this._x3 = this._x4 = this._x5 = this._y0 = this._y1 = this._y2 = this._y3 = this._y4 = this._y5 = NaN, this._l01_a = this._l12_a = this._l23_a = this._l01_2a = this._l12_2a = this._l23_2a = this._point = 0;
    },
    lineEnd: function() {
      switch (this._point) {
        case 1: {
          this._context.moveTo(this._x3, this._y3), this._context.closePath();
          break;
        }
        case 2: {
          this._context.lineTo(this._x3, this._y3), this._context.closePath();
          break;
        }
        case 3: {
          this.point(this._x3, this._y3), this.point(this._x4, this._y4), this.point(this._x5, this._y5);
          break;
        }
      }
    },
    point: function(t, e) {
      if (t = +t, e = +e, this._point) {
        var i = this._x2 - t, r = this._y2 - e;
        this._l23_a = Math.sqrt(this._l23_2a = Math.pow(i * i + r * r, this._alpha));
      }
      switch (this._point) {
        case 0:
          this._point = 1, this._x3 = t, this._y3 = e;
          break;
        case 1:
          this._point = 2, this._context.moveTo(this._x4 = t, this._y4 = e);
          break;
        case 2:
          this._point = 3, this._x5 = t, this._y5 = e;
          break;
        default:
          no(this, t, e);
          break;
      }
      this._l01_a = this._l12_a, this._l12_a = this._l23_a, this._l01_2a = this._l12_2a, this._l12_2a = this._l23_2a, this._x0 = this._x1, this._x1 = this._x2, this._x2 = t, this._y0 = this._y1, this._y1 = this._y2, this._y2 = e;
    }
  };
  const Wf = function t(e) {
    function i(r) {
      return e ? new Za(r, e) : new io(r, 0);
    }
    return i.alpha = function(r) {
      return t(+r);
    }, i;
  }(0.5);
  function Ja(t, e) {
    this._context = t, this._alpha = e;
  }
  Ja.prototype = {
    areaStart: function() {
      this._line = 0;
    },
    areaEnd: function() {
      this._line = NaN;
    },
    lineStart: function() {
      this._x0 = this._x1 = this._x2 = this._y0 = this._y1 = this._y2 = NaN, this._l01_a = this._l12_a = this._l23_a = this._l01_2a = this._l12_2a = this._l23_2a = this._point = 0;
    },
    lineEnd: function() {
      (this._line || this._line !== 0 && this._point === 3) && this._context.closePath(), this._line = 1 - this._line;
    },
    point: function(t, e) {
      if (t = +t, e = +e, this._point) {
        var i = this._x2 - t, r = this._y2 - e;
        this._l23_a = Math.sqrt(this._l23_2a = Math.pow(i * i + r * r, this._alpha));
      }
      switch (this._point) {
        case 0:
          this._point = 1;
          break;
        case 1:
          this._point = 2;
          break;
        case 2:
          this._point = 3, this._line ? this._context.lineTo(this._x2, this._y2) : this._context.moveTo(this._x2, this._y2);
          break;
        case 3:
          this._point = 4;
        default:
          no(this, t, e);
          break;
      }
      this._l01_a = this._l12_a, this._l12_a = this._l23_a, this._l01_2a = this._l12_2a, this._l12_2a = this._l23_2a, this._x0 = this._x1, this._x1 = this._x2, this._x2 = t, this._y0 = this._y1, this._y1 = this._y2, this._y2 = e;
    }
  };
  const Yf = function t(e) {
    function i(r) {
      return e ? new Ja(r, e) : new ro(r, 0);
    }
    return i.alpha = function(r) {
      return t(+r);
    }, i;
  }(0.5);
  function Qa(t) {
    this._context = t;
  }
  Qa.prototype = {
    areaStart: ue,
    areaEnd: ue,
    lineStart: function() {
      this._point = 0;
    },
    lineEnd: function() {
      this._point && this._context.closePath();
    },
    point: function(t, e) {
      t = +t, e = +e, this._point ? this._context.lineTo(t, e) : (this._point = 1, this._context.moveTo(t, e));
    }
  };
  function Hf(t) {
    return new Qa(t);
  }
  function ys(t) {
    return t < 0 ? -1 : 1;
  }
  function _s(t, e, i) {
    var r = t._x1 - t._x0, n = e - t._x1, s = (t._y1 - t._y0) / (r || n < 0 && -0), o = (i - t._y1) / (n || r < 0 && -0), a = (s * n + o * r) / (r + n);
    return (ys(s) + ys(o)) * Math.min(Math.abs(s), Math.abs(o), 0.5 * Math.abs(a)) || 0;
  }
  function Cs(t, e) {
    var i = t._x1 - t._x0;
    return i ? (3 * (t._y1 - t._y0) / i - e) / 2 : e;
  }
  function cn(t, e, i) {
    var r = t._x0, n = t._y0, s = t._x1, o = t._y1, a = (s - r) / 3;
    t._context.bezierCurveTo(r + a, n + a * e, s - a, o - a * i, s, o);
  }
  function Cr(t) {
    this._context = t;
  }
  Cr.prototype = {
    areaStart: function() {
      this._line = 0;
    },
    areaEnd: function() {
      this._line = NaN;
    },
    lineStart: function() {
      this._x0 = this._x1 = this._y0 = this._y1 = this._t0 = NaN, this._point = 0;
    },
    lineEnd: function() {
      switch (this._point) {
        case 2:
          this._context.lineTo(this._x1, this._y1);
          break;
        case 3:
          cn(this, this._t0, Cs(this, this._t0));
          break;
      }
      (this._line || this._line !== 0 && this._point === 1) && this._context.closePath(), this._line = 1 - this._line;
    },
    point: function(t, e) {
      var i = NaN;
      if (t = +t, e = +e, !(t === this._x1 && e === this._y1)) {
        switch (this._point) {
          case 0:
            this._point = 1, this._line ? this._context.lineTo(t, e) : this._context.moveTo(t, e);
            break;
          case 1:
            this._point = 2;
            break;
          case 2:
            this._point = 3, cn(this, Cs(this, i = _s(this, t, e)), i);
            break;
          default:
            cn(this, this._t0, i = _s(this, t, e));
            break;
        }
        this._x0 = this._x1, this._x1 = t, this._y0 = this._y1, this._y1 = e, this._t0 = i;
      }
    }
  };
  function tl(t) {
    this._context = new el(t);
  }
  (tl.prototype = Object.create(Cr.prototype)).point = function(t, e) {
    Cr.prototype.point.call(this, e, t);
  };
  function el(t) {
    this._context = t;
  }
  el.prototype = {
    moveTo: function(t, e) {
      this._context.moveTo(e, t);
    },
    closePath: function() {
      this._context.closePath();
    },
    lineTo: function(t, e) {
      this._context.lineTo(e, t);
    },
    bezierCurveTo: function(t, e, i, r, n, s) {
      this._context.bezierCurveTo(e, t, r, i, s, n);
    }
  };
  function jf(t) {
    return new Cr(t);
  }
  function Uf(t) {
    return new tl(t);
  }
  function il(t) {
    this._context = t;
  }
  il.prototype = {
    areaStart: function() {
      this._line = 0;
    },
    areaEnd: function() {
      this._line = NaN;
    },
    lineStart: function() {
      this._x = [], this._y = [];
    },
    lineEnd: function() {
      var t = this._x, e = this._y, i = t.length;
      if (i) if (this._line ? this._context.lineTo(t[0], e[0]) : this._context.moveTo(t[0], e[0]), i === 2) this._context.lineTo(t[1], e[1]);
      else for (var r = xs(t), n = xs(e), s = 0, o = 1; o < i; ++s, ++o) this._context.bezierCurveTo(r[0][s], n[0][s], r[1][s], n[1][s], t[o], e[o]);
      (this._line || this._line !== 0 && i === 1) && this._context.closePath(), this._line = 1 - this._line, this._x = this._y = null;
    },
    point: function(t, e) {
      this._x.push(+t), this._y.push(+e);
    }
  };
  function xs(t) {
    var e, i = t.length - 1, r, n = new Array(i), s = new Array(i), o = new Array(i);
    for (n[0] = 0, s[0] = 2, o[0] = t[0] + 2 * t[1], e = 1; e < i - 1; ++e) n[e] = 1, s[e] = 4, o[e] = 4 * t[e] + 2 * t[e + 1];
    for (n[i - 1] = 2, s[i - 1] = 7, o[i - 1] = 8 * t[i - 1] + t[i], e = 1; e < i; ++e) r = n[e] / s[e - 1], s[e] -= r, o[e] -= r * o[e - 1];
    for (n[i - 1] = o[i - 1] / s[i - 1], e = i - 2; e >= 0; --e) n[e] = (o[e] - n[e + 1]) / s[e];
    for (s[i - 1] = (t[i] + n[i - 1]) / 2, e = 0; e < i - 1; ++e) s[e] = 2 * t[e + 1] - n[e + 1];
    return [
      n,
      s
    ];
  }
  function Xf(t) {
    return new il(t);
  }
  function Pr(t, e) {
    this._context = t, this._t = e;
  }
  Pr.prototype = {
    areaStart: function() {
      this._line = 0;
    },
    areaEnd: function() {
      this._line = NaN;
    },
    lineStart: function() {
      this._x = this._y = NaN, this._point = 0;
    },
    lineEnd: function() {
      0 < this._t && this._t < 1 && this._point === 2 && this._context.lineTo(this._x, this._y), (this._line || this._line !== 0 && this._point === 1) && this._context.closePath(), this._line >= 0 && (this._t = 1 - this._t, this._line = 1 - this._line);
    },
    point: function(t, e) {
      switch (t = +t, e = +e, this._point) {
        case 0:
          this._point = 1, this._line ? this._context.lineTo(t, e) : this._context.moveTo(t, e);
          break;
        case 1:
          this._point = 2;
        default: {
          if (this._t <= 0) this._context.lineTo(this._x, e), this._context.lineTo(t, e);
          else {
            var i = this._x * (1 - this._t) + t * this._t;
            this._context.lineTo(i, this._y), this._context.lineTo(i, e);
          }
          break;
        }
      }
      this._x = t, this._y = e;
    }
  };
  function Gf(t) {
    return new Pr(t, 0.5);
  }
  function Vf(t) {
    return new Pr(t, 0);
  }
  function Kf(t) {
    return new Pr(t, 1);
  }
  function pi(t, e, i) {
    this.k = t, this.x = e, this.y = i;
  }
  pi.prototype = {
    constructor: pi,
    scale: function(t) {
      return t === 1 ? this : new pi(this.k * t, this.x, this.y);
    },
    translate: function(t, e) {
      return t === 0 & e === 0 ? this : new pi(this.k, this.x + this.k * t, this.y + this.k * e);
    },
    apply: function(t) {
      return [
        t[0] * this.k + this.x,
        t[1] * this.k + this.y
      ];
    },
    applyX: function(t) {
      return t * this.k + this.x;
    },
    applyY: function(t) {
      return t * this.k + this.y;
    },
    invert: function(t) {
      return [
        (t[0] - this.x) / this.k,
        (t[1] - this.y) / this.k
      ];
    },
    invertX: function(t) {
      return (t - this.x) / this.k;
    },
    invertY: function(t) {
      return (t - this.y) / this.k;
    },
    rescaleX: function(t) {
      return t.copy().domain(t.range().map(this.invertX, this).map(t.invert, t));
    },
    rescaleY: function(t) {
      return t.copy().domain(t.range().map(this.invertY, this).map(t.invert, t));
    },
    toString: function() {
      return "translate(" + this.x + "," + this.y + ") scale(" + this.k + ")";
    }
  };
  pi.prototype;
  const { entries: rl, setPrototypeOf: bs, isFrozen: Zf, getPrototypeOf: Jf, getOwnPropertyDescriptor: Qf } = Object;
  let { freeze: pt, seal: wt, create: nl } = Object, { apply: Fn, construct: On } = typeof Reflect < "u" && Reflect;
  pt || (pt = function(e) {
    return e;
  });
  wt || (wt = function(e) {
    return e;
  });
  Fn || (Fn = function(e, i, r) {
    return e.apply(i, r);
  });
  On || (On = function(e, i) {
    return new e(...i);
  });
  const Vi = bt(Array.prototype.forEach), Ts = bt(Array.prototype.pop), oi = bt(Array.prototype.push), nr = bt(String.prototype.toLowerCase), hn = bt(String.prototype.toString), vs = bt(String.prototype.match), si = bt(String.prototype.replace), tp = bt(String.prototype.indexOf), ep = bt(String.prototype.trim), Ot = bt(Object.prototype.hasOwnProperty), ut = bt(RegExp.prototype.test), ai = ip(TypeError);
  function bt(t) {
    return function(e) {
      for (var i = arguments.length, r = new Array(i > 1 ? i - 1 : 0), n = 1; n < i; n++) r[n - 1] = arguments[n];
      return Fn(t, e, r);
    };
  }
  function ip(t) {
    return function() {
      for (var e = arguments.length, i = new Array(e), r = 0; r < e; r++) i[r] = arguments[r];
      return On(t, i);
    };
  }
  function U(t, e) {
    let i = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : nr;
    bs && bs(t, null);
    let r = e.length;
    for (; r--; ) {
      let n = e[r];
      if (typeof n == "string") {
        const s = i(n);
        s !== n && (Zf(e) || (e[r] = s), n = s);
      }
      t[n] = true;
    }
    return t;
  }
  function rp(t) {
    for (let e = 0; e < t.length; e++) Ot(t, e) || (t[e] = null);
    return t;
  }
  function ge(t) {
    const e = nl(null);
    for (const [i, r] of rl(t)) Ot(t, i) && (Array.isArray(r) ? e[i] = rp(r) : r && typeof r == "object" && r.constructor === Object ? e[i] = ge(r) : e[i] = r);
    return e;
  }
  function li(t, e) {
    for (; t !== null; ) {
      const r = Qf(t, e);
      if (r) {
        if (r.get) return bt(r.get);
        if (typeof r.value == "function") return bt(r.value);
      }
      t = Jf(t);
    }
    function i() {
      return null;
    }
    return i;
  }
  const Ss = pt([
    "a",
    "abbr",
    "acronym",
    "address",
    "area",
    "article",
    "aside",
    "audio",
    "b",
    "bdi",
    "bdo",
    "big",
    "blink",
    "blockquote",
    "body",
    "br",
    "button",
    "canvas",
    "caption",
    "center",
    "cite",
    "code",
    "col",
    "colgroup",
    "content",
    "data",
    "datalist",
    "dd",
    "decorator",
    "del",
    "details",
    "dfn",
    "dialog",
    "dir",
    "div",
    "dl",
    "dt",
    "element",
    "em",
    "fieldset",
    "figcaption",
    "figure",
    "font",
    "footer",
    "form",
    "h1",
    "h2",
    "h3",
    "h4",
    "h5",
    "h6",
    "head",
    "header",
    "hgroup",
    "hr",
    "html",
    "i",
    "img",
    "input",
    "ins",
    "kbd",
    "label",
    "legend",
    "li",
    "main",
    "map",
    "mark",
    "marquee",
    "menu",
    "menuitem",
    "meter",
    "nav",
    "nobr",
    "ol",
    "optgroup",
    "option",
    "output",
    "p",
    "picture",
    "pre",
    "progress",
    "q",
    "rp",
    "rt",
    "ruby",
    "s",
    "samp",
    "section",
    "select",
    "shadow",
    "small",
    "source",
    "spacer",
    "span",
    "strike",
    "strong",
    "style",
    "sub",
    "summary",
    "sup",
    "table",
    "tbody",
    "td",
    "template",
    "textarea",
    "tfoot",
    "th",
    "thead",
    "time",
    "tr",
    "track",
    "tt",
    "u",
    "ul",
    "var",
    "video",
    "wbr"
  ]), un = pt([
    "svg",
    "a",
    "altglyph",
    "altglyphdef",
    "altglyphitem",
    "animatecolor",
    "animatemotion",
    "animatetransform",
    "circle",
    "clippath",
    "defs",
    "desc",
    "ellipse",
    "filter",
    "font",
    "g",
    "glyph",
    "glyphref",
    "hkern",
    "image",
    "line",
    "lineargradient",
    "marker",
    "mask",
    "metadata",
    "mpath",
    "path",
    "pattern",
    "polygon",
    "polyline",
    "radialgradient",
    "rect",
    "stop",
    "style",
    "switch",
    "symbol",
    "text",
    "textpath",
    "title",
    "tref",
    "tspan",
    "view",
    "vkern"
  ]), dn = pt([
    "feBlend",
    "feColorMatrix",
    "feComponentTransfer",
    "feComposite",
    "feConvolveMatrix",
    "feDiffuseLighting",
    "feDisplacementMap",
    "feDistantLight",
    "feDropShadow",
    "feFlood",
    "feFuncA",
    "feFuncB",
    "feFuncG",
    "feFuncR",
    "feGaussianBlur",
    "feImage",
    "feMerge",
    "feMergeNode",
    "feMorphology",
    "feOffset",
    "fePointLight",
    "feSpecularLighting",
    "feSpotLight",
    "feTile",
    "feTurbulence"
  ]), np = pt([
    "animate",
    "color-profile",
    "cursor",
    "discard",
    "font-face",
    "font-face-format",
    "font-face-name",
    "font-face-src",
    "font-face-uri",
    "foreignobject",
    "hatch",
    "hatchpath",
    "mesh",
    "meshgradient",
    "meshpatch",
    "meshrow",
    "missing-glyph",
    "script",
    "set",
    "solidcolor",
    "unknown",
    "use"
  ]), fn = pt([
    "math",
    "menclose",
    "merror",
    "mfenced",
    "mfrac",
    "mglyph",
    "mi",
    "mlabeledtr",
    "mmultiscripts",
    "mn",
    "mo",
    "mover",
    "mpadded",
    "mphantom",
    "mroot",
    "mrow",
    "ms",
    "mspace",
    "msqrt",
    "mstyle",
    "msub",
    "msup",
    "msubsup",
    "mtable",
    "mtd",
    "mtext",
    "mtr",
    "munder",
    "munderover",
    "mprescripts"
  ]), op = pt([
    "maction",
    "maligngroup",
    "malignmark",
    "mlongdiv",
    "mscarries",
    "mscarry",
    "msgroup",
    "mstack",
    "msline",
    "msrow",
    "semantics",
    "annotation",
    "annotation-xml",
    "mprescripts",
    "none"
  ]), ks = pt([
    "#text"
  ]), ws = pt([
    "accept",
    "action",
    "align",
    "alt",
    "autocapitalize",
    "autocomplete",
    "autopictureinpicture",
    "autoplay",
    "background",
    "bgcolor",
    "border",
    "capture",
    "cellpadding",
    "cellspacing",
    "checked",
    "cite",
    "class",
    "clear",
    "color",
    "cols",
    "colspan",
    "controls",
    "controlslist",
    "coords",
    "crossorigin",
    "datetime",
    "decoding",
    "default",
    "dir",
    "disabled",
    "disablepictureinpicture",
    "disableremoteplayback",
    "download",
    "draggable",
    "enctype",
    "enterkeyhint",
    "face",
    "for",
    "headers",
    "height",
    "hidden",
    "high",
    "href",
    "hreflang",
    "id",
    "inputmode",
    "integrity",
    "ismap",
    "kind",
    "label",
    "lang",
    "list",
    "loading",
    "loop",
    "low",
    "max",
    "maxlength",
    "media",
    "method",
    "min",
    "minlength",
    "multiple",
    "muted",
    "name",
    "nonce",
    "noshade",
    "novalidate",
    "nowrap",
    "open",
    "optimum",
    "pattern",
    "placeholder",
    "playsinline",
    "popover",
    "popovertarget",
    "popovertargetaction",
    "poster",
    "preload",
    "pubdate",
    "radiogroup",
    "readonly",
    "rel",
    "required",
    "rev",
    "reversed",
    "role",
    "rows",
    "rowspan",
    "spellcheck",
    "scope",
    "selected",
    "shape",
    "size",
    "sizes",
    "span",
    "srclang",
    "start",
    "src",
    "srcset",
    "step",
    "style",
    "summary",
    "tabindex",
    "title",
    "translate",
    "type",
    "usemap",
    "valign",
    "value",
    "width",
    "wrap",
    "xmlns",
    "slot"
  ]), pn = pt([
    "accent-height",
    "accumulate",
    "additive",
    "alignment-baseline",
    "ascent",
    "attributename",
    "attributetype",
    "azimuth",
    "basefrequency",
    "baseline-shift",
    "begin",
    "bias",
    "by",
    "class",
    "clip",
    "clippathunits",
    "clip-path",
    "clip-rule",
    "color",
    "color-interpolation",
    "color-interpolation-filters",
    "color-profile",
    "color-rendering",
    "cx",
    "cy",
    "d",
    "dx",
    "dy",
    "diffuseconstant",
    "direction",
    "display",
    "divisor",
    "dur",
    "edgemode",
    "elevation",
    "end",
    "fill",
    "fill-opacity",
    "fill-rule",
    "filter",
    "filterunits",
    "flood-color",
    "flood-opacity",
    "font-family",
    "font-size",
    "font-size-adjust",
    "font-stretch",
    "font-style",
    "font-variant",
    "font-weight",
    "fx",
    "fy",
    "g1",
    "g2",
    "glyph-name",
    "glyphref",
    "gradientunits",
    "gradienttransform",
    "height",
    "href",
    "id",
    "image-rendering",
    "in",
    "in2",
    "k",
    "k1",
    "k2",
    "k3",
    "k4",
    "kerning",
    "keypoints",
    "keysplines",
    "keytimes",
    "lang",
    "lengthadjust",
    "letter-spacing",
    "kernelmatrix",
    "kernelunitlength",
    "lighting-color",
    "local",
    "marker-end",
    "marker-mid",
    "marker-start",
    "markerheight",
    "markerunits",
    "markerwidth",
    "maskcontentunits",
    "maskunits",
    "max",
    "mask",
    "media",
    "method",
    "mode",
    "min",
    "name",
    "numoctaves",
    "offset",
    "operator",
    "opacity",
    "order",
    "orient",
    "orientation",
    "origin",
    "overflow",
    "paint-order",
    "path",
    "pathlength",
    "patterncontentunits",
    "patterntransform",
    "patternunits",
    "points",
    "preservealpha",
    "preserveaspectratio",
    "primitiveunits",
    "r",
    "rx",
    "ry",
    "radius",
    "refx",
    "refy",
    "repeatcount",
    "repeatdur",
    "restart",
    "result",
    "rotate",
    "scale",
    "seed",
    "shape-rendering",
    "specularconstant",
    "specularexponent",
    "spreadmethod",
    "startoffset",
    "stddeviation",
    "stitchtiles",
    "stop-color",
    "stop-opacity",
    "stroke-dasharray",
    "stroke-dashoffset",
    "stroke-linecap",
    "stroke-linejoin",
    "stroke-miterlimit",
    "stroke-opacity",
    "stroke",
    "stroke-width",
    "style",
    "surfacescale",
    "systemlanguage",
    "tabindex",
    "targetx",
    "targety",
    "transform",
    "transform-origin",
    "text-anchor",
    "text-decoration",
    "text-rendering",
    "textlength",
    "type",
    "u1",
    "u2",
    "unicode",
    "values",
    "viewbox",
    "visibility",
    "version",
    "vert-adv-y",
    "vert-origin-x",
    "vert-origin-y",
    "width",
    "word-spacing",
    "wrap",
    "writing-mode",
    "xchannelselector",
    "ychannelselector",
    "x",
    "x1",
    "x2",
    "xmlns",
    "y",
    "y1",
    "y2",
    "z",
    "zoomandpan"
  ]), As = pt([
    "accent",
    "accentunder",
    "align",
    "bevelled",
    "close",
    "columnsalign",
    "columnlines",
    "columnspan",
    "denomalign",
    "depth",
    "dir",
    "display",
    "displaystyle",
    "encoding",
    "fence",
    "frame",
    "height",
    "href",
    "id",
    "largeop",
    "length",
    "linethickness",
    "lspace",
    "lquote",
    "mathbackground",
    "mathcolor",
    "mathsize",
    "mathvariant",
    "maxsize",
    "minsize",
    "movablelimits",
    "notation",
    "numalign",
    "open",
    "rowalign",
    "rowlines",
    "rowspacing",
    "rowspan",
    "rspace",
    "rquote",
    "scriptlevel",
    "scriptminsize",
    "scriptsizemultiplier",
    "selection",
    "separator",
    "separators",
    "stretchy",
    "subscriptshift",
    "supscriptshift",
    "symmetric",
    "voffset",
    "width",
    "xmlns"
  ]), Ki = pt([
    "xlink:href",
    "xml:id",
    "xlink:title",
    "xml:space",
    "xmlns:xlink"
  ]), sp = wt(/\{\{[\w\W]*|[\w\W]*\}\}/gm), ap = wt(/<%[\w\W]*|[\w\W]*%>/gm), lp = wt(/\${[\w\W]*}/gm), cp = wt(/^data-[\-\w.\u00B7-\uFFFF]/), hp = wt(/^aria-[\-\w]+$/), ol = wt(/^(?:(?:(?:f|ht)tps?|mailto|tel|callto|sms|cid|xmpp):|[^a-z]|[a-z+.\-]+(?:[^a-z+.\-:]|$))/i), up = wt(/^(?:\w+script|data):/i), dp = wt(/[\u0000-\u0020\u00A0\u1680\u180E\u2000-\u2029\u205F\u3000]/g), sl = wt(/^html$/i), fp = wt(/^[a-z][.\w]*(-[.\w]+)+$/i);
  var Es = Object.freeze({
    __proto__: null,
    MUSTACHE_EXPR: sp,
    ERB_EXPR: ap,
    TMPLIT_EXPR: lp,
    DATA_ATTR: cp,
    ARIA_ATTR: hp,
    IS_ALLOWED_URI: ol,
    IS_SCRIPT_OR_DATA: up,
    ATTR_WHITESPACE: dp,
    DOCTYPE_NAME: sl,
    CUSTOM_ELEMENT: fp
  });
  const ci = {
    element: 1,
    text: 3,
    progressingInstruction: 7,
    comment: 8,
    document: 9
  }, pp = function() {
    return typeof window > "u" ? null : window;
  }, gp = function(e, i) {
    if (typeof e != "object" || typeof e.createPolicy != "function") return null;
    let r = null;
    const n = "data-tt-policy-suffix";
    i && i.hasAttribute(n) && (r = i.getAttribute(n));
    const s = "dompurify" + (r ? "#" + r : "");
    try {
      return e.createPolicy(s, {
        createHTML(o) {
          return o;
        },
        createScriptURL(o) {
          return o;
        }
      });
    } catch {
      return console.warn("TrustedTypes policy " + s + " could not be created."), null;
    }
  };
  function al() {
    let t = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : pp();
    const e = (F) => al(F);
    if (e.version = "3.1.6", e.removed = [], !t || !t.document || t.document.nodeType !== ci.document) return e.isSupported = false, e;
    let { document: i } = t;
    const r = i, n = r.currentScript, { DocumentFragment: s, HTMLTemplateElement: o, Node: a, Element: l, NodeFilter: c, NamedNodeMap: h = t.NamedNodeMap || t.MozNamedAttrMap, HTMLFormElement: d, DOMParser: u, trustedTypes: f } = t, m = l.prototype, y = li(m, "cloneNode"), T = li(m, "remove"), E = li(m, "nextSibling"), C = li(m, "childNodes"), x = li(m, "parentNode");
    if (typeof o == "function") {
      const F = i.createElement("template");
      F.content && F.content.ownerDocument && (i = F.content.ownerDocument);
    }
    let B, w = "";
    const { implementation: Y, createNodeIterator: N, createDocumentFragment: rt, getElementsByTagName: V } = i, { importNode: H } = r;
    let P = {};
    e.isSupported = typeof rl == "function" && typeof x == "function" && Y && Y.createHTMLDocument !== void 0;
    const { MUSTACHE_EXPR: Et, ERB_EXPR: re, TMPLIT_EXPR: R, DATA_ATTR: k, ARIA_ATTR: b, IS_SCRIPT_OR_DATA: L, ATTR_WHITESPACE: S, CUSTOM_ELEMENT: M } = Es;
    let { IS_ALLOWED_URI: W } = Es, z = null;
    const Z = U({}, [
      ...Ss,
      ...un,
      ...dn,
      ...fn,
      ...ks
    ]);
    let j = null;
    const et = U({}, [
      ...ws,
      ...pn,
      ...As,
      ...Ki
    ]);
    let X = Object.seal(nl(null, {
      tagNameCheck: {
        writable: true,
        configurable: false,
        enumerable: true,
        value: null
      },
      attributeNameCheck: {
        writable: true,
        configurable: false,
        enumerable: true,
        value: null
      },
      allowCustomizedBuiltInElements: {
        writable: true,
        configurable: false,
        enumerable: true,
        value: false
      }
    })), Tt = null, Bt = null, ne = true, Lt = true, nt = false, Ft = true, vt = false, oe = true, pe = false, Qr = false, tn = false, Ee = false, Pi = false, qi = false, Bo = true, Lo = false;
    const zc = "user-content-";
    let en = true, ti = false, Be = {}, Le = null;
    const Fo = U({}, [
      "annotation-xml",
      "audio",
      "colgroup",
      "desc",
      "foreignobject",
      "head",
      "iframe",
      "math",
      "mi",
      "mn",
      "mo",
      "ms",
      "mtext",
      "noembed",
      "noframes",
      "noscript",
      "plaintext",
      "script",
      "style",
      "svg",
      "template",
      "thead",
      "title",
      "video",
      "xmp"
    ]);
    let Oo = null;
    const Io = U({}, [
      "audio",
      "video",
      "img",
      "source",
      "image",
      "track"
    ]);
    let rn = null;
    const Mo = U({}, [
      "alt",
      "class",
      "for",
      "id",
      "label",
      "name",
      "pattern",
      "placeholder",
      "role",
      "summary",
      "title",
      "value",
      "style",
      "xmlns"
    ]), zi = "http://www.w3.org/1998/Math/MathML", Wi = "http://www.w3.org/2000/svg", Xt = "http://www.w3.org/1999/xhtml";
    let Fe = Xt, nn = false, on = null;
    const Wc = U({}, [
      zi,
      Wi,
      Xt
    ], hn);
    let ei = null;
    const Yc = [
      "application/xhtml+xml",
      "text/html"
    ], Hc = "text/html";
    let it = null, Oe = null;
    const jc = i.createElement("form"), $o = function(p) {
      return p instanceof RegExp || p instanceof Function;
    }, sn = function() {
      let p = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : {};
      if (!(Oe && Oe === p)) {
        if ((!p || typeof p != "object") && (p = {}), p = ge(p), ei = Yc.indexOf(p.PARSER_MEDIA_TYPE) === -1 ? Hc : p.PARSER_MEDIA_TYPE, it = ei === "application/xhtml+xml" ? hn : nr, z = Ot(p, "ALLOWED_TAGS") ? U({}, p.ALLOWED_TAGS, it) : Z, j = Ot(p, "ALLOWED_ATTR") ? U({}, p.ALLOWED_ATTR, it) : et, on = Ot(p, "ALLOWED_NAMESPACES") ? U({}, p.ALLOWED_NAMESPACES, hn) : Wc, rn = Ot(p, "ADD_URI_SAFE_ATTR") ? U(ge(Mo), p.ADD_URI_SAFE_ATTR, it) : Mo, Oo = Ot(p, "ADD_DATA_URI_TAGS") ? U(ge(Io), p.ADD_DATA_URI_TAGS, it) : Io, Le = Ot(p, "FORBID_CONTENTS") ? U({}, p.FORBID_CONTENTS, it) : Fo, Tt = Ot(p, "FORBID_TAGS") ? U({}, p.FORBID_TAGS, it) : {}, Bt = Ot(p, "FORBID_ATTR") ? U({}, p.FORBID_ATTR, it) : {}, Be = Ot(p, "USE_PROFILES") ? p.USE_PROFILES : false, ne = p.ALLOW_ARIA_ATTR !== false, Lt = p.ALLOW_DATA_ATTR !== false, nt = p.ALLOW_UNKNOWN_PROTOCOLS || false, Ft = p.ALLOW_SELF_CLOSE_IN_ATTR !== false, vt = p.SAFE_FOR_TEMPLATES || false, oe = p.SAFE_FOR_XML !== false, pe = p.WHOLE_DOCUMENT || false, Ee = p.RETURN_DOM || false, Pi = p.RETURN_DOM_FRAGMENT || false, qi = p.RETURN_TRUSTED_TYPE || false, tn = p.FORCE_BODY || false, Bo = p.SANITIZE_DOM !== false, Lo = p.SANITIZE_NAMED_PROPS || false, en = p.KEEP_CONTENT !== false, ti = p.IN_PLACE || false, W = p.ALLOWED_URI_REGEXP || ol, Fe = p.NAMESPACE || Xt, X = p.CUSTOM_ELEMENT_HANDLING || {}, p.CUSTOM_ELEMENT_HANDLING && $o(p.CUSTOM_ELEMENT_HANDLING.tagNameCheck) && (X.tagNameCheck = p.CUSTOM_ELEMENT_HANDLING.tagNameCheck), p.CUSTOM_ELEMENT_HANDLING && $o(p.CUSTOM_ELEMENT_HANDLING.attributeNameCheck) && (X.attributeNameCheck = p.CUSTOM_ELEMENT_HANDLING.attributeNameCheck), p.CUSTOM_ELEMENT_HANDLING && typeof p.CUSTOM_ELEMENT_HANDLING.allowCustomizedBuiltInElements == "boolean" && (X.allowCustomizedBuiltInElements = p.CUSTOM_ELEMENT_HANDLING.allowCustomizedBuiltInElements), vt && (Lt = false), Pi && (Ee = true), Be && (z = U({}, ks), j = [], Be.html === true && (U(z, Ss), U(j, ws)), Be.svg === true && (U(z, un), U(j, pn), U(j, Ki)), Be.svgFilters === true && (U(z, dn), U(j, pn), U(j, Ki)), Be.mathMl === true && (U(z, fn), U(j, As), U(j, Ki))), p.ADD_TAGS && (z === Z && (z = ge(z)), U(z, p.ADD_TAGS, it)), p.ADD_ATTR && (j === et && (j = ge(j)), U(j, p.ADD_ATTR, it)), p.ADD_URI_SAFE_ATTR && U(rn, p.ADD_URI_SAFE_ATTR, it), p.FORBID_CONTENTS && (Le === Fo && (Le = ge(Le)), U(Le, p.FORBID_CONTENTS, it)), en && (z["#text"] = true), pe && U(z, [
          "html",
          "head",
          "body"
        ]), z.table && (U(z, [
          "tbody"
        ]), delete Tt.tbody), p.TRUSTED_TYPES_POLICY) {
          if (typeof p.TRUSTED_TYPES_POLICY.createHTML != "function") throw ai('TRUSTED_TYPES_POLICY configuration option must provide a "createHTML" hook.');
          if (typeof p.TRUSTED_TYPES_POLICY.createScriptURL != "function") throw ai('TRUSTED_TYPES_POLICY configuration option must provide a "createScriptURL" hook.');
          B = p.TRUSTED_TYPES_POLICY, w = B.createHTML("");
        } else B === void 0 && (B = gp(f, n)), B !== null && typeof w == "string" && (w = B.createHTML(""));
        pt && pt(p), Oe = p;
      }
    }, Do = U({}, [
      "mi",
      "mo",
      "mn",
      "ms",
      "mtext"
    ]), No = U({}, [
      "foreignobject",
      "annotation-xml"
    ]), Uc = U({}, [
      "title",
      "style",
      "font",
      "a",
      "script"
    ]), Ro = U({}, [
      ...un,
      ...dn,
      ...np
    ]), Po = U({}, [
      ...fn,
      ...op
    ]), Xc = function(p) {
      let _ = x(p);
      (!_ || !_.tagName) && (_ = {
        namespaceURI: Fe,
        tagName: "template"
      });
      const A = nr(p.tagName), G = nr(_.tagName);
      return on[p.namespaceURI] ? p.namespaceURI === Wi ? _.namespaceURI === Xt ? A === "svg" : _.namespaceURI === zi ? A === "svg" && (G === "annotation-xml" || Do[G]) : !!Ro[A] : p.namespaceURI === zi ? _.namespaceURI === Xt ? A === "math" : _.namespaceURI === Wi ? A === "math" && No[G] : !!Po[A] : p.namespaceURI === Xt ? _.namespaceURI === Wi && !No[G] || _.namespaceURI === zi && !Do[G] ? false : !Po[A] && (Uc[A] || !Ro[A]) : !!(ei === "application/xhtml+xml" && on[p.namespaceURI]) : false;
    }, Dt = function(p) {
      oi(e.removed, {
        element: p
      });
      try {
        x(p).removeChild(p);
      } catch {
        T(p);
      }
    }, Yi = function(p, _) {
      try {
        oi(e.removed, {
          attribute: _.getAttributeNode(p),
          from: _
        });
      } catch {
        oi(e.removed, {
          attribute: null,
          from: _
        });
      }
      if (_.removeAttribute(p), p === "is" && !j[p]) if (Ee || Pi) try {
        Dt(_);
      } catch {
      }
      else try {
        _.setAttribute(p, "");
      } catch {
      }
    }, qo = function(p) {
      let _ = null, A = null;
      if (tn) p = "<remove></remove>" + p;
      else {
        const ot = vs(p, /^[\r\n\t ]+/);
        A = ot && ot[0];
      }
      ei === "application/xhtml+xml" && Fe === Xt && (p = '<html xmlns="http://www.w3.org/1999/xhtml"><head></head><body>' + p + "</body></html>");
      const G = B ? B.createHTML(p) : p;
      if (Fe === Xt) try {
        _ = new u().parseFromString(G, ei);
      } catch {
      }
      if (!_ || !_.documentElement) {
        _ = Y.createDocument(Fe, "template", null);
        try {
          _.documentElement.innerHTML = nn ? w : G;
        } catch {
        }
      }
      const st = _.body || _.documentElement;
      return p && A && st.insertBefore(i.createTextNode(A), st.childNodes[0] || null), Fe === Xt ? V.call(_, pe ? "html" : "body")[0] : pe ? _.documentElement : st;
    }, zo = function(p) {
      return N.call(p.ownerDocument || p, p, c.SHOW_ELEMENT | c.SHOW_COMMENT | c.SHOW_TEXT | c.SHOW_PROCESSING_INSTRUCTION | c.SHOW_CDATA_SECTION, null);
    }, Wo = function(p) {
      return p instanceof d && (typeof p.nodeName != "string" || typeof p.textContent != "string" || typeof p.removeChild != "function" || !(p.attributes instanceof h) || typeof p.removeAttribute != "function" || typeof p.setAttribute != "function" || typeof p.namespaceURI != "string" || typeof p.insertBefore != "function" || typeof p.hasChildNodes != "function");
    }, Yo = function(p) {
      return typeof a == "function" && p instanceof a;
    }, Gt = function(p, _, A) {
      P[p] && Vi(P[p], (G) => {
        G.call(e, _, A, Oe);
      });
    }, Ho = function(p) {
      let _ = null;
      if (Gt("beforeSanitizeElements", p, null), Wo(p)) return Dt(p), true;
      const A = it(p.nodeName);
      if (Gt("uponSanitizeElement", p, {
        tagName: A,
        allowedTags: z
      }), p.hasChildNodes() && !Yo(p.firstElementChild) && ut(/<[/\w]/g, p.innerHTML) && ut(/<[/\w]/g, p.textContent) || p.nodeType === ci.progressingInstruction || oe && p.nodeType === ci.comment && ut(/<[/\w]/g, p.data)) return Dt(p), true;
      if (!z[A] || Tt[A]) {
        if (!Tt[A] && Uo(A) && (X.tagNameCheck instanceof RegExp && ut(X.tagNameCheck, A) || X.tagNameCheck instanceof Function && X.tagNameCheck(A))) return false;
        if (en && !Le[A]) {
          const G = x(p) || p.parentNode, st = C(p) || p.childNodes;
          if (st && G) {
            const ot = st.length;
            for (let gt = ot - 1; gt >= 0; --gt) {
              const Nt = y(st[gt], true);
              Nt.__removalCount = (p.__removalCount || 0) + 1, G.insertBefore(Nt, E(p));
            }
          }
        }
        return Dt(p), true;
      }
      return p instanceof l && !Xc(p) || (A === "noscript" || A === "noembed" || A === "noframes") && ut(/<\/no(script|embed|frames)/i, p.innerHTML) ? (Dt(p), true) : (vt && p.nodeType === ci.text && (_ = p.textContent, Vi([
        Et,
        re,
        R
      ], (G) => {
        _ = si(_, G, " ");
      }), p.textContent !== _ && (oi(e.removed, {
        element: p.cloneNode()
      }), p.textContent = _)), Gt("afterSanitizeElements", p, null), false);
    }, jo = function(p, _, A) {
      if (Bo && (_ === "id" || _ === "name") && (A in i || A in jc)) return false;
      if (!(Lt && !Bt[_] && ut(k, _))) {
        if (!(ne && ut(b, _))) {
          if (!j[_] || Bt[_]) {
            if (!(Uo(p) && (X.tagNameCheck instanceof RegExp && ut(X.tagNameCheck, p) || X.tagNameCheck instanceof Function && X.tagNameCheck(p)) && (X.attributeNameCheck instanceof RegExp && ut(X.attributeNameCheck, _) || X.attributeNameCheck instanceof Function && X.attributeNameCheck(_)) || _ === "is" && X.allowCustomizedBuiltInElements && (X.tagNameCheck instanceof RegExp && ut(X.tagNameCheck, A) || X.tagNameCheck instanceof Function && X.tagNameCheck(A)))) return false;
          } else if (!rn[_]) {
            if (!ut(W, si(A, S, ""))) {
              if (!((_ === "src" || _ === "xlink:href" || _ === "href") && p !== "script" && tp(A, "data:") === 0 && Oo[p])) {
                if (!(nt && !ut(L, si(A, S, "")))) {
                  if (A) return false;
                }
              }
            }
          }
        }
      }
      return true;
    }, Uo = function(p) {
      return p !== "annotation-xml" && vs(p, M);
    }, Xo = function(p) {
      Gt("beforeSanitizeAttributes", p, null);
      const { attributes: _ } = p;
      if (!_) return;
      const A = {
        attrName: "",
        attrValue: "",
        keepAttr: true,
        allowedAttributes: j
      };
      let G = _.length;
      for (; G--; ) {
        const st = _[G], { name: ot, namespaceURI: gt, value: Nt } = st, ii = it(ot);
        let ht = ot === "value" ? Nt : ep(Nt);
        if (A.attrName = ii, A.attrValue = ht, A.keepAttr = true, A.forceKeepAttr = void 0, Gt("uponSanitizeAttribute", p, A), ht = A.attrValue, oe && ut(/((--!?|])>)|<\/(style|title)/i, ht)) {
          Yi(ot, p);
          continue;
        }
        if (A.forceKeepAttr || (Yi(ot, p), !A.keepAttr)) continue;
        if (!Ft && ut(/\/>/i, ht)) {
          Yi(ot, p);
          continue;
        }
        vt && Vi([
          Et,
          re,
          R
        ], (Vo) => {
          ht = si(ht, Vo, " ");
        });
        const Go = it(p.nodeName);
        if (jo(Go, ii, ht)) {
          if (Lo && (ii === "id" || ii === "name") && (Yi(ot, p), ht = zc + ht), B && typeof f == "object" && typeof f.getAttributeType == "function" && !gt) switch (f.getAttributeType(Go, ii)) {
            case "TrustedHTML": {
              ht = B.createHTML(ht);
              break;
            }
            case "TrustedScriptURL": {
              ht = B.createScriptURL(ht);
              break;
            }
          }
          try {
            gt ? p.setAttributeNS(gt, ot, ht) : p.setAttribute(ot, ht), Wo(p) ? Dt(p) : Ts(e.removed);
          } catch {
          }
        }
      }
      Gt("afterSanitizeAttributes", p, null);
    }, Gc = function F(p) {
      let _ = null;
      const A = zo(p);
      for (Gt("beforeSanitizeShadowDOM", p, null); _ = A.nextNode(); ) Gt("uponSanitizeShadowNode", _, null), !Ho(_) && (_.content instanceof s && F(_.content), Xo(_));
      Gt("afterSanitizeShadowDOM", p, null);
    };
    return e.sanitize = function(F) {
      let p = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {}, _ = null, A = null, G = null, st = null;
      if (nn = !F, nn && (F = "<!-->"), typeof F != "string" && !Yo(F)) if (typeof F.toString == "function") {
        if (F = F.toString(), typeof F != "string") throw ai("dirty is not a string, aborting");
      } else throw ai("toString is not a function");
      if (!e.isSupported) return F;
      if (Qr || sn(p), e.removed = [], typeof F == "string" && (ti = false), ti) {
        if (F.nodeName) {
          const Nt = it(F.nodeName);
          if (!z[Nt] || Tt[Nt]) throw ai("root node is forbidden and cannot be sanitized in-place");
        }
      } else if (F instanceof a) _ = qo("<!---->"), A = _.ownerDocument.importNode(F, true), A.nodeType === ci.element && A.nodeName === "BODY" || A.nodeName === "HTML" ? _ = A : _.appendChild(A);
      else {
        if (!Ee && !vt && !pe && F.indexOf("<") === -1) return B && qi ? B.createHTML(F) : F;
        if (_ = qo(F), !_) return Ee ? null : qi ? w : "";
      }
      _ && tn && Dt(_.firstChild);
      const ot = zo(ti ? F : _);
      for (; G = ot.nextNode(); ) Ho(G) || (G.content instanceof s && Gc(G.content), Xo(G));
      if (ti) return F;
      if (Ee) {
        if (Pi) for (st = rt.call(_.ownerDocument); _.firstChild; ) st.appendChild(_.firstChild);
        else st = _;
        return (j.shadowroot || j.shadowrootmode) && (st = H.call(r, st, true)), st;
      }
      let gt = pe ? _.outerHTML : _.innerHTML;
      return pe && z["!doctype"] && _.ownerDocument && _.ownerDocument.doctype && _.ownerDocument.doctype.name && ut(sl, _.ownerDocument.doctype.name) && (gt = "<!DOCTYPE " + _.ownerDocument.doctype.name + `>
` + gt), vt && Vi([
        Et,
        re,
        R
      ], (Nt) => {
        gt = si(gt, Nt, " ");
      }), B && qi ? B.createHTML(gt) : gt;
    }, e.setConfig = function() {
      let F = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : {};
      sn(F), Qr = true;
    }, e.clearConfig = function() {
      Oe = null, Qr = false;
    }, e.isValidAttribute = function(F, p, _) {
      Oe || sn({});
      const A = it(F), G = it(p);
      return jo(A, G, _);
    }, e.addHook = function(F, p) {
      typeof p == "function" && (P[F] = P[F] || [], oi(P[F], p));
    }, e.removeHook = function(F) {
      if (P[F]) return Ts(P[F]);
    }, e.removeHooks = function(F) {
      P[F] && (P[F] = []);
    }, e.removeAllHooks = function() {
      P = {};
    }, e;
  }
  var Ye = al();
  let or, mp, yp, ae;
  or = {
    min: {
      r: 0,
      g: 0,
      b: 0,
      s: 0,
      l: 0,
      a: 0
    },
    max: {
      r: 255,
      g: 255,
      b: 255,
      h: 360,
      s: 100,
      l: 100,
      a: 1
    },
    clamp: {
      r: (t) => t >= 255 ? 255 : t < 0 ? 0 : t,
      g: (t) => t >= 255 ? 255 : t < 0 ? 0 : t,
      b: (t) => t >= 255 ? 255 : t < 0 ? 0 : t,
      h: (t) => t % 360,
      s: (t) => t >= 100 ? 100 : t < 0 ? 0 : t,
      l: (t) => t >= 100 ? 100 : t < 0 ? 0 : t,
      a: (t) => t >= 1 ? 1 : t < 0 ? 0 : t
    },
    toLinear: (t) => {
      const e = t / 255;
      return t > 0.03928 ? Math.pow((e + 0.055) / 1.055, 2.4) : e / 12.92;
    },
    hue2rgb: (t, e, i) => (i < 0 && (i += 1), i > 1 && (i -= 1), i < 1 / 6 ? t + (e - t) * 6 * i : i < 1 / 2 ? e : i < 2 / 3 ? t + (e - t) * (2 / 3 - i) * 6 : t),
    hsl2rgb: ({ h: t, s: e, l: i }, r) => {
      if (!e) return i * 2.55;
      t /= 360, e /= 100, i /= 100;
      const n = i < 0.5 ? i * (1 + e) : i + e - i * e, s = 2 * i - n;
      switch (r) {
        case "r":
          return or.hue2rgb(s, n, t + 1 / 3) * 255;
        case "g":
          return or.hue2rgb(s, n, t) * 255;
        case "b":
          return or.hue2rgb(s, n, t - 1 / 3) * 255;
      }
    },
    rgb2hsl: ({ r: t, g: e, b: i }, r) => {
      t /= 255, e /= 255, i /= 255;
      const n = Math.max(t, e, i), s = Math.min(t, e, i), o = (n + s) / 2;
      if (r === "l") return o * 100;
      if (n === s) return 0;
      const a = n - s, l = o > 0.5 ? a / (2 - n - s) : a / (n + s);
      if (r === "s") return l * 100;
      switch (n) {
        case t:
          return ((e - i) / a + (e < i ? 6 : 0)) * 60;
        case e:
          return ((i - t) / a + 2) * 60;
        case i:
          return ((t - e) / a + 4) * 60;
        default:
          return -1;
      }
    }
  };
  mp = {
    clamp: (t, e, i) => e > i ? Math.min(e, Math.max(i, t)) : Math.min(i, Math.max(e, t)),
    round: (t) => Math.round(t * 1e10) / 1e10
  };
  yp = {
    dec2hex: (t) => {
      const e = Math.round(t).toString(16);
      return e.length > 1 ? e : `0${e}`;
    }
  };
  q = {
    channel: or,
    lang: mp,
    unit: yp
  };
  ae = {};
  for (let t = 0; t <= 255; t++) ae[t] = q.unit.dec2hex(t);
  const at = {
    ALL: 0,
    RGB: 1,
    HSL: 2
  };
  class _p {
    constructor() {
      this.type = at.ALL;
    }
    get() {
      return this.type;
    }
    set(e) {
      if (this.type && this.type !== e) throw new Error("Cannot change both RGB and HSL channels at the same time");
      this.type = e;
    }
    reset() {
      this.type = at.ALL;
    }
    is(e) {
      return this.type === e;
    }
  }
  class Cp {
    constructor(e, i) {
      this.color = i, this.changed = false, this.data = e, this.type = new _p();
    }
    set(e, i) {
      return this.color = i, this.changed = false, this.data = e, this.type.type = at.ALL, this;
    }
    _ensureHSL() {
      const e = this.data, { h: i, s: r, l: n } = e;
      i === void 0 && (e.h = q.channel.rgb2hsl(e, "h")), r === void 0 && (e.s = q.channel.rgb2hsl(e, "s")), n === void 0 && (e.l = q.channel.rgb2hsl(e, "l"));
    }
    _ensureRGB() {
      const e = this.data, { r: i, g: r, b: n } = e;
      i === void 0 && (e.r = q.channel.hsl2rgb(e, "r")), r === void 0 && (e.g = q.channel.hsl2rgb(e, "g")), n === void 0 && (e.b = q.channel.hsl2rgb(e, "b"));
    }
    get r() {
      const e = this.data, i = e.r;
      return !this.type.is(at.HSL) && i !== void 0 ? i : (this._ensureHSL(), q.channel.hsl2rgb(e, "r"));
    }
    get g() {
      const e = this.data, i = e.g;
      return !this.type.is(at.HSL) && i !== void 0 ? i : (this._ensureHSL(), q.channel.hsl2rgb(e, "g"));
    }
    get b() {
      const e = this.data, i = e.b;
      return !this.type.is(at.HSL) && i !== void 0 ? i : (this._ensureHSL(), q.channel.hsl2rgb(e, "b"));
    }
    get h() {
      const e = this.data, i = e.h;
      return !this.type.is(at.RGB) && i !== void 0 ? i : (this._ensureRGB(), q.channel.rgb2hsl(e, "h"));
    }
    get s() {
      const e = this.data, i = e.s;
      return !this.type.is(at.RGB) && i !== void 0 ? i : (this._ensureRGB(), q.channel.rgb2hsl(e, "s"));
    }
    get l() {
      const e = this.data, i = e.l;
      return !this.type.is(at.RGB) && i !== void 0 ? i : (this._ensureRGB(), q.channel.rgb2hsl(e, "l"));
    }
    get a() {
      return this.data.a;
    }
    set r(e) {
      this.type.set(at.RGB), this.changed = true, this.data.r = e;
    }
    set g(e) {
      this.type.set(at.RGB), this.changed = true, this.data.g = e;
    }
    set b(e) {
      this.type.set(at.RGB), this.changed = true, this.data.b = e;
    }
    set h(e) {
      this.type.set(at.HSL), this.changed = true, this.data.h = e;
    }
    set s(e) {
      this.type.set(at.HSL), this.changed = true, this.data.s = e;
    }
    set l(e) {
      this.type.set(at.HSL), this.changed = true, this.data.l = e;
    }
    set a(e) {
      this.changed = true, this.data.a = e;
    }
  }
  let qr, Re, Ce, yi, gi, ll, xp, bp, cl, g, Tp, v;
  qr = new Cp({
    r: 0,
    g: 0,
    b: 0,
    a: 0
  }, "transparent");
  Re = {
    re: /^#((?:[a-f0-9]{2}){2,4}|[a-f0-9]{3})$/i,
    parse: (t) => {
      if (t.charCodeAt(0) !== 35) return;
      const e = t.match(Re.re);
      if (!e) return;
      const i = e[1], r = parseInt(i, 16), n = i.length, s = n % 4 === 0, o = n > 4, a = o ? 1 : 17, l = o ? 8 : 4, c = s ? 0 : -1, h = o ? 255 : 15;
      return qr.set({
        r: (r >> l * (c + 3) & h) * a,
        g: (r >> l * (c + 2) & h) * a,
        b: (r >> l * (c + 1) & h) * a,
        a: s ? (r & h) * a / 255 : 1
      }, t);
    },
    stringify: (t) => {
      const { r: e, g: i, b: r, a: n } = t;
      return n < 1 ? `#${ae[Math.round(e)]}${ae[Math.round(i)]}${ae[Math.round(r)]}${ae[Math.round(n * 255)]}` : `#${ae[Math.round(e)]}${ae[Math.round(i)]}${ae[Math.round(r)]}`;
    }
  };
  Ce = {
    re: /^hsla?\(\s*?(-?(?:\d+(?:\.\d+)?|(?:\.\d+))(?:e-?\d+)?(?:deg|grad|rad|turn)?)\s*?(?:,|\s)\s*?(-?(?:\d+(?:\.\d+)?|(?:\.\d+))(?:e-?\d+)?%)\s*?(?:,|\s)\s*?(-?(?:\d+(?:\.\d+)?|(?:\.\d+))(?:e-?\d+)?%)(?:\s*?(?:,|\/)\s*?\+?(-?(?:\d+(?:\.\d+)?|(?:\.\d+))(?:e-?\d+)?(%)?))?\s*?\)$/i,
    hueRe: /^(.+?)(deg|grad|rad|turn)$/i,
    _hue2deg: (t) => {
      const e = t.match(Ce.hueRe);
      if (e) {
        const [, i, r] = e;
        switch (r) {
          case "grad":
            return q.channel.clamp.h(parseFloat(i) * 0.9);
          case "rad":
            return q.channel.clamp.h(parseFloat(i) * 180 / Math.PI);
          case "turn":
            return q.channel.clamp.h(parseFloat(i) * 360);
        }
      }
      return q.channel.clamp.h(parseFloat(t));
    },
    parse: (t) => {
      const e = t.charCodeAt(0);
      if (e !== 104 && e !== 72) return;
      const i = t.match(Ce.re);
      if (!i) return;
      const [, r, n, s, o, a] = i;
      return qr.set({
        h: Ce._hue2deg(r),
        s: q.channel.clamp.s(parseFloat(n)),
        l: q.channel.clamp.l(parseFloat(s)),
        a: o ? q.channel.clamp.a(a ? parseFloat(o) / 100 : parseFloat(o)) : 1
      }, t);
    },
    stringify: (t) => {
      const { h: e, s: i, l: r, a: n } = t;
      return n < 1 ? `hsla(${q.lang.round(e)}, ${q.lang.round(i)}%, ${q.lang.round(r)}%, ${n})` : `hsl(${q.lang.round(e)}, ${q.lang.round(i)}%, ${q.lang.round(r)}%)`;
    }
  };
  yi = {
    colors: {
      aliceblue: "#f0f8ff",
      antiquewhite: "#faebd7",
      aqua: "#00ffff",
      aquamarine: "#7fffd4",
      azure: "#f0ffff",
      beige: "#f5f5dc",
      bisque: "#ffe4c4",
      black: "#000000",
      blanchedalmond: "#ffebcd",
      blue: "#0000ff",
      blueviolet: "#8a2be2",
      brown: "#a52a2a",
      burlywood: "#deb887",
      cadetblue: "#5f9ea0",
      chartreuse: "#7fff00",
      chocolate: "#d2691e",
      coral: "#ff7f50",
      cornflowerblue: "#6495ed",
      cornsilk: "#fff8dc",
      crimson: "#dc143c",
      cyanaqua: "#00ffff",
      darkblue: "#00008b",
      darkcyan: "#008b8b",
      darkgoldenrod: "#b8860b",
      darkgray: "#a9a9a9",
      darkgreen: "#006400",
      darkgrey: "#a9a9a9",
      darkkhaki: "#bdb76b",
      darkmagenta: "#8b008b",
      darkolivegreen: "#556b2f",
      darkorange: "#ff8c00",
      darkorchid: "#9932cc",
      darkred: "#8b0000",
      darksalmon: "#e9967a",
      darkseagreen: "#8fbc8f",
      darkslateblue: "#483d8b",
      darkslategray: "#2f4f4f",
      darkslategrey: "#2f4f4f",
      darkturquoise: "#00ced1",
      darkviolet: "#9400d3",
      deeppink: "#ff1493",
      deepskyblue: "#00bfff",
      dimgray: "#696969",
      dimgrey: "#696969",
      dodgerblue: "#1e90ff",
      firebrick: "#b22222",
      floralwhite: "#fffaf0",
      forestgreen: "#228b22",
      fuchsia: "#ff00ff",
      gainsboro: "#dcdcdc",
      ghostwhite: "#f8f8ff",
      gold: "#ffd700",
      goldenrod: "#daa520",
      gray: "#808080",
      green: "#008000",
      greenyellow: "#adff2f",
      grey: "#808080",
      honeydew: "#f0fff0",
      hotpink: "#ff69b4",
      indianred: "#cd5c5c",
      indigo: "#4b0082",
      ivory: "#fffff0",
      khaki: "#f0e68c",
      lavender: "#e6e6fa",
      lavenderblush: "#fff0f5",
      lawngreen: "#7cfc00",
      lemonchiffon: "#fffacd",
      lightblue: "#add8e6",
      lightcoral: "#f08080",
      lightcyan: "#e0ffff",
      lightgoldenrodyellow: "#fafad2",
      lightgray: "#d3d3d3",
      lightgreen: "#90ee90",
      lightgrey: "#d3d3d3",
      lightpink: "#ffb6c1",
      lightsalmon: "#ffa07a",
      lightseagreen: "#20b2aa",
      lightskyblue: "#87cefa",
      lightslategray: "#778899",
      lightslategrey: "#778899",
      lightsteelblue: "#b0c4de",
      lightyellow: "#ffffe0",
      lime: "#00ff00",
      limegreen: "#32cd32",
      linen: "#faf0e6",
      magenta: "#ff00ff",
      maroon: "#800000",
      mediumaquamarine: "#66cdaa",
      mediumblue: "#0000cd",
      mediumorchid: "#ba55d3",
      mediumpurple: "#9370db",
      mediumseagreen: "#3cb371",
      mediumslateblue: "#7b68ee",
      mediumspringgreen: "#00fa9a",
      mediumturquoise: "#48d1cc",
      mediumvioletred: "#c71585",
      midnightblue: "#191970",
      mintcream: "#f5fffa",
      mistyrose: "#ffe4e1",
      moccasin: "#ffe4b5",
      navajowhite: "#ffdead",
      navy: "#000080",
      oldlace: "#fdf5e6",
      olive: "#808000",
      olivedrab: "#6b8e23",
      orange: "#ffa500",
      orangered: "#ff4500",
      orchid: "#da70d6",
      palegoldenrod: "#eee8aa",
      palegreen: "#98fb98",
      paleturquoise: "#afeeee",
      palevioletred: "#db7093",
      papayawhip: "#ffefd5",
      peachpuff: "#ffdab9",
      peru: "#cd853f",
      pink: "#ffc0cb",
      plum: "#dda0dd",
      powderblue: "#b0e0e6",
      purple: "#800080",
      rebeccapurple: "#663399",
      red: "#ff0000",
      rosybrown: "#bc8f8f",
      royalblue: "#4169e1",
      saddlebrown: "#8b4513",
      salmon: "#fa8072",
      sandybrown: "#f4a460",
      seagreen: "#2e8b57",
      seashell: "#fff5ee",
      sienna: "#a0522d",
      silver: "#c0c0c0",
      skyblue: "#87ceeb",
      slateblue: "#6a5acd",
      slategray: "#708090",
      slategrey: "#708090",
      snow: "#fffafa",
      springgreen: "#00ff7f",
      tan: "#d2b48c",
      teal: "#008080",
      thistle: "#d8bfd8",
      transparent: "#00000000",
      turquoise: "#40e0d0",
      violet: "#ee82ee",
      wheat: "#f5deb3",
      white: "#ffffff",
      whitesmoke: "#f5f5f5",
      yellow: "#ffff00",
      yellowgreen: "#9acd32"
    },
    parse: (t) => {
      t = t.toLowerCase();
      const e = yi.colors[t];
      if (e) return Re.parse(e);
    },
    stringify: (t) => {
      const e = Re.stringify(t);
      for (const i in yi.colors) if (yi.colors[i] === e) return i;
    }
  };
  gi = {
    re: /^rgba?\(\s*?(-?(?:\d+(?:\.\d+)?|(?:\.\d+))(?:e\d+)?(%?))\s*?(?:,|\s)\s*?(-?(?:\d+(?:\.\d+)?|(?:\.\d+))(?:e\d+)?(%?))\s*?(?:,|\s)\s*?(-?(?:\d+(?:\.\d+)?|(?:\.\d+))(?:e\d+)?(%?))(?:\s*?(?:,|\/)\s*?\+?(-?(?:\d+(?:\.\d+)?|(?:\.\d+))(?:e\d+)?(%?)))?\s*?\)$/i,
    parse: (t) => {
      const e = t.charCodeAt(0);
      if (e !== 114 && e !== 82) return;
      const i = t.match(gi.re);
      if (!i) return;
      const [, r, n, s, o, a, l, c, h] = i;
      return qr.set({
        r: q.channel.clamp.r(n ? parseFloat(r) * 2.55 : parseFloat(r)),
        g: q.channel.clamp.g(o ? parseFloat(s) * 2.55 : parseFloat(s)),
        b: q.channel.clamp.b(l ? parseFloat(a) * 2.55 : parseFloat(a)),
        a: c ? q.channel.clamp.a(h ? parseFloat(c) / 100 : parseFloat(c)) : 1
      }, t);
    },
    stringify: (t) => {
      const { r: e, g: i, b: r, a: n } = t;
      return n < 1 ? `rgba(${q.lang.round(e)}, ${q.lang.round(i)}, ${q.lang.round(r)}, ${q.lang.round(n)})` : `rgb(${q.lang.round(e)}, ${q.lang.round(i)}, ${q.lang.round(r)})`;
    }
  };
  Wt = {
    format: {
      keyword: yi,
      hex: Re,
      rgb: gi,
      rgba: gi,
      hsl: Ce,
      hsla: Ce
    },
    parse: (t) => {
      if (typeof t != "string") return t;
      const e = Re.parse(t) || gi.parse(t) || Ce.parse(t) || yi.parse(t);
      if (e) return e;
      throw new Error(`Unsupported color format: "${t}"`);
    },
    stringify: (t) => !t.changed && t.color ? t.color : t.type.is(at.HSL) || t.data.r === void 0 ? Ce.stringify(t) : t.a < 1 || !Number.isInteger(t.r) || !Number.isInteger(t.g) || !Number.isInteger(t.b) ? gi.stringify(t) : Re.stringify(t)
  };
  ll = (t, e) => {
    const i = Wt.parse(t);
    for (const r in e) i[r] = q.channel.clamp[r](e[r]);
    return Wt.stringify(i);
  };
  _i = (t, e, i = 0, r = 1) => {
    if (typeof t != "number") return ll(t, {
      a: e
    });
    const n = qr.set({
      r: q.channel.clamp.r(t),
      g: q.channel.clamp.g(e),
      b: q.channel.clamp.b(i),
      a: q.channel.clamp.a(r)
    });
    return Wt.stringify(n);
  };
  xp = (t) => {
    const { r: e, g: i, b: r } = Wt.parse(t), n = 0.2126 * q.channel.toLinear(e) + 0.7152 * q.channel.toLinear(i) + 0.0722 * q.channel.toLinear(r);
    return q.lang.round(n);
  };
  bp = (t) => xp(t) >= 0.5;
  $i = (t) => !bp(t);
  cl = (t, e, i) => {
    const r = Wt.parse(t), n = r[e], s = q.channel.clamp[e](n + i);
    return n !== s && (r[e] = s), Wt.stringify(r);
  };
  O = (t, e) => cl(t, "l", e);
  D = (t, e) => cl(t, "l", -e);
  g = (t, e) => {
    const i = Wt.parse(t), r = {};
    for (const n in e) e[n] && (r[n] = i[n] + e[n]);
    return ll(t, r);
  };
  Tp = (t, e, i = 50) => {
    const { r, g: n, b: s, a: o } = Wt.parse(t), { r: a, g: l, b: c, a: h } = Wt.parse(e), d = i / 100, u = d * 2 - 1, f = o - h, y = ((u * f === -1 ? u : (u + f) / (1 + u * f)) + 1) / 2, T = 1 - y, E = r * y + a * T, C = n * y + l * T, x = s * y + c * T, B = o * d + h * (1 - d);
    return _i(E, C, x, B);
  };
  v = (t, e = 100) => {
    const i = Wt.parse(t);
    return i.r = 255 - i.r, i.g = 255 - i.g, i.b = 255 - i.b, Tp(i, t, e);
  };
  let hl, vp, Ut, ul, Sp, kp, hi;
  hl = typeof Hi == "object" && Hi && Hi.Object === Object && Hi;
  vp = typeof self == "object" && self && self.Object === Object && self;
  Ut = hl || vp || Function("return this")();
  xr = Ut.Symbol;
  ul = Object.prototype;
  Sp = ul.hasOwnProperty;
  kp = ul.toString;
  hi = xr ? xr.toStringTag : void 0;
  function wp(t) {
    var e = Sp.call(t, hi), i = t[hi];
    try {
      t[hi] = void 0;
      var r = true;
    } catch {
    }
    var n = kp.call(t);
    return r && (e ? t[hi] = i : delete t[hi]), n;
  }
  var Ap = Object.prototype, Ep = Ap.toString;
  function Bp(t) {
    return Ep.call(t);
  }
  var Lp = "[object Null]", Fp = "[object Undefined]", Bs = xr ? xr.toStringTag : void 0;
  Ke = function(t) {
    return t == null ? t === void 0 ? Fp : Lp : Bs && Bs in Object(t) ? wp(t) : Bp(t);
  };
  ke = function(t) {
    var e = typeof t;
    return t != null && (e == "object" || e == "function");
  };
  var Op = "[object AsyncFunction]", Ip = "[object Function]", Mp = "[object GeneratorFunction]", $p = "[object Proxy]";
  oo = function(t) {
    if (!ke(t)) return false;
    var e = Ke(t);
    return e == Ip || e == Mp || e == Op || e == $p;
  };
  var gn = Ut["__core-js_shared__"], Ls = function() {
    var t = /[^.]+$/.exec(gn && gn.keys && gn.keys.IE_PROTO || "");
    return t ? "Symbol(src)_1." + t : "";
  }();
  function Dp(t) {
    return !!Ls && Ls in t;
  }
  var Np = Function.prototype, Rp = Np.toString;
  function we(t) {
    if (t != null) {
      try {
        return Rp.call(t);
      } catch {
      }
      try {
        return t + "";
      } catch {
      }
    }
    return "";
  }
  var Pp = /[\\^$.*+?()[\]{}|]/g, qp = /^\[object .+?Constructor\]$/, zp = Function.prototype, Wp = Object.prototype, Yp = zp.toString, Hp = Wp.hasOwnProperty, jp = RegExp("^" + Yp.call(Hp).replace(Pp, "\\$&").replace(/hasOwnProperty|(function).*?(?=\\\()| for .+?(?=\\\])/g, "$1.*?") + "$");
  function Up(t) {
    if (!ke(t) || Dp(t)) return false;
    var e = oo(t) ? jp : qp;
    return e.test(we(t));
  }
  function Xp(t, e) {
    return t == null ? void 0 : t[e];
  }
  function Ae(t, e) {
    var i = Xp(t, e);
    return Up(i) ? i : void 0;
  }
  var Ai = Ae(Object, "create");
  function Gp() {
    this.__data__ = Ai ? Ai(null) : {}, this.size = 0;
  }
  function Vp(t) {
    var e = this.has(t) && delete this.__data__[t];
    return this.size -= e ? 1 : 0, e;
  }
  var Kp = "__lodash_hash_undefined__", Zp = Object.prototype, Jp = Zp.hasOwnProperty;
  function Qp(t) {
    var e = this.__data__;
    if (Ai) {
      var i = e[t];
      return i === Kp ? void 0 : i;
    }
    return Jp.call(e, t) ? e[t] : void 0;
  }
  var tg = Object.prototype, eg = tg.hasOwnProperty;
  function ig(t) {
    var e = this.__data__;
    return Ai ? e[t] !== void 0 : eg.call(e, t);
  }
  var rg = "__lodash_hash_undefined__";
  function ng(t, e) {
    var i = this.__data__;
    return this.size += this.has(t) ? 0 : 1, i[t] = Ai && e === void 0 ? rg : e, this;
  }
  function ve(t) {
    var e = -1, i = t == null ? 0 : t.length;
    for (this.clear(); ++e < i; ) {
      var r = t[e];
      this.set(r[0], r[1]);
    }
  }
  ve.prototype.clear = Gp;
  ve.prototype.delete = Vp;
  ve.prototype.get = Qp;
  ve.prototype.has = ig;
  ve.prototype.set = ng;
  function og() {
    this.__data__ = [], this.size = 0;
  }
  zr = function(t, e) {
    return t === e || t !== t && e !== e;
  };
  function Wr(t, e) {
    for (var i = t.length; i--; ) if (zr(t[i][0], e)) return i;
    return -1;
  }
  var sg = Array.prototype, ag = sg.splice;
  function lg(t) {
    var e = this.__data__, i = Wr(e, t);
    if (i < 0) return false;
    var r = e.length - 1;
    return i == r ? e.pop() : ag.call(e, i, 1), --this.size, true;
  }
  function cg(t) {
    var e = this.__data__, i = Wr(e, t);
    return i < 0 ? void 0 : e[i][1];
  }
  function hg(t) {
    return Wr(this.__data__, t) > -1;
  }
  function ug(t, e) {
    var i = this.__data__, r = Wr(i, t);
    return r < 0 ? (++this.size, i.push([
      t,
      e
    ])) : i[r][1] = e, this;
  }
  function ie(t) {
    var e = -1, i = t == null ? 0 : t.length;
    for (this.clear(); ++e < i; ) {
      var r = t[e];
      this.set(r[0], r[1]);
    }
  }
  ie.prototype.clear = og;
  ie.prototype.delete = lg;
  ie.prototype.get = cg;
  ie.prototype.has = hg;
  ie.prototype.set = ug;
  var Ei = Ae(Ut, "Map");
  function dg() {
    this.size = 0, this.__data__ = {
      hash: new ve(),
      map: new (Ei || ie)(),
      string: new ve()
    };
  }
  function fg(t) {
    var e = typeof t;
    return e == "string" || e == "number" || e == "symbol" || e == "boolean" ? t !== "__proto__" : t === null;
  }
  function Yr(t, e) {
    var i = t.__data__;
    return fg(e) ? i[typeof e == "string" ? "string" : "hash"] : i.map;
  }
  function pg(t) {
    var e = Yr(this, t).delete(t);
    return this.size -= e ? 1 : 0, e;
  }
  function gg(t) {
    return Yr(this, t).get(t);
  }
  function mg(t) {
    return Yr(this, t).has(t);
  }
  function yg(t, e) {
    var i = Yr(this, t), r = i.size;
    return i.set(t, e), this.size += i.size == r ? 0 : 1, this;
  }
  fe = function(t) {
    var e = -1, i = t == null ? 0 : t.length;
    for (this.clear(); ++e < i; ) {
      var r = t[e];
      this.set(r[0], r[1]);
    }
  };
  fe.prototype.clear = dg;
  fe.prototype.delete = pg;
  fe.prototype.get = gg;
  fe.prototype.has = mg;
  fe.prototype.set = yg;
  var _g = "Expected a function";
  Di = function(t, e) {
    if (typeof t != "function" || e != null && typeof e != "function") throw new TypeError(_g);
    var i = function() {
      var r = arguments, n = e ? e.apply(this, r) : r[0], s = i.cache;
      if (s.has(n)) return s.get(n);
      var o = t.apply(this, r);
      return i.cache = s.set(n, o) || s, o;
    };
    return i.cache = new (Di.Cache || fe)(), i;
  };
  Di.Cache = fe;
  function Cg() {
    this.__data__ = new ie(), this.size = 0;
  }
  function xg(t) {
    var e = this.__data__, i = e.delete(t);
    return this.size = e.size, i;
  }
  function bg(t) {
    return this.__data__.get(t);
  }
  function Tg(t) {
    return this.__data__.has(t);
  }
  var vg = 200;
  function Sg(t, e) {
    var i = this.__data__;
    if (i instanceof ie) {
      var r = i.__data__;
      if (!Ei || r.length < vg - 1) return r.push([
        t,
        e
      ]), this.size = ++i.size, this;
      i = this.__data__ = new fe(r);
    }
    return i.set(t, e), this.size = i.size, this;
  }
  Ze = function(t) {
    var e = this.__data__ = new ie(t);
    this.size = e.size;
  };
  Ze.prototype.clear = Cg;
  Ze.prototype.delete = xg;
  Ze.prototype.get = bg;
  Ze.prototype.has = Tg;
  Ze.prototype.set = Sg;
  var br = function() {
    try {
      var t = Ae(Object, "defineProperty");
      return t({}, "", {}), t;
    } catch {
    }
  }();
  so = function(t, e, i) {
    e == "__proto__" && br ? br(t, e, {
      configurable: true,
      enumerable: true,
      value: i,
      writable: true
    }) : t[e] = i;
  };
  function In(t, e, i) {
    (i !== void 0 && !zr(t[e], i) || i === void 0 && !(e in t)) && so(t, e, i);
  }
  function kg(t) {
    return function(e, i, r) {
      for (var n = -1, s = Object(e), o = r(e), a = o.length; a--; ) {
        var l = o[++n];
        if (i(s[l], l, s) === false) break;
      }
      return e;
    };
  }
  let dl, Fs, Ag, Os, Is;
  wg = kg();
  dl = typeof exports == "object" && exports && !exports.nodeType && exports;
  Fs = dl && typeof module == "object" && module && !module.nodeType && module;
  Ag = Fs && Fs.exports === dl;
  Os = Ag ? Ut.Buffer : void 0;
  Is = Os ? Os.allocUnsafe : void 0;
  Eg = function(t, e) {
    if (e) return t.slice();
    var i = t.length, r = Is ? Is(i) : new t.constructor(i);
    return t.copy(r), r;
  };
  Ms = Ut.Uint8Array;
  Bg = function(t) {
    var e = new t.constructor(t.byteLength);
    return new Ms(e).set(new Ms(t)), e;
  };
  Lg = function(t, e) {
    var i = e ? Bg(t.buffer) : t.buffer;
    return new t.constructor(i, t.byteOffset, t.length);
  };
  Fg = function(t, e) {
    var i = -1, r = t.length;
    for (e || (e = Array(r)); ++i < r; ) e[i] = t[i];
    return e;
  };
  var $s = Object.create, Og = /* @__PURE__ */ function() {
    function t() {
    }
    return function(e) {
      if (!ke(e)) return {};
      if ($s) return $s(e);
      t.prototype = e;
      var i = new t();
      return t.prototype = void 0, i;
    };
  }();
  function fl(t, e) {
    return function(i) {
      return t(e(i));
    };
  }
  let Ig;
  pl = fl(Object.getPrototypeOf, Object);
  Ig = Object.prototype;
  function Hr(t) {
    var e = t && t.constructor, i = typeof e == "function" && e.prototype || Ig;
    return t === i;
  }
  Mg = function(t) {
    return typeof t.constructor == "function" && !Hr(t) ? Og(pl(t)) : {};
  };
  Ni = function(t) {
    return t != null && typeof t == "object";
  };
  var $g = "[object Arguments]";
  function Ds(t) {
    return Ni(t) && Ke(t) == $g;
  }
  let gl, Dg, Ng, Rg;
  gl = Object.prototype;
  Dg = gl.hasOwnProperty;
  Ng = gl.propertyIsEnumerable;
  Tr = Ds(/* @__PURE__ */ function() {
    return arguments;
  }()) ? Ds : function(t) {
    return Ni(t) && Dg.call(t, "callee") && !Ng.call(t, "callee");
  };
  vr = Array.isArray;
  Rg = 9007199254740991;
  ml = function(t) {
    return typeof t == "number" && t > -1 && t % 1 == 0 && t <= Rg;
  };
  jr = function(t) {
    return t != null && ml(t.length) && !oo(t);
  };
  Pg = function(t) {
    return Ni(t) && jr(t);
  };
  function qg() {
    return false;
  }
  let yl, Ns, zg, Rs, Wg, Yg, Hg, jg, _l, Ug, Xg;
  yl = typeof exports == "object" && exports && !exports.nodeType && exports;
  Ns = yl && typeof module == "object" && module && !module.nodeType && module;
  zg = Ns && Ns.exports === yl;
  Rs = zg ? Ut.Buffer : void 0;
  Wg = Rs ? Rs.isBuffer : void 0;
  ao = Wg || qg;
  Yg = "[object Object]";
  Hg = Function.prototype;
  jg = Object.prototype;
  _l = Hg.toString;
  Ug = jg.hasOwnProperty;
  Xg = _l.call(Object);
  Gg = function(t) {
    if (!Ni(t) || Ke(t) != Yg) return false;
    var e = pl(t);
    if (e === null) return true;
    var i = Ug.call(e, "constructor") && e.constructor;
    return typeof i == "function" && i instanceof i && _l.call(i) == Xg;
  };
  var Vg = "[object Arguments]", Kg = "[object Array]", Zg = "[object Boolean]", Jg = "[object Date]", Qg = "[object Error]", tm = "[object Function]", em = "[object Map]", im = "[object Number]", rm = "[object Object]", nm = "[object RegExp]", om = "[object Set]", sm = "[object String]", am = "[object WeakMap]", lm = "[object ArrayBuffer]", cm = "[object DataView]", hm = "[object Float32Array]", um = "[object Float64Array]", dm = "[object Int8Array]", fm = "[object Int16Array]", pm = "[object Int32Array]", gm = "[object Uint8Array]", mm = "[object Uint8ClampedArray]", ym = "[object Uint16Array]", _m = "[object Uint32Array]", K = {};
  K[hm] = K[um] = K[dm] = K[fm] = K[pm] = K[gm] = K[mm] = K[ym] = K[_m] = true;
  K[Vg] = K[Kg] = K[lm] = K[Zg] = K[cm] = K[Jg] = K[Qg] = K[tm] = K[em] = K[im] = K[rm] = K[nm] = K[om] = K[sm] = K[am] = false;
  function Cm(t) {
    return Ni(t) && ml(t.length) && !!K[Ke(t)];
  }
  xm = function(t) {
    return function(e) {
      return t(e);
    };
  };
  let Cl, Ci, bm, mn, qs;
  Cl = typeof exports == "object" && exports && !exports.nodeType && exports;
  Ci = Cl && typeof module == "object" && module && !module.nodeType && module;
  bm = Ci && Ci.exports === Cl;
  mn = bm && hl.process;
  Ps = function() {
    try {
      var t = Ci && Ci.require && Ci.require("util").types;
      return t || mn && mn.binding && mn.binding("util");
    } catch {
    }
  }();
  qs = Ps && Ps.isTypedArray;
  lo = qs ? xm(qs) : Cm;
  function Mn(t, e) {
    if (!(e === "constructor" && typeof t[e] == "function") && e != "__proto__") return t[e];
  }
  var Tm = Object.prototype, vm = Tm.hasOwnProperty;
  Sm = function(t, e, i) {
    var r = t[e];
    (!(vm.call(t, e) && zr(r, i)) || i === void 0 && !(e in t)) && so(t, e, i);
  };
  km = function(t, e, i, r) {
    var n = !i;
    i || (i = {});
    for (var s = -1, o = e.length; ++s < o; ) {
      var a = e[s], l = void 0;
      l === void 0 && (l = t[a]), n ? so(i, a, l) : Sm(i, a, l);
    }
    return i;
  };
  function wm(t, e) {
    for (var i = -1, r = Array(t); ++i < t; ) r[i] = e(i);
    return r;
  }
  var Am = 9007199254740991, Em = /^(?:0|[1-9]\d*)$/;
  xl = function(t, e) {
    var i = typeof t;
    return e = e ?? Am, !!e && (i == "number" || i != "symbol" && Em.test(t)) && t > -1 && t % 1 == 0 && t < e;
  };
  var Bm = Object.prototype, Lm = Bm.hasOwnProperty;
  Fm = function(t, e) {
    var i = vr(t), r = !i && Tr(t), n = !i && !r && ao(t), s = !i && !r && !n && lo(t), o = i || r || n || s, a = o ? wm(t.length, String) : [], l = a.length;
    for (var c in t) (e || Lm.call(t, c)) && !(o && (c == "length" || n && (c == "offset" || c == "parent") || s && (c == "buffer" || c == "byteLength" || c == "byteOffset") || xl(c, l))) && a.push(c);
    return a;
  };
  function Om(t) {
    var e = [];
    if (t != null) for (var i in Object(t)) e.push(i);
    return e;
  }
  var Im = Object.prototype, Mm = Im.hasOwnProperty;
  function $m(t) {
    if (!ke(t)) return Om(t);
    var e = Hr(t), i = [];
    for (var r in t) r == "constructor" && (e || !Mm.call(t, r)) || i.push(r);
    return i;
  }
  bl = function(t) {
    return jr(t) ? Fm(t, true) : $m(t);
  };
  function Dm(t) {
    return km(t, bl(t));
  }
  function Nm(t, e, i, r, n, s, o) {
    var a = Mn(t, i), l = Mn(e, i), c = o.get(l);
    if (c) {
      In(t, i, c);
      return;
    }
    var h = s ? s(a, l, i + "", t, e, o) : void 0, d = h === void 0;
    if (d) {
      var u = vr(l), f = !u && ao(l), m = !u && !f && lo(l);
      h = l, u || f || m ? vr(a) ? h = a : Pg(a) ? h = Fg(a) : f ? (d = false, h = Eg(l, true)) : m ? (d = false, h = Lg(l, true)) : h = [] : Gg(l) || Tr(l) ? (h = a, Tr(a) ? h = Dm(a) : (!ke(a) || oo(a)) && (h = Mg(l))) : d = false;
    }
    d && (o.set(l, h), n(h, l, r, s, o), o.delete(l)), In(t, i, h);
  }
  function Tl(t, e, i, r, n) {
    t !== e && wg(e, function(s, o) {
      if (n || (n = new Ze()), ke(s)) Nm(t, e, o, i, Tl, r, n);
      else {
        var a = r ? r(Mn(t, o), s, o + "", t, e, n) : void 0;
        a === void 0 && (a = s), In(t, o, a);
      }
    }, bl);
  }
  vl = function(t) {
    return t;
  };
  function Rm(t, e, i) {
    switch (i.length) {
      case 0:
        return t.call(e);
      case 1:
        return t.call(e, i[0]);
      case 2:
        return t.call(e, i[0], i[1]);
      case 3:
        return t.call(e, i[0], i[1], i[2]);
    }
    return t.apply(e, i);
  }
  var zs = Math.max;
  Pm = function(t, e, i) {
    return e = zs(e === void 0 ? t.length - 1 : e, 0), function() {
      for (var r = arguments, n = -1, s = zs(r.length - e, 0), o = Array(s); ++n < s; ) o[n] = r[e + n];
      n = -1;
      for (var a = Array(e + 1); ++n < e; ) a[n] = r[n];
      return a[e] = i(o), Rm(t, this, a);
    };
  };
  qm = function(t) {
    return function() {
      return t;
    };
  };
  var zm = br ? function(t, e) {
    return br(t, "toString", {
      configurable: true,
      enumerable: false,
      value: qm(e),
      writable: true
    });
  } : vl, Wm = 800, Ym = 16, Hm = Date.now;
  function jm(t) {
    var e = 0, i = 0;
    return function() {
      var r = Hm(), n = Ym - (r - i);
      if (i = r, n > 0) {
        if (++e >= Wm) return arguments[0];
      } else e = 0;
      return t.apply(void 0, arguments);
    };
  }
  Um = jm(zm);
  Xm = function(t, e) {
    return Um(Pm(t, e, vl), t + "");
  };
  Gm = function(t, e, i) {
    if (!ke(i)) return false;
    var r = typeof e;
    return (r == "number" ? jr(i) && xl(e, i.length) : r == "string" && e in i) ? zr(i[e], t) : false;
  };
  function Vm(t) {
    return Xm(function(e, i) {
      var r = -1, n = i.length, s = n > 1 ? i[n - 1] : void 0, o = n > 2 ? i[2] : void 0;
      for (s = t.length > 3 && typeof s == "function" ? (n--, s) : void 0, o && Gm(i[0], i[1], o) && (s = n < 3 ? void 0 : s, n = 1), e = Object(e); ++r < n; ) {
        var a = i[r];
        a && t(e, a, r, s);
      }
      return e;
    });
  }
  let Sl, kl, wl, Zm, Jm, Qm, t0, Al, co;
  Km = Vm(function(t, e, i) {
    Tl(t, e, i);
  });
  Sl = "comm";
  kl = "rule";
  wl = "decl";
  Zm = "@import";
  Jm = "@namespace";
  Qm = "@keyframes";
  t0 = "@layer";
  Al = Math.abs;
  co = String.fromCharCode;
  function El(t) {
    return t.trim();
  }
  function sr(t, e, i) {
    return t.replace(e, i);
  }
  function e0(t, e, i) {
    return t.indexOf(e, i);
  }
  function Pe(t, e) {
    return t.charCodeAt(e) | 0;
  }
  function He(t, e, i) {
    return t.slice(e, i);
  }
  function Pt(t) {
    return t.length;
  }
  function i0(t) {
    return t.length;
  }
  function Zi(t, e) {
    return e.push(t), t;
  }
  var Ur = 1, je = 1, Bl = 0, At = 0, Q = 0, Je = "";
  function ho(t, e, i, r, n, s, o, a) {
    return {
      value: t,
      root: e,
      parent: i,
      type: r,
      props: n,
      children: s,
      line: Ur,
      column: je,
      length: o,
      return: "",
      siblings: a
    };
  }
  function r0() {
    return Q;
  }
  function n0() {
    return Q = At > 0 ? Pe(Je, --At) : 0, je--, Q === 10 && (je = 1, Ur--), Q;
  }
  function Mt() {
    return Q = At < Bl ? Pe(Je, At++) : 0, je++, Q === 10 && (je = 1, Ur++), Q;
  }
  function ce() {
    return Pe(Je, At);
  }
  function ar() {
    return At;
  }
  function Xr(t, e) {
    return He(Je, t, e);
  }
  function Bi(t) {
    switch (t) {
      case 0:
      case 9:
      case 10:
      case 13:
      case 32:
        return 5;
      case 33:
      case 43:
      case 44:
      case 47:
      case 62:
      case 64:
      case 126:
      case 59:
      case 123:
      case 125:
        return 4;
      case 58:
        return 3;
      case 34:
      case 39:
      case 40:
      case 91:
        return 2;
      case 41:
      case 93:
        return 1;
    }
    return 0;
  }
  function o0(t) {
    return Ur = je = 1, Bl = Pt(Je = t), At = 0, [];
  }
  function s0(t) {
    return Je = "", t;
  }
  function yn(t) {
    return El(Xr(At - 1, $n(t === 91 ? t + 2 : t === 40 ? t + 1 : t)));
  }
  function a0(t) {
    for (; (Q = ce()) && Q < 33; ) Mt();
    return Bi(t) > 2 || Bi(Q) > 3 ? "" : " ";
  }
  function l0(t, e) {
    for (; --e && Mt() && !(Q < 48 || Q > 102 || Q > 57 && Q < 65 || Q > 70 && Q < 97); ) ;
    return Xr(t, ar() + (e < 6 && ce() == 32 && Mt() == 32));
  }
  function $n(t) {
    for (; Mt(); ) switch (Q) {
      case t:
        return At;
      case 34:
      case 39:
        t !== 34 && t !== 39 && $n(Q);
        break;
      case 40:
        t === 41 && $n(t);
        break;
      case 92:
        Mt();
        break;
    }
    return At;
  }
  function c0(t, e) {
    for (; Mt() && t + Q !== 57; ) if (t + Q === 84 && ce() === 47) break;
    return "/*" + Xr(e, At - 1) + "*" + co(t === 47 ? t : Mt());
  }
  function h0(t) {
    for (; !Bi(ce()); ) Mt();
    return Xr(t, At);
  }
  function u0(t) {
    return s0(lr("", null, null, null, [
      ""
    ], t = o0(t), 0, [
      0
    ], t));
  }
  function lr(t, e, i, r, n, s, o, a, l) {
    for (var c = 0, h = 0, d = o, u = 0, f = 0, m = 0, y = 1, T = 1, E = 1, C = 0, x = "", B = n, w = s, Y = r, N = x; T; ) switch (m = C, C = Mt()) {
      case 40:
        if (m != 108 && Pe(N, d - 1) == 58) {
          e0(N += sr(yn(C), "&", "&\f"), "&\f", Al(c ? a[c - 1] : 0)) != -1 && (E = -1);
          break;
        }
      case 34:
      case 39:
      case 91:
        N += yn(C);
        break;
      case 9:
      case 10:
      case 13:
      case 32:
        N += a0(m);
        break;
      case 92:
        N += l0(ar() - 1, 7);
        continue;
      case 47:
        switch (ce()) {
          case 42:
          case 47:
            Zi(d0(c0(Mt(), ar()), e, i, l), l), (Bi(m || 1) == 5 || Bi(ce() || 1) == 5) && Pt(N) && He(N, -1, void 0) !== " " && (N += " ");
            break;
          default:
            N += "/";
        }
        break;
      case 123 * y:
        a[c++] = Pt(N) * E;
      case 125 * y:
      case 59:
      case 0:
        switch (C) {
          case 0:
          case 125:
            T = 0;
          case 59 + h:
            E == -1 && (N = sr(N, /\f/g, "")), f > 0 && (Pt(N) - d || y === 0 && m === 47) && Zi(f > 32 ? Ys(N + ";", r, i, d - 1, l) : Ys(sr(N, " ", "") + ";", r, i, d - 2, l), l);
            break;
          case 59:
            N += ";";
          default:
            if (Zi(Y = Ws(N, e, i, c, h, n, a, x, B = [], w = [], d, s), s), C === 123) if (h === 0) lr(N, e, Y, Y, B, s, d, a, w);
            else {
              switch (u) {
                case 99:
                  if (Pe(N, 3) === 110) break;
                case 108:
                  if (Pe(N, 2) === 97) break;
                default:
                  h = 0;
                case 100:
                case 109:
                case 115:
              }
              h ? lr(t, Y, Y, r && Zi(Ws(t, Y, Y, 0, 0, n, a, x, n, B = [], d, w), w), n, w, d, a, r ? B : w) : lr(N, Y, Y, Y, [
                ""
              ], w, 0, a, w);
            }
        }
        c = h = f = 0, y = E = 1, x = N = "", d = o;
        break;
      case 58:
        d = 1 + Pt(N), f = m;
      default:
        if (y < 1) {
          if (C == 123) --y;
          else if (C == 125 && y++ == 0 && n0() == 125) continue;
        }
        switch (N += co(C), C * y) {
          case 38:
            E = h > 0 ? 1 : (N += "\f", -1);
            break;
          case 44:
            a[c++] = (Pt(N) - 1) * E, E = 1;
            break;
          case 64:
            ce() === 45 && (N += yn(Mt())), u = ce(), h = d = Pt(x = N += h0(ar())), C++;
            break;
          case 45:
            m === 45 && Pt(N) == 2 && (y = 0);
        }
    }
    return s;
  }
  function Ws(t, e, i, r, n, s, o, a, l, c, h, d) {
    for (var u = n - 1, f = n === 0 ? s : [
      ""
    ], m = i0(f), y = 0, T = 0, E = 0; y < r; ++y) for (var C = 0, x = He(t, u + 1, u = Al(T = o[y])), B = t; C < m; ++C) (B = El(T > 0 ? f[C] + " " + x : sr(x, /&\f/g, f[C]))) && (l[E++] = B);
    return ho(t, e, i, n === 0 ? kl : a, l, c, h, d);
  }
  function d0(t, e, i, r) {
    return ho(t, e, i, Sl, co(r0()), He(t, 2, -2), 0, r);
  }
  function Ys(t, e, i, r, n) {
    return ho(t, e, i, wl, He(t, 0, r), He(t, r + 1, -1), r, n);
  }
  function Dn(t, e) {
    for (var i = "", r = 0; r < t.length; r++) i += e(t[r], r, t, e) || "";
    return i;
  }
  function f0(t, e, i, r) {
    switch (t.type) {
      case t0:
        if (t.children.length) break;
      case Zm:
      case Jm:
      case wl:
        return t.return = t.return || t.value;
      case Sl:
        return "";
      case Qm:
        return t.return = t.value + "{" + Dn(t.children, r) + "}";
      case kl:
        if (!Pt(t.value = t.props.join(","))) return "";
    }
    return Pt(i = Dn(t.children, r)) ? t.return = t.value + "{" + i + "}" : "";
  }
  var p0 = fl(Object.keys, Object), g0 = Object.prototype, m0 = g0.hasOwnProperty;
  y0 = function(t) {
    if (!Hr(t)) return p0(t);
    var e = [];
    for (var i in Object(t)) m0.call(t, i) && i != "constructor" && e.push(i);
    return e;
  };
  let Nn, Rn, qn, Hs, _0, js, Us, Xs, Gs, C0, x0, b0, T0, v0;
  Nn = Ae(Ut, "DataView");
  Rn = Ae(Ut, "Promise");
  Pn = Ae(Ut, "Set");
  qn = Ae(Ut, "WeakMap");
  Hs = "[object Map]";
  _0 = "[object Object]";
  js = "[object Promise]";
  Us = "[object Set]";
  Xs = "[object WeakMap]";
  Gs = "[object DataView]";
  C0 = we(Nn);
  x0 = we(Ei);
  b0 = we(Rn);
  T0 = we(Pn);
  v0 = we(qn);
  me = Ke;
  (Nn && me(new Nn(new ArrayBuffer(1))) != Gs || Ei && me(new Ei()) != Hs || Rn && me(Rn.resolve()) != js || Pn && me(new Pn()) != Us || qn && me(new qn()) != Xs) && (me = function(t) {
    var e = Ke(t), i = e == _0 ? t.constructor : void 0, r = i ? we(i) : "";
    if (r) switch (r) {
      case C0:
        return Gs;
      case x0:
        return Hs;
      case b0:
        return js;
      case T0:
        return Us;
      case v0:
        return Xs;
    }
    return e;
  });
  var S0 = "[object Map]", k0 = "[object Set]", w0 = Object.prototype, A0 = w0.hasOwnProperty;
  _n = function(t) {
    if (t == null) return true;
    if (jr(t) && (vr(t) || typeof t == "string" || typeof t.splice == "function" || ao(t) || lo(t) || Tr(t))) return !t.length;
    var e = me(t);
    if (e == S0 || e == k0) return !t.size;
    if (Hr(t)) return !y0(t).length;
    for (var i in t) if (A0.call(t, i)) return false;
    return true;
  };
  let Kt, uo, St, E0, B0;
  Kt = {
    trace: 0,
    debug: 1,
    info: 2,
    warn: 3,
    error: 4,
    fatal: 5
  };
  $ = {
    trace: (...t) => {
    },
    debug: (...t) => {
    },
    info: (...t) => {
    },
    warn: (...t) => {
    },
    error: (...t) => {
    },
    fatal: (...t) => {
    }
  };
  uo = function(t = "fatal") {
    let e = Kt.fatal;
    typeof t == "string" ? (t = t.toLowerCase(), t in Kt && (e = Kt[t])) : typeof t == "number" && (e = t), $.trace = () => {
    }, $.debug = () => {
    }, $.info = () => {
    }, $.warn = () => {
    }, $.error = () => {
    }, $.fatal = () => {
    }, e <= Kt.fatal && ($.fatal = console.error ? console.error.bind(console, St("FATAL"), "color: orange") : console.log.bind(console, "\x1B[35m", St("FATAL"))), e <= Kt.error && ($.error = console.error ? console.error.bind(console, St("ERROR"), "color: orange") : console.log.bind(console, "\x1B[31m", St("ERROR"))), e <= Kt.warn && ($.warn = console.warn ? console.warn.bind(console, St("WARN"), "color: orange") : console.log.bind(console, "\x1B[33m", St("WARN"))), e <= Kt.info && ($.info = console.info ? console.info.bind(console, St("INFO"), "color: lightblue") : console.log.bind(console, "\x1B[34m", St("INFO"))), e <= Kt.debug && ($.debug = console.debug ? console.debug.bind(console, St("DEBUG"), "color: lightgreen") : console.log.bind(console, "\x1B[32m", St("DEBUG"))), e <= Kt.trace && ($.trace = console.debug ? console.debug.bind(console, St("TRACE"), "color: lightgreen") : console.log.bind(console, "\x1B[32m", St("TRACE")));
  };
  St = (t) => `%c${gh().format("ss.SSS")} : ${t} : `;
  Ri = /<br\s*\/?>/gi;
  E0 = (t) => t ? Fl(t).replace(/\\n/g, "#br#").split("#br#") : [
    ""
  ];
  B0 = /* @__PURE__ */ (() => {
    let t = false;
    return () => {
      t || (L0(), t = true);
    };
  })();
  function L0() {
    const t = "data-temp-href-target";
    Ye.addHook("beforeSanitizeAttributes", (e) => {
      e.tagName === "A" && e.hasAttribute("target") && e.setAttribute(t, e.getAttribute("target") || "");
    }), Ye.addHook("afterSanitizeAttributes", (e) => {
      e.tagName === "A" && e.hasAttribute(t) && (e.setAttribute("target", e.getAttribute(t) || ""), e.removeAttribute(t), e.getAttribute("target") === "_blank" && e.setAttribute("rel", "noopener"));
    });
  }
  let Ll, Vs, F0, O0, I0, M0, Fl, $0, D0, N0, zn, R0, P0, Ks, Wn, ft, Gr, Vr;
  Ll = (t) => (B0(), Ye.sanitize(t));
  Vs = (t, e) => {
    var i;
    if (((i = e.flowchart) == null ? void 0 : i.htmlLabels) !== false) {
      const r = e.securityLevel;
      r === "antiscript" || r === "strict" ? t = Ll(t) : r !== "loose" && (t = Fl(t), t = t.replace(/</g, "&lt;").replace(/>/g, "&gt;"), t = t.replace(/=/g, "&equals;"), t = M0(t));
    }
    return t;
  };
  Li = (t, e) => t && (e.dompurifyConfig ? t = Ye.sanitize(Vs(t, e), e.dompurifyConfig).toString() : t = Ye.sanitize(Vs(t, e), {
    FORBID_TAGS: [
      "style"
    ]
  }).toString(), t);
  F0 = (t, e) => typeof t == "string" ? Li(t, e) : t.flat().map((i) => Li(i, e));
  O0 = (t) => Ri.test(t);
  I0 = (t) => t.split(Ri);
  M0 = (t) => t.replace(/#br#/g, "<br/>");
  Fl = (t) => t.replace(Ri, "#br#");
  $0 = (t) => {
    let e = "";
    return t && (e = window.location.protocol + "//" + window.location.host + window.location.pathname + window.location.search, e = e.replaceAll(/\(/g, "\\("), e = e.replaceAll(/\)/g, "\\)")), e;
  };
  Ol = (t) => !(t === false || [
    "false",
    "null",
    "0"
  ].includes(String(t).trim().toLowerCase()));
  D0 = function(...t) {
    const e = t.filter((i) => !isNaN(i));
    return Math.max(...e);
  };
  N0 = function(...t) {
    const e = t.filter((i) => !isNaN(i));
    return Math.min(...e);
  };
  Z1 = function(t) {
    const e = t.split(/(,)/), i = [];
    for (let r = 0; r < e.length; r++) {
      let n = e[r];
      if (n === "," && r > 0 && r + 1 < e.length) {
        const s = e[r - 1], o = e[r + 1];
        R0(s, o) && (n = s + "," + o, r++, i.pop());
      }
      i.push(P0(n));
    }
    return i.join("");
  };
  zn = (t, e) => Math.max(0, t.split(e).length - 1);
  R0 = (t, e) => {
    const i = zn(t, "~"), r = zn(e, "~");
    return i === 1 && r === 1;
  };
  P0 = (t) => {
    const e = zn(t, "~");
    let i = false;
    if (e <= 1) return t;
    e % 2 !== 0 && t.startsWith("~") && (t = t.substring(1), i = true);
    const r = [
      ...t
    ];
    let n = r.indexOf("~"), s = r.lastIndexOf("~");
    for (; n !== -1 && s !== -1 && n !== s; ) r[n] = "<", r[s] = ">", n = r.indexOf("~"), s = r.lastIndexOf("~");
    return i && r.unshift("~"), r.join("");
  };
  Ks = () => window.MathMLElement !== void 0;
  Wn = /\$\$(.*)\$\$/g;
  Zs = (t) => {
    var e;
    return (((e = t.match(Wn)) == null ? void 0 : e.length) ?? 0) > 0;
  };
  J1 = async (t, e) => {
    t = await q0(t, e);
    const i = document.createElement("div");
    i.innerHTML = t, i.id = "katex-temp", i.style.visibility = "hidden", i.style.position = "absolute", i.style.top = "0";
    const r = document.querySelector("body");
    r == null ? void 0 : r.insertAdjacentElement("beforeend", i);
    const n = {
      width: i.clientWidth,
      height: i.clientHeight
    };
    return i.remove(), n;
  };
  q0 = async (t, e) => {
    if (!Zs(t)) return t;
    if (!Ks() && !e.legacyMathML) return t.replace(Wn, "MathML is unsupported in this environment.");
    const { default: i } = await J(async () => {
      const { default: r } = await import("./katex.qrhCpa0F.1760966607190.js");
      return {
        default: r
      };
    }, []);
    return t.split(Ri).map((r) => Zs(r) ? `
            <div style="display: flex; align-items: center; justify-content: center; white-space: nowrap;">
              ${r}
            </div>
          ` : `<div>${r}</div>`).join("").replace(Wn, (r, n) => i.renderToString(n, {
      throwOnError: true,
      displayMode: true,
      output: Ks() ? "mathml" : "htmlAndMathml"
    }).replace(/\n/g, " ").replace(/<annotation.*<\/annotation>/g, ""));
  };
  fo = {
    getRows: E0,
    sanitizeText: Li,
    sanitizeTextOrArray: F0,
    hasBreaks: O0,
    splitBreaks: I0,
    lineBreakRegex: Ri,
    removeScript: Ll,
    getUrl: $0,
    evaluate: Ol,
    getMax: D0,
    getMin: N0
  };
  ft = (t, e) => e ? g(t, {
    s: -40,
    l: 10
  }) : g(t, {
    s: -40,
    l: -10
  });
  Gr = "#ffffff";
  Vr = "#f2f2f2";
  let z0 = class {
    constructor() {
      this.background = "#f4f4f4", this.primaryColor = "#fff4dd", this.noteBkgColor = "#fff5ad", this.noteTextColor = "#333", this.THEME_COLOR_LIMIT = 12, this.fontFamily = '"trebuchet ms", verdana, arial, sans-serif', this.fontSize = "16px";
    }
    updateColors() {
      var e, i, r, n, s, o, a, l, c, h, d;
      if (this.primaryTextColor = this.primaryTextColor || (this.darkMode ? "#eee" : "#333"), this.secondaryColor = this.secondaryColor || g(this.primaryColor, {
        h: -120
      }), this.tertiaryColor = this.tertiaryColor || g(this.primaryColor, {
        h: 180,
        l: 5
      }), this.primaryBorderColor = this.primaryBorderColor || ft(this.primaryColor, this.darkMode), this.secondaryBorderColor = this.secondaryBorderColor || ft(this.secondaryColor, this.darkMode), this.tertiaryBorderColor = this.tertiaryBorderColor || ft(this.tertiaryColor, this.darkMode), this.noteBorderColor = this.noteBorderColor || ft(this.noteBkgColor, this.darkMode), this.noteBkgColor = this.noteBkgColor || "#fff5ad", this.noteTextColor = this.noteTextColor || "#333", this.secondaryTextColor = this.secondaryTextColor || v(this.secondaryColor), this.tertiaryTextColor = this.tertiaryTextColor || v(this.tertiaryColor), this.lineColor = this.lineColor || v(this.background), this.arrowheadColor = this.arrowheadColor || v(this.background), this.textColor = this.textColor || this.primaryTextColor, this.border2 = this.border2 || this.tertiaryBorderColor, this.nodeBkg = this.nodeBkg || this.primaryColor, this.mainBkg = this.mainBkg || this.primaryColor, this.nodeBorder = this.nodeBorder || this.primaryBorderColor, this.clusterBkg = this.clusterBkg || this.tertiaryColor, this.clusterBorder = this.clusterBorder || this.tertiaryBorderColor, this.defaultLinkColor = this.defaultLinkColor || this.lineColor, this.titleColor = this.titleColor || this.tertiaryTextColor, this.edgeLabelBackground = this.edgeLabelBackground || (this.darkMode ? D(this.secondaryColor, 30) : this.secondaryColor), this.nodeTextColor = this.nodeTextColor || this.primaryTextColor, this.actorBorder = this.actorBorder || this.primaryBorderColor, this.actorBkg = this.actorBkg || this.mainBkg, this.actorTextColor = this.actorTextColor || this.primaryTextColor, this.actorLineColor = this.actorLineColor || "grey", this.labelBoxBkgColor = this.labelBoxBkgColor || this.actorBkg, this.signalColor = this.signalColor || this.textColor, this.signalTextColor = this.signalTextColor || this.textColor, this.labelBoxBorderColor = this.labelBoxBorderColor || this.actorBorder, this.labelTextColor = this.labelTextColor || this.actorTextColor, this.loopTextColor = this.loopTextColor || this.actorTextColor, this.activationBorderColor = this.activationBorderColor || D(this.secondaryColor, 10), this.activationBkgColor = this.activationBkgColor || this.secondaryColor, this.sequenceNumberColor = this.sequenceNumberColor || v(this.lineColor), this.sectionBkgColor = this.sectionBkgColor || this.tertiaryColor, this.altSectionBkgColor = this.altSectionBkgColor || "white", this.sectionBkgColor = this.sectionBkgColor || this.secondaryColor, this.sectionBkgColor2 = this.sectionBkgColor2 || this.primaryColor, this.excludeBkgColor = this.excludeBkgColor || "#eeeeee", this.taskBorderColor = this.taskBorderColor || this.primaryBorderColor, this.taskBkgColor = this.taskBkgColor || this.primaryColor, this.activeTaskBorderColor = this.activeTaskBorderColor || this.primaryColor, this.activeTaskBkgColor = this.activeTaskBkgColor || O(this.primaryColor, 23), this.gridColor = this.gridColor || "lightgrey", this.doneTaskBkgColor = this.doneTaskBkgColor || "lightgrey", this.doneTaskBorderColor = this.doneTaskBorderColor || "grey", this.critBorderColor = this.critBorderColor || "#ff8888", this.critBkgColor = this.critBkgColor || "red", this.todayLineColor = this.todayLineColor || "red", this.taskTextColor = this.taskTextColor || this.textColor, this.taskTextOutsideColor = this.taskTextOutsideColor || this.textColor, this.taskTextLightColor = this.taskTextLightColor || this.textColor, this.taskTextColor = this.taskTextColor || this.primaryTextColor, this.taskTextDarkColor = this.taskTextDarkColor || this.textColor, this.taskTextClickableColor = this.taskTextClickableColor || "#003163", this.personBorder = this.personBorder || this.primaryBorderColor, this.personBkg = this.personBkg || this.mainBkg, this.transitionColor = this.transitionColor || this.lineColor, this.transitionLabelColor = this.transitionLabelColor || this.textColor, this.stateLabelColor = this.stateLabelColor || this.stateBkg || this.primaryTextColor, this.stateBkg = this.stateBkg || this.mainBkg, this.labelBackgroundColor = this.labelBackgroundColor || this.stateBkg, this.compositeBackground = this.compositeBackground || this.background || this.tertiaryColor, this.altBackground = this.altBackground || this.tertiaryColor, this.compositeTitleBackground = this.compositeTitleBackground || this.mainBkg, this.compositeBorder = this.compositeBorder || this.nodeBorder, this.innerEndBackground = this.nodeBorder, this.errorBkgColor = this.errorBkgColor || this.tertiaryColor, this.errorTextColor = this.errorTextColor || this.tertiaryTextColor, this.transitionColor = this.transitionColor || this.lineColor, this.specialStateColor = this.lineColor, this.cScale0 = this.cScale0 || this.primaryColor, this.cScale1 = this.cScale1 || this.secondaryColor, this.cScale2 = this.cScale2 || this.tertiaryColor, this.cScale3 = this.cScale3 || g(this.primaryColor, {
        h: 30
      }), this.cScale4 = this.cScale4 || g(this.primaryColor, {
        h: 60
      }), this.cScale5 = this.cScale5 || g(this.primaryColor, {
        h: 90
      }), this.cScale6 = this.cScale6 || g(this.primaryColor, {
        h: 120
      }), this.cScale7 = this.cScale7 || g(this.primaryColor, {
        h: 150
      }), this.cScale8 = this.cScale8 || g(this.primaryColor, {
        h: 210,
        l: 150
      }), this.cScale9 = this.cScale9 || g(this.primaryColor, {
        h: 270
      }), this.cScale10 = this.cScale10 || g(this.primaryColor, {
        h: 300
      }), this.cScale11 = this.cScale11 || g(this.primaryColor, {
        h: 330
      }), this.darkMode) for (let f = 0; f < this.THEME_COLOR_LIMIT; f++) this["cScale" + f] = D(this["cScale" + f], 75);
      else for (let f = 0; f < this.THEME_COLOR_LIMIT; f++) this["cScale" + f] = D(this["cScale" + f], 25);
      for (let f = 0; f < this.THEME_COLOR_LIMIT; f++) this["cScaleInv" + f] = this["cScaleInv" + f] || v(this["cScale" + f]);
      for (let f = 0; f < this.THEME_COLOR_LIMIT; f++) this.darkMode ? this["cScalePeer" + f] = this["cScalePeer" + f] || O(this["cScale" + f], 10) : this["cScalePeer" + f] = this["cScalePeer" + f] || D(this["cScale" + f], 10);
      this.scaleLabelColor = this.scaleLabelColor || this.labelTextColor;
      for (let f = 0; f < this.THEME_COLOR_LIMIT; f++) this["cScaleLabel" + f] = this["cScaleLabel" + f] || this.scaleLabelColor;
      const u = this.darkMode ? -4 : -1;
      for (let f = 0; f < 5; f++) this["surface" + f] = this["surface" + f] || g(this.mainBkg, {
        h: 180,
        s: -15,
        l: u * (5 + f * 3)
      }), this["surfacePeer" + f] = this["surfacePeer" + f] || g(this.mainBkg, {
        h: 180,
        s: -15,
        l: u * (8 + f * 3)
      });
      this.classText = this.classText || this.textColor, this.fillType0 = this.fillType0 || this.primaryColor, this.fillType1 = this.fillType1 || this.secondaryColor, this.fillType2 = this.fillType2 || g(this.primaryColor, {
        h: 64
      }), this.fillType3 = this.fillType3 || g(this.secondaryColor, {
        h: 64
      }), this.fillType4 = this.fillType4 || g(this.primaryColor, {
        h: -64
      }), this.fillType5 = this.fillType5 || g(this.secondaryColor, {
        h: -64
      }), this.fillType6 = this.fillType6 || g(this.primaryColor, {
        h: 128
      }), this.fillType7 = this.fillType7 || g(this.secondaryColor, {
        h: 128
      }), this.pie1 = this.pie1 || this.primaryColor, this.pie2 = this.pie2 || this.secondaryColor, this.pie3 = this.pie3 || this.tertiaryColor, this.pie4 = this.pie4 || g(this.primaryColor, {
        l: -10
      }), this.pie5 = this.pie5 || g(this.secondaryColor, {
        l: -10
      }), this.pie6 = this.pie6 || g(this.tertiaryColor, {
        l: -10
      }), this.pie7 = this.pie7 || g(this.primaryColor, {
        h: 60,
        l: -10
      }), this.pie8 = this.pie8 || g(this.primaryColor, {
        h: -60,
        l: -10
      }), this.pie9 = this.pie9 || g(this.primaryColor, {
        h: 120,
        l: 0
      }), this.pie10 = this.pie10 || g(this.primaryColor, {
        h: 60,
        l: -20
      }), this.pie11 = this.pie11 || g(this.primaryColor, {
        h: -60,
        l: -20
      }), this.pie12 = this.pie12 || g(this.primaryColor, {
        h: 120,
        l: -10
      }), this.pieTitleTextSize = this.pieTitleTextSize || "25px", this.pieTitleTextColor = this.pieTitleTextColor || this.taskTextDarkColor, this.pieSectionTextSize = this.pieSectionTextSize || "17px", this.pieSectionTextColor = this.pieSectionTextColor || this.textColor, this.pieLegendTextSize = this.pieLegendTextSize || "17px", this.pieLegendTextColor = this.pieLegendTextColor || this.taskTextDarkColor, this.pieStrokeColor = this.pieStrokeColor || "black", this.pieStrokeWidth = this.pieStrokeWidth || "2px", this.pieOuterStrokeWidth = this.pieOuterStrokeWidth || "2px", this.pieOuterStrokeColor = this.pieOuterStrokeColor || "black", this.pieOpacity = this.pieOpacity || "0.7", this.quadrant1Fill = this.quadrant1Fill || this.primaryColor, this.quadrant2Fill = this.quadrant2Fill || g(this.primaryColor, {
        r: 5,
        g: 5,
        b: 5
      }), this.quadrant3Fill = this.quadrant3Fill || g(this.primaryColor, {
        r: 10,
        g: 10,
        b: 10
      }), this.quadrant4Fill = this.quadrant4Fill || g(this.primaryColor, {
        r: 15,
        g: 15,
        b: 15
      }), this.quadrant1TextFill = this.quadrant1TextFill || this.primaryTextColor, this.quadrant2TextFill = this.quadrant2TextFill || g(this.primaryTextColor, {
        r: -5,
        g: -5,
        b: -5
      }), this.quadrant3TextFill = this.quadrant3TextFill || g(this.primaryTextColor, {
        r: -10,
        g: -10,
        b: -10
      }), this.quadrant4TextFill = this.quadrant4TextFill || g(this.primaryTextColor, {
        r: -15,
        g: -15,
        b: -15
      }), this.quadrantPointFill = this.quadrantPointFill || $i(this.quadrant1Fill) ? O(this.quadrant1Fill) : D(this.quadrant1Fill), this.quadrantPointTextFill = this.quadrantPointTextFill || this.primaryTextColor, this.quadrantXAxisTextFill = this.quadrantXAxisTextFill || this.primaryTextColor, this.quadrantYAxisTextFill = this.quadrantYAxisTextFill || this.primaryTextColor, this.quadrantInternalBorderStrokeFill = this.quadrantInternalBorderStrokeFill || this.primaryBorderColor, this.quadrantExternalBorderStrokeFill = this.quadrantExternalBorderStrokeFill || this.primaryBorderColor, this.quadrantTitleFill = this.quadrantTitleFill || this.primaryTextColor, this.xyChart = {
        backgroundColor: ((e = this.xyChart) == null ? void 0 : e.backgroundColor) || this.background,
        titleColor: ((i = this.xyChart) == null ? void 0 : i.titleColor) || this.primaryTextColor,
        xAxisTitleColor: ((r = this.xyChart) == null ? void 0 : r.xAxisTitleColor) || this.primaryTextColor,
        xAxisLabelColor: ((n = this.xyChart) == null ? void 0 : n.xAxisLabelColor) || this.primaryTextColor,
        xAxisTickColor: ((s = this.xyChart) == null ? void 0 : s.xAxisTickColor) || this.primaryTextColor,
        xAxisLineColor: ((o = this.xyChart) == null ? void 0 : o.xAxisLineColor) || this.primaryTextColor,
        yAxisTitleColor: ((a = this.xyChart) == null ? void 0 : a.yAxisTitleColor) || this.primaryTextColor,
        yAxisLabelColor: ((l = this.xyChart) == null ? void 0 : l.yAxisLabelColor) || this.primaryTextColor,
        yAxisTickColor: ((c = this.xyChart) == null ? void 0 : c.yAxisTickColor) || this.primaryTextColor,
        yAxisLineColor: ((h = this.xyChart) == null ? void 0 : h.yAxisLineColor) || this.primaryTextColor,
        plotColorPalette: ((d = this.xyChart) == null ? void 0 : d.plotColorPalette) || "#FFF4DD,#FFD8B1,#FFA07A,#ECEFF1,#D6DBDF,#C3E0A8,#FFB6A4,#FFD74D,#738FA7,#FFFFF0"
      }, this.requirementBackground = this.requirementBackground || this.primaryColor, this.requirementBorderColor = this.requirementBorderColor || this.primaryBorderColor, this.requirementBorderSize = this.requirementBorderSize || "1", this.requirementTextColor = this.requirementTextColor || this.primaryTextColor, this.relationColor = this.relationColor || this.lineColor, this.relationLabelBackground = this.relationLabelBackground || (this.darkMode ? D(this.secondaryColor, 30) : this.secondaryColor), this.relationLabelColor = this.relationLabelColor || this.actorTextColor, this.git0 = this.git0 || this.primaryColor, this.git1 = this.git1 || this.secondaryColor, this.git2 = this.git2 || this.tertiaryColor, this.git3 = this.git3 || g(this.primaryColor, {
        h: -30
      }), this.git4 = this.git4 || g(this.primaryColor, {
        h: -60
      }), this.git5 = this.git5 || g(this.primaryColor, {
        h: -90
      }), this.git6 = this.git6 || g(this.primaryColor, {
        h: 60
      }), this.git7 = this.git7 || g(this.primaryColor, {
        h: 120
      }), this.darkMode ? (this.git0 = O(this.git0, 25), this.git1 = O(this.git1, 25), this.git2 = O(this.git2, 25), this.git3 = O(this.git3, 25), this.git4 = O(this.git4, 25), this.git5 = O(this.git5, 25), this.git6 = O(this.git6, 25), this.git7 = O(this.git7, 25)) : (this.git0 = D(this.git0, 25), this.git1 = D(this.git1, 25), this.git2 = D(this.git2, 25), this.git3 = D(this.git3, 25), this.git4 = D(this.git4, 25), this.git5 = D(this.git5, 25), this.git6 = D(this.git6, 25), this.git7 = D(this.git7, 25)), this.gitInv0 = this.gitInv0 || v(this.git0), this.gitInv1 = this.gitInv1 || v(this.git1), this.gitInv2 = this.gitInv2 || v(this.git2), this.gitInv3 = this.gitInv3 || v(this.git3), this.gitInv4 = this.gitInv4 || v(this.git4), this.gitInv5 = this.gitInv5 || v(this.git5), this.gitInv6 = this.gitInv6 || v(this.git6), this.gitInv7 = this.gitInv7 || v(this.git7), this.branchLabelColor = this.branchLabelColor || (this.darkMode ? "black" : this.labelTextColor), this.gitBranchLabel0 = this.gitBranchLabel0 || this.branchLabelColor, this.gitBranchLabel1 = this.gitBranchLabel1 || this.branchLabelColor, this.gitBranchLabel2 = this.gitBranchLabel2 || this.branchLabelColor, this.gitBranchLabel3 = this.gitBranchLabel3 || this.branchLabelColor, this.gitBranchLabel4 = this.gitBranchLabel4 || this.branchLabelColor, this.gitBranchLabel5 = this.gitBranchLabel5 || this.branchLabelColor, this.gitBranchLabel6 = this.gitBranchLabel6 || this.branchLabelColor, this.gitBranchLabel7 = this.gitBranchLabel7 || this.branchLabelColor, this.tagLabelColor = this.tagLabelColor || this.primaryTextColor, this.tagLabelBackground = this.tagLabelBackground || this.primaryColor, this.tagLabelBorder = this.tagBorder || this.primaryBorderColor, this.tagLabelFontSize = this.tagLabelFontSize || "10px", this.commitLabelColor = this.commitLabelColor || this.secondaryTextColor, this.commitLabelBackground = this.commitLabelBackground || this.secondaryColor, this.commitLabelFontSize = this.commitLabelFontSize || "10px", this.attributeBackgroundColorOdd = this.attributeBackgroundColorOdd || Gr, this.attributeBackgroundColorEven = this.attributeBackgroundColorEven || Vr;
    }
    calculate(e) {
      if (typeof e != "object") {
        this.updateColors();
        return;
      }
      const i = Object.keys(e);
      i.forEach((r) => {
        this[r] = e[r];
      }), this.updateColors(), i.forEach((r) => {
        this[r] = e[r];
      });
    }
  };
  const W0 = (t) => {
    const e = new z0();
    return e.calculate(t), e;
  };
  let Y0 = class {
    constructor() {
      this.background = "#333", this.primaryColor = "#1f2020", this.secondaryColor = O(this.primaryColor, 16), this.tertiaryColor = g(this.primaryColor, {
        h: -160
      }), this.primaryBorderColor = v(this.background), this.secondaryBorderColor = ft(this.secondaryColor, this.darkMode), this.tertiaryBorderColor = ft(this.tertiaryColor, this.darkMode), this.primaryTextColor = v(this.primaryColor), this.secondaryTextColor = v(this.secondaryColor), this.tertiaryTextColor = v(this.tertiaryColor), this.lineColor = v(this.background), this.textColor = v(this.background), this.mainBkg = "#1f2020", this.secondBkg = "calculated", this.mainContrastColor = "lightgrey", this.darkTextColor = O(v("#323D47"), 10), this.lineColor = "calculated", this.border1 = "#81B1DB", this.border2 = _i(255, 255, 255, 0.25), this.arrowheadColor = "calculated", this.fontFamily = '"trebuchet ms", verdana, arial, sans-serif', this.fontSize = "16px", this.labelBackground = "#181818", this.textColor = "#ccc", this.THEME_COLOR_LIMIT = 12, this.nodeBkg = "calculated", this.nodeBorder = "calculated", this.clusterBkg = "calculated", this.clusterBorder = "calculated", this.defaultLinkColor = "calculated", this.titleColor = "#F9FFFE", this.edgeLabelBackground = "calculated", this.actorBorder = "calculated", this.actorBkg = "calculated", this.actorTextColor = "calculated", this.actorLineColor = "calculated", this.signalColor = "calculated", this.signalTextColor = "calculated", this.labelBoxBkgColor = "calculated", this.labelBoxBorderColor = "calculated", this.labelTextColor = "calculated", this.loopTextColor = "calculated", this.noteBorderColor = "calculated", this.noteBkgColor = "#fff5ad", this.noteTextColor = "calculated", this.activationBorderColor = "calculated", this.activationBkgColor = "calculated", this.sequenceNumberColor = "black", this.sectionBkgColor = D("#EAE8D9", 30), this.altSectionBkgColor = "calculated", this.sectionBkgColor2 = "#EAE8D9", this.excludeBkgColor = D(this.sectionBkgColor, 10), this.taskBorderColor = _i(255, 255, 255, 70), this.taskBkgColor = "calculated", this.taskTextColor = "calculated", this.taskTextLightColor = "calculated", this.taskTextOutsideColor = "calculated", this.taskTextClickableColor = "#003163", this.activeTaskBorderColor = _i(255, 255, 255, 50), this.activeTaskBkgColor = "#81B1DB", this.gridColor = "calculated", this.doneTaskBkgColor = "calculated", this.doneTaskBorderColor = "grey", this.critBorderColor = "#E83737", this.critBkgColor = "#E83737", this.taskTextDarkColor = "calculated", this.todayLineColor = "#DB5757", this.personBorder = this.primaryBorderColor, this.personBkg = this.mainBkg, this.labelColor = "calculated", this.errorBkgColor = "#a44141", this.errorTextColor = "#ddd";
    }
    updateColors() {
      var e, i, r, n, s, o, a, l, c, h, d;
      this.secondBkg = O(this.mainBkg, 16), this.lineColor = this.mainContrastColor, this.arrowheadColor = this.mainContrastColor, this.nodeBkg = this.mainBkg, this.nodeBorder = this.border1, this.clusterBkg = this.secondBkg, this.clusterBorder = this.border2, this.defaultLinkColor = this.lineColor, this.edgeLabelBackground = O(this.labelBackground, 25), this.actorBorder = this.border1, this.actorBkg = this.mainBkg, this.actorTextColor = this.mainContrastColor, this.actorLineColor = this.mainContrastColor, this.signalColor = this.mainContrastColor, this.signalTextColor = this.mainContrastColor, this.labelBoxBkgColor = this.actorBkg, this.labelBoxBorderColor = this.actorBorder, this.labelTextColor = this.mainContrastColor, this.loopTextColor = this.mainContrastColor, this.noteBorderColor = this.secondaryBorderColor, this.noteBkgColor = this.secondBkg, this.noteTextColor = this.secondaryTextColor, this.activationBorderColor = this.border1, this.activationBkgColor = this.secondBkg, this.altSectionBkgColor = this.background, this.taskBkgColor = O(this.mainBkg, 23), this.taskTextColor = this.darkTextColor, this.taskTextLightColor = this.mainContrastColor, this.taskTextOutsideColor = this.taskTextLightColor, this.gridColor = this.mainContrastColor, this.doneTaskBkgColor = this.mainContrastColor, this.taskTextDarkColor = this.darkTextColor, this.transitionColor = this.transitionColor || this.lineColor, this.transitionLabelColor = this.transitionLabelColor || this.textColor, this.stateLabelColor = this.stateLabelColor || this.stateBkg || this.primaryTextColor, this.stateBkg = this.stateBkg || this.mainBkg, this.labelBackgroundColor = this.labelBackgroundColor || this.stateBkg, this.compositeBackground = this.compositeBackground || this.background || this.tertiaryColor, this.altBackground = this.altBackground || "#555", this.compositeTitleBackground = this.compositeTitleBackground || this.mainBkg, this.compositeBorder = this.compositeBorder || this.nodeBorder, this.innerEndBackground = this.primaryBorderColor, this.specialStateColor = "#f4f4f4", this.errorBkgColor = this.errorBkgColor || this.tertiaryColor, this.errorTextColor = this.errorTextColor || this.tertiaryTextColor, this.fillType0 = this.primaryColor, this.fillType1 = this.secondaryColor, this.fillType2 = g(this.primaryColor, {
        h: 64
      }), this.fillType3 = g(this.secondaryColor, {
        h: 64
      }), this.fillType4 = g(this.primaryColor, {
        h: -64
      }), this.fillType5 = g(this.secondaryColor, {
        h: -64
      }), this.fillType6 = g(this.primaryColor, {
        h: 128
      }), this.fillType7 = g(this.secondaryColor, {
        h: 128
      }), this.cScale1 = this.cScale1 || "#0b0000", this.cScale2 = this.cScale2 || "#4d1037", this.cScale3 = this.cScale3 || "#3f5258", this.cScale4 = this.cScale4 || "#4f2f1b", this.cScale5 = this.cScale5 || "#6e0a0a", this.cScale6 = this.cScale6 || "#3b0048", this.cScale7 = this.cScale7 || "#995a01", this.cScale8 = this.cScale8 || "#154706", this.cScale9 = this.cScale9 || "#161722", this.cScale10 = this.cScale10 || "#00296f", this.cScale11 = this.cScale11 || "#01629c", this.cScale12 = this.cScale12 || "#010029", this.cScale0 = this.cScale0 || this.primaryColor, this.cScale1 = this.cScale1 || this.secondaryColor, this.cScale2 = this.cScale2 || this.tertiaryColor, this.cScale3 = this.cScale3 || g(this.primaryColor, {
        h: 30
      }), this.cScale4 = this.cScale4 || g(this.primaryColor, {
        h: 60
      }), this.cScale5 = this.cScale5 || g(this.primaryColor, {
        h: 90
      }), this.cScale6 = this.cScale6 || g(this.primaryColor, {
        h: 120
      }), this.cScale7 = this.cScale7 || g(this.primaryColor, {
        h: 150
      }), this.cScale8 = this.cScale8 || g(this.primaryColor, {
        h: 210
      }), this.cScale9 = this.cScale9 || g(this.primaryColor, {
        h: 270
      }), this.cScale10 = this.cScale10 || g(this.primaryColor, {
        h: 300
      }), this.cScale11 = this.cScale11 || g(this.primaryColor, {
        h: 330
      });
      for (let u = 0; u < this.THEME_COLOR_LIMIT; u++) this["cScaleInv" + u] = this["cScaleInv" + u] || v(this["cScale" + u]);
      for (let u = 0; u < this.THEME_COLOR_LIMIT; u++) this["cScalePeer" + u] = this["cScalePeer" + u] || O(this["cScale" + u], 10);
      for (let u = 0; u < 5; u++) this["surface" + u] = this["surface" + u] || g(this.mainBkg, {
        h: 30,
        s: -30,
        l: -(-10 + u * 4)
      }), this["surfacePeer" + u] = this["surfacePeer" + u] || g(this.mainBkg, {
        h: 30,
        s: -30,
        l: -(-7 + u * 4)
      });
      this.scaleLabelColor = this.scaleLabelColor || (this.darkMode ? "black" : this.labelTextColor);
      for (let u = 0; u < this.THEME_COLOR_LIMIT; u++) this["cScaleLabel" + u] = this["cScaleLabel" + u] || this.scaleLabelColor;
      for (let u = 0; u < this.THEME_COLOR_LIMIT; u++) this["pie" + u] = this["cScale" + u];
      this.pieTitleTextSize = this.pieTitleTextSize || "25px", this.pieTitleTextColor = this.pieTitleTextColor || this.taskTextDarkColor, this.pieSectionTextSize = this.pieSectionTextSize || "17px", this.pieSectionTextColor = this.pieSectionTextColor || this.textColor, this.pieLegendTextSize = this.pieLegendTextSize || "17px", this.pieLegendTextColor = this.pieLegendTextColor || this.taskTextDarkColor, this.pieStrokeColor = this.pieStrokeColor || "black", this.pieStrokeWidth = this.pieStrokeWidth || "2px", this.pieOuterStrokeWidth = this.pieOuterStrokeWidth || "2px", this.pieOuterStrokeColor = this.pieOuterStrokeColor || "black", this.pieOpacity = this.pieOpacity || "0.7", this.quadrant1Fill = this.quadrant1Fill || this.primaryColor, this.quadrant2Fill = this.quadrant2Fill || g(this.primaryColor, {
        r: 5,
        g: 5,
        b: 5
      }), this.quadrant3Fill = this.quadrant3Fill || g(this.primaryColor, {
        r: 10,
        g: 10,
        b: 10
      }), this.quadrant4Fill = this.quadrant4Fill || g(this.primaryColor, {
        r: 15,
        g: 15,
        b: 15
      }), this.quadrant1TextFill = this.quadrant1TextFill || this.primaryTextColor, this.quadrant2TextFill = this.quadrant2TextFill || g(this.primaryTextColor, {
        r: -5,
        g: -5,
        b: -5
      }), this.quadrant3TextFill = this.quadrant3TextFill || g(this.primaryTextColor, {
        r: -10,
        g: -10,
        b: -10
      }), this.quadrant4TextFill = this.quadrant4TextFill || g(this.primaryTextColor, {
        r: -15,
        g: -15,
        b: -15
      }), this.quadrantPointFill = this.quadrantPointFill || $i(this.quadrant1Fill) ? O(this.quadrant1Fill) : D(this.quadrant1Fill), this.quadrantPointTextFill = this.quadrantPointTextFill || this.primaryTextColor, this.quadrantXAxisTextFill = this.quadrantXAxisTextFill || this.primaryTextColor, this.quadrantYAxisTextFill = this.quadrantYAxisTextFill || this.primaryTextColor, this.quadrantInternalBorderStrokeFill = this.quadrantInternalBorderStrokeFill || this.primaryBorderColor, this.quadrantExternalBorderStrokeFill = this.quadrantExternalBorderStrokeFill || this.primaryBorderColor, this.quadrantTitleFill = this.quadrantTitleFill || this.primaryTextColor, this.xyChart = {
        backgroundColor: ((e = this.xyChart) == null ? void 0 : e.backgroundColor) || this.background,
        titleColor: ((i = this.xyChart) == null ? void 0 : i.titleColor) || this.primaryTextColor,
        xAxisTitleColor: ((r = this.xyChart) == null ? void 0 : r.xAxisTitleColor) || this.primaryTextColor,
        xAxisLabelColor: ((n = this.xyChart) == null ? void 0 : n.xAxisLabelColor) || this.primaryTextColor,
        xAxisTickColor: ((s = this.xyChart) == null ? void 0 : s.xAxisTickColor) || this.primaryTextColor,
        xAxisLineColor: ((o = this.xyChart) == null ? void 0 : o.xAxisLineColor) || this.primaryTextColor,
        yAxisTitleColor: ((a = this.xyChart) == null ? void 0 : a.yAxisTitleColor) || this.primaryTextColor,
        yAxisLabelColor: ((l = this.xyChart) == null ? void 0 : l.yAxisLabelColor) || this.primaryTextColor,
        yAxisTickColor: ((c = this.xyChart) == null ? void 0 : c.yAxisTickColor) || this.primaryTextColor,
        yAxisLineColor: ((h = this.xyChart) == null ? void 0 : h.yAxisLineColor) || this.primaryTextColor,
        plotColorPalette: ((d = this.xyChart) == null ? void 0 : d.plotColorPalette) || "#3498db,#2ecc71,#e74c3c,#f1c40f,#bdc3c7,#ffffff,#34495e,#9b59b6,#1abc9c,#e67e22"
      }, this.classText = this.primaryTextColor, this.requirementBackground = this.requirementBackground || this.primaryColor, this.requirementBorderColor = this.requirementBorderColor || this.primaryBorderColor, this.requirementBorderSize = this.requirementBorderSize || "1", this.requirementTextColor = this.requirementTextColor || this.primaryTextColor, this.relationColor = this.relationColor || this.lineColor, this.relationLabelBackground = this.relationLabelBackground || (this.darkMode ? D(this.secondaryColor, 30) : this.secondaryColor), this.relationLabelColor = this.relationLabelColor || this.actorTextColor, this.git0 = O(this.secondaryColor, 20), this.git1 = O(this.pie2 || this.secondaryColor, 20), this.git2 = O(this.pie3 || this.tertiaryColor, 20), this.git3 = O(this.pie4 || g(this.primaryColor, {
        h: -30
      }), 20), this.git4 = O(this.pie5 || g(this.primaryColor, {
        h: -60
      }), 20), this.git5 = O(this.pie6 || g(this.primaryColor, {
        h: -90
      }), 10), this.git6 = O(this.pie7 || g(this.primaryColor, {
        h: 60
      }), 10), this.git7 = O(this.pie8 || g(this.primaryColor, {
        h: 120
      }), 20), this.gitInv0 = this.gitInv0 || v(this.git0), this.gitInv1 = this.gitInv1 || v(this.git1), this.gitInv2 = this.gitInv2 || v(this.git2), this.gitInv3 = this.gitInv3 || v(this.git3), this.gitInv4 = this.gitInv4 || v(this.git4), this.gitInv5 = this.gitInv5 || v(this.git5), this.gitInv6 = this.gitInv6 || v(this.git6), this.gitInv7 = this.gitInv7 || v(this.git7), this.gitBranchLabel0 = this.gitBranchLabel0 || v(this.labelTextColor), this.gitBranchLabel1 = this.gitBranchLabel1 || this.labelTextColor, this.gitBranchLabel2 = this.gitBranchLabel2 || this.labelTextColor, this.gitBranchLabel3 = this.gitBranchLabel3 || v(this.labelTextColor), this.gitBranchLabel4 = this.gitBranchLabel4 || this.labelTextColor, this.gitBranchLabel5 = this.gitBranchLabel5 || this.labelTextColor, this.gitBranchLabel6 = this.gitBranchLabel6 || this.labelTextColor, this.gitBranchLabel7 = this.gitBranchLabel7 || this.labelTextColor, this.tagLabelColor = this.tagLabelColor || this.primaryTextColor, this.tagLabelBackground = this.tagLabelBackground || this.primaryColor, this.tagLabelBorder = this.tagBorder || this.primaryBorderColor, this.tagLabelFontSize = this.tagLabelFontSize || "10px", this.commitLabelColor = this.commitLabelColor || this.secondaryTextColor, this.commitLabelBackground = this.commitLabelBackground || this.secondaryColor, this.commitLabelFontSize = this.commitLabelFontSize || "10px", this.attributeBackgroundColorOdd = this.attributeBackgroundColorOdd || O(this.background, 12), this.attributeBackgroundColorEven = this.attributeBackgroundColorEven || O(this.background, 2);
    }
    calculate(e) {
      if (typeof e != "object") {
        this.updateColors();
        return;
      }
      const i = Object.keys(e);
      i.forEach((r) => {
        this[r] = e[r];
      }), this.updateColors(), i.forEach((r) => {
        this[r] = e[r];
      });
    }
  };
  const H0 = (t) => {
    const e = new Y0();
    return e.calculate(t), e;
  };
  let j0 = class {
    constructor() {
      this.background = "#f4f4f4", this.primaryColor = "#ECECFF", this.secondaryColor = g(this.primaryColor, {
        h: 120
      }), this.secondaryColor = "#ffffde", this.tertiaryColor = g(this.primaryColor, {
        h: -160
      }), this.primaryBorderColor = ft(this.primaryColor, this.darkMode), this.secondaryBorderColor = ft(this.secondaryColor, this.darkMode), this.tertiaryBorderColor = ft(this.tertiaryColor, this.darkMode), this.primaryTextColor = v(this.primaryColor), this.secondaryTextColor = v(this.secondaryColor), this.tertiaryTextColor = v(this.tertiaryColor), this.lineColor = v(this.background), this.textColor = v(this.background), this.background = "white", this.mainBkg = "#ECECFF", this.secondBkg = "#ffffde", this.lineColor = "#333333", this.border1 = "#9370DB", this.border2 = "#aaaa33", this.arrowheadColor = "#333333", this.fontFamily = '"trebuchet ms", verdana, arial, sans-serif', this.fontSize = "16px", this.labelBackground = "#e8e8e8", this.textColor = "#333", this.THEME_COLOR_LIMIT = 12, this.nodeBkg = "calculated", this.nodeBorder = "calculated", this.clusterBkg = "calculated", this.clusterBorder = "calculated", this.defaultLinkColor = "calculated", this.titleColor = "calculated", this.edgeLabelBackground = "calculated", this.actorBorder = "calculated", this.actorBkg = "calculated", this.actorTextColor = "black", this.actorLineColor = "grey", this.signalColor = "calculated", this.signalTextColor = "calculated", this.labelBoxBkgColor = "calculated", this.labelBoxBorderColor = "calculated", this.labelTextColor = "calculated", this.loopTextColor = "calculated", this.noteBorderColor = "calculated", this.noteBkgColor = "#fff5ad", this.noteTextColor = "calculated", this.activationBorderColor = "#666", this.activationBkgColor = "#f4f4f4", this.sequenceNumberColor = "white", this.sectionBkgColor = "calculated", this.altSectionBkgColor = "calculated", this.sectionBkgColor2 = "calculated", this.excludeBkgColor = "#eeeeee", this.taskBorderColor = "calculated", this.taskBkgColor = "calculated", this.taskTextLightColor = "calculated", this.taskTextColor = this.taskTextLightColor, this.taskTextDarkColor = "calculated", this.taskTextOutsideColor = this.taskTextDarkColor, this.taskTextClickableColor = "calculated", this.activeTaskBorderColor = "calculated", this.activeTaskBkgColor = "calculated", this.gridColor = "calculated", this.doneTaskBkgColor = "calculated", this.doneTaskBorderColor = "calculated", this.critBorderColor = "calculated", this.critBkgColor = "calculated", this.todayLineColor = "calculated", this.sectionBkgColor = _i(102, 102, 255, 0.49), this.altSectionBkgColor = "white", this.sectionBkgColor2 = "#fff400", this.taskBorderColor = "#534fbc", this.taskBkgColor = "#8a90dd", this.taskTextLightColor = "white", this.taskTextColor = "calculated", this.taskTextDarkColor = "black", this.taskTextOutsideColor = "calculated", this.taskTextClickableColor = "#003163", this.activeTaskBorderColor = "#534fbc", this.activeTaskBkgColor = "#bfc7ff", this.gridColor = "lightgrey", this.doneTaskBkgColor = "lightgrey", this.doneTaskBorderColor = "grey", this.critBorderColor = "#ff8888", this.critBkgColor = "red", this.todayLineColor = "red", this.personBorder = this.primaryBorderColor, this.personBkg = this.mainBkg, this.labelColor = "black", this.errorBkgColor = "#552222", this.errorTextColor = "#552222", this.updateColors();
    }
    updateColors() {
      var e, i, r, n, s, o, a, l, c, h, d;
      this.cScale0 = this.cScale0 || this.primaryColor, this.cScale1 = this.cScale1 || this.secondaryColor, this.cScale2 = this.cScale2 || this.tertiaryColor, this.cScale3 = this.cScale3 || g(this.primaryColor, {
        h: 30
      }), this.cScale4 = this.cScale4 || g(this.primaryColor, {
        h: 60
      }), this.cScale5 = this.cScale5 || g(this.primaryColor, {
        h: 90
      }), this.cScale6 = this.cScale6 || g(this.primaryColor, {
        h: 120
      }), this.cScale7 = this.cScale7 || g(this.primaryColor, {
        h: 150
      }), this.cScale8 = this.cScale8 || g(this.primaryColor, {
        h: 210
      }), this.cScale9 = this.cScale9 || g(this.primaryColor, {
        h: 270
      }), this.cScale10 = this.cScale10 || g(this.primaryColor, {
        h: 300
      }), this.cScale11 = this.cScale11 || g(this.primaryColor, {
        h: 330
      }), this.cScalePeer1 = this.cScalePeer1 || D(this.secondaryColor, 45), this.cScalePeer2 = this.cScalePeer2 || D(this.tertiaryColor, 40);
      for (let u = 0; u < this.THEME_COLOR_LIMIT; u++) this["cScale" + u] = D(this["cScale" + u], 10), this["cScalePeer" + u] = this["cScalePeer" + u] || D(this["cScale" + u], 25);
      for (let u = 0; u < this.THEME_COLOR_LIMIT; u++) this["cScaleInv" + u] = this["cScaleInv" + u] || g(this["cScale" + u], {
        h: 180
      });
      for (let u = 0; u < 5; u++) this["surface" + u] = this["surface" + u] || g(this.mainBkg, {
        h: 30,
        l: -(5 + u * 5)
      }), this["surfacePeer" + u] = this["surfacePeer" + u] || g(this.mainBkg, {
        h: 30,
        l: -(7 + u * 5)
      });
      if (this.scaleLabelColor = this.scaleLabelColor !== "calculated" && this.scaleLabelColor ? this.scaleLabelColor : this.labelTextColor, this.labelTextColor !== "calculated") {
        this.cScaleLabel0 = this.cScaleLabel0 || v(this.labelTextColor), this.cScaleLabel3 = this.cScaleLabel3 || v(this.labelTextColor);
        for (let u = 0; u < this.THEME_COLOR_LIMIT; u++) this["cScaleLabel" + u] = this["cScaleLabel" + u] || this.labelTextColor;
      }
      this.nodeBkg = this.mainBkg, this.nodeBorder = this.border1, this.clusterBkg = this.secondBkg, this.clusterBorder = this.border2, this.defaultLinkColor = this.lineColor, this.titleColor = this.textColor, this.edgeLabelBackground = this.labelBackground, this.actorBorder = O(this.border1, 23), this.actorBkg = this.mainBkg, this.labelBoxBkgColor = this.actorBkg, this.signalColor = this.textColor, this.signalTextColor = this.textColor, this.labelBoxBorderColor = this.actorBorder, this.labelTextColor = this.actorTextColor, this.loopTextColor = this.actorTextColor, this.noteBorderColor = this.border2, this.noteTextColor = this.actorTextColor, this.taskTextColor = this.taskTextLightColor, this.taskTextOutsideColor = this.taskTextDarkColor, this.transitionColor = this.transitionColor || this.lineColor, this.transitionLabelColor = this.transitionLabelColor || this.textColor, this.stateLabelColor = this.stateLabelColor || this.stateBkg || this.primaryTextColor, this.stateBkg = this.stateBkg || this.mainBkg, this.labelBackgroundColor = this.labelBackgroundColor || this.stateBkg, this.compositeBackground = this.compositeBackground || this.background || this.tertiaryColor, this.altBackground = this.altBackground || "#f0f0f0", this.compositeTitleBackground = this.compositeTitleBackground || this.mainBkg, this.compositeBorder = this.compositeBorder || this.nodeBorder, this.innerEndBackground = this.nodeBorder, this.specialStateColor = this.lineColor, this.errorBkgColor = this.errorBkgColor || this.tertiaryColor, this.errorTextColor = this.errorTextColor || this.tertiaryTextColor, this.transitionColor = this.transitionColor || this.lineColor, this.classText = this.primaryTextColor, this.fillType0 = this.primaryColor, this.fillType1 = this.secondaryColor, this.fillType2 = g(this.primaryColor, {
        h: 64
      }), this.fillType3 = g(this.secondaryColor, {
        h: 64
      }), this.fillType4 = g(this.primaryColor, {
        h: -64
      }), this.fillType5 = g(this.secondaryColor, {
        h: -64
      }), this.fillType6 = g(this.primaryColor, {
        h: 128
      }), this.fillType7 = g(this.secondaryColor, {
        h: 128
      }), this.pie1 = this.pie1 || this.primaryColor, this.pie2 = this.pie2 || this.secondaryColor, this.pie3 = this.pie3 || g(this.tertiaryColor, {
        l: -40
      }), this.pie4 = this.pie4 || g(this.primaryColor, {
        l: -10
      }), this.pie5 = this.pie5 || g(this.secondaryColor, {
        l: -30
      }), this.pie6 = this.pie6 || g(this.tertiaryColor, {
        l: -20
      }), this.pie7 = this.pie7 || g(this.primaryColor, {
        h: 60,
        l: -20
      }), this.pie8 = this.pie8 || g(this.primaryColor, {
        h: -60,
        l: -40
      }), this.pie9 = this.pie9 || g(this.primaryColor, {
        h: 120,
        l: -40
      }), this.pie10 = this.pie10 || g(this.primaryColor, {
        h: 60,
        l: -40
      }), this.pie11 = this.pie11 || g(this.primaryColor, {
        h: -90,
        l: -40
      }), this.pie12 = this.pie12 || g(this.primaryColor, {
        h: 120,
        l: -30
      }), this.pieTitleTextSize = this.pieTitleTextSize || "25px", this.pieTitleTextColor = this.pieTitleTextColor || this.taskTextDarkColor, this.pieSectionTextSize = this.pieSectionTextSize || "17px", this.pieSectionTextColor = this.pieSectionTextColor || this.textColor, this.pieLegendTextSize = this.pieLegendTextSize || "17px", this.pieLegendTextColor = this.pieLegendTextColor || this.taskTextDarkColor, this.pieStrokeColor = this.pieStrokeColor || "black", this.pieStrokeWidth = this.pieStrokeWidth || "2px", this.pieOuterStrokeWidth = this.pieOuterStrokeWidth || "2px", this.pieOuterStrokeColor = this.pieOuterStrokeColor || "black", this.pieOpacity = this.pieOpacity || "0.7", this.quadrant1Fill = this.quadrant1Fill || this.primaryColor, this.quadrant2Fill = this.quadrant2Fill || g(this.primaryColor, {
        r: 5,
        g: 5,
        b: 5
      }), this.quadrant3Fill = this.quadrant3Fill || g(this.primaryColor, {
        r: 10,
        g: 10,
        b: 10
      }), this.quadrant4Fill = this.quadrant4Fill || g(this.primaryColor, {
        r: 15,
        g: 15,
        b: 15
      }), this.quadrant1TextFill = this.quadrant1TextFill || this.primaryTextColor, this.quadrant2TextFill = this.quadrant2TextFill || g(this.primaryTextColor, {
        r: -5,
        g: -5,
        b: -5
      }), this.quadrant3TextFill = this.quadrant3TextFill || g(this.primaryTextColor, {
        r: -10,
        g: -10,
        b: -10
      }), this.quadrant4TextFill = this.quadrant4TextFill || g(this.primaryTextColor, {
        r: -15,
        g: -15,
        b: -15
      }), this.quadrantPointFill = this.quadrantPointFill || $i(this.quadrant1Fill) ? O(this.quadrant1Fill) : D(this.quadrant1Fill), this.quadrantPointTextFill = this.quadrantPointTextFill || this.primaryTextColor, this.quadrantXAxisTextFill = this.quadrantXAxisTextFill || this.primaryTextColor, this.quadrantYAxisTextFill = this.quadrantYAxisTextFill || this.primaryTextColor, this.quadrantInternalBorderStrokeFill = this.quadrantInternalBorderStrokeFill || this.primaryBorderColor, this.quadrantExternalBorderStrokeFill = this.quadrantExternalBorderStrokeFill || this.primaryBorderColor, this.quadrantTitleFill = this.quadrantTitleFill || this.primaryTextColor, this.xyChart = {
        backgroundColor: ((e = this.xyChart) == null ? void 0 : e.backgroundColor) || this.background,
        titleColor: ((i = this.xyChart) == null ? void 0 : i.titleColor) || this.primaryTextColor,
        xAxisTitleColor: ((r = this.xyChart) == null ? void 0 : r.xAxisTitleColor) || this.primaryTextColor,
        xAxisLabelColor: ((n = this.xyChart) == null ? void 0 : n.xAxisLabelColor) || this.primaryTextColor,
        xAxisTickColor: ((s = this.xyChart) == null ? void 0 : s.xAxisTickColor) || this.primaryTextColor,
        xAxisLineColor: ((o = this.xyChart) == null ? void 0 : o.xAxisLineColor) || this.primaryTextColor,
        yAxisTitleColor: ((a = this.xyChart) == null ? void 0 : a.yAxisTitleColor) || this.primaryTextColor,
        yAxisLabelColor: ((l = this.xyChart) == null ? void 0 : l.yAxisLabelColor) || this.primaryTextColor,
        yAxisTickColor: ((c = this.xyChart) == null ? void 0 : c.yAxisTickColor) || this.primaryTextColor,
        yAxisLineColor: ((h = this.xyChart) == null ? void 0 : h.yAxisLineColor) || this.primaryTextColor,
        plotColorPalette: ((d = this.xyChart) == null ? void 0 : d.plotColorPalette) || "#ECECFF,#8493A6,#FFC3A0,#DCDDE1,#B8E994,#D1A36F,#C3CDE6,#FFB6C1,#496078,#F8F3E3"
      }, this.requirementBackground = this.requirementBackground || this.primaryColor, this.requirementBorderColor = this.requirementBorderColor || this.primaryBorderColor, this.requirementBorderSize = this.requirementBorderSize || "1", this.requirementTextColor = this.requirementTextColor || this.primaryTextColor, this.relationColor = this.relationColor || this.lineColor, this.relationLabelBackground = this.relationLabelBackground || this.labelBackground, this.relationLabelColor = this.relationLabelColor || this.actorTextColor, this.git0 = this.git0 || this.primaryColor, this.git1 = this.git1 || this.secondaryColor, this.git2 = this.git2 || this.tertiaryColor, this.git3 = this.git3 || g(this.primaryColor, {
        h: -30
      }), this.git4 = this.git4 || g(this.primaryColor, {
        h: -60
      }), this.git5 = this.git5 || g(this.primaryColor, {
        h: -90
      }), this.git6 = this.git6 || g(this.primaryColor, {
        h: 60
      }), this.git7 = this.git7 || g(this.primaryColor, {
        h: 120
      }), this.darkMode ? (this.git0 = O(this.git0, 25), this.git1 = O(this.git1, 25), this.git2 = O(this.git2, 25), this.git3 = O(this.git3, 25), this.git4 = O(this.git4, 25), this.git5 = O(this.git5, 25), this.git6 = O(this.git6, 25), this.git7 = O(this.git7, 25)) : (this.git0 = D(this.git0, 25), this.git1 = D(this.git1, 25), this.git2 = D(this.git2, 25), this.git3 = D(this.git3, 25), this.git4 = D(this.git4, 25), this.git5 = D(this.git5, 25), this.git6 = D(this.git6, 25), this.git7 = D(this.git7, 25)), this.gitInv0 = this.gitInv0 || D(v(this.git0), 25), this.gitInv1 = this.gitInv1 || v(this.git1), this.gitInv2 = this.gitInv2 || v(this.git2), this.gitInv3 = this.gitInv3 || v(this.git3), this.gitInv4 = this.gitInv4 || v(this.git4), this.gitInv5 = this.gitInv5 || v(this.git5), this.gitInv6 = this.gitInv6 || v(this.git6), this.gitInv7 = this.gitInv7 || v(this.git7), this.gitBranchLabel0 = this.gitBranchLabel0 || v(this.labelTextColor), this.gitBranchLabel1 = this.gitBranchLabel1 || this.labelTextColor, this.gitBranchLabel2 = this.gitBranchLabel2 || this.labelTextColor, this.gitBranchLabel3 = this.gitBranchLabel3 || v(this.labelTextColor), this.gitBranchLabel4 = this.gitBranchLabel4 || this.labelTextColor, this.gitBranchLabel5 = this.gitBranchLabel5 || this.labelTextColor, this.gitBranchLabel6 = this.gitBranchLabel6 || this.labelTextColor, this.gitBranchLabel7 = this.gitBranchLabel7 || this.labelTextColor, this.tagLabelColor = this.tagLabelColor || this.primaryTextColor, this.tagLabelBackground = this.tagLabelBackground || this.primaryColor, this.tagLabelBorder = this.tagBorder || this.primaryBorderColor, this.tagLabelFontSize = this.tagLabelFontSize || "10px", this.commitLabelColor = this.commitLabelColor || this.secondaryTextColor, this.commitLabelBackground = this.commitLabelBackground || this.secondaryColor, this.commitLabelFontSize = this.commitLabelFontSize || "10px", this.attributeBackgroundColorOdd = this.attributeBackgroundColorOdd || Gr, this.attributeBackgroundColorEven = this.attributeBackgroundColorEven || Vr;
    }
    calculate(e) {
      if (typeof e != "object") {
        this.updateColors();
        return;
      }
      const i = Object.keys(e);
      i.forEach((r) => {
        this[r] = e[r];
      }), this.updateColors(), i.forEach((r) => {
        this[r] = e[r];
      });
    }
  };
  U0 = (t) => {
    const e = new j0();
    return e.calculate(t), e;
  };
  let X0 = class {
    constructor() {
      this.background = "#f4f4f4", this.primaryColor = "#cde498", this.secondaryColor = "#cdffb2", this.background = "white", this.mainBkg = "#cde498", this.secondBkg = "#cdffb2", this.lineColor = "green", this.border1 = "#13540c", this.border2 = "#6eaa49", this.arrowheadColor = "green", this.fontFamily = '"trebuchet ms", verdana, arial, sans-serif', this.fontSize = "16px", this.tertiaryColor = O("#cde498", 10), this.primaryBorderColor = ft(this.primaryColor, this.darkMode), this.secondaryBorderColor = ft(this.secondaryColor, this.darkMode), this.tertiaryBorderColor = ft(this.tertiaryColor, this.darkMode), this.primaryTextColor = v(this.primaryColor), this.secondaryTextColor = v(this.secondaryColor), this.tertiaryTextColor = v(this.primaryColor), this.lineColor = v(this.background), this.textColor = v(this.background), this.THEME_COLOR_LIMIT = 12, this.nodeBkg = "calculated", this.nodeBorder = "calculated", this.clusterBkg = "calculated", this.clusterBorder = "calculated", this.defaultLinkColor = "calculated", this.titleColor = "#333", this.edgeLabelBackground = "#e8e8e8", this.actorBorder = "calculated", this.actorBkg = "calculated", this.actorTextColor = "black", this.actorLineColor = "grey", this.signalColor = "#333", this.signalTextColor = "#333", this.labelBoxBkgColor = "calculated", this.labelBoxBorderColor = "#326932", this.labelTextColor = "calculated", this.loopTextColor = "calculated", this.noteBorderColor = "calculated", this.noteBkgColor = "#fff5ad", this.noteTextColor = "calculated", this.activationBorderColor = "#666", this.activationBkgColor = "#f4f4f4", this.sequenceNumberColor = "white", this.sectionBkgColor = "#6eaa49", this.altSectionBkgColor = "white", this.sectionBkgColor2 = "#6eaa49", this.excludeBkgColor = "#eeeeee", this.taskBorderColor = "calculated", this.taskBkgColor = "#487e3a", this.taskTextLightColor = "white", this.taskTextColor = "calculated", this.taskTextDarkColor = "black", this.taskTextOutsideColor = "calculated", this.taskTextClickableColor = "#003163", this.activeTaskBorderColor = "calculated", this.activeTaskBkgColor = "calculated", this.gridColor = "lightgrey", this.doneTaskBkgColor = "lightgrey", this.doneTaskBorderColor = "grey", this.critBorderColor = "#ff8888", this.critBkgColor = "red", this.todayLineColor = "red", this.personBorder = this.primaryBorderColor, this.personBkg = this.mainBkg, this.labelColor = "black", this.errorBkgColor = "#552222", this.errorTextColor = "#552222";
    }
    updateColors() {
      var e, i, r, n, s, o, a, l, c, h, d;
      this.actorBorder = D(this.mainBkg, 20), this.actorBkg = this.mainBkg, this.labelBoxBkgColor = this.actorBkg, this.labelTextColor = this.actorTextColor, this.loopTextColor = this.actorTextColor, this.noteBorderColor = this.border2, this.noteTextColor = this.actorTextColor, this.cScale0 = this.cScale0 || this.primaryColor, this.cScale1 = this.cScale1 || this.secondaryColor, this.cScale2 = this.cScale2 || this.tertiaryColor, this.cScale3 = this.cScale3 || g(this.primaryColor, {
        h: 30
      }), this.cScale4 = this.cScale4 || g(this.primaryColor, {
        h: 60
      }), this.cScale5 = this.cScale5 || g(this.primaryColor, {
        h: 90
      }), this.cScale6 = this.cScale6 || g(this.primaryColor, {
        h: 120
      }), this.cScale7 = this.cScale7 || g(this.primaryColor, {
        h: 150
      }), this.cScale8 = this.cScale8 || g(this.primaryColor, {
        h: 210
      }), this.cScale9 = this.cScale9 || g(this.primaryColor, {
        h: 270
      }), this.cScale10 = this.cScale10 || g(this.primaryColor, {
        h: 300
      }), this.cScale11 = this.cScale11 || g(this.primaryColor, {
        h: 330
      }), this.cScalePeer1 = this.cScalePeer1 || D(this.secondaryColor, 45), this.cScalePeer2 = this.cScalePeer2 || D(this.tertiaryColor, 40);
      for (let u = 0; u < this.THEME_COLOR_LIMIT; u++) this["cScale" + u] = D(this["cScale" + u], 10), this["cScalePeer" + u] = this["cScalePeer" + u] || D(this["cScale" + u], 25);
      for (let u = 0; u < this.THEME_COLOR_LIMIT; u++) this["cScaleInv" + u] = this["cScaleInv" + u] || g(this["cScale" + u], {
        h: 180
      });
      this.scaleLabelColor = this.scaleLabelColor !== "calculated" && this.scaleLabelColor ? this.scaleLabelColor : this.labelTextColor;
      for (let u = 0; u < this.THEME_COLOR_LIMIT; u++) this["cScaleLabel" + u] = this["cScaleLabel" + u] || this.scaleLabelColor;
      for (let u = 0; u < 5; u++) this["surface" + u] = this["surface" + u] || g(this.mainBkg, {
        h: 30,
        s: -30,
        l: -(5 + u * 5)
      }), this["surfacePeer" + u] = this["surfacePeer" + u] || g(this.mainBkg, {
        h: 30,
        s: -30,
        l: -(8 + u * 5)
      });
      this.nodeBkg = this.mainBkg, this.nodeBorder = this.border1, this.clusterBkg = this.secondBkg, this.clusterBorder = this.border2, this.defaultLinkColor = this.lineColor, this.taskBorderColor = this.border1, this.taskTextColor = this.taskTextLightColor, this.taskTextOutsideColor = this.taskTextDarkColor, this.activeTaskBorderColor = this.taskBorderColor, this.activeTaskBkgColor = this.mainBkg, this.transitionColor = this.transitionColor || this.lineColor, this.transitionLabelColor = this.transitionLabelColor || this.textColor, this.stateLabelColor = this.stateLabelColor || this.stateBkg || this.primaryTextColor, this.stateBkg = this.stateBkg || this.mainBkg, this.labelBackgroundColor = this.labelBackgroundColor || this.stateBkg, this.compositeBackground = this.compositeBackground || this.background || this.tertiaryColor, this.altBackground = this.altBackground || "#f0f0f0", this.compositeTitleBackground = this.compositeTitleBackground || this.mainBkg, this.compositeBorder = this.compositeBorder || this.nodeBorder, this.innerEndBackground = this.primaryBorderColor, this.specialStateColor = this.lineColor, this.errorBkgColor = this.errorBkgColor || this.tertiaryColor, this.errorTextColor = this.errorTextColor || this.tertiaryTextColor, this.transitionColor = this.transitionColor || this.lineColor, this.classText = this.primaryTextColor, this.fillType0 = this.primaryColor, this.fillType1 = this.secondaryColor, this.fillType2 = g(this.primaryColor, {
        h: 64
      }), this.fillType3 = g(this.secondaryColor, {
        h: 64
      }), this.fillType4 = g(this.primaryColor, {
        h: -64
      }), this.fillType5 = g(this.secondaryColor, {
        h: -64
      }), this.fillType6 = g(this.primaryColor, {
        h: 128
      }), this.fillType7 = g(this.secondaryColor, {
        h: 128
      }), this.pie1 = this.pie1 || this.primaryColor, this.pie2 = this.pie2 || this.secondaryColor, this.pie3 = this.pie3 || this.tertiaryColor, this.pie4 = this.pie4 || g(this.primaryColor, {
        l: -30
      }), this.pie5 = this.pie5 || g(this.secondaryColor, {
        l: -30
      }), this.pie6 = this.pie6 || g(this.tertiaryColor, {
        h: 40,
        l: -40
      }), this.pie7 = this.pie7 || g(this.primaryColor, {
        h: 60,
        l: -10
      }), this.pie8 = this.pie8 || g(this.primaryColor, {
        h: -60,
        l: -10
      }), this.pie9 = this.pie9 || g(this.primaryColor, {
        h: 120,
        l: 0
      }), this.pie10 = this.pie10 || g(this.primaryColor, {
        h: 60,
        l: -50
      }), this.pie11 = this.pie11 || g(this.primaryColor, {
        h: -60,
        l: -50
      }), this.pie12 = this.pie12 || g(this.primaryColor, {
        h: 120,
        l: -50
      }), this.pieTitleTextSize = this.pieTitleTextSize || "25px", this.pieTitleTextColor = this.pieTitleTextColor || this.taskTextDarkColor, this.pieSectionTextSize = this.pieSectionTextSize || "17px", this.pieSectionTextColor = this.pieSectionTextColor || this.textColor, this.pieLegendTextSize = this.pieLegendTextSize || "17px", this.pieLegendTextColor = this.pieLegendTextColor || this.taskTextDarkColor, this.pieStrokeColor = this.pieStrokeColor || "black", this.pieStrokeWidth = this.pieStrokeWidth || "2px", this.pieOuterStrokeWidth = this.pieOuterStrokeWidth || "2px", this.pieOuterStrokeColor = this.pieOuterStrokeColor || "black", this.pieOpacity = this.pieOpacity || "0.7", this.quadrant1Fill = this.quadrant1Fill || this.primaryColor, this.quadrant2Fill = this.quadrant2Fill || g(this.primaryColor, {
        r: 5,
        g: 5,
        b: 5
      }), this.quadrant3Fill = this.quadrant3Fill || g(this.primaryColor, {
        r: 10,
        g: 10,
        b: 10
      }), this.quadrant4Fill = this.quadrant4Fill || g(this.primaryColor, {
        r: 15,
        g: 15,
        b: 15
      }), this.quadrant1TextFill = this.quadrant1TextFill || this.primaryTextColor, this.quadrant2TextFill = this.quadrant2TextFill || g(this.primaryTextColor, {
        r: -5,
        g: -5,
        b: -5
      }), this.quadrant3TextFill = this.quadrant3TextFill || g(this.primaryTextColor, {
        r: -10,
        g: -10,
        b: -10
      }), this.quadrant4TextFill = this.quadrant4TextFill || g(this.primaryTextColor, {
        r: -15,
        g: -15,
        b: -15
      }), this.quadrantPointFill = this.quadrantPointFill || $i(this.quadrant1Fill) ? O(this.quadrant1Fill) : D(this.quadrant1Fill), this.quadrantPointTextFill = this.quadrantPointTextFill || this.primaryTextColor, this.quadrantXAxisTextFill = this.quadrantXAxisTextFill || this.primaryTextColor, this.quadrantYAxisTextFill = this.quadrantYAxisTextFill || this.primaryTextColor, this.quadrantInternalBorderStrokeFill = this.quadrantInternalBorderStrokeFill || this.primaryBorderColor, this.quadrantExternalBorderStrokeFill = this.quadrantExternalBorderStrokeFill || this.primaryBorderColor, this.quadrantTitleFill = this.quadrantTitleFill || this.primaryTextColor, this.xyChart = {
        backgroundColor: ((e = this.xyChart) == null ? void 0 : e.backgroundColor) || this.background,
        titleColor: ((i = this.xyChart) == null ? void 0 : i.titleColor) || this.primaryTextColor,
        xAxisTitleColor: ((r = this.xyChart) == null ? void 0 : r.xAxisTitleColor) || this.primaryTextColor,
        xAxisLabelColor: ((n = this.xyChart) == null ? void 0 : n.xAxisLabelColor) || this.primaryTextColor,
        xAxisTickColor: ((s = this.xyChart) == null ? void 0 : s.xAxisTickColor) || this.primaryTextColor,
        xAxisLineColor: ((o = this.xyChart) == null ? void 0 : o.xAxisLineColor) || this.primaryTextColor,
        yAxisTitleColor: ((a = this.xyChart) == null ? void 0 : a.yAxisTitleColor) || this.primaryTextColor,
        yAxisLabelColor: ((l = this.xyChart) == null ? void 0 : l.yAxisLabelColor) || this.primaryTextColor,
        yAxisTickColor: ((c = this.xyChart) == null ? void 0 : c.yAxisTickColor) || this.primaryTextColor,
        yAxisLineColor: ((h = this.xyChart) == null ? void 0 : h.yAxisLineColor) || this.primaryTextColor,
        plotColorPalette: ((d = this.xyChart) == null ? void 0 : d.plotColorPalette) || "#CDE498,#FF6B6B,#A0D2DB,#D7BDE2,#F0F0F0,#FFC3A0,#7FD8BE,#FF9A8B,#FAF3E0,#FFF176"
      }, this.requirementBackground = this.requirementBackground || this.primaryColor, this.requirementBorderColor = this.requirementBorderColor || this.primaryBorderColor, this.requirementBorderSize = this.requirementBorderSize || "1", this.requirementTextColor = this.requirementTextColor || this.primaryTextColor, this.relationColor = this.relationColor || this.lineColor, this.relationLabelBackground = this.relationLabelBackground || this.edgeLabelBackground, this.relationLabelColor = this.relationLabelColor || this.actorTextColor, this.git0 = this.git0 || this.primaryColor, this.git1 = this.git1 || this.secondaryColor, this.git2 = this.git2 || this.tertiaryColor, this.git3 = this.git3 || g(this.primaryColor, {
        h: -30
      }), this.git4 = this.git4 || g(this.primaryColor, {
        h: -60
      }), this.git5 = this.git5 || g(this.primaryColor, {
        h: -90
      }), this.git6 = this.git6 || g(this.primaryColor, {
        h: 60
      }), this.git7 = this.git7 || g(this.primaryColor, {
        h: 120
      }), this.darkMode ? (this.git0 = O(this.git0, 25), this.git1 = O(this.git1, 25), this.git2 = O(this.git2, 25), this.git3 = O(this.git3, 25), this.git4 = O(this.git4, 25), this.git5 = O(this.git5, 25), this.git6 = O(this.git6, 25), this.git7 = O(this.git7, 25)) : (this.git0 = D(this.git0, 25), this.git1 = D(this.git1, 25), this.git2 = D(this.git2, 25), this.git3 = D(this.git3, 25), this.git4 = D(this.git4, 25), this.git5 = D(this.git5, 25), this.git6 = D(this.git6, 25), this.git7 = D(this.git7, 25)), this.gitInv0 = this.gitInv0 || v(this.git0), this.gitInv1 = this.gitInv1 || v(this.git1), this.gitInv2 = this.gitInv2 || v(this.git2), this.gitInv3 = this.gitInv3 || v(this.git3), this.gitInv4 = this.gitInv4 || v(this.git4), this.gitInv5 = this.gitInv5 || v(this.git5), this.gitInv6 = this.gitInv6 || v(this.git6), this.gitInv7 = this.gitInv7 || v(this.git7), this.gitBranchLabel0 = this.gitBranchLabel0 || v(this.labelTextColor), this.gitBranchLabel1 = this.gitBranchLabel1 || this.labelTextColor, this.gitBranchLabel2 = this.gitBranchLabel2 || this.labelTextColor, this.gitBranchLabel3 = this.gitBranchLabel3 || v(this.labelTextColor), this.gitBranchLabel4 = this.gitBranchLabel4 || this.labelTextColor, this.gitBranchLabel5 = this.gitBranchLabel5 || this.labelTextColor, this.gitBranchLabel6 = this.gitBranchLabel6 || this.labelTextColor, this.gitBranchLabel7 = this.gitBranchLabel7 || this.labelTextColor, this.tagLabelColor = this.tagLabelColor || this.primaryTextColor, this.tagLabelBackground = this.tagLabelBackground || this.primaryColor, this.tagLabelBorder = this.tagBorder || this.primaryBorderColor, this.tagLabelFontSize = this.tagLabelFontSize || "10px", this.commitLabelColor = this.commitLabelColor || this.secondaryTextColor, this.commitLabelBackground = this.commitLabelBackground || this.secondaryColor, this.commitLabelFontSize = this.commitLabelFontSize || "10px", this.attributeBackgroundColorOdd = this.attributeBackgroundColorOdd || Gr, this.attributeBackgroundColorEven = this.attributeBackgroundColorEven || Vr;
    }
    calculate(e) {
      if (typeof e != "object") {
        this.updateColors();
        return;
      }
      const i = Object.keys(e);
      i.forEach((r) => {
        this[r] = e[r];
      }), this.updateColors(), i.forEach((r) => {
        this[r] = e[r];
      });
    }
  };
  const G0 = (t) => {
    const e = new X0();
    return e.calculate(t), e;
  };
  class V0 {
    constructor() {
      this.primaryColor = "#eee", this.contrast = "#707070", this.secondaryColor = O(this.contrast, 55), this.background = "#ffffff", this.tertiaryColor = g(this.primaryColor, {
        h: -160
      }), this.primaryBorderColor = ft(this.primaryColor, this.darkMode), this.secondaryBorderColor = ft(this.secondaryColor, this.darkMode), this.tertiaryBorderColor = ft(this.tertiaryColor, this.darkMode), this.primaryTextColor = v(this.primaryColor), this.secondaryTextColor = v(this.secondaryColor), this.tertiaryTextColor = v(this.tertiaryColor), this.lineColor = v(this.background), this.textColor = v(this.background), this.mainBkg = "#eee", this.secondBkg = "calculated", this.lineColor = "#666", this.border1 = "#999", this.border2 = "calculated", this.note = "#ffa", this.text = "#333", this.critical = "#d42", this.done = "#bbb", this.arrowheadColor = "#333333", this.fontFamily = '"trebuchet ms", verdana, arial, sans-serif', this.fontSize = "16px", this.THEME_COLOR_LIMIT = 12, this.nodeBkg = "calculated", this.nodeBorder = "calculated", this.clusterBkg = "calculated", this.clusterBorder = "calculated", this.defaultLinkColor = "calculated", this.titleColor = "calculated", this.edgeLabelBackground = "white", this.actorBorder = "calculated", this.actorBkg = "calculated", this.actorTextColor = "calculated", this.actorLineColor = "calculated", this.signalColor = "calculated", this.signalTextColor = "calculated", this.labelBoxBkgColor = "calculated", this.labelBoxBorderColor = "calculated", this.labelTextColor = "calculated", this.loopTextColor = "calculated", this.noteBorderColor = "calculated", this.noteBkgColor = "calculated", this.noteTextColor = "calculated", this.activationBorderColor = "#666", this.activationBkgColor = "#f4f4f4", this.sequenceNumberColor = "white", this.sectionBkgColor = "calculated", this.altSectionBkgColor = "white", this.sectionBkgColor2 = "calculated", this.excludeBkgColor = "#eeeeee", this.taskBorderColor = "calculated", this.taskBkgColor = "calculated", this.taskTextLightColor = "white", this.taskTextColor = "calculated", this.taskTextDarkColor = "calculated", this.taskTextOutsideColor = "calculated", this.taskTextClickableColor = "#003163", this.activeTaskBorderColor = "calculated", this.activeTaskBkgColor = "calculated", this.gridColor = "calculated", this.doneTaskBkgColor = "calculated", this.doneTaskBorderColor = "calculated", this.critBkgColor = "calculated", this.critBorderColor = "calculated", this.todayLineColor = "calculated", this.personBorder = this.primaryBorderColor, this.personBkg = this.mainBkg, this.labelColor = "black", this.errorBkgColor = "#552222", this.errorTextColor = "#552222";
    }
    updateColors() {
      var e, i, r, n, s, o, a, l, c, h, d;
      this.secondBkg = O(this.contrast, 55), this.border2 = this.contrast, this.actorBorder = O(this.border1, 23), this.actorBkg = this.mainBkg, this.actorTextColor = this.text, this.actorLineColor = this.lineColor, this.signalColor = this.text, this.signalTextColor = this.text, this.labelBoxBkgColor = this.actorBkg, this.labelBoxBorderColor = this.actorBorder, this.labelTextColor = this.text, this.loopTextColor = this.text, this.noteBorderColor = "#999", this.noteBkgColor = "#666", this.noteTextColor = "#fff", this.cScale0 = this.cScale0 || "#555", this.cScale1 = this.cScale1 || "#F4F4F4", this.cScale2 = this.cScale2 || "#555", this.cScale3 = this.cScale3 || "#BBB", this.cScale4 = this.cScale4 || "#777", this.cScale5 = this.cScale5 || "#999", this.cScale6 = this.cScale6 || "#DDD", this.cScale7 = this.cScale7 || "#FFF", this.cScale8 = this.cScale8 || "#DDD", this.cScale9 = this.cScale9 || "#BBB", this.cScale10 = this.cScale10 || "#999", this.cScale11 = this.cScale11 || "#777";
      for (let u = 0; u < this.THEME_COLOR_LIMIT; u++) this["cScaleInv" + u] = this["cScaleInv" + u] || v(this["cScale" + u]);
      for (let u = 0; u < this.THEME_COLOR_LIMIT; u++) this.darkMode ? this["cScalePeer" + u] = this["cScalePeer" + u] || O(this["cScale" + u], 10) : this["cScalePeer" + u] = this["cScalePeer" + u] || D(this["cScale" + u], 10);
      this.scaleLabelColor = this.scaleLabelColor || (this.darkMode ? "black" : this.labelTextColor), this.cScaleLabel0 = this.cScaleLabel0 || this.cScale1, this.cScaleLabel2 = this.cScaleLabel2 || this.cScale1;
      for (let u = 0; u < this.THEME_COLOR_LIMIT; u++) this["cScaleLabel" + u] = this["cScaleLabel" + u] || this.scaleLabelColor;
      for (let u = 0; u < 5; u++) this["surface" + u] = this["surface" + u] || g(this.mainBkg, {
        l: -(5 + u * 5)
      }), this["surfacePeer" + u] = this["surfacePeer" + u] || g(this.mainBkg, {
        l: -(8 + u * 5)
      });
      this.nodeBkg = this.mainBkg, this.nodeBorder = this.border1, this.clusterBkg = this.secondBkg, this.clusterBorder = this.border2, this.defaultLinkColor = this.lineColor, this.titleColor = this.text, this.sectionBkgColor = O(this.contrast, 30), this.sectionBkgColor2 = O(this.contrast, 30), this.taskBorderColor = D(this.contrast, 10), this.taskBkgColor = this.contrast, this.taskTextColor = this.taskTextLightColor, this.taskTextDarkColor = this.text, this.taskTextOutsideColor = this.taskTextDarkColor, this.activeTaskBorderColor = this.taskBorderColor, this.activeTaskBkgColor = this.mainBkg, this.gridColor = O(this.border1, 30), this.doneTaskBkgColor = this.done, this.doneTaskBorderColor = this.lineColor, this.critBkgColor = this.critical, this.critBorderColor = D(this.critBkgColor, 10), this.todayLineColor = this.critBkgColor, this.transitionColor = this.transitionColor || "#000", this.transitionLabelColor = this.transitionLabelColor || this.textColor, this.stateLabelColor = this.stateLabelColor || this.stateBkg || this.primaryTextColor, this.stateBkg = this.stateBkg || this.mainBkg, this.labelBackgroundColor = this.labelBackgroundColor || this.stateBkg, this.compositeBackground = this.compositeBackground || this.background || this.tertiaryColor, this.altBackground = this.altBackground || "#f4f4f4", this.compositeTitleBackground = this.compositeTitleBackground || this.mainBkg, this.stateBorder = this.stateBorder || "#000", this.innerEndBackground = this.primaryBorderColor, this.specialStateColor = "#222", this.errorBkgColor = this.errorBkgColor || this.tertiaryColor, this.errorTextColor = this.errorTextColor || this.tertiaryTextColor, this.classText = this.primaryTextColor, this.fillType0 = this.primaryColor, this.fillType1 = this.secondaryColor, this.fillType2 = g(this.primaryColor, {
        h: 64
      }), this.fillType3 = g(this.secondaryColor, {
        h: 64
      }), this.fillType4 = g(this.primaryColor, {
        h: -64
      }), this.fillType5 = g(this.secondaryColor, {
        h: -64
      }), this.fillType6 = g(this.primaryColor, {
        h: 128
      }), this.fillType7 = g(this.secondaryColor, {
        h: 128
      });
      for (let u = 0; u < this.THEME_COLOR_LIMIT; u++) this["pie" + u] = this["cScale" + u];
      this.pie12 = this.pie0, this.pieTitleTextSize = this.pieTitleTextSize || "25px", this.pieTitleTextColor = this.pieTitleTextColor || this.taskTextDarkColor, this.pieSectionTextSize = this.pieSectionTextSize || "17px", this.pieSectionTextColor = this.pieSectionTextColor || this.textColor, this.pieLegendTextSize = this.pieLegendTextSize || "17px", this.pieLegendTextColor = this.pieLegendTextColor || this.taskTextDarkColor, this.pieStrokeColor = this.pieStrokeColor || "black", this.pieStrokeWidth = this.pieStrokeWidth || "2px", this.pieOuterStrokeWidth = this.pieOuterStrokeWidth || "2px", this.pieOuterStrokeColor = this.pieOuterStrokeColor || "black", this.pieOpacity = this.pieOpacity || "0.7", this.quadrant1Fill = this.quadrant1Fill || this.primaryColor, this.quadrant2Fill = this.quadrant2Fill || g(this.primaryColor, {
        r: 5,
        g: 5,
        b: 5
      }), this.quadrant3Fill = this.quadrant3Fill || g(this.primaryColor, {
        r: 10,
        g: 10,
        b: 10
      }), this.quadrant4Fill = this.quadrant4Fill || g(this.primaryColor, {
        r: 15,
        g: 15,
        b: 15
      }), this.quadrant1TextFill = this.quadrant1TextFill || this.primaryTextColor, this.quadrant2TextFill = this.quadrant2TextFill || g(this.primaryTextColor, {
        r: -5,
        g: -5,
        b: -5
      }), this.quadrant3TextFill = this.quadrant3TextFill || g(this.primaryTextColor, {
        r: -10,
        g: -10,
        b: -10
      }), this.quadrant4TextFill = this.quadrant4TextFill || g(this.primaryTextColor, {
        r: -15,
        g: -15,
        b: -15
      }), this.quadrantPointFill = this.quadrantPointFill || $i(this.quadrant1Fill) ? O(this.quadrant1Fill) : D(this.quadrant1Fill), this.quadrantPointTextFill = this.quadrantPointTextFill || this.primaryTextColor, this.quadrantXAxisTextFill = this.quadrantXAxisTextFill || this.primaryTextColor, this.quadrantYAxisTextFill = this.quadrantYAxisTextFill || this.primaryTextColor, this.quadrantInternalBorderStrokeFill = this.quadrantInternalBorderStrokeFill || this.primaryBorderColor, this.quadrantExternalBorderStrokeFill = this.quadrantExternalBorderStrokeFill || this.primaryBorderColor, this.quadrantTitleFill = this.quadrantTitleFill || this.primaryTextColor, this.xyChart = {
        backgroundColor: ((e = this.xyChart) == null ? void 0 : e.backgroundColor) || this.background,
        titleColor: ((i = this.xyChart) == null ? void 0 : i.titleColor) || this.primaryTextColor,
        xAxisTitleColor: ((r = this.xyChart) == null ? void 0 : r.xAxisTitleColor) || this.primaryTextColor,
        xAxisLabelColor: ((n = this.xyChart) == null ? void 0 : n.xAxisLabelColor) || this.primaryTextColor,
        xAxisTickColor: ((s = this.xyChart) == null ? void 0 : s.xAxisTickColor) || this.primaryTextColor,
        xAxisLineColor: ((o = this.xyChart) == null ? void 0 : o.xAxisLineColor) || this.primaryTextColor,
        yAxisTitleColor: ((a = this.xyChart) == null ? void 0 : a.yAxisTitleColor) || this.primaryTextColor,
        yAxisLabelColor: ((l = this.xyChart) == null ? void 0 : l.yAxisLabelColor) || this.primaryTextColor,
        yAxisTickColor: ((c = this.xyChart) == null ? void 0 : c.yAxisTickColor) || this.primaryTextColor,
        yAxisLineColor: ((h = this.xyChart) == null ? void 0 : h.yAxisLineColor) || this.primaryTextColor,
        plotColorPalette: ((d = this.xyChart) == null ? void 0 : d.plotColorPalette) || "#EEE,#6BB8E4,#8ACB88,#C7ACD6,#E8DCC2,#FFB2A8,#FFF380,#7E8D91,#FFD8B1,#FAF3E0"
      }, this.requirementBackground = this.requirementBackground || this.primaryColor, this.requirementBorderColor = this.requirementBorderColor || this.primaryBorderColor, this.requirementBorderSize = this.requirementBorderSize || "1", this.requirementTextColor = this.requirementTextColor || this.primaryTextColor, this.relationColor = this.relationColor || this.lineColor, this.relationLabelBackground = this.relationLabelBackground || this.edgeLabelBackground, this.relationLabelColor = this.relationLabelColor || this.actorTextColor, this.git0 = D(this.pie1, 25) || this.primaryColor, this.git1 = this.pie2 || this.secondaryColor, this.git2 = this.pie3 || this.tertiaryColor, this.git3 = this.pie4 || g(this.primaryColor, {
        h: -30
      }), this.git4 = this.pie5 || g(this.primaryColor, {
        h: -60
      }), this.git5 = this.pie6 || g(this.primaryColor, {
        h: -90
      }), this.git6 = this.pie7 || g(this.primaryColor, {
        h: 60
      }), this.git7 = this.pie8 || g(this.primaryColor, {
        h: 120
      }), this.gitInv0 = this.gitInv0 || v(this.git0), this.gitInv1 = this.gitInv1 || v(this.git1), this.gitInv2 = this.gitInv2 || v(this.git2), this.gitInv3 = this.gitInv3 || v(this.git3), this.gitInv4 = this.gitInv4 || v(this.git4), this.gitInv5 = this.gitInv5 || v(this.git5), this.gitInv6 = this.gitInv6 || v(this.git6), this.gitInv7 = this.gitInv7 || v(this.git7), this.branchLabelColor = this.branchLabelColor || this.labelTextColor, this.gitBranchLabel0 = this.branchLabelColor, this.gitBranchLabel1 = "white", this.gitBranchLabel2 = this.branchLabelColor, this.gitBranchLabel3 = "white", this.gitBranchLabel4 = this.branchLabelColor, this.gitBranchLabel5 = this.branchLabelColor, this.gitBranchLabel6 = this.branchLabelColor, this.gitBranchLabel7 = this.branchLabelColor, this.tagLabelColor = this.tagLabelColor || this.primaryTextColor, this.tagLabelBackground = this.tagLabelBackground || this.primaryColor, this.tagLabelBorder = this.tagBorder || this.primaryBorderColor, this.tagLabelFontSize = this.tagLabelFontSize || "10px", this.commitLabelColor = this.commitLabelColor || this.secondaryTextColor, this.commitLabelBackground = this.commitLabelBackground || this.secondaryColor, this.commitLabelFontSize = this.commitLabelFontSize || "10px", this.attributeBackgroundColorOdd = this.attributeBackgroundColorOdd || Gr, this.attributeBackgroundColorEven = this.attributeBackgroundColorEven || Vr;
    }
    calculate(e) {
      if (typeof e != "object") {
        this.updateColors();
        return;
      }
      const i = Object.keys(e);
      i.forEach((r) => {
        this[r] = e[r];
      }), this.updateColors(), i.forEach((r) => {
        this[r] = e[r];
      });
    }
  }
  let K0, te, Zt, Il, Ml, Z0, Sr, Q0, $l, xi, ty;
  K0 = (t) => {
    const e = new V0();
    return e.calculate(t), e;
  };
  te = {
    base: {
      getThemeVariables: W0
    },
    dark: {
      getThemeVariables: H0
    },
    default: {
      getThemeVariables: U0
    },
    forest: {
      getThemeVariables: G0
    },
    neutral: {
      getThemeVariables: K0
    }
  };
  Zt = {
    flowchart: {
      useMaxWidth: true,
      titleTopMargin: 25,
      subGraphTitleMargin: {
        top: 0,
        bottom: 0
      },
      diagramPadding: 8,
      htmlLabels: true,
      nodeSpacing: 50,
      rankSpacing: 50,
      curve: "basis",
      padding: 15,
      defaultRenderer: "dagre-wrapper",
      wrappingWidth: 200
    },
    sequence: {
      useMaxWidth: true,
      hideUnusedParticipants: false,
      activationWidth: 10,
      diagramMarginX: 50,
      diagramMarginY: 10,
      actorMargin: 50,
      width: 150,
      height: 65,
      boxMargin: 10,
      boxTextMargin: 5,
      noteMargin: 10,
      messageMargin: 35,
      messageAlign: "center",
      mirrorActors: true,
      forceMenus: false,
      bottomMarginAdj: 1,
      rightAngles: false,
      showSequenceNumbers: false,
      actorFontSize: 14,
      actorFontFamily: '"Open Sans", sans-serif',
      actorFontWeight: 400,
      noteFontSize: 14,
      noteFontFamily: '"trebuchet ms", verdana, arial, sans-serif',
      noteFontWeight: 400,
      noteAlign: "center",
      messageFontSize: 16,
      messageFontFamily: '"trebuchet ms", verdana, arial, sans-serif',
      messageFontWeight: 400,
      wrap: false,
      wrapPadding: 10,
      labelBoxWidth: 50,
      labelBoxHeight: 20
    },
    gantt: {
      useMaxWidth: true,
      titleTopMargin: 25,
      barHeight: 20,
      barGap: 4,
      topPadding: 50,
      rightPadding: 75,
      leftPadding: 75,
      gridLineStartPadding: 35,
      fontSize: 11,
      sectionFontSize: 11,
      numberSectionStyles: 4,
      axisFormat: "%Y-%m-%d",
      topAxis: false,
      displayMode: "",
      weekday: "sunday"
    },
    journey: {
      useMaxWidth: true,
      diagramMarginX: 50,
      diagramMarginY: 10,
      leftMargin: 150,
      width: 150,
      height: 50,
      boxMargin: 10,
      boxTextMargin: 5,
      noteMargin: 10,
      messageMargin: 35,
      messageAlign: "center",
      bottomMarginAdj: 1,
      rightAngles: false,
      taskFontSize: 14,
      taskFontFamily: '"Open Sans", sans-serif',
      taskMargin: 50,
      activationWidth: 10,
      textPlacement: "fo",
      actorColours: [
        "#8FBC8F",
        "#7CFC00",
        "#00FFFF",
        "#20B2AA",
        "#B0E0E6",
        "#FFFFE0"
      ],
      sectionFills: [
        "#191970",
        "#8B008B",
        "#4B0082",
        "#2F4F4F",
        "#800000",
        "#8B4513",
        "#00008B"
      ],
      sectionColours: [
        "#fff"
      ]
    },
    class: {
      useMaxWidth: true,
      titleTopMargin: 25,
      arrowMarkerAbsolute: false,
      dividerMargin: 10,
      padding: 5,
      textHeight: 10,
      defaultRenderer: "dagre-wrapper",
      htmlLabels: false
    },
    state: {
      useMaxWidth: true,
      titleTopMargin: 25,
      dividerMargin: 10,
      sizeUnit: 5,
      padding: 8,
      textHeight: 10,
      titleShift: -15,
      noteMargin: 10,
      forkWidth: 70,
      forkHeight: 7,
      miniPadding: 2,
      fontSizeFactor: 5.02,
      fontSize: 24,
      labelHeight: 16,
      edgeLengthFactor: "20",
      compositTitleSize: 35,
      radius: 5,
      defaultRenderer: "dagre-wrapper"
    },
    er: {
      useMaxWidth: true,
      titleTopMargin: 25,
      diagramPadding: 20,
      layoutDirection: "TB",
      minEntityWidth: 100,
      minEntityHeight: 75,
      entityPadding: 15,
      stroke: "gray",
      fill: "honeydew",
      fontSize: 12
    },
    pie: {
      useMaxWidth: true,
      textPosition: 0.75
    },
    quadrantChart: {
      useMaxWidth: true,
      chartWidth: 500,
      chartHeight: 500,
      titleFontSize: 20,
      titlePadding: 10,
      quadrantPadding: 5,
      xAxisLabelPadding: 5,
      yAxisLabelPadding: 5,
      xAxisLabelFontSize: 16,
      yAxisLabelFontSize: 16,
      quadrantLabelFontSize: 16,
      quadrantTextTopPadding: 5,
      pointTextPadding: 5,
      pointLabelFontSize: 12,
      pointRadius: 5,
      xAxisPosition: "top",
      yAxisPosition: "left",
      quadrantInternalBorderStrokeWidth: 1,
      quadrantExternalBorderStrokeWidth: 2
    },
    xyChart: {
      useMaxWidth: true,
      width: 700,
      height: 500,
      titleFontSize: 20,
      titlePadding: 10,
      showTitle: true,
      xAxis: {
        $ref: "#/$defs/XYChartAxisConfig",
        showLabel: true,
        labelFontSize: 14,
        labelPadding: 5,
        showTitle: true,
        titleFontSize: 16,
        titlePadding: 5,
        showTick: true,
        tickLength: 5,
        tickWidth: 2,
        showAxisLine: true,
        axisLineWidth: 2
      },
      yAxis: {
        $ref: "#/$defs/XYChartAxisConfig",
        showLabel: true,
        labelFontSize: 14,
        labelPadding: 5,
        showTitle: true,
        titleFontSize: 16,
        titlePadding: 5,
        showTick: true,
        tickLength: 5,
        tickWidth: 2,
        showAxisLine: true,
        axisLineWidth: 2
      },
      chartOrientation: "vertical",
      plotReservedSpacePercent: 50
    },
    requirement: {
      useMaxWidth: true,
      rect_fill: "#f9f9f9",
      text_color: "#333",
      rect_border_size: "0.5px",
      rect_border_color: "#bbb",
      rect_min_width: 200,
      rect_min_height: 200,
      fontSize: 14,
      rect_padding: 10,
      line_height: 20
    },
    mindmap: {
      useMaxWidth: true,
      padding: 10,
      maxNodeWidth: 200
    },
    timeline: {
      useMaxWidth: true,
      diagramMarginX: 50,
      diagramMarginY: 10,
      leftMargin: 150,
      width: 150,
      height: 50,
      boxMargin: 10,
      boxTextMargin: 5,
      noteMargin: 10,
      messageMargin: 35,
      messageAlign: "center",
      bottomMarginAdj: 1,
      rightAngles: false,
      taskFontSize: 14,
      taskFontFamily: '"Open Sans", sans-serif',
      taskMargin: 50,
      activationWidth: 10,
      textPlacement: "fo",
      actorColours: [
        "#8FBC8F",
        "#7CFC00",
        "#00FFFF",
        "#20B2AA",
        "#B0E0E6",
        "#FFFFE0"
      ],
      sectionFills: [
        "#191970",
        "#8B008B",
        "#4B0082",
        "#2F4F4F",
        "#800000",
        "#8B4513",
        "#00008B"
      ],
      sectionColours: [
        "#fff"
      ],
      disableMulticolor: false
    },
    gitGraph: {
      useMaxWidth: true,
      titleTopMargin: 25,
      diagramPadding: 8,
      nodeLabel: {
        width: 75,
        height: 100,
        x: -25,
        y: 0
      },
      mainBranchName: "main",
      mainBranchOrder: 0,
      showCommitLabel: true,
      showBranches: true,
      rotateCommitLabel: true,
      parallelCommits: false,
      arrowMarkerAbsolute: false
    },
    c4: {
      useMaxWidth: true,
      diagramMarginX: 50,
      diagramMarginY: 10,
      c4ShapeMargin: 50,
      c4ShapePadding: 20,
      width: 216,
      height: 60,
      boxMargin: 10,
      c4ShapeInRow: 4,
      nextLinePaddingX: 0,
      c4BoundaryInRow: 2,
      personFontSize: 14,
      personFontFamily: '"Open Sans", sans-serif',
      personFontWeight: "normal",
      external_personFontSize: 14,
      external_personFontFamily: '"Open Sans", sans-serif',
      external_personFontWeight: "normal",
      systemFontSize: 14,
      systemFontFamily: '"Open Sans", sans-serif',
      systemFontWeight: "normal",
      external_systemFontSize: 14,
      external_systemFontFamily: '"Open Sans", sans-serif',
      external_systemFontWeight: "normal",
      system_dbFontSize: 14,
      system_dbFontFamily: '"Open Sans", sans-serif',
      system_dbFontWeight: "normal",
      external_system_dbFontSize: 14,
      external_system_dbFontFamily: '"Open Sans", sans-serif',
      external_system_dbFontWeight: "normal",
      system_queueFontSize: 14,
      system_queueFontFamily: '"Open Sans", sans-serif',
      system_queueFontWeight: "normal",
      external_system_queueFontSize: 14,
      external_system_queueFontFamily: '"Open Sans", sans-serif',
      external_system_queueFontWeight: "normal",
      boundaryFontSize: 14,
      boundaryFontFamily: '"Open Sans", sans-serif',
      boundaryFontWeight: "normal",
      messageFontSize: 12,
      messageFontFamily: '"Open Sans", sans-serif',
      messageFontWeight: "normal",
      containerFontSize: 14,
      containerFontFamily: '"Open Sans", sans-serif',
      containerFontWeight: "normal",
      external_containerFontSize: 14,
      external_containerFontFamily: '"Open Sans", sans-serif',
      external_containerFontWeight: "normal",
      container_dbFontSize: 14,
      container_dbFontFamily: '"Open Sans", sans-serif',
      container_dbFontWeight: "normal",
      external_container_dbFontSize: 14,
      external_container_dbFontFamily: '"Open Sans", sans-serif',
      external_container_dbFontWeight: "normal",
      container_queueFontSize: 14,
      container_queueFontFamily: '"Open Sans", sans-serif',
      container_queueFontWeight: "normal",
      external_container_queueFontSize: 14,
      external_container_queueFontFamily: '"Open Sans", sans-serif',
      external_container_queueFontWeight: "normal",
      componentFontSize: 14,
      componentFontFamily: '"Open Sans", sans-serif',
      componentFontWeight: "normal",
      external_componentFontSize: 14,
      external_componentFontFamily: '"Open Sans", sans-serif',
      external_componentFontWeight: "normal",
      component_dbFontSize: 14,
      component_dbFontFamily: '"Open Sans", sans-serif',
      component_dbFontWeight: "normal",
      external_component_dbFontSize: 14,
      external_component_dbFontFamily: '"Open Sans", sans-serif',
      external_component_dbFontWeight: "normal",
      component_queueFontSize: 14,
      component_queueFontFamily: '"Open Sans", sans-serif',
      component_queueFontWeight: "normal",
      external_component_queueFontSize: 14,
      external_component_queueFontFamily: '"Open Sans", sans-serif',
      external_component_queueFontWeight: "normal",
      wrap: true,
      wrapPadding: 10,
      person_bg_color: "#08427B",
      person_border_color: "#073B6F",
      external_person_bg_color: "#686868",
      external_person_border_color: "#8A8A8A",
      system_bg_color: "#1168BD",
      system_border_color: "#3C7FC0",
      system_db_bg_color: "#1168BD",
      system_db_border_color: "#3C7FC0",
      system_queue_bg_color: "#1168BD",
      system_queue_border_color: "#3C7FC0",
      external_system_bg_color: "#999999",
      external_system_border_color: "#8A8A8A",
      external_system_db_bg_color: "#999999",
      external_system_db_border_color: "#8A8A8A",
      external_system_queue_bg_color: "#999999",
      external_system_queue_border_color: "#8A8A8A",
      container_bg_color: "#438DD5",
      container_border_color: "#3C7FC0",
      container_db_bg_color: "#438DD5",
      container_db_border_color: "#3C7FC0",
      container_queue_bg_color: "#438DD5",
      container_queue_border_color: "#3C7FC0",
      external_container_bg_color: "#B3B3B3",
      external_container_border_color: "#A6A6A6",
      external_container_db_bg_color: "#B3B3B3",
      external_container_db_border_color: "#A6A6A6",
      external_container_queue_bg_color: "#B3B3B3",
      external_container_queue_border_color: "#A6A6A6",
      component_bg_color: "#85BBF0",
      component_border_color: "#78A8D8",
      component_db_bg_color: "#85BBF0",
      component_db_border_color: "#78A8D8",
      component_queue_bg_color: "#85BBF0",
      component_queue_border_color: "#78A8D8",
      external_component_bg_color: "#CCCCCC",
      external_component_border_color: "#BFBFBF",
      external_component_db_bg_color: "#CCCCCC",
      external_component_db_border_color: "#BFBFBF",
      external_component_queue_bg_color: "#CCCCCC",
      external_component_queue_border_color: "#BFBFBF"
    },
    sankey: {
      useMaxWidth: true,
      width: 600,
      height: 400,
      linkColor: "gradient",
      nodeAlignment: "justify",
      showValues: true,
      prefix: "",
      suffix: ""
    },
    block: {
      useMaxWidth: true,
      padding: 8
    },
    theme: "default",
    maxTextSize: 5e4,
    maxEdges: 500,
    darkMode: false,
    fontFamily: '"trebuchet ms", verdana, arial, sans-serif;',
    logLevel: 5,
    securityLevel: "strict",
    startOnLoad: true,
    arrowMarkerAbsolute: false,
    secure: [
      "secure",
      "securityLevel",
      "startOnLoad",
      "maxTextSize",
      "maxEdges"
    ],
    legacyMathML: false,
    deterministicIds: false,
    fontSize: 16
  };
  Il = {
    ...Zt,
    deterministicIDSeed: void 0,
    themeCSS: void 0,
    themeVariables: te.default.getThemeVariables(),
    sequence: {
      ...Zt.sequence,
      messageFont: function() {
        return {
          fontFamily: this.messageFontFamily,
          fontSize: this.messageFontSize,
          fontWeight: this.messageFontWeight
        };
      },
      noteFont: function() {
        return {
          fontFamily: this.noteFontFamily,
          fontSize: this.noteFontSize,
          fontWeight: this.noteFontWeight
        };
      },
      actorFont: function() {
        return {
          fontFamily: this.actorFontFamily,
          fontSize: this.actorFontSize,
          fontWeight: this.actorFontWeight
        };
      }
    },
    gantt: {
      ...Zt.gantt,
      tickInterval: void 0,
      useWidth: void 0
    },
    c4: {
      ...Zt.c4,
      useWidth: void 0,
      personFont: function() {
        return {
          fontFamily: this.personFontFamily,
          fontSize: this.personFontSize,
          fontWeight: this.personFontWeight
        };
      },
      external_personFont: function() {
        return {
          fontFamily: this.external_personFontFamily,
          fontSize: this.external_personFontSize,
          fontWeight: this.external_personFontWeight
        };
      },
      systemFont: function() {
        return {
          fontFamily: this.systemFontFamily,
          fontSize: this.systemFontSize,
          fontWeight: this.systemFontWeight
        };
      },
      external_systemFont: function() {
        return {
          fontFamily: this.external_systemFontFamily,
          fontSize: this.external_systemFontSize,
          fontWeight: this.external_systemFontWeight
        };
      },
      system_dbFont: function() {
        return {
          fontFamily: this.system_dbFontFamily,
          fontSize: this.system_dbFontSize,
          fontWeight: this.system_dbFontWeight
        };
      },
      external_system_dbFont: function() {
        return {
          fontFamily: this.external_system_dbFontFamily,
          fontSize: this.external_system_dbFontSize,
          fontWeight: this.external_system_dbFontWeight
        };
      },
      system_queueFont: function() {
        return {
          fontFamily: this.system_queueFontFamily,
          fontSize: this.system_queueFontSize,
          fontWeight: this.system_queueFontWeight
        };
      },
      external_system_queueFont: function() {
        return {
          fontFamily: this.external_system_queueFontFamily,
          fontSize: this.external_system_queueFontSize,
          fontWeight: this.external_system_queueFontWeight
        };
      },
      containerFont: function() {
        return {
          fontFamily: this.containerFontFamily,
          fontSize: this.containerFontSize,
          fontWeight: this.containerFontWeight
        };
      },
      external_containerFont: function() {
        return {
          fontFamily: this.external_containerFontFamily,
          fontSize: this.external_containerFontSize,
          fontWeight: this.external_containerFontWeight
        };
      },
      container_dbFont: function() {
        return {
          fontFamily: this.container_dbFontFamily,
          fontSize: this.container_dbFontSize,
          fontWeight: this.container_dbFontWeight
        };
      },
      external_container_dbFont: function() {
        return {
          fontFamily: this.external_container_dbFontFamily,
          fontSize: this.external_container_dbFontSize,
          fontWeight: this.external_container_dbFontWeight
        };
      },
      container_queueFont: function() {
        return {
          fontFamily: this.container_queueFontFamily,
          fontSize: this.container_queueFontSize,
          fontWeight: this.container_queueFontWeight
        };
      },
      external_container_queueFont: function() {
        return {
          fontFamily: this.external_container_queueFontFamily,
          fontSize: this.external_container_queueFontSize,
          fontWeight: this.external_container_queueFontWeight
        };
      },
      componentFont: function() {
        return {
          fontFamily: this.componentFontFamily,
          fontSize: this.componentFontSize,
          fontWeight: this.componentFontWeight
        };
      },
      external_componentFont: function() {
        return {
          fontFamily: this.external_componentFontFamily,
          fontSize: this.external_componentFontSize,
          fontWeight: this.external_componentFontWeight
        };
      },
      component_dbFont: function() {
        return {
          fontFamily: this.component_dbFontFamily,
          fontSize: this.component_dbFontSize,
          fontWeight: this.component_dbFontWeight
        };
      },
      external_component_dbFont: function() {
        return {
          fontFamily: this.external_component_dbFontFamily,
          fontSize: this.external_component_dbFontSize,
          fontWeight: this.external_component_dbFontWeight
        };
      },
      component_queueFont: function() {
        return {
          fontFamily: this.component_queueFontFamily,
          fontSize: this.component_queueFontSize,
          fontWeight: this.component_queueFontWeight
        };
      },
      external_component_queueFont: function() {
        return {
          fontFamily: this.external_component_queueFontFamily,
          fontSize: this.external_component_queueFontSize,
          fontWeight: this.external_component_queueFontWeight
        };
      },
      boundaryFont: function() {
        return {
          fontFamily: this.boundaryFontFamily,
          fontSize: this.boundaryFontSize,
          fontWeight: this.boundaryFontWeight
        };
      },
      messageFont: function() {
        return {
          fontFamily: this.messageFontFamily,
          fontSize: this.messageFontSize,
          fontWeight: this.messageFontWeight
        };
      }
    },
    pie: {
      ...Zt.pie,
      useWidth: 984
    },
    xyChart: {
      ...Zt.xyChart,
      useWidth: void 0
    },
    requirement: {
      ...Zt.requirement,
      useWidth: void 0
    },
    gitGraph: {
      ...Zt.gitGraph,
      useMaxWidth: false
    },
    sankey: {
      ...Zt.sankey,
      useMaxWidth: false
    }
  };
  Ml = (t, e = "") => Object.keys(t).reduce((i, r) => Array.isArray(t[r]) ? i : typeof t[r] == "object" && t[r] !== null ? [
    ...i,
    e + r,
    ...Ml(t[r], "")
  ] : [
    ...i,
    e + r
  ], []);
  Z0 = new Set(Ml(Il, ""));
  J0 = Il;
  Sr = (t) => {
    if ($.debug("sanitizeDirective called with", t), !(typeof t != "object" || t == null)) {
      if (Array.isArray(t)) {
        t.forEach((e) => Sr(e));
        return;
      }
      for (const e of Object.keys(t)) {
        if ($.debug("Checking key", e), e.startsWith("__") || e.includes("proto") || e.includes("constr") || !Z0.has(e) || t[e] == null) {
          $.debug("sanitize deleting key: ", e), delete t[e];
          continue;
        }
        if (typeof t[e] == "object") {
          $.debug("sanitizing object", e), Sr(t[e]);
          continue;
        }
        const i = [
          "themeCSS",
          "fontFamily",
          "altFontFamily"
        ];
        for (const r of i) e.includes(r) && ($.debug("sanitizing css option", e), t[e] = Q0(t[e]));
      }
      if (t.themeVariables) for (const e of Object.keys(t.themeVariables)) {
        const i = t.themeVariables[e];
        (i == null ? void 0 : i.match) && !i.match(/^[\d "#%(),.;A-Za-z]+$/) && (t.themeVariables[e] = "");
      }
      $.debug("After sanitization", t);
    }
  };
  Q0 = (t) => {
    let e = 0, i = 0;
    for (const r of t) {
      if (e < i) return "{ /* ERROR: Unbalanced CSS */ }";
      r === "{" ? e++ : r === "}" && i++;
    }
    return e !== i ? "{ /* ERROR: Unbalanced CSS */ }" : t;
  };
  $l = /^-{3}\s*[\n\r](.*?)[\n\r]-{3}\s*[\n\r]+/s;
  xi = /%{2}{\s*(?:(\w+)\s*:|(\w+))\s*(?:(\w+)|((?:(?!}%{2}).|\r?\n)*))?\s*(?:}%{2})?/gi;
  ty = /\s*%%.*\n/gm;
  class Dl extends Error {
    constructor(e) {
      super(e), this.name = "UnknownDiagramError";
    }
  }
  let Ue, Kr, Nl, Rl, ey, Yn, ry, ny, oy, Pl, sy, ay;
  Ue = {};
  Kr = function(t, e) {
    t = t.replace($l, "").replace(xi, "").replace(ty, `
`);
    for (const [i, { detector: r }] of Object.entries(Ue)) if (r(t, e)) return i;
    throw new Dl(`No diagram type detected matching given configuration for text: ${t}`);
  };
  Nl = (...t) => {
    for (const { id: e, detector: i, loader: r } of t) Rl(e, i, r);
  };
  Rl = (t, e, i) => {
    Ue[t] ? $.error(`Detector with key ${t} already exists`) : Ue[t] = {
      detector: e,
      loader: i
    }, $.debug(`Detector with key ${t} added${i ? " with loader" : ""}`);
  };
  ey = (t) => Ue[t].loader;
  Yn = (t, e, { depth: i = 2, clobber: r = false } = {}) => {
    const n = {
      depth: i,
      clobber: r
    };
    return Array.isArray(e) && !Array.isArray(t) ? (e.forEach((s) => Yn(t, s, n)), t) : Array.isArray(e) && Array.isArray(t) ? (e.forEach((s) => {
      t.includes(s) || t.push(s);
    }), t) : t === void 0 || i <= 0 ? t != null && typeof t == "object" && typeof e == "object" ? Object.assign(t, e) : e : (e !== void 0 && typeof t == "object" && typeof e == "object" && Object.keys(e).forEach((s) => {
      typeof e[s] == "object" && (t[s] === void 0 || typeof t[s] == "object") ? (t[s] === void 0 && (t[s] = Array.isArray(e[s]) ? [] : {}), t[s] = Yn(t[s], e[s], {
        depth: i - 1,
        clobber: r
      })) : (r || typeof t[s] != "object" && typeof e[s] != "object") && (t[s] = e[s]);
    }), t);
  };
  lt = Yn;
  iy = "\u200B";
  ry = {
    curveBasis: Mf,
    curveBasisClosed: $f,
    curveBasisOpen: Df,
    curveBumpX: Of,
    curveBumpY: If,
    curveBundle: Nf,
    curveCardinalClosed: Pf,
    curveCardinalOpen: qf,
    curveCardinal: Rf,
    curveCatmullRomClosed: Wf,
    curveCatmullRomOpen: Yf,
    curveCatmullRom: zf,
    curveLinear: Ff,
    curveLinearClosed: Hf,
    curveMonotoneX: jf,
    curveMonotoneY: Uf,
    curveNatural: Xf,
    curveStep: Gf,
    curveStepAfter: Kf,
    curveStepBefore: Vf
  };
  ny = /\s*(?:(\w+)(?=:):|(\w+))\s*(?:(\w+)|((?:(?!}%{2}).|\r?\n)*))?\s*(?:}%{2})?/gi;
  oy = function(t, e) {
    const i = Pl(t, /(?:init\b)|(?:initialize\b)/);
    let r = {};
    if (Array.isArray(i)) {
      const o = i.map((a) => a.args);
      Sr(o), r = lt(r, [
        ...o
      ]);
    } else r = i.args;
    if (!r) return;
    let n = Kr(t, e);
    const s = "config";
    return r[s] !== void 0 && (n === "flowchart-v2" && (n = "flowchart"), r[n] = r[s], delete r[s]), r;
  };
  Pl = function(t, e = null) {
    try {
      const i = new RegExp(`[%]{2}(?![{]${ny.source})(?=[}][%]{2}).*
`, "ig");
      t = t.trim().replace(i, "").replace(/'/gm, '"'), $.debug(`Detecting diagram directive${e !== null ? " type:" + e : ""} based on the text:${t}`);
      let r;
      const n = [];
      for (; (r = xi.exec(t)) !== null; ) if (r.index === xi.lastIndex && xi.lastIndex++, r && !e || e && r[1] && r[1].match(e) || e && r[2] && r[2].match(e)) {
        const s = r[1] ? r[1] : r[2], o = r[3] ? r[3].trim() : r[4] ? JSON.parse(r[4].trim()) : null;
        n.push({
          type: s,
          args: o
        });
      }
      return n.length === 0 ? {
        type: t,
        args: null
      } : n.length === 1 ? n[0] : n;
    } catch (i) {
      return $.error(`ERROR: ${i.message} - Unable to parse directive type: '${e}' based on the text: '${t}'`), {
        type: void 0,
        args: null
      };
    }
  };
  sy = function(t) {
    return t.replace(xi, "");
  };
  ay = function(t, e) {
    for (const [i, r] of e.entries()) if (r.match(t)) return i;
    return -1;
  };
  ly = function(t, e) {
    if (!t) return e;
    const i = `curve${t.charAt(0).toUpperCase() + t.slice(1)}`;
    return ry[i] ?? e;
  };
  function cy(t, e) {
    const i = t.trim();
    if (i) return e.securityLevel !== "loose" ? Kc.sanitizeUrl(i) : i;
  }
  const hy = (t, ...e) => {
    const i = t.split("."), r = i.length - 1, n = i[r];
    let s = window;
    for (let o = 0; o < r; o++) if (s = s[i[o]], !s) {
      $.error(`Function name: ${t} not found in window`);
      return;
    }
    s[n](...e);
  };
  function ql(t, e) {
    return !t || !e ? 0 : Math.sqrt(Math.pow(e.x - t.x, 2) + Math.pow(e.y - t.y, 2));
  }
  function uy(t) {
    let e, i = 0;
    t.forEach((n) => {
      i += ql(n, e), e = n;
    });
    const r = i / 2;
    return po(t, r);
  }
  function dy(t) {
    return t.length === 1 ? t[0] : uy(t);
  }
  const Js = (t, e = 2) => {
    const i = Math.pow(10, e);
    return Math.round(t * i) / i;
  }, po = (t, e) => {
    let i, r = e;
    for (const n of t) {
      if (i) {
        const s = ql(n, i);
        if (s < r) r -= s;
        else {
          const o = r / s;
          if (o <= 0) return i;
          if (o >= 1) return {
            x: n.x,
            y: n.y
          };
          if (o > 0 && o < 1) return {
            x: Js((1 - o) * i.x + o * n.x, 5),
            y: Js((1 - o) * i.y + o * n.y, 5)
          };
        }
      }
      i = n;
    }
    throw new Error("Could not find a suitable point for the given distance");
  }, fy = (t, e, i) => {
    $.info(`our points ${JSON.stringify(e)}`), e[0] !== i && (e = e.reverse());
    const n = po(e, 25), s = t ? 10 : 5, o = Math.atan2(e[0].y - n.y, e[0].x - n.x), a = {
      x: 0,
      y: 0
    };
    return a.x = Math.sin(o) * s + (e[0].x + n.x) / 2, a.y = -Math.cos(o) * s + (e[0].y + n.y) / 2, a;
  };
  function py(t, e, i) {
    const r = structuredClone(i);
    $.info("our points", r), e !== "start_left" && e !== "start_right" && r.reverse();
    const n = 25 + t, s = po(r, n), o = 10 + t * 0.5, a = Math.atan2(r[0].y - s.y, r[0].x - s.x), l = {
      x: 0,
      y: 0
    };
    return e === "start_left" ? (l.x = Math.sin(a + Math.PI) * o + (r[0].x + s.x) / 2, l.y = -Math.cos(a + Math.PI) * o + (r[0].y + s.y) / 2) : e === "end_right" ? (l.x = Math.sin(a - Math.PI) * o + (r[0].x + s.x) / 2 - 5, l.y = -Math.cos(a - Math.PI) * o + (r[0].y + s.y) / 2 - 5) : e === "end_left" ? (l.x = Math.sin(a) * o + (r[0].x + s.x) / 2 - 5, l.y = -Math.cos(a) * o + (r[0].y + s.y) / 2 - 5) : (l.x = Math.sin(a) * o + (r[0].x + s.x) / 2, l.y = -Math.cos(a) * o + (r[0].y + s.y) / 2), l;
  }
  gy = function(t) {
    let e = "", i = "";
    for (const r of t) r !== void 0 && (r.startsWith("color:") || r.startsWith("text-align:") ? i = i + r + ";" : e = e + r + ";");
    return {
      style: e,
      labelStyle: i
    };
  };
  let Qs = 0;
  my = () => (Qs++, "id-" + Math.random().toString(36).substr(2, 12) + "-" + Qs);
  function yy(t) {
    let e = "";
    const i = "0123456789abcdef", r = i.length;
    for (let n = 0; n < t; n++) e += i.charAt(Math.floor(Math.random() * r));
    return e;
  }
  let Cy, xy, Ty;
  _y = (t) => yy(t.length);
  Cy = function() {
    return {
      x: 0,
      y: 0,
      fill: void 0,
      anchor: "start",
      style: "#666",
      width: 100,
      height: 100,
      textMargin: 0,
      rx: 0,
      ry: 0,
      valign: void 0,
      text: ""
    };
  };
  xy = function(t, e) {
    const i = e.text.replace(fo.lineBreakRegex, " "), [, r] = mo(e.fontSize), n = t.append("text");
    n.attr("x", e.x), n.attr("y", e.y), n.style("text-anchor", e.anchor), n.style("font-family", e.fontFamily), n.style("font-size", r), n.style("font-weight", e.fontWeight), n.attr("fill", e.fill), e.class !== void 0 && n.attr("class", e.class);
    const s = n.append("tspan");
    return s.attr("x", e.x + e.textMargin * 2), s.attr("fill", e.fill), s.text(i), n;
  };
  by = Di((t, e, i) => {
    if (!t || (i = Object.assign({
      fontSize: 12,
      fontWeight: 400,
      fontFamily: "Arial",
      joinWith: "<br/>"
    }, i), fo.lineBreakRegex.test(t))) return t;
    const r = t.split(" "), n = [];
    let s = "";
    return r.forEach((o, a) => {
      const l = kr(`${o} `, i), c = kr(s, i);
      if (l > e) {
        const { hyphenatedStrings: u, remainingWord: f } = Ty(o, e, "-", i);
        n.push(s, ...u), s = f;
      } else c + l >= e ? (n.push(s), s = o) : s = [
        s,
        o
      ].filter(Boolean).join(" ");
      a + 1 === r.length && n.push(s);
    }), n.filter((o) => o !== "").join(i.joinWith);
  }, (t, e, i) => `${t}${e}${i.fontSize}${i.fontWeight}${i.fontFamily}${i.joinWith}`);
  Ty = Di((t, e, i = "-", r) => {
    r = Object.assign({
      fontSize: 12,
      fontWeight: 400,
      fontFamily: "Arial",
      margin: 0
    }, r);
    const n = [
      ...t
    ], s = [];
    let o = "";
    return n.forEach((a, l) => {
      const c = `${o}${a}`;
      if (kr(c, r) >= e) {
        const d = l + 1, u = n.length === d, f = `${c}${i}`;
        s.push(u ? c : f), o = "";
      } else o = c;
    }), {
      hyphenatedStrings: s,
      remainingWord: o
    };
  }, (t, e, i = "-", r) => `${t}${e}${i}${r.fontSize}${r.fontWeight}${r.fontFamily}`);
  vy = function(t, e) {
    return go(t, e).height;
  };
  kr = function(t, e) {
    return go(t, e).width;
  };
  const go = Di((t, e) => {
    const { fontSize: i = 12, fontFamily: r = "Arial", fontWeight: n = 400 } = e;
    if (!t) return {
      width: 0,
      height: 0
    };
    const [, s] = mo(i), o = [
      "sans-serif",
      r
    ], a = t.split(fo.lineBreakRegex), l = [], c = kt("body");
    if (!c.remove) return {
      width: 0,
      height: 0,
      lineHeight: 0
    };
    const h = c.append("svg");
    for (const u of o) {
      let f = 0;
      const m = {
        width: 0,
        height: 0,
        lineHeight: 0
      };
      for (const y of a) {
        const T = Cy();
        T.text = y || iy;
        const E = xy(h, T).style("font-size", s).style("font-weight", n).style("font-family", u), C = (E._groups || E)[0][0].getBBox();
        if (C.width === 0 && C.height === 0) throw new Error("svg element not in render tree");
        m.width = Math.round(Math.max(m.width, C.width)), f = Math.round(C.height), m.height += f, m.lineHeight = Math.round(Math.max(m.lineHeight, f));
      }
      l.push(m);
    }
    h.remove();
    const d = isNaN(l[1].height) || isNaN(l[1].width) || isNaN(l[1].lineHeight) || l[0].height > l[1].height && l[0].width > l[1].width && l[0].lineHeight > l[1].lineHeight ? 0 : 1;
    return l[d];
  }, (t, e) => `${t}${e.fontSize}${e.fontWeight}${e.fontFamily}`);
  class Sy {
    constructor(e = false, i) {
      this.count = 0, this.count = i ? i.length : 0, this.next = e ? () => this.count++ : () => Date.now();
    }
  }
  let Ji;
  const ky = function(t) {
    return Ji = Ji || document.createElement("div"), t = escape(t).replace(/%26/g, "&").replace(/%23/g, "#").replace(/%3B/g, ";"), Ji.innerHTML = t, unescape(Ji.textContent);
  };
  function zl(t) {
    return "str" in t;
  }
  let wy;
  wy = (t, e, i, r) => {
    var n;
    if (!r) return;
    const s = (n = t.node()) == null ? void 0 : n.getBBox();
    s && t.append("text").text(r).attr("x", s.x + s.width / 2).attr("y", -i).attr("class", e);
  };
  mo = (t) => {
    if (typeof t == "number") return [
      t,
      t + "px"
    ];
    const e = parseInt(t ?? "", 10);
    return Number.isNaN(e) ? [
      void 0,
      void 0
    ] : t === String(e) ? [
      e,
      t + "px"
    ] : [
      e,
      t
    ];
  };
  Wl = function(t, e) {
    return Km({}, t, e);
  };
  let Ay, ta, Xe;
  bi = {
    assignWithDepth: lt,
    wrapLabel: by,
    calculateTextHeight: vy,
    calculateTextWidth: kr,
    calculateTextDimensions: go,
    cleanAndMerge: Wl,
    detectInit: oy,
    detectDirective: Pl,
    isSubstringInArray: ay,
    interpolateToCurve: ly,
    calcLabelPosition: dy,
    calcCardinalityPosition: fy,
    calcTerminalLabelPosition: py,
    formatUrl: cy,
    getStylesFromArray: gy,
    generateId: my,
    random: _y,
    runFunc: hy,
    entityDecode: ky,
    insertTitle: wy,
    parseFontSize: mo,
    InitIDGenerator: Sy
  };
  Ay = function(t) {
    let e = t;
    return e = e.replace(/style.*:\S*#.*;/g, function(i) {
      return i.substring(0, i.length - 1);
    }), e = e.replace(/classDef.*:\S*#.*;/g, function(i) {
      return i.substring(0, i.length - 1);
    }), e = e.replace(/#\w+;/g, function(i) {
      const r = i.substring(1, i.length - 1);
      return /^\+?\d+$/.test(r) ? "\uFB02\xB0\xB0" + r + "\xB6\xDF" : "\uFB02\xB0" + r + "\xB6\xDF";
    }), e;
  };
  Ey = function(t) {
    return t.replace(/ﬂ°°/g, "&#").replace(/ﬂ°/g, "&").replace(/¶ß/g, ";");
  };
  ta = "10.9.3";
  Xe = Object.freeze(J0);
  let mt = lt({}, Xe), Yl, Ge = [], Ti = lt({}, Xe);
  let Zr, By, Ly, Fy, Hl, jl, Ul, Oy, wr, Iy, ea, My, Xl, Gl, $y, Dy, Ny, Ry, Vl, Py, qy, zy, Wy, Kl, Yy, Hy, jy, Uy, Zl, Xy, Gy, Vy, Ky, Jl, Zy, Jy, Qy, t_, Ql, e_, i_, r_, n_, tc, o_, s_, a_, ec, l_, c_, h_, ic, u_, d_, f_, p_, rc, g_, m_, y_, __, nc, C_, x_, b_, T_, oc, v_, S_, k_, w_, sc, A_, E_, B_, L_, ac, F_, O_, I_, M_, lc, $_, D_, N_, R_, cc, P_, q_, z_, W_, hc, Y_, H_, j_, U_, X_, G_, cr, K_, Z_, J_;
  Zr = (t, e) => {
    let i = lt({}, t), r = {};
    for (const n of e) Ul(n), r = lt(r, n);
    if (i = lt(i, r), r.theme && r.theme in te) {
      const n = lt({}, Yl), s = lt(n.themeVariables || {}, r.themeVariables);
      i.theme && i.theme in te && (i.themeVariables = te[i.theme].getThemeVariables(s));
    }
    return Ti = i, Xl(Ti), Ti;
  };
  By = (t) => (mt = lt({}, Xe), mt = lt(mt, t), t.theme && te[t.theme] && (mt.themeVariables = te[t.theme].getThemeVariables(t.themeVariables)), Zr(mt, Ge), mt);
  Ly = (t) => {
    Yl = lt({}, t);
  };
  Fy = (t) => (mt = lt(mt, t), Zr(mt, Ge), mt);
  Hl = () => lt({}, mt);
  jl = (t) => (Xl(t), lt(Ti, t), Yt());
  Yt = () => lt({}, Ti);
  Ul = (t) => {
    t && ([
      "secure",
      ...mt.secure ?? []
    ].forEach((e) => {
      Object.hasOwn(t, e) && ($.debug(`Denied attempt to modify a secure key ${e}`, t[e]), delete t[e]);
    }), Object.keys(t).forEach((e) => {
      e.startsWith("__") && delete t[e];
    }), Object.keys(t).forEach((e) => {
      typeof t[e] == "string" && (t[e].includes("<") || t[e].includes(">") || t[e].includes("url(data:")) && delete t[e], typeof t[e] == "object" && Ul(t[e]);
    }));
  };
  Oy = (t) => {
    Sr(t), t.fontFamily && (!t.themeVariables || !t.themeVariables.fontFamily) && (t.themeVariables = {
      fontFamily: t.fontFamily
    }), Ge.push(t), Zr(mt, Ge);
  };
  wr = (t = mt) => {
    Ge = [], Zr(t, Ge);
  };
  Iy = {
    LAZY_LOAD_DEPRECATED: "The configuration options lazyLoadedDiagrams and loadExternalDiagramsAtStartup are deprecated. Please use registerExternalDiagrams instead."
  };
  ea = {};
  My = (t) => {
    ea[t] || ($.warn(Iy[t]), ea[t] = true);
  };
  Xl = (t) => {
    t && (t.lazyLoadedDiagrams || t.loadExternalDiagramsAtStartup) && My("LAZY_LOAD_DEPRECATED");
  };
  Gl = "c4";
  $y = (t) => /^\s*C4Context|C4Container|C4Component|C4Dynamic|C4Deployment/.test(t);
  Dy = async () => {
    const { diagram: t } = await J(async () => {
      const { diagram: e } = await import("./c4Diagram-3d4e48cf.Bj0Ynon4.1760966607190.js");
      return {
        diagram: e
      };
    }, __vite__mapDeps([0,1,2,3,4]));
    return {
      id: Gl,
      diagram: t
    };
  };
  Ny = {
    id: Gl,
    detector: $y,
    loader: Dy
  };
  Ry = Ny;
  Vl = "flowchart";
  Py = (t, e) => {
    var i, r;
    return ((i = e == null ? void 0 : e.flowchart) == null ? void 0 : i.defaultRenderer) === "dagre-wrapper" || ((r = e == null ? void 0 : e.flowchart) == null ? void 0 : r.defaultRenderer) === "elk" ? false : /^\s*graph/.test(t);
  };
  qy = async () => {
    const { diagram: t } = await J(async () => {
      const { diagram: e } = await import("./flowDiagram-66a62f08.CKf1T85G.1760966607190.js");
      return {
        diagram: e
      };
    }, __vite__mapDeps([5,6,7,8,9,10,11,12,13,3,4,14,15,16,17,2]));
    return {
      id: Vl,
      diagram: t
    };
  };
  zy = {
    id: Vl,
    detector: Py,
    loader: qy
  };
  Wy = zy;
  Kl = "flowchart-v2";
  Yy = (t, e) => {
    var i, r, n;
    return ((i = e == null ? void 0 : e.flowchart) == null ? void 0 : i.defaultRenderer) === "dagre-d3" || ((r = e == null ? void 0 : e.flowchart) == null ? void 0 : r.defaultRenderer) === "elk" ? false : /^\s*graph/.test(t) && ((n = e == null ? void 0 : e.flowchart) == null ? void 0 : n.defaultRenderer) === "dagre-wrapper" ? true : /^\s*flowchart/.test(t);
  };
  Hy = async () => {
    const { diagram: t } = await J(async () => {
      const { diagram: e } = await import("./flowDiagram-v2-96b9c2cf.B0YHg3xl.1760966607190.js");
      return {
        diagram: e
      };
    }, __vite__mapDeps([18,6,9,7,10,8,11,12,13,3,4,14,15,16,17,2]));
    return {
      id: Kl,
      diagram: t
    };
  };
  jy = {
    id: Kl,
    detector: Yy,
    loader: Hy
  };
  Uy = jy;
  Zl = "er";
  Xy = (t) => /^\s*erDiagram/.test(t);
  Gy = async () => {
    const { diagram: t } = await J(async () => {
      const { diagram: e } = await import("./erDiagram-9861fffd.Cg5sSXS_.1760966607190.js");
      return {
        diagram: e
      };
    }, __vite__mapDeps([19,7,8,2,3,4,14,15,16]));
    return {
      id: Zl,
      diagram: t
    };
  };
  Vy = {
    id: Zl,
    detector: Xy,
    loader: Gy
  };
  Ky = Vy;
  Jl = "gitGraph";
  Zy = (t) => /^\s*gitGraph/.test(t);
  Jy = async () => {
    const { diagram: t } = await J(async () => {
      const { diagram: e } = await import("./gitGraphDiagram-72cf32ee.PZ96C8yd.1760966607190.js");
      return {
        diagram: e
      };
    }, __vite__mapDeps([20,2,3,4]));
    return {
      id: Jl,
      diagram: t
    };
  };
  Qy = {
    id: Jl,
    detector: Zy,
    loader: Jy
  };
  t_ = Qy;
  Ql = "gantt";
  e_ = (t) => /^\s*gantt/.test(t);
  i_ = async () => {
    const { diagram: t } = await J(async () => {
      const { diagram: e } = await import("./ganttDiagram-c361ad54.CLlhPMYP.1760966607190.js");
      return {
        diagram: e
      };
    }, __vite__mapDeps([21,2,3,4,22,23]));
    return {
      id: Ql,
      diagram: t
    };
  };
  r_ = {
    id: Ql,
    detector: e_,
    loader: i_
  };
  n_ = r_;
  tc = "info";
  o_ = (t) => /^\s*info/.test(t);
  s_ = async () => {
    const { diagram: t } = await J(async () => {
      const { diagram: e } = await import("./infoDiagram-f8f76790.DvYlDL1B.1760966607190.js");
      return {
        diagram: e
      };
    }, __vite__mapDeps([24,2,3,4]));
    return {
      id: tc,
      diagram: t
    };
  };
  a_ = {
    id: tc,
    detector: o_,
    loader: s_
  };
  ec = "pie";
  l_ = (t) => /^\s*pie/.test(t);
  c_ = async () => {
    const { diagram: t } = await J(async () => {
      const { diagram: e } = await import("./pieDiagram-8a3498a8.ByAUFwVZ.1760966607190.js");
      return {
        diagram: e
      };
    }, __vite__mapDeps([25,2,3,4,26,16,27,23,15]));
    return {
      id: ec,
      diagram: t
    };
  };
  h_ = {
    id: ec,
    detector: l_,
    loader: c_
  };
  ic = "quadrantChart";
  u_ = (t) => /^\s*quadrantChart/.test(t);
  d_ = async () => {
    const { diagram: t } = await J(async () => {
      const { diagram: e } = await import("./quadrantDiagram-120e2f19.tZaLgMNi.1760966607190.js");
      return {
        diagram: e
      };
    }, __vite__mapDeps([28,2,3,4,22,23]));
    return {
      id: ic,
      diagram: t
    };
  };
  f_ = {
    id: ic,
    detector: u_,
    loader: d_
  };
  p_ = f_;
  rc = "xychart";
  g_ = (t) => /^\s*xychart-beta/.test(t);
  m_ = async () => {
    const { diagram: t } = await J(async () => {
      const { diagram: e } = await import("./xychartDiagram-e933f94c.BmU1jZvQ.1760966607190.js");
      return {
        diagram: e
      };
    }, __vite__mapDeps([29,13,3,4,2,23,27,22,14,15,16]));
    return {
      id: rc,
      diagram: t
    };
  };
  y_ = {
    id: rc,
    detector: g_,
    loader: m_
  };
  __ = y_;
  nc = "requirement";
  C_ = (t) => /^\s*requirement(Diagram)?/.test(t);
  x_ = async () => {
    const { diagram: t } = await J(async () => {
      const { diagram: e } = await import("./requirementDiagram-deff3bca.BPZdU2Db.1760966607190.js");
      return {
        diagram: e
      };
    }, __vite__mapDeps([30,7,8,2,3,4,14,15,16]));
    return {
      id: nc,
      diagram: t
    };
  };
  b_ = {
    id: nc,
    detector: C_,
    loader: x_
  };
  T_ = b_;
  oc = "sequence";
  v_ = (t) => /^\s*sequenceDiagram/.test(t);
  S_ = async () => {
    const { diagram: t } = await J(async () => {
      const { diagram: e } = await import("./sequenceDiagram-704730f1.BjJRhqwm.1760966607190.js");
      return {
        diagram: e
      };
    }, __vite__mapDeps([31,1,2,3,4]));
    return {
      id: oc,
      diagram: t
    };
  };
  k_ = {
    id: oc,
    detector: v_,
    loader: S_
  };
  w_ = k_;
  sc = "class";
  A_ = (t, e) => {
    var i;
    return ((i = e == null ? void 0 : e.class) == null ? void 0 : i.defaultRenderer) === "dagre-wrapper" ? false : /^\s*classDiagram/.test(t);
  };
  E_ = async () => {
    const { diagram: t } = await J(async () => {
      const { diagram: e } = await import("./classDiagram-70f12bd4.CwmWCD5x.1760966607190.js");
      return {
        diagram: e
      };
    }, __vite__mapDeps([32,33,7,8,2,3,4,14,15,16]));
    return {
      id: sc,
      diagram: t
    };
  };
  B_ = {
    id: sc,
    detector: A_,
    loader: E_
  };
  L_ = B_;
  ac = "classDiagram";
  F_ = (t, e) => {
    var i;
    return /^\s*classDiagram/.test(t) && ((i = e == null ? void 0 : e.class) == null ? void 0 : i.defaultRenderer) === "dagre-wrapper" ? true : /^\s*classDiagram-v2/.test(t);
  };
  O_ = async () => {
    const { diagram: t } = await J(async () => {
      const { diagram: e } = await import("./classDiagram-v2-f2320105.CeuigHKD.1760966607190.js");
      return {
        diagram: e
      };
    }, __vite__mapDeps([34,33,7,10,8,11,12,13,3,4,14,15,16,2]));
    return {
      id: ac,
      diagram: t
    };
  };
  I_ = {
    id: ac,
    detector: F_,
    loader: O_
  };
  M_ = I_;
  lc = "state";
  $_ = (t, e) => {
    var i;
    return ((i = e == null ? void 0 : e.state) == null ? void 0 : i.defaultRenderer) === "dagre-wrapper" ? false : /^\s*stateDiagram/.test(t);
  };
  D_ = async () => {
    const { diagram: t } = await J(async () => {
      const { diagram: e } = await import("./stateDiagram-587899a1.Df1_ajb0.1760966607190.js");
      return {
        diagram: e
      };
    }, __vite__mapDeps([35,36,7,8,2,3,4,14,15,16]));
    return {
      id: lc,
      diagram: t
    };
  };
  N_ = {
    id: lc,
    detector: $_,
    loader: D_
  };
  R_ = N_;
  cc = "stateDiagram";
  P_ = (t, e) => {
    var i;
    return !!(/^\s*stateDiagram-v2/.test(t) || /^\s*stateDiagram/.test(t) && ((i = e == null ? void 0 : e.state) == null ? void 0 : i.defaultRenderer) === "dagre-wrapper");
  };
  q_ = async () => {
    const { diagram: t } = await J(async () => {
      const { diagram: e } = await import("./stateDiagram-v2-d93cdb3a.w4s6kNVg.1760966607190.js");
      return {
        diagram: e
      };
    }, __vite__mapDeps([37,36,7,10,8,11,12,13,3,4,14,15,16,2]));
    return {
      id: cc,
      diagram: t
    };
  };
  z_ = {
    id: cc,
    detector: P_,
    loader: q_
  };
  W_ = z_;
  hc = "journey";
  Y_ = (t) => /^\s*journey/.test(t);
  H_ = async () => {
    const { diagram: t } = await J(async () => {
      const { diagram: e } = await import("./journeyDiagram-49397b02.ABDJI9wV.1760966607190.js");
      return {
        diagram: e
      };
    }, __vite__mapDeps([38,1,2,3,4,26,16]));
    return {
      id: hc,
      diagram: t
    };
  };
  j_ = {
    id: hc,
    detector: Y_,
    loader: H_
  };
  U_ = j_;
  X_ = function(t, e) {
    for (let i of e) t.attr(i[0], i[1]);
  };
  G_ = function(t, e, i) {
    let r = /* @__PURE__ */ new Map();
    return i ? (r.set("width", "100%"), r.set("style", `max-width: ${e}px;`)) : (r.set("height", t), r.set("width", e)), r;
  };
  uc = function(t, e, i, r) {
    const n = G_(e, i, r);
    X_(t, n);
  };
  V_ = function(t, e, i, r) {
    const n = e.node().getBBox(), s = n.width, o = n.height;
    $.info(`SVG bounds: ${s}x${o}`, n);
    let a = 0, l = 0;
    $.info(`Graph bounds: ${a}x${l}`, t), a = s + i * 2, l = o + i * 2, $.info(`Calculated bounds: ${a}x${l}`), uc(e, l, a, r);
    const c = `${n.x - i} ${n.y - i} ${n.width + 2 * i} ${n.height + 2 * i}`;
    e.attr("viewBox", c);
  };
  cr = {};
  K_ = (t, e, i) => {
    let r = "";
    return t in cr && cr[t] ? r = cr[t](i) : $.warn(`No theme found for ${t}`), ` & {
    font-family: ${i.fontFamily};
    font-size: ${i.fontSize};
    fill: ${i.textColor}
  }

  /* Classes common for multiple diagrams */

  & .error-icon {
    fill: ${i.errorBkgColor};
  }
  & .error-text {
    fill: ${i.errorTextColor};
    stroke: ${i.errorTextColor};
  }

  & .edge-thickness-normal {
    stroke-width: 2px;
  }
  & .edge-thickness-thick {
    stroke-width: 3.5px
  }
  & .edge-pattern-solid {
    stroke-dasharray: 0;
  }

  & .edge-pattern-dashed{
    stroke-dasharray: 3;
  }
  .edge-pattern-dotted {
    stroke-dasharray: 2;
  }

  & .marker {
    fill: ${i.lineColor};
    stroke: ${i.lineColor};
  }
  & .marker.cross {
    stroke: ${i.lineColor};
  }

  & svg {
    font-family: ${i.fontFamily};
    font-size: ${i.fontSize};
  }

  ${r}

  ${e}
`;
  };
  Z_ = (t, e) => {
    e !== void 0 && (cr[t] = e);
  };
  J_ = K_;
  let yo = "", _o = "", Co = "";
  let xo, aC, lC, cC, uC, Ar, Er, To;
  xo = (t) => Li(t, Yt());
  Q_ = () => {
    yo = "", Co = "", _o = "";
  };
  tC = (t) => {
    yo = xo(t).replace(/^\s+/g, "");
  };
  eC = () => yo;
  iC = (t) => {
    Co = xo(t).replace(/\n\s+/g, `
`);
  };
  rC = () => Co;
  nC = (t) => {
    _o = xo(t);
  };
  oC = () => _o;
  sC = Object.freeze(Object.defineProperty({
    __proto__: null,
    clear: Q_,
    getAccDescription: rC,
    getAccTitle: eC,
    getDiagramTitle: oC,
    setAccDescription: iC,
    setAccTitle: tC,
    setDiagramTitle: nC
  }, Symbol.toStringTag, {
    value: "Module"
  }));
  aC = $;
  lC = uo;
  bo = Yt;
  rT = jl;
  nT = Xe;
  cC = (t) => Li(t, bo());
  hC = V_;
  uC = () => sC;
  Ar = {};
  Er = (t, e, i) => {
    var r;
    if (Ar[t]) throw new Error(`Diagram ${t} already registered.`);
    Ar[t] = e, i && Rl(t, i), Z_(t, e.styles), (r = e.injectUtils) == null || r.call(e, aC, lC, bo, cC, hC, uC(), () => {
    });
  };
  To = (t) => {
    if (t in Ar) return Ar[t];
    throw new dC(t);
  };
  class dC extends Error {
    constructor(e) {
      super(`Diagram ${e} not found.`);
    }
  }
  let pC, dc, gC, mC, yC, fc, _C, CC, xC, bC, pc, TC, vC, SC, kC, gc, wC, AC, EC, BC, mc, LC, FC, OC, IC, yc, MC, $C, DC, NC;
  fC = (t) => {
    var e;
    const { securityLevel: i } = bo();
    let r = kt("body");
    if (i === "sandbox") {
      const o = ((e = kt(`#i${t}`).node()) == null ? void 0 : e.contentDocument) ?? document;
      r = kt(o.body);
    }
    return r.select(`#${t}`);
  };
  pC = (t, e, i) => {
    $.debug(`rendering svg for syntax error
`);
    const r = fC(e), n = r.append("g");
    r.attr("viewBox", "0 0 2412 512"), uc(r, 100, 512, true), n.append("path").attr("class", "error-icon").attr("d", "m411.313,123.313c6.25-6.25 6.25-16.375 0-22.625s-16.375-6.25-22.625,0l-32,32-9.375,9.375-20.688-20.688c-12.484-12.5-32.766-12.5-45.25,0l-16,16c-1.261,1.261-2.304,2.648-3.31,4.051-21.739-8.561-45.324-13.426-70.065-13.426-105.867,0-192,86.133-192,192s86.133,192 192,192 192-86.133 192-192c0-24.741-4.864-48.327-13.426-70.065 1.402-1.007 2.79-2.049 4.051-3.31l16-16c12.5-12.492 12.5-32.758 0-45.25l-20.688-20.688 9.375-9.375 32.001-31.999zm-219.313,100.687c-52.938,0-96,43.063-96,96 0,8.836-7.164,16-16,16s-16-7.164-16-16c0-70.578 57.422-128 128-128 8.836,0 16,7.164 16,16s-7.164,16-16,16z"), n.append("path").attr("class", "error-icon").attr("d", "m459.02,148.98c-6.25-6.25-16.375-6.25-22.625,0s-6.25,16.375 0,22.625l16,16c3.125,3.125 7.219,4.688 11.313,4.688 4.094,0 8.188-1.563 11.313-4.688 6.25-6.25 6.25-16.375 0-22.625l-16.001-16z"), n.append("path").attr("class", "error-icon").attr("d", "m340.395,75.605c3.125,3.125 7.219,4.688 11.313,4.688 4.094,0 8.188-1.563 11.313-4.688 6.25-6.25 6.25-16.375 0-22.625l-16-16c-6.25-6.25-16.375-6.25-22.625,0s-6.25,16.375 0,22.625l15.999,16z"), n.append("path").attr("class", "error-icon").attr("d", "m400,64c8.844,0 16-7.164 16-16v-32c0-8.836-7.156-16-16-16-8.844,0-16,7.164-16,16v32c0,8.836 7.156,16 16,16z"), n.append("path").attr("class", "error-icon").attr("d", "m496,96.586h-32c-8.844,0-16,7.164-16,16 0,8.836 7.156,16 16,16h32c8.844,0 16-7.164 16-16 0-8.836-7.156-16-16-16z"), n.append("path").attr("class", "error-icon").attr("d", "m436.98,75.605c3.125,3.125 7.219,4.688 11.313,4.688 4.094,0 8.188-1.563 11.313-4.688l32-32c6.25-6.25 6.25-16.375 0-22.625s-16.375-6.25-22.625,0l-32,32c-6.251,6.25-6.251,16.375-0.001,22.625z"), n.append("text").attr("class", "error-text").attr("x", 1440).attr("y", 250).attr("font-size", "150px").style("text-anchor", "middle").text("Syntax error in text"), n.append("text").attr("class", "error-text").attr("x", 1250).attr("y", 400).attr("font-size", "100px").style("text-anchor", "middle").text(`mermaid version ${i}`);
  };
  dc = {
    draw: pC
  };
  gC = dc;
  mC = {
    db: {},
    renderer: dc,
    parser: {
      parser: {
        yy: {}
      },
      parse: () => {
      }
    }
  };
  yC = mC;
  fc = "flowchart-elk";
  _C = (t, e) => {
    var i;
    return !!(/^\s*flowchart-elk/.test(t) || /^\s*flowchart|graph/.test(t) && ((i = e == null ? void 0 : e.flowchart) == null ? void 0 : i.defaultRenderer) === "elk");
  };
  CC = async () => {
    const { diagram: t } = await J(async () => {
      const { diagram: e } = await import("./flowchart-elk-definition-4a651766.DAQus9T_.1760966607190.js");
      return {
        diagram: e
      };
    }, __vite__mapDeps([39,6,12,13,3,4,14,15,16,2]));
    return {
      id: fc,
      diagram: t
    };
  };
  xC = {
    id: fc,
    detector: _C,
    loader: CC
  };
  bC = xC;
  pc = "timeline";
  TC = (t) => /^\s*timeline/.test(t);
  vC = async () => {
    const { diagram: t } = await J(async () => {
      const { diagram: e } = await import("./timeline-definition-85554ec2.CW0gQ76E.1760966607190.js");
      return {
        diagram: e
      };
    }, __vite__mapDeps([40,2,3,4,26,16]));
    return {
      id: pc,
      diagram: t
    };
  };
  SC = {
    id: pc,
    detector: TC,
    loader: vC
  };
  kC = SC;
  gc = "mindmap";
  wC = (t) => /^\s*mindmap/.test(t);
  AC = async () => {
    const { diagram: t } = await J(async () => {
      const { diagram: e } = await import("./mindmap-definition-fc14e90a.C-glPoYv.1760966607190.js");
      return {
        diagram: e
      };
    }, __vite__mapDeps([41,3,4,13,2]));
    return {
      id: gc,
      diagram: t
    };
  };
  EC = {
    id: gc,
    detector: wC,
    loader: AC
  };
  BC = EC;
  mc = "sankey";
  LC = (t) => /^\s*sankey-beta/.test(t);
  FC = async () => {
    const { diagram: t } = await J(async () => {
      const { diagram: e } = await import("./sankeyDiagram-04a897e0.DOugCBFg.1760966607190.js");
      return {
        diagram: e
      };
    }, __vite__mapDeps([42,2,3,4,27,23,43]));
    return {
      id: mc,
      diagram: t
    };
  };
  OC = {
    id: mc,
    detector: LC,
    loader: FC
  };
  IC = OC;
  yc = "block";
  MC = (t) => /^\s*block-beta/.test(t);
  $C = async () => {
    const { diagram: t } = await J(async () => {
      const { diagram: e } = await import("./blockDiagram-38ab4fdb.DXBBsgUG.1760966607190.js");
      return {
        diagram: e
      };
    }, __vite__mapDeps([44,11,7,12,13,3,4,14,15,16,2,17,27,23,43]));
    return {
      id: yc,
      diagram: t
    };
  };
  DC = {
    id: yc,
    detector: MC,
    loader: $C
  };
  NC = DC;
  let ia = false;
  const vo = () => {
    ia || (ia = true, Er("error", yC, (t) => t.toLowerCase().trim() === "error"), Er("---", {
      db: {
        clear: () => {
        }
      },
      styles: {},
      renderer: {
        draw: () => {
        }
      },
      parser: {
        parser: {
          yy: {}
        },
        parse: () => {
          throw new Error("Diagrams beginning with --- are not valid. If you were trying to use a YAML front-matter, please ensure that you've correctly opened and closed the YAML front-matter with un-indented `---` blocks");
        }
      },
      init: () => null
    }, (t) => t.toLowerCase().trimStart().startsWith("---")), Nl(Ry, M_, L_, Ky, n_, a_, h_, T_, w_, bC, Uy, Wy, BC, kC, t_, W_, R_, U_, p_, IC, __, NC));
  };
  class _c {
    constructor(e, i = {}) {
      this.text = e, this.metadata = i, this.type = "graph", this.text = Ay(e), this.text += `
`;
      const r = Yt();
      try {
        this.type = Kr(e, r);
      } catch (s) {
        this.type = "error", this.detectError = s;
      }
      const n = To(this.type);
      $.debug("Type " + this.type), this.db = n.db, this.renderer = n.renderer, this.parser = n.parser, this.parser.parser.yy = this.db, this.init = n.init, this.parse();
    }
    parse() {
      var e, i, r, n, s;
      if (this.detectError) throw this.detectError;
      (i = (e = this.db).clear) == null || i.call(e);
      const o = Yt();
      (r = this.init) == null || r.call(this, o), this.metadata.title && ((s = (n = this.db).setDiagramTitle) == null || s.call(n, this.metadata.title)), this.parser.parse(this.text);
    }
    async render(e, i) {
      await this.renderer.draw(this.text, e, i, this);
    }
    getParser() {
      return this.parser;
    }
    getType() {
      return this.type;
    }
  }
  const RC = async (t, e = {}) => {
    const i = Kr(t, Yt());
    try {
      To(i);
    } catch {
      const n = ey(i);
      if (!n) throw new Dl(`Diagram ${i} not found.`);
      const { id: s, diagram: o } = await n();
      Er(s, o);
    }
    return new _c(t, e);
  };
  let ra = [];
  const PC = () => {
    ra.forEach((t) => {
      t();
    }), ra = [];
  }, qC = "graphics-document document";
  function zC(t, e) {
    t.attr("role", qC), e !== "" && t.attr("aria-roledescription", e);
  }
  function WC(t, e, i, r) {
    if (t.insert !== void 0) {
      if (i) {
        const n = `chart-desc-${r}`;
        t.attr("aria-describedby", n), t.insert("desc", ":first-child").attr("id", n).text(i);
      }
      if (e) {
        const n = `chart-title-${r}`;
        t.attr("aria-labelledby", n), t.insert("title", ":first-child").attr("id", n).text(e);
      }
    }
  }
  const YC = (t) => t.replace(/^\s*%%(?!{)[^\n]+\n?/gm, "").trimStart();
  function Cc(t) {
    return typeof t > "u" || t === null;
  }
  function HC(t) {
    return typeof t == "object" && t !== null;
  }
  function jC(t) {
    return Array.isArray(t) ? t : Cc(t) ? [] : [
      t
    ];
  }
  function UC(t, e) {
    var i, r, n, s;
    if (e) for (s = Object.keys(e), i = 0, r = s.length; i < r; i += 1) n = s[i], t[n] = e[n];
    return t;
  }
  function XC(t, e) {
    var i = "", r;
    for (r = 0; r < e; r += 1) i += t;
    return i;
  }
  function GC(t) {
    return t === 0 && Number.NEGATIVE_INFINITY === 1 / t;
  }
  var VC = Cc, KC = HC, ZC = jC, JC = XC, QC = GC, tx = UC, dt = {
    isNothing: VC,
    isObject: KC,
    toArray: ZC,
    repeat: JC,
    isNegativeZero: QC,
    extend: tx
  };
  function xc(t, e) {
    var i = "", r = t.reason || "(unknown reason)";
    return t.mark ? (t.mark.name && (i += 'in "' + t.mark.name + '" '), i += "(" + (t.mark.line + 1) + ":" + (t.mark.column + 1) + ")", !e && t.mark.snippet && (i += `

` + t.mark.snippet), r + " " + i) : r;
  }
  function Fi(t, e) {
    Error.call(this), this.name = "YAMLException", this.reason = t, this.mark = e, this.message = xc(this, false), Error.captureStackTrace ? Error.captureStackTrace(this, this.constructor) : this.stack = new Error().stack || "";
  }
  Fi.prototype = Object.create(Error.prototype);
  Fi.prototype.constructor = Fi;
  Fi.prototype.toString = function(e) {
    return this.name + ": " + xc(this, e);
  };
  var Jt = Fi;
  function Cn(t, e, i, r, n) {
    var s = "", o = "", a = Math.floor(n / 2) - 1;
    return r - e > a && (s = " ... ", e = r - a + s.length), i - r > a && (o = " ...", i = r + a - o.length), {
      str: s + t.slice(e, i).replace(/\t/g, "\u2192") + o,
      pos: r - e + s.length
    };
  }
  function xn(t, e) {
    return dt.repeat(" ", e - t.length) + t;
  }
  function ex(t, e) {
    if (e = Object.create(e || null), !t.buffer) return null;
    e.maxLength || (e.maxLength = 79), typeof e.indent != "number" && (e.indent = 1), typeof e.linesBefore != "number" && (e.linesBefore = 3), typeof e.linesAfter != "number" && (e.linesAfter = 2);
    for (var i = /\r?\n|\r|\0/g, r = [
      0
    ], n = [], s, o = -1; s = i.exec(t.buffer); ) n.push(s.index), r.push(s.index + s[0].length), t.position <= s.index && o < 0 && (o = r.length - 2);
    o < 0 && (o = r.length - 1);
    var a = "", l, c, h = Math.min(t.line + e.linesAfter, n.length).toString().length, d = e.maxLength - (e.indent + h + 3);
    for (l = 1; l <= e.linesBefore && !(o - l < 0); l++) c = Cn(t.buffer, r[o - l], n[o - l], t.position - (r[o] - r[o - l]), d), a = dt.repeat(" ", e.indent) + xn((t.line - l + 1).toString(), h) + " | " + c.str + `
` + a;
    for (c = Cn(t.buffer, r[o], n[o], t.position, d), a += dt.repeat(" ", e.indent) + xn((t.line + 1).toString(), h) + " | " + c.str + `
`, a += dt.repeat("-", e.indent + h + 3 + c.pos) + `^
`, l = 1; l <= e.linesAfter && !(o + l >= n.length); l++) c = Cn(t.buffer, r[o + l], n[o + l], t.position - (r[o] - r[o + l]), d), a += dt.repeat(" ", e.indent) + xn((t.line + l + 1).toString(), h) + " | " + c.str + `
`;
    return a.replace(/\n$/, "");
  }
  var ix = ex, rx = [
    "kind",
    "multi",
    "resolve",
    "construct",
    "instanceOf",
    "predicate",
    "represent",
    "representName",
    "defaultStyle",
    "styleAliases"
  ], nx = [
    "scalar",
    "sequence",
    "mapping"
  ];
  function ox(t) {
    var e = {};
    return t !== null && Object.keys(t).forEach(function(i) {
      t[i].forEach(function(r) {
        e[String(r)] = i;
      });
    }), e;
  }
  function sx(t, e) {
    if (e = e || {}, Object.keys(e).forEach(function(i) {
      if (rx.indexOf(i) === -1) throw new Jt('Unknown option "' + i + '" is met in definition of "' + t + '" YAML type.');
    }), this.options = e, this.tag = t, this.kind = e.kind || null, this.resolve = e.resolve || function() {
      return true;
    }, this.construct = e.construct || function(i) {
      return i;
    }, this.instanceOf = e.instanceOf || null, this.predicate = e.predicate || null, this.represent = e.represent || null, this.representName = e.representName || null, this.defaultStyle = e.defaultStyle || null, this.multi = e.multi || false, this.styleAliases = ox(e.styleAliases || null), nx.indexOf(this.kind) === -1) throw new Jt('Unknown kind "' + this.kind + '" is specified for "' + t + '" YAML type.');
  }
  var ct = sx;
  function na(t, e) {
    var i = [];
    return t[e].forEach(function(r) {
      var n = i.length;
      i.forEach(function(s, o) {
        s.tag === r.tag && s.kind === r.kind && s.multi === r.multi && (n = o);
      }), i[n] = r;
    }), i;
  }
  function ax() {
    var t = {
      scalar: {},
      sequence: {},
      mapping: {},
      fallback: {},
      multi: {
        scalar: [],
        sequence: [],
        mapping: [],
        fallback: []
      }
    }, e, i;
    function r(n) {
      n.multi ? (t.multi[n.kind].push(n), t.multi.fallback.push(n)) : t[n.kind][n.tag] = t.fallback[n.tag] = n;
    }
    for (e = 0, i = arguments.length; e < i; e += 1) arguments[e].forEach(r);
    return t;
  }
  function Hn(t) {
    return this.extend(t);
  }
  Hn.prototype.extend = function(e) {
    var i = [], r = [];
    if (e instanceof ct) r.push(e);
    else if (Array.isArray(e)) r = r.concat(e);
    else if (e && (Array.isArray(e.implicit) || Array.isArray(e.explicit))) e.implicit && (i = i.concat(e.implicit)), e.explicit && (r = r.concat(e.explicit));
    else throw new Jt("Schema.extend argument should be a Type, [ Type ], or a schema definition ({ implicit: [...], explicit: [...] })");
    i.forEach(function(s) {
      if (!(s instanceof ct)) throw new Jt("Specified list of YAML types (or a single Type object) contains a non-Type object.");
      if (s.loadKind && s.loadKind !== "scalar") throw new Jt("There is a non-scalar type in the implicit list of a schema. Implicit resolving of such types is not supported.");
      if (s.multi) throw new Jt("There is a multi type in the implicit list of a schema. Multi tags can only be listed as explicit.");
    }), r.forEach(function(s) {
      if (!(s instanceof ct)) throw new Jt("Specified list of YAML types (or a single Type object) contains a non-Type object.");
    });
    var n = Object.create(Hn.prototype);
    return n.implicit = (this.implicit || []).concat(i), n.explicit = (this.explicit || []).concat(r), n.compiledImplicit = na(n, "implicit"), n.compiledExplicit = na(n, "explicit"), n.compiledTypeMap = ax(n.compiledImplicit, n.compiledExplicit), n;
  };
  var lx = Hn, cx = new ct("tag:yaml.org,2002:str", {
    kind: "scalar",
    construct: function(t) {
      return t !== null ? t : "";
    }
  }), hx = new ct("tag:yaml.org,2002:seq", {
    kind: "sequence",
    construct: function(t) {
      return t !== null ? t : [];
    }
  }), ux = new ct("tag:yaml.org,2002:map", {
    kind: "mapping",
    construct: function(t) {
      return t !== null ? t : {};
    }
  }), dx = new lx({
    explicit: [
      cx,
      hx,
      ux
    ]
  });
  function fx(t) {
    if (t === null) return true;
    var e = t.length;
    return e === 1 && t === "~" || e === 4 && (t === "null" || t === "Null" || t === "NULL");
  }
  function px() {
    return null;
  }
  function gx(t) {
    return t === null;
  }
  var mx = new ct("tag:yaml.org,2002:null", {
    kind: "scalar",
    resolve: fx,
    construct: px,
    predicate: gx,
    represent: {
      canonical: function() {
        return "~";
      },
      lowercase: function() {
        return "null";
      },
      uppercase: function() {
        return "NULL";
      },
      camelcase: function() {
        return "Null";
      },
      empty: function() {
        return "";
      }
    },
    defaultStyle: "lowercase"
  });
  function yx(t) {
    if (t === null) return false;
    var e = t.length;
    return e === 4 && (t === "true" || t === "True" || t === "TRUE") || e === 5 && (t === "false" || t === "False" || t === "FALSE");
  }
  function _x(t) {
    return t === "true" || t === "True" || t === "TRUE";
  }
  function Cx(t) {
    return Object.prototype.toString.call(t) === "[object Boolean]";
  }
  var xx = new ct("tag:yaml.org,2002:bool", {
    kind: "scalar",
    resolve: yx,
    construct: _x,
    predicate: Cx,
    represent: {
      lowercase: function(t) {
        return t ? "true" : "false";
      },
      uppercase: function(t) {
        return t ? "TRUE" : "FALSE";
      },
      camelcase: function(t) {
        return t ? "True" : "False";
      }
    },
    defaultStyle: "lowercase"
  });
  function bx(t) {
    return 48 <= t && t <= 57 || 65 <= t && t <= 70 || 97 <= t && t <= 102;
  }
  function Tx(t) {
    return 48 <= t && t <= 55;
  }
  function vx(t) {
    return 48 <= t && t <= 57;
  }
  function Sx(t) {
    if (t === null) return false;
    var e = t.length, i = 0, r = false, n;
    if (!e) return false;
    if (n = t[i], (n === "-" || n === "+") && (n = t[++i]), n === "0") {
      if (i + 1 === e) return true;
      if (n = t[++i], n === "b") {
        for (i++; i < e; i++) if (n = t[i], n !== "_") {
          if (n !== "0" && n !== "1") return false;
          r = true;
        }
        return r && n !== "_";
      }
      if (n === "x") {
        for (i++; i < e; i++) if (n = t[i], n !== "_") {
          if (!bx(t.charCodeAt(i))) return false;
          r = true;
        }
        return r && n !== "_";
      }
      if (n === "o") {
        for (i++; i < e; i++) if (n = t[i], n !== "_") {
          if (!Tx(t.charCodeAt(i))) return false;
          r = true;
        }
        return r && n !== "_";
      }
    }
    if (n === "_") return false;
    for (; i < e; i++) if (n = t[i], n !== "_") {
      if (!vx(t.charCodeAt(i))) return false;
      r = true;
    }
    return !(!r || n === "_");
  }
  function kx(t) {
    var e = t, i = 1, r;
    if (e.indexOf("_") !== -1 && (e = e.replace(/_/g, "")), r = e[0], (r === "-" || r === "+") && (r === "-" && (i = -1), e = e.slice(1), r = e[0]), e === "0") return 0;
    if (r === "0") {
      if (e[1] === "b") return i * parseInt(e.slice(2), 2);
      if (e[1] === "x") return i * parseInt(e.slice(2), 16);
      if (e[1] === "o") return i * parseInt(e.slice(2), 8);
    }
    return i * parseInt(e, 10);
  }
  function wx(t) {
    return Object.prototype.toString.call(t) === "[object Number]" && t % 1 === 0 && !dt.isNegativeZero(t);
  }
  var Ax = new ct("tag:yaml.org,2002:int", {
    kind: "scalar",
    resolve: Sx,
    construct: kx,
    predicate: wx,
    represent: {
      binary: function(t) {
        return t >= 0 ? "0b" + t.toString(2) : "-0b" + t.toString(2).slice(1);
      },
      octal: function(t) {
        return t >= 0 ? "0o" + t.toString(8) : "-0o" + t.toString(8).slice(1);
      },
      decimal: function(t) {
        return t.toString(10);
      },
      hexadecimal: function(t) {
        return t >= 0 ? "0x" + t.toString(16).toUpperCase() : "-0x" + t.toString(16).toUpperCase().slice(1);
      }
    },
    defaultStyle: "decimal",
    styleAliases: {
      binary: [
        2,
        "bin"
      ],
      octal: [
        8,
        "oct"
      ],
      decimal: [
        10,
        "dec"
      ],
      hexadecimal: [
        16,
        "hex"
      ]
    }
  }), Ex = new RegExp("^(?:[-+]?(?:[0-9][0-9_]*)(?:\\.[0-9_]*)?(?:[eE][-+]?[0-9]+)?|\\.[0-9_]+(?:[eE][-+]?[0-9]+)?|[-+]?\\.(?:inf|Inf|INF)|\\.(?:nan|NaN|NAN))$");
  function Bx(t) {
    return !(t === null || !Ex.test(t) || t[t.length - 1] === "_");
  }
  function Lx(t) {
    var e, i;
    return e = t.replace(/_/g, "").toLowerCase(), i = e[0] === "-" ? -1 : 1, "+-".indexOf(e[0]) >= 0 && (e = e.slice(1)), e === ".inf" ? i === 1 ? Number.POSITIVE_INFINITY : Number.NEGATIVE_INFINITY : e === ".nan" ? NaN : i * parseFloat(e, 10);
  }
  var Fx = /^[-+]?[0-9]+e/;
  function Ox(t, e) {
    var i;
    if (isNaN(t)) switch (e) {
      case "lowercase":
        return ".nan";
      case "uppercase":
        return ".NAN";
      case "camelcase":
        return ".NaN";
    }
    else if (Number.POSITIVE_INFINITY === t) switch (e) {
      case "lowercase":
        return ".inf";
      case "uppercase":
        return ".INF";
      case "camelcase":
        return ".Inf";
    }
    else if (Number.NEGATIVE_INFINITY === t) switch (e) {
      case "lowercase":
        return "-.inf";
      case "uppercase":
        return "-.INF";
      case "camelcase":
        return "-.Inf";
    }
    else if (dt.isNegativeZero(t)) return "-0.0";
    return i = t.toString(10), Fx.test(i) ? i.replace("e", ".e") : i;
  }
  function Ix(t) {
    return Object.prototype.toString.call(t) === "[object Number]" && (t % 1 !== 0 || dt.isNegativeZero(t));
  }
  var Mx = new ct("tag:yaml.org,2002:float", {
    kind: "scalar",
    resolve: Bx,
    construct: Lx,
    predicate: Ix,
    represent: Ox,
    defaultStyle: "lowercase"
  }), bc = dx.extend({
    implicit: [
      mx,
      xx,
      Ax,
      Mx
    ]
  }), $x = bc, Tc = new RegExp("^([0-9][0-9][0-9][0-9])-([0-9][0-9])-([0-9][0-9])$"), vc = new RegExp("^([0-9][0-9][0-9][0-9])-([0-9][0-9]?)-([0-9][0-9]?)(?:[Tt]|[ \\t]+)([0-9][0-9]?):([0-9][0-9]):([0-9][0-9])(?:\\.([0-9]*))?(?:[ \\t]*(Z|([-+])([0-9][0-9]?)(?::([0-9][0-9]))?))?$");
  function Dx(t) {
    return t === null ? false : Tc.exec(t) !== null || vc.exec(t) !== null;
  }
  function Nx(t) {
    var e, i, r, n, s, o, a, l = 0, c = null, h, d, u;
    if (e = Tc.exec(t), e === null && (e = vc.exec(t)), e === null) throw new Error("Date resolve error");
    if (i = +e[1], r = +e[2] - 1, n = +e[3], !e[4]) return new Date(Date.UTC(i, r, n));
    if (s = +e[4], o = +e[5], a = +e[6], e[7]) {
      for (l = e[7].slice(0, 3); l.length < 3; ) l += "0";
      l = +l;
    }
    return e[9] && (h = +e[10], d = +(e[11] || 0), c = (h * 60 + d) * 6e4, e[9] === "-" && (c = -c)), u = new Date(Date.UTC(i, r, n, s, o, a, l)), c && u.setTime(u.getTime() - c), u;
  }
  function Rx(t) {
    return t.toISOString();
  }
  var Px = new ct("tag:yaml.org,2002:timestamp", {
    kind: "scalar",
    resolve: Dx,
    construct: Nx,
    instanceOf: Date,
    represent: Rx
  });
  function qx(t) {
    return t === "<<" || t === null;
  }
  var zx = new ct("tag:yaml.org,2002:merge", {
    kind: "scalar",
    resolve: qx
  }), So = `ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=
\r`;
  function Wx(t) {
    if (t === null) return false;
    var e, i, r = 0, n = t.length, s = So;
    for (i = 0; i < n; i++) if (e = s.indexOf(t.charAt(i)), !(e > 64)) {
      if (e < 0) return false;
      r += 6;
    }
    return r % 8 === 0;
  }
  function Yx(t) {
    var e, i, r = t.replace(/[\r\n=]/g, ""), n = r.length, s = So, o = 0, a = [];
    for (e = 0; e < n; e++) e % 4 === 0 && e && (a.push(o >> 16 & 255), a.push(o >> 8 & 255), a.push(o & 255)), o = o << 6 | s.indexOf(r.charAt(e));
    return i = n % 4 * 6, i === 0 ? (a.push(o >> 16 & 255), a.push(o >> 8 & 255), a.push(o & 255)) : i === 18 ? (a.push(o >> 10 & 255), a.push(o >> 2 & 255)) : i === 12 && a.push(o >> 4 & 255), new Uint8Array(a);
  }
  function Hx(t) {
    var e = "", i = 0, r, n, s = t.length, o = So;
    for (r = 0; r < s; r++) r % 3 === 0 && r && (e += o[i >> 18 & 63], e += o[i >> 12 & 63], e += o[i >> 6 & 63], e += o[i & 63]), i = (i << 8) + t[r];
    return n = s % 3, n === 0 ? (e += o[i >> 18 & 63], e += o[i >> 12 & 63], e += o[i >> 6 & 63], e += o[i & 63]) : n === 2 ? (e += o[i >> 10 & 63], e += o[i >> 4 & 63], e += o[i << 2 & 63], e += o[64]) : n === 1 && (e += o[i >> 2 & 63], e += o[i << 4 & 63], e += o[64], e += o[64]), e;
  }
  function jx(t) {
    return Object.prototype.toString.call(t) === "[object Uint8Array]";
  }
  var Ux = new ct("tag:yaml.org,2002:binary", {
    kind: "scalar",
    resolve: Wx,
    construct: Yx,
    predicate: jx,
    represent: Hx
  }), Xx = Object.prototype.hasOwnProperty, Gx = Object.prototype.toString;
  function Vx(t) {
    if (t === null) return true;
    var e = [], i, r, n, s, o, a = t;
    for (i = 0, r = a.length; i < r; i += 1) {
      if (n = a[i], o = false, Gx.call(n) !== "[object Object]") return false;
      for (s in n) if (Xx.call(n, s)) if (!o) o = true;
      else return false;
      if (!o) return false;
      if (e.indexOf(s) === -1) e.push(s);
      else return false;
    }
    return true;
  }
  function Kx(t) {
    return t !== null ? t : [];
  }
  var Zx = new ct("tag:yaml.org,2002:omap", {
    kind: "sequence",
    resolve: Vx,
    construct: Kx
  }), Jx = Object.prototype.toString;
  function Qx(t) {
    if (t === null) return true;
    var e, i, r, n, s, o = t;
    for (s = new Array(o.length), e = 0, i = o.length; e < i; e += 1) {
      if (r = o[e], Jx.call(r) !== "[object Object]" || (n = Object.keys(r), n.length !== 1)) return false;
      s[e] = [
        n[0],
        r[n[0]]
      ];
    }
    return true;
  }
  function tb(t) {
    if (t === null) return [];
    var e, i, r, n, s, o = t;
    for (s = new Array(o.length), e = 0, i = o.length; e < i; e += 1) r = o[e], n = Object.keys(r), s[e] = [
      n[0],
      r[n[0]]
    ];
    return s;
  }
  var eb = new ct("tag:yaml.org,2002:pairs", {
    kind: "sequence",
    resolve: Qx,
    construct: tb
  }), ib = Object.prototype.hasOwnProperty;
  function rb(t) {
    if (t === null) return true;
    var e, i = t;
    for (e in i) if (ib.call(i, e) && i[e] !== null) return false;
    return true;
  }
  function nb(t) {
    return t !== null ? t : {};
  }
  var ob = new ct("tag:yaml.org,2002:set", {
    kind: "mapping",
    resolve: rb,
    construct: nb
  }), sb = $x.extend({
    implicit: [
      Px,
      zx
    ],
    explicit: [
      Ux,
      Zx,
      eb,
      ob
    ]
  }), de = Object.prototype.hasOwnProperty, Br = 1, Sc = 2, kc = 3, Lr = 4, bn = 1, ab = 2, oa = 3, lb = /[\x00-\x08\x0B\x0C\x0E-\x1F\x7F-\x84\x86-\x9F\uFFFE\uFFFF]|[\uD800-\uDBFF](?![\uDC00-\uDFFF])|(?:[^\uD800-\uDBFF]|^)[\uDC00-\uDFFF]/, cb = /[\x85\u2028\u2029]/, hb = /[,\[\]\{\}]/, wc = /^(?:!|!!|![a-z\-]+!)$/i, Ac = /^(?:!|[^,\[\]\{\}])(?:%[0-9a-f]{2}|[0-9a-z\-#;\/\?:@&=\+\$,_\.!~\*'\(\)\[\]])*$/i;
  function sa(t) {
    return Object.prototype.toString.call(t);
  }
  function zt(t) {
    return t === 10 || t === 13;
  }
  function be(t) {
    return t === 9 || t === 32;
  }
  function _t(t) {
    return t === 9 || t === 32 || t === 10 || t === 13;
  }
  function $e(t) {
    return t === 44 || t === 91 || t === 93 || t === 123 || t === 125;
  }
  function ub(t) {
    var e;
    return 48 <= t && t <= 57 ? t - 48 : (e = t | 32, 97 <= e && e <= 102 ? e - 97 + 10 : -1);
  }
  function db(t) {
    return t === 120 ? 2 : t === 117 ? 4 : t === 85 ? 8 : 0;
  }
  function fb(t) {
    return 48 <= t && t <= 57 ? t - 48 : -1;
  }
  function aa(t) {
    return t === 48 ? "\0" : t === 97 ? "\x07" : t === 98 ? "\b" : t === 116 || t === 9 ? "	" : t === 110 ? `
` : t === 118 ? "\v" : t === 102 ? "\f" : t === 114 ? "\r" : t === 101 ? "\x1B" : t === 32 ? " " : t === 34 ? '"' : t === 47 ? "/" : t === 92 ? "\\" : t === 78 ? "\x85" : t === 95 ? "\xA0" : t === 76 ? "\u2028" : t === 80 ? "\u2029" : "";
  }
  function pb(t) {
    return t <= 65535 ? String.fromCharCode(t) : String.fromCharCode((t - 65536 >> 10) + 55296, (t - 65536 & 1023) + 56320);
  }
  var Ec = new Array(256), Bc = new Array(256);
  for (var Ie = 0; Ie < 256; Ie++) Ec[Ie] = aa(Ie) ? 1 : 0, Bc[Ie] = aa(Ie);
  function gb(t, e) {
    this.input = t, this.filename = e.filename || null, this.schema = e.schema || sb, this.onWarning = e.onWarning || null, this.legacy = e.legacy || false, this.json = e.json || false, this.listener = e.listener || null, this.implicitTypes = this.schema.compiledImplicit, this.typeMap = this.schema.compiledTypeMap, this.length = t.length, this.position = 0, this.line = 0, this.lineStart = 0, this.lineIndent = 0, this.firstTabInLine = -1, this.documents = [];
  }
  function Lc(t, e) {
    var i = {
      name: t.filename,
      buffer: t.input.slice(0, -1),
      position: t.position,
      line: t.line,
      column: t.position - t.lineStart
    };
    return i.snippet = ix(i), new Jt(e, i);
  }
  function I(t, e) {
    throw Lc(t, e);
  }
  function Fr(t, e) {
    t.onWarning && t.onWarning.call(null, Lc(t, e));
  }
  var la = {
    YAML: function(e, i, r) {
      var n, s, o;
      e.version !== null && I(e, "duplication of %YAML directive"), r.length !== 1 && I(e, "YAML directive accepts exactly one argument"), n = /^([0-9]+)\.([0-9]+)$/.exec(r[0]), n === null && I(e, "ill-formed argument of the YAML directive"), s = parseInt(n[1], 10), o = parseInt(n[2], 10), s !== 1 && I(e, "unacceptable YAML version of the document"), e.version = r[0], e.checkLineBreaks = o < 2, o !== 1 && o !== 2 && Fr(e, "unsupported YAML version of the document");
    },
    TAG: function(e, i, r) {
      var n, s;
      r.length !== 2 && I(e, "TAG directive accepts exactly two arguments"), n = r[0], s = r[1], wc.test(n) || I(e, "ill-formed tag handle (first argument) of the TAG directive"), de.call(e.tagMap, n) && I(e, 'there is a previously declared suffix for "' + n + '" tag handle'), Ac.test(s) || I(e, "ill-formed tag prefix (second argument) of the TAG directive");
      try {
        s = decodeURIComponent(s);
      } catch {
        I(e, "tag prefix is malformed: " + s);
      }
      e.tagMap[n] = s;
    }
  };
  function he(t, e, i, r) {
    var n, s, o, a;
    if (e < i) {
      if (a = t.input.slice(e, i), r) for (n = 0, s = a.length; n < s; n += 1) o = a.charCodeAt(n), o === 9 || 32 <= o && o <= 1114111 || I(t, "expected valid JSON character");
      else lb.test(a) && I(t, "the stream contains non-printable characters");
      t.result += a;
    }
  }
  function ca(t, e, i, r) {
    var n, s, o, a;
    for (dt.isObject(i) || I(t, "cannot merge mappings; the provided source object is unacceptable"), n = Object.keys(i), o = 0, a = n.length; o < a; o += 1) s = n[o], de.call(e, s) || (e[s] = i[s], r[s] = true);
  }
  function De(t, e, i, r, n, s, o, a, l) {
    var c, h;
    if (Array.isArray(n)) for (n = Array.prototype.slice.call(n), c = 0, h = n.length; c < h; c += 1) Array.isArray(n[c]) && I(t, "nested arrays are not supported inside keys"), typeof n == "object" && sa(n[c]) === "[object Object]" && (n[c] = "[object Object]");
    if (typeof n == "object" && sa(n) === "[object Object]" && (n = "[object Object]"), n = String(n), e === null && (e = {}), r === "tag:yaml.org,2002:merge") if (Array.isArray(s)) for (c = 0, h = s.length; c < h; c += 1) ca(t, e, s[c], i);
    else ca(t, e, s, i);
    else !t.json && !de.call(i, n) && de.call(e, n) && (t.line = o || t.line, t.lineStart = a || t.lineStart, t.position = l || t.position, I(t, "duplicated mapping key")), n === "__proto__" ? Object.defineProperty(e, n, {
      configurable: true,
      enumerable: true,
      writable: true,
      value: s
    }) : e[n] = s, delete i[n];
    return e;
  }
  function ko(t) {
    var e;
    e = t.input.charCodeAt(t.position), e === 10 ? t.position++ : e === 13 ? (t.position++, t.input.charCodeAt(t.position) === 10 && t.position++) : I(t, "a line break is expected"), t.line += 1, t.lineStart = t.position, t.firstTabInLine = -1;
  }
  function tt(t, e, i) {
    for (var r = 0, n = t.input.charCodeAt(t.position); n !== 0; ) {
      for (; be(n); ) n === 9 && t.firstTabInLine === -1 && (t.firstTabInLine = t.position), n = t.input.charCodeAt(++t.position);
      if (e && n === 35) do
        n = t.input.charCodeAt(++t.position);
      while (n !== 10 && n !== 13 && n !== 0);
      if (zt(n)) for (ko(t), n = t.input.charCodeAt(t.position), r++, t.lineIndent = 0; n === 32; ) t.lineIndent++, n = t.input.charCodeAt(++t.position);
      else break;
    }
    return i !== -1 && r !== 0 && t.lineIndent < i && Fr(t, "deficient indentation"), r;
  }
  function Jr(t) {
    var e = t.position, i;
    return i = t.input.charCodeAt(e), !!((i === 45 || i === 46) && i === t.input.charCodeAt(e + 1) && i === t.input.charCodeAt(e + 2) && (e += 3, i = t.input.charCodeAt(e), i === 0 || _t(i)));
  }
  function wo(t, e) {
    e === 1 ? t.result += " " : e > 1 && (t.result += dt.repeat(`
`, e - 1));
  }
  function mb(t, e, i) {
    var r, n, s, o, a, l, c, h, d = t.kind, u = t.result, f;
    if (f = t.input.charCodeAt(t.position), _t(f) || $e(f) || f === 35 || f === 38 || f === 42 || f === 33 || f === 124 || f === 62 || f === 39 || f === 34 || f === 37 || f === 64 || f === 96 || (f === 63 || f === 45) && (n = t.input.charCodeAt(t.position + 1), _t(n) || i && $e(n))) return false;
    for (t.kind = "scalar", t.result = "", s = o = t.position, a = false; f !== 0; ) {
      if (f === 58) {
        if (n = t.input.charCodeAt(t.position + 1), _t(n) || i && $e(n)) break;
      } else if (f === 35) {
        if (r = t.input.charCodeAt(t.position - 1), _t(r)) break;
      } else {
        if (t.position === t.lineStart && Jr(t) || i && $e(f)) break;
        if (zt(f)) if (l = t.line, c = t.lineStart, h = t.lineIndent, tt(t, false, -1), t.lineIndent >= e) {
          a = true, f = t.input.charCodeAt(t.position);
          continue;
        } else {
          t.position = o, t.line = l, t.lineStart = c, t.lineIndent = h;
          break;
        }
      }
      a && (he(t, s, o, false), wo(t, t.line - l), s = o = t.position, a = false), be(f) || (o = t.position + 1), f = t.input.charCodeAt(++t.position);
    }
    return he(t, s, o, false), t.result ? true : (t.kind = d, t.result = u, false);
  }
  function yb(t, e) {
    var i, r, n;
    if (i = t.input.charCodeAt(t.position), i !== 39) return false;
    for (t.kind = "scalar", t.result = "", t.position++, r = n = t.position; (i = t.input.charCodeAt(t.position)) !== 0; ) if (i === 39) if (he(t, r, t.position, true), i = t.input.charCodeAt(++t.position), i === 39) r = t.position, t.position++, n = t.position;
    else return true;
    else zt(i) ? (he(t, r, n, true), wo(t, tt(t, false, e)), r = n = t.position) : t.position === t.lineStart && Jr(t) ? I(t, "unexpected end of the document within a single quoted scalar") : (t.position++, n = t.position);
    I(t, "unexpected end of the stream within a single quoted scalar");
  }
  function _b(t, e) {
    var i, r, n, s, o, a;
    if (a = t.input.charCodeAt(t.position), a !== 34) return false;
    for (t.kind = "scalar", t.result = "", t.position++, i = r = t.position; (a = t.input.charCodeAt(t.position)) !== 0; ) {
      if (a === 34) return he(t, i, t.position, true), t.position++, true;
      if (a === 92) {
        if (he(t, i, t.position, true), a = t.input.charCodeAt(++t.position), zt(a)) tt(t, false, e);
        else if (a < 256 && Ec[a]) t.result += Bc[a], t.position++;
        else if ((o = db(a)) > 0) {
          for (n = o, s = 0; n > 0; n--) a = t.input.charCodeAt(++t.position), (o = ub(a)) >= 0 ? s = (s << 4) + o : I(t, "expected hexadecimal character");
          t.result += pb(s), t.position++;
        } else I(t, "unknown escape sequence");
        i = r = t.position;
      } else zt(a) ? (he(t, i, r, true), wo(t, tt(t, false, e)), i = r = t.position) : t.position === t.lineStart && Jr(t) ? I(t, "unexpected end of the document within a double quoted scalar") : (t.position++, r = t.position);
    }
    I(t, "unexpected end of the stream within a double quoted scalar");
  }
  function Cb(t, e) {
    var i = true, r, n, s, o = t.tag, a, l = t.anchor, c, h, d, u, f, m = /* @__PURE__ */ Object.create(null), y, T, E, C;
    if (C = t.input.charCodeAt(t.position), C === 91) h = 93, f = false, a = [];
    else if (C === 123) h = 125, f = true, a = {};
    else return false;
    for (t.anchor !== null && (t.anchorMap[t.anchor] = a), C = t.input.charCodeAt(++t.position); C !== 0; ) {
      if (tt(t, true, e), C = t.input.charCodeAt(t.position), C === h) return t.position++, t.tag = o, t.anchor = l, t.kind = f ? "mapping" : "sequence", t.result = a, true;
      i ? C === 44 && I(t, "expected the node content, but found ','") : I(t, "missed comma between flow collection entries"), T = y = E = null, d = u = false, C === 63 && (c = t.input.charCodeAt(t.position + 1), _t(c) && (d = u = true, t.position++, tt(t, true, e))), r = t.line, n = t.lineStart, s = t.position, Ve(t, e, Br, false, true), T = t.tag, y = t.result, tt(t, true, e), C = t.input.charCodeAt(t.position), (u || t.line === r) && C === 58 && (d = true, C = t.input.charCodeAt(++t.position), tt(t, true, e), Ve(t, e, Br, false, true), E = t.result), f ? De(t, a, m, T, y, E, r, n, s) : d ? a.push(De(t, null, m, T, y, E, r, n, s)) : a.push(y), tt(t, true, e), C = t.input.charCodeAt(t.position), C === 44 ? (i = true, C = t.input.charCodeAt(++t.position)) : i = false;
    }
    I(t, "unexpected end of the stream within a flow collection");
  }
  function xb(t, e) {
    var i, r, n = bn, s = false, o = false, a = e, l = 0, c = false, h, d;
    if (d = t.input.charCodeAt(t.position), d === 124) r = false;
    else if (d === 62) r = true;
    else return false;
    for (t.kind = "scalar", t.result = ""; d !== 0; ) if (d = t.input.charCodeAt(++t.position), d === 43 || d === 45) bn === n ? n = d === 43 ? oa : ab : I(t, "repeat of a chomping mode identifier");
    else if ((h = fb(d)) >= 0) h === 0 ? I(t, "bad explicit indentation width of a block scalar; it cannot be less than one") : o ? I(t, "repeat of an indentation width identifier") : (a = e + h - 1, o = true);
    else break;
    if (be(d)) {
      do
        d = t.input.charCodeAt(++t.position);
      while (be(d));
      if (d === 35) do
        d = t.input.charCodeAt(++t.position);
      while (!zt(d) && d !== 0);
    }
    for (; d !== 0; ) {
      for (ko(t), t.lineIndent = 0, d = t.input.charCodeAt(t.position); (!o || t.lineIndent < a) && d === 32; ) t.lineIndent++, d = t.input.charCodeAt(++t.position);
      if (!o && t.lineIndent > a && (a = t.lineIndent), zt(d)) {
        l++;
        continue;
      }
      if (t.lineIndent < a) {
        n === oa ? t.result += dt.repeat(`
`, s ? 1 + l : l) : n === bn && s && (t.result += `
`);
        break;
      }
      for (r ? be(d) ? (c = true, t.result += dt.repeat(`
`, s ? 1 + l : l)) : c ? (c = false, t.result += dt.repeat(`
`, l + 1)) : l === 0 ? s && (t.result += " ") : t.result += dt.repeat(`
`, l) : t.result += dt.repeat(`
`, s ? 1 + l : l), s = true, o = true, l = 0, i = t.position; !zt(d) && d !== 0; ) d = t.input.charCodeAt(++t.position);
      he(t, i, t.position, false);
    }
    return true;
  }
  function ha(t, e) {
    var i, r = t.tag, n = t.anchor, s = [], o, a = false, l;
    if (t.firstTabInLine !== -1) return false;
    for (t.anchor !== null && (t.anchorMap[t.anchor] = s), l = t.input.charCodeAt(t.position); l !== 0 && (t.firstTabInLine !== -1 && (t.position = t.firstTabInLine, I(t, "tab characters must not be used in indentation")), !(l !== 45 || (o = t.input.charCodeAt(t.position + 1), !_t(o)))); ) {
      if (a = true, t.position++, tt(t, true, -1) && t.lineIndent <= e) {
        s.push(null), l = t.input.charCodeAt(t.position);
        continue;
      }
      if (i = t.line, Ve(t, e, kc, false, true), s.push(t.result), tt(t, true, -1), l = t.input.charCodeAt(t.position), (t.line === i || t.lineIndent > e) && l !== 0) I(t, "bad indentation of a sequence entry");
      else if (t.lineIndent < e) break;
    }
    return a ? (t.tag = r, t.anchor = n, t.kind = "sequence", t.result = s, true) : false;
  }
  function bb(t, e, i) {
    var r, n, s, o, a, l, c = t.tag, h = t.anchor, d = {}, u = /* @__PURE__ */ Object.create(null), f = null, m = null, y = null, T = false, E = false, C;
    if (t.firstTabInLine !== -1) return false;
    for (t.anchor !== null && (t.anchorMap[t.anchor] = d), C = t.input.charCodeAt(t.position); C !== 0; ) {
      if (!T && t.firstTabInLine !== -1 && (t.position = t.firstTabInLine, I(t, "tab characters must not be used in indentation")), r = t.input.charCodeAt(t.position + 1), s = t.line, (C === 63 || C === 58) && _t(r)) C === 63 ? (T && (De(t, d, u, f, m, null, o, a, l), f = m = y = null), E = true, T = true, n = true) : T ? (T = false, n = true) : I(t, "incomplete explicit mapping pair; a key node is missed; or followed by a non-tabulated empty line"), t.position += 1, C = r;
      else {
        if (o = t.line, a = t.lineStart, l = t.position, !Ve(t, i, Sc, false, true)) break;
        if (t.line === s) {
          for (C = t.input.charCodeAt(t.position); be(C); ) C = t.input.charCodeAt(++t.position);
          if (C === 58) C = t.input.charCodeAt(++t.position), _t(C) || I(t, "a whitespace character is expected after the key-value separator within a block mapping"), T && (De(t, d, u, f, m, null, o, a, l), f = m = y = null), E = true, T = false, n = false, f = t.tag, m = t.result;
          else if (E) I(t, "can not read an implicit mapping pair; a colon is missed");
          else return t.tag = c, t.anchor = h, true;
        } else if (E) I(t, "can not read a block mapping entry; a multiline key may not be an implicit key");
        else return t.tag = c, t.anchor = h, true;
      }
      if ((t.line === s || t.lineIndent > e) && (T && (o = t.line, a = t.lineStart, l = t.position), Ve(t, e, Lr, true, n) && (T ? m = t.result : y = t.result), T || (De(t, d, u, f, m, y, o, a, l), f = m = y = null), tt(t, true, -1), C = t.input.charCodeAt(t.position)), (t.line === s || t.lineIndent > e) && C !== 0) I(t, "bad indentation of a mapping entry");
      else if (t.lineIndent < e) break;
    }
    return T && De(t, d, u, f, m, null, o, a, l), E && (t.tag = c, t.anchor = h, t.kind = "mapping", t.result = d), E;
  }
  function Tb(t) {
    var e, i = false, r = false, n, s, o;
    if (o = t.input.charCodeAt(t.position), o !== 33) return false;
    if (t.tag !== null && I(t, "duplication of a tag property"), o = t.input.charCodeAt(++t.position), o === 60 ? (i = true, o = t.input.charCodeAt(++t.position)) : o === 33 ? (r = true, n = "!!", o = t.input.charCodeAt(++t.position)) : n = "!", e = t.position, i) {
      do
        o = t.input.charCodeAt(++t.position);
      while (o !== 0 && o !== 62);
      t.position < t.length ? (s = t.input.slice(e, t.position), o = t.input.charCodeAt(++t.position)) : I(t, "unexpected end of the stream within a verbatim tag");
    } else {
      for (; o !== 0 && !_t(o); ) o === 33 && (r ? I(t, "tag suffix cannot contain exclamation marks") : (n = t.input.slice(e - 1, t.position + 1), wc.test(n) || I(t, "named tag handle cannot contain such characters"), r = true, e = t.position + 1)), o = t.input.charCodeAt(++t.position);
      s = t.input.slice(e, t.position), hb.test(s) && I(t, "tag suffix cannot contain flow indicator characters");
    }
    s && !Ac.test(s) && I(t, "tag name cannot contain such characters: " + s);
    try {
      s = decodeURIComponent(s);
    } catch {
      I(t, "tag name is malformed: " + s);
    }
    return i ? t.tag = s : de.call(t.tagMap, n) ? t.tag = t.tagMap[n] + s : n === "!" ? t.tag = "!" + s : n === "!!" ? t.tag = "tag:yaml.org,2002:" + s : I(t, 'undeclared tag handle "' + n + '"'), true;
  }
  function vb(t) {
    var e, i;
    if (i = t.input.charCodeAt(t.position), i !== 38) return false;
    for (t.anchor !== null && I(t, "duplication of an anchor property"), i = t.input.charCodeAt(++t.position), e = t.position; i !== 0 && !_t(i) && !$e(i); ) i = t.input.charCodeAt(++t.position);
    return t.position === e && I(t, "name of an anchor node must contain at least one character"), t.anchor = t.input.slice(e, t.position), true;
  }
  function Sb(t) {
    var e, i, r;
    if (r = t.input.charCodeAt(t.position), r !== 42) return false;
    for (r = t.input.charCodeAt(++t.position), e = t.position; r !== 0 && !_t(r) && !$e(r); ) r = t.input.charCodeAt(++t.position);
    return t.position === e && I(t, "name of an alias node must contain at least one character"), i = t.input.slice(e, t.position), de.call(t.anchorMap, i) || I(t, 'unidentified alias "' + i + '"'), t.result = t.anchorMap[i], tt(t, true, -1), true;
  }
  function Ve(t, e, i, r, n) {
    var s, o, a, l = 1, c = false, h = false, d, u, f, m, y, T;
    if (t.listener !== null && t.listener("open", t), t.tag = null, t.anchor = null, t.kind = null, t.result = null, s = o = a = Lr === i || kc === i, r && tt(t, true, -1) && (c = true, t.lineIndent > e ? l = 1 : t.lineIndent === e ? l = 0 : t.lineIndent < e && (l = -1)), l === 1) for (; Tb(t) || vb(t); ) tt(t, true, -1) ? (c = true, a = s, t.lineIndent > e ? l = 1 : t.lineIndent === e ? l = 0 : t.lineIndent < e && (l = -1)) : a = false;
    if (a && (a = c || n), (l === 1 || Lr === i) && (Br === i || Sc === i ? y = e : y = e + 1, T = t.position - t.lineStart, l === 1 ? a && (ha(t, T) || bb(t, T, y)) || Cb(t, y) ? h = true : (o && xb(t, y) || yb(t, y) || _b(t, y) ? h = true : Sb(t) ? (h = true, (t.tag !== null || t.anchor !== null) && I(t, "alias node should not have any properties")) : mb(t, y, Br === i) && (h = true, t.tag === null && (t.tag = "?")), t.anchor !== null && (t.anchorMap[t.anchor] = t.result)) : l === 0 && (h = a && ha(t, T))), t.tag === null) t.anchor !== null && (t.anchorMap[t.anchor] = t.result);
    else if (t.tag === "?") {
      for (t.result !== null && t.kind !== "scalar" && I(t, 'unacceptable node kind for !<?> tag; it should be "scalar", not "' + t.kind + '"'), d = 0, u = t.implicitTypes.length; d < u; d += 1) if (m = t.implicitTypes[d], m.resolve(t.result)) {
        t.result = m.construct(t.result), t.tag = m.tag, t.anchor !== null && (t.anchorMap[t.anchor] = t.result);
        break;
      }
    } else if (t.tag !== "!") {
      if (de.call(t.typeMap[t.kind || "fallback"], t.tag)) m = t.typeMap[t.kind || "fallback"][t.tag];
      else for (m = null, f = t.typeMap.multi[t.kind || "fallback"], d = 0, u = f.length; d < u; d += 1) if (t.tag.slice(0, f[d].tag.length) === f[d].tag) {
        m = f[d];
        break;
      }
      m || I(t, "unknown tag !<" + t.tag + ">"), t.result !== null && m.kind !== t.kind && I(t, "unacceptable node kind for !<" + t.tag + '> tag; it should be "' + m.kind + '", not "' + t.kind + '"'), m.resolve(t.result, t.tag) ? (t.result = m.construct(t.result, t.tag), t.anchor !== null && (t.anchorMap[t.anchor] = t.result)) : I(t, "cannot resolve a node with !<" + t.tag + "> explicit tag");
    }
    return t.listener !== null && t.listener("close", t), t.tag !== null || t.anchor !== null || h;
  }
  function kb(t) {
    var e = t.position, i, r, n, s = false, o;
    for (t.version = null, t.checkLineBreaks = t.legacy, t.tagMap = /* @__PURE__ */ Object.create(null), t.anchorMap = /* @__PURE__ */ Object.create(null); (o = t.input.charCodeAt(t.position)) !== 0 && (tt(t, true, -1), o = t.input.charCodeAt(t.position), !(t.lineIndent > 0 || o !== 37)); ) {
      for (s = true, o = t.input.charCodeAt(++t.position), i = t.position; o !== 0 && !_t(o); ) o = t.input.charCodeAt(++t.position);
      for (r = t.input.slice(i, t.position), n = [], r.length < 1 && I(t, "directive name must not be less than one character in length"); o !== 0; ) {
        for (; be(o); ) o = t.input.charCodeAt(++t.position);
        if (o === 35) {
          do
            o = t.input.charCodeAt(++t.position);
          while (o !== 0 && !zt(o));
          break;
        }
        if (zt(o)) break;
        for (i = t.position; o !== 0 && !_t(o); ) o = t.input.charCodeAt(++t.position);
        n.push(t.input.slice(i, t.position));
      }
      o !== 0 && ko(t), de.call(la, r) ? la[r](t, r, n) : Fr(t, 'unknown document directive "' + r + '"');
    }
    if (tt(t, true, -1), t.lineIndent === 0 && t.input.charCodeAt(t.position) === 45 && t.input.charCodeAt(t.position + 1) === 45 && t.input.charCodeAt(t.position + 2) === 45 ? (t.position += 3, tt(t, true, -1)) : s && I(t, "directives end mark is expected"), Ve(t, t.lineIndent - 1, Lr, false, true), tt(t, true, -1), t.checkLineBreaks && cb.test(t.input.slice(e, t.position)) && Fr(t, "non-ASCII line breaks are interpreted as content"), t.documents.push(t.result), t.position === t.lineStart && Jr(t)) {
      t.input.charCodeAt(t.position) === 46 && (t.position += 3, tt(t, true, -1));
      return;
    }
    if (t.position < t.length - 1) I(t, "end of the stream or a document separator is expected");
    else return;
  }
  function wb(t, e) {
    t = String(t), e = e || {}, t.length !== 0 && (t.charCodeAt(t.length - 1) !== 10 && t.charCodeAt(t.length - 1) !== 13 && (t += `
`), t.charCodeAt(0) === 65279 && (t = t.slice(1)));
    var i = new gb(t, e), r = t.indexOf("\0");
    for (r !== -1 && (i.position = r, I(i, "null byte is not allowed in input")), i.input += "\0"; i.input.charCodeAt(i.position) === 32; ) i.lineIndent += 1, i.position += 1;
    for (; i.position < i.length - 1; ) kb(i);
    return i.documents;
  }
  function Ab(t, e) {
    var i = wb(t, e);
    if (i.length !== 0) {
      if (i.length === 1) return i[0];
      throw new Jt("expected a single document in the stream, but found more");
    }
  }
  var Eb = Ab, Bb = {
    load: Eb
  }, Lb = bc, Fb = Bb.load;
  function Ob(t) {
    const e = t.match($l);
    if (!e) return {
      text: t,
      metadata: {}
    };
    let i = Fb(e[1], {
      schema: Lb
    }) ?? {};
    i = typeof i == "object" && !Array.isArray(i) ? i : {};
    const r = {};
    return i.displayMode && (r.displayMode = i.displayMode.toString()), i.title && (r.title = i.title.toString()), i.config && (r.config = i.config), {
      text: t.slice(e[0].length),
      metadata: r
    };
  }
  const Ib = (t) => t.replace(/\r\n?/g, `
`).replace(/<(\w+)([^>]*)>/g, (e, i, r) => "<" + i + r.replace(/="([^"]*)"/g, "='$1'") + ">"), Mb = (t) => {
    const { text: e, metadata: i } = Ob(t), { displayMode: r, title: n, config: s = {} } = i;
    return r && (s.gantt || (s.gantt = {}), s.gantt.displayMode = r), {
      title: n,
      config: s,
      text: e
    };
  }, $b = (t) => {
    const e = bi.detectInit(t) ?? {}, i = bi.detectDirective(t, "wrap");
    return Array.isArray(i) ? e.wrap = i.some(({ type: r }) => {
    }) : (i == null ? void 0 : i.type) === "wrap" && (e.wrap = true), {
      text: sy(t),
      directive: e
    };
  };
  function Fc(t) {
    const e = Ib(t), i = Mb(e), r = $b(i.text), n = Wl(i.config, r.directive);
    return t = YC(r.text), {
      code: t,
      title: i.title,
      config: n
    };
  }
  const Db = 5e4, Nb = "graph TB;a[Maximum text size in diagram exceeded];style a fill:#faa", Rb = "sandbox", Pb = "loose", qb = "http://www.w3.org/2000/svg", zb = "http://www.w3.org/1999/xlink", Wb = "http://www.w3.org/1999/xhtml", Yb = "100%", Hb = "100%", jb = "border:0;margin:0;", Ub = "margin:0", Xb = "allow-top-navigation-by-user-activation allow-popups", Gb = 'The "iframe" tag is not supported by your browser.', Vb = [
    "foreignobject"
  ], Kb = [
    "dominant-baseline"
  ];
  function Oc(t) {
    const e = Fc(t);
    return wr(), Oy(e.config ?? {}), e;
  }
  async function Zb(t, e) {
    vo(), t = Oc(t).code;
    try {
      await Ao(t);
    } catch (i) {
      if (e == null ? void 0 : e.suppressErrors) return false;
      throw i;
    }
    return true;
  }
  const ua = (t, e, i = []) => `
.${t} ${e} { ${i.join(" !important; ")} !important; }`, Jb = (t, e = {}) => {
    var i;
    let r = "";
    if (t.themeCSS !== void 0 && (r += `
${t.themeCSS}`), t.fontFamily !== void 0 && (r += `
:root { --mermaid-font-family: ${t.fontFamily}}`), t.altFontFamily !== void 0 && (r += `
:root { --mermaid-alt-font-family: ${t.altFontFamily}}`), !_n(e)) {
      const a = t.htmlLabels || ((i = t.flowchart) == null ? void 0 : i.htmlLabels) ? [
        "> *",
        "span"
      ] : [
        "rect",
        "polygon",
        "ellipse",
        "circle",
        "path"
      ];
      for (const l in e) {
        const c = e[l];
        _n(c.styles) || a.forEach((h) => {
          r += ua(c.id, h, c.styles);
        }), _n(c.textStyles) || (r += ua(c.id, "tspan", c.textStyles));
      }
    }
    return r;
  }, Qb = (t, e, i, r) => {
    const n = Jb(t, i), s = J_(e, n, t.themeVariables);
    return Dn(u0(`${r}{${s}}`), f0);
  }, t1 = (t = "", e, i) => {
    let r = t;
    return !i && !e && (r = r.replace(/marker-end="url\([\d+./:=?A-Za-z-]*?#/g, 'marker-end="url(#')), r = Ey(r), r = r.replace(/<br>/g, "<br/>"), r;
  }, e1 = (t = "", e) => {
    var i, r;
    const n = (r = (i = e == null ? void 0 : e.viewBox) == null ? void 0 : i.baseVal) != null && r.height ? e.viewBox.baseVal.height + "px" : Hb, s = btoa('<body style="' + Ub + '">' + t + "</body>");
    return `<iframe style="width:${Yb};height:${n};${jb}" src="data:text/html;base64,${s}" sandbox="${Xb}">
  ${Gb}
</iframe>`;
  }, da = (t, e, i, r, n) => {
    const s = t.append("div");
    s.attr("id", i), r && s.attr("style", r);
    const o = s.append("svg").attr("id", e).attr("width", "100%").attr("xmlns", qb);
    return n && o.attr("xmlns:xlink", n), o.append("g"), t;
  };
  function fa(t, e) {
    return t.append("iframe").attr("id", e).attr("style", "width: 100%; height: 100%;").attr("sandbox", "");
  }
  const i1 = (t, e, i, r) => {
    var n, s, o;
    (n = t.getElementById(e)) == null || n.remove(), (s = t.getElementById(i)) == null || s.remove(), (o = t.getElementById(r)) == null || o.remove();
  }, r1 = async function(t, e, i) {
    var r, n, s, o, a, l;
    vo();
    const c = Oc(e);
    e = c.code;
    const h = Yt();
    $.debug(h), e.length > ((h == null ? void 0 : h.maxTextSize) ?? Db) && (e = Nb);
    const d = "#" + t, u = "i" + t, f = "#" + u, m = "d" + t, y = "#" + m;
    let T = kt("body");
    const E = h.securityLevel === Rb, C = h.securityLevel === Pb, x = h.fontFamily;
    if (i !== void 0) {
      if (i && (i.innerHTML = ""), E) {
        const M = fa(kt(i), u);
        T = kt(M.nodes()[0].contentDocument.body), T.node().style.margin = 0;
      } else T = kt(i);
      da(T, t, m, `font-family: ${x}`, zb);
    } else {
      if (i1(document, t, m, u), E) {
        const M = fa(kt("body"), u);
        T = kt(M.nodes()[0].contentDocument.body), T.node().style.margin = 0;
      } else T = kt("body");
      da(T, t, m);
    }
    let B, w;
    try {
      B = await Ao(e, {
        title: c.title
      });
    } catch (M) {
      B = new _c("error"), w = M;
    }
    const Y = T.select(y).node(), N = B.type, rt = Y.firstChild, V = rt.firstChild, H = (n = (r = B.renderer).getClasses) == null ? void 0 : n.call(r, e, B), P = Qb(h, N, H, d), Et = document.createElement("style");
    Et.innerHTML = P, rt.insertBefore(Et, V);
    try {
      await B.renderer.draw(e, t, ta, B);
    } catch (M) {
      throw gC.draw(e, t, ta), M;
    }
    const re = T.select(`${y} svg`), R = (o = (s = B.db).getAccTitle) == null ? void 0 : o.call(s), k = (l = (a = B.db).getAccDescription) == null ? void 0 : l.call(a);
    o1(N, re, R, k), T.select(`[id="${t}"]`).selectAll("foreignobject > *").attr("xmlns", Wb);
    let b = T.select(y).node().innerHTML;
    if ($.debug("config.arrowMarkerAbsolute", h.arrowMarkerAbsolute), b = t1(b, E, Ol(h.arrowMarkerAbsolute)), E) {
      const M = T.select(y + " svg").node();
      b = e1(b, M);
    } else C || (b = Ye.sanitize(b, {
      ADD_TAGS: Vb,
      ADD_ATTR: Kb
    }));
    if (PC(), w) throw w;
    const S = kt(E ? f : y).node();
    return S && "remove" in S && S.remove(), {
      svg: b,
      bindFunctions: B.db.bindFunctions
    };
  };
  function n1(t = {}) {
    var e;
    (t == null ? void 0 : t.fontFamily) && !((e = t.themeVariables) != null && e.fontFamily) && (t.themeVariables || (t.themeVariables = {}), t.themeVariables.fontFamily = t.fontFamily), Ly(t), (t == null ? void 0 : t.theme) && t.theme in te ? t.themeVariables = te[t.theme].getThemeVariables(t.themeVariables) : t && (t.themeVariables = te.default.getThemeVariables(t.themeVariables));
    const i = typeof t == "object" ? By(t) : Hl();
    uo(i.logLevel), vo();
  }
  const Ao = (t, e = {}) => {
    const { code: i } = Fc(t);
    return RC(i, e);
  };
  function o1(t, e, i, r) {
    zC(e, t), WC(e, i, r, e.attr("id"));
  }
  const Se = Object.freeze({
    render: r1,
    parse: Zb,
    getDiagramFromText: Ao,
    initialize: n1,
    getConfig: Yt,
    setConfig: jl,
    getSiteConfig: Hl,
    updateSiteConfig: Fy,
    reset: () => {
      wr();
    },
    globalReset: () => {
      wr(Xe);
    },
    defaultConfig: Xe
  });
  uo(Yt().logLevel);
  wr(Yt());
  const s1 = async () => {
    $.debug("Loading registered diagrams");
    const e = (await Promise.allSettled(Object.entries(Ue).map(async ([i, { detector: r, loader: n }]) => {
      if (n) try {
        To(i);
      } catch {
        try {
          const { diagram: o, id: a } = await n();
          Er(a, o, r);
        } catch (o) {
          throw $.error(`Failed to load external diagram with key ${i}. Removing from detectors.`), delete Ue[i], o;
        }
      }
    }))).filter((i) => i.status === "rejected");
    if (e.length > 0) {
      $.error(`Failed to load ${e.length} external diagrams`);
      for (const i of e) $.error(i);
      throw new Error(`Failed to load ${e.length} external diagrams`);
    }
  }, a1 = (t, e, i) => {
    $.warn(t), zl(t) ? (i && i(t.str, t.hash), e.push({
      ...t,
      message: t.str,
      error: t
    })) : (i && i(t), t instanceof Error && e.push({
      str: t.message,
      message: t.message,
      hash: t.name,
      error: t
    }));
  }, Ic = async function(t = {
    querySelector: ".mermaid"
  }) {
    try {
      await l1(t);
    } catch (e) {
      if (zl(e) && $.error(e.str), Ct.parseError && Ct.parseError(e), !t.suppressErrors) throw $.error("Use the suppressErrors option to suppress these errors"), e;
    }
  }, l1 = async function({ postRenderCallback: t, querySelector: e, nodes: i } = {
    querySelector: ".mermaid"
  }) {
    const r = Se.getConfig();
    $.debug(`${t ? "" : "No "}Callback function found`);
    let n;
    if (i) n = i;
    else if (e) n = document.querySelectorAll(e);
    else throw new Error("Nodes and querySelector are both undefined");
    $.debug(`Found ${n.length} diagrams`), (r == null ? void 0 : r.startOnLoad) !== void 0 && ($.debug("Start On Load: " + (r == null ? void 0 : r.startOnLoad)), Se.updateSiteConfig({
      startOnLoad: r == null ? void 0 : r.startOnLoad
    }));
    const s = new bi.InitIDGenerator(r.deterministicIds, r.deterministicIDSeed);
    let o;
    const a = [];
    for (const l of Array.from(n)) {
      $.info("Rendering diagram: " + l.id);
      if (l.getAttribute("data-processed")) continue;
      l.setAttribute("data-processed", "true");
      const c = `mermaid-${s.next()}`;
      o = l.innerHTML, o = uh(bi.entityDecode(o)).trim().replace(/<br\s*\/?>/gi, "<br/>");
      const h = bi.detectInit(o);
      h && $.debug("Detected early reinit: ", h);
      try {
        const { svg: d, bindFunctions: u } = await Nc(c, o, l);
        l.innerHTML = d, t && await t(c), u && u(l);
      } catch (d) {
        a1(d, a, Ct.parseError);
      }
    }
    if (a.length > 0) throw a[0];
  }, Mc = function(t) {
    Se.initialize(t);
  }, c1 = async function(t, e, i) {
    $.warn("mermaid.init is deprecated. Please use run instead."), t && Mc(t);
    const r = {
      postRenderCallback: i,
      querySelector: ".mermaid"
    };
    typeof e == "string" ? r.querySelector = e : e && (e instanceof HTMLElement ? r.nodes = [
      e
    ] : r.nodes = e), await Ic(r);
  }, h1 = async (t, { lazyLoad: e = true } = {}) => {
    Nl(...t), e === false && await s1();
  }, $c = function() {
    if (Ct.startOnLoad) {
      const { startOnLoad: t } = Se.getConfig();
      t && Ct.run().catch((e) => $.error("Mermaid failed to initialize", e));
    }
  };
  if (typeof document < "u") {
    window.addEventListener("load", $c, false);
  }
  const u1 = function(t) {
    Ct.parseError = t;
  }, Or = [];
  let Tn = false;
  let Dc, d1, Nc, Ct, Qe, qe, f1, p1, Rc, g1, m1, y1, Eo, _1, C1, Pc, jn, qc, Ht, Oi, pa, Rt, x1, b1, ga, T1, v1, S1, k1, w1, A1, E1, Qi, ma, se, B1, ya, L1, F1, O1, I1, M1, $1, D1, N1;
  Dc = async () => {
    if (!Tn) {
      for (Tn = true; Or.length > 0; ) {
        const t = Or.shift();
        if (t) try {
          await t();
        } catch (e) {
          $.error("Error executing queue", e);
        }
      }
      Tn = false;
    }
  };
  d1 = async (t, e) => new Promise((i, r) => {
    const n = () => new Promise((s, o) => {
      Se.parse(t, e).then((a) => {
        s(a), i(a);
      }, (a) => {
        var l;
        $.error("Error parsing", a), (l = Ct.parseError) == null || l.call(Ct, a), o(a), r(a);
      });
    });
    Or.push(n), Dc().catch(r);
  });
  Nc = (t, e, i) => new Promise((r, n) => {
    const s = () => new Promise((o, a) => {
      Se.render(t, e, i).then((l) => {
        o(l), r(l);
      }, (l) => {
        var c;
        $.error("Error parsing", l), (c = Ct.parseError) == null || c.call(Ct, l), a(l), n(l);
      });
    });
    Or.push(s), Dc().catch(n);
  });
  Ct = {
    startOnLoad: true,
    mermaidAPI: Se,
    parse: d1,
    render: Nc,
    init: c1,
    run: Ic,
    registerExternalDiagrams: h1,
    initialize: Mc,
    parseError: void 0,
    contentLoaded: $c,
    setParseErrorHandler: u1,
    detectType: Kr
  };
  Qe = (t) => {
    t = p1(t);
    const e = t.replace(/#(\d+);/g, "&#$1;").replace(/#([a-z]+);/g, "&$1;"), i = document.createElement("textarea");
    return i.innerHTML = e, i.value;
  };
  qe = (t) => {
    var _a2;
    const i = (_a2 = t.getAttribute("transform")) == null ? void 0 : _a2.match(/translate\(([ \d.-]+),\s*([\d.-]+)\)/);
    let r = 0, n = 0;
    return i && (r = Number(i[1]), n = Number(i[2])), {
      transformX: r,
      transformY: n
    };
  };
  f1 = (t) => {
    let e = t;
    return e = e.replace(/style.*:\S*#.*;/g, (i) => i.substring(0, i.length - 1)), e = e.replace(/classDef.*:\S*#.*;/g, (i) => i.substring(0, i.length - 1)), e = e.replace(/#\w+;/g, (i) => {
      const r = i.substring(1, i.length - 1);
      return /^\+?\d+$/.test(r) ? `\uFB02\xB0\xB0${r}\xB6\xDF` : `\uFB02\xB0${r}\xB6\xDF`;
    }), e;
  };
  p1 = function(t) {
    return t.replace(/ﬂ°°/g, "#").replace(/ﬂ°/g, "&").replace(/¶ß/g, ";");
  };
  Rc = (t, e = {
    x: 0,
    y: 0
  }) => {
    if (t.tagName.toLowerCase() !== "path") throw new Error(`Invalid input: Expected an HTMLElement of tag "path", got ${t.tagName}`);
    const i = t.getAttribute("d");
    if (!i) throw new Error('Path element does not contain a "d" attribute');
    const r = i.split(/(?=[LM])/), n = r[0].substring(1).split(",").map((a) => parseFloat(a)), s = r[r.length - 1].substring(1).split(",").map((a) => parseFloat(a)), o = r.map((a) => {
      const l = a.substring(1).split(",").map((c) => parseFloat(c));
      return {
        x: l[0],
        y: l[1]
      };
    }).filter((a, l, c) => {
      if (l === 0 || l === c.length - 1) return true;
      if (a.x === c[l - 1].x && a.y === c[l - 1].y) return false;
      if (l === c.length - 2 && (c[l - 1].x === a.x || c[l - 1].y === a.y)) {
        const h = c[c.length - 1];
        return Math.hypot(h.x - a.x, h.y - a.y) > 20;
      }
      return a.x !== c[l - 1].x || a.y !== c[l - 1].y;
    }).map((a) => ({
      x: a.x + e.x,
      y: a.y + e.y
    }));
    return {
      startX: n[0] + e.x,
      startY: n[1] + e.y,
      endX: s[0] + e.x,
      endY: s[1] + e.y,
      reflectionPoints: o
    };
  };
  g1 = (t, e) => {
    const i = t.nodes.map((a) => a.startsWith("flowchart-") ? a.split("-")[1] : a), r = e.querySelector(`[id='${t.id}']`);
    if (!r) throw new Error("SubGraph element not found");
    const n = Eo(r, e), s = r.getBBox(), o = {
      width: s.width,
      height: s.height
    };
    return t.classes = void 0, t.dir = void 0, {
      ...t,
      nodeIds: i,
      ...n,
      ...o,
      text: Qe(t.title)
    };
  };
  m1 = (t, e) => {
    var _a2, _b2, _c2;
    const i = e.querySelector(`[id*="flowchart-${t.id}-"]`);
    if (!i) return;
    let r;
    ((_a2 = i.parentElement) == null ? void 0 : _a2.tagName.toLowerCase()) === "a" && (r = i.parentElement.getAttribute("xlink:href"));
    const n = Eo(r ? i.parentElement : i, e), s = i.getBBox(), o = {
      width: s.width,
      height: s.height
    }, a = (_b2 = i.querySelector(".label-container")) == null ? void 0 : _b2.getAttribute("style"), l = (_c2 = i.querySelector(".label")) == null ? void 0 : _c2.getAttribute("style"), c = {};
    a == null ? void 0 : a.split(";").forEach((d) => {
      if (!d) return;
      const u = d.split(":")[0].trim(), f = d.split(":")[1].trim();
      c[u] = f;
    });
    const h = {};
    return l == null ? void 0 : l.split(";").forEach((d) => {
      if (!d) return;
      const u = d.split(":")[0].trim(), f = d.split(":")[1].trim();
      h[u] = f;
    }), {
      id: t.id,
      labelType: t.labelType,
      text: Qe(t.text),
      type: t.type,
      link: r || void 0,
      ...n,
      ...o,
      containerStyle: c,
      labelStyle: h
    };
  };
  y1 = (t, e, i) => {
    const r = i.querySelector(`[id*="L-${t.start}-${t.end}-${e}"]`);
    if (!r) throw new Error("Edge element not found");
    const n = Eo(r, i), s = Rc(r, n);
    return t.length = void 0, {
      ...t,
      ...s,
      text: Qe(t.text)
    };
  };
  Eo = (t, e) => {
    var _a2;
    if (!t) throw new Error("Element not found");
    let i = (_a2 = t.parentElement) == null ? void 0 : _a2.parentElement;
    const r = t.childNodes[0];
    let n = {
      x: 0,
      y: 0
    };
    if (r) {
      const { transformX: l, transformY: c } = qe(r), h = r.getBBox();
      n = {
        x: Number(r.getAttribute("x")) || l + h.x || 0,
        y: Number(r.getAttribute("y")) || c + h.y || 0
      };
    }
    const { transformX: s, transformY: o } = qe(t), a = {
      x: s + n.x,
      y: o + n.y
    };
    for (; i && i.id !== e.id; ) {
      if (i.classList.value === "root" && i.hasAttribute("transform")) {
        const { transformX: l, transformY: c } = qe(i);
        a.x += l, a.y += c;
      }
      i = i.parentElement;
    }
    return a;
  };
  _1 = (t, e) => {
    t.parse();
    const i = t.parser.yy, r = i.getVertices();
    Object.keys(r).forEach((a) => {
      r[a] = m1(r[a], e);
    });
    const n = /* @__PURE__ */ new Map(), s = i.getEdges().filter((a) => e.querySelector(`[id*="L-${a.start}-${a.end}"]`)).map((a) => {
      const l = `${a.start}-${a.end}`, c = n.get(l) || 0;
      return n.set(l, c + 1), y1(a, c, e);
    });
    return {
      type: "flowchart",
      subGraphs: i.getSubGraphs().map((a) => g1(a, e)),
      vertices: r,
      edges: s
    };
  };
  C1 = (t, e) => {
    const i = {};
    (e == null ? void 0 : e.label) && (i.label = {
      text: Qe(e.label),
      fontSize: 16
    });
    const r = t.tagName;
    if (r === "line") i.startX = Number(t.getAttribute("x1")), i.startY = Number(t.getAttribute("y1")), i.endX = Number(t.getAttribute("x2")), i.endY = Number(t.getAttribute("y2"));
    else if (r === "path") {
      const n = t.getAttribute("d");
      if (!n) throw new Error('Path element does not contain a "d" attribute');
      const s = n.split(/(?=[LC])/), o = s[0].substring(1).split(",").map((c) => parseFloat(c)), a = [];
      s.forEach((c) => {
        const h = c.substring(1).trim().split(" ").map((d) => {
          const [u, f] = d.split(",");
          return [
            parseFloat(u) - o[0],
            parseFloat(f) - o[1]
          ];
        });
        a.push(...h);
      });
      const l = a[a.length - 1];
      i.startX = o[0], i.startY = o[1], i.endX = l[0], i.endY = l[1], i.points = a;
    }
    return (e == null ? void 0 : e.label) && (i.startY = i.startY - 10, i.endY = i.endY - 10), i.strokeColor = t.getAttribute("stroke"), i.strokeWidth = Number(t.getAttribute("stroke-width")), i.type = "arrow", i.strokeStyle = (e == null ? void 0 : e.strokeStyle) || "solid", i.startArrowhead = (e == null ? void 0 : e.startArrowhead) || null, i.endArrowhead = (e == null ? void 0 : e.endArrowhead) || null, i;
  };
  Pc = (t, e, i, r, n) => {
    const s = {};
    return s.type = "arrow", s.startX = t, s.startY = e, s.endX = i, s.endY = r, Object.assign(s, {
      ...n
    }), s;
  };
  jn = (t, e, i, r) => ({
    type: "text",
    x: t,
    y: e,
    text: i,
    width: (r == null ? void 0 : r.width) || 20,
    height: (r == null ? void 0 : r.height) || 20,
    fontSize: (r == null ? void 0 : r.fontSize) || Ir,
    id: r == null ? void 0 : r.id,
    groupId: r == null ? void 0 : r.groupId,
    metadata: r == null ? void 0 : r.metadata
  });
  qc = (t, e, i) => {
    const r = {}, n = Number(t.getAttribute("x")), s = Number(t.getAttribute("y"));
    r.type = "text", r.text = Qe(e), (i == null ? void 0 : i.id) && (r.id = i.id), (i == null ? void 0 : i.groupId) && (r.groupId = i.groupId);
    const o = t.getBBox();
    r.width = o.width, r.height = o.height, r.x = n - o.width / 2, r.y = s;
    const a = parseInt(getComputedStyle(t).fontSize);
    return r.fontSize = a, r;
  };
  Ht = (t, e, i = {}) => {
    const r = {};
    r.type = e;
    const { label: n, subtype: s, id: o, groupId: a } = i;
    r.id = o, a && (r.groupId = a), n && (r.label = {
      text: Qe(n.text),
      fontSize: 16,
      verticalAlign: n == null ? void 0 : n.verticalAlign
    });
    const l = t.getBBox();
    switch (r.x = l.x, r.y = l.y, r.width = l.width, r.height = l.height, r.subtype = s, s) {
      case "highlight":
        const c = t.getAttribute("fill");
        c && (r.bgColor = c);
        break;
      case "note":
        r.strokeStyle = "dashed";
        break;
    }
    return r;
  };
  Oi = (t, e, i, r, n, s) => {
    const o = {};
    return o.startX = e, o.startY = i, o.endX = r, (s == null ? void 0 : s.groupId) && (o.groupId = s.groupId), (s == null ? void 0 : s.id) && (o.id = s.id), o.endY = n, o.strokeColor = t.getAttribute("stroke"), o.strokeWidth = Number(t.getAttribute("stroke-width")), o.type = "line", o;
  };
  pa = {
    0: "SOLID",
    1: "DOTTED",
    3: "SOLID_CROSS",
    4: "DOTTED_CROSS",
    5: "SOLID_OPEN",
    6: "DOTTED_OPEN",
    24: "SOLID_POINT",
    25: "DOTTED_POINT"
  };
  Rt = {
    SOLID: 0,
    DOTTED: 1,
    NOTE: 2,
    SOLID_CROSS: 3,
    DOTTED_CROSS: 4,
    SOLID_OPEN: 5,
    DOTTED_OPEN: 6,
    SOLID_POINT: 24,
    DOTTED_POINT: 25,
    CRITICAL_START: 27
  };
  x1 = (t) => {
    let e;
    switch (t) {
      case Rt.SOLID:
      case Rt.SOLID_CROSS:
      case Rt.SOLID_OPEN:
      case Rt.SOLID_POINT:
        e = "solid";
        break;
      case Rt.DOTTED:
      case Rt.DOTTED_CROSS:
      case Rt.DOTTED_OPEN:
      case Rt.DOTTED_POINT:
        e = "dotted";
        break;
      default:
        e = "solid";
        break;
    }
    return e;
  };
  b1 = (t, e) => {
    var _a2, _b2;
    if (!!((_a2 = t.nextElementSibling) == null ? void 0 : _a2.classList.contains("sequenceNumber"))) {
      const r = (_b2 = t.nextElementSibling) == null ? void 0 : _b2.textContent;
      if (!r) throw new Error("sequence number not present");
      const n = 30, s = n / 2, a = {
        type: "rectangle",
        x: e.startX - 10,
        y: e.startY - s,
        label: {
          text: r,
          fontSize: 14
        },
        bgColor: "#e9ecef",
        height: n,
        subtype: "sequence"
      };
      Object.assign(e, {
        sequenceNumber: a
      });
    }
  };
  ga = (t, e, i) => {
    if (!t) throw "root node not found";
    const r = Qt(), n = Array.from(t.children), s = [];
    return n.forEach((o, a) => {
      const l = `${i == null ? void 0 : i.id}-${a}`;
      let c;
      switch (o.tagName) {
        case "line":
          const h = Number(o.getAttribute("x1")), d = Number(o.getAttribute("y1")), u = Number(o.getAttribute("x2")), f = Number(o.getAttribute("y2"));
          c = Oi(o, h, d, u, f, {
            groupId: r,
            id: l
          });
          break;
        case "text":
          c = qc(o, e, {
            groupId: r,
            id: l
          });
          break;
        case "circle":
          c = Ht(o, "ellipse", {
            label: o.textContent ? {
              text: o.textContent
            } : void 0,
            groupId: r,
            id: l
          });
        default:
          c = Ht(o, Zc[o.tagName], {
            label: o.textContent ? {
              text: o.textContent
            } : void 0,
            groupId: r,
            id: l
          });
      }
      s.push(c);
    }), s;
  };
  T1 = (t, e) => {
    const i = Array.from(e.querySelectorAll(".actor-top")), r = Array.from(e.querySelectorAll(".actor-bottom")), n = [], s = [];
    return Object.values(t).forEach((o, a) => {
      var _a2;
      const l = i.find((d) => d.getAttribute("name") === o.name), c = r.find((d) => d.getAttribute("name") === o.name);
      if (!l || !c) throw "root not found";
      const h = o.description;
      if (o.type === "participant") {
        const d = Ht(l, "rectangle", {
          id: `${o.name}-top`,
          label: {
            text: h
          },
          subtype: "actor"
        });
        if (!d) throw "Top Node element not found!";
        n.push([
          d
        ]);
        const u = Ht(c, "rectangle", {
          id: `${o.name}-bottom`,
          label: {
            text: h
          },
          subtype: "actor"
        });
        n.push([
          u
        ]);
        const f = (_a2 = l == null ? void 0 : l.parentElement) == null ? void 0 : _a2.previousElementSibling;
        if ((f == null ? void 0 : f.tagName) !== "line") throw "Line not found";
        const m = Number(f.getAttribute("x1"));
        if (!d.height) throw "Top node element height is null";
        const y = d.y + d.height, T = u.y, E = Number(f.getAttribute("x2")), C = Oi(f, m, y, E, T);
        s.push(C);
      } else if (o.type === "actor") {
        const d = ga(l, h, {
          id: `${o.name}-top`
        });
        n.push(d);
        const u = ga(c, h, {
          id: `${o.name}-bottom`
        });
        n.push(u);
        const f = l.previousElementSibling;
        if ((f == null ? void 0 : f.tagName) !== "line") throw "Line not found";
        const m = Number(f.getAttribute("x1")), y = Number(f.getAttribute("y1")), T = Number(f.getAttribute("x2")), E = u.find((C) => C.type === "ellipse");
        if (E) {
          const C = E.y, x = Oi(f, m, y, T, C);
          s.push(x);
        }
      }
    }), {
      nodes: n,
      lines: s
    };
  };
  v1 = (t, e) => {
    const i = [], r = Array.from(e.querySelectorAll('[class*="messageLine"]')), n = Object.keys(pa), s = t.filter((o) => n.includes(o.type.toString()));
    return r.forEach((o, a) => {
      const l = s[a], c = pa[l.type], h = C1(o, {
        label: l == null ? void 0 : l.message,
        strokeStyle: x1(l.type),
        endArrowhead: c === "SOLID_OPEN" || c === "DOTTED_OPEN" ? null : "arrow"
      });
      b1(o, h), i.push(h);
    }), i;
  };
  S1 = (t, e) => {
    const i = Array.from(e.querySelectorAll(".note")).map((s) => s.parentElement), r = t.filter((s) => s.type === Rt.NOTE), n = [];
    return i.forEach((s, o) => {
      if (!s) return;
      const a = s.firstChild, l = r[o].message, c = Ht(a, "rectangle", {
        label: {
          text: l
        },
        subtype: "note"
      });
      n.push(c);
    }), n;
  };
  k1 = (t) => {
    const e = Array.from(t.querySelectorAll("[class*=activation]")), i = [];
    return e.forEach((r) => {
      const n = Ht(r, "rectangle", {
        label: {
          text: ""
        },
        subtype: "activation"
      });
      i.push(n);
    }), i;
  };
  w1 = (t, e) => {
    const i = Array.from(e.querySelectorAll(".loopLine")), r = [], n = [], s = [];
    i.forEach((h) => {
      const d = Number(h.getAttribute("x1")), u = Number(h.getAttribute("y1")), f = Number(h.getAttribute("x2")), m = Number(h.getAttribute("y2")), y = Oi(h, d, u, f, m);
      y.strokeStyle = "dotted", y.strokeColor = "#adb5bd", y.strokeWidth = 2, r.push(y);
    });
    const o = Array.from(e.querySelectorAll(".loopText")), a = t.filter((h) => h.type === Rt.CRITICAL_START).map((h) => h.message);
    o.forEach((h) => {
      var _a2;
      const d = h.textContent || "", u = qc(h, d), f = ((_a2 = d.match(/\[(.*?)\]/)) == null ? void 0 : _a2[1]) || "";
      a.includes(f) && (u.x += 16), n.push(u);
    });
    const l = Array.from(e == null ? void 0 : e.querySelectorAll(".labelBox")), c = Array.from(e == null ? void 0 : e.querySelectorAll(".labelText"));
    return l.forEach((h, d) => {
      var _a2;
      const u = ((_a2 = c[d]) == null ? void 0 : _a2.textContent) || "", f = Ht(h, "rectangle", {
        label: {
          text: u
        }
      });
      f.strokeColor = "#adb5bd", f.bgColor = "#e9ecef", f.width = void 0, s.push(f);
    }), {
      lines: r,
      texts: n,
      nodes: s
    };
  };
  A1 = (t) => {
    const e = Array.from(t.querySelectorAll(".rect")).filter((r) => {
      var _a2;
      return ((_a2 = r.parentElement) == null ? void 0 : _a2.tagName) !== "g";
    }), i = [];
    return e.forEach((r) => {
      const n = Ht(r, "rectangle", {
        label: {
          text: ""
        },
        subtype: "highlight"
      });
      i.push(n);
    }), i;
  };
  E1 = (t, e) => {
    t.parse();
    const i = t.parser.yy, r = [], n = i.getBoxes(), s = A1(e), o = i.getActors(), { nodes: a, lines: l } = T1(o, e), c = i.getMessages(), h = v1(c, e), d = S1(c, e), u = k1(e), f = w1(c, e);
    return r.push(s), r.push(...a), r.push(d), r.push(u), {
      type: "sequence",
      lines: l,
      arrows: h,
      nodes: r,
      loops: f,
      groups: n
    };
  };
  Qi = {
    AGGREGATION: 0,
    EXTENSION: 1,
    COMPOSITION: 2,
    DEPENDENCY: 3
  };
  ma = {
    LINE: 0,
    DOTTED_LINE: 1
  };
  se = 16;
  B1 = (t) => {
    let e;
    switch (t) {
      case ma.LINE:
        e = "solid";
        break;
      case ma.DOTTED_LINE:
        e = "dotted";
        break;
      default:
        e = "solid";
    }
    return e;
  };
  ya = (t) => {
    let e;
    switch (t) {
      case Qi.AGGREGATION:
        e = "diamond_outline";
        break;
      case Qi.COMPOSITION:
        e = "diamond";
        break;
      case Qi.EXTENSION:
        e = "triangle_outline";
        break;
      case "none":
        e = null;
        break;
      case Qi.DEPENDENCY:
      default:
        e = "arrow";
        break;
    }
    return e;
  };
  L1 = (t, e) => {
    const i = [], r = [], n = [];
    return Object.values(t).forEach((s) => {
      var _a2;
      const { domId: o, id: a } = s, l = Qt(), c = e.querySelector(`[data-id=${a}]`);
      if (!c) throw Error(`DOM Node with id ${o} not found`);
      const { transformX: h, transformY: d } = qe(c), u = Ht(c.firstChild, "rectangle", {
        id: a,
        groupId: l
      });
      u.x += h, u.y += d, u.metadata = {
        classId: a
      }, i.push(u), Array.from(c.querySelectorAll(".divider")).forEach((y) => {
        const T = Number(y.getAttribute("x1")), E = Number(y.getAttribute("y1")), C = Number(y.getAttribute("x2")), x = Number(y.getAttribute("y2")), B = Oi(y, T, E, C, x, {
          groupId: l,
          id: Qt()
        });
        B.startX += h, B.startY += d, B.endX += h, B.endY += d, B.metadata = {
          classId: a
        }, r.push(B);
      });
      const m = (_a2 = c.querySelector(".label")) == null ? void 0 : _a2.children;
      if (!m) throw "label nodes not found";
      Array.from(m).forEach((y) => {
        const T = y.textContent;
        if (!T) return;
        const E = Qt(), { transformX: C, transformY: x } = qe(y), B = y.getBBox(), Y = jn(h + C, d + x + 10, T, {
          width: B.width,
          height: B.height,
          id: E,
          groupId: l,
          metadata: {
            classId: a
          }
        });
        n.push(Y);
      });
    }), {
      nodes: i,
      lines: r,
      text: n
    };
  };
  F1 = (t, e) => {
    const i = [
      "triangle_outline",
      "diamond",
      "diamond_outline"
    ], r = e.startArrowhead && i.includes(e.startArrowhead), n = e.endArrowhead && i.includes(e.endArrowhead);
    return !n && !r || (r && (t === "LR" ? e.startX -= se : t === "RL" ? e.startX += se : t === "TB" ? e.startY -= se : t === "BT" && (e.startY += se)), n && (t === "LR" ? e.endX += se : t === "RL" ? e.endX -= se : t === "TB" ? e.endY += se : t === "BT" && (e.endY -= se))), e;
  };
  O1 = (t, e, i, r) => {
    var _a2;
    const n = (_a2 = i.querySelector(".edgePaths")) == null ? void 0 : _a2.children;
    if (!n) throw new Error("No Edges found!");
    const s = [], o = [];
    return t.forEach((a, l) => {
      const { id1: c, id2: h, relation: d } = a, u = e.find((P) => P.id === c), f = e.find((P) => P.id === h), m = B1(d.lineType), y = ya(d.type1), T = ya(d.type2), E = Rc(n[l]), C = Pc(E.startX, E.startY, E.endX, E.endY, {
        strokeStyle: m,
        startArrowhead: y,
        endArrowhead: T,
        label: a.title ? {
          text: a.title
        } : void 0,
        start: {
          type: "rectangle",
          id: u.id
        },
        end: {
          type: "rectangle",
          id: f.id
        }
      }), x = F1(r, C);
      s.push(x);
      const { relationTitle1: B, relationTitle2: w } = a, Y = 20, N = 15, rt = 15;
      let V, H;
      if (B && B !== "none") {
        switch (r) {
          case "TB":
            V = x.startX - Y, x.endX < x.startX && (V -= rt), H = x.startY + N;
            break;
          case "BT":
            V = x.startX + Y, x.endX > x.startX && (V += rt), H = x.startY - N;
            break;
          case "LR":
            V = x.startX + Y, H = x.startY + N, x.endY > x.startY && (H += rt);
            break;
          case "RL":
            V = x.startX - Y, H = x.startY - N, x.startY > x.endY && (H -= rt);
            break;
          default:
            V = x.startX - Y, H = x.startY + N;
        }
        const P = jn(V, H, B, {
          fontSize: 16
        });
        o.push(P);
      }
      if (w && w !== "none") {
        switch (r) {
          case "TB":
            V = x.endX + Y, x.endX < x.startX && (V += rt), H = x.endY - N;
            break;
          case "BT":
            V = x.endX - Y, x.endX > x.startX && (V -= rt), H = x.endY + N;
            break;
          case "LR":
            V = x.endX - Y, H = x.endY - N, x.endY > x.startY && (H -= rt);
            break;
          case "RL":
            V = x.endX + Y, H = x.endY + N, x.startY > x.endY && (H += rt);
            break;
          default:
            V = x.endX + Y, H = x.endY - N;
        }
        const P = jn(V, H, w, {
          fontSize: 16
        });
        o.push(P);
      }
    }), {
      arrows: s,
      text: o
    };
  };
  I1 = (t, e, i) => {
    const r = [], n = [];
    return t.forEach((s) => {
      const { id: o, text: a, class: l } = s, c = e.querySelector(`#${o}`);
      if (!c) throw new Error(`Node with id ${o} not found!`);
      const { transformX: h, transformY: d } = qe(c), u = c.firstChild, f = Ht(u, "rectangle", {
        id: o,
        subtype: "note",
        label: {
          text: a
        }
      });
      if (Object.assign(f, {
        x: f.x + h,
        y: f.y + d
      }), r.push(f), l) {
        const m = i.find((B) => B.id === l);
        if (!m) throw new Error(`class node with id ${l} not found!`);
        const y = f.x + (f.width || 0) / 2, T = f.y + (f.height || 0), E = y, C = m.y, x = Pc(y, T, E, C, {
          strokeStyle: "dotted",
          startArrowhead: null,
          endArrowhead: null,
          start: {
            id: f.id,
            type: "rectangle"
          },
          end: {
            id: m.id,
            type: "rectangle"
          }
        });
        n.push(x);
      }
    }), {
      notes: r,
      connectors: n
    };
  };
  M1 = (t, e) => {
    t.parse();
    const i = t.parser.yy, r = i.getDirection(), n = [], s = [], o = [], a = [], l = i.getNamespaces(), c = i.getClasses();
    if (Object.keys(c).length) {
      const y = L1(c, e);
      n.push(y.nodes), s.push(...y.lines), o.push(...y.text), a.push(...y.nodes);
    }
    const h = i.getRelations(), { arrows: d, text: u } = O1(h, a, e, r), { notes: f, connectors: m } = I1(i.getNotes(), e, a);
    return n.push(f), d.push(...m), o.push(...u), {
      type: "class",
      nodes: n,
      lines: s,
      arrows: d,
      text: o,
      namespaces: l
    };
  };
  $1 = (t) => {
    const e = t.querySelector("svg");
    if (!e) throw new Error("SVG element not found");
    const i = e.getBoundingClientRect(), r = i.width, n = i.height;
    e.setAttribute("width", `${r}`), e.setAttribute("height", `${n}`);
    const s = "image/svg+xml", o = unescape(encodeURIComponent(e.outerHTML)), l = `data:image/svg+xml;base64,${btoa(o)}`;
    return {
      type: "graphImage",
      mimeType: s,
      dataURL: l,
      width: r,
      height: n
    };
  };
  D1 = async (t, e = Ko) => {
    Ct.initialize({
      ...Ko,
      ...e
    });
    const i = await Ct.mermaidAPI.getDiagramFromText(f1(t)), { svg: r } = await Ct.render("mermaid-to-excalidraw", t), n = document.createElement("div");
    n.setAttribute("style", "opacity: 0; position: relative; z-index: -1;"), n.innerHTML = r, n.id = "mermaid-diagram", document.body.appendChild(n);
    let s;
    switch (i.type) {
      case "flowchart-v2": {
        s = _1(i, n);
        break;
      }
      case "sequence": {
        s = E1(i, n);
        break;
      }
      case "classDiagram": {
        s = M1(i, n);
        break;
      }
      default:
        s = $1(n);
    }
    return n.remove(), s;
  };
  N1 = async (t, e) => {
    var _a2;
    const i = e || {}, r = parseInt(((_a2 = i.themeVariables) == null ? void 0 : _a2.fontSize) ?? "") || Ir, n = await D1(t, {
      ...i,
      themeVariables: {
        ...i.themeVariables,
        fontSize: `${r * 1.25}px`
      }
    });
    return hh(n, {
      fontSize: r
    });
  };
  oT = Object.freeze(Object.defineProperty({
    __proto__: null,
    parseMermaidToExcalidraw: N1
  }, Symbol.toStringTag, {
    value: "Module"
  }));
});
export {
  ly as $,
  fC as A,
  to as B,
  Wt as C,
  Y1 as D,
  U1 as E,
  ms as F,
  gs as G,
  G1 as H,
  X1 as I,
  j1 as J,
  z1 as K,
  W1 as L,
  K1 as M,
  H1 as N,
  V1 as O,
  J0 as P,
  U0 as Q,
  Zs as R,
  J1 as S,
  mo as T,
  q as U,
  q0 as V,
  Yt as W,
  Z1 as X,
  V_ as Y,
  iy as Z,
  gy as _,
  __tla,
  rC as a,
  Ms as a$,
  Ff as a0,
  my as a1,
  $i as a2,
  O as a3,
  D as a4,
  sC as a5,
  _i as a6,
  Wl as a7,
  xt as a8,
  Fa as a9,
  wg as aA,
  so as aB,
  vl as aC,
  xl as aD,
  Sm as aE,
  xm as aF,
  qm as aG,
  Km as aH,
  Ni as aI,
  Ke as aJ,
  xr as aK,
  Fm as aL,
  y0 as aM,
  Di as aN,
  Tr as aO,
  km as aP,
  pl as aQ,
  Bg as aR,
  Lg as aS,
  me as aT,
  Ps as aU,
  Fg as aV,
  ao as aW,
  Eg as aX,
  Mg as aY,
  Ze as aZ,
  fe as a_,
  vh as aa,
  Gg as ab,
  oo as ac,
  yt as ad,
  sd as ae,
  Vn as af,
  Oa as ag,
  Mi as ah,
  $a as ai,
  q1 as aj,
  gh as ak,
  Kn as al,
  le as am,
  cs as an,
  fd as ao,
  ki as ap,
  uh as aq,
  ke as ar,
  Um as as,
  Pm as at,
  Xm as au,
  Gm as av,
  bl as aw,
  zr as ax,
  jr as ay,
  vr as az,
  eC as b,
  lo as b0,
  ml as b1,
  Pn as b2,
  Pg as b3,
  _n as b4,
  oT as b5,
  tC as c,
  kt as d,
  uc as e,
  lt as f,
  bo as g,
  kr as h,
  Li as i,
  fo as j,
  vy as k,
  $ as l,
  Ri as m,
  oC as n,
  nC as o,
  nT as p,
  Q_ as q,
  Mf as r,
  iC as s,
  Ol as t,
  bi as u,
  Ey as v,
  by as w,
  rT as x,
  hC as y,
  _y as z
};
