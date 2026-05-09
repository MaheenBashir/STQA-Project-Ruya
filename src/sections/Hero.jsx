import { useEffect, useRef } from 'react'

export default function Hero() {
  const ref = useRef()

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) =>
        entries.forEach((e) => {
          if (e.isIntersecting) e.target.classList.add('visible')
        }),
      { threshold: 0.05 }
    )

    ref.current?.querySelectorAll('.fade-in').forEach((el) =>
      observer.observe(el)
    )

    return () => observer.disconnect()
  }, [])

  return (
    <section
      id="home"
      ref={ref}
      className="relative overflow-visible bg-[#F4EBD9]"
    >

      {/* Background Images */}
      <div
        className="relative flex w-full overflow-hidden"
        style={{
          height: '88vh',
          minHeight: '520px',
        }}
      >

        {/* Left Background */}
        <div
          className="relative overflow-hidden"
          style={{ width: '22%' }}
        >
          <img
            src="/images/hero-main.jpg"
            alt=""
            className="w-full h-full object-cover object-left"
            style={{
              filter: 'brightness(0.45)',
            }}
          />
        </div>

        {/* Center Background */}
        <div className="relative flex-1 overflow-hidden">
          <img
            src="/images/hero-main.jpg"
            alt=""
            className="w-full h-full object-cover object-center"
            style={{
              filter: 'brightness(0.72)',
            }}
          />
        </div>

        {/* Right Background */}
        <div
          className="relative overflow-hidden"
          style={{ width: '22%' }}
        >
          <img
            src="/images/chess-books.jpg"
            alt=""
            className="w-full h-full object-cover"
            style={{
              filter: 'brightness(0.5)',
            }}
          />
        </div>
      </div>

     {/* Stacked Floating Cards */}
<div
  className="relative flex justify-center"
  style={{
    marginTop: '-80px',
    zIndex: 20,
    paddingBottom: '40px',
  }}
>

  {/* Wrapper to hold both cards side by side */}
  <div className="relative flex items-end">

    {/* Small Half Card — peeking out from the left, rotated */}
    <div
      className="fade-in shadow-2xl"
      style={{
        padding: '8px 8px 8px',
        width: '140px',
        backgroundColor: '#52382C',
        borderRadius: '10px',
        marginRight: '-25px',
        zIndex: 10,
        transform: 'rotate(-6deg)',
        transformOrigin: 'bottom right',
        marginBottom: '20px',
        flexShrink: 0,
      }}
    >
      <img
        src="/images/writer-desk.jpg"
        alt="Writer"
        className="w-full object-cover rounded-md"
        style={{
          height: '175px',
          objectPosition: 'center',
        }}
      />
    </div>

    {/* Main Card — the big one in front, perfectly straight */}
    <div
      className="fade-in shadow-2xl"
      style={{
        padding: '10px 10px 10px',
        width: '320px',
        backgroundColor: '#52382C',
        borderRadius: '10px',
        zIndex: 20,
        position: 'relative',
        flexShrink: 0,
      }}
    >
      <img
        src="/images/writer-desk.jpg"
        alt="Writer Desk"
        className="w-full object-cover rounded-md"
        style={{
          height: '280px',
          objectPosition: 'center',
        }}
      />
    </div>

  </div>
</div>
</section>
  )
}