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
  const refFooter = useRef(null);
  const scrollToFooter = () => {
    refFooter.current.scrollIntoView();
  };

  const toggleDarkMode = () => {
    document.documentElement.classList.toggle("dark");
    setState({ ...state, isDark: !state.isDark });
  };
  useEffect(() => {
    document.documentElement.classList.add("dark");
  }, []);

  return (
    <>
      <header className="relative h-screen font-pretty">
        <LightFilter scrollY={state.scrollY} isDark={state.isDark} />
        <div className="absolute w-full h-screen -z-10 bg-graywhite-99" style={{ transform: `translateY(${state.scrollY / 2}px)` }}>
          <ProgressiveImgWrapper thumbnail={<img src={wallCompressed} alt="wallCompressed" className="object-cover w-full h-screen filter blur-2xl" />}>
            <img src={wall} alt="wall" className="object-cover w-full h-screen ease-out transition-filter duration-2000" />
          </ProgressiveImgWrapper>
        </div>
        <div className="absolute h-12 right-8 top-5">
          <div className="flex items-center self-center animate-fadein-1000-700">
            <div className="relative inline-block w-10 mr-2 align-middle transition duration-200 ease-in select-none">
              <input
                type="checkbox"
                name="toggle"
                id="toggle"
                className="absolute block w-6 h-6 border-4 rounded-full appearance-none cursor-pointer focus:outline-none checked:right-0 bg-graywhite-198 checked:bg-white border-graywhite-594"
                onClick={toggleDarkMode}
              />
              <label htmlFor="toggle" className="block h-6 overflow-hidden rounded-full cursor-pointer bg-graywhite-594"></label>
            </div>
            <label htmlFor="toggle" className="text-xl text-white">
              {state.isDark ? <i className="bi bi-moon-fill"></i> : <i className="bi bi-sun-fill"></i>}
            </label>
          </div>
        </div>
        <div className="absolute flex flex-col items-center transform -translate-x-1/2 -translate-y-1/2 left-1/2 top-2/5 whitespace-nowrap">
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
            <span className="font-extralight animate-fadein-2000-1500">Welcome to my personal page.</span>
          </p>
          <div className="flex">
            <a
              href="https://github.com/j3ygithub/j3y"
              target="_blank"
              rel="noreferrer"
              className="flex items-center justify-center w-32 h-12 m-1 bg-graywhite-660 hover:bg-white animate-fadein-1000-900"
            >
              <span className="mr-1 text-2xl">
                <i className="bi bi-github"></i>
              </span>
              Github
            </a>
            <button
              onClick={scrollToFooter}
              className="w-32 h-12 m-1 border-2 focus:outline-none text-graywhite-660 hover:text-white border-graywhite-660 hover:border-white text-md animate-fadein-1000-800"
            >
              Contact
            </button>
          </div>
        </div>
        <div className="absolute flex flex-col items-center transform -translate-x-1/2 -translate-y-1/2 left-1/2 top-4/5">
          <span
            onClick={scrollToAboutMe}
            className="text-4xl text-graywhite-594 hover:text-white cursor-pointer animate-fadein-1000-900 transform hover:translate-y-0.5"
          >
            <i className="bi bi-chevron-compact-down"></i>
          </span>
        </div>
      </header>

      <main className="py-20 font-extralight text-graywhite-99 dark:text-graywhite-594 bg-graywhite-660 dark:bg-graywhite-99 font-pretty">
        <div ref={refAboutMe} className="max-w-screen-sm p-3 mx-auto">
          <FadeinWrapper>
            <ProgressiveImgWrapper thumbnail={<img src={avatarCompressed} alt="avatar" className="w-full p-5 rounded-3xl filter blur-md" />}>
              <img src={avatar} alt="avatar" className="w-full p-5 duration-1000 ease-out rounded-3xl transition-filter" />
            </ProgressiveImgWrapper>
          </FadeinWrapper>

          <FadeinWrapper>
            <p className="p-5 text-4xl">Hello world</p>
            <p className="p-5 text-md">I'm Jimmy. I love programming. I like to create things and programming gives me the chance to do so.</p>
          </FadeinWrapper>

          <FadeinWrapper>
            <p className="p-5 text-4xl">Education</p>
            <div className="grid grid-cols-12 p-5">
              <p className="col-span-9 pr-2 text-md">
                <a className="underline hover:text-graywhite-330 dark:hover:text-graywhite-396" href="https://www.ntu.edu.tw/">
                  National Taiwan University
                </a>
                , Taipei, Mechanical engineering, September 2011-July 2016.
              </p>
              <div className="col-span-3 px-4">
                <ProgressiveImgWrapper thumbnail={<img src={ntuCompressed} alt="ntuCompressed" className="filter blur-md" />}>
                  <img src={ntu} alt="ntu" className="duration-1000 ease-out transition-filter" />
                </ProgressiveImgWrapper>
              </div>
            </div>
          </FadeinWrapper>

          <FadeinWrapper>
            <p className="p-5 text-4xl">Experience</p>
            <div className="grid grid-cols-12 p-5">
              <p className="col-span-9 pr-2 text-md">
                <a
                  href="https://www.chief.com.tw"
                  target="_blank"
                  rel="noreferrer"
                  className="underline hover:text-graywhite-330 dark:hover:text-graywhite-396"
                >
                  Chief Telecom
                </a>{" "}
                for 4 years. I work for their cloud service department. I maintain and develop products and services about{" "}
                <a
                  href="https://www.chief.com.tw/cloud/"
                  target="_blank"
                  rel="noreferrer"
                  className="underline hover:text-graywhite-330 dark:hover:text-graywhite-396"
                >
                  Chief Cloud
                </a>
                .
              </p>
              <div className="col-span-3">
                <ProgressiveImgWrapper thumbnail={<img src={chiefCompressed} alt="chiefCompressed" className="filter blur-md" />}>
                  <img src={chief} alt="chief" className="duration-1000 ease-out transition-filter" />
                </ProgressiveImgWrapper>
              </div>
            </div>
          </FadeinWrapper>

          <FadeinWrapper>
            <p className="p-5 text-4xl">Skills</p>
            <p className="p-5 text-md">Here are my skills, just in case you're interested:</p>
          </FadeinWrapper>

          <div className="mb-5 ml-5">
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
            <p className="p-5 text-3xl">Python</p>
            <p className="p-5 text-md">
              Python is my primary programming language. I am familiar with{" "}
              <a
                href="https://www.python.org/dev/peps/pep-0008/"
                target="_blank"
                rel="noreferrer"
                className="underline hover:text-graywhite-330 dark:hover:text-graywhite-396"
              >
                PEP 8
              </a>{" "}
              and other code style convention. I aim to write clean, modular, reusable code with Python.
            </p>
          </FadeinWrapper>

          <FadeinWrapper>
            <p className="p-5 text-3xl">Django</p>
            <p className="p-5 text-md">
              I've spent most of my time doing web development, so I'm particularly familiar with Python's web framework, Django. I've been doing web
              development with Django for over 5 years and can build modern, well-tested web application.
            </p>
          </FadeinWrapper>

          <FadeinWrapper>
            <p className="p-5 text-3xl">SQL</p>
            <p className="p-5 text-md">
              Django has a great model/ORM system, which makes it possible to creating a web application without writing SQL. But sometimes SQL knowledge is important, too.
              It is true especially when it comes to a extremely complicated queriy or some performance issue.
            </p>
          </FadeinWrapper>

          <FadeinWrapper>
            <p className="p-5 text-3xl">Django REST Framwork</p>
            <p className="p-5 text-md">
              Django is already pretty good, but when you combine it with the Django REST Framework, it gets even better. Modern web applications often require
              REST APIs, and this is where the Django REST Framework comes in.
            </p>
          </FadeinWrapper>

          <FadeinWrapper>
            <p className="p-5 text-3xl">React.js</p>
            <p className="p-5 text-md">
              Django is a backend framework I use a lot, and when it comes to frontend things, React.js is my favorite because its philosophy is so graceful,
              making you enjoy coding and building things with it. This website is built with React.js, too.
            </p>
          </FadeinWrapper>

          <FadeinWrapper>
            <p className="p-5 text-3xl">Tailwind CSS</p>
            <p className="p-5 text-md">
              Tailwind is another tool that I love and use a lot. It is similar to Bootstrap, but it is much more flexible and easy to customize, which prevents
              you from building a lot of similar web.
            </p>
          </FadeinWrapper>

          <FadeinWrapper>
            <p className="p-5 text-3xl">CI/CD</p>
            <p className="p-5 text-md">
              I use Github action to handle CI/CD things. I believe that deployment is just as important as development. If a feature can't be delivered to the
              users, the resources spent on development will be wasted.
            </p>
          </FadeinWrapper>

          <FadeinWrapper>
            <p className="p-5 text-3xl">Docker/GCP</p>
            <p className="p-5 text-md">
              I mostly run my services in Docker and host them by GCP. This website is such a example. With Docker I won't be worried about many environment things.
              With GCP, I can focus on my developing.
            </p>
          </FadeinWrapper>

          <FadeinWrapper>
            <p className="p-5 text-3xl">Thank you</p>
            <p className="p-5 text-md">
              thank you for giving a chance to introduce myself. I really apprecicate that.
            </p>
            <p className="p-5 text-md">
              Feel free to contact me if you want. :)
            </p>
            
          </FadeinWrapper>

        </div>
      </main>

      <footer ref={refFooter} className="font-pretty font-extralight text-graywhite-198 dark:text-graywhite-630 bg-graywhite-630 dark:bg-graywhite-87">
        <FadeinWrapper>
          <div className="flex flex-col flex-wrap items-end content-start max-w-screen-sm p-12 mx-auto">
            <p className="pb-4 text-5xl font-normal">Jimmy Lin</p>
            <p className="pb-8 text-sm">
              E-mail:{" "}
              <a href="mailto:contact@jimmylin.org" className="underline hover:text-graywhite-330 dark:hover:text-graywhite-396">
                contact@jimmylin.org
              </a>
            </p>
            <p className="-mr-4">
              <a
                href="https://github.com/j3ygithub"
                target="_blank"
                rel="noreferrer"
                className="pr-4 text-3xl underline hover:text-graywhite-330 dark:hover:text-graywhite-396"
              >
                <i className="bi bi-github"></i>
              </a>
              <a
                href="https://www.linkedin.com/in/jimmy-lin-5779a61b5/"
                target="_blank"
                rel="noreferrer"
                className="pr-4 text-3xl underline hover:text-graywhite-330 dark:hover:text-graywhite-396"
              >
                <i className="bi bi-linkedin"></i>
              </a>
              <a
                href="https://www.instagram.com/j3y.ig/"
                target="_blank"
                rel="noreferrer"
                className="pr-4 text-3xl underline hover:text-graywhite-330 dark:hover:text-graywhite-396"
              >
                <i className="bi bi-instagram"></i>
              </a>
              <a
                href="https://www.facebook.com/j3y.fb"
                target="_blank"
                rel="noreferrer"
                className="pr-4 text-3xl underline hover:text-graywhite-330 dark:hover:text-graywhite-396"
              >
                <i className="bi bi-facebook"></i>
              </a>
              <a
                href="https://twitter.com/j3ytweeting"
                target="_blank"
                rel="noreferrer"
                className="pr-4 text-3xl underline hover:text-graywhite-330 dark:hover:text-graywhite-396"
              >
                <i className="bi bi-twitter"></i>
              </a>
            </p>
          </div>
          <div className="flex items-center justify-center h-16">
            <div className="max-w-screen-sm mx-auto text-sm text-center font-extralight">© 2021 All rights reserved.</div>
          </div>
        </FadeinWrapper>
      </footer>
    </>
  );
};

export default Home;
