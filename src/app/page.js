"use client";
const handleSubmit = () => {
  document
    .getElementById("waitlist-form")
    .addEventListener("submit", function (event) {
      event.preventDefault();

      const email = document.getElementById("email").value;
      const formData = new FormData();
      formData.append("email", email);

      fetch(
        "https://script.google.com/macros/s/AKfycbz-K_O8FdJX2yYK-FAUzIdNB3l0Bs78A7XZGqfo-PTSZZ_CPglRal_Z3xuP_YXzDeLwXQ/exec",
        {
          method: "POST",
          body: formData,
        }
      )
        .then((response) => response.json())
        .then((data) => {
          console.log(data);
          alert("You've successfully joined the waitlist!");
        })
        .catch((error) => {
          console.error("Error:", error);
          alert("Something went wrong. Please try again.");
        });
    });
};

export default function Home() {
  return (
    <div class="bg-black min-h-screen flex flex-col items-center justify-center text-center">
      <div class="absolute top-4 left-4 z-0">
        <img
          src="./PickyEats.png"
          alt="PickyEats Logo"
          class="w-32 h-32 object-contain"
        />
      </div>

      <div class="text-white max-w-md md:max-w-lg absolute">
        <h1 class="text-5xl md:text-7xl font-bold mb-6 font-patuaOne z-10">
          Ready to Eat?
        </h1>
        <h2 class="text-2xl mb-6 font-patuaOne">PickyEats is almost here...</h2>

        <form id="waitlist-form" class="flex flex-col items-center space-y-4">
          <input
            type="email"
            id="email"
            name="email"
            class="w-full p-3 rounded-lg bg-gray-800 text-white border border-gray-700 focus:outline-none focus:border-pink-500"
            placeholder="Enter your email"
            required
          />
          <button
            type="submit"
            class="w-full bg-pink-400 font-patuaOne hover:bg-white transition-all hover:text-black text-white py-3 rounded-lg font-bold duration-200"
            onClick={handleSubmit}
          >
            Join the Waitlist
          </button>
        </form>

        <p class="mt-4 text-gray-400 font-patuaOne">
          Be the first to know when PickyEats launches!
        </p>
      </div>
    </div>
  );
}
