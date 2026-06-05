import { useEffect } from 'react'
import { Outlet } from 'react-router-dom'
import Navigation from './Navigation'
import Footer from './Footer'
import Breadcrumb from './Breadcrumb'

export default function Layout() {
  useEffect(() => {
    window.scrollTo(0, 0)
  }, [])

  return (
    <div className="min-h-screen flex flex-col">
      {/* WCAG 2.4.1: Skip navigation link */}
      <a href="#main-content" className="skip-link">
        Skip to main content
      </a>
      <Navigation />
      <Breadcrumb />
      <main id="main-content" className="flex-1" tabIndex={-1}>
        <Outlet />
      </main>
      <Footer />
    </div>
  )
}
