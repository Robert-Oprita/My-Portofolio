import adaptability from '../assets/images/skills/adaptability.jpg';
import problemSolving from '../assets/images/skills/problemSolving.jpg';
import timeManagement from '../assets/images/skills/timeManagement.jpg';
import communication from '../assets/images/skills/communication.jpg';

import TitleSections from '../components/TitleSections';
import Knowledge from '../components/Knowledge';
import AnimationSections from '../components/animations/AnimationSections.jsx';
import SoftSkills from '../components/SoftSkills';
import TechnicalSkills from '../components/TechnicalSkills';

const Skills = () => {
  return (
    <>
      <div
        className="wrapperSkills bg-neutral-800 h-auto max-w-full flex flex-col items-center md:flex-col-3 lg:flex-col-2"
        id="skills"
      >
        <AnimationSections>
          <div className="techincallySkills text-white flex flex-col text-2xl shadow-gray-500 mb-36 lg:flex-1">
            <TitleSections titleS="Technically Skills" />
            <p className=" text-center mb-5 text-xl">
              I develop my Skills{' '}
              <span className="text-orange-500 italic text-2xl font-semibold">
                Regularry!
              </span>
            </p>
            <div className="techSkills bg-neutral-800 md:grid grid-cols-2">
              <TechnicalSkills
                imgSkill={
                  <svg
                    className="h-32 w-32 mt-4"
                    width="800px"
                    height="800px"
                    viewBox="0 0 32 32"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path d="M6 28L4 3H28L26 28L16 31L6 28Z" fill="#E44D26" />
                    <path d="M26 5H16V29.5L24 27L26 5Z" fill="#F16529" />
                    <path
                      d="M9.5 17.5L8.5 8H24L23.5 11H11.5L12 14.5H23L22 24L16 26L10 24L9.5 19H12.5L13 21.5L16 22.5L19 21.5L19.5 17.5H9.5Z"
                      fill="white"
                    />
                  </svg>
                }
                titleSkill="HTML"
                progress="90"
                progressColor="bg-orange-400"
              />
              <TechnicalSkills
                imgSkill={
                  <svg
                    className="h-32 w-32 mt-4"
                    width="800px"
                    height="800px"
                    viewBox="0 0 32 32"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path d="M6 28L4 3H28L26 28L16 31L6 28Z" fill="#1172B8" />
                    <path d="M26 5H16V29.5L24 27L26 5Z" fill="#33AADD" />
                    <path
                      d="M19.5 17.5H9.5L9 14L17 11.5H9L8.5 8.5H24L23.5 12L17 14.5H23L22 24L16 26L10 24L9.5 19H12.5L13 21.5L16 22.5L19 21.5L19.5 17.5Z"
                      fill="white"
                    />
                  </svg>
                }
                titleSkill="CSS"
                progress="80"
                progressColor="bg-sky-700"
              />
              <TechnicalSkills
                imgSkill={
                  <svg
                    className="h-32 w-32 mt-4"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 54 33"
                  >
                    <g clipPath="url(#prefix__clip0)">
                      <path
                        fill="#38bdf8"
                        fillRule="evenodd"
                        d="M27 0c-7.2 0-11.7 3.6-13.5 10.8 2.7-3.6 5.85-4.95 9.45-4.05 2.054.513 3.522 2.004 5.147 3.653C30.744 13.09 33.808 16.2 40.5 16.2c7.2 0 11.7-3.6 13.5-10.8-2.7 3.6-5.85 4.95-9.45 4.05-2.054-.513-3.522-2.004-5.147-3.653C36.756 3.11 33.692 0 27 0zM13.5 16.2C6.3 16.2 1.8 19.8 0 27c2.7-3.6 5.85-4.95 9.45-4.05 2.054.514 3.522 2.004 5.147 3.653C17.244 29.29 20.308 32.4 27 32.4c7.2 0 11.7-3.6 13.5-10.8-2.7 3.6-5.85 4.95-9.45 4.05-2.054-.513-3.522-2.004-5.147-3.653C23.256 19.31 20.192 16.2 13.5 16.2z"
                        clipRule="evenodd"
                      />
                    </g>
                    <defs>
                      <clipPath id="prefix__clip0">
                        <path fill="#fff" d="M0 0h54v32.4H0z" />
                      </clipPath>
                    </defs>
                  </svg>
                }
                titleSkill="Tailwind"
                progress="90"
                progressColor="bg-sky-500"
              />
              <TechnicalSkills
                imgSkill={
                  <svg
                    className="h-32 w-32 mt-4"
                    xmlns="http://www.w3.org/2000/svg"
                    width="2500"
                    height="1875"
                    viewBox="0 0 512 384"
                    id="sass"
                  >
                    <path
                      fill="#CF649A"
                      d="M440.6 220.6c-17.9.101-33.4 4.4-46.4 10.801-4.8-9.5-9.6-17.801-10.399-24-.9-7.2-2-11.601-.9-20.2C384 178.6 389 166.4 389 165.4c-.101-.9-1.101-5.3-11.4-5.4s-19.2 2-20.2 4.7-3 8.9-4.3 15.3c-1.8 9.4-20.6 42.7-31.3 60.2-3.5-6.8-6.5-12.8-7.101-17.601-.899-7.199-2-11.6-.899-20.199 1.1-8.601 6.1-20.8 6.1-21.8-.1-.9-1.1-5.3-11.399-5.4-10.301-.1-19.2 2-20.2 4.7s-2.1 9.1-4.3 15.3C281.9 201.4 256.9 257 250.4 271.5c-3.3 7.4-6.199 13.3-8.3 17.3-2.1 4-.1.3-.3.7-1.8 3.4-2.8 5.3-2.8 5.3v.101c-1.4 2.5-2.9 4.899-3.601 4.899-.5 0-1.5-6.7.2-15.899 3.7-19.301 12.7-49.4 12.601-50.5 0-.5 1.699-5.801-5.801-8.5-7.3-2.7-9.899 1.8-10.5 1.8-.6 0-1.1 1.6-1.1 1.6s8.1-33.899-15.5-33.899c-14.8 0-35.2 16.1-45.3 30.8-6.4 3.5-20 10.899-34.4 18.8-5.5 3-11.2 6.2-16.6 9.1L117.9 251.9c-28.6-30.5-81.5-52.1-79.3-93.1.8-14.9 6-54.2 101.601-101.8 78.3-39 141-28.3 151.899-4.5 15.5 34-33.5 97.2-114.899 106.3-31 3.5-47.301-8.5-51.4-13-4.3-4.7-4.9-4.9-6.5-4-2.6 1.4-1 5.6 0 8.1 2.4 6.3 12.4 17.5 29.4 23.1 14.899 4.9 51.3 7.6 95.3-9.4 49.3-19.1 87.8-72.1 76.5-116.4-11.5-45.1-86.3-59.9-157-34.8C121.4 27.4 75.8 50.8 43 81.5 4 117.9-2.2 149.7.4 162.9c9.101 47.1 74 77.8 100 100.5-1.3.699-2.5 1.399-3.6 2-13 6.399-62.5 32.3-74.9 59.699-14 31 2.2 53.301 13 56.301 33.4 9.3 67.6-7.4 86.1-34.9 18.399-27.5 16.2-63.2 7.7-79.5l-.301-.6 10.2-6c6.601-3.9 13.101-7.5 18.8-10.601-3.199 8.7-5.5 19-6.699 34-1.4 17.601 5.8 40.4 15.3 49.4 4.2 3.899 9.2 4 12.3 4 11 0 16-9.101 21.5-20 6.8-13.3 12.8-28.7 12.8-28.7s-7.5 41.7 13 41.7c7.5 0 15-9.7 18.4-14.7v.1s.2-.3.6-1a36.13 36.13 0 0 0 1.2-1.899v-.2c3-5.2 9.7-17.1 19.7-36.8 12.899-25.4 25.3-57.2 25.3-57.2s1.2 7.8 4.9 20.6c2.199 7.601 6.999 15.9 10.699 24-3 4.2-4.8 6.601-4.8 6.601l.1.1c-2.399 3.2-5.1 6.601-7.899 10-10.2 12.2-22.4 26.101-24 30.101-1.9 4.699-1.5 8.199 2.2 11 2.7 2 7.5 2.399 12.6 2 9.2-.601 15.6-2.9 18.8-4.301 5-1.8 10.7-4.5 16.2-8.5 10-7.399 16.1-17.899 15.5-31.899-.3-7.7-2.8-15.3-5.9-22.5.9-1.3 1.801-2.601 2.7-4 15.8-23.101 28-48.5 28-48.5s1.2 7.8 4.9 20.6c1.899 6.5 5.7 13.601 9.1 20.601-14.8 12.1-24.1 26.1-27.3 35.3-5.9 17-1.3 24.7 7.4 26.5 3.899.8 9.5-1 13.699-2.8 5.2-1.7 11.5-4.601 17.301-8.9 10-7.4 19.6-17.7 19.1-31.6-.3-6.4-2-12.7-4.3-18.7 12.6-5.2 28.899-8.2 49.6-5.7 44.5 5.2 53.3 33 51.601 44.6-1.7 11.601-11 18-14.101 20-3.1 1.9-4.1 2.601-3.8 4 .4 2.101 1.8 2 4.5 1.601 3.7-.601 23.4-9.5 24.2-30.899 1.2-27.504-24.9-57.504-71.2-57.205zM97.4 336.3c-14.7 16.1-35.4 22.2-44.2 17-9.5-5.5-5.801-29.2 12.3-46.3 11-10.4 25.3-20 34.7-25.9 2.1-1.3 5.3-3.199 9.1-5.5.6-.399 1-.6 1-.6.7-.4 1.5-.9 2.3-1.4 6.7 24.4.3 45.8-15.2 62.7zm107.5-73.1c-5.1 12.5-15.9 44.6-22.4 42.8-5.601-1.5-9-25.8-1.101-49.8 4-12.101 12.5-26.5 17.5-32.101 8.101-9 16.9-12 19.101-8.3 2.6 4.801-9.9 39.601-13.1 47.401zm88.7 42.4c-2.2 1.101-4.2 1.9-5.1 1.301-.7-.4.899-1.9.899-1.9s11.1-11.9 15.5-17.4c2.5-3.199 5.5-6.899 8.7-11.1v1.2C313.6 292.1 299.8 301.7 293.6 305.6zm68.399-15.6c-1.6-1.2-1.399-4.9 4-16.5 2.101-4.6 6.9-12.3 15.2-19.6 1 3 1.601 5.899 1.5 8.6-.099 18-12.899 24.7-20.7 27.5z"
                    ></path>
                  </svg>
                }
                titleSkill="Sass"
                progress="50"
                progressColor="bg-pink-500"
              />
              <TechnicalSkills
                imgSkill={
                  <svg
                    className="h-32 w-32 mt-4"
                    xmlns="http://www.w3.org/2000/svg"
                    aria-label="JavaScript"
                    role="img"
                    viewBox="0 0 512 512"
                  >
                    <rect width="512" height="512" rx="15%" fill="#f7df1e" />
                    <path d="M324 370c10 17 24 29 47 29c20 0 33-10 33 -24c0-16 -13 -22 -35 -32l-12-5c-35-15 -58 -33 -58 -72c0-36 27 -64 70 -64c31 0 53 11 68 39l-37 24c-8-15 -17 -21 -31 -21c-14 0-23 9 -23 21c0 14 9 20 30 29l12 5c41 18 64 35 64 76c0 43-34 67 -80 67c-45 0-74 -21 -88 -49zm-170 4c8 13 14 25 31 25c16 0 26-6 26 -30V203h48v164c0 50-29 72 -72 72c-39 0-61 -20 -72 -44z" />
                  </svg>
                }
                titleSkill="JavaScript"
                progress="70"
                progressColor="bg-amber-400"
              />
              <TechnicalSkills
                imgSkill={
                  <svg
                    className="fill-cyan-300 h-32 w-32 mt-4"
                    stroke="currentColor"
                    strokeWidth="0"
                    viewBox="0 0 512 512"
                    height="5.5em"
                    width="5.5em"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path d="M418.2 177.2c-5.4-1.8-10.8-3.5-16.2-5.1.9-3.7 1.7-7.4 2.5-11.1 12.3-59.6 4.2-107.5-23.1-123.3-26.3-15.1-69.2.6-112.6 38.4-4.3 3.7-8.5 7.6-12.5 11.5-2.7-2.6-5.5-5.2-8.3-7.7-45.5-40.4-91.1-57.4-118.4-41.5-26.2 15.2-34 60.3-23 116.7 1.1 5.6 2.3 11.1 3.7 16.7-6.4 1.8-12.7 3.8-18.6 5.9C38.3 196.2 0 225.4 0 255.6c0 31.2 40.8 62.5 96.3 81.5 4.5 1.5 9 3 13.6 4.3-1.5 6-2.8 11.9-4 18-10.5 55.5-2.3 99.5 23.9 114.6 27 15.6 72.4-.4 116.6-39.1 3.5-3.1 7-6.3 10.5-9.7 4.4 4.3 9 8.4 13.6 12.4 42.8 36.8 85.1 51.7 111.2 36.6 27-15.6 35.8-62.9 24.4-120.5-.9-4.4-1.9-8.9-3-13.5 3.2-.9 6.3-1.9 9.4-2.9 57.7-19.1 99.5-50 99.5-81.7 0-30.3-39.4-59.7-93.8-78.4zM282.9 92.3c37.2-32.4 71.9-45.1 87.7-36 16.9 9.7 23.4 48.9 12.8 100.4-.7 3.4-1.4 6.7-2.3 10-22.2-5-44.7-8.6-67.3-10.6-13-18.6-27.2-36.4-42.6-53.1 3.9-3.7 7.7-7.2 11.7-10.7zM167.2 307.5c5.1 8.7 10.3 17.4 15.8 25.9-15.6-1.7-31.1-4.2-46.4-7.5 4.4-14.4 9.9-29.3 16.3-44.5 4.6 8.8 9.3 17.5 14.3 26.1zm-30.3-120.3c14.4-3.2 29.7-5.8 45.6-7.8-5.3 8.3-10.5 16.8-15.4 25.4-4.9 8.5-9.7 17.2-14.2 26-6.3-14.9-11.6-29.5-16-43.6zm27.4 68.9c6.6-13.8 13.8-27.3 21.4-40.6s15.8-26.2 24.4-38.9c15-1.1 30.3-1.7 45.9-1.7s31 .6 45.9 1.7c8.5 12.6 16.6 25.5 24.3 38.7s14.9 26.7 21.7 40.4c-6.7 13.8-13.9 27.4-21.6 40.8-7.6 13.3-15.7 26.2-24.2 39-14.9 1.1-30.4 1.6-46.1 1.6s-30.9-.5-45.6-1.4c-8.7-12.7-16.9-25.7-24.6-39s-14.8-26.8-21.5-40.6zm180.6 51.2c5.1-8.8 9.9-17.7 14.6-26.7 6.4 14.5 12 29.2 16.9 44.3-15.5 3.5-31.2 6.2-47 8 5.4-8.4 10.5-17 15.5-25.6zm14.4-76.5c-4.7-8.8-9.5-17.6-14.5-26.2-4.9-8.5-10-16.9-15.3-25.2 16.1 2 31.5 4.7 45.9 8-4.6 14.8-10 29.2-16.1 43.4zM256.2 118.3c10.5 11.4 20.4 23.4 29.6 35.8-19.8-.9-39.7-.9-59.5 0 9.8-12.9 19.9-24.9 29.9-35.8zM140.2 57c16.8-9.8 54.1 4.2 93.4 39 2.5 2.2 5 4.6 7.6 7-15.5 16.7-29.8 34.5-42.9 53.1-22.6 2-45 5.5-67.2 10.4-1.3-5.1-2.4-10.3-3.5-15.5-9.4-48.4-3.2-84.9 12.6-94zm-24.5 263.6c-4.2-1.2-8.3-2.5-12.4-3.9-21.3-6.7-45.5-17.3-63-31.2-10.1-7-16.9-17.8-18.8-29.9 0-18.3 31.6-41.7 77.2-57.6 5.7-2 11.5-3.8 17.3-5.5 6.8 21.7 15 43 24.5 63.6-9.6 20.9-17.9 42.5-24.8 64.5zm116.6 98c-16.5 15.1-35.6 27.1-56.4 35.3-11.1 5.3-23.9 5.8-35.3 1.3-15.9-9.2-22.5-44.5-13.5-92 1.1-5.6 2.3-11.2 3.7-16.7 22.4 4.8 45 8.1 67.9 9.8 13.2 18.7 27.7 36.6 43.2 53.4-3.2 3.1-6.4 6.1-9.6 8.9zm24.5-24.3c-10.2-11-20.4-23.2-30.3-36.3 9.6.4 19.5.6 29.5.6 10.3 0 20.4-.2 30.4-.7-9.2 12.7-19.1 24.8-29.6 36.4zm130.7 30c-.9 12.2-6.9 23.6-16.5 31.3-15.9 9.2-49.8-2.8-86.4-34.2-4.2-3.6-8.4-7.5-12.7-11.5 15.3-16.9 29.4-34.8 42.2-53.6 22.9-1.9 45.7-5.4 68.2-10.5 1 4.1 1.9 8.2 2.7 12.2 4.9 21.6 5.7 44.1 2.5 66.3zm18.2-107.5c-2.8.9-5.6 1.8-8.5 2.6-7-21.8-15.6-43.1-25.5-63.8 9.6-20.4 17.7-41.4 24.5-62.9 5.2 1.5 10.2 3.1 15 4.7 46.6 16 79.3 39.8 79.3 58 0 19.6-34.9 44.9-84.8 61.4zm-149.7-15c25.3 0 45.8-20.5 45.8-45.8s-20.5-45.8-45.8-45.8c-25.3 0-45.8 20.5-45.8 45.8s20.5 45.8 45.8 45.8z"></path>
                  </svg>
                }
                titleSkill="React"
                progress="85"
                progressColor="bg-cyan-400"
              />
              <TechnicalSkills
                imgSkill={
                  <svg
                    className="fill-cyan-300 h-32 w-32 mt-4"
                    xmlns="http://www.w3.org/2000/svg"
                    aria-label="TypeScript"
                    role="img"
                    viewBox="0 0 512 512"
                  >
                    <rect width="512" height="512" rx="15%" fill="#3178c6" />
                    <path
                      fill="#ffffff"
                      d="m233 284h64v-41H118v41h64v183h51zm84 173c8.1 4.2 18 7.3 29 9.4s23 3.1 35 3.1c12 0 23-1.1 34-3.4c11-2.3 20-6.1 28-11c8.1-5.3 15-12 19-21s7.1-19 7.1-32c0-9.1-1.4-17-4.1-24s-6.6-13-12-18c-5.1-5.3-11-10-18-14s-15-8.2-24-12c-6.6-2.7-12-5.3-18-7.9c-5.2-2.6-9.7-5.2-13-7.8c-3.7-2.7-6.5-5.5-8.5-8.4c-2-3-3-6.3-3-10c0-3.4.89-6.5 2.7-9.3s4.3-5.1 7.5-7.1c3.2-2 7.2-3.5 12-4.6c4.7-1.1 9.9-1.6 16-1.6c4.2 0 8.6.31 13 .94c4.6.63 9.3 1.6 14 2.9c4.7 1.3 9.3 2.9 14 4.9c4.4 2 8.5 4.3 12 6.9v-47c-7.6-2.9-16-5.1-25-6.5s-19-2.1-31-2.1c-12 0-23 1.3-34 3.8s-20 6.5-28 12c-8.1 5.4-14 12-19 21c-4.7 8.4-7 18-7 30c0 15 4.3 28 13 38c8.6 11 22 19 39 27c6.9 2.8 13 5.6 19 8.3s11 5.5 15 8.4c4.3 2.9 7.7 6.1 10 9.5c2.5 3.4 3.8 7.4 3.8 12c0 3.2-.78 6.2-2.3 9s-3.9 5.2-7.1 7.2s-7.1 3.6-12 4.8c-4.7 1.1-10 1.7-17 1.7c-11 0-22-1.9-32-5.7c-11-3.8-21-9.5-28.1-15.44z"
                    />
                  </svg>
                }
                titleSkill="TypeScript"
                progress="40"
                progressColor="bg-indigo-600"
              />
            </div>
          </div>
        </AnimationSections>

        <AnimationSections>
          <div className="softSkills text-white flex flex-col text-2xl shadow-gray-500 mb-36 lg:flex-1">
            <TitleSections titleS="Soft Skills" />
            <p className="text-center mb-5 text-xl">
              I{' '}
              <span className="text-orange-500 italic text-2xl font-semibold">
                balance
              </span>{' '}
              soft skills in my work!
            </p>
            <div className="cardSkills bg-neutral-800 md:grid grid-cols-2">
              <SoftSkills
                imgSkill={<img src={adaptability} className="h-48" />}
                titleSkill="Adaptability"
              />
              <SoftSkills
                imgSkill={<img src={problemSolving} className="h-48" />}
                titleSkill="Problem Solving"
              />
              <SoftSkills
                imgSkill={<img src={timeManagement} className="h-48" />}
                titleSkill="Time Management"
              />
              <SoftSkills
                imgSkill={<img src={communication} className="h-48" />}
                titleSkill="Communication"
              />
            </div>
          </div>
        </AnimationSections>

        <div className="lg:flex flex-col-2 gap-0 m-0 mb-36">
          <AnimationSections>
            <Knowledge
              titleE="Experience"
              exp="Talenting Software"
              info="15 Mar 2023 - 15 May 2023 Practice Period"
            />
            <Knowledge
              titleE="Education"
              exp="Transilvania University of Brasov!"
              info="I'm studying Business Informatics in last year!"
            />
          </AnimationSections>
        </div>
      </div>
    </>
  );
};

export default Skills;
