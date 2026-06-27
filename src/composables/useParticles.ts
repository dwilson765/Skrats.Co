import { onMounted, onUnmounted, ref } from 'vue'
import type { Particle } from '@/types'

export function useParticles(canvasRef: ReturnType<typeof ref<HTMLCanvasElement | null>>) {
  let animId: number
  let particles: Particle[] = []

  function resize(canvas: HTMLCanvasElement) {
    canvas.width = window.innerWidth
    canvas.height = window.innerHeight
  }

  function init(canvas: HTMLCanvasElement) {
    particles = Array.from({ length: 60 }, () => ({
      x: Math.random() * canvas.width,
      y: Math.random() * canvas.height,
      r: Math.random() * 1.2 + 0.3,
      dx: (Math.random() - 0.5) * 0.3,
      dy: (Math.random() - 0.5) * 0.3,
      color: Math.random() > 0.6 ? '#c8ff00' : '#ff3c00'
    }))
  }

  function draw(canvas: HTMLCanvasElement, ctx: CanvasRenderingContext2D) {
    ctx.clearRect(0, 0, canvas.width, canvas.height)
    for (const p of particles) {
      ctx.beginPath()
      ctx.arc(p.x, p.y, p.r, 0, Math.PI * 2)
      ctx.fillStyle = p.color
      ctx.fill()
      p.x = (p.x + p.dx + canvas.width) % canvas.width
      p.y = (p.y + p.dy + canvas.height) % canvas.height
    }
    animId = requestAnimationFrame(() => draw(canvas, ctx))
  }

  onMounted(() => {
    const canvas = canvasRef.value
    if (!canvas) return
    const ctx = canvas.getContext('2d')
    if (!ctx) return

    resize(canvas)
    init(canvas)
    draw(canvas, ctx)

    const onResize = () => resize(canvas)
    window.addEventListener('resize', onResize)
    onUnmounted(() => {
      cancelAnimationFrame(animId)
      window.removeEventListener('resize', onResize)
    })
  })
}
