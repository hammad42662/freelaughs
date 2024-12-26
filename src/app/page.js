"use client";

import { useState } from "react";
import oneLinerJoke from "one-liner-joke";
import hamster from "../../public/hamster.svg";
import Image from "next/image";
export default function Home() {
  const [joke, setJoke] = useState("");

  const fetchJoke = () => {
    try {
      // Get a random joke
      const randomJoke = oneLinerJoke.getRandomJoke();
      setJoke(randomJoke.body); // Set the joke text
    } catch (error) {
      console.error("Error fetching the joke:", error.message);
      setJoke("Oops! Couldn't fetch a joke. Please try again later.");
    }
  };

  return (
    <section className="flex flex-col justify-center items-center gap-5 m-10">
      <div className=" flex flex-row justify-center items-center gap-2">
        <h2 className="text-xl md:text-2xl text-red-500 font-serif">
          Free Laughs
        </h2>
        <Image className=" w-20 h-20" src={hamster} alt="hamster" />
      </div>
      <div className="flex flex-row">
        <div className=" w-full h-full">
          <h2 className="text-white bg-red-400 w9 px-2 py-36 text-center rounded-lg w-80 h-96">
            {joke || "Click the button to get a joke!"}
          </h2>
        </div>
      </div>
      <button
        href="#_"
        className="relative p-0.5 inline-flex items-center justify-center font-bold overflow-hidden group rounded-md"
        onClick={fetchJoke}
      >
        <span className="w-full h-full bg-gradient-to-br from-[#ff8a05] via-[#ff5478] to-[#ff00c6] group-hover:from-[#ff00c6] group-hover:via-[#ff5478] group-hover:to-[#ff8a05] absolute"></span>
        <span className="relative px-6 py-3 transition-all ease-out bg-gray-900 rounded-md group-hover:bg-opacity-0 duration-400">
          <span className="relative text-white"> Next Joke</span>
        </span>
      </button>
    </section>
  );
}
