import { useParams, Link } from 'react-router-dom'
import { useEffect, useRef, useState } from 'react'

const ISSUES = [
  {
    id: 1,
    title: 'Midwinter Echoes',
    date: 'January 2025',
    tag: 'Prose',
    desc: 'A quiet collection of dream-worn reflections and candle-lit memories.',
    img: '/cards/card1.png',
    pdf: '/Magazine_pdf_final.pdf',
    mockup: '/mockups/Ruya Edit 1.png',
    color: '#7C4A3A',
  },
  {
    id: 2,
    title: 'Tides of February',
    date: 'February 2025',
    tag: 'Ocean Symbolism',
    desc: 'Poems and pieces shaped by deep waters, constellations, and tender longing.',
    img: '/cards/card2.png',
    pdf: '/Magazine_pdf_final.pdf',
    mockup: '/mockups/Ruya Edit 2.png',
    color: '#3A5A7C',
  },
  {
    id: 3,
    title: 'Hearts & Letters',
    date: 'March 2025',
    tag: 'Visual Poetry',
    desc: 'Explorations of shadow, softness, and the fragile moments between day and night.',
    img: '/cards/card3.png',
    pdf: '/Magazine_pdf_final.pdf',
    mockup: '/mockups/Ruya Edit 3.png',
    color: '#7C3A4A',
  },
  {
    id: 4,
    title: 'Blurred Silhouettes',
    date: 'April 2025',
    tag: 'Poetry',
    desc: 'A study of distance, identity, and the quiet spaces we inhabit.',
    img: '/cards/card4.png',
    pdf: '/Magazine_pdf_final.pdf',
    mockup: '/mockups/Ruya Edit 4.png',
    color: '#4A3A7C',
  },
  {
    id: 5,
    title: 'Nocturne in Ink',
    date: 'May 2025',
    tag: 'Dark Academia',
    desc: 'Dark, minimal meditations written in the language of night.',
    img: '/cards/card5.png',
    pdf: '/Magazine_pdf_final.pdf',
    mockup: '/mockups/Ruya Edit 5.png',
    color: '#2A2A2A',
  },
  {
    id: 6,
    title: 'Pastoral Fragments',
    date: 'June 2025',
    tag: 'Nostalgia & Memory',
    desc: 'A collage of memory, landscape, and the soft stories hidden in the countryside.',
    img: '/cards/card6.png',
    pdf: '/Magazine_pdf_final.pdf',
    mockup: '/mockups/Ruya Edit 6.png',
    color: '#3A5A3A',
  },
  {
    id: 7,
    title: 'Rooms of Light',
    date: 'July 2025',
    tag: 'Feminine Softness',
    desc: 'An intimate visual diary of stillness, femininity, and luminous spaces.',
    img: '/cards/card7.png',
    pdf: '/Magazine_pdf_final.pdf',
    mockup: '/mockups/Ruya Edit 7.png',
    color: '#7C6A3A',
  },
  {
    id: 8,
    title: 'Ink & Reverie',
    date: 'August 2025',
    tag: 'Sketchbook Visuals',
    desc: 'A swirling mix of sketches, handwritten thoughts, and restless imagination.',
    img: '/cards/card8.png',
    pdf: '/Magazine_pdf_final.pdf',
    mockup: '/mockups/Ruya Edit 8.png',
    color: '#5A3A2A',
  },
  {
    id: 9,
    title: 'Letters from Another Summer',
    date: 'September 2025',
    tag: 'Vintage Storytelling',
    desc: 'Vintage notes, sun-worn facades, and stories pressed into postcards.',
    img: '/cards/card9.png',
    pdf: '/Magazine_pdf_final.pdf',
    mockup: '/mockups/Ruya Edit 9.png',
    color: '#6A5A3A',
  },
]

