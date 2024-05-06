import React, { useState } from "react";

const MainLogin = () => {
  const [loginType, setLoginType] = useState("email");

  const handleToggleLoginType = () => {
    setLoginType((prevType) => (prevType === "email" ? "phone" : "email"));
  };

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100">
      <div className="bg-white p-8 rounded shadow-md">
        <h2 className="text-2xl mb-4">Login</h2>
        {loginType === "email" ? (
          <form className="space-y-4">
            <div>
              <label htmlFor="email" className="block">
                Email:
              </label>
              <input
                type="email"
                id="email"
                className="w-full border border-gray-300 rounded px-4 py-2"
              />
            </div>
            <div>
              <label htmlFor="password" className="block">
                Password:
              </label>
              <input
                type="password"
                id="password"
                className="w-full border border-gray-300 rounded px-4 py-2"
              />
            </div>
            <button
              type="submit"
              className="w-full bg-blue-500 text-white rounded px-4 py-2 hover:bg-blue-600"
            >
              Login
            </button>
          </form>
        ) : (
          <form className="space-y-4">
            <div>
              <label htmlFor="phone" className="block">
                Phone Number:
              </label>
              <input
                type="tel"
                id="phone"
                className="w-full border border-gray-300 rounded px-4 py-2"
              />
            </div>
            <div>
              <label htmlFor="otp" className="block">
                OTP:
              </label>
              <input
                type="text"
                id="otp"
                className="w-full border border-gray-300 rounded px-4 py-2"
              />
            </div>
            <button
              type="submit"
              className="w-full bg-blue-500 text-white rounded px-4 py-2 hover:bg-blue-600"
            >
              Login
            </button>
          </form>
        )}
        <div className="mt-4 text-center">
          <button
            className="text-blue-500 hover:underline"
            onClick={handleToggleLoginType}
          >
            {loginType === "email" ? "Login with Phone" : "Login with Email"}
          </button>
        </div>
      </div>
    </div>
  );
};

export default MainLogin;
