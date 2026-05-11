import { useEffect, useRef, useState, useCallback } from 'react'

const ISSUES = [
  { id: 1, title: 'Midwinter Echoes', date: 'January 2025', tag: 'Prose', desc: 'A quiet collection of dream-worn reflections and candle-lit memories.', full: '/mockups/Ruya Edit 1.png' },
  { id: 2, title: 'Tides of February', date: 'February 2025', tag: 'Ocean Symbolism', desc: 'Poems and pieces shaped by deep waters, constellations, and tender longing.', full: '/mockups/Ruya Edit 2.png' },
  { id: 3, title: 'Hearts & Letters', date: 'March 2025', tag: 'Visual Poetry', desc: 'Explorations of shadow, softness, and the fragile moments between day and night.', full: '/mockups/Ruya Edit 3.png' },
  { id: 4, title: 'Blurred Silhouettes', date: 'April 2025', tag: 'Poetry', desc: 'A study of distance, identity, and the quiet spaces we inhabit.', full: '/mockups/Ruya Edit 4.png' },
  { id: 5, title: 'Nocturne in Ink', date: 'May 2025', tag: 'Dark Academia', desc: 'Dark, minimal meditations written in the language of night.', full: '/mockups/Ruya Edit 5.png' },
  { id: 6, title: 'Pastoral Fragments', date: 'June 2025', tag: 'Nostalgia & Memory', desc: 'A collage of memory, landscape, and the soft stories hidden in the countryside.', full: '/mockups/Ruya Edit 6.png' },
  { id: 7, title: 'Rooms of Light', date: 'July 2025', tag: 'Feminine Softness', desc: 'An intimate visual diary of stillness, femininity, and luminous spaces.', full: '/mockups/Ruya Edit 7.png' },
  { id: 8, title: 'Ink & Reverie', date: 'August 2025', tag: 'Sketchbook Visuals', desc: 'A swirling mix of sketches, handwritten thoughts, and restless imagination.', full: '/mockups/Ruya Edit 8.png' },
  { id: 9, title: 'Letters from Another Summer', date: 'September 2025', tag: 'Vintage Storytelling', desc: 'Vintage notes, sun-worn facades, and stories pressed into postcards.', full: '/mockups/Ruya Edit 9.png' },
]

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
        Click outside · ESC to close
      </p>
    </div>
  )
}

