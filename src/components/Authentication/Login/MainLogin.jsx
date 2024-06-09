import React, { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

export default function MainLogin() {
  const [loginType, setLoginType] = useState("email");
  const [phoneNumber, setPhoneNumber] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [isChecked, setIsChecked] = useState(false);
  const navigate = useNavigate();
  const [userData, setUserData] = useState({
    name: "",
    userId: "",
    phone: "",
    avatar: "",
  });
  const token = ""; // Add the token value here

  const toggleCheckbox = () => {
    setIsChecked(!isChecked);
  };

  const handleToggleLoginType = (type) => {
    if (type !== loginType) {
      setLoginType(type);
      // Clear phone number or email when toggling between login types
      setPhoneNumber("");
      setPassword("");
    }
  };

  const handlePhoneNumberChange = (e) => {
    setPhoneNumber(e.target.value);
  };

  const handlePasswordChange = (e) => {
    setPassword(e.target.value);
  };
  const handleEmailChange = (e) => {
    setEmail(e.target.value);
  };

  const handleRegister = () => {
    navigate("signUp");
  };

  const config = {
    headers: { Authorization: `Bearer ${token}` },
  };

  const bodyParameters = {
    key: "value",
  };

  const handleLogin = () => {
    // Example Axios request to backend for authentication
    axios
      .post(import.meta.env.VITE_API_KEY + "auth/login", bodyParameters, config)
      .then(function (response) {
        setUserData(response.user.payload);
        localStorage.setItem("accessToken", response.data.accessToken); // Assuming response contains accessToken
        console.log(response);
      })
      .catch(console.log);
  };

  return (
    <div className="h-screen w-full bg-[#f2f3f5]">
      <div className="flex justify-around px-5">
        <div
          className={`grid justify-items-center gap-y-2 py-2 w-1/2 border-b-2 ${
            loginType === "phone" ? "border-orange-500" : ""
          }`}
          onClick={() => handleToggleLoginType("phone")}
        >
          <div className="w-fit h-fit">
            <img
              src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADAAAAAwCAYAAABXAvmHAAAACXBIWXMAAAsTAAALEwEAmpwYAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAIUSURBVHgB7ZpNThsxGIbfb5LuYdGmXWFuQE9AegM4QcMJAptGXTWsqlIkmhPQI9ATwBFyA9xuKvEjYAELmPHHN/wsCLFnHJmxkPxIUaL4S8bPeDwj+TWhguOfqgvwNzC6aJYxg0bvvujfriJyNZ5uq74x/AsRKZg23g+0tQ9WgbMdpYob3mdAoSYG9McUWHfVtFvYkRFdgQftNzQ/v6HPp7bZflQUWPLpfElLvDtftXbVHP1QF+Qc9+fk1+jJ29RRsArI6ZyDN9w92lK7rooMvMzwxtoXu8AMlCNG4F5FTVD8BJg20QQZ98W01hXgJfB2oIdogJOthc+MegIZXjlJIDZJIDZJIDZJIDZJIDZJIDZJIDZJIDZJIDZJIDZJIDZJIDZJIDavXsBrafH/d6XQCPWXgL0E2i0+RAP4rGCnOTANOYOaQGt5QYsS1H2U11r5HV6AoAFHiXR0fHlFnxaHTzKtsWRue3nO+1KwhIAEH4GioNWJzt9RhnR5TqsSK54jIGEFCAcfHCHffRuNEZCgAobpoqqGDf4iIEEFMuKFqhrKUFnjdUyERCbo/daE6ZThOZi7CEjwSUzMu3cdneAx+cdsWCe+a6vBnNz2DuvGnRN/qploJB8fJqxZlufCOvMs4bkk9fI8sd0cnKG/pO49Ca6dyftLY5g3O4N/Q1t75a6Fk221ImeuH/rarYTowBiMOgO95yq7BYiGrr4R2DcCAAAAAElFTkSuQmCC"
              alt="login with phone"
              className="h-[26px] flex justify-center items-center"
            />
          </div>
          <div className="h-fit w-fit text-base">Log in with phone</div>
        </div>
        <div
          className={`grid justify-items-center gap-y-2 py-2 w-1/2 border-b-2 ${
            loginType === "email" ? "border-orange-500" : ""
          }`}
          onClick={() => handleToggleLoginType("email")}
        >
          <div>
            <img
              src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADAAAAAwCAYAAABXAvmHAAAACXBIWXMAAAsTAAALEwEAmpwYAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAANHSURBVHgB7VnLjeJAFGw8EoIbIRDCTAS7ZLBEMBDB4gu/C3Dge4GNgNkIYCNAG8EQAhksJ0BIwFZZbtQ2BrfNzyO5JDTd7W5c1Z9XrxkhYsSIESPGFUjIQrfbbSYSiXcUsyLCOBwOc/z5U6vVmqwb8sHLy8sUAjIi4jAMI0uusp7o9Xrj9XpttlqtJVYhCxEzEd1VWGAFcpj9BblCzE+uQCGVSs0ajUaGD9iBHUX04CDPiUa9ZG0hVF7dItA2FxEB9z12yRu5DQaDV3WXHM+AW0QymaSIqXg+PjabTY5bnOQhxrHFeQYOam+qlQNY7/f7Qy6VeALw3hEm02QZ26aACR27+xjuBnUlWK9UKibamuLB4DsleUxiyYs8YZwZ7BbRerCIEt/JAv0JKzE819E498BLBL6oiPaluBP43fgUqtXqL9axvUeoNy6OcZ8BN9xnggdpv99PxI29wiafK5fLc04aJm9kZwYXYWh8sWMl+II7eMUCk/KmkJ/pkCd8BRBuETc2PIdBpdPpT75Pd7CWAOKciGsMTzWosGmMtgDCSwQND0R+i+BwGFTYHMz3EHvBfbAJxOoG2pua41WD+o6kbIK2UJlwoBWQ4Epgr07UNl2vUA3KImAYw7DkrfEiJPDipruNIhBNzAvDjgYlYedcoc9RWAElhLy/skKr73Q6P1iu1+uM33nV8NwGxf7tdtuKNKZpLq8REVgAt4AkQkir5z6GCCvpwyzzdifD7IJltFkHne5q95/dQkSgQ0zy6haw79EOqwe5lryvqvByV/TlKllhlPXhcJjZbre8qNzeB4APP/IE2/hMnJI/cVfewRk+6QGsh1kJLQEMm9g2RYV84VKSxWe8R9h9/dw1e40IHQELxnzhJD/2G8RLEET8w17/FP4GFVqEnwArXZCGpUtegvE9QIw/EYGQnBc++dYlAccki5Wg5EPCIUInaTx3I1ti6fHn+OknqMPaJgXfGJsv4syvxWq1WgnwOF2DJ2BHAw3AAAAAElFTkSuQmCC"
              alt="login with email"
              className="h-[26px] flex justify-center items-center"
            />
          </div>
          <div className="h-fit w-fit text-base">Log in with email</div>
        </div>
      </div>
      <div className="py-3 mx-4">
        <form>
          {loginType === "phone" ? (
            <div>
              <label htmlFor="phone" className="font-medium text-gray-500">
                Phone Number
              </label>
              <div className="border rounded-lg bg-white mt-2">
                <input
                  type="tel"
                  name="phone"
                  id="phone"
                  placeholder="Enter your phone number"
                  value={phoneNumber}
                  onChange={handlePhoneNumberChange}
                  className="px-3 py-2 w-full"
                />
              </div>
            </div>
          ) : (
            <div>
              <label htmlFor="email" className="font-medium text-gray-500">
                Email Address
              </label>
              <div className="border rounded-lg bg-white mt-2">
                <input
                  type="email"
                  name="email"
                  id="email"
                  placeholder="Enter your email address"
                  value={email}
                  onChange={handleEmailChange}
                  className="px-3 py-2 w-full"
                />
              </div>
            </div>
          )}
          <div className="mt-4">
            <label htmlFor="password" className="font-medium text-gray-500">
              Password
            </label>
            <div className="border rounded-lg bg-white mt-2">
              <input
                type="password"
                name="password"
                id="password"
                placeholder="Enter your password"
                value={password}
                onChange={handlePasswordChange}
                className="px-3 py-2 w-full"
              />
            </div>
          </div>
          <div className="mt-4 flex items-center">
            <input
              type="checkbox"
              id="checkbox"
              checked={isChecked}
              onChange={toggleCheckbox}
              className="mr-2"
            />
            <label htmlFor="checkbox" className="text-sm text-gray-500">
              Remember me
            </label>
          </div>
          <div className="mt-6">
            <button
              type="button"
              onClick={handleLogin}
              className="bg-orange-500 text-white w-full py-2 rounded-lg hover:bg-orange-600 transition duration-300"
            >
              Log In
            </button>
          </div>
        </form>
        <div className="mt-4 text-center">
          <button
            onClick={handleRegister}
            className="text-orange-500 hover:underline"
          >
            Don't have an account? Sign up
          </button>
        </div>
      </div>
    </div>
  );
}
