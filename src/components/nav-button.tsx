"use client"
import './nav-button.css'

interface NavButtonProps {
  children: React.ReactNode
  onClick?: () => void
  className?: string
  variant?: 'light' | 'medium' | 'dark'
}

const NavButton = ({ children, onClick, className = "", variant = 'medium' }: NavButtonProps) => {
  return (
    <button
      onClick={onClick}
      className={`nav-button nav-button-${variant} ${className}`}
    >
      <span style={{ position: 'relative', zIndex: 10 }}>
        {children}
      </span>
    </button>
  )
}

export default NavButton