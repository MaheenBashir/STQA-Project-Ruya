export default function Footer() {
  return (
    <footer className="bg-[#FAF5EC] px-6 pb-12">
      <div className="max-w-4xl mx-auto">

        {/* Promise box */}
        <div className="border border-[#1A0C0C]/15 p-10 md:p-14 text-center mb-12">

          {/* Open book SVG icon */}
          <div className="flex justify-center mb-6">
            <svg width="36" height="36" viewBox="0 0 36 36" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M5 5h11a2 2 0 0 1 2 2v22H5V5z" stroke="#6B1A1A" strokeWidth="1.2" fill="none"/>
              <path d="M18 7h11a2 2 0 0 1 2 2v20a2 2 0 0 1-2 2H18V7z" stroke="#6B1A1A" strokeWidth="1.2" fill="none"/>
              <path d="M9 12h7M9 16h7M9 20h5" stroke="#6B1A1A" strokeWidth="0.9" strokeLinecap="round"/>
              <path d="M21 12h7M21 16h7M21 20h5" stroke="#6B1A1A" strokeWidth="0.9" strokeLinecap="round"/>
            </svg>
          </div>

          <p className="font-body text-xs tracking-[0.4em] uppercase text-[#1A0C0C]/40 mb-4">
            Our Promise to you.
          </p>

          <p className="font-body text-[#1A0C0C]/70 text-base leading-relaxed max-w-xl mx-auto">
            This magazine will remain a sanctuary for the underrated and the
            unheard. No matter the theme or season, your words will always find
            a home here.
          </p>

          {/* Three bottom images — full size display */}
          <div className="grid grid-cols-3 gap-3 mt-10">
            {[
              '/images/old-books.jpg',
              '/images/dried-roses.jpg',
              '/images/chess-books.jpg',
            ].map((src, i) => (
              <div key={i} className="overflow-hidden" style={{ border: '1px solid rgba(26,12,12,0.08)' }}>
                <img
                  src={src}
                  alt=""
                  className="w-full object-cover hover:scale-102 hover:opacity-90 transition-all duration-500"
                  style={{
                    height: '200px',
                    display: 'block',
                    opacity: 0.82,
                    filter: 'sepia(10%) brightness(0.95)',
                  }}
                />
              </div>
            ))}
          </div>
        </div>

        {/* Signature */}
        <div className="text-center">
          <p className="font-script text-[#6B1A1A] text-4xl">Ruya.</p>
          <p className="font-body text-xs tracking-[0.4em] uppercase text-[#1A0C0C]/30 mt-2">
            Stories Beneath the Skin · {new Date().getFullYear()}
          </p>
        </div>
      </div>
    </footer>
  )
}
