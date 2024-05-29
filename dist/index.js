import { onMounted as i, onUnmounted as d } from "vue";
const c = "animate", m = {
  isInstalled: !1,
  install(a) {
    this.isInstalled = !0;
    const o = {
      mounted(s, t) {
        if (!t.value.ani)
          return;
        s.classList.add(c), s.dataset.ani = t.value.ani, t.value.delay && (s.dataset.delay = String(t.value.delay));
        const e = `
          .${t.value.ani} {
            animation: ${t.value.ani} ${t.value.duration || 2}s ${t.value.hook || "ease-in"};
          }
        `, n = document.querySelector("style.v-animate");
        if (n)
          n.innerHTML += e;
        else {
          const l = document.createElement("style");
          l.setAttribute("class", "v-animate"), l.innerHTML = e, document.head.appendChild(l);
        }
      }
    };
    a.directive("animate", o);
  }
}, u = () => {
  const a = () => {
    const o = document.documentElement.scrollTop || document.body.scrollTop, s = document.documentElement.clientHeight, t = document.querySelectorAll(`.${c}`);
    Array.from(t).forEach((e) => {
      if (o + s > e.offsetTop) {
        const n = e.dataset.delay;
        n ? setTimeout(() => {
          e.style.opacity = 1, e.classList.add(e.dataset.ani);
        }, n) : (e.style.opacity = 1, e.classList.add(e.dataset.ani));
      } else
        e.classList.remove(e.dataset.ani), e.style.opacity = 0;
    });
  };
  i(() => {
    a(), addEventListener("scroll", a);
  }), d(() => {
    removeEventListener("scroll", a);
  });
};
export {
  m as default,
  u as useVisualizeAnimate
};
