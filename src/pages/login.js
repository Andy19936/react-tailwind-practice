import React from "react";

export const Login = () => {
  return (
    <div className="space-y-0 bg-purple-500">
      <div className=" h-screen  flex justify-center items-center">
        <div className="p-5 bg-white w-1/2 rounded-lg">
          <form className="p-3 flex flex-col space-y-10 ">
            <p className="text-xl ">Login</p>
            <input type="email" placeholder="email" className="p-2 bg-gray-200" />
            <input
              type="password"
              placeholder="password"
              className="p-2 bg-gray-200"
            />
            <button type="submit" className="p-2 bg-gray-100 rounded">
              submit
            </button>
          </form>
        </div>
      </div>
      <div className="h-screen flex justify-center items-center">
        <div className="p-5 bg-white w-1/2 rounded-lg">
          <form className="p-3 flex flex-col space-y-10">
            <p className="text-xl">Sign Up</p>
            <input
              type="text"
              placeholder="username"
              className="p-2 w-3/4 bg-gray-200"
            />
            <input type="email" placeholder="email" className="p-2 bg-gray-200" />
            <input
              type="password"
              placeholder="password"
              className="p-2 bg-gray-200"
            />
            <input
              type="password"
              placeholder="confirm password"
              className="p-2 bg-gray-200"
            />
            <button type="submit" className="p-2 bg-gray-100 rounded">
              submit
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};
