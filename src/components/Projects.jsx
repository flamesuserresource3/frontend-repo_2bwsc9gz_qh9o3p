import { Code2, Server, Workflow } from 'lucide-react'

const projects = [
  {
    title: 'Realtime Collaboration Suite',
    description:
      'A WebRTC-enabled set of tools for live code collaboration with presence, chat, and shared cursors.',
    icon: <Workflow className="h-5 w-5" />,
    tags: ['React', 'WebRTC', 'FastAPI', 'MongoDB'],
  },
  {
    title: 'API Platform & Auth',
    description:
      'Modular FastAPI microservices with JWT auth, rate limiting, and OpenAPI-first design.',
    icon: <Server className="h-5 w-5" />,
    tags: ['FastAPI', 'Postgres', 'Redis', 'Docker'],
  },
  {
    title: 'Interactive 3D Showcase',
    description:
      'Spline-powered landing page with animated scenes and scroll-driven storytelling.',
    icon: <Code2 className="h-5 w-5" />,
    tags: ['Spline', 'Framer Motion', 'Tailwind'],
  },
]

export default function Projects() {
  return (
    <section id="projects" className="relative py-24 bg-white">
      <div className="absolute inset-0 bg-[radial-gradient(40%_40%_at_50%_-10%,rgba(59,130,246,0.15),transparent)]" />
      <div className="relative max-w-7xl mx-auto px-6">
        <div className="flex items-end justify-between flex-wrap gap-6">
          <div>
            <h2 className="text-3xl md:text-4xl font-bold tracking-tight text-gray-900">
              Featured Projects
            </h2>
            <p className="mt-2 text-gray-600 max-w-2xl">
              A selection of recent work across product engineering, backend systems, and playful interfaces.
            </p>
          </div>
          <a
            href="#contact"
            className="inline-flex items-center gap-2 rounded-lg bg-gray-900 text-white px-4 py-2 text-sm font-medium hover:bg-black"
          >
            Let’s build together
          </a>
        </div>

        <div className="mt-10 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.map((p) => (
            <article
              key={p.title}
              className="group rounded-2xl border border-black/10 bg-white p-6 shadow-sm hover:shadow-md transition-shadow"
            >
              <div className="flex items-center gap-3">
                <div className="h-10 w-10 rounded-lg bg-gradient-to-br from-blue-600 to-purple-600 text-white grid place-items-center">
                  {p.icon}
                </div>
                <h3 className="text-lg font-semibold text-gray-900">{p.title}</h3>
              </div>
              <p className="mt-3 text-gray-600">{p.description}</p>
              <div className="mt-4 flex flex-wrap gap-2">
                {p.tags.map((t) => (
                  <span
                    key={t}
                    className="text-xs px-2 py-1 rounded-md bg-gray-100 text-gray-700"
                  >
                    {t}
                  </span>
                ))}
              </div>
              <div className="mt-5 h-px bg-gradient-to-r from-transparent via-black/10 to-transparent" />
              <button className="mt-4 text-sm font-medium text-blue-600 group-hover:text-purple-600 transition-colors">
                Learn more →
              </button>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}
