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
        <div
          className="absolute left-1/2 top-3/4 transform -translate-x-1/2 -translate-y-1/2"
        >
        <button
          onClick={scrollToAboutMe}
          className="block mb-2 w-28 focus:outline-none text-graywhite-693 hover:text-white border-graywhite-693 hover:border-white text-md border px-4 py-1.5 animate-fadein-1000-800"
        >
          About
        </button>
        <button
          onClick={scrollToContactMe}
          className="block w-28 focus:outline-none text-graywhite-693 hover:text-white border-graywhite-693 hover:border-white text-md border px-4 py-1.5 animate-fadein-1000-900"
        >
          Contact
        </button>
        </div>

      </header>

      <main className="pt-20 content font-pretty bg-graywhite-99 text-graywhite-693">
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
            <p className="p-5 text-4xl font-gorgeous">Hello world 😊</p>
            <p className="p-5 text-md">
              I'm Jimmy. I love programming.
            </p>
          </FadeInSection>

          <FadeInSection>
            <p className="p-5 text-4xl font-gorgeous">Why?</p>
            <p className="p-5 text-md">
              I like to create things. Programming gives me the chance to do so.
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
            <p className="p-5 text-md">b00502013@gmail.com</p>
            <p className="max-w-screen-sm p-5 mx-auto">
              <a href="https://github.com/j3ygithub" target="_blank" rel="noreferrer" className="pr-4 underline text-graywhite-495 hover:text-white">
                Github
              </a>
              <a href="https://www.cakeresume.com/b00502013" target="_blank" rel="noreferrer" className="pr-4 underline text-graywhite-495 hover:text-white">
                Cakeresume
              </a>
              <a
                href="https://www.linkedin.com/in/jimmy-lin-5779a61b5/"
                target="_blank"
                rel="noreferrer"
                className="pr-4 underline text-graywhite-495 hover:text-white"
              >
                LinkedIn
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
