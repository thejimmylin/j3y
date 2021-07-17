import { useState, useEffect, useRef } from "react";
import wall from "./HomePage/wall-1440x810.jpg";
import wallCompressed from "./HomePage/wall-144x81.jpg";
import avatar from "./HomePage/avatar-1440x1440.jpg";
import avatarCompressed from "./HomePage/avatar-144x144.jpg";
import ntu from "./HomePage/ntu-360x360.png";
import ntuCompressed from "./HomePage/ntu-36x36.png";
import chief from "./HomePage/chief-500x300.png";
import chiefCompressed from "./HomePage/chief-50x30.png";
import FadeinWrapper from "./HomePage/FadeinWrapper";
import ProgressiveImgWrapper from "./HomePage/ProgressiveImgWrapper";
import LightFilter from "./HomePage/LightFilter";

const HomePage = () => {
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
    setState({ ...state, isDark: !state.isDark });
  };

  return (
    <div className={state.isDark ? "dark" : ""}>
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
          <p className="mb-16 text-xs text-center font-extralight text-graywhite-660 hover:text-white">
            <span className="animate-fadein-2000-1500">Welcome to my personal page.</span>
          </p>
          <div className="flex">
            <a
              href="https://github.com/j3ygithub"
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
            <p className="p-5 text-4xl font-normal">Hello world</p>
            <p className="p-5 text-md">I'm Jimmy. I love programming. I like to create things and programming gives me the chance to do so.</p>
          </FadeinWrapper>

          <FadeinWrapper>
            <p className="p-5 text-4xl font-normal">Education</p>
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
            <p className="p-5 text-4xl font-normal">Experience</p>
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
            <p className="p-5 text-4xl font-normal">Skills</p>
            <p className="p-5 text-md">Here are my skills and the techniques I use.</p>
          </FadeinWrapper>

          <FadeinWrapper>
            <p className="p-5 ml-8 text-2xl font-normal">Python</p>
            <p className="p-5 ml-16 text-md">
              Python is my primary programming language. I am familiar with Python's language features and many of its standard libraries such as{" "}
              <a
                href="https://docs.python.org/3/library/unittest.html"
                target="_blank"
                rel="noreferrer"
                className="underline hover:text-graywhite-330 dark:hover:text-graywhite-396"
              >
                unittest
              </a>
              ,{" "}
              <a
                href="https://docs.python.org/3/library/logging.html"
                target="_blank"
                rel="noreferrer"
                className="underline hover:text-graywhite-330 dark:hover:text-graywhite-396"
              >
                logging
              </a>
              , and{" "}
              <a
                href="https://docs.python.org/3/library/shlex.html"
                target="_blank"
                rel="noreferrer"
                className="underline hover:text-graywhite-330 dark:hover:text-graywhite-396"
              >
                shlex
              </a>
              , etc. I care about code quality, following{" "}
              <a
                href="https://www.python.org/dev/peps/pep-0008/"
                target="_blank"
                rel="noreferrer"
                className="underline hover:text-graywhite-330 dark:hover:text-graywhite-396"
              >
                PEP 8
              </a>{" "}
              and many other code style conventions. I follow the{" "}
              <a
                href="https://en.wikipedia.org/wiki/KISS_principle"
                target="_blank"
                rel="noreferrer"
                className="underline hover:text-graywhite-330 dark:hover:text-graywhite-396"
              >
                KISS principle
              </a>
              . I keep my code clean, modular and reusable.
            </p>
          </FadeinWrapper>

          <FadeinWrapper>
            <p className="p-5 ml-8 text-2xl font-normal">Django</p>
            <p className="p-5 ml-16 text-md">
              I've spent most of my time doing web development, so I'm particularly familiar with Python's web framework,{" "}
              <a
                href="https://www.djangoproject.com/"
                target="_blank"
                rel="noreferrer"
                className="underline hover:text-graywhite-330 dark:hover:text-graywhite-396"
              >
                Django
              </a>
              . I've been doing web development with Django for over 5 years and can build modern, well-tested web application.
            </p>
          </FadeinWrapper>

          <FadeinWrapper>
            <p className="p-5 ml-8 text-2xl font-normal">Django REST Framwork</p>
            <p className="p-5 ml-16 text-md">
              Django is already pretty good, but when you combine it with the{" "}
              <a
                href="https://www.django-rest-framework.org/"
                target="_blank"
                rel="noreferrer"
                className="underline hover:text-graywhite-330 dark:hover:text-graywhite-396"
              >
                Django REST Framework
              </a>
              , it gets even better. Modern web applications often require REST APIs, and this is where the Django REST Framework comes in.
            </p>
          </FadeinWrapper>

          <FadeinWrapper>
            <p className="p-5 ml-8 text-2xl font-normal">SQL</p>
            <p className="p-5 ml-16 text-md">
              Django has a great model/ORM system, which makes it possible to creating a web application without writing SQL. But sometimes SQL knowledge is
              important, too. It is true especially when it comes to a extremely complicated queriy or some performance issue.
            </p>
          </FadeinWrapper>

          <FadeinWrapper>
            <p className="p-5 ml-8 text-2xl font-normal">React.js</p>
            <p className="p-5 ml-16 text-md">
              Django is a backend framework I use a lot, and when it comes to frontend things,{" "}
              <a href="https://reactjs.org/" target="_blank" rel="noreferrer" className="underline hover:text-graywhite-330 dark:hover:text-graywhite-396">
                React.js
              </a>{" "}
              is my favorite because its philosophy is so graceful, making you enjoy coding and building things with it. This website is built with React.js,
              too.
            </p>
          </FadeinWrapper>

          <FadeinWrapper>
            <p className="p-5 ml-8 text-2xl font-normal">Vue.js</p>
            <p className="p-5 ml-16 text-md">
              In addition to React.js, I also use{" "}
              <a href="https://vuejs.org" target="_blank" rel="noreferrer" className="underline hover:text-graywhite-330 dark:hover:text-graywhite-396">
                Vue.js
              </a>
              . I personally like React.js more, but they are both very powerful andd reliable frameworks.
            </p>
          </FadeinWrapper>

          <FadeinWrapper>
            <p className="p-5 ml-8 text-2xl font-normal">Tailwind CSS</p>
            <p className="p-5 ml-16 text-md">
              <a href="https://tailwindcss.com/" target="_blank" rel="noreferrer" className="underline hover:text-graywhite-330 dark:hover:text-graywhite-396">
                Tailwind CSS
              </a>{" "}
              is another tool that I love and use a lot. It is similar to{" "}
              <a href="https://getbootstrap.com/" target="_blank" rel="noreferrer" className="underline hover:text-graywhite-330 dark:hover:text-graywhite-396">
                Bootstrap
              </a>
              , but it is much more flexible and easy to customize, which prevents you from building a lot of similar web.
            </p>
          </FadeinWrapper>

          <FadeinWrapper>
            <p className="p-5 ml-8 text-2xl font-normal">HTML/CSS/JavaScript</p>
            <p className="p-5 ml-16 text-md">
              In addition to developing with frontend frameworks, I also know about HTML/CSS/JavaScript. I think, after all, frameworks are based on these three
              elements, so it is important to have a solid understanding of them.
            </p>
          </FadeinWrapper>

          <FadeinWrapper>
            <p className="p-5 ml-8 text-2xl font-normal">CI/CD</p>
            <p className="p-5 ml-16 text-md">
              I use{" "}
              <a
                href="https://docs.github.com/en/actions"
                target="_blank"
                rel="noreferrer"
                className="underline hover:text-graywhite-330 dark:hover:text-graywhite-396"
              >
                Github action
              </a>{" "}
              to handle CI/CD things. I believe that deployment is just as important as development. If a feature can't be delivered to the users, the resources
              spent on development will be wasted.
            </p>
          </FadeinWrapper>

          <FadeinWrapper>
            <p className="p-5 ml-8 text-2xl font-normal">Docker</p>
            <p className="p-5 ml-16 text-md">
              I mostly run my services in{" "}
              <a href="https://www.docker.com/" target="_blank" rel="noreferrer" className="underline hover:text-graywhite dark:hover:text-graywhite-396">
                Docker
              </a>
              , which frees me from a lot of environment and compatibility concerns. Docker greatly increases the portability and flexibility of the services.
            </p>
          </FadeinWrapper>

          <FadeinWrapper>
            <p className="p-5 ml-8 text-2xl font-normal">GCP</p>
            <p className="p-5 ml-16 text-md">
              <a href="https://cloud.google.com/gcp" target="_blank" rel="noreferrer" className="underline hover:text-graywhite dark:hover:text-graywhite-396">
                GCP
              </a>{" "}
              is where most of my services are hosted. This website is such a example. I usually use their compute engines with Docker.
            </p>
          </FadeinWrapper>

          <FadeinWrapper>
            <p className="p-5 text-4xl font-normal">Thank you</p>
            <p className="p-5 text-md">thank you for giving a chance to introduce myself. I really apprecicate that. Feel free to contact me if you want.</p>
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
    </div>
  );
};

export default HomePage;
