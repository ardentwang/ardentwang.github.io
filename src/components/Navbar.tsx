"use client"
import React from 'react';
import { useRouter } from 'next/navigation';
import NavButton from './nav-button';
import ThemeToggle from './theme-toggle';

const Navbar = () => {
  const router = useRouter();
  
  const navLinks = [
    { href: '/about', text: 'About', variant: 'light' },
    { href: '/projects', text: 'Projects', variant: 'light' },
    { href: '/work', text: 'Work', variant: 'light' },
    { href: '/contact', text: 'Contact', variant: 'light' }

  ];

  return (
    <nav className="fixed top-0 w-full z-50 bg-[#ff7979] dark:bg-[#342e2e] shadow-lg">
      <div className="max-w-6xl mx-auto px-6 py-6">
        <div className="flex justify-between items-center">
          <div className="text-2xl font-bold text-white">
            Arden Wang
          </div>
          <div className="flex items-center gap-10">
            <div className="hidden md:flex nav-buttons-container">
              {navLinks.map((link, index) => (
                <NavButton
                  key={index}
                  variant={link.variant as "light" | "medium" | "dark"}
                  onClick={() => router.push(link.href)}
                >
                  {link.text}
                </NavButton>
              ))}
            </div>
            <ThemeToggle />
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;