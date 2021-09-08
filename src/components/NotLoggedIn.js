import React from "react";
import { Link } from "react-router-dom";

const NotLoggedIn = () => {
  return (
    <div className="bg-purple-500 h-screen flex flex-col justify-center items-center">
      <h1 className="lg:text-9xl md:text-7xl sm:text-5xl text-3xl text-white font-black mb-14">
        PepWalk
      </h1>
      <br />
      <h1 className="lg:text-xl md:text-7xl sm:text-5xl text-3xl text-white font-black mb-14">
        Exercising has been proven to have many health benefits but It can be
        very hard to start building new fitness habits especially when most
        peoples motivators come from a change in their physique which let’s face
        it doesn’t happen overnight.. so it can be very easy to lose interest
        and motivation, but did you know one of the biggest health benefits from
        regular exercise is a major improvement in your mental health?
        Exercising provides an outlet for your stress anxiety and depression it
        also helps improve your memory, thought process and it even makes you
        sleep better! So we at PepWalk came up with a solution to fill those
        gaps in motivation by providing you with an app that keeps track of not
        only your weight or what exercise you did for the day but more
        importantly how you’re feeling throughout your day! Logging your mood
        and seeing the internal benefits that you’re reaping from your fitness
        journey or lack thereof has so much more value to it than stepping on a
        scale or looking in the mirror. Looking back at your entries will help
        you get a clearer understanding that what you’re doing is actually
        working not just on the outside but on the inside as well!
      </h1>
      <br />
      <Link
        className="py-6 px-10  bg-white rounded-full text-3xl hover:bg-blue-300 transition duration-300 ease-in-out flex items-center animate-bounce text-black font-extralight "
        to="/login"
      >
        Login
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="h-6 w-6 ml-3"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M11 16l-4-4m0 0l4-4m-4 4h14m-5 4v1a3 3 0 01-3 3H6a3 3 0 01-3-3V7a3 3 0 013-3h7a3 3 0 013 3v1"
          />
        </svg>
      </Link>
      <br />
    </div>
  );
};

export default NotLoggedIn;
