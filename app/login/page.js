"use client"
import React, { useEffect } from 'react'
import { useSession, signIn } from "next-auth/react"
import { useRouter } from 'next/navigation'

const Login = () => {
  const { data: session } = useSession()
  const router = useRouter()

  useEffect(() => {
    if (session) {
      router.push('/dashboard')
    }
  }, [session, router])

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 to-gray-800 flex flex-col items-center justify-center p-8">
      <div className="text-center mb-10">
        <h1 className="text-4xl font-bold text-white mb-2">Login to Get Started</h1>
        <p className="text-gray-300">A crowdfunding platform for creators to fund their projects</p>
      </div>

      <div className="flex flex-col gap-4 w-full max-w-md">
        <button
          onClick={() => signIn("google", { callbackUrl: "/dashboard" })}
          className="flex items-center justify-center w-full bg-white border border-gray-300 rounded-lg shadow-md px-6 py-3 text-gray-800 hover:bg-gray-100 transition-colors"
        >
          <svg className="h-6 w-6 mr-2" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            {/* Google SVG icon */}
            <path d="M23.7666 9.6498H22.8V9.6H12V14.4H18.7818C17.7924 17.1942 15.1338 19.2 12 19.2C8.0238 19.2 4.8 15.9762 4.8 12C4.8 8.0238 8.0238 4.8 12 4.8C13.8354 4.8 15.5052 5.4924 16.7766 6.6234L20.1708 3.2292C18.0276 1.2318 15.1608 0 12 0C5.3724 0 0 5.3724 0 12C0 18.6276 5.3724 24 12 24C18.6276 24 24 18.6276 24 12C24 11.2104 23.922 10.4358 23.7666 9.6498Z" fill="#FFC107"/>
            <path d="M1.3833 6.4146L5.3265 9.306C6.3927 6.6648 8.9769 4.8 12 4.8C13.8354 4.8 15.5052 5.4924 16.7766 6.6234L20.1708 3.2292C18.0276 1.2318 15.1608 0 12 0C7.3908 0 3.3939 2.6022 1.3833 6.4146Z" fill="#FF3D00"/>
            <path d="M12 24C15.1044 24 17.928 22.7628 20.0526 20.8356L16.3314 17.628C15.0867 18.5466 13.5744 19.2 12 19.2C8.8782 19.2 6.2286 17.2092 5.2308 14.4324L1.3176 17.4474C3.3096 21.3336 7.3368 24 12 24Z" fill="#4CAF50"/>
            <path d="M23.7666 9.6498H22.8V9.6H12V14.4H18.7818C18.3462 15.6696 17.5044 16.752 16.3296 17.6286L16.3314 17.6274L20.0526 20.835C19.7908 21.0738 24 18 24 12C24 11.2104 23.922 10.4358 23.7666 9.6498Z" fill="#1976D2"/>
          </svg>
          <span>Continue with Google</span>
        </button>

        <button
          onClick={() => signIn("github", { callbackUrl: "/dashboard" })}
          className="flex items-center justify-center w-full bg-gray-800 border border-gray-700 rounded-lg shadow-md px-6 py-3 text-white hover:bg-gray-700 transition-colors"
        >
          <svg className="h-6 w-6 mr-2" viewBox="0 0 24 24" fill="currentColor">
            {/* GitHub SVG icon */}
            <path d="M12 0C5.374 0 0 5.373 0 12C0 17.302 3.438 21.8 8.207 23.387C8.806 23.498 9 23.126 9 22.81V20.576C5.662 21.302 4.967 19.16 4.967 19.16C4.421 17.773 3.634 17.404 3.634 17.404C2.545 16.659 3.717 16.675 3.717 16.675C4.922 16.759 5.556 17.912 5.556 17.912C6.626 19.746 8.363 19.216 9.048 18.91C9.155 18.134 9.466 17.604 9.81 17.305C7.145 17 4.343 15.971 4.343 11.374C4.343 10.063 4.812 8.993 5.579 8.153C5.455 7.85 5.044 6.629 5.696 4.977C5.696 4.977 6.704 4.655 8.997 6.207C9.954 5.941 10.98 5.808 12 5.803C13.02 5.808 14.047 5.941 15.006 6.207C17.297 4.655 18.303 4.977 18.303 4.977C18.956 6.629 18.545 7.85 18.421 8.153C19.191 8.993 19.656 10.063 19.656 11.374C19.656 15.983 16.849 16.998 14.177 17.295C14.607 17.667 15 18.397 15 19.517V22.81C15 23.129 15.192 23.504 15.801 23.386C20.566 21.797 24 17.3 24 12C24 5.373 18.627 0 12 0Z"/>
          </svg>
          <span>Continue with GitHub</span>
        </button>

        {/* Add other social login buttons here following the same pattern */}
        {/* LinkedIn, Twitter, Facebook, Apple */}

      </div>
    </div>
  )
}

export default Login