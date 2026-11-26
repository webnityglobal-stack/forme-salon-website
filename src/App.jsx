
import { Routes, Route, useLocation } from 'react-router-dom'
import { useEffect } from 'react'

import Header from './components/Header'
import Footer from './components/Footer'
import Home from './pages/Home'
import Services from './pages/Services'
import Book from './pages/Book'

function ScrollTop() {
  const { pathname } = useLocation()

  useEffect(() => {
    window.scrollTo(0, 0)
  }, [pathname])

  return null
}

export default function App() {
  return (
    <>
      <ScrollTop />

      <Header />

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/services" element={<Services />} />
        <Route path="/book" element={<Book />} />
        <Route path="*" element={<Home />} />
      </Routes>

      <Footer />
    </>
  )
}
