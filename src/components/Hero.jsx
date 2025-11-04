import Spline from '@splinetool/react-spline'
import { ArrowRight } from 'lucide-react'

export default function Hero() {
  return (
    <section id="home" className="relative h-screen w-full overflow-hidden">
      <div className="absolute inset-0">
        <Spline
          scene="https://prod.spline.design/VJLoxp84lCdVfdZu/scene.splinecode"
          style={{ width: '100%', height: '100%' }}
        />
        <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-white via-white/40 to-transparent" />
      </div>

      <div className="relative z-10 h-full">
        <div className="max-w-7xl mx-auto h-full px-6 flex items-end pb-24">
          <div className="max-w-3xl">
            <div className="inline-flex items-center gap-2 rounded-full bg-white/70 backdrop-blur px-3 py-1 text-xs font-medium text-gray-700 ring-1 ring-black/5 mb-4">
              <span className="h-2 w-2 rounded-full bg-gradient-to-r from-blue-600 to-purple-600" />
              Interactive 3D — Tech Portfolio
            </div>
            <h1 className="text-4xl sm:text-5xl md:text-6xl font-extrabold tracking-tight text-gray-900 leading-tight">
              Crafting modern, scalable, and delightful digital experiences
            </h1>
            <p className="mt-4 text-gray-700 text-lg md:text-xl">
              I’m an IT expert focused on building performant web apps, immersive interfaces, and reliable systems.
            </p>
            <div className="mt-6 flex items-center gap-3">
              <a
                href="#projects"
                className="inline-flex items-center gap-2 rounded-lg bg-gradient-to-r from-blue-600 to-purple-600 px-5 py-3 text-white font-medium shadow-sm hover:shadow transition-shadow"
              >
                View Projects
                <ArrowRight className="h-4 w-4" />
              </a>
              <a
                href="#contact"
                className="inline-flex items-center gap-2 rounded-lg bg-white px-5 py-3 text-gray-900 font-medium ring-1 ring-black/10 hover:ring-black/20"
              >
                Get in Touch
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
