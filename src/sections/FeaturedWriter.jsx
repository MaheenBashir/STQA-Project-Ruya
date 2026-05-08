import { useEffect, useRef } from 'react'

export default function FeaturedWriter() {
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
      id="writers"
      ref={ref}
      className="relative min-h-screen overflow-hidden"
      style={{ backgroundColor: '#100606' }}
    >
      {/* Background: fall collage mood board very dimmed */}
      <div className="absolute inset-0">
        <img
          src="/images/fall-collage.jpg"
          alt=""
          className="w-full h-full object-cover opacity-12"
          style={{ filter: 'brightness(0.3) sepia(30%)' }}
        />
        <div className="absolute inset-0 bg-gradient-to-r from-[#100606] via-[#100606]/85 to-[#100606]/50" />
      </div>

      {/* Side issue strip */}
      <div className="absolute right-0 top-0 bottom-0 w-10 flex items-center justify-center"
        style={{ backgroundColor: 'rgba(107,26,26,0.25)', borderLeft: '1px solid rgba(201,169,110,0.1)' }}>
        <p
          className="font-body text-[#F4EDE0]/30 text-xs tracking-[0.3em] uppercase"
          style={{ writingMode: 'vertical-rl', transform: 'rotate(180deg)' }}
        >
          Issue 04 / 09 · April 2025 · Poetry
        </p>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-6 py-24 pr-16">

        {/* Breadcrumb nav */}
        <div className="fade-in flex items-center gap-6 mb-20 text-xs tracking-[0.25em] uppercase text-[#F4EDE0]/25 font-body overflow-hidden">
          <span className="whitespace-nowrap">← About Us</span>
          <div className="flex-1 h-px bg-[#F4EDE0]/10" />
          <span className="whitespace-nowrap hidden md:block">Where dreams, confessions, and whispered traces are captured</span>
          <div className="flex-1 h-px bg-[#F4EDE0]/10" />
          <span className="whitespace-nowrap">Blog →</span>
        </div>

        <div className="grid md:grid-cols-2 gap-20 items-center">

          {/* Left – writer info */}
          <div className="space-y-8">
            <div className="fade-in">
              <span className="text-[#C9A96E] text-xs tracking-[0.4em] uppercase font-body block mb-2">
                Featured Writer
              </span>
              <span className="text-[#F4EDE0]/40 text-xs tracking-[0.2em] font-body block mb-6">
                April Issue · Poetry
              </span>
              <h2
                className="font-display text-[#FAF5EC]"
                style={{ fontSize: 'clamp(3rem, 8vw, 7rem)', fontWeight: 300, lineHeight: 0.95 }}
              >
                Aina
                <br />
                <span className="italic" style={{ color: '#C9A96E' }}>Amir</span>
              </h2>
            </div>

            <div className="fade-in max-w-sm">
              <p className="font-body italic text-[#F4EDE0]/60 text-base leading-relaxed">
                She writes in pauses, in the spaces between what was said and
                what was felt. Her words do not arrive loudly — they stay
                quietly.
              </p>
            </div>

            <div className="fade-in flex gap-4 flex-wrap">
              <button className="font-body text-xs tracking-[0.3em] uppercase text-[#FAF5EC] border border-[#FAF5EC]/30 px-6 py-3 hover:bg-[#FAF5EC] hover:text-[#1A0C0C] transition-all duration-300">
                Read Their Work
              </button>
              <button className="font-body text-xs tracking-[0.3em] uppercase text-[#F4EDE0]/40 hover:text-[#C9A96E] transition-colors duration-300 px-4">
                Read Their Work →
              </button>
            </div>
          </div>

          {/* Right – poetry roses image */}
          <div className="fade-in relative">
            <div className="overflow-hidden shadow-2xl" style={{ maxWidth: '400px', marginLeft: 'auto', border: '1px solid rgba(201,169,110,0.1)' }}>
              <img
                src="/images/poetry-roses.jpg"
                alt="Poetry and roses"
                className="w-full h-[460px] object-cover hover:scale-105 transition-transform duration-700"
                style={{ filter: 'brightness(0.85) sepia(10%)' }}
              />
            </div>
            {/* Accent lines */}
            <div className="absolute -left-4 top-8 bottom-8 w-px bg-gradient-to-b from-transparent via-[#C9A96E]/35 to-transparent" />
          </div>
        </div>
      </div>
    </section>
  )
}
