import { useEffect, useRef } from 'react'

export default function About() {
  const ref = useRef()

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) =>
        entries.forEach((e) => {
          if (e.isIntersecting) e.target.classList.add('visible')
        }),
      { threshold: 0.1 }
    )

    ref.current?.querySelectorAll('.fade-in').forEach((el) =>
      observer.observe(el)
    )

    return () => observer.disconnect()
  }, [])

  return (
    <section
      id="about-us"
      ref={ref}
      className="relative min-h-screen overflow-hidden flex flex-col justify-center py-24 px-6"
      style={{ backgroundColor: '#3A0A0A' }}
    >

      {/* Background */}
      <div className="absolute inset-0">
        <img
          src="/images/butterflies-burgundy.jpg"
          alt=""
          className="w-full h-full object-cover opacity-30"
          style={{
            filter: 'brightness(0.6) saturate(0.8)',
          }}
        />

        <div
          className="absolute inset-0"
          style={{
            background:
              'radial-gradient(ellipse at 30% 50%, rgba(58,10,10,0.5) 0%, rgba(20,4,4,0.88) 100%)',
          }}
        />
      </div>

      {/* Corner Marks */}
      <div className="absolute top-8 left-8 w-8 h-8 border-t border-l border-[#C9A96E]/20" />
      <div className="absolute top-8 right-8 w-8 h-8 border-t border-r border-[#C9A96E]/20" />
      <div className="absolute bottom-8 left-8 w-8 h-8 border-b border-l border-[#C9A96E]/20" />
      <div className="absolute bottom-8 right-8 w-8 h-8 border-b border-r border-[#C9A96E]/20" />

      {/* Main Content */}
      <div className="max-w-6xl mx-auto w-full relative z-10">

        <div className="flex flex-col md:flex-row items-center justify-center gap-20">

          {/* Image */}
          <div className="fade-in flex justify-center md:justify-center w-full md:w-[40%]">

            <div
              className="overflow-hidden shadow-2xl"
              style={{
                border: '1px solid rgba(201,169,110,0.15)',
                width: '340px',
                borderRadius: '12px',
              }}
            >
              <img
                src="/images/about-portrait.jpg"
                alt="About portrait"
                className="w-full object-cover hover:scale-105 transition-transform duration-700"
                style={{
                  height: '420px',
                  filter: 'brightness(0.88) sepia(8%)',
                }}
              />
            </div>

          </div>

          {/* Text */}
          <div className="w-full md:w-[52%]">

            <div className="space-y-8">

              {/* Heading */}
              <div className="fade-in">

                <span
                  className="text-xs tracking-[0.4em] uppercase block mb-4"
                  style={{
                    color: '#F4EBD9',
                    opacity: 0.5,
                    fontFamily: "'Inria Serif', serif",
                  }}
                >
                  Who we are
                </span>

                <h2
                  style={{
                    fontSize: 'clamp(2.5rem, 5vw, 4.5rem)',
                    fontWeight: 700,
                    color: '#F4EBD9',
                    fontFamily: "'Inria Serif', serif",
                    lineHeight: 1,
                  }}
                >
                  About us
                </h2>

              </div>

              {/* Paragraphs */}
              <div className="fade-in space-y-5">

                <p
                  style={{
                    fontFamily: "'Inria Serif', serif",
                    color: '#F4EBD9',
                    opacity: 0.75,
                    fontSize: '1rem',
                    lineHeight: 1.9,
                  }}
                >
                  We're not trying to be dramatic. We just want to spark some
                  curious minds who are out there messing around with this world
                  in the most bizarre ways.
                </p>

                <p
                  style={{
                    fontFamily: "'Inria Serif', serif",
                    color: '#F4EBD9',
                    opacity: 0.6,
                    fontSize: '1rem',
                    lineHeight: 1.9,
                  }}
                >
                  We're not here for attention. We just want to be heard. We're
                  not the strange ones. We're the ordinary ones with creative
                  minds and a few chaotic thoughts.
                </p>

                <p
                  style={{
                    fontFamily: "'Inria Serif', serif",
                    color: '#F4EBD9',
                    opacity: 0.75,
                    fontSize: '1rem',
                    lineHeight: 1.9,
                    fontStyle: 'italic',
                  }}
                >
                  We don't want people to only dream big. We want them to believe
                  in us, because together we can actually achieve something big!
                </p>

              </div>

              {/* Footer Quote */}
              <div className="fade-in pt-6">

                <div className="h-px bg-[#C9A96E]/20 mb-4 w-32" />

                <p
                  style={{
                    fontFamily: "'Inria Serif', serif",
                    color: '#F4EBD9',
                    opacity: 0.7,
                    fontSize: '1.2rem',
                    fontStyle: 'italic',
                  }}
                >
                  — From the Other Side
                </p>

              </div>

            </div>

          </div>
        </div>
      </div>
    </section>
  )
}