function BtFncTmp(t, e) {
    function i(s) {
        s.target === t && (e.call(t, s),
        t.removeEventListener("transitionend", i))
    }
    e && t.addEventListener("transitionend", i)
}
function RtFncTmp({swiper: t, duration: e, transformElements: i, allSlides: s}) {
    const {activeIndex: n} = t
      , r = l=>l.parentElement ? l.parentElement : t.slides.filter(a=>a.shadowRoot && a.shadowRoot === l.parentNode)[0];
    if (t.params.virtualTranslate && e !== 0) {
        let l = !1, o;
        s ? o = i : o = i.filter(a=>{
            const d = a.classList.contains("swiper-slide-transform") ? r(a) : a;
            return t.getSlideIndex(d) === n
        }
        ),
        o.forEach(a=>{
            BtFncTmp(a, ()=>{
                if (l || !t || t.destroyed)
                    return;
                l = !0,
                t.animating = !1;
                const d = new window.CustomEvent("transitionend",{
                    bubbles: !0,
                    cancelable: !0
                });
                t.wrapperEl.dispatchEvent(d)
            }
            )
        }
        )
    }
}
function materialEffect({swiper: t, on: e, extendParams: i}) {
    i({
        materialEffect: {
            slideSplitRatio: .65
        }
    });
    const s = ()=>{
        const {slides: r, slidesSizesGrid: l, params: o, size: a} = t
          , {slidesPerView: d, spaceBetween: c, cssMode: f, centeredSlides: p} = o
          , u = p ? .5 : Math.min(Math.max(o.materialEffect.slideSplitRatio, 0), 1)
          , m = p ? .5 : 1 - Math.min(Math.max(o.materialEffect.slideSplitRatio, 0), 1);
        for (let v = 0; v < r.length; v += 1) {
            const y = r[v]
              , g = y.querySelector(".swiper-material-wrapper")
              , E = y.querySelectorAll(".swiper-material-animate-opacity")
              , S = y.querySelectorAll("[data-swiper-material-scale]")
              , h = -y.progress
              , x = y.swiperSlideOffset
              , I = t.translate;
            let M, C = 0, A = 0;
            const w = l[v]
              , T = m === 0 && !p ? 0 : c / 2 / w
              , P = f ? I : 0
              , b = p && d % 2 === 1
              , z = p && d % 2 === 0;
            if (h <= 0)
                if (p && d > 1) {
                    if (h <= 0 && h >= -(d - 2) && (C = I,
                    M = 1,
                    A = 1),
                    b && h < -(d - Math.ceil(d / 2))) {
                        const L = Math.ceil(d / 2) - Math.abs(h);
                        M = L,
                        A = M ** 4,
                        C = I + w * (1 - L) * (1 + T * 2)
                    }
                    if (z && h < -(d / 2 - 1) && h >= -(d / 2)) {
                        const L = d / 2 - Math.abs(h);
                        M = u - T + (m + T * 2) * (d / 2 - Math.abs(h)),
                        A = ((M - u) / (1 - u)) ** 4,
                        C = I + w * (m + T) * (1 - L)
                    }
                    if (z && h < -d / 2) {
                        let L = d / 2 + 1 - Math.abs(h);
                        M = 0,
                        L >= 0 && (L = -T * 2 + L * (1 + T * 2),
                        L = Math.max(Math.min(L, 1), 0),
                        M = (m - T) * L),
                        C = I + w * (m + T) * (2 - L) + w * (m - T) * (1 - L)
                    }
                } else
                    M = 1 + h,
                    C = -x,
                    A = M ** 4;
            if (d === 1)
                h > 0 && (M = 1 - h,
                C = -x + a * Math.min(h, 1),
                A = M ** 4);
            else {
                if (h > 0 && h <= d - 2 && (C = I,
                M = 1,
                A = 1),
                z ? h > d / 2 - 1 && h <= d / 2 : h > d - 2 && h <= d - 1) {
                    const O = z ? Math.floor(d / 2) : 1;
                    M = u - T + (m + T * 2) * (d - O - Math.abs(h)),
                    C = I,
                    u === 1 ? A = M ** 4 : A = ((M - u) / (1 - u)) ** 4
                }
                if (b && h > d - Math.ceil(d / 2)) {
                    const O = Math.ceil(d / 2) - (d - Math.abs(h));
                    C = I - w * (T * 2) * O,
                    M = 1 - O,
                    A = M ** 4
                }
                if (h > d - 1 && h <= d && !p) {
                    const O = d - Math.abs(h)
                      , F = u - T
                      , B = m - T;
                    M = B + (F - B) * O,
                    C = I - w * (m + T) * (1 - O),
                    m === 0 && (A = M ** 4)
                }
                if (h > (p ? d / 2 : d) && !b) {
                    let O = (p ? d / 2 + 1 : d + 1) - Math.abs(h)
                      , F = 0;
                    M = 0,
                    O >= 0 && (O = -T * 2 + O * (1 + T * 2),
                    O = Math.max(Math.min(O, 1), 0),
                    M = (m - T) * O,
                    F = -O * (m + T) * w + O * c),
                    C = -x + a * Math.min(h, 1) + F,
                    A = 0
                }
            }
            M < 0 && (M = 0),
            M > 1 && (M = 1),
            M === 0 && (M = 1e-4),
            y.style.setProperty("--swiper-material-scale", M),
            E.forEach(L=>{
                L.style.opacity = A
            }
            ),
            S.forEach(L=>{
                let O = parseFloat(L.getAttribute("data-swiper-material-scale"));
                (Number.isNaN(O) || !O && O !== 0) && (O = 1),
                L.style.transform = `scale(${1 + (O - 1) * (1 - M)})`
            }
            ),
            t.isHorizontal() ? (g.style.width = `${100 * M}%`,
            g.style.transform = `translate3d(${C - P}px, 0, 0)`) : (g.style.height = `${100 * M}%`,
            g.style.transform = `translate3d(0, ${C - P}px, 0)`)
        }
    }
      , n = r=>{
        const {slides: l} = t
          , o = [];
        for (let a = 0; a < l.length; a += 1) {
            const d = l[a]
              , c = d.querySelector(".swiper-material-wrapper")
              , f = d.querySelectorAll(".swiper-material-animate-opacity")
              , p = d.querySelectorAll("[data-swiper-material-scale]");
            [c, ...p, ...f].forEach(u=>{
                u.style.transitionDuration = `${r}ms`
            }
            ),
            o.push(c)
        }
        RtFncTmp({
            swiper: t,
            duration: r,
            transformElements: o,
            allSlides: !0
        })
    }
    ;
    e("beforeInit", ()=>{
        if (t.params.effect !== "material")
            return;
        t.classNames.push(`${t.params.containerModifierClass}material`),
        t.isElement && t.hostEl && t.hostEl.classList.add(`swiper-${t.params.direction}`);
        const r = {
            loopAdditionalSlides: 1,
            watchSlidesProgress: !0,
            virtualTranslate: !t.params.cssMode
        };
        Object.assign(t.params, r),
        Object.assign(t.originalParams, r)
    }
    ),
    e("setTranslate", ()=>{
        t.params.effect === "material" && s()
    }
    ),
    e("setTransition", (r,l)=>{
        t.params.effect === "material" && n(l)
    }
    ),
    e("slidesUpdated", ()=>{
        if (!t.params.centeredSlides && t.params.slidesPerView > 1 && !t.params.loop && t.params.materialEffect.slideSplitRatio < 1) {
            const r = t.snapGrid[t.snapGrid.length - 1];
            t.snapGrid.push(r + t.slidesSizesGrid[0] + t.params.spaceBetween)
        }
        t.__preventObserver__ = !0,
        t.el.style.setProperty("--swiper-material-slide-size", `${t.slidesSizesGrid[0]}px`),
        requestAnimationFrame(()=>{
            t.__preventObserver__ = !1
        }
        )
    }
    )
}