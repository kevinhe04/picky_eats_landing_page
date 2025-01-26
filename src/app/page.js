"use client";
import React from "react";
import { useRouter } from "next/navigation";
import { Coffee, Shield } from "lucide-react";
import { SocialIcon } from "react-social-icons";

export default function Home() {
  const router = useRouter();

  return (
    <div className="relative bg-black min-h-screen flex flex-col overflow-hidden">
      <header className="absolute top-[-50px] left-[-20px] right-0 flex justify-between items-center p-6 z-0">
        <img
          src="./PickyEats.png"
          alt="PickyEats Logo"
          className="w-48 h-48 object-contain"
        />
      </header>

      <main className="flex-grow flex flex-col items-center justify-center px-6 text-center z-10">
        <h1 className="text-white font-bold text-5xl md:text-7xl mb-6 tracking-tight leading-tight">
          Discover Your <br />
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-pink-500 to-purple-500">
            Next Meal.
          </span>
        </h1>

        <p className="text-gray-300 text-xl mb-12 max-w-2xl mx-auto">
          Elevate your dining experience with personalized recommendations that
          match your unique taste and mood. 🍽️
        </p>

        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center w-full mb-8">
          <a
            href="https://apps.apple.com/us/app/pickyeats/id6737159291"
            target="_blank"
            rel="noopener noreferrer"
            className="transition-transform hover:scale-105"
          >
            <div className="flex items-center bg-black text-white px-6 py-2 rounded-lg border-2 border-white">
              <svg className="w-8 h-8 mr-2" viewBox="0 0 384 512">
                <path
                  fill="currentColor"
                  d="M318.7 268.7c-.2-36.7 16.4-64.4 50-84.8-18.8-26.9-47.2-41.7-84.7-44.6-35.5-2.8-74.3 20.7-88.5 20.7-15 0-49.4-19.7-76.4-19.7C63.3 141.2 4 184.8 4 273.5q0 39.3 14.4 81.2c12.8 36.7 59 126.7 107.2 125.2 25.2-.6 43-17.9 75.8-17.9 31.8 0 48.3 17.9 76.4 17.9 48.6-.7 90.4-82.5 102.6-119.3-65.2-30.7-61.7-90-61.7-91.9zm-56.6-164.2c27.3-32.4 24.8-61.9 24-72.5-24.1 1.4-52 16.4-67.9 34.9-17.5 19.8-27.8 44.3-25.6 71.9 26.1 2 49.9-11.4 69.5-34.3z"
                />
              </svg>
              <div className="flex flex-col">
                <span className="text-xs">Download on the</span>
                <span className="text-md">App Store</span>
              </div>
            </div>
          </a>
          <a
            href="https://play.google.com/store/apps/details?id=picky.eats.android&pcampaignid=web_share"
            target="_blank"
            rel="noopener noreferrer"
            className="transition-transform hover:scale-105"
          >
            <div className="flex items-center bg-black text-white px-6 py-2 rounded-lg border-2 border-white">
              <img src="/googlePlay.png" className="h-10 w-auto"></img>
              <div className="flex flex-col">
                <span className="text-xs">GET IT ON</span>
                <span className="text-md">Google Play</span>
              </div>
            </div>
          </a>
        </div>
      </main>

      <footer className="absolute bottom-0 left-0 right-0 p-6 z-20">
        <div className="flex flex-row justify-between items-center">
          <div className="flex items-center space-x-4">
            <a
              href="https://www.buymeacoffee.com/pickyeats"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center text-white hover:text-yellow-400 transition-colors"
            >
              <Coffee size={24} className="mr-2" />
              <span className="text-sm">Support Us</span>
            </a>
            <button
              onClick={() => router.push("./privacy-policy")}
              className="flex items-center text-gray-400 hover:text-white transition-colors"
            >
              <Shield size={20} className="mr-2" />
              <span className="text-sm underline underline-offset-4">
                Privacy Policy
              </span>
            </button>
          </div>

          <div className="flex items-center space-x-4">
            <SocialIcon
              url="https://www.tiktok.com/@kvin.he"
              network="tiktok"
              bgColor="transparent"
              fgColor="white"
              style={{ height: 35, width: 35 }}
            />
            <SocialIcon
              url="https://www.instagram.com/picky._eats/"
              network="instagram"
              bgColor="transparent"
              fgColor="white"
              style={{ height: 35, width: 35 }}
            />
          </div>
        </div>
      </footer>
    </div>
  );
}
