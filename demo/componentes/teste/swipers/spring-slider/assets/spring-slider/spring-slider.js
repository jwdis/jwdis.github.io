var b = Object.defineProperty
  , w = Object.defineProperties;
var D = Object.getOwnPropertyDescriptors;
var S = Object.getOwnPropertySymbols;
var L = Object.prototype.hasOwnProperty
  , N = Object.prototype.propertyIsEnumerable;
var E = (s,e,o)=>e in s ? b(s, e, {
    enumerable: !0,
    configurable: !0,
    writable: !0,
    value: o
}) : s[e] = o
  , p = (s,e)=>{
    for (var o in e || (e = {}))
        L.call(e, o) && E(s, o, e[o]);
    if (S)
        for (var o of S(e))
            N.call(e, o) && E(s, o, e[o]);
    return s
}
  , d = (s,e)=>w(s, D(e));

// import { S as Swiper } from "./vendor.0e76e1a6.js";


function springSlider(s, e={}) {
    const o = s.querySelector(".swiper");
    let a = 0
      , t = !1;
    const r = n=>{
        n.slides.forEach(u=>{
            u.style.transitionDelay = "0ms"
        }
        )
    }
      , i = new Swiper(o,d(p({
        effect: "creative",
        speed: 720,
        followFinger: !1
    }, e), {
        // modules: [EffectCreative, ...e.modules || []],
        creativeEffect: {
            limitProgress: 100,
            prev: {
                translate: ["-100%", 0, 0]
            },
            next: {
                translate: ["100%", 0, 0]
            }
        },
        on: d(p({}, e.on || {}), {
            touchStart(...n) {
                t = !0,
                e.on && e.on.touchStart && e.on.touchStart(...n)
            },
            touchEnd(...n) {
                t = !1,
                e.on && e.on.touchStart && e.on.touchEnd(...n)
            },
            progress(n, u) {
                if (t)
                    return;
                e.on && e.on.progress && e.on.progress(n, u);
                const g = n.progress > a ? "next" : "prev";
                a = n.progress;
                const y = n.params.speed / 16
                  , f = n.visibleSlidesIndexes
                  , h = f[0]
                  , m = f[f.length - 1]
                  , v = (l,c)=>{
                    g === "next" && c >= h ? l.style.transitionDelay = `${(c - h + 1) * y}ms` : g === "prev" && c <= m + 1 ? l.style.transitionDelay = `${(m - c + 1) * y}ms` : l.style.transitionDelay = `${0}ms`
                }
                ;
                n.slides.forEach((l,c)=>{
                    n.animating ? (l.style.transitionDelay = "0ms",
                    requestAnimationFrame(()=>{
                        v(l, c)
                    }
                    )) : v(l, c)
                }
                )
            }
        })
    }));
    return i.on("transitionEnd resize touchStart", ()=>{
        r(i)
    }
    ),
    i
}

