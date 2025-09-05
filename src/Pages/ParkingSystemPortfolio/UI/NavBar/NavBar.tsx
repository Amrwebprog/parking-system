import { Menu, X } from "lucide-react";
import type { NavListsType } from "../Types";
import { useState } from "react";
import { Link } from "react-router-dom";
const NavLists: NavListsType[] = [
  { DisplayText: "HeroSection", Link: "#HeroSection" },
  { DisplayText: "Project Flow", Link: "#FlowSection" },
  { DisplayText: "AboutUs Section", Link: "#About" },
  { DisplayText: "GetStarted", Link: "#GetStart" },
];

function NavBar() {
  const [isOpen, setIsOpen] = useState<boolean>(false);
  return (
    <nav className="bg-gradient-to-r from-fuchsia-500 to-teal-400 shadow-md">
      <div className="container mx-auto flex justify-between items-center py-4 px-6">
        <div className="text-white font-bold text-xl cursor-pointer">
          MyLogo
        </div>

        <ul className="hidden md:flex space-x-8 text-white font-medium">
          {NavLists.map((List, key) => (
            <li
              key={key}
              className="hover:text-gray-200 cursor-pointer transition"
            >
              <a href={List.Link}>{List.DisplayText}</a>
            </li>
          ))}
        </ul>
        <Link to={"/login"}>
          <button className="bg-white text-purple-600 px-4 py-2 rounded-xl font-semibold shadow hover:bg-gray-100 transition">
            Login
          </button>
        </Link>
        {isOpen && (
          <div className="absolute  top-16 left-0 w-full bg-gray-800 text-white flex flex-col items-center gap-4 p-4 md:hidden">
            {NavLists.map((List, key) => (
              <li
                key={key}
                className="hover:text-gray-200 cursor-pointer transition"
              >
                <a href={List.Link}>{List.DisplayText}</a>
              </li>
            ))}
          </div>
        )}
        <div
          className="md:hidden text-white cursor-pointer"
          onClick={() => setIsOpen(!isOpen)}
        >
          {isOpen ? <X /> : <Menu />}
        </div>
      </div>
    </nav>
  );
}

export default NavBar;
