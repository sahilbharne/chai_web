"use client";
import React from "react";
import { motion } from "framer-motion";

const fadeIn = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6 } }
};

const sectionVariants = {
  hover: {
    scale: 1.01,
    transition: { duration: 0.2 }
  }
};

export default function TermsPage() {
  return (
    <div className="bg-gradient-to-br from-gray-900 to-gray-800 min-h-screen px-4 py-12 flex justify-center">
      <div className="max-w-4xl w-full bg-gray-800/70 backdrop-blur-sm rounded-xl shadow-2xl p-6 md:p-10 space-y-8 border border-gray-700/50">
        <motion.header
          initial="hidden"
          animate="visible"
          variants={fadeIn}
          className="text-center mb-10"
        >
          <h1 className="text-4xl md:text-5xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-amber-400 to-orange-500 mb-4">
            Terms & Privacy Policy
          </h1>
          <p className="text-gray-400 text-lg max-w-2xl mx-auto">
            Please read these terms carefully before using GetMeAChai.
          </p>
        </motion.header>

        <div className="space-y-8">
          {[
            {
              title: "1. Acceptance of Terms",
              content: "By accessing or using GetMeAChai, you agree to comply with and be bound by these Terms. If you disagree with any part of the terms, you may not access the service.",
              icon: "📝"
            },
            {
              title: "2. Use of Service",
              content: "You may use our platform to support creators by making payments or donations. You agree not to misuse the platform or engage in any activity that could harm the service or other users.",
              icon: "🛠️"
            },
            {
              title: "3. Privacy Policy",
              content: "We respect your privacy. Your personal information (such as name and email) is collected only to process donations and communicate with you. We do not sell or share your data with third parties except as necessary to provide our services.",
              icon: "🔒"
            },
            {
              title: "4. Payments",
              content: "All payments made through GetMeAChai are voluntary contributions to creators. We use secure payment gateways like Razorpay to process your payments.",
              icon: "💳"
            },
            {
              title: "5. Changes to Terms",
              content: "We may update these Terms & Privacy Policy from time to time. Continued use of our platform constitutes acceptance of the updated terms.",
              icon: "🔄"
            },
            {
              title: "6. Contact Us",
              content: (
                <>
                  If you have any questions about these Terms or our Privacy Policy, please contact us at{" "}
                  <a 
                    href="mailto:support@getmeachai.com" 
                    className="underline text-amber-400 hover:text-amber-300 transition-colors"
                  >
                    support@getmeachai.com
                  </a>.
                </>
              ),
              icon: "📧"
            }
          ].map((section, index) => (
            <motion.section
              key={index}
              initial="hidden"
              animate="visible"
              variants={fadeIn}
              transition={{ delay: index * 0.1 + 0.3 }}
              whileHover="hover" 
              variants={sectionVariants}
              className="p-6 bg-gray-800/50 rounded-lg border border-gray-700/30 hover:border-amber-500/30 transition-all"
            >
              <div className="flex items-start gap-4">
                <div className="text-2xl mt-1">{section.icon}</div>
                <div>
                  <h2 className="text-2xl font-semibold mb-3 text-gray-100">
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
          className="text-center mt-16 pt-6 border-t border-gray-700/50"
        >
          <p className="text-gray-500 text-sm">
            © {new Date().getFullYear()} GetMeAChai. All rights reserved.
          </p>
        </motion.footer>
      </div>
    </div>
  );
}