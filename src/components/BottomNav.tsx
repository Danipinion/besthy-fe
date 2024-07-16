import { Bot, Home, User } from "lucide-react";
import { NavLink } from "react-router-dom";

const BottomNav = () => {
  const active = window.location.pathname;

  return (
    <div>
      <div className="w-full h-16 fixed bottom-0 bg-primary text-white flex items-center justify-around">
        <NavLink
          to={"/user/chatbot"}
          className={`items-center justify-center flex flex-col  ${
            active == "/user/chatbot" ? "text-white" : "text-gray-300"
          }`}
        >
          <Bot />
          <p>Chat Bot</p>
        </NavLink>
        <NavLink
          to={"/dashboard"}
          className={`items-center justify-center flex flex-col  ${
            active == "/dashboard" ? "text-white" : "text-gray-300"
          }`}
        >
          <Home />
          <p>Home</p>
        </NavLink>
        <NavLink
          to={"/user/profile"}
          className={`items-center justify-center flex flex-col ${
            active === "/user/profile" ? "text-white" : "text-gray-300"
          }`}
        >
          <User />
          <p>Profile</p>
        </NavLink>
      </div>
    </div>
  );
};

export default BottomNav;
