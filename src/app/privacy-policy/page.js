"use client";

import { useRouter } from "next/navigation";

export default function PrivacyPolicy() {
  const router = useRouter();

  return (
    <div className="bg-black min-h-screen flex flex-col items-center justify-center text-white px-4 py-8">
      <div
        className="absolute top-4 left-4 z-0 cursor-pointer"
        onClick={() => {
          router.push("/");
        }}
      >
        <img
          src="./PickyEats.png"
          alt="PickyEats Logo"
          className="w-24 h-24 object-contain"
        />
      </div>

      <div className="max-w-2xl w-full mt-24 text-left space-y-6 z-10">
        <h1 className="text-3xl font-bold text-center mb-8">
          Privacy Policy for PickyEats.
        </h1>

        <p className="text-sm text-gray-300 text-center">
          Effective Date: October 22nd, 2024
        </p>

        <section className="bg-gray-900 p-6 rounded-lg">
          <h2 className="text-xl mb-4">1. Introduction</h2>
          <p>
            Thank you for choosing PickyEats! This Privacy Policy explains how
            we collect, use, and share your information when you use our mobile
            application (PickyEats). We are committed to protecting your privacy
            and ensuring that your personal information is handled in a secure
            and responsible manner. By using PickyEats, you agree to the
            collection and use of information in accordance with this Privacy
            Policy.
          </p>
        </section>

        <section className="bg-gray-900 p-6 rounded-lg">
          <h2 className="text-xl mb-4">2. Information We Collect</h2>
          <p>
            We collect the following types of information when you use the App:
          </p>
          <ul className="list-disc pl-6 mt-2">
            <li>
              <span className="text-red-400">Non-Personal Information</span>{" "}
              such as Usage Data. We collect data related to your interactions
              with the App, such as the pages you visit, the time spent on the
              App, and the restaurants you view or interact with.
            </li>
          </ul>
        </section>

        <section className="bg-gray-900 p-6 rounded-lg">
          <h2 className="text-xl mb-4">3. How We Use Your Information</h2>
          <p>We use your information to:</p>
          <ul className="list-disc pl-6 mt-2">
            <li>
              Improve the App's functionality and user experience by analyzing
              usage data.
            </li>
            <li>Troubleshoot technical issues and provide customer support.</li>
          </ul>
        </section>

        <section className="bg-gray-900 p-6 rounded-lg">
          <h2 className="text-xl  mb-4">4. Sharing Your Information</h2>
          <p>
            We do not sell or rent your personal information to third parties.
          </p>
        </section>

        <section className="bg-gray-900 p-6 rounded-lg">
          <h2 className="text-xl  mb-4">5. Changes to This Privacy Policy</h2>
          <p>
            We may update this Privacy Policy from time to time. Any changes
            will be posted on this page, and we will update the "Effective Date"
            at the top of this Policy. We encourage you to review this Privacy
            Policy periodically.
          </p>
        </section>

        <section className="bg-gray-900 p-6 rounded-lg">
          <h2 className="text-xl  mb-4">6. Contact Us</h2>
          <p>
            If you have any questions about this Privacy Policy or our data
            practices, please contact us at{" "}
            <a
              href="mailto:pickyy.eats@gmail.com"
              className="text-blue-400 hover:underline"
            >
              pickyy.eats@gmail.com
            </a>
          </p>
        </section>

        <div className="text-center mt-8">
          <button
            onClick={() => router.back()}
            className="bg-white hover:bg-black border-2 hover:text-white border-black hover:border-white text-black py-2 px-4 rounded-xl transition-all duration-300"
          >
            Home
          </button>
        </div>
      </div>
    </div>
  );
}
