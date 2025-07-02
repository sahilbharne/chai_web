"use client";
import React from "react";
import { motion } from "framer-motion";

const fadeIn = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6 } }
};

export default function PrivacyPolicyPage() {
  return (
    <div className="bg-gradient-to-br from-gray-900 to-gray-800 min-h-screen px-4 py-12 flex justify-center">
      <div className="max-w-4xl w-full bg-gray-800/70 backdrop-blur-sm rounded-xl shadow-2xl p-6 md:p-10 space-y-8 border border-gray-700/50">
        <motion.header
          initial="hidden"
          animate="visible"
          variants={fadeIn}
          className="text-center mb-10"
        >
          <h1 className="text-4xl md:text-5xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-purple-500 mb-4">
            Privacy Policy
          </h1>
          <p className="text-gray-400 text-lg max-w-2xl mx-auto">
            Your privacy is important to us. This policy explains how GetMeAChai collects, uses, and protects your information.
          </p>
        </motion.header>

        <div className="space-y-10">
          {[
            {
              title: "1. Information We Collect",
              content: "We collect information you provide directly, such as your name, email address, and messages when you contact us or make payments. We may also collect technical information like your IP address and browser details for analytics."
            },
            {
              title: "2. How We Use Your Information",
              content: "We use your information to process payments, improve our services, communicate with you, and ensure the safety and integrity of our platform."
            },
            {
              title: "3. Sharing of Information",
              content: "We do not sell your personal information. We may share your data with trusted third parties (like payment processors) solely to deliver our services, comply with legal obligations, or protect our rights."
            },
            {
              title: "4. Data Security",
              content: "We implement security measures such as data encryption and access controls to protect your information from unauthorized access, alteration, or disclosure."
            },
            {
              title: "5. Your Rights",
              content: "You can request to view, correct, or delete your personal data that we hold by contacting us. We will respond in accordance with applicable laws."
            },
            {
              title: "6. Changes to This Policy",
              content: "We may update this Privacy Policy from time to time. Any significant changes will be communicated on this page, and continued use of our platform means you accept the updated policy."
            },
            {
              title: "7. Contact Us",
              content: (
                <>
                  For any questions or concerns about this Privacy Policy, please email us at{" "}
                  <a 
                    href="mailto:support@getmeachai.com" 
                    className="underline text-blue-400 hover:text-blue-300 transition-colors"
                  >
                    support@getmeachai.com
                  </a>.
                </>
              )
            }
          ].map((section, index) => (
            <motion.section
              key={index}
              initial="hidden"
              animate="visible"
              variants={fadeIn}
              transition={{ delay: index * 0.1 + 0.3 }}
              className="group"
            >
              <div className="flex items-start">
                <div className="flex-shrink-0 h-2 w-2 mt-3.5 bg-blue-500 rounded-full mr-3 group-hover:bg-blue-400 transition-colors" />
                <div>
                  <h2 className="text-2xl font-semibold mb-3 text-gray-100 group-hover:text-white transition-colors">
                    {section.title}
                  </h2>
                  <p className="text-gray-300 leading-relaxed">
                    {section.content}
                  </p>
                </div>
              </div>
            </motion.section>
          ))}
        </div>

        <motion.footer
          initial="hidden"
          animate="visible"
          variants={fadeIn}
          transition={{ delay: 1 }}
          className="text-center mt-16"
        >
          <p className="text-gray-500 text-sm">
            © {new Date().getFullYear()} GetMeAChai. All rights reserved.
          </p>
        </motion.footer>
      </div>
    </div>
  );
}