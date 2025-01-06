'use client'

import { useState } from 'react'
import Link from 'next/link'
import { Menu, X } from 'lucide-react'

const Navigation = () => {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <nav className="bg-gray-900 p-4 sticky top-0 z-10">
      <div className="container mx-auto flex justify-between items-center">
        <Link href="/" className="text-2xl font-bold text-green-500 hover:text-green-400 transition-colors">
          <span className="mr-2">&lt;/&gt;</span>
          0xm3m
        </Link>
        <div className="hidden md:flex space-x-6">
          <NavLinks />
        </div>
        <button
          className="md:hidden text-green-500 hover:text-green-400"
          onClick={() => setIsOpen(!isOpen)}
        >
          {isOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>
      {isOpen && (
        <div className="md:hidden mt-4">
          <NavLinks mobile setIsOpen={setIsOpen} />
        </div>
      )}
    </nav>
  )
}

const NavLinks = ({ mobile, setIsOpen }: { mobile?: boolean; setIsOpen?: (isOpen: boolean) => void }) => {
  const linkClass = `block py-2 hover:text-green-400 transition-colors ${mobile ? 'text-center' : ''}`
  const handleClick = () => {
    if (mobile && setIsOpen) {
      setIsOpen(false)
    }
  }

  return (
    <>
      <Link href="/" className={linkClass} onClick={handleClick}>About</Link>
      <Link href="/blog" className={linkClass} onClick={handleClick}>Blog</Link>
      <Link href="/cv" className={linkClass} onClick={handleClick}>CV</Link>
    </>
  )
}

export default Navigation

