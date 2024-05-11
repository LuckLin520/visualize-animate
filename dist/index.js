import { onMounted as c, onUnmounted as i } from "vue";
const o = "animate", u = {
  isInstalled: !1,
  install(s) {
    this.isInstalled = !0, s.directive("animate", {
      mounted(l, t) {
        if (!t.value.ani)
          return;
        l.classList.add(o), l.dataset.ani = t.value.ani, t.value.delay && (l.dataset.delay = t.value.delay);
        const n = `
          .${t.value.ani} {
            animation: ${t.value.ani} ${t.value.duration || 2}s ${t.value.hook || "ease-in"};
          }
        `, e = document.querySelector("style.v-animate");
        if (e)
          e.innerHTML += n;
        else {
          const a = document.createElement("style");
          a.setAttribute("class", "v-animate"), a.innerHTML = n, document.head.appendChild(a);
        }
      }
    });
  }
}, m = () => {
  const s = () => {
    const l = document.documentElement.scrollTop || document.body.scrollTop, t = document.documentElement.clientHeight, n = document.querySelectorAll(`.${o}`);
    Array.from(n).forEach((e) => {
      if (l + t > e.offsetTop) {
        const a = e.dataset.delay;
        a ? setTimeout(() => {
          e.style.opacity = 1, e.classList.add(e.dataset.ani);
        }, a) : (e.style.opacity = 1, e.classList.add(e.dataset.ani));
      } else
        e.classList.remove(e.dataset.ani), e.style.opacity = 0;
    });
  };
  c(() => {
    s(), addEventListener("scroll", s);
  }), i(() => {
    removeEventListener("scroll", s);
  });
};
export {
  u as default,
  m as useVisualizeAnimate
};
