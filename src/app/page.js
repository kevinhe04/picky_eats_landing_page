"use client";

import { useEffect } from "react";

const handleSubmit = () => {
  event.preventDefault();

  const email = document.getElementById("email").value;
  const formData = new FormData();
  formData.append("email", email);

  fetch(process.env.NEXT_PUBLIC_GOOGLE_SCRIPT_URL, {
    method: "POST",
    body: formData,
  })
    .then((response) => response.json())
    .then((data) => {
      console.log(data);
      alert("You've successfully joined the waitlist!");
    })
    .catch((error) => {
      console.error("Error:", error);
      alert("Something went wrong. Please try again.");
    });
};

export default function Home() {
  useEffect(() => {
    const form = document.getElementById("waitlist-form");
    if (form) {
      form.addEventListener("submit", handleSubmit);
    }

    return () => {
      if (form) {
        form.removeEventListener("submit", handleSubmit);
      }
    };
  }, []);

  return (
    <div className="bg-black min-h-screen flex flex-col items-center justify-center text-center">
      <div className="absolute top-4 left-4 z-0">
        <img
          src="./PickyEats.png"
          alt="PickyEats Logo"
          className="w-32 h-32 object-contain"
        />
      </div>

      <div className="text-white max-w-md md:max-w-lg absolute">
        <h1 className="text-5xl md:text-7xl font-bold mb-6 font-patuaOne z-10">
          Ready to Eat?
        </h1>
        <div className="flex flex-row justify-center">
          <h2 className="text-2xl mb-6 font-patuaOne">
            PickyEats Mobile is almost here...
          </h2>
          <p className="mt-2 animate-bounce">🫐</p>
        </div>
        <form
          id="waitlist-form"
          className="flex flex-col items-center space-y-4"
        >
          <input
            type="email"
            id="email"
            name="email"
            className="w-full p-3 rounded-lg bg-gray-800 text-white border border-gray-700 focus:outline-none focus:border-pink-500"
            placeholder="Enter your email"
            required
          />
          <button
            type="submit"
            className="w-full bg-pink-400 font-patuaOne hover:bg-white transition-all hover:text-black text-white py-3 rounded-lg font-bold duration-200"
          >
            Join the Waitlist for PickyEats Mobile !
          </button>
        </form>

        <p className="mt-4 text-gray-400 font-patuaOne">
          Be the first to know when PickyEats launches on IOS and Google Play!
        </p>
        <p className="mt-4 text-gray-400 font-patuaOne">
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
