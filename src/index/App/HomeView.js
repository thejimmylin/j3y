import { useState, useEffect, useRef } from "react";
import wall from "./HomeView/wall-1440x810.jpg";
import wallCompressed from "./HomeView/wall-144x81.jpg";
import avatar from "./HomeView/avatar-1440x1440.jpg";
import avatarCompressed from "./HomeView/avatar-144x144.jpg";
import ntu from "./HomeView/ntu-360x360.png";
import ntuCompressed from "./HomeView/ntu-36x36.png";
import chief from "./HomeView/chief-500x300.png";
import chiefCompressed from "./HomeView/chief-50x30.png";
import FadeinWrapper from "./HomeView/FadeinWrapper";
import ProgressiveImgWrapper from "./HomeView/ProgressiveImgWrapper";
import LightFilter from "./HomeView/LightFilter";

const Home = () => {
  const [state, setState] = useState({ scrollY: window.scrollY, isDark: true });

  const handleScroll = () => {
    setState({ ...state, scrollY: window.scrollY });
  };
  const addHandleScroll = () => {
    window.addEventListener("scroll", handleScroll);
  };
  const removeHandleScroll = () => {
    window.removeEventListener("scroll", handleScroll);
  };
  useEffect(() => {
    addHandleScroll();
    return removeHandleScroll;
  });

  const refAboutMe = useRef(null);
  const scrollToAboutMe = () => {
    refAboutMe.current.scrollIntoView();
  };
  const refContactMe = useRef(null);
  const scrollToContactMe = () => {
    refContactMe.current.scrollIntoView();
  };
  const toggleDarkMode = () => {
    document.documentElement.classList.toggle("dark");
    setState({ ...state, isDark: !state.isDark });
  };
  return (
    <>
      <header className="relative h-screen font-pretty">
        <LightFilter scrollY={state.scrollY} isDark={state.isDark} />
        <div
          className="absolute -z-10 w-full h-screen bg-graywhite-99"
          style={{ transform: `translateY(${state.scrollY / 2}px)` }}
        >
          <ProgressiveImgWrapper
            thumbnail={
              <img
                src={wallCompressed}
                alt="wallCompressed"
                className="object-cover w-full h-screen filter blur-2xl"
              />
            }
          >
            <img
              src={wall}
              alt="wall"
              className="object-cover w-full h-screen transition-filter duration-2000 ease-out"
            />
          </ProgressiveImgWrapper>
        </div>
        <div className="absolute right-8 top-5 h-12">
          <div className="self-center animate-fadein-1000-700 flex items-center">
            <div className="relative inline-block w-10 mr-2 align-middle select-none transition duration-200 ease-in">
              <input
                type="checkbox"
                name="toggle"
                id="toggle"
                className="focus:outline-none checked:right-0 bg-graywhite-198 checked:bg-white absolute block w-6 h-6 rounded-full border-4 border-graywhite-594 appearance-none cursor-pointer"
                onClick={toggleDarkMode}
              />
              <label
                htmlFor="toggle"
                className="block overflow-hidden h-6 rounded-full bg-graywhite-594 cursor-pointer"
              ></label>
            </div>
            <label htmlFor="toggle" className="text-white text-xl">
              {state.isDark ? (
                <i className="bi bi-moon-fill"></i>
              ) : (
                <i className="bi bi-sun-fill"></i>
              )}
            </label>
          </div>
        </div>
        <div className="absolute left-1/2 top-2/5 transform -translate-x-1/2 -translate-y-1/2 flex flex-col items-center whitespace-nowrap">
          <p className="mb-4 text-5xl text-graywhite-660 hover:text-white">
            <span className="animate-fadein-1000-0">I</span>
            <span className="animate-fadein-1000-50">'</span>
            <span className="animate-fadein-1000-100">m</span>
            <span className="animate-fadein-1000-150"> </span>
            <span className="animate-fadein-1000-200">J</span>
            <span className="animate-fadein-1000-250">i</span>
            <span className="animate-fadein-1000-300">m</span>
            <span className="animate-fadein-1000-350">m</span>
            <span className="animate-fadein-1000-400">y</span>
            <span className="animate-fadein-1000-450"> </span>
            <span className="animate-fadein-1000-500">L</span>
            <span className="animate-fadein-1000-550">i</span>
            <span className="animate-fadein-1000-600">n</span>
            <span className="animate-fadein-1000-650">.</span>
          </p>
          <p className="mb-16 text-xs text-center text-graywhite-660 hover:text-white">
            <span className="animate-fadein-2000-1500">
              Welcome to my personal website.
            </span>
          </p>
          <div className="flex">
            <a
              href="https://github.com/j3ygithub/j3y"
              target="_blank"
              rel="noreferrer"
              className="m-1 w-32 h-12 bg-graywhite-660 hover:bg-white flex justify-center items-center animate-fadein-1000-900"
            >
              <span className="mr-1 text-2xl">
                <i className="bi bi-github"></i>
              </span>
              Github
            </a>
            <button
              onClick={scrollToContactMe}
              className="m-1 w-32 h-12 focus:outline-none text-graywhite-660 hover:text-white border-graywhite-660 hover:border-white text-md border-2 animate-fadein-1000-800"
            >
              Contact
            </button>
          </div>
        </div>
        <div className="absolute left-1/2 top-4/5 transform -translate-x-1/2 -translate-y-1/2 flex flex-col items-center">
          <span
            onClick={scrollToAboutMe}
            className="text-4xl text-graywhite-594 hover:text-white cursor-pointer animate-fadein-1000-900 transform hover:translate-y-0.5"
          >
            <i className="bi bi-chevron-compact-down"></i>
          </span>
        </div>
      </header>

      <main className="py-20 text-graywhite-594 dark:text-graywhite-99 bg-graywhite-99 dark:bg-graywhite-660 font-pretty">
        <div ref={refAboutMe} className="max-w-screen-sm p-3 mx-auto">
          <FadeinWrapper>
            <ProgressiveImgWrapper
              thumbnail={
                <img
                  src={avatarCompressed}
                  alt="avatar"
                  className="w-full p-5 rounded-3xl filter blur-md"
                />
              }
            >
              <img
                src={avatar}
                alt="avatar"
                className="w-full p-5 rounded-3xl transition-filter duration-1000 ease-out"
              />
            </ProgressiveImgWrapper>
          </FadeinWrapper>

          <FadeinWrapper>
            <p className="p-5 text-4xl">Hello world</p>
            <p className="p-5 text-md">
              I'm Jimmy. I love programming. I like to create things and programming
              gives me the chance to do so.
            </p>
          </FadeinWrapper>

          <FadeinWrapper>
            <p className="p-5 text-4xl">Education</p>
            <div className="p-5 grid grid-cols-12">
              <p className="col-span-9 text-md pr-2">
                <a
                  className="underline hover:text-white dark:hover:text-graywhite-396"
                  href="https://www.ntu.edu.tw/"
                >
                  National Taiwan University
                </a>
                , Taipei, Mechanical engineering, September 2011-July 2016.
              </p>
              <div className="col-span-3 px-4">
                <ProgressiveImgWrapper
                  thumbnail={
                    <img
                      src={ntuCompressed}
                      alt="ntuCompressed"
                      className="filter blur-md"
                    />
                  }
                >
                  <img
                    src={ntu}
                    alt="ntu"
                    className="transition-filter duration-1000 ease-out"
                  />
                </ProgressiveImgWrapper>
              </div>
            </div>
          </FadeinWrapper>

          <FadeinWrapper>
            <p className="p-5 text-4xl">Experience</p>
            <div className="p-5 grid grid-cols-12">
              <p className="col-span-9 text-md pr-2">
                <a
                  href="https://www.chief.com.tw"
                  target="_blank"
                  rel="noreferrer"
                  className="underline hover:text-white dark:hover:text-graywhite-396"
                >
                  Chief Telecom
                </a>{" "}
                for 4 years. I work for their cloud service department. I maintain and
                develop products and services about{" "}
                <a
                  href="https://www.chief.com.tw/cloud/"
                  target="_blank"
                  rel="noreferrer"
                  className="underline hover:text-white dark:hover:text-graywhite-396"
                >
                  Chief Cloud
                </a>
                .
              </p>
              <div className="col-span-3">
                <ProgressiveImgWrapper
                  thumbnail={
                    <img
                      src={chiefCompressed}
                      alt="chiefCompressed"
                      className="filter blur-md"
                    />
                  }
                >
                  <img
                    src={chief}
                    alt="chief"
                    className="transition-filter duration-1000 ease-out"
                  />
                </ProgressiveImgWrapper>
              </div>
            </div>
          </FadeinWrapper>

          <FadeinWrapper>
            <p className="p-5 text-4xl">Skills</p>
            <p className="p-5 text-md">
              Here are my skills, just in case you're interested:
            </p>
          </FadeinWrapper>

          <div className="ml-5 mb-5">
            <FadeinWrapper>
              <p className="p-5 text-2xl">Language</p>
              <ul className="pl-5 text-md">
                <li className="ml-5">- Python</li>
                <li className="ml-5">- HTML</li>
                <li className="ml-5">- CSS</li>
                <li className="ml-5">- JavaScript</li>
              </ul>
            </FadeinWrapper>

            <FadeinWrapper>
              <p className="p-5 text-2xl">DB</p>
              <ul className="pl-5 text-md">
                <li className="ml-5">- MSSQL</li>
                <li className="ml-5">- MySQL</li>
                <li className="ml-5">- MariaDB</li>
                <li className="ml-5">- PostgreSQL</li>
              </ul>
            </FadeinWrapper>

            <FadeinWrapper>
              <p className="p-5 text-2xl">Framework</p>
              <ul className="pl-5 text-md">
                <li className="ml-5">- Django</li>
                <li className="ml-5">- Django REST Framework</li>
                <li className="ml-5">- Vue.js</li>
                <li className="ml-5">- React.js</li>
                <li className="ml-5">- Tailwind CSS</li>
              </ul>
            </FadeinWrapper>

            <FadeinWrapper>
              <p className="p-5 text-2xl">Development</p>
              <ul className="pl-5 text-md">
                <li className="ml-5">- Git</li>
                <li className="ml-5">- Linux</li>
                <li className="ml-5">- Docker</li>
                <li className="ml-5">- GCP</li>
              </ul>
            </FadeinWrapper>

            <FadeinWrapper>
              <p className="p-5 text-2xl">Other</p>
              <ul className="pl-5 text-md">
                <li className="ml-5">- Cisco Command</li>
                <li className="ml-5">- FortiOS Command</li>
              </ul>
            </FadeinWrapper>
          </div>

          <FadeinWrapper>
            <p ref={refContactMe} className="p-5 text-4xl">
              Contact
            </p>
            <p className="p-5 text-md">
              Contact me with{" "}
              <a
                href="mailto:b00502013@gmail.com"
                className="underline hover:text-white dark:hover:text-graywhite-396"
              >
                Email
              </a>{" "}
              or{" "}
              <a
                href="https://www.cakeresume.com/b00502013"
                target="_blank"
                rel="noreferrer"
                className="underline hover:text-white dark:hover:text-graywhite-396"
              >
                cakeresume
              </a>
              .
            </p>
          </FadeinWrapper>

          <FadeinWrapper>
            <p className="p-5 pb-10 flex">
              <a
                href="https://github.com/j3ygithub"
                target="_blank"
                rel="noreferrer"
                className="text-4xl pr-4 underline hover:text-white dark:hover:text-graywhite-396"
              >
                <i className="bi bi-github"></i>
              </a>
              <a
                href="https://www.linkedin.com/in/jimmy-lin-5779a61b5/"
                target="_blank"
                rel="noreferrer"
                className="text-4xl pr-4 underline hover:text-white dark:hover:text-graywhite-396"
              >
                <i className="bi bi-linkedin"></i>
              </a>
              <a
                href="https://www.instagram.com/j3y.ig/"
                target="_blank"
                rel="noreferrer"
                className="text-4xl pr-4 underline hover:text-white dark:hover:text-graywhite-396"
              >
                <i className="bi bi-instagram"></i>
              </a>
              <a
                href="https://www.facebook.com/j3y.fb"
                target="_blank"
                rel="noreferrer"
                className="text-4xl pr-4 underline hover:text-white dark:hover:text-graywhite-396"
              >
                <i className="bi bi-facebook"></i>
              </a>
              <a
                href="https://twitter.com/j3ytweeting"
                target="_blank"
                rel="noreferrer"
                className="text-4xl pr-4 underline hover:text-white dark:hover:text-graywhite-396"
              >
                <i className="bi bi-twitter"></i>
              </a>
            </p>
          </FadeinWrapper>
        </div>
      </main>

      <footer className="flex items-center justify-center h-12 font-pretty text-graywhite-660 dark:text-graywhite-99 bg-graywhite-99 dark:bg-graywhite-660">
        <div className="max-w-screen-sm mx-auto text-md text-center">
          © 2021 All rights reserved.
        </div>
      </footer>
    </>
  );
};

export default Home;
