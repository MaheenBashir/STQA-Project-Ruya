import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Navbar from './components/Navbar'
import Hero from './sections/Hero'
import Intro from './sections/Intro'
import About from './sections/About'
import FeaturedWriter from './sections/FeaturedWriter'
import Gallery from './sections/Gallery'
import Contact from './sections/Contact'
import Footer from './sections/Footer'
import IssuePage from './pages/IssuePage'

function HomePage() {
  return (
    <div className="font-body overflow-x-hidden">
      <Navbar />
      <Hero />
      <Intro />
      <About />
      <FeaturedWriter />
      <Gallery />
      <Contact />
      <Footer />
    </div>
  )
}

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/issue/:id" element={<IssuePage />} />
      </Routes>
    </BrowserRouter>
  )
}
