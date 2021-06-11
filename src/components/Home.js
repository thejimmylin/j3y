import { useState, useEffect } from "react";
import oneWayPixelated from "../images/one_way_pixelated.jpg";
import oneWay from "../images/one_way.jpg";

const Home = () => {
  const lowQualitySrc = oneWayPixelated;
  const highQualitySrc = oneWay;
  const [src, setSrc] = useState(lowQualitySrc);
  const [blur, setBlur] = useState(true);
  useEffect(() => {
    setSrc(highQualitySrc);
    setBlur(false);
  }, [lowQualitySrc, highQualitySrc]);

  return (
    <>
      {/* header - A screen height block with fixed background. */}
      <header className="h-full font-pretty">
        <nav className="relative h-full">
          {/* Img acts as a background */}
          <img
            className="fixed object-cover w-full h-full -z-10"
            src={src}
            alt="one way"
            style={{
              filter: blur ? "blur(80px)" : "blur(1px)",
              transition: "filter 1.6s ease-out",
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

          <p className="p-5 text-4xl font-gorgeous">I love programming</p>
          <p className="p-5 text-sm">
            I like to impress people with what I do. Creating is an amazing thing, and programming gives us the ability to do so. I guess that's why I love
            programming so much.
          </p>

          <p className="p-5 text-4xl font-gorgeous">Skills</p>
          <p className="p-5 text-sm">In case you are interested, here are my skills :)</p>

          <div className="ml-5">
            <p className="p-5 text-2xl font-gorgeous">Language</p>
            <ul className="pl-5 text-sm">
              <li className="ml-5">- Python</li>
              <li className="ml-5">- HTML</li>
              <li className="ml-5">- CSS</li>
              <li className="ml-5">- JavaScript</li>
            </ul>

            <p className="p-5 text-2xl font-gorgeous">DB</p>
            <ul className="pl-5 text-sm">
              <li className="ml-5">- MSSQL</li>
              <li className="ml-5">- MySQL</li>
              <li className="ml-5">- MariaDB</li>
              <li className="ml-5">- PostgreSQL</li>
            </ul>

            <p className="p-5 text-2xl font-gorgeous">Framework</p>
            <ul className="pl-5 text-sm">
              <li className="ml-5">- Django</li>
              <li className="ml-5">- Django REST Framework</li>
              <li className="ml-5">- Bootstrap</li>
              <li className="ml-5">- Tailwind CSS</li>
              <li className="ml-5">- React.js</li>
              <li className="ml-5">- Vue.js</li>
            </ul>

            <p className="p-5 text-2xl font-gorgeous">Development</p>
            <ul className="pl-5 text-sm">
              <li className="ml-5">- Git</li>
              <li className="ml-5">- Visual Studio</li>
              <li className="ml-5">- Draw.io</li>
              <li className="ml-5">- Docker</li>
            </ul>

            <p className="p-5 text-2xl font-gorgeous">Other</p>
            <ul className="pl-5 text-sm">
              <li className="ml-5">- Linux</li>
              <li className="ml-5">- Cisco Command</li>
              <li className="ml-5">- FortiOS Command</li>
            </ul>
          </div>

          <p className="p-5 text-sm"></p>

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
