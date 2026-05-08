import { useState, useEffect, useRef, useCallback } from 'react'

const ISSUES = [
  {
    id: 1,
    title: 'Midwinter Echoes',
    date: 'January 2025',
    tag: 'Prose',
    desc: 'A quiet collection of dream-worn reflections and candle-lit memories.',
    thumb: '/cards/card1.png',
    full: '/mockups/Ruya Edit 1.png',
  },
  {
    id: 2,
    title: 'Tides of February',
    date: 'February 2025',
    tag: 'Ocean Symbolism',
    desc: 'Poems and pieces shaped by deep waters, constellations, and tender longing.',
    thumb: '/cards/card2.png',
    full: '/mockups/Ruya Edit 2.png',
  },
  {
    id: 3,
    title: 'Hearts & Letters',
    date: 'March 2025',
    tag: 'Visual Poetry',
    desc: 'Explorations of shadow, softness, and the fragile moments between day and night.',
    thumb: '/cards/card3.png',
    full: '/mockups/Ruya Edit 3.png',
  },
  {
    id: 4,
    title: 'Blurred Silhouettes',
    date: 'April 2025',
    tag: 'Poetry',
    desc: 'A study of distance, identity, and the quiet spaces we inhabit.',
    thumb: '/cards/card4.png',
    full: '/mockups/Ruya Edit 4.png',
  },
  {
    id: 5,
    title: 'Nocturne in Ink',
    date: 'May 2025',
    tag: 'Dark Academia',
    desc: 'Dark, minimal meditations written in the language of night.',
    thumb: '/cards/card5.png',
    full: '/mockups/Ruya Edit 5.png',
  },
  {
    id: 6,
    title: 'Pastoral Fragments',
    date: 'June 2025',
    tag: 'Nostalgia & Memory',
    desc: 'A collage of memory, landscape, and the soft stories hidden in the countryside.',
    thumb: '/cards/card6.png',
    full: '/mockups/Ruya Edit 6.png',
  },
  {
    id: 7,
    title: 'Rooms of Light',
    date: 'July 2025',
    tag: 'Feminine Softness',
    desc: 'An intimate visual diary of stillness, femininity, and luminous spaces.',
    thumb: '/cards/card7.png',
    full: '/mockups/Ruya Edit 7.png',
  },
  {
    id: 8,
    title: 'Ink & Reverie',
    date: 'August 2025',
    tag: 'Sketchbook Visuals',
    desc: 'We fell asleep in our town after a long afternoon — though the first thing I did was stow all our bags away, like in a ship cabin. We woke up & showered in the idiosyncratic shower.',
    thumb: '/cards/card8.png',
    full: '/mockups/Ruya Edit 8.png',
  },
  {
    id: 9,
    title: 'Letters from Another Summer',
    date: 'September 2025',
    tag: 'Vintage Storytelling',
    desc: 'Vintage notes, sun-worn facades, and stories pressed into postcards.',
    thumb: '/cards/card9.png',
    full: '/mockups/Ruya Edit 9.png',
  },
]

const PER_PAGE = 3

