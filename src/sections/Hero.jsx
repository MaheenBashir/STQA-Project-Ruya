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
    marginTop: '-100px',
    zIndex: 20,
  }}
>

  {/* Wrapper to hold both cards side by side */}
  <div className="relative flex items-end">

    {/* Small Half Card — peeking out from the left */}
    <div
      className="fade-in shadow-2xl"
      style={{
        padding: '10px 10px 5px',
        width: '180px',              
        backgroundColor: '#52382C',
        borderRadius: '10px',
        marginRight: '-30px',        
        zIndex: 10,
        transform: 'rotate(-5deg)',  
        transformOrigin: 'bottom right',
        marginBottom: '10px',
      }}
    >
      <img
        src="/images/hero-main.jpg"   
        alt="Secondary Image"
        className="w-full object-cover rounded-md"
        style={{
          height: '220px',
        }}
      />
      <p className="text-center py-2 text-[#F4EBD9]/70 text-xs tracking-[0.3em] uppercase">
        Image
      </p>
    </div>

    {/* Main Card — the big one in front */}
    <div
      className="fade-in shadow-2xl"
      style={{
        padding: '10px 10px 5px',
        width: '380px',
        backgroundColor: '#52382C',
        borderRadius: '10px',
        zIndex: 20,
        position: 'relative',
      }}
    >
      <img
        src="/images/writer-desk.jpg"
        alt="Writer Desk"
        className="w-full object-cover rounded-md"
        style={{
          height: '320px',
        }}
      />
      <p className="text-center py-3 text-[#F4EBD9]/70 text-xs tracking-[0.3em] uppercase">
        Image
      </p>
    </div>

  </div>
</div>   
</section>
  )
}