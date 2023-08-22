import { useState, useEffect, useRef } from 'react';

function Nav() {
  const [isOpen, setIsOpen] = useState(false);
  const [currentSection, setCurrentSection] = useState('');

  const menuRef = useRef(null);

  const handleMenuToggle = () => {
    setIsOpen(!isOpen);
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
      document.addEventListener('click', closeMenuOnOutsideClick);
    }

    return () => {
      document.removeEventListener('click', closeMenuOnOutsideClick);
    };
  }, [isOpen]);

  useEffect(() => {
    const onScroll = () => {
      const sections = ['home', 'aboutMe', 'skills', 'projects', 'contact'];
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

      setCurrentSection(currentSection ? currentSection.section : '');
    };

    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  useEffect(() => {
    const hideMenuOnSectionChange = () => {
      setIsOpen(false);
    };

    document.addEventListener('scroll', hideMenuOnSectionChange);

    return () => {
      document.removeEventListener('scroll', hideMenuOnSectionChange);
    };
  }, [currentSection]);

  return (
    <nav className=" bg-navcolor border-gray-200 dark:bg-gray-900 fixed top-0 left-0 right-0 z-30">
      <div className="max-w-screen flex flex-wrap items-center justify-between mx-auto p-4">
        <a href="" className="flex items-center">
          <span className="self-center text-2xl font-dancing whitespace-nowrap">
            <div>
              <svg
                className="ml-1"
                fill="#000000"
                height="50px"
                width="50px"
                version="1.1"
                id="Layer_1"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 511.965 511.965"
              >
                <g>
                  <g>
                    <path
                      d="M447.983,63.965c-113.28,0-176.811-57.664-177.429-58.261c-8.149-7.595-20.907-7.616-29.141,0
			c-0.619,0.597-64.149,58.261-177.429,58.261c-11.797,0-21.333,9.557-21.333,21.333v154.432
			c0,80.811,46.208,167.317,120.555,225.749c26.944,21.184,56.107,36.523,86.72,45.589c1.984,0.597,4.011,0.896,6.059,0.896
			c2.048,0,4.075-0.299,6.059-0.896c30.613-9.067,59.776-24.405,86.72-45.589c74.347-58.432,120.555-144.939,120.555-225.749V85.299
			C469.316,73.523,459.78,63.965,447.983,63.965z M164.399,240.883c3.989,3.989,6.251,9.429,6.251,15.083v42.56
			c11.051,0.896,20.459,10.155,20.459,21.355c0,11.776-8.661,21.419-20.459,21.419c-25.131,0-42.667-17.536-42.667-42.667v-33.835
			L112.9,249.715c-8.341-8.341-8.341-21.824,0-30.165l15.083-15.083v-33.835c0-25.131,17.536-42.667,42.667-42.667
			c11.797,0,21.333,9.557,21.333,21.333c0,11.733-9.451,21.248-21.163,21.333l-0.171,42.667c0,5.653-2.261,11.093-6.251,15.083
			l-6.251,6.251L164.399,240.883z M298.009,154.483l-42.667,170.667c-2.432,9.685-11.115,16.149-20.672,16.149
			c-1.707,0-3.456-0.192-5.184-0.64c-11.435-2.859-18.411-14.443-15.531-25.877l42.667-170.667
			c2.837-11.413,14.379-18.432,25.856-15.509C293.913,131.464,300.868,143.048,298.009,154.483z M399.065,249.715l-15.083,15.083
			v33.835c0,25.131-17.536,42.667-42.667,42.667c-11.797,0-21.333-9.557-21.333-21.333c0-11.733,9.451-21.248,21.163-21.333
			l0.171-42.667c0-5.653,2.24-11.093,6.251-15.083l6.251-6.251l-6.251-6.251c-4.011-3.989-6.251-9.429-6.251-15.083v-42.56
			c-11.051-0.896-20.459-10.155-20.459-21.355c0-11.776,8.661-21.419,20.459-21.419c25.131,0,42.667,17.536,42.667,42.667v33.835
			l15.083,15.083C407.407,227.891,407.407,241.373,399.065,249.715z"
                    />
                  </g>
                </g>
              </svg>
            </div>
          </span>
        </a>
        <button
          data-collapse-toggle="navbar-default"
          type="button"
          className="inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-white rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600"
          aria-controls="navbar-default"
          aria-expanded={isOpen ? 'true' : 'false'}
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
          className={`w-full md:block md:w-auto ${isOpen ? 'block' : 'hidden'}`}
        >
          <ul className="font-semibold flex flex-col items-center p-4 md:p-0 mt-4 mr-2 text-xl rounded-lg md:flex-row md:space-x-8 md:mt-0 md:border-0 md:dark:bg-gray-800  dark:border-gray-700 2xl:px-6">
            <li>
              <a
                href="#home"
                className={`block py-2 pl-3 pr-4 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:p-0 ${
                  currentSection === 'home'
                    ? 'text-white dark:text-white md:dark:text-white dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent'
                    : 'text-black dark:text-white md:dark:text-white dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent'
                }`}
              >
                Home
              </a>
            </li>
            <li>
              <a
                href="#aboutMe"
                className={`block py-2 pl-3 pr-4 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:p-0 ${
                  currentSection === 'aboutMe'
                    ? 'text-white dark:text-white md:dark:text-white dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent'
                    : 'text-black dark:text-white md:dark:text-white dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent'
                }`}
              >
                About Me
              </a>
            </li>
            <li>
              <a
                href="#skills"
                className={`block py-2 pl-3 pr-4 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:p-0 ${
                  currentSection === 'skills'
                    ? 'text-white dark:text-white md:dark:text-white dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent'
                    : 'text-black dark:text-white md:dark:text-white dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent'
                }`}
              >
                Skills
              </a>
            </li>
            <li>
              <a
                href="#projects"
                className={`block py-2 pl-3 pr-4 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:p-0 ${
                  currentSection === 'projects'
                    ? 'text-white dark:text-white md:dark:text-white dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent'
                    : 'text-black dark:text-white md:dark:text-white dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent'
                }`}
              >
                Projects
              </a>
            </li>
            <li>
              <a
                href="#contact"
                className={`block py-2 pl-3 pr-4 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:p-0 ${
                  currentSection === 'contact'
                    ? 'text-white dark:text-white md:dark:text-white dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent'
                    : 'text-black dark:text-white md:dark:text-white dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent'
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
