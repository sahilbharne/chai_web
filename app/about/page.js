import React from 'react';
import Image from 'next/image';

export const metadata = {
  title: "About - Get Me a Chai",
};

const About = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 to-gray-800 py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-6xl mx-auto">
        {/* Hero Section */}
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-5xl font-bold mb-6 text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-blue-400">
            About Get Me a Chai
          </h1>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            A platform where creators receive direct support from fans — as simple as buying them a cup of chai ☕. 
            Turn appreciation into funding for your next big idea.
          </p>
        </div>

        {/* How It Works Section */}
        <section className="mb-20">
          <h2 className="text-3xl font-bold mb-12 text-center text-gray-100">
            How It Works
          </h2>
          <div className="grid md:grid-cols-2 gap-8">
            <div className="bg-gray-800 rounded-xl shadow-lg p-8 hover:shadow-xl transition-all duration-300 border border-gray-700 hover:border-purple-500/30">
              <div className="flex items-start">
                <div className="bg-purple-900/50 p-3 rounded-full mr-6">
                  <Image 
                    src="/group.gif" 
                    width={64} 
                    height={64} 
                    alt="Fans collaborate" 
                    className="rounded-full"
                  />
                </div>
                <div>
                  <h3 className="text-xl font-semibold mb-3 text-gray-100">Fans Want to Collaborate</h3>
                  <p className="text-gray-400">
                    Your audience is excited to help bring your creative visions to life through direct support.
                  </p>
                </div>
              </div>
            </div>
            <div className="bg-gray-800 rounded-xl shadow-lg p-8 hover:shadow-xl transition-all duration-300 border border-gray-700 hover:border-blue-500/30">
              <div className="flex items-start">
                <div className="bg-blue-900/50 p-3 rounded-full mr-6">
                  <Image 
                    src="/coin.gif" 
                    width={64} 
                    height={64} 
                    alt="Support" 
                    className="rounded-full"
                  />
                </div>
                <div>
                  <h3 className="text-xl font-semibold mb-3 text-gray-100">Support Through Chai</h3>
                  <p className="text-gray-400">
                    Fans show their appreciation by buying you chai, directly funding your creative projects.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Benefits Sections */}
        <section className="mb-20">
          <h2 className="text-3xl font-bold mb-12 text-center text-gray-100">
            Why Creators Love Us
          </h2>
          <div className="grid md:grid-cols-2 gap-8">
            <div className="bg-gray-800 rounded-xl shadow-lg p-8 hover:shadow-xl transition-all duration-300 border border-gray-700 hover:border-purple-500/30">
              <h3 className="text-xl font-semibold mb-4 text-purple-400">Creator Benefits</h3>
              <ul className="space-y-4">
                <li className="flex items-start">
                  <span className="bg-purple-900/50 text-purple-400 rounded-full p-1 mr-3">
                    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                    </svg>
                  </span>
                  <span className="text-gray-300">Direct financial support from your fans</span>
                </li>
                <li className="flex items-start">
                  <span className="bg-purple-900/50 text-purple-400 rounded-full p-1 mr-3">
                    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                    </svg>
                  </span>
                  <span className="text-gray-300">Build deeper connections with your audience</span>
                </li>
                <li className="flex items-start">
                  <span className="bg-purple-900/50 text-purple-400 rounded-full p-1 mr-3">
                    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                    </svg>
                  </span>
                  <span className="text-gray-300">Simple, creator-focused platform</span>
                </li>
              </ul>
            </div>
            <div className="bg-gray-800 rounded-xl shadow-lg p-8 hover:shadow-xl transition-all duration-300 border border-gray-700 hover:border-blue-500/30">
              <h3 className="text-xl font-semibold mb-4 text-blue-400">Growth Opportunities</h3>
              <ul className="space-y-4">
                <li className="flex items-start">
                  <span className="bg-blue-900/50 text-blue-400 rounded-full p-1 mr-3">
                    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                    </svg>
                  </span>
                  <span className="text-gray-300">Showcase work and gain exposure</span>
                </li>
                <li className="flex items-start">
                  <span className="bg-blue-900/50 text-blue-400 rounded-full p-1 mr-3">
                    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                    </svg>
                  </span>
                  <span className="text-gray-300">Collaborate with fellow creators</span>
                </li>
                <li className="flex items-start">
                  <span className="bg-blue-900/50 text-blue-400 rounded-full p-1 mr-3">
                    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                    </svg>
                  </span>
                  <span className="text-gray-300">Access tools & resources to grow</span>
                </li>
              </ul>
            </div>
          </div>
        </section>

        {/* Fan Benefits Section */}
        <section className="mb-20">
          <h2 className="text-3xl font-bold mb-12 text-center text-gray-100">
            For the Fans
          </h2>
          <div className="bg-gray-800 rounded-xl shadow-lg p-8 max-w-3xl mx-auto hover:shadow-xl transition-all duration-300 border border-gray-700 hover:border-green-500/30">
            <div className="grid md:grid-cols-3 gap-8">
              <div className="text-center">
                <div className="bg-purple-900/50 text-purple-400 rounded-full p-3 inline-block mb-4">
                  <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"></path>
                  </svg>
                </div>
                <h3 className="text-lg font-semibold mb-2 text-gray-100">Support Creators</h3>
                <p className="text-gray-400">Directly fund your favorite creators</p>
              </div>
              <div className="text-center">
                <div className="bg-blue-900/50 text-blue-400 rounded-full p-3 inline-block mb-4">
                  <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M11.049 2.927c.3-.921 1.603-.921 1.902 0l1.519 4.674a1 1 0 00.95.69h4.915c.969 0 1.371 1.24.588 1.81l-3.976 2.888a1 1 0 00-.363 1.118l1.518 4.674c.3.922-.755 1.688-1.538 1.118l-3.976-2.888a1 1 0 00-1.176 0l-3.976 2.888c-.783.57-1.838-.197-1.538-1.118l1.518-4.674a1 1 0 00-.363-1.118l-3.976-2.888c-.784-.57-.38-1.81.588-1.81h4.914a1 1 0 00.951-.69l1.519-4.674z"></path>
                  </svg>
                </div>
                <h3 className="text-lg font-semibold mb-2 text-gray-100">Exclusive Perks</h3>
                <p className="text-gray-400">Receive special updates and rewards</p>
              </div>
              <div className="text-center">
                <div className="bg-green-900/50 text-green-400 rounded-full p-3 inline-block mb-4">
                  <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"></path>
                  </svg>
                </div>
                <h3 className="text-lg font-semibold mb-2 text-gray-100">Be Part of the Journey</h3>
                <p className="text-gray-400">Help shape creative projects</p>
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <div className="text-center mt-16">
          <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">
            Start sharing your creative journey, connect with fans, and let every cup of chai fuel your next masterpiece!
          </p>
          <button className="bg-gradient-to-r from-purple-500 to-blue-500 hover:from-purple-600 hover:to-blue-600 text-white font-medium py-3 px-8 rounded-full shadow-lg transition-all duration-300 transform hover:scale-105 hover:shadow-purple-500/20">
            Join the Community
          </button>
        </div>
      </div>
    </div>
  );
};

export default About;