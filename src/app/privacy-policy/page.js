"use client";

import { useRouter } from "next/navigation";
import { ShieldCheck, Mail, ArrowLeft } from "lucide-react";

export default function PrivacyPolicy() {
  const router = useRouter();

  return (
    <div className="bg-black min-h-screen flex flex-col items-center justify-center text-white px-4 py-8">
      <div className="relative max-w-3xl w-full mt-16 mb-16 bg-gray-900 rounded-2xl shadow-xl border border-gray-800 overflow-hidden">
        <div className="p-8 space-y-6">
          <div className="flex items-center justify-center space-x-4 mb-8">
            <ShieldCheck className="text-gray-500" size={36} />
            <h1 className="text-4xl font-bold text-white">Privacy Policy</h1>
          </div>

          <p className="text-sm text-gray-500 text-center mb-6">
            Last Updated: October 22nd, 2024
          </p>

          {[
            {
              title: "Introduction",
              content:
                "Thank you for choosing PickyEats! This Privacy Policy explains how we collect, use, and share your information when you use our mobile application. We are committed to protecting your privacy and ensuring that your personal information is handled in a secure and responsible manner. By using PickyEats, you agree to the collection and use of information in accordance with this Privacy Policy.",
            },
            {
              title: "Information We Collect",
              content:
                "We collect the following types of information when you use the App: Non-Personal Information such as Usage Data. This includes data related to your interactions with the App, such as the pages you visit, the time spent on the App, and the restaurants you view or interact with.",
            },
            {
              title: "How We Use Your Information",
              content:
                "We use your information to improve the App's functionality and user experience by analyzing usage data, and to troubleshoot technical issues and provide customer support.",
            },
            {
              title: "Sharing Your Information",
              content:
                "We do not sell or rent your personal information to third parties. Your privacy and trust are our top priorities.",
            },
            {
              title: "Changes to This Privacy Policy",
              content:
                "We may update this Privacy Policy from time to time. Any changes will be posted on this page, and we will update the 'Effective Date' at the top of this Policy. We encourage you to review this Privacy Policy periodically.",
            },
          ].map((section, index) => (
            <div
              key={index}
              className="bg-gray-900 border-t border-gray-800 pt-6 mt-6"
            >
              <h2 className="text-xl mb-4 text-white">{section.title}</h2>
              <p className="text-gray-400">{section.content}</p>
            </div>
          ))}

          <div className="bg-gray-900 border-t border-gray-800 pt-6 mt-6">
            <h2 className="text-xl mb-4 text-white">Contact Us</h2>
            <div className="flex items-center space-x-3">
              <Mail className="text-gray-500" size={24} />
              <a
                href="mailto:pickyy.eats@gmail.com"
                className="text-gray-300 hover:text-white transition-colors"
              >
                pickyy.eats@gmail.com
              </a>
            </div>
          </div>

          <div className="text-center mt-8">
            <button
              onClick={() => router.back()}
              className="flex items-center justify-center space-x-2 mx-auto bg-white text-black py-3 px-6 rounded-full hover:bg-gray-200 transition-all duration-300"
            >
              <ArrowLeft size={20} />
              <span>Back to Home</span>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
