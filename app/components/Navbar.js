"use client"
import React, { useState, useEffect, useRef } from 'react'
import { useSession, signIn, signOut } from "next-auth/react"
import Link from 'next/link'
import Image from 'next/image'

const Navbar = () => {
  const { data: session } = useSession()
  const [showDropdown, setShowDropdown] = useState(false)
  const dropdownRef = useRef(null)

  // Close dropdown when clicking outside
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setShowDropdown(false)
      }
    }
    document.addEventListener('mousedown', handleClickOutside)
    return () => document.removeEventListener('mousedown', handleClickOutside)
  }, [])

  return (
    <nav className='bg-gradient-to-r from-gray-900 to-gray-800 text-white shadow-lg sticky top-0 z-50'>
      <div className='container mx-auto px-4'>
        <div className='flex justify-between items-center h-16 md:h-20'>
          {/* Logo/Brand */}
          <Link href="/" className="flex items-center space-x-2 hover:opacity-90 transition-opacity">
            <Image 
              src="/tea.gif" 
              width={40} 
              height={40} 
              alt="Get Me a Chai Logo" 
              className="animate-pulse"
            />
            <span className="text-xl md:text-2xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-purple-400 to-blue-400">
              Get Me a Chai
            </span>
          </Link>

          {/* Navigation Items */}
          <div className='flex items-center space-x-4'>
            {session ? (
              <div className='relative flex items-center space-x-4' ref={dropdownRef}>
                {/* Profile Dropdown */}
                <button
                  onClick={() => setShowDropdown(!showDropdown)}
                  className="flex items-center space-x-2 bg-gray-800 hover:bg-gray-700 rounded-full px-4 py-2 transition-all duration-200"
                >
                  {session.user?.image ? (
                    <Image
                      src={session.user.image}
                      width={32}
                      height={32}
                      alt="User Profile"
                      className="rounded-full"
                    />
                  ) : (
                    <div className="w-8 h-8 rounded-full bg-gradient-to-r from-purple-500 to-blue-500 flex items-center justify-center text-white font-bold">
                      {session.user?.name?.charAt(0) || session.user?.email?.charAt(0)}
                    </div>
                  )}
                  <span className="hidden md:inline font-medium">
                    {session.user?.name || session.user?.email?.split('@')[0]}
                  </span>
                  <svg 
                    className={`w-4 h-4 transition-transform ${showDropdown ? 'rotate-180' : ''}`}
                    fill="none" 
                    stroke="currentColor" 
                    viewBox="0 0 24 24" 
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                  </svg>
                </button>

                {/* Dropdown Menu */}
                {showDropdown && (
                  <div className="absolute right-0 top-12 mt-2 w-48 bg-gray-800 rounded-md shadow-lg py-1 z-50 border border-gray-700">
                    <Link 
                      href="/dashboard" 
                      className="block px-4 py-2 text-sm hover:bg-gray-700 transition-colors"
                      onClick={() => setShowDropdown(false)}
                    >
                      Dashboard
                    </Link>
                    <Link 
                      href={`/${session.user?.name || session.user?.email?.split('@')[0]}`}
                      className="block px-4 py-2 text-sm hover:bg-gray-700 transition-colors"
                      onClick={() => setShowDropdown(false)}
                    >
                      Your Page
                    </Link>
                    <button
                      onClick={() => {
                        setShowDropdown(false)
                        signOut()
                      }}
                      className="w-full text-left px-4 py-2 text-sm hover:bg-gray-700 transition-colors text-red-400"
                    >
                      Sign Out
                    </button>
                  </div>
                )}
              </div>
            ) : (
              <div className="flex space-x-2">
                <button
                  onClick={() => signIn()}
                  className="px-4 py-2 rounded-md bg-gradient-to-r from-purple-600 to-blue-500 hover:from-purple-700 hover:to-blue-600 text-white font-medium transition-all shadow-lg hover:shadow-purple-500/30"
                >
                  Login
                </button>
                <Link href="/register" passHref>
                  <button className="px-4 py-2 rounded-md border border-blue-400 text-blue-400 hover:bg-blue-500/10 font-medium transition-all">
                    Register
                  </button>
                </Link>
              </div>
            )}
          </div>
        </div>
      </div>
    </nav>
  )
}

export default Navbar