import React from "react";
import { NavLink } from "react-router-dom";

export default function Cards05() {
  return (
    <div>
      {" "}
      <div className="w-full h-full  px-[12px] py-[21px] rounded-md  shadow-md border bg-white">
        <div className="h-[170px]">
          <div className="mb-[23px] text-mb font-sans ml-[15px]">
            Service center
          </div>
          <div className="grid grid-cols-3 gap-2">
            <div className="flex flex-col gap-1">
              <NavLink to="SettingCenter">
                <div className="flex justify-center items-center">
                  <img
                    src="https://www.9987up.club/assets/png/settingCenter-61690292.png"
                    alt="setting"
                    className="h-[28px] w-[28px]"
                  />
                </div>
                <div className="text-[13px] text-[rgb(102,102,102)] flex justify-center items-end">
                  Settings
                </div>
              </NavLink>
            </div>
            <div className="flex flex-col gap-1">
              <NavLink to="Feedback">
                <div className="flex justify-center items-center">
                  <img
                    src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADwAAAA8CAYAAAA6/NlyAAAACXBIWXMAAAsTAAALEwEAmpwYAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAL4SURBVHgB7Zo9bxNBEIbfsR1LIJAAV6SBNFAhIoUmVJEQJS1FmiQCia8fQEHBL6BEkJAitNS0oNCQhoggV0kDyMgREgGLICMn8Q2ziwskK96985zPZ/aR7Dvr1nvz3szezO0tEAgEAjmCkAL8BDMo0kMwJuXnCcSjIVZtoM0LdAefoIy6YF4uzqEdrUCDIs/TTTyHIqqCxbNnUaD3iO/Vw2igzBO0IFslCtBlBnpiYfvawzwUKaEPeBGn5ZKNI0JFxmtF9udkqwvhKi+hJnstHGBb+t+ke/iFhCQSbIUSpkToONr/HkAZ2kQ4Kd8Vu28uLjAlF6COfawmER47pPmZCGVcs2Kzwpy7iFlrS0xiCbYnaPc8yW9oQ2geekxsiSvaW7CHWGNcDdoQNnseN6IXcQGeeAnmFzjmFGsb4oN8dqCF6SuSPt3tpvmx2OiBn4d3cMmrHZvw40cqom0f0pcvYzYlOnEWHta73zGLeJgUdU6Mvoz4mDFbk4h6LX00Y/3zFFboumTuHrjTUiPR3diE4pps15CUJCXRV5yX72p/3bYwgbxQ6uTrHrgFj6VQTKRFwW2rdi2dLdH/JtiDIHjUCYJHnSB41OlriqcLkvqZ3NWOJ1uSV/WevDroCSYp24ErinNaTRA/+PsEpodmSE9Cl6Mi9iKUURTMb6GL8ewWlNELacZLCcEvMoaPQIMDmeko6IazQfemxfJOSGsMp5Q/Qh4edYLgUSfbSstMxbJ+6unFEFRaMhEMvMKAGIJKi6YxQLKvtIg3MECyrbRyPYYNmpVWSoQ83AVjF/nBuQTCx8PfkBeKqLuauAWX8Rl54Qe2XU2cgumGDWlnR5nDqNN99/Dzu2kR3mHY+Yk3Ps28BNMt6+EqhpUI6z7eNXinJbotb/MLjhU1WSA20V2s+zaPvbiUn8LUvt7LhFKmah0Rg0SraXlJHgMju4zpOLJhVyxf7Qy1WPS1fJiXcQb7dg1IRfGNQzeEltyF99CWFFnCxyRCA4FAIJf8Af1DzvrSv8KKAAAAAElFTkSuQmCC"
                    alt="setting"
                    className="h-[28px] w-[28px]"
                  />
                </div>
                <div className="text-[13px] text-[rgb(102,102,102)] flex justify-center items-end">
                  Feedback
                </div>
              </NavLink>
            </div>
            <div className="flex flex-col gap-1">
              <NavLink to="Notification">
                <div className="flex justify-center items-center">
                  <img
                    src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADwAAAA8CAYAAAA6/NlyAAAACXBIWXMAAAsTAAALEwEAmpwYAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAALgSURBVHgB7Zq/ixNBFMe/s8kFEZWAjeliE0sPrOxy2t6hNtZ3zR2Hdv4B5sBWsFCOpFH/AoWzN901FtqmWoigjSAIgkcyzzdzUSNcdnaz82MJ84HdbHY3uf3cezN5M7tAJBKJRCKVQaAi0CHa/NIFoclX1TzjlKHYxxAlqSMgLNlFPbkDSdv8tpl5siS1HqIkQYS1aE085mh2ZyLe8Cqs07YmXmpRv55/8SZML7CORLxh0TYCksAD1Mdd1MV73mwjMM6FdWTBaWzqlDzhNKV1m1VpXBFZhVGYejiPK7XbqNEtSN4uBHVRgTSexxzhVrLPF95h2WII/gyhg4qRKUwDLH/RhBuwiUg6NJCbc3s+4wRj8RDfUABThJeMELV4dRFWURmTbP23a031E+IY0+lRXnFXvfQ1+CKhm2gkj+g5Luc6HW5owSfEskq6b+5UHQiT+k9bTuc8f5alZe2+6TT7wgIXEApOb1OU7QtLXEJICNezDrtoww2EJMnuvLwMHqqEC+EThERinHXYvnCCXwjJhCuwDBxEWHxBKKQ8NlVc9oUJP3jtP8rEolMcmU5z1WmN4BMlO5FP89TTroRT+ILTGF/lk7yDB9NoaclIqXZMqi1brKnFCEL+S9kaC47xSfTws8CXZAuLXYy4VFPSywwTP/CyBVuQHPH1vENJcsxpyUOujzchk3V+5SqGds2fEQM3US5P4XtL1BfGKXSxR/p7Z5N4dqZnJR3wvaUeSuK0tOQLTDGhe7z5HRXBeS0tHuAjx3oHFZH2MngQe3jLkd6Az5+rBXgbLelIS5aW9BoB8To8VG2al22WVimeIgBBxsMs/Yp78qtzEU/hiaBPAMweYRiqYljfdKvzz9eUlwWPPMACQYXnOe3N9eKUOMWz6kThVScKrzpROAdpyeNBKS5sKv4DDw5MFBc+h2dYVBEJ3n96vLIUFhY7PJBv6KL/AH/SlyjV79doQx+PRCKRiB1+AweR1uvbjNhiAAAAAElFTkSuQmCC"
                    alt="setting"
                    className="h-[28px] w-[28px]"
                  />
                </div>
                <div className="text-[13px] text-[rgb(102,102,102)] flex justify-center items-end">
                  Notification
                </div>
              </NavLink>
            </div>
            <div className="flex flex-col gap-1">
              <NavLink to="CustomerService">
                <div className="flex justify-center items-center">
                  <img
                    src="https://www.9987up.club/assets/png/serviceCenter-3789e366.png"
                    alt="setting"
                    className="h-[28px] w-[28px]"
                  />
                </div>
                <div className="text-[13px] text-[rgb(102,102,102)] flex justify-center items-end text-wrap text-center">
                  24/7 Customer service
                </div>
              </NavLink>
            </div>
            <div className="flex flex-col gap-1">
              <NavLink to="Guide">
                <div className="flex justify-center items-center">
                  <img
                    src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADwAAAA8CAYAAAA6/NlyAAAACXBIWXMAAAsTAAALEwEAmpwYAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAANHSURBVHgB7ZpNaxNBGMf/swlVSwOVXmztIb3Uk7TSLxDQu0LBg6f2YvEF9BuoePIgFFG0BbG9elLqtZJePClEPNlTTvbUUqgUW9k8/mdioWl3s7PJNtls5wdLNrOzu/nN88xkXwZwOBwOR3pRURXkGQo4j2H42IeHPa5vqptcTwHyDoPYRRF5LjVss6iq7qDabJ9QYXmPAR6ixAONBGze4Z6b3PaLDbGh7nO9A8grTPK8JeS9CYiUWFQ8VkmpJfi1J2HigcKU7cMWprlagB07EGwwA36qOX4miLw2gtdRkxl+HbTcrYo+uaJmTdQbyAdW38EU7GVh6iougnF581/ex49WI39MsiaISRF/8JCfj49uUCEnnOaWIbSLx5QH1tVtrNtUlwXcYEo+YIOV0D5VNSdjRwuDI5yErKbe/0cY9SnKfwsTZwPPwFOPoCMTO5ihFIMK8+gMBcqXjLiPFXUPv3WhSd0cRZOJqBWdEj6ggBxuyaJOdfWUopMJRtQKD91Ap7qW7QLdEe4iTjjrnDrh+KN0DqPw1bXQ7UoqHJAqSCnxhX11t/mFiZqg9Dqld5FC4qb0kMVVWD+XUaSUuMK8GZCVpjWUfGF0ra6du0H8lBZ84t3LZzbVuZDtHbk3bpXWLi090z9T2UejcH9LltjcPqYyteMLKz7CA65G1hOsmodFKSNeSivzlxMtW6+r6yXzICFB4vdh21G4Xi91aR0vpc3Vkzznp45ef5OaegRfRQppZdDSUUtd37TF3R5mHSecdZxw1nHCWccJZ51gYYU99D7bQYXBwoIt9Doia0HFYRH+il5HzJSHYwQKm4kpHsroVWoyG2sWzwHyli+w980ElyE2wABb7QySQqkFJAf7q1T5+9a4zDebqxU5Me0w8pLiZym+h4vQjZDDMFqldeFt9k/97uo7f32ZL9crUZPRGk6LNpAXjHg/LuAvxngkLW8/1SmOsDB6wEdG7wMbvBI0/8r6tEgQkwE5XLaSjxIWk6LLXCszgmUkRKLCh5EFStdwiWcYD6wQLKzTdVlHMknJhtPihDEDn2/kG2f3NQpXObIuM13n20lXG05c+DCyyGgfiNeFtaieCLqELKPT3UxKczgcDoejgX+TH/B4o6gbRQAAAABJRU5ErkJggg=="
                    alt="setting"
                    className="h-[28px] w-[28px]"
                  />
                </div>
                <div className="text-[13px] text-[rgb(102,102,102)] flex justify-center items-end">
                  Beginner's Guide
                </div>
              </NavLink>
            </div>
            <div className="flex flex-col gap-1">
              <NavLink to="About">
                <div className="flex justify-center items-center">
                  <img
                    src="https://www.9987up.club/assets/png/about-eb7d02f7.png"
                    alt="setting"
                    className="h-[28px] w-[28px]"
                  />
                </div>
                <div className="text-[13px] text-[rgb(102,102,102)] flex justify-center items-end">
                  About Us
                </div>
              </NavLink>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
