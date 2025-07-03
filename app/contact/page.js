"use client";
import React, { useState } from "react";
import { toast } from "react-toastify";
import 'react-toastify/dist/ReactToastify.css';

export default function ContactPage() {
  const [form, setForm] = useState({ name: "", email: "", message: "" });
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulate API call
    await new Promise(resolve => setTimeout(resolve, 1000));
    
    toast.success("Message sent successfully! We'll get back to you soon.", {
      position: "top-center",
      autoClose: 3000,
      theme: "dark",
    });
    setForm({ name: "", email: "", message: "" });
    setIsSubmitting(false);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 via-purple-900 to-gray-800 flex items-center justify-center px-4 py-10">
      <div className="max-w-3xl w-full bg-gray-800/70 backdrop-blur-sm rounded-xl shadow-2xl overflow-hidden border border-gray-700/50">
        <div className="p-8 md:p-10">
          <div className="text-center mb-8">
            <h1 className="text-4xl md:text-5xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-purple-400 to-blue-400 mb-4">
              Get In Touch
            </h1>
            <p className="text-gray-300/90 text-lg max-w-lg mx-auto">
              Have a question, feedback or want to collaborate? We'd love to hear from you!
            </p>
          </div>
          
          <form onSubmit={handleSubmit} className="space-y-6">
            <div className="space-y-1">
              <label className="block text-sm font-medium text-gray-300/80">Name</label>
              <input
                type="text"
                name="name"
                value={form.name}
                onChange={handleChange}
                required
                className="w-full p-3.5 rounded-lg bg-gray-700/50 text-gray-100 placeholder-gray-400/70 
                          focus:outline-none focus:ring-2 focus:ring-purple-500/50 border border-gray-600/50
                          transition-all duration-200 hover:border-purple-500/30"
                placeholder="Your name"
              />
            </div>
            
            <div className="space-y-1">
              <label className="block text-sm font-medium text-gray-300/80">Email</label>
              <input
                type="email"
                name="email"
                value={form.email}
                onChange={handleChange}
                required
                className="w-full p-3.5 rounded-lg bg-gray-700/50 text-gray-100 placeholder-gray-400/70 
                          focus:outline-none focus:ring-2 focus:ring-purple-500/50 border border-gray-600/50
                          transition-all duration-200 hover:border-purple-500/30"
                placeholder="you@example.com"
              />
            </div>
            
            <div className="space-y-1">
              <label className="block text-sm font-medium text-gray-300/80">Message</label>
              <textarea
                name="message"
                value={form.message}
                onChange={handleChange}
                required
                rows="5"
                className="w-full p-3.5 rounded-lg bg-gray-700/50 text-gray-100 placeholder-gray-400/70 
                          focus:outline-none focus:ring-2 focus:ring-purple-500/50 border border-gray-600/50
                          transition-all duration-200 hover:border-purple-500/30"
                placeholder="How can we help you?"
              ></textarea>
            </div>
            
            <button
              type="submit"
              disabled={isSubmitting}
              className={`w-full py-3.5 px-6 rounded-lg font-medium text-white transition-all duration-300
                        ${isSubmitting 
                          ? 'bg-gray-600 cursor-not-allowed' 
                          : 'bg-gradient-to-r from-purple-600 to-blue-500 hover:from-purple-600/90 hover:to-blue-500/90 shadow-lg hover:shadow-purple-500/20'}
                        flex items-center justify-center gap-2`}
            >
              {isSubmitting ? (
                <>
                  <svg className="animate-spin -ml-1 mr-2 h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                    <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                    <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                  </svg>
                  Sending...
                </>
              ) : (
                'Send Message'
              )}
            </button>
          </form>
          
          <div className="mt-8 text-center">
            <p className="text-gray-400/80 text-sm">
              Prefer email? Contact us directly at{" "}
              <a 
                href="mailto:support@getmeachai.com" 
                className="text-purple-300 hover:text-purple-200 underline underline-offset-4 transition-colors"
              >
                support@getmeachai.com
              </a>
            </p>
          </div>
        </div>
        
        {/* Decorative elements */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <div className="absolute -top-20 -left-20 w-64 h-64 bg-purple-600/10 rounded-full filter blur-3xl"></div>
          <div className="absolute -bottom-20 -right-20 w-64 h-64 bg-blue-600/10 rounded-full filter blur-3xl"></div>
        </div>
      </div>
    </div>
  );
}