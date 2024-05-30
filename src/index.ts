/*
 * @Author: lucklin 
 * @Email: 502763576@qq.com 
 * @Date: 2024-05-10 12:51:47 
 * @Last Modified time: 2024-05-11 10:33:20
 */
import { App, Directive, onMounted, onUnmounted } from 'vue'
export declare type VisualizeAnimateValue = { ani: string; duration?: number; hook?: string; delay?: number }
export declare type VisualizeAnimate = Directive<HTMLElement, VisualizeAnimateValue>
const animationClassName = 'animate'

export default {
  isInstalled: false,
  install(app: App) {
    this.isInstalled = true
    const myDirective: VisualizeAnimate = {
      mounted(el, binding) {
        if (!binding.value.ani) return
        el.classList.add(animationClassName)
        el.dataset.ani = binding.value.ani
        if (binding.value.delay) {
          el.dataset.delay = String(binding.value.delay)
        }
        // demo: https://animate.style/
        // core: https://cdnjs.cloudflare.com/ajax/libs/animate.css/4.1.1/animate.min.css
        const currentAni = `
          .${binding.value.ani} {
            animation: ${binding.value.ani} ${binding.value.duration || 2}s ${binding.value.hook || 'ease-in'};
          }
        `
        const style = document.querySelector('style.v-animate')
        if (style) {
          style.innerHTML += currentAni
        } else {
          const newStyle = document.createElement('style')
          newStyle.setAttribute('class', 'v-animate')
          newStyle.innerHTML = currentAni
          document.head.appendChild(newStyle)
        }
      }
    }
    app.directive('animate', myDirective)
  }
}

export const useVisualizeAnimate = () => {
  const handleAnimate = () => {
    const top = document.documentElement.scrollTop || document.body.scrollTop
    const vh = document.documentElement.clientHeight
    const dom: any = document.querySelectorAll(`.${animationClassName}`)
    Array.from(dom).forEach((v: any) => {
      if (top + vh > v.offsetTop) {
        const delay = v.dataset.delay
        if (delay) {
          setTimeout(() => {
            v.style.opacity = 1
            v.classList.add(v.dataset.ani)
          }, delay)
        } else {
          v.style.opacity = 1
          v.classList.add(v.dataset.ani)
        }
      } else {
        v.classList.remove(v.dataset.ani)
        v.style.opacity = 0
      }
    })
  }
  onMounted(() => {
    handleAnimate()
    addEventListener('scroll', handleAnimate)
  })
  onUnmounted(() => {
    removeEventListener('scroll', handleAnimate)
  })
}

