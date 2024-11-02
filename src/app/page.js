"use client";

export default function Home() {
  return (
    <div className="bg-black min-h-screen flex flex-col items-center justify-center text-center">
      <div className="absolute top-0 left-50% z-0">
        <img
          src="./PickyEats.png"
          alt="PickyEats Logo"
          className="w-64 h-64 object-contain"
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

        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center w-full">
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
            href="https://play.google.com/"
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
        <p className="mt-10 text-gray-400 font-patuaOne">
          In the meantime, go checkout the web version of PickyEats!
          <br />
          👉
          <a
            href="http://www.pickyeats.tech"
            target="_blank"
            rel="noopener noreferrer"
            className="text-white underline mt-10"
          >
            PickyEats.
          </a>
        </p>
      </div>
    </div>
  );
}