function Lightbox({ issue, onClose, onPrev, onNext, hasPrev, hasNext }) {
  useEffect(() => {
    const onKey = (e) => {
      if (e.key === 'Escape') onClose()
      if (e.key === 'ArrowLeft' && hasPrev) onPrev()
      if (e.key === 'ArrowRight' && hasNext) onNext()
    }
    window.addEventListener('keydown', onKey)
    document.body.style.overflow = 'hidden'
    return () => {
      window.removeEventListener('keydown', onKey)
      document.body.style.overflow = ''
    }
  }, [onClose, onPrev, onNext, hasPrev, hasNext])

  return (
    <div
      className="fixed inset-0 z-[9999] flex items-center justify-center"
      style={{ backgroundColor: 'rgba(8,2,2,0.96)' }}
      onClick={onClose}
    >
      <div className="absolute inset-0" style={{ backdropFilter: 'blur(10px)' }} />

      <div
        className="relative z-10 flex flex-col mx-4"
        style={{ maxWidth: '900px', width: '100%', maxHeight: '94vh' }}
        onClick={(e) => e.stopPropagation()}
      >
        {/* Top bar */}
        <div
          className="flex items-center justify-between px-5 py-3 flex-shrink-0"
          style={{
            background: 'rgba(13,6,6,0.95)',
            border: '1px solid rgba(201,169,110,0.2)',
            borderBottom: '1px solid rgba(201,169,110,0.1)',
          }}
        >
          <div className="flex items-center gap-3 min-w-0 flex-1">
            <span
              className="font-body text-xs tracking-[0.2em] uppercase px-2 py-0.5 flex-shrink-0"
              style={{ color: '#C9A96E', border: '1px solid rgba(201,169,110,0.3)' }}
            >
              {issue.tag}
            </span>
            <span className="font-body text-[#F4EDE0]/40 text-xs tracking-widest hidden sm:block truncate">
              {issue.date}
            </span>
          </div>

          <h3
            className="font-display text-[#FAF5EC] text-base sm:text-lg absolute left-1/2 -translate-x-1/2 whitespace-nowrap"
            style={{ fontWeight: 400, pointerEvents: 'none' }}
          >
            {issue.title}
          </h3>

          <button
            onClick={onClose}
            className="w-8 h-8 flex items-center justify-center text-[#F4EDE0]/50 hover:text-[#FAF5EC] transition-colors duration-200 ml-auto flex-shrink-0"
            style={{ fontSize: '22px', lineHeight: 1, fontFamily: 'sans-serif' }}
            aria-label="Close"
          >
            ×
          </button>
        </div>

        {/* Image area */}
        <div
          className="relative flex items-center justify-center overflow-auto flex-1"
          style={{
            border: '1px solid rgba(201,169,110,0.15)',
            borderTop: 'none',
            borderBottom: 'none',
            background: 'rgba(8,2,2,0.6)',
            minHeight: 0,
          }}
        >
          <img
            src={issue.full}
            alt={issue.title}
            className="max-w-full"
            style={{ maxHeight: 'calc(94vh - 120px)', objectFit: 'contain', display: 'block' }}
            draggable={false}
          />

          {hasPrev && (
            <button
              onClick={(e) => { e.stopPropagation(); onPrev() }}
              className="absolute left-3 top-1/2 -translate-y-1/2 w-10 h-10 flex items-center justify-center group"
              style={{ background: 'rgba(8,2,2,0.8)', border: '1px solid rgba(201,169,110,0.25)' }}
            >
              <span className="text-[#C9A96E]/60 group-hover:text-[#C9A96E] transition-colors text-lg">←</span>
            </button>
          )}
          {hasNext && (
            <button
              onClick={(e) => { e.stopPropagation(); onNext() }}
              className="absolute right-3 top-1/2 -translate-y-1/2 w-10 h-10 flex items-center justify-center group"
              style={{ background: 'rgba(8,2,2,0.8)', border: '1px solid rgba(201,169,110,0.25)' }}
            >
              <span className="text-[#C9A96E]/60 group-hover:text-[#C9A96E] transition-colors text-lg">→</span>
            </button>
          )}
        </div>

        {/* Bottom bar */}
        <div
          className="flex items-center justify-between px-5 py-3 flex-shrink-0"
          style={{
            background: 'rgba(13,6,6,0.95)',
            border: '1px solid rgba(201,169,110,0.2)',
            borderTop: '1px solid rgba(201,169,110,0.1)',
          }}
        >
          <p className="font-body text-[#F4EDE0]/40 text-xs leading-relaxed max-w-lg hidden sm:block">
            {issue.desc}
          </p>
          <div className="flex items-center gap-3 ml-auto flex-shrink-0">
            <span className="font-body text-[#F4EDE0]/20 text-xs hidden sm:block">
              {issue.id} / {ISSUES.length}
            </span>
            <button
              onClick={onClose}
              className="font-body text-xs tracking-[0.25em] uppercase px-4 py-1.5 transition-all duration-200 hover:bg-[#C9A96E]/10"
              style={{ color: '#C9A96E', border: '1px solid rgba(201,169,110,0.3)' }}
            >
              Close
            </button>
          </div>
        </div>
      </div>

      <p className="absolute bottom-3 left-1/2 -translate-x-1/2 font-body text-[#F4EDE0]/12 text-xs tracking-[0.2em] pointer-events-none select-none hidden md:block">
        Click outside · ESC to close · ← → to navigate
      </p>
    </div>
  )
}

