import React, { useState } from "react";
import axios from "axios";
import { useNavigation } from "react-router-dom";

export default function MainLogin() {
  const [loginType, setLoginType] = useState("email");
  const [phoneNumber, setPhoneNumber] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [isChecked, setIsChecked] = useState(false);
  const navigation = useNavigation();

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

  const handleLogin = () => {
    // Example Axios request to backend for authentication
    axios
      .post("/api/login", { loginType, phoneNumber, password, email })
      .then((response) => {
        // Assuming successful login, navigate to "/home"
        navigation.navigate("/home");
      })
      .catch((error) => {
        console.error("Login failed:", error);
        // Handle login error
      });
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
              src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADAAAAAwCAYAAABXAvmHAAAACXBIWXMAAAsTAAALEwEAmpwYAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAANHSURBVHgB7VnLjeJAFGw8EoIbIRDCTAS7ZLBEMBDB4gu/C3Dge4GNgNkIYCNAG8EQAhksJ0BIwFZZbtQ2BrfNzyO5JDTd7W5c1Z9XrxkhYsSIESPGFUjIQrfbbSYSiXcUsyLCOBwOc/z5U6vVmqwb8sHLy8sUAjIi4jAMI0uusp7o9Xrj9XpttlqtJVYhCxEzEd1VWGAFcpj9BblCzE+uQCGVSs0ajUaGD9iBHUX04CDPiUa9ZG0hVF7dItA2FxEB9z12yRu5DQaDV3WXHM+AW0QymaSIqXg+PjabTY5bnOQhxrHFeQYOam+qlQNY7/f7Qy6VeALw3hEm02QZ26aACR27+xjuBnUlWK9UKibamuLB4DsleUxiyYs8YZwZ7BbRerCIEt/JAv0JKzE819E498BLBL6oiPaluBP43fgUqtXqL9axvUeoNy6OcZ8BN9xnggdpv99PxI29wiafK5fLc04aJm9kZwYXYWh8sWMl+II7eMUCk/KmkJ/pkCd8BRBuETc2PIdBpdPpT75Pd7CWAOKciGsMTzWosGmMtgDCSwQND0R+i+BwGFTYHMz3EHvBfbAJxOoG2pua41WD+o6kbIK2UJlwoBWQ4Epgr07UNl2vUA3KImAYw7DkrfEiJPDipruNIhBNzAvDjgYlYedcoc9RWAElhLy/skKr73Q6P1iu1+uM33nV8NwGxf7tdtuKNKZpLq8REVgAt4AkQkir5z6GCCvpwyzzdifD7IJltFkHne5q95/dQkSgQ0zy6haw79EOqwe5lryvqvByV/TlKllhlPXhcJjZbre8qNzeB4APP/IE2/hMnJI/cVfewRk+6QGsh1kJLQEMm9g2RYV84VKSxWe8R9h9/dw1e40IHQELxnzhJD/2G8RLEET8w17/FP4GFVqEnwArXZCGpUtegvE9QIw/EYGQnBc++dYlAccki5Wg5EPCIUInaTx3I1ti6fMPJi8RSISngN1uV2RuzvKDyUtoi/C61DfhptbPKU8iL6ElwiFANaonk5fwFXEUwBQ3YuQlLoqQPy1OZYprXy6iQl7CUwQ+0wQdc7VatdSf7q7Jz+8MR2gnjv/g+ALkJRwi1DPwbmeHUccCHvVNxIgRI0Yk8B/jXmlqMD7YrgAAAABJRU5ErkJggg=="
              alt="Email Login"
              className="h-[26px]"
            />
          </div>
          <div>Email Login</div>
        </div>
      </div>
      <form className="h-full w-full my-[28px] px-[21px]">
        <div className="mb-8">
          <div className="flex mb-[12px]">
            <div>
              <img
                src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADAAAAAwCAYAAABXAvmHAAAACXBIWXMAAAsTAAALEwEAmpwYAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAGeSURBVHgB7dm9SgNBEAfwmU0CkkIEjSJEOdHCzl4bwTZC3kDshdjEj8qkUYMK4hPkHbQUzCMkneURFMFok0IUvV33RDudW8heBmF+EFLsBOafux2OWwAhBoKuhS8XC8X+68dKxpgipChCvMvnR65Ht26fXeqdAvSO59ZBmRIMk9ZXhb3uZVJZYgCW5n84hFDUYv9wcZyt+ZhSpfuz+RmyhFp8z72tAbNcFC1T62QArYFMPwyo6KFBBvgPJAA3CcBNAnCTANwkADcJwE0CcJMA3CSAGBD5XujpNCiDhjFgZBDCQjVs/bWeJX9sTMV+rQKv1vfnV7KJuWXBJ8SWMRCSJRDvKVMGT7wFQMDmRDXcdKl9bMw2EXEDPPB2C9l/vuNai0q1wRN/VwBNpXcSJDaG8Vi2082AH94C2IYC29hNYp3zmZAbGaPcyABo0HljpsU+DZA90AccAE1gFkXqnFonA0zuhG276+rARBtTn94PQ6rG7Zi1EdTs/XQAQxQ3P7XbrSXVOQ+1h6MgyKDexoxaghSZSHfs6WTz6+oLkb5POch2V1RS234AAAAASUVORK5CYII="
                alt="input phone number"
                className="mr-[6px] h-[25px] flex justify-center items-baseline"
              />
            </div>
            <span className="w-fit h-fit text-[#666666]">
              {loginType === "phone" ? "Phone number" : "Email"}
            </span>
          </div>
          <div>
            <div className="relative w-full flex items-center gap-x-3 text-[#888888] p-1">
              {loginType === "phone" ? (
                <div className="w-1/3">
                  <select
                    className="h-full w-full px-[13px] py-[14px] text-base border-solid border-[rgb(136,136,136)] rounded-lg z-10 shadow-lg"
                    onChange={handlePhoneNumberChange}
                    value={phoneNumber}
                  >
                    <option value="+91">+91</option>
                    <option value="+971">+971</option>
                    <option value="+972">+972</option>
                    <option value="+92">+92</option>
                  </select>
                </div>
              ) : null}
              <div className="w-full z-10 p-1 ">
                <input
                  type={loginType === "phone" ? "text" : "email"}
                  placeholder={
                    loginType === "phone" ? "Enter phone number" : "Enter email"
                  }
                  className={`w-full bg-[rgb(255,255,255)] px-[13px] py-[14px] border-solid border-[rgb(136,136,136)] rounded-lg shadow-lg  ${
                    loginType === "email" ? " " : ""
                  }`}
                  onChange={
                    loginType === "phone"
                      ? handlePhoneNumberChange
                      : handleEmailChange
                  }
                  value={loginType === "phone" ? phoneNumber : email}
                />
              </div>
            </div>
          </div>
        </div>
        <div className="mb-8">
          <div className="flex mb-[12px]">
            <div>
              <img
                src="https://www.9987up.club/assets/png/password-c9fb65d7.png"
                alt="input phone number"
                className="mr-[6px] h-[25px] flex justify-center items-baseline"
              />
            </div>
            <span className="w-fit h-fit text-[#666666]">Password</span>
          </div>
          <div>
            <div className="w-full flex items-center gap-x-3 text-[#888888]">
              <div className="w-full z-10 p-1">
                <input
                  type="password"
                  placeholder="Password"
                  className="w-full bg-[rgb(255,255,255)] px-[11px] py-[12px] border-solid border-[rgb(136,136,136)] rounded-lg shadow-lg"
                  onChange={handlePasswordChange}
                  value={password}
                />
              </div>
            </div>
          </div>
        </div>
        <div>
          <div className="flex items-center">
            <div
              className={`w-6 h-6 border rounded-full flex justify-center items-center border-gray-400 mr-3 cursor-pointer ${
                isChecked ? "bg-orange-500 border-orange-500" : ""
              }`}
              onClick={toggleCheckbox}
            >
              {isChecked && (
                <svg
                  className="w-4 h-4 text-white fill-current"
                  viewBox="0 0 24 24"
                >
                  <path d="M0 11l2-2 5 5L18 3l2 2L7 18z" />
                </svg>
              )}
            </div>
            <label
              htmlFor="remember-password"
              className=" text-[#888888] text-sm"
            >
              Remember Password
            </label>
          </div>
        </div>
        <div className="grid grid-cols-1">
          <div className="mt-[30px] w-full flex justify-center items-center ">
            <button
              className="w-4/5 px-[6px] py-[3px] text-white -700 border font-mono text-2xl  bg-[rgb(235,138,31)] rounded-full"
              onClick={handleLogin}
            >
              Log in
            </button>
          </div>
          <div className="mt-[25px] w-full flex justify-center items-center">
            <button className="w-4/5 px-[6px] py-[1px] border border-[rgb(235,138,31)] font-mono text-[rgb(235,138,31)] text-2xl rounded-full">
              Register
            </button>
          </div>
        </div>
      </form>
    </div>
  );
}
