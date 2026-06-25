import { onMounted, onUnmounted } from 'vue'

export function useCursor() {
  let dot: HTMLDivElement

  const move = (e: MouseEvent) => {
    dot.style.left = e.clientX + 'px'
    dot.style.top = e.clientY + 'px'
  }

  onMounted(() => {
    dot = document.createElement('div')
    dot.style.cssText = `
      position:fixed;width:10px;height:10px;border-radius:50%;
      background:rgba(200,255,0,0.7);pointer-events:none;z-index:10000;
      transform:translate(-50%,-50%);transition:transform 0.1s;
      box-shadow:0 0 10px rgba(200,255,0,0.8);
    `
    document.body.appendChild(dot)
    document.addEventListener('mousemove', move)
  })

  onUnmounted(() => {
    document.removeEventListener('mousemove', move)
    dot?.remove()
  })
}
