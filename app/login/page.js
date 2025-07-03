"use client";
import React, { useEffect } from 'react';
import { useSession, signIn } from "next-auth/react";
import { useRouter } from 'next/navigation';
import { FaGoogle, FaGithub, FaArrowRight } from 'react-icons/fa';

const Login = () => {
  const { data: session } = useSession();
  const router = useRouter();

  useEffect(() => {
    if (session) {
      router.push('/dashboard');
    }
  }, [session, router]);

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 via-purple-900 to-gray-800 flex flex-col items-center justify-center p-4 sm:p-8">
      <div className="w-full max-w-md space-y-8">
        <div className="text-center">
          <h1 className="text-3xl sm:text-4xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-blue-400 mb-3">
            Welcome to Get Me a Chai
          </h1>
          <p className="text-gray-300 text-sm sm:text-base">
            Support your favorite creators with just a cup of chai
          </p>
        </div>

        <div className="bg-gray-800/70 backdrop-blur-sm rounded-xl shadow-2xl overflow-hidden border border-gray-700/50 p-8">
          <div className="flex flex-col gap-4">
            <button
              onClick={() => signIn("google", { callbackUrl: "/dashboard" })}
              className="group flex items-center justify-center w-full bg-white hover:bg-gray-50 text-gray-800 font-medium py-3.5 px-4 rounded-lg transition-all duration-300 border border-gray-300 shadow-sm hover:shadow-md"
            >
              <FaGoogle className="w-5 h-5 mr-3 text-rose-500 group-hover:text-rose-600 transition-colors" />
              <span>Continue with Google</span>
              <FaArrowRight className="ml-2 opacity-0 group-hover:opacity-100 translate-x-[-10px] group-hover:translate-x-0 transition-all duration-300" />
            </button>

            <button
              onClick={() => signIn("github", { callbackUrl: "/dashboard" })}
              className="group flex items-center justify-center w-full bg-gray-900 hover:bg-gray-800 text-white font-medium py-3.5 px-4 rounded-lg transition-all duration-300 border border-gray-700 shadow-sm hover:shadow-md"
            >
              <FaGithub className="w-5 h-5 mr-3 group-hover:text-purple-400 transition-colors" />
              <span>Continue with GitHub</span>
              <FaArrowRight className="ml-2 opacity-0 group-hover:opacity-100 translate-x-[-10px] group-hover:translate-x-0 transition-all duration-300" />
            </button>
          </div>

          <div className="mt-6 pt-6 border-t border-gray-700/50">
            <p className="text-center text-gray-400 text-sm">
              Don't have an account? <span className="text-purple-400">Sign up automatically</span> when you login
            </p>
          </div>
        </div>

        <div className="text-center text-xs text-gray-500">
          By continuing, you agree to our{' '}
          <a href="#" className="text-gray-400 hover:text-gray-300 underline underline-offset-2">
            Terms of Service
          </a>{' '}
          and{' '}
          <a href="#" className="text-gray-400 hover:text-gray-300 underline underline-offset-2">
            Privacy Policy
          </a>
        </div>
      </div>

      {/* Decorative elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-1/4 left-1/4 w-64 h-64 bg-purple-600/10 rounded-full filter blur-3xl"></div>
        <div className="absolute bottom-1/4 right-1/4 w-64 h-64 bg-blue-600/10 rounded-full filter blur-3xl"></div>
      </div>
    </div>
  );
};

export default Login;