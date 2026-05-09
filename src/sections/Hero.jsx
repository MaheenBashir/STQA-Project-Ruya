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

      </div>

     {/* Floating Card */}
<div
  className="relative flex justify-center"
  style={{
    marginTop: '-80px',
    zIndex: 20,
    paddingBottom: '40px',
  }}
>
  {/* Main Card only — straight and centered */}
  <div
    className="fade-in shadow-2xl"
    style={{
      padding: '10px 10px 10px',
      width: '320px',
      backgroundColor: '#52382C',
      borderRadius: '10px',
      zIndex: 20,
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
</section> )}