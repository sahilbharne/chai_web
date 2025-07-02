import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-900 to-gray-800 text-white">
      {/* Hero Section */}
      <section className="flex flex-col items-center justify-center min-h-[70vh] px-4 text-center">
        <div className="max-w-4xl mx-auto">
          <div className="flex items-center justify-center gap-3 mb-6">
            <h1 className="text-4xl md:text-6xl font-extrabold bg-clip-text text-transparent bg-gradient-to-r from-purple-400 to-blue-500">
              Get Me a Chai
            </h1>
            <Image 
              src="/tea.gif" 
              width={80} 
              height={80} 
              alt="Steaming tea cup" 
              className="animate-bounce"
            />
          </div>
          
          <p className="text-lg md:text-xl text-gray-300 mb-8 max-w-2xl mx-auto">
            The crowdfunding platform where creators meet their supporters.
            <br />
            Let your fans fuel your creativity - one chai at a time.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/login" passHref>
              <button className="px-8 py-3 text-lg font-semibold rounded-full bg-gradient-to-r from-purple-600 to-blue-500 hover:from-purple-700 hover:to-blue-600 transition-all transform hover:scale-105 shadow-lg hover:shadow-purple-500/30">
                Start Your Journey
              </button>
            </Link>
            <Link href="/about" passHref>
              <button className="px-8 py-3 text-lg font-semibold rounded-full bg-gray-700 hover:bg-gray-600 transition-all border border-gray-600">
                Learn More
              </button>
            </Link>
          </div>
        </div>
      </section>

      {/* Divider */}
      <div className="h-px bg-gradient-to-r from-transparent via-purple-500 to-transparent mx-8 my-16"></div>

      {/* Features Section */}
      <section className="container mx-auto px-4 py-16">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-16 bg-clip-text text-transparent bg-gradient-to-r from-purple-400 to-blue-400">
          Why Creators Love Us
        </h2>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
          {[
            {
              icon: "/man.gif",
              title: "Direct Fan Support",
              description: "Your fans can directly contribute to your creative journey with simple chai purchases."
            },
            {
              icon: "/coin.gif",
              title: "Instant Payments",
              description: "Receive funds instantly with secure Razorpay integration."
            },
            {
              icon: "/group.gif",
              title: "Community Building",
              description: "Grow a loyal community that believes in your work."
            }
          ].map((feature, index) => (
            <div 
              key={index}
              className="bg-gray-800/50 p-8 rounded-xl hover:bg-gray-800/70 transition-all border border-gray-700 hover:border-purple-500 hover:shadow-lg hover:shadow-purple-500/10"
            >
              <div className="bg-gradient-to-br from-purple-500 to-blue-600 p-4 rounded-full w-24 h-24 flex items-center justify-center mx-auto mb-6">
                <Image 
                  src={feature.icon} 
                  width={48} 
                  height={48} 
                  alt={feature.title}
                  className="object-contain"
                />
              </div>
              <h3 className="text-xl font-bold text-center mb-3">{feature.title}</h3>
              <p className="text-gray-300 text-center">{feature.description}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Divider */}
      <div className="h-px bg-gradient-to-r from-transparent via-blue-500 to-transparent mx-8 my-16"></div>

      {/* Video Section */}
      <section className="container mx-auto px-4 py-16">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-16 bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-purple-400">
          See How It Works
        </h2>
        
        <div className="aspect-w-16 aspect-h-9 max-w-4xl mx-auto rounded-xl overflow-hidden shadow-2xl border-4 border-gray-700">
          <iframe 
            src="https://www.youtube.com/embed/yFlarM35vxA?si=vNRCFgX2R8i2eBqM" 
            title="YouTube video player" 
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" 
            allowFullScreen
            className="w-full h-full min-h-[400px]"
          ></iframe>
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-gradient-to-r from-purple-900/50 to-blue-900/50 py-20 px-4">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">Ready to Get Started?</h2>
          <p className="text-xl text-gray-300 mb-8">
            Join hundreds of creators already growing their projects with fan support.
          </p>
          <Link href="/login" passHref>
            <button className="px-10 py-4 text-xl font-bold rounded-full bg-gradient-to-r from-purple-600 to-blue-500 hover:from-purple-700 hover:to-blue-600 transition-all transform hover:scale-105 shadow-lg hover:shadow-purple-500/50">
              Start Receiving Support Today
            </button>
          </Link>
        </div>
      </section>
    </div>
  );
}