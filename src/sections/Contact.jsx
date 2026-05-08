import { useEffect, useRef, useState } from 'react'

export default function Contact() {
  const ref = useRef()
  const [faqOpen, setFaqOpen] = useState(null)

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

  const faqs = [
    { q: 'How do I submit my work?', a: 'Email your submission to ruya_pk@gmail.com with the subject line "Submission – [Your Name]". Include your piece and a short bio.' },
    { q: 'What genres do you accept?', a: 'Poetry, prose, personal essays, visual poetry, and experimental writing. We welcome any form that carries genuine emotion.' },
    { q: 'Is there a submission fee?', a: 'No. Ruya is a sanctuary for the underrated and unheard. Submission is always free.' },
    { q: 'When is the next open call?', a: 'We open new calls with each issue. Follow @ruya.pk on Instagram for announcements.' },
  ]

  return (
    <section
      id="contact"
      ref={ref}
      className="bg-[#FAF5EC] py-24 px-6"
    >
      <div className="max-w-6xl mx-auto">

        <div className="fade-in mb-4">
          <button
            onClick={() => document.getElementById('blog')?.scrollIntoView({ behavior: 'smooth' })}
            className="font-body text-xs tracking-[0.3em] uppercase text-[#6B1A1A]/40 hover:text-[#6B1A1A] transition-colors"
          >
            ← The Gallery
          </button>
        </div>

        <div className="fade-in mb-14">
          <h2
            className="font-display italic text-[#6B1A1A]"
            style={{ fontSize: 'clamp(3rem, 8vw, 6rem)', fontWeight: 300 }}
          >
            Contact Us
          </h2>
          <div className="h-px bg-[#6B1A1A]/15 mt-4" />
        </div>

        <div className="grid md:grid-cols-2 gap-16">

          {/* Left – mailbox image + tagline */}
          <div className="fade-in space-y-8">
            <div className="overflow-hidden shadow-xl">
              <img
                src="/images/mailbox.jpg"
                alt="Send us a letter"
                className="w-full h-80 object-cover hover:scale-105 transition-transform duration-700"
                style={{ filter: 'sepia(10%) brightness(0.95)' }}
              />
            </div>
            <div>
              <p className="font-body italic text-[#1A0C0C]/70 text-xl leading-relaxed">
                Contact us freely.
                <br />
                We're here for the dreamers who
                <br />
                express what others can't name.
              </p>
            </div>
          </div>

          {/* Right – FAQ + social */}
          <div className="space-y-10">

            <div className="fade-in">
              <h3 className="font-display text-[#1A0C0C] text-2xl mb-6" style={{ fontWeight: 400 }}>
                FAQ
              </h3>
              <div className="space-y-1">
                {faqs.map((faq, i) => (
                  <div key={i} className="border-b border-[#1A0C0C]/10">
                    <button
                      onClick={() => setFaqOpen(faqOpen === i ? null : i)}
                      className="w-full text-left py-4 flex justify-between items-center group"
                    >
                      <span className="font-body text-[#1A0C0C]/80 text-sm group-hover:text-[#6B1A1A] transition-colors duration-200">
                        {faq.q}
                      </span>
                      <span className="text-[#6B1A1A]/60 text-lg ml-4">
                        {faqOpen === i ? '−' : '+'}
                      </span>
                    </button>
                    {faqOpen === i && (
                      <p className="font-body text-[#1A0C0C]/60 text-sm leading-relaxed pb-4 pr-8">
                        {faq.a}
                      </p>
                    )}
                  </div>
                ))}
              </div>
            </div>

            <div className="fade-in">
              <h3 className="font-display text-[#1A0C0C] text-2xl mb-4" style={{ fontWeight: 400 }}>
                Social Links
              </h3>
              <div className="space-y-3">
                {[
                  { label: 'Instagram', handle: '@ruya.pk', href: '#' },
                  { label: 'Twitter', handle: '@Ruya.pk', href: '#' },
                  { label: 'Email', handle: 'ruya_pk@gmail.com', href: 'mailto:ruya_pk@gmail.com' },
                ].map(({ label, handle, href }) => (
                  <a
                    key={label}
                    href={href}
                    className="flex items-center gap-4 group"
                  >
                    <span className="font-body text-xs tracking-[0.25em] uppercase text-[#1A0C0C]/40 w-20">
                      {label}
                    </span>
                    <span className="font-body text-[#1A0C0C]/70 group-hover:text-[#6B1A1A] transition-colors duration-200 text-sm">
                      {handle}
                    </span>
                  </a>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
