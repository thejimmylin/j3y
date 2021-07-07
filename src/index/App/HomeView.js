import { useState, useEffect, useRef } from "react";
import wall from "./HomeView/wall-1440x810.jpg";
import wallCompressed from "./HomeView/wall-144x81-compressed.jpg";
import avatarCompressed from "./HomeView/avatar-144x144-compressed.jpg";
import avatar from "./HomeView/avatar-1440x1440.jpg";
import FadeInSection from "./HomeView/FadeInSection";
import SwitchingImage from "./HomeView/SwitchingImage";

const Home = () => {
  const [state, setState] = useState({ y: window.scrollY });

  const handleScroll = () => {
    setState({ ...state, y: window.scrollY });
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

  return (
    <>
      <header className="relative h-screen font-pretty">
        <div className="absolute w-full h-screen bg-graywhite-99 -z-10" style={{ transform: `translateY(${state.y / 2}px)` }}>
          <SwitchingImage
            before={{
              src: wallCompressed,
              alt: "wallCompressed",
              className: "object-cover w-full h-screen filter blur-2xl",
            }}
            after={{
              src: wall,
              alt: "wall",
              className: "object-cover w-full h-screen transition-filter duration-2000 ease-out ",
            }}
          />
        </div>
        <div className="absolute text-graywhite-693 hover:text-white  transform -translate-x-1/2 -translate-y-1/2 left-1/2 top-2/5 font-gorgeous whitespace-nowrap">
          <p className="mb-4 text-5xl">
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
          <p className="text-xs text-center">
            <span className="animate-fadein-1000-1400">Welcome</span>
            <span className="animate-fadein-1000-1450"> </span>
            <span className="animate-fadein-1000-1500">to</span>
            <span className="animate-fadein-1000-1550"> </span>
            <span className="animate-fadein-1000-1600">my</span>
            <span className="animate-fadein-1000-1650"> </span>
            <span className="animate-fadein-1000-1700">personal</span>
            <span className="animate-fadein-1000-1750"> </span>
            <span className="animate-fadein-1000-1800">page</span>
            <span className="animate-fadein-1000-1850">.</span>
          </p>
        </div>
        <div className="absolute right-8 top-5">
          <button
              onClick={scrollToContactMe}
              className="mb-4 block w-28 focus:outline-none text-graywhite-693 hover:text-white border-graywhite-693 hover:border-white text-md border px-4 py-1.5 animate-fadein-1000-800"
          >
            Contact
          </button>
        </div>
        <div
          className="absolute left-1/2 top-4/5 transform -translate-x-1/2 -translate-y-1/2 flex flex-col items-center"
        >
          <span className="text-graywhite-594 hover:text-white cursor-pointer animate-fadein-1000-900 transform hover:translate-y-0.5">
            <svg className="" onClick={scrollToAboutMe} xmlns="http://www.w3.org/2000/svg" width="48" height="48" fill="currentColor" class="bi bi-chevron-compact-down" viewBox="0 0 16 16">
              <path fill-rule="evenodd" d="M1.553 6.776a.5.5 0 0 1 .67-.223L8 9.44l5.776-2.888a.5.5 0 1 1 .448.894l-6 3a.5.5 0 0 1-.448 0l-6-3a.5.5 0 0 1-.223-.67z"/>
            </svg>
          </span>
        </div>

      </header>

      <main className="py-20 content font-pretty bg-graywhite-99 text-graywhite-594">
        <div ref={refAboutMe} className="max-w-screen-sm p-3 mx-auto bg-graywhite-105">
          <FadeInSection>
            <SwitchingImage
              before={{
                src: avatarCompressed,
                alt: "avatar",
                className: "w-full p-5 rounded-3xl filter blur-sm",
              }}
              after={{
                src: avatar,
                alt: "avatar",
                className: "w-full p-5 transition duration-1000 ease-out rounded-3xl",
              }}
            />
          </FadeInSection>

          <FadeInSection>
            <p className="p-5 text-4xl font-gorgeous">Hello world :)</p>
            <p className="p-5 text-md">
              I'm Jimmy. I love programming. I like to create things and programming gives me the chance to do so.
            </p>
          </FadeInSection>

          <FadeInSection>
            <p className="p-5 text-4xl font-gorgeous">My job</p>
            <p className="p-5 text-md">
              I have been working at{" "}
              <a href="https://www.chief.com.tw" target="_blank" rel="noreferrer" className="underline text-graywhite-495 hover:text-white">
                Chief Telecom
              </a>{" "}
              for 4 years. I work for their cloud service department. I maintain and develop products and services about{" "}
              <a href="https://www.chief.com.tw/cloud/" target="_blank" rel="noreferrer" className="underline text-graywhite-495 hover:text-white">
                Chief Cloud
              </a>
              .
            </p>
          </FadeInSection>

          <FadeInSection>
            <p className="p-5 text-4xl font-gorgeous">My Skills</p>
            <p className="p-5 text-md">Here are my skills, just in case you're interested:</p>
          </FadeInSection>

          <div className="ml-5 mb-5">
            <FadeInSection>
              <p className="p-5 text-2xl font-gorgeous">Language</p>
              <ul className="pl-5 text-md">
                <li className="ml-5">- Python</li>
                <li className="ml-5">- HTML</li>
                <li className="ml-5">- CSS</li>
                <li className="ml-5">- JavaScript</li>
              </ul>
            </FadeInSection>

            <FadeInSection>
              <p className="p-5 text-2xl font-gorgeous">DB</p>
              <ul className="pl-5 text-md">
                <li className="ml-5">- MSSQL</li>
                <li className="ml-5">- MySQL</li>
                <li className="ml-5">- MariaDB</li>
                <li className="ml-5">- PostgreSQL</li>
              </ul>
            </FadeInSection>

            <FadeInSection>
              <p className="p-5 text-2xl font-gorgeous">Framework</p>
              <ul className="pl-5 text-md">
                <li className="ml-5">- Django</li>
                <li className="ml-5">- Django REST Framework</li>
                <li className="ml-5">- Vue.js</li>
                <li className="ml-5">- React.js</li>
                <li className="ml-5">- Tailwind CSS</li>
              </ul>
            </FadeInSection>

            <FadeInSection>
              <p className="p-5 text-2xl font-gorgeous">Development</p>
              <ul className="pl-5 text-md">
                <li className="ml-5">- Git</li>
                <li className="ml-5">- Linux</li>
                <li className="ml-5">- Docker</li>
                <li className="ml-5">- GCP</li>
              </ul>
            </FadeInSection>

            <FadeInSection>
              <p className="p-5 text-2xl font-gorgeous">Other</p>
              <ul className="pl-5 text-md">
                <li className="ml-5">- Cisco Command</li>
                <li className="ml-5">- FortiOS Command</li>
              </ul>
            </FadeInSection>
          </div>

          <FadeInSection>
            <p className="max-w-screen-sm p-5 mx-auto text-4xl font-gorgeous">Thank you</p>
            <p className="max-w-screen-sm p-5 mx-auto text-md">
              I appreciate that you gave me sometime to introduce myself.
            </p>
          </FadeInSection>

          <FadeInSection>
            <p ref={refContactMe} className="p-5 text-4xl font-gorgeous">Contact me</p>
            <p className="p-5 text-md">
              Contact me with <a href="mailto:b00502013@gmail.com" className="underline text-graywhite-495 hover:text-white">b00502013@gmail.com</a> or{" "}
              <a href="https://www.cakeresume.com/b00502013" target="_blank" rel="noreferrer" className="underline text-graywhite-495 hover:text-white">
                cakeresume
              </a>
              .
            </p>
            <p className="max-w-screen-sm p-5 mx-auto flex">
              <a href="https://github.com/j3ygithub" target="_blank" rel="noreferrer" className="pr-4 underline text-graywhite-495 hover:text-white">
                <svg xmlns="http://www.w3.org/2000/svg" width="48" height="48" fill="currentColor" class="bi bi-github" viewBox="0 0 16 16">
                  <path d="M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82.64-.18 1.32-.27 2-.27.68 0 1.36.09 2 .27 1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.2 0 .21.15.46.55.38A8.012 8.012 0 0 0 16 8c0-4.42-3.58-8-8-8z"/>
                </svg>
              </a>
              <a
                href="https://www.linkedin.com/in/jimmy-lin-5779a61b5/"
                target="_blank"
                rel="noreferrer"
                className="pr-4 underline text-graywhite-495 hover:text-white"
              >
                <svg xmlns="http://www.w3.org/2000/svg" width="48" height="48" fill="currentColor" class="bi bi-linkedin" viewBox="0 0 16 16">
                  <path d="M0 1.146C0 .513.526 0 1.175 0h13.65C15.474 0 16 .513 16 1.146v13.708c0 .633-.526 1.146-1.175 1.146H1.175C.526 16 0 15.487 0 14.854V1.146zm4.943 12.248V6.169H2.542v7.225h2.401zm-1.2-8.212c.837 0 1.358-.554 1.358-1.248-.015-.709-.52-1.248-1.342-1.248-.822 0-1.359.54-1.359 1.248 0 .694.521 1.248 1.327 1.248h.016zm4.908 8.212V9.359c0-.216.016-.432.08-.586.173-.431.568-.878 1.232-.878.869 0 1.216.662 1.216 1.634v3.865h2.401V9.25c0-2.22-1.184-3.252-2.764-3.252-1.274 0-1.845.7-2.165 1.193v.025h-.016a5.54 5.54 0 0 1 .016-.025V6.169h-2.4c.03.678 0 7.225 0 7.225h2.4z"/>
                </svg>
              </a>
            </p>
          </FadeInSection>

        </div>
      </main>

      <footer className="flex items-center justify-center h-12 bg-graywhite-99 text-graywhite-693 footer font-pretty">
        <div className="max-w-screen-sm mx-auto text-md text-center">© 2021 All rights reserved.</div>
      </footer>
    </>
  );
};

export default Home;