export default function IssuePage() {
  const { id } = useParams()
  const issueId = parseInt(id, 10)
  const issue = ISSUES.find((i) => i.id === issueId)
  const [activeTab, setActiveTab] = useState('mockup')
  const headerRef = useRef()

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'smooth' })
    // Animate header in
    const timer = setTimeout(() => {
      headerRef.current?.classList.add('visible')
    }, 100)
    return () => clearTimeout(timer)
  }, [issueId])

  if (!issue) {
    return (
      <div
        className="min-h-screen flex flex-col items-center justify-center gap-6"
        style={{ backgroundColor: '#0d0606' }}
      >
        <p className="font-display text-[#F4EDE0]/50 text-2xl">Issue not found.</p>
        <Link
          to="/"
          className="font-body text-xs tracking-[0.3em] uppercase text-[#C9A96E] border border-[#C9A96E]/30 px-6 py-2 hover:bg-[#C9A96E]/10 transition-colors"
        >
          ← Back to Gallery
        </Link>
      </div>
    )
  }

  const prevIssue = ISSUES.find((i) => i.id === issueId - 1)
  const nextIssue = ISSUES.find((i) => i.id === issueId + 1)

  return (
    <div style={{ backgroundColor: '#0d0606', minHeight: '100vh' }}>

      {/* Hero banner */}
      <div className="relative overflow-hidden" style={{ height: '320px' }}>
        <img
          src={issue.img}
          alt={issue.title}
          className="w-full h-full object-cover"
          style={{ filter: 'brightness(0.35) saturate(0.8) sepia(15%)' }}
        />
        {/* Gradient overlay */}
        <div
          className="absolute inset-0"
          style={{
            background: `linear-gradient(to bottom, rgba(13,6,6,0.3) 0%, rgba(13,6,6,0.85) 100%)`,
          }}
        />
        {/* Vignette */}
        <div
          className="absolute inset-0"
          style={{
            background: 'radial-gradient(ellipse at center, transparent 40%, rgba(8,2,2,0.8) 100%)',
          }}
        />

        {/* Back button */}
        <div className="absolute top-6 left-6 z-20">
          <Link
            to="/#blog"
            className="inline-flex items-center gap-2 font-body text-xs tracking-[0.25em] uppercase text-[#F4EDE0]/60 hover:text-[#C9A96E] transition-colors duration-300"
          >
            <span style={{ fontSize: '16px' }}>←</span> The Ruya Gallery
          </Link>
        </div>

        {/* Issue header content */}
        <div
          ref={headerRef}
          className="fade-in absolute bottom-0 left-0 right-0 px-8 pb-8 z-10"
        >
          <div className="max-w-5xl mx-auto">
            <div className="flex items-center gap-3 mb-3">
              <span
                className="font-body text-xs tracking-[0.2em] uppercase px-2 py-1"
                style={{
                  color: '#C9A96E',
                  border: '1px solid rgba(201,169,110,0.3)',
                  background: 'rgba(201,169,110,0.08)',
                }}
              >
                {issue.tag}
              </span>
              <span className="font-body text-[#F4EDE0]/40 text-xs tracking-widest">{issue.date}</span>
            </div>
            <h1
              className="font-display text-[#FAF5EC] mb-2"
              style={{ fontSize: 'clamp(2rem, 5vw, 3.5rem)', fontWeight: 400, lineHeight: 1.1 }}
            >
              {issue.title}
            </h1>
            <p className="font-body text-[#F4EDE0]/55 text-sm max-w-lg">{issue.desc}</p>
          </div>
        </div>
      </div>

      {/* Tab switcher */}
      <div
        className="sticky top-0 z-30 flex items-center gap-0 border-b"
        style={{
          backgroundColor: 'rgba(13,6,6,0.97)',
          backdropFilter: 'blur(12px)',
          borderColor: 'rgba(201,169,110,0.12)',
        }}
      >
        <div className="max-w-5xl mx-auto w-full flex items-center px-8">
          {[
            { key: 'mockup', label: 'Mockup Layout' },
            { key: 'magazine', label: 'Magazine PDF' },
          ].map((tab) => (
            <button
              key={tab.key}
              onClick={() => setActiveTab(tab.key)}
              className="font-body text-xs tracking-[0.25em] uppercase py-4 px-6 transition-all duration-300 relative"
              style={{
                color: activeTab === tab.key ? '#C9A96E' : 'rgba(244,237,224,0.4)',
                borderBottom: activeTab === tab.key ? '2px solid #C9A96E' : '2px solid transparent',
                marginBottom: '-1px',
              }}
            >
              {tab.label}
            </button>
          ))}

          <div className="flex-1" />

          {/* Download link */}
          <a
            href={activeTab === 'mockup' ? issue.mockup : issue.pdf}
            download
            className="font-body text-xs tracking-[0.2em] uppercase text-[#F4EDE0]/30 hover:text-[#C9A96E] transition-colors duration-300 py-4 px-2"
          >
            ↓ Download
          </a>
        </div>
      </div>

      {/* PDF Viewer */}
      <div className="max-w-5xl mx-auto px-4 py-10">
        <div
          className="relative overflow-hidden"
          style={{
            border: '1px solid rgba(201,169,110,0.15)',
            background: 'rgba(255,255,255,0.02)',
            minHeight: '80vh',
          }}
        >
          {/* PDF embed */}
          <iframe
            key={activeTab}
            src={`${activeTab === 'mockup' ? issue.mockup : issue.pdf}#toolbar=1&navpanes=0&view=FitH`}
            title={`${issue.title} — ${activeTab === 'mockup' ? 'Mockup Layout' : 'Magazine PDF'}`}
            className="w-full"
            style={{
              height: '85vh',
              border: 'none',
              display: 'block',
            }}
          />
        </div>

        {/* Fallback open link */}
        <p className="font-body text-[#F4EDE0]/25 text-xs text-center mt-4 tracking-wide">
          Having trouble viewing?{' '}
          <a
            href={activeTab === 'mockup' ? issue.mockup : issue.pdf}
            target="_blank"
            rel="noopener noreferrer"
            className="text-[#C9A96E]/60 hover:text-[#C9A96E] underline transition-colors"
          >
            Open in new tab
          </a>
        </p>
      </div>

      {/* Issue navigation */}
      <div
        className="border-t mt-4"
        style={{ borderColor: 'rgba(201,169,110,0.1)' }}
      >
        <div className="max-w-5xl mx-auto px-8 py-10 flex items-center justify-between gap-6">
          {prevIssue ? (
            <Link
              to={`/issue/${prevIssue.id}`}
              className="group flex flex-col gap-1 max-w-xs"
            >
              <span className="font-body text-xs tracking-[0.25em] uppercase text-[#F4EDE0]/30 group-hover:text-[#C9A96E]/60 transition-colors">
                ← Previous Issue
              </span>
              <span className="font-display text-[#FAF5EC]/70 text-lg group-hover:text-[#C9A96E] transition-colors" style={{ fontWeight: 400 }}>
                {prevIssue.title}
              </span>
              <span className="font-body text-[#F4EDE0]/30 text-xs">{prevIssue.date} · {prevIssue.tag}</span>
            </Link>
          ) : <div />}

          <Link
            to="/#blog"
            className="font-body text-xs tracking-[0.3em] uppercase text-[#F4EDE0]/40 border border-[#F4EDE0]/10 px-5 py-2 hover:border-[#C9A96E]/30 hover:text-[#C9A96E] transition-all duration-300 whitespace-nowrap"
          >
            All Issues
          </Link>

          {nextIssue ? (
            <Link
              to={`/issue/${nextIssue.id}`}
              className="group flex flex-col gap-1 max-w-xs text-right"
            >
              <span className="font-body text-xs tracking-[0.25em] uppercase text-[#F4EDE0]/30 group-hover:text-[#C9A96E]/60 transition-colors">
                Next Issue →
              </span>
              <span className="font-display text-[#FAF5EC]/70 text-lg group-hover:text-[#C9A96E] transition-colors" style={{ fontWeight: 400 }}>
                {nextIssue.title}
              </span>
              <span className="font-body text-[#F4EDE0]/30 text-xs">{nextIssue.date} · {nextIssue.tag}</span>
            </Link>
          ) : <div />}
        </div>
      </div>

      {/* Footer strip */}
      <div
        className="text-center py-6 border-t font-body text-[#F4EDE0]/20 text-xs tracking-[0.3em] uppercase"
        style={{ borderColor: 'rgba(201,169,110,0.07)' }}
      >
        Ruya · Stories Beneath the Skin
      </div>
    </div>
  )
}
