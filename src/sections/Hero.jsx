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

      </div>

     {/* Stacked Floating Cards */}
      <div
        className="relative flex justify-center"
        style={{
          marginTop: '-100px',
          zIndex: 20,
          paddingBottom: '40px',
        }}
      >
        <div className="relative flex items-end justify-center">

          {/* Small card — straight, half hidden behind big card */}
          <div
            className="fade-in shadow-2xl"
            style={{
              padding: '8px',
              width: '160px',
              backgroundColor: '#52382C',
              borderRadius: '10px',
              position: 'absolute',
              left: '-80px',
              bottom: '60px',
              zIndex: 10,
            }}
          >
            <img
              src="/images/writer-desk.jpg"
              alt=""
              className="w-full object-cover rounded-md"
              style={{
                height: '200px',
                objectPosition: 'center',
              }}
            />
          </div>

          {/* Main card — straight, in front */}
          <div
            className="fade-in shadow-2xl"
            style={{
              padding: '10px',
              width: '300px',
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
                height: '280px',
                objectPosition: 'center',
              }}
            />
          </div>

        </div>
      </div>
    </section> 
    )}