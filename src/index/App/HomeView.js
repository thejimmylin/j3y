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

  const ref = useRef(null);
  const executeScroll = () => {
    ref.current.scrollIntoView({ behavior: "smooth", block: "start" });
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
        <div className="absolute text-white hover:text-graywhite-693 transform -translate-x-1/2 -translate-y-1/2 left-1/2 top-2/5 font-gorgeous whitespace-nowrap">
          <p className="mb-8 text-5xl">
            <span className="animate-fadein-1000-0">I</span>
            <span className="animate-fadein-1000-100">'</span>
            <span className="animate-fadein-1000-200">m</span>
            <span className="animate-fadein-1000-300"> </span>
            <span className="animate-fadein-1000-400">J</span>
            <span className="animate-fadein-1000-500">i</span>
            <span className="animate-fadein-1000-600">m</span>
            <span className="animate-fadein-1000-700">m</span>
            <span className="animate-fadein-1000-800">y</span>
            <span className="animate-fadein-1000-900"> </span>
            <span className="animate-fadein-1000-1000">L</span>
            <span className="animate-fadein-1000-1100">i</span>
            <span className="animate-fadein-1000-1200">n</span>
            <span className="animate-fadein-1000-1300">.</span>
          </p>
        </div>
        <button
          onClick={executeScroll}
          className="absolute focus:outline-none text-white hover:text-graywhite-693 border-white hover:border-graywhite-693 text-1xl border  left-1/2 top-3/4 transform -translate-x-1/2 -translate-y-1/2 px-4 py-1.5 animate-fadein-1000-1500"
        >
          About
        </button>
      </header>

      <main ref={ref} className="pt-20 content font-pretty bg-graywhite-99 text-graywhite-693">
        <div className="max-w-screen-sm p-3 mx-auto bg-graywhite-105">
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
            <p className="p-5 text-sm">
              Hello world, I'm Jimmy. I have been working at{" "}
              <a href="https://www.chief.com.tw" target="_blank" rel="noreferrer" className="underline text-graywhite-495 hover:text-white">
                Chief Telecom
              </a>{" "}
              for 4 years. I work for their cloud service department, maintaining and developing products and services about{" "}
              <a href="https://www.chief.com.tw/cloud/" target="_blank" rel="noreferrer" className="underline text-graywhite-495 hover:text-white">
                Chief Cloud
              </a>
              .
            </p>
          </FadeInSection>

          <FadeInSection>
            <p className="p-5 text-4xl font-gorgeous">I love programming</p>
            <p className="p-5 text-sm">
              I like to impress people with what I do. Creating is an amazing thing, and programming gives us the ability to do so. I guess that's why I love
              programming so much.
            </p>
          </FadeInSection>

          <FadeInSection>
            <p className="p-5 text-4xl font-gorgeous">Skills</p>
            <p className="p-5 text-sm">Here are my skills, just in case you're interested :)</p>
          </FadeInSection>

          <div className="ml-5">
            <FadeInSection>
              <p className="p-5 text-2xl font-gorgeous">Language</p>
              <ul className="pl-5 text-sm">
                <li className="ml-5">- Python</li>
                <li className="ml-5">- HTML</li>
                <li className="ml-5">- CSS</li>
                <li className="ml-5">- JavaScript</li>
              </ul>
            </FadeInSection>

            <FadeInSection>
              <p className="p-5 text-2xl font-gorgeous">DB</p>
              <ul className="pl-5 text-sm">
                <li className="ml-5">- MSSQL</li>
                <li className="ml-5">- MySQL</li>
                <li className="ml-5">- MariaDB</li>
                <li className="ml-5">- PostgreSQL</li>
              </ul>
            </FadeInSection>

            <FadeInSection>
              <p className="p-5 text-2xl font-gorgeous">Framework</p>
              <ul className="pl-5 text-sm">
                <li className="ml-5">- Django</li>
                <li className="ml-5">- Django REST Framework</li>
                <li className="ml-5">- Vue.js</li>
                <li className="ml-5">- React.js</li>
                <li className="ml-5">- Tailwind CSS</li>
              </ul>
            </FadeInSection>

            <FadeInSection>
              <p className="p-5 text-2xl font-gorgeous">Development</p>
              <ul className="pl-5 text-sm">
                <li className="ml-5">- Git</li>
                <li className="ml-5">- Linux</li>
                <li className="ml-5">- Docker</li>
                <li className="ml-5">- GCP</li>
              </ul>
            </FadeInSection>

            <FadeInSection>
              <p className="p-5 text-2xl font-gorgeous">Other</p>
              <ul className="pl-5 text-sm">
                <li className="ml-5">- Cisco Command</li>
                <li className="ml-5">- FortiOS Command</li>
              </ul>
            </FadeInSection>
          </div>

          <p className="p-5 text-sm"></p>

          <FadeInSection>
            <p className="max-w-screen-sm p-5 mx-auto text-4xl font-gorgeous">Thank you</p>
            <p className="max-w-screen-sm p-5 mx-auto text-sm">
              I appreciate that you gave me sometime to introduce myself. Now, maybe you would like to know more about me with:
            </p>

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

          <p className="p-5"></p>
        </div>
      </main>

      <footer className="flex items-center justify-center h-12 bg-graywhite-99 text-graywhite-693 footer font-pretty">
        <div className="max-w-screen-sm mx-auto text-sm text-center">© 2021 All rights reserved.</div>
      </footer>
    </>
  );
};

export default Home;
