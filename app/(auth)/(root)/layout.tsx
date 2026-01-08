import MobileNav from '@/components/shared/MobileNav'
import Sidebar from '@/components/shared/Sidebar'
import { Toaster } from '@/components/ui/toaster'

/**
 * Invoice AI Root Layout
 * This wraps all internal pages with the Sidebar and Mobile Navigation.
 */
const Layout = ({ children }: { children: React.ReactNode }) => {
  return (
    <main className="root">
      {/* Desktop Navigation */}
      <Sidebar />
      
      {/* Mobile Navigation (Visible on smaller screens) */}
      <MobileNav />

      <div className="root-container">
        <div className="wrapper">
          {/* This is where the Home, Process Invoice, and Profile pages render */}
          {children}
        </div>
      </div>
      
      {/* Notification system for Upload and Processing updates */}
      <Toaster />
    </main>
  )
}

export default Layout