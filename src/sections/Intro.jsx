import { useEffect, useRef } from 'react'

export default function Intro() {
  const ref = useRef()

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => entries.forEach((e) => {
        if (e.isIntersecting) e.target.classList.add('visible')
      }),
      { threshold: 0.1 }
    )
    ref.current?.querySelectorAll('.fade-in').forEach((el) => observer.observe(el))
    return () => observer.disconnect()
  }, [])

  return (
    <section
      ref={ref}
      className="bg-[#F0E8D8] pt-32 pb-24 px-6 overflow-hidden"
      style={{ minHeight: '90vh' }}
    >
      <div className="max-w-2xl mx-auto text-center">

        {/* Heading */}
        <h2
          className="fade-in font-display text-[#1A0C0C] mb-6"
          style={{ fontSize: 'clamp(1.6rem, 3.5vw, 2.4rem)', fontWeight: 700, letterSpacing: '-0.01em' }}
        >
          Echoes of the Unsaid
        </h2>

        {/* Body paragraph — centered, justified, monospace-ish spacing like the mockup */}
        <p
          className="fade-in font-body text-[#1A0C0C] text-base leading-relaxed mb-12"
          style={{ textAlign: 'justify', fontFamily: '"EB Garamond", Georgia, serif', fontSize: '1.05rem' }}
        >
          Whether you're a writer, a dreamer, or simply someone who sees the world a little
          differently — Ruya is for you. You will give it your voice; your pen will breathe
          life into it. It just wants to live.
        </p>

        {/* Divider with "Quiet" left and "!" right */}
        <div className="fade-in relative flex items-start justify-center mb-10" style={{ minHeight: '120px' }}>
          {/* Vertical line */}
          <div
            className="absolute left-1/2 top-0 bottom-0 w-px bg-[#1A0C0C]/40"
            style={{ transform: 'translateX(-50%)' }}
          />
          {/* "Quiet" — left of the line */}
          <span
            className="absolute font-display font-bold text-[#1A0C0C] text-base"
            style={{ left: 'calc(50% - 80px)', top: '36px' }}
          >
            Quiet
          </span>
          {/* "!" — right of the line */}
          <span
            className="absolute font-display text-[#1A0C0C]"
            style={{
              left: 'calc(50% + 48px)',
              top: '24px',
              fontSize: '2.2rem',
              fontWeight: 400,
              lineHeight: 1,
            }}
          >
            !
          </span>
        </div>

        {/* "Echoes of the Unsaid" italic script */}
        <p
          className="fade-in font-script text-[#1A0C0C] mb-8"
          style={{ fontSize: '2rem', fontWeight: 400 }}
        >
          Echoes of the Unsaid
        </p>

        {/* Fall collage image — centered */}
        <div className="fade-in mb-12 overflow-hidden shadow-md" style={{ border: '1px solid #d4c8b0' }}>
          <img
            src="/images/fall-collage.jpg"
            alt="Echoes of the Unsaid"
            className="w-full object-cover"
            style={{ height: '200px', display: 'block' }}
          />
        </div>

        {/* ME? + vertical line row */}
        <div className="fade-in relative flex items-start justify-center" style={{ minHeight: '80px' }}>
          <div
            className="absolute left-1/2 top-0 bottom-0 w-px bg-[#1A0C0C]/40"
            style={{ transform: 'translateX(-50%)' }}
          />
          <span
            className="absolute font-display font-bold text-[#1A0C0C] text-base"
            style={{ left: 'calc(50% - 80px)', top: '28px' }}
          >
            ME?
          </span>
        </div>

      </div>
    </section>
  )
}
