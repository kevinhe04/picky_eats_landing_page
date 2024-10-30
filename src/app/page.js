"use client";

import StoreBadge from "react-store-badge";

export default function Home() {
  return (
    <div className="bg-black min-h-screen flex flex-col items-center justify-center text-center">
      <div className="absolute top-0 left-50% z-0">
        <img
          src="./PickyEats.png"
          alt="PickyEats Logo"
          className="w-64 h-64 object-contain "
        />
      </div>

      <div className="text-white max-w-md md:max-w-lg absolute">
        <h1 className="text-5xl md:text-7xl font-bold mb-6 font-patuaOne z-10 mt-10">
          Ready to Eat?
        </h1>
        <div className="flex flex-row justify-center">
          <h2 className="text-2xl mb-6 font-patuaOne">
            PickyEats is almost here...
          </h2>
          <p className="mt-2 animate-bounce">🫐</p>
        </div>

        <div className="flex flex-row gap-5 justify-center">
          <StoreBadge
            name="PickyEats"
            googlePlayUrl="https://play.google.com/"
            target="_blank"
          />
          <StoreBadge
            name="PickyEats"
            appStoreUrl="https://apps.apple.com/"
            target="_blank"
          />
        </div>
        <p className="mt-10 text-gray-400 font-patuaOne">
          In the meantime, go checkout the web version of PickyEats!
          <br></br>
          👉
          <a
            href="http://www.pickyeats.tech"
            target="_blank"
            className="text-white underline"
          >
            PickyEats.
          </a>
        </p>
      </div>
    </div>
  );
}