export default function Gallery() {
  const [page, setPage] = useState(1)
  const [lightboxId, setLightboxId] = useState(null)
  const ref = useRef()
  const totalPages = Math.ceil(ISSUES.length / PER_PAGE)
  const visible = ISSUES.slice((page - 1) * PER_PAGE, page * PER_PAGE)

  const lightboxIssue = lightboxId != null ? ISSUES.find((i) => i.id === lightboxId) : null
  const lightboxIdx = lightboxId != null ? ISSUES.findIndex((i) => i.id === lightboxId) : -1

  const openLightbox = useCallback((id) => setLightboxId(id), [])
  const closeLightbox = useCallback(() => setLightboxId(null), [])
  const prevLightbox = useCallback(() => {
    if (lightboxIdx > 0) setLightboxId(ISSUES[lightboxIdx - 1].id)
  }, [lightboxIdx])
  const nextLightbox = useCallback(() => {
    if (lightboxIdx < ISSUES.length - 1) setLightboxId(ISSUES[lightboxIdx + 1].id)
  }, [lightboxIdx])

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => entries.forEach((e) => {
        if (e.isIntersecting) e.target.classList.add('visible')
      }),
      { threshold: 0.05 }
    )
    const timeout = setTimeout(() => {
      ref.current?.querySelectorAll('.fade-in').forEach((el) => {
        el.classList.remove('visible')
        observer.observe(el)
      })
    }, 50)
    return () => { clearTimeout(timeout); observer.disconnect() }
  }, [page])

  const changePage = (p) => {
    setPage(p)
    setTimeout(() => {
      document.getElementById('blog')?.scrollIntoView({ behavior: 'smooth', block: 'start' })
    }, 80)
  }

  return (
    <>
      {lightboxIssue && (
        <Lightbox
          issue={lightboxIssue}
          onClose={closeLightbox}
          onPrev={prevLightbox}
          onNext={nextLightbox}
          hasPrev={lightboxIdx > 0}
          hasNext={lightboxIdx < ISSUES.length - 1}
        />
      )}

      <section
        id="blog"
        ref={ref}
        className="relative py-20 px-6"
        style={{ minHeight: '100vh' }}
      >
        {/* Nihonga background */}
        <div className="absolute inset-0">
          <img
            src="/images/butterflies-burgundy.jpg"
            alt=""
            className="w-full h-full object-cover"
            style={{ filter: 'brightness(0.5) saturate(0.9)' }}
          />
          <div className="absolute inset-0" style={{ background: 'rgba(20,5,10,0.48)' }} />
        </div>
        <div
          className="absolute inset-0 pointer-events-none"
          style={{ background: 'radial-gradient(ellipse at center, transparent 30%, rgba(8,2,2,0.75) 100%)' }}
        />

        <div className="max-w-7xl mx-auto relative z-10">

          {/* Header */}
          <div className="fade-in flex items-start gap-3 mb-2 bg-[rgba(0,0,0,0.18)] p-6 rounded-[22px]">
            <div className="w-4 h-4 border border-[#C9A96E]/50 mt-1 flex-shrink-0" />
            <div className="flex-1">
              <h2 className="font-display text-[#FAF5EC] text-3xl md:text-4xl" style={{ fontWeight: 400 }}>
                The Ruya Gallery
              </h2>
              <p className="font-body text-[#F8EDE3] text-2xl mt-3 tracking-wide">
                Where dreams, confessions, and whispered traces are captured in words.
              </p>
            </div>
            <button
              onClick={() => changePage(1)}
              className="font-body text-xs tracking-[0.3em] uppercase text-[#FAF5EC] border border-[#FAF5EC]/20 px-5 py-2 hover:bg-[#FAF5EC]/10 transition-colors duration-300 whitespace-nowrap"
            >
              Home
            </button>
          </div>

          {/* Pagination info row */}
          <div className="fade-in flex items-center justify-between mb-10 mt-6">
            <p className="font-body text-[#F4EDE0]/40 text-xs tracking-[0.2em]">
              Showing {(page - 1) * PER_PAGE + 1}–{Math.min(page * PER_PAGE, ISSUES.length)} of {ISSUES.length} issues
            </p>
            <div className="h-px flex-1 mx-6 bg-[#C9A96E]/12" />
            <p className="font-body text-[#F4EDE0]/30 text-xs">Page {page} of {totalPages}</p>
          </div>

          {/* Cards grid */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-10 mb-12">
            {visible.map((issue, i) => (
              <button
                key={issue.id}
                onClick={() => openLightbox(issue.id)}
                className="fade-in group cursor-pointer text-left"
                style={{ transitionDelay: `${i * 0.12}s`, background: 'none', border: 'none', padding: 0 }}
              >
                <div
                  className="overflow-hidden transition-all duration-500 h-full"
                  style={{
                    background: '#ccb394',
                    border: '1px solid rgba(40,25,20,0.5)',
                    borderRadius: '24px',
                  }}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.borderColor = 'rgba(201,169,110,0.45)'
                    e.currentTarget.style.boxShadow = '0 8px 32px rgba(201,169,110,0.08)'
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.borderColor = 'rgba(201,169,110,0.18)'
                    e.currentTarget.style.boxShadow = 'none'
                  }}
                >
                  {/* Magazine thumbnail */}
                  <div className="relative overflow-hidden" style={{ height: '230px', padding: '18px 18px 0 18px' }}>
                    <img
                      src={issue.thumb}
                      alt={issue.title}
                      className="w-full h-full object-cover object-top transition-transform duration-700 group-hover:scale-[1.04] rounded-[18px] border border-[#3f342d]"
                      style={{ filter: 'sepia(5%) brightness(0.96)' }}
                    />
                    {/* Hover overlay */}
                    <div
                      className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                      style={{ background: 'rgba(8,2,2,0.5)' }}
                    >
                      <span
                        className="font-body text-xs tracking-[0.35em] uppercase px-4 py-2"
                        style={{
                          color: '#FAF5EC',
                          border: '1px solid rgba(250,245,236,0.55)',
                          background: 'rgba(8,2,2,0.55)',
                        }}
                      >
                        View Issue
                      </span>
                    </div>
                  </div>

                  {/* Card info */}
                  <div className="px-6 pb-6 pt-5 space-y-3">
                    <div className="flex items-center justify-between gap-2">
                      <span
                        className="font-display text-[#2f1d16] text-[1.7rem] group-hover:text-[#E0C080] transition-colors duration-300 truncate"
                        style={{ fontWeight: 400 }}
                      >
                        {issue.title}
                      </span>
                      <span className="font-body text-[#2f1d16] text-4xl flex-shrink-0">→</span>
                    </div>
                    <p className="font-body text-[#2f1d16]/80 text-lg">
                      {issue.date} • {issue.tag}
                    </p>
                    <p className="font-body text-[#2f1d16]/90 text-[1.05rem] leading-relaxed" style={{
                      display: '-webkit-box',
                      WebkitLineClamp: 3,
                      WebkitBoxOrient: 'vertical',
                      overflow: 'hidden',
                    }}>
                      {issue.desc}
                    </p>
                  </div>
                </div>
              </button>
            ))}
          </div>

          {/* Pagination buttons */}
          <div className="fade-in flex items-center justify-center gap-2">
            <button
              onClick={() => changePage(page - 1)}
              disabled={page === 1}
              className="font-body text-[#F4EDE0]/40 disabled:opacity-20 hover:text-[#C9A96E] transition-colors px-2 text-sm"
            >
              &lt;
            </button>
            {Array.from({ length: totalPages }, (_, i) => i + 1).map((p) => (
              <button
                key={p}
                onClick={() => changePage(p)}
                className={`w-8 h-8 font-body text-xs transition-all duration-300 ${
                  p === page
                    ? 'text-[#1A0C0C]'
                    : 'text-[#F4EDE0]/50 hover:text-[#FAF5EC] border border-[#F4EDE0]/10 hover:border-[#F4EDE0]/30'
                }`}
                style={p === page ? { backgroundColor: '#C9A96E' } : {}}
              >
                {p}
              </button>
            ))}
            <button
              onClick={() => changePage(page + 1)}
              disabled={page === totalPages}
              className="font-body text-[#F4EDE0]/40 disabled:opacity-20 hover:text-[#C9A96E] transition-colors px-2 text-sm"
            >
              &gt;
            </button>
          </div>

        </div>
      </section>
    </>
  )
}
