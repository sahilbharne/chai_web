"use client";
import React, { useState } from "react";
import { toast } from "react-toastify";
import 'react-toastify/dist/ReactToastify.css';

export default function ContactPage() {
  const [form, setForm] = useState({ name: "", email: "", message: "" });

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // You can integrate backend / email service here
    toast.success("Message sent successfully! We'll get back to you soon.");
    setForm({ name: "", email: "", message: "" });
  };

  return (
    <div className="bg-gray-900 text-white min-h-screen flex items-center justify-center px-4 py-10">
      <div className="max-w-3xl w-full bg-gray-800 rounded-xl shadow-md p-8 md:p-12">
        <h1 className="text-3xl md:text-4xl font-bold mb-6 text-center">
          Contact Us
        </h1>
        <p className="text-gray-400 mb-8 text-center">
          Have a question, feedback or want to collaborate? We'd love to hear from you!
        </p>
        <form onSubmit={handleSubmit} className="space-y-5">
          <div>
            <label className="block mb-2 text-sm font-medium">Name</label>
            <input
              type="text"
              name="name"
              value={form.name}
              onChange={handleChange}
              required
              className="w-full p-3 rounded-lg bg-gray-700 text-gray-200 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-purple-600"
              placeholder="Your name"
            />
          </div>
          <div>
            <label className="block mb-2 text-sm font-medium">Email</label>
            <input
              type="email"
              name="email"
              value={form.email}
              onChange={handleChange}
              required
              className="w-full p-3 rounded-lg bg-gray-700 text-gray-200 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-purple-600"
              placeholder="you@example.com"
            />
          </div>
          <div>
            <label className="block mb-2 text-sm font-medium">Message</label>
            <textarea
              name="message"
              value={form.message}
              onChange={handleChange}
              required
              rows="4"
              className="w-full p-3 rounded-lg bg-gray-700 text-gray-200 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-purple-600"
              placeholder="Type your message..."
            ></textarea>
          </div>
          <button
            type="submit"
            className="w-full py-3 rounded-lg bg-gradient-to-r from-purple-600 to-blue-500 hover:from-purple-700 hover:to-blue-600 transition-colors font-medium"
          >
            Send Message
          </button>
        </form>
        <div className="text-center text-gray-500 text-sm mt-6">
          Or email us directly at{" "}
          <a href="mailto:support@getmeachai.com" className="underline text-gray-300 hover:text-white">
            support@getmeachai.com
          </a>
        </div>
      </div>
    </div>
  );
}
