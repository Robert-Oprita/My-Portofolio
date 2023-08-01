import React, { useState, useEffect, useRef } from "react";
import logo from "../assets/skills/code1.png";

function Nav() {
  const [isOpen, setIsOpen] = useState(false);
  const [currentSection, setCurrentSection] = useState("");

  const menuRef = useRef(null);

  const handleMenuToggle = () => {
    setIsOpen(!isOpen);
  };

  const closeMenu = () => {
    setIsOpen(false);
  };

  useEffect(() => {
    const closeMenuOnOutsideClick = (event) => {
      if (
        isOpen &&
        menuRef.current &&
        !menuRef.current.contains(event.target)
      ) {
        setIsOpen(false);
      }
    };

    if (isOpen) {
      document.addEventListener("click", closeMenuOnOutsideClick);
    }

    return () => {
      document.removeEventListener("click", closeMenuOnOutsideClick);
    };
  }, [isOpen]);

  useEffect(() => {
    const onScroll = () => {
      const sections = ["home", "aboutMe", "skills", "projects", "contact"];
      const sectionOffsets = sections.map((section) => {
        const element = document.getElementById(section);
        return {
          section,
          offsetTop: element.offsetTop,
          offsetBottom: element.offsetTop + element.offsetHeight,
        };
      });

      const currentScroll = window.scrollY + window.innerHeight / 2;
      const currentSection = sectionOffsets.find(
        ({ offsetTop, offsetBottom }) =>
          currentScroll >= offsetTop && currentScroll < offsetBottom
      );

      setCurrentSection(currentSection ? currentSection.section : "");
    };

    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    const hideMenuOnSectionChange = () => {
      setIsOpen(false);
    };

    document.addEventListener("scroll", hideMenuOnSectionChange);

    return () => {
      document.removeEventListener("scroll", hideMenuOnSectionChange);
    };
  }, [currentSection]);

  return (
    <nav class="  bg-navcolor border-gray-200 dark:bg-gray-900  fixed top-0 left-0 right-0 z-50 ">
      <div class="max-w-screen flex flex-wrap items-center justify-between mx-auto p-4 ">
        <a href="" class="flex items-center">
          <span class="self-center text-2xl font-dancing whitespace-nowrap">
            <img src={logo} alt="logo" className="h-10 w-10 2xl:mr-10" />
          </span>
        </a>
        <button
          data-collapse-toggle="navbar-default"
          type="button"
          className="inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-white rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600"
          aria-controls="navbar-default"
          aria-expanded={isOpen ? "true" : "false"}
          onClick={handleMenuToggle}
        >
          <svg
            className="w-5 h-5"
            aria-hidden="true"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 17 14"
          >
            <path
              stroke="currentColor"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M1 1h15M1 7h15M1 13h15"
            />
          </svg>
        </button>
        <div
          className={`w-full md:block md:w-auto ${isOpen ? "block" : "hidden"}`}
        >
          <ul class="font-semibold flex flex-col items-center p-4 md:p-0 mt-4 text-xl   rounded-lg  md:flex-row md:space-x-8 md:mt-0 md:border-0 md:dark:bg-gray-800  dark:border-gray-700 2xl:px-6">
            <li>
              <a
                href="#home"
                class={`block py-2 pl-3 pr-4 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:p-0 ${
                  currentSection === "home"
                    ? "text-white dark:text-white md:dark:text-white dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent"
                    : "text-black dark:text-white md:dark:text-white dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent"
                }`}
              >
                Home
              </a>
            </li>
            <li>
              <a
                href="#aboutMe"
                class={`block py-2 pl-3 pr-4 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:p-0 ${
                  currentSection === "aboutMe"
                    ? "text-white dark:text-white md:dark:text-white dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent"
                    : "text-black dark:text-white md:dark:text-white dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent"
                }`}
              >
                About Me
              </a>
            </li>
            <li>
              <a
                href="#skills"
                class={`block py-2 pl-3 pr-4 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:p-0 ${
                  currentSection === "skills"
                    ? "text-white dark:text-white md:dark:text-white dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent"
                    : "text-black dark:text-white md:dark:text-white dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent"
                }`}
              >
                Skills
              </a>
            </li>
            <li>
              <a
                href="#projects"
                class={`block py-2 pl-3 pr-4 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:p-0 ${
                  currentSection === "projects"
                    ? "text-white dark:text-white md:dark:text-white dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent"
                    : "text-black dark:text-white md:dark:text-white dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent"
                }`}
              >
                Projects
              </a>
            </li>
            <li>
              <a
                href="#contact"
                class={`block py-2 pl-3 pr-4 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:p-0 ${
                  currentSection === "contact"
                    ? "text-white dark:text-white md:dark:text-white dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent"
                    : "text-black dark:text-white md:dark:text-white dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent"
                }`}
              >
                Contact
              </a>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}

export default Nav;
