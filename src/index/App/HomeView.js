import onewayCompressed from "./HomeView/oneway-192x108-compressed.jpg";
import oneway from "./HomeView/oneway-2560x1440.jpg";
import avatarCompressed from "./HomeView/avatar-144x144-compressed.jpg";
import avatar from "./HomeView/avatar-1440x1440.jpg";
import FadeInSection from "./HomeView/FadeInSection";
import SwitchingImage from "./HomeView/SwitchingImage";

const Home = () => {
  return (
    <>
      {/* header - A screen height block with fixed background. */}
      <header className="h-full font-pretty">
        {/* Background color of nav itself is black, which prevents the white border due to the CSS blur. */}
        <nav className="relative h-full bg-graywhite-99 -z-20">
          {/* Img acts as a background */}
          <SwitchingImage
            before={{
              src: onewayCompressed,
              alt: "oneway",
              className: "absolute object-cover w-full h-full md:fixed -z-10",
              style: { filter: "blur(16px)" },
            }}
            after={{
              src: oneway,
              alt: "oneway",
              className:
                "absolute object-cover w-full h-full transition duration-2000 ease-out md:fixed -z-10",
              style: { filter: "blur(0)" },
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
      <main className="pt-20 content font-pretty bg-graywhite-99 text-graywhite-693">
        <div className="max-w-screen-sm p-3 mx-auto bg-graywhite-105">
          <FadeInSection>
            <SwitchingImage
              common={{}}
              before={{
                src: avatarCompressed,
                alt: "avatar",
                className: "w-full p-5 rounded-3xl",
                style: { filter: "blur(4px)" },
              }}
              after={{
                src: avatar,
                alt: "avatar",
                className: "w-full p-5 transition duration-1000 ease-out rounded-3xl",
                style: { filter: "blur(0)" },
              }}
            />
            <p className="p-5 text-sm">
              Hello world, I'm Jimmy. I have been working at{" "}
              <a
                href="https://www.chief.com.tw"
                target="_blank"
                rel="noreferrer"
                className="underline text-graywhite-495 hover:text-white"
              >
                Chief Telecom
              </a>{" "}
              for 4 years. I work for their cloud service department, maintaining and
              developing products and services about{" "}
              <a
                href="https://www.chief.com.tw/cloud/"
                target="_blank"
                rel="noreferrer"
                className="underline text-graywhite-495 hover:text-white"
              >
                Chief Cloud
              </a>
              .
            </p>
          </FadeInSection>

          <FadeInSection>
            <p className="p-5 text-4xl font-gorgeous">I love programming</p>
            <p className="p-5 text-sm">
              I like to impress people with what I do. Creating is an amazing thing, and
              programming gives us the ability to do so. I guess that's why I love
              programming so much.
            </p>
          </FadeInSection>

          <FadeInSection>
            <p className="p-5 text-4xl font-gorgeous">Skills</p>
            <p className="p-5 text-sm">
              Here are my skills, just in case you're interested :)
            </p>
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
            <p className="max-w-screen-sm p-5 mx-auto text-4xl font-gorgeous">
              Thank you
            </p>
            <p className="max-w-screen-sm p-5 mx-auto text-sm">
              I appreciate that you gave me sometime to introduce myself. Now, maybe you
              would like to know more about me with:
            </p>

            <p className="max-w-screen-sm p-5 mx-auto">
              <a
                href="https://github.com/j3ygithub"
                target="_blank"
                rel="noreferrer"
                className="pr-4 underline text-graywhite-495 hover:text-white"
              >
                Github
              </a>
              <a
                href="https://www.cakeresume.com/b00502013"
                target="_blank"
                rel="noreferrer"
                className="pr-4 underline text-graywhite-495 hover:text-white"
              >
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
        <div className="max-w-screen-sm mx-auto text-sm text-center">
          © 2021 All rights reserved.
        </div>
      </footer>
    </>
  );
};

export default Home;
