import { Mail, Github, Linkedin } from 'lucide-react'

export default function Contact() {
  return (
    <section id="contact" className="py-24 bg-gradient-to-b from-white to-gray-50">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center">
          <h2 className="text-3xl md:text-4xl font-bold tracking-tight text-gray-900">
            Let’s connect
          </h2>
          <p className="mt-2 text-gray-600">
            Open to freelance, full-time roles, and collaborations.
          </p>
        </div>

        <div className="mt-10 grid grid-cols-1 md:grid-cols-3 gap-6 max-w-3xl mx-auto">
          <a
            href="mailto:hello@example.com"
            className="group rounded-2xl border border-black/10 bg-white p-6 shadow-sm hover:shadow-md transition-shadow flex items-center gap-4"
          >
            <span className="h-11 w-11 rounded-full bg-gray-900 text-white grid place-items-center">
              <Mail className="h-5 w-5" />
            </span>
            <div>
              <p className="font-semibold text-gray-900">Email</p>
              <p className="text-gray-600 text-sm group-hover:underline">hello@example.com</p>
            </div>
          </a>

          <a
            href="https://github.com/"
            target="_blank"
            rel="noreferrer"
            className="group rounded-2xl border border-black/10 bg-white p-6 shadow-sm hover:shadow-md transition-shadow flex items-center gap-4"
          >
            <span className="h-11 w-11 rounded-full bg-gray-900 text-white grid place-items-center">
              <Github className="h-5 w-5" />
            </span>
            <div>
              <p className="font-semibold text-gray-900">GitHub</p>
              <p className="text-gray-600 text-sm group-hover:underline">github.com/yourhandle</p>
            </div>
          </a>

          <a
            href="https://www.linkedin.com/"
            target="_blank"
            rel="noreferrer"
            className="group rounded-2xl border border-black/10 bg-white p-6 shadow-sm hover:shadow-md transition-shadow flex items-center gap-4"
          >
            <span className="h-11 w-11 rounded-full bg-gray-900 text-white grid place-items-center">
              <Linkedin className="h-5 w-5" />
            </span>
            <div>
              <p className="font-semibold text-gray-900">LinkedIn</p>
              <p className="text-gray-600 text-sm group-hover:underline">linkedin.com/in/yourhandle</p>
            </div>
          </a>
        </div>

        <p className="mt-12 text-center text-xs text-gray-500">
          © {new Date().getFullYear()} Flames Portfolio. All rights reserved.
        </p>
      </div>
    </section>
  )
}
