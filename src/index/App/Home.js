import { useState, useEffect } from "react";
import oneWayPixelated from "./Home/oneway_pixelated.jpg";
import oneWay from "./Home/oneway.jpg";
import FadeInSection from "./FadeInSection"

const Home = () => {
  const [state, setState] = useState({ src: oneWayPixelated, blur: true });
  useEffect(() => {
    const image = new Image();
    image.onload = () => {
      setState({ src: oneWay, blur: false });
    };
    image.src = oneWay;
  }, []);

  return (
    <>
      {/* header - A screen height block with fixed background. */}
      <header className="h-full font-pretty">
        {/* Background color of nav itself is black, which prevents the white border due to the CSS blur. */}
        <nav className="relative h-full bg-black -z-20">
          {/* Img acts as a background */}
          <img
            className="absolute object-cover w-full h-full transition duration-1000 ease-out md:fixed -z-10"
            src={state.src}
            alt="one way"
            style={{
              filter: state.blur ? "blur(64px)" : "blur(0px)",
            }}
          />
          {/* Brand div */}
          <div className="z-0 animate-fadein">
            <p className="px-8 pt-8 text-4xl text-white font-gorgeous">
              <a href="/">Jimmy Lin</a>
            </p>
            <p className="px-8 pt-2 text-xs text-white animate-pulse">
              <a href="/">–PERSONAL INFO</a>
            </p>
          </div>
        </nav>
      </header>

      {/* main - main content here. */}
      <main className="bg-gray-100 content font-pretty">

        <div className="max-w-screen-sm mx-auto bg-gray-50">

          <p className="p-5"></p>

          <FadeInSection>
          <p className="p-5 text-4xl font-gorgeous">I'm Jimmy Lin</p>
          <p className="p-5 text-sm">
            I have been working at{" "}
            <a href="https://www.chief.com.tw" target="_blank" rel="noreferrer" className="text-gray-500 underline hover:text-gray-600">
              Chief Telecom
            </a>{" "}
            for 4 years. I work for their cloud service department, maintaining and developing products and services about{" "}
            <a href="https://www.chief.com.tw/cloud/" target="_blank" rel="noreferrer" className="text-gray-500 underline hover:text-gray-600">
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
          <p className="p-5 text-sm">In case you are interested, here are my skills :)</p>
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
              <li className="ml-5">- Bootstrap</li>
              <li className="ml-5">- Tailwind CSS</li>
              <li className="ml-5">- React.js</li>
              <li className="ml-5">- Vue.js</li>
            </ul>
            </FadeInSection>

            <FadeInSection>
            <p className="p-5 text-2xl font-gorgeous">Development</p>
            <ul className="pl-5 text-sm">
              <li className="ml-5">- Git</li>
              <li className="ml-5">- Visual Studio</li>
              <li className="ml-5">- Draw.io</li>
              <li className="ml-5">- Docker</li>
            </ul>
            </FadeInSection>

            <FadeInSection>
            <p className="p-5 text-2xl font-gorgeous">Other</p>
            <ul className="pl-5 text-sm">
              <li className="ml-5">- Linux</li>
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
            <a href="https://github.com/j3ygithub" target="_blank" rel="noreferrer" className="pr-4 text-gray-500 underline hover:text-gray-600">
              Github
            </a>
            <a href="https://www.cakeresume.com/b00502013" target="_blank" rel="noreferrer" className="pr-4 text-gray-500 underline hover:text-gray-600">
              Cakeresume
            </a>
            <a
              href="https://www.linkedin.com/in/jimmy-lin-5779a61b5/"
              target="_blank"
              rel="noreferrer"
              className="pr-4 text-gray-500 underline hover:text-gray-600"
            >
              LinkedIn
            </a>
          </p>
          </FadeInSection>

          <p className="p-5"></p>
        </div>
      </main>

      <footer className="flex items-center justify-center h-12 bg-gray-100 footer font-pretty">
        <div className="max-w-screen-sm mx-auto text-sm text-center text-gray-500">© 2021 All rights reserved.</div>
      </footer>
    </>
  );
};

export default Home;
