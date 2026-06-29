import { useLayoutEffect } from 'react'
import { Outlet, useLocation } from 'react-router-dom'
import Navigation from './Navigation'
import Breadcrumbs from './Breadcrumbs'
import Footer from './Footer'

export default function Layout() {
  const { pathname, search } = useLocation()

  // useLayoutEffect, not useEffect: runs synchronously before the browser
  // paints, so the new page never flashes at the old scroll position first.
  // behavior must be 'instant', not 'auto' - 'auto' defers to the global
  // `scroll-behavior: smooth` CSS rule and animates to the top instead of
  // snapping there immediately.
  useLayoutEffect(() => {
    window.scrollTo({ top: 0, left: 0, behavior: 'instant' })
  }, [pathname, search])

  return (
    <div className="min-h-screen flex flex-col">
      {/* WCAG 2.4.1: Skip navigation link */}
      <a href="#main-content" className="skip-link">
        Skip to main content
      </a>
      <Navigation />
      <Breadcrumbs />
      <main id="main-content" className="flex-1" tabIndex={-1}>
        <Outlet />
      </main>
      <Footer />
    </div>
  )
}
