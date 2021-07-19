import avatar from "./Main/avatar-1440x1440.jpg";
import avatarCompressed from "./Main/avatar-144x144.jpg";
import ntu from "./Main/ntu-360x360.png";
import ntuCompressed from "./Main/ntu-36x36.png";
import chief from "./Main/chief-500x300.png";
import chiefCompressed from "./Main/chief-50x30.png";
import FadeinWrapper from "./shared/FadeinWrapper";
import ProgressiveImgWrapper from "./shared/ProgressiveImgWrapper";
import fortiadminLogin from "./Main/fortiadmin-login-1920x1080.png";
import fortiadminLoginCompressed from "./Main/fortiadmin-login-192x108.png";
import fortiadminExample from "./Main/fortiadmin-example-1920x1080.png";
import fortiadminExampleCompressed from "./Main/fortiadmin-example-192x108.png";
import ctdbI18n from "./Main/ctdb-i18n-1920x1080.png";
import ctdbI18nCompressed from "./Main/ctdb-i18n-192x108.png";
import ctdbLog from "./Main/ctdb-log-1920x1080.png";
import ctdbLogCompressed from "./Main/ctdb-log-192x108.png";

const Main = ({ refMain }) => {
  return (
    <main
      ref={refMain}
      className="py-20 font-extralight text-graywhite-99 dark:text-graywhite-594 bg-graywhite-660 dark:bg-graywhite-99 font-pretty"
    >
      <div className="max-w-screen-sm p-3 mx-auto">
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
              className="w-full p-5 duration-1000 ease-out rounded-3xl transition-filter"
            />
          </ProgressiveImgWrapper>
        </FadeinWrapper>

        <FadeinWrapper>
          <p className="p-5 text-4xl font-normal">Hello world</p>
          <p className="p-5 text-md">
            I'm Jimmy. I love programming. I like to create things and programming gives
            me the chance to do so.
          </p>
        </FadeinWrapper>

        <FadeinWrapper>
          <p className="p-5 text-4xl font-normal">Education</p>
          <div className="grid grid-cols-12 p-5">
            <p className="col-span-9 pr-2 text-md">
              <a
                className="underline hover:text-graywhite-330 dark:hover:text-graywhite-396"
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
                  className="duration-1000 ease-out transition-filter"
                />
              </ProgressiveImgWrapper>
            </div>
          </div>
        </FadeinWrapper>

        <FadeinWrapper>
          <p className="p-5 text-4xl font-normal">Experience</p>
          <div className="grid grid-cols-12 p-5">
            <div className="col-span-9 pr-2 text-md">
              <p>
                <a
                  href="https://www.chief.com.tw"
                  target="_blank"
                  rel="noreferrer"
                  className="underline hover:text-graywhite-330 dark:hover:text-graywhite-396"
                >
                  Chief Telecom
                </a>{" "}
                for 4 years. I work for their cloud service department. I maintain and
                develop products and services about{" "}
                <a
                  href="https://www.chief.com.tw/cloud/"
                  target="_blank"
                  rel="noreferrer"
                  className="underline hover:text-graywhite-330 dark:hover:text-graywhite-396"
                >
                  Chief Cloud
                </a>
                . Major Achievements:
              </p>
            </div>

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
                  className="duration-1000 ease-out transition-filter"
                />
              </ProgressiveImgWrapper>
            </div>
          </div>
        </FadeinWrapper>

        <FadeinWrapper>
          <p className="p-5 ml-8 text-2xl font-normal">FortiAdmin</p>
          <p className="p-5 ml-8">
            <span className="font-medium">FortiAdmin</span> is mainly built with{" "}
            <span className="font-medium">Django</span>, and{" "}
            <span className="font-medium">shlex</span>,{" "}
            <span className="font-medium">Forti REST API</span> which is a multi-tenant
            portal for Fortigate/Fortios. With{" "}
            <span className="font-medium">FortiAdmin</span>, It is possible to set their
            own config without interfere with each other for different users.
          </p>
          <p className="p-5 ml-8">
            Features:
            <br />
            <span className="font-medium">Multi-tenant</span> /{" "}
            <span className="font-medium">Forti REST API</span>
          </p>
          <p className="p-5 ml-8">
            Tech stack:
            <br />
            <span className="font-medium">Django</span> /{" "}
            <span className="font-medium">shelx</span> /{" "}
            <span className="font-medium">Forti REST API</span> /{" "}
          </p>
        </FadeinWrapper>

        <FadeinWrapper>
          <p className="p-5 ml-8 text-2xl font-normal">CTDB</p>
          <p className="p-5 ml-8">
            <span className="font-medium">CTDB</span> is mainly built with{" "}
            <span className="font-medium">Django</span>,{" "}
            <span className="font-medium">Django REST Framework</span>,{" "}
            <span className="font-medium">Vue.js</span>, containing several useful
            applications, such as <span className="font-medium">Diary</span>,{" "}
            <span className="font-medium">Reminder</span>,{" "}
            <span className="font-medium">Telecom</span>,{" "}
            <span className="font-medium">News</span>,{" "}
            <span className="font-medium">Archive</span>, etc. It also has its own log
            system. It is mainly used by engineers in the technical department of the
            company.
          </p>
          <p className="p-5 ml-8">
            Features:
            <br />
            <span className="font-medium">i18n</span> /{" "}
            <span className="font-medium">Log system</span>
          </p>
          <p className="p-5 ml-8">
            Tech stack:
            <br />
            <span className="font-medium">Django</span> /{" "}
            <span className="font-medium">Django REST framework</span> /{" "}
            <span className="font-medium">Vue.js</span>
          </p>
        </FadeinWrapper>

        <FadeinWrapper>
          <p className="p-5 text-4xl font-normal">Skills</p>
          <p className="p-5 text-md">Here are my skills and the techniques I use:</p>
        </FadeinWrapper>

        <FadeinWrapper>
          <p className="p-5 ml-8 text-2xl font-normal">Python</p>
          <p className="p-5 ml-8 text-md">
            Python is my primary programming language. I am familiar with Python's
            language features and many of its standard libraries such as{" "}
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
          <p className="p-5 ml-8 text-md">
            I've spent most of my time doing web development, so I'm particularly
            familiar with Python's web framework,{" "}
            <a
              href="https://www.djangoproject.com/"
              target="_blank"
              rel="noreferrer"
              className="underline hover:text-graywhite-330 dark:hover:text-graywhite-396"
            >
              Django
            </a>
            . I've been doing web development with Django for over 5 years and can build
            modern, well-tested web application.
          </p>
        </FadeinWrapper>

        <FadeinWrapper>
          <p className="p-5 ml-8 text-2xl font-normal">Django REST Framwork</p>
          <p className="p-5 ml-8 text-md">
            Django is already pretty good, but when you combine it with the{" "}
            <a
              href="https://www.django-rest-framework.org/"
              target="_blank"
              rel="noreferrer"
              className="underline hover:text-graywhite-330 dark:hover:text-graywhite-396"
            >
              Django REST Framework
            </a>
            , it gets even better. Modern web applications often require REST APIs, and
            this is where the Django REST Framework comes in.
          </p>
        </FadeinWrapper>

        <FadeinWrapper>
          <p className="p-5 ml-8 text-2xl font-normal">SQL</p>
          <p className="p-5 ml-8 text-md">
            Django has a great model/ORM system, which makes it possible to creating a
            web application without writing SQL. But sometimes SQL knowledge is
            important, too. It is true especially when it comes to a extremely
            complicated queriy or some performance issue.
          </p>
        </FadeinWrapper>

        <FadeinWrapper>
          <p className="p-5 ml-8 text-2xl font-normal">React.js</p>
          <p className="p-5 ml-8 text-md">
            Django is a backend framework I use a lot, and when it comes to frontend
            things,{" "}
            <a
              href="https://reactjs.org/"
              target="_blank"
              rel="noreferrer"
              className="underline hover:text-graywhite-330 dark:hover:text-graywhite-396"
            >
              React.js
            </a>{" "}
            is my favorite because its philosophy is so graceful, making you enjoy
            coding and building things with it. This website is built with React.js,
            too.
          </p>
        </FadeinWrapper>

        <FadeinWrapper>
          <p className="p-5 ml-8 text-2xl font-normal">Vue.js</p>
          <p className="p-5 ml-8 text-md">
            In addition to React.js, I also use{" "}
            <a
              href="https://vuejs.org"
              target="_blank"
              rel="noreferrer"
              className="underline hover:text-graywhite-330 dark:hover:text-graywhite-396"
            >
              Vue.js
            </a>
            . I personally like React.js more, but they are both very powerful andd
            reliable frameworks.
          </p>
        </FadeinWrapper>

        <FadeinWrapper>
          <p className="p-5 ml-8 text-2xl font-normal">Tailwind CSS</p>
          <p className="p-5 ml-8 text-md">
            <a
              href="https://tailwindcss.com/"
              target="_blank"
              rel="noreferrer"
              className="underline hover:text-graywhite-330 dark:hover:text-graywhite-396"
            >
              Tailwind CSS
            </a>{" "}
            is another tool that I love and use a lot. It is similar to{" "}
            <a
              href="https://getbootstrap.com/"
              target="_blank"
              rel="noreferrer"
              className="underline hover:text-graywhite-330 dark:hover:text-graywhite-396"
            >
              Bootstrap
            </a>
            , but it is much more flexible and easy to customize, which prevents you
            from building a lot of similar web.
          </p>
        </FadeinWrapper>

        <FadeinWrapper>
          <p className="p-5 ml-8 text-2xl font-normal">HTML/CSS/JavaScript</p>
          <p className="p-5 ml-8 text-md">
            In addition to developing with frontend frameworks, I also know about
            HTML/CSS/JavaScript. I think, after all, frameworks are based on these three
            elements, so it is important to have a solid understanding of them.
          </p>
        </FadeinWrapper>

        <FadeinWrapper>
          <p className="p-5 ml-8 text-2xl font-normal">CI/CD</p>
          <p className="p-5 ml-8 text-md">
            I use{" "}
            <a
              href="https://docs.github.com/en/actions"
              target="_blank"
              rel="noreferrer"
              className="underline hover:text-graywhite-330 dark:hover:text-graywhite-396"
            >
              Github action
            </a>{" "}
            to handle CI/CD things. I believe that deployment is just as important as
            development. If a feature can't be delivered to the users, the resources
            spent on development will be wasted.
          </p>
        </FadeinWrapper>

        <FadeinWrapper>
          <p className="p-5 ml-8 text-2xl font-normal">Docker</p>
          <p className="p-5 ml-8 text-md">
            I mostly run my services in{" "}
            <a
              href="https://www.docker.com/"
              target="_blank"
              rel="noreferrer"
              className="underline hover:text-graywhite dark:hover:text-graywhite-396"
            >
              Docker
            </a>
            , which frees me from a lot of environment and compatibility concerns.
            Docker greatly increases the portability and flexibility of the services.
          </p>
        </FadeinWrapper>

        <FadeinWrapper>
          <p className="p-5 ml-8 text-2xl font-normal">GCP</p>
          <p className="p-5 ml-8 text-md">
            <a
              href="https://cloud.google.com/gcp"
              target="_blank"
              rel="noreferrer"
              className="underline hover:text-graywhite dark:hover:text-graywhite-396"
            >
              GCP
            </a>{" "}
            is where most of my services are hosted. This website is such a example. I
            usually use their compute engines with Docker.
          </p>
        </FadeinWrapper>

        <FadeinWrapper>
          <p className="p-5 text-4xl font-normal">Portfolios</p>
          <p className="p-5 ml-8 text-2xl font-normal">
            FortiAdmin
            <ProgressiveImgWrapper
              thumbnail={
                <img
                  src={fortiadminLoginCompressed}
                  alt="fortiadminLoginCompressed"
                  className="w-full my-10 rounded-sm filter blur-md"
                />
              }
            >
              <img
                src={fortiadminLogin}
                alt="fortiadminLogin"
                className="w-full my-10 duration-1000 ease-out rounded-sm transition-filter"
              />
            </ProgressiveImgWrapper>
            <ProgressiveImgWrapper
              thumbnail={
                <img
                  src={fortiadminExampleCompressed}
                  alt="fortiadminExampleCompressed"
                  className="w-full my-10 rounded-sm filter blur-md"
                />
              }
            >
              <img
                src={fortiadminExample}
                alt="fortiadminExample"
                className="w-full my-10 duration-1000 ease-out rounded-sm transition-filter"
              />
            </ProgressiveImgWrapper>
          </p>
        </FadeinWrapper>
        <FadeinWrapper>
          <p className="p-5 ml-8 text-2xl font-normal">
            CTDB
            <ProgressiveImgWrapper
              thumbnail={
                <img
                  src={ctdbI18nCompressed}
                  alt="ctdbI18nCompressed"
                  className="w-full my-10 rounded-sm filter blur-md"
                />
              }
            >
              <img
                src={ctdbI18n}
                alt="ctdbI18n"
                className="w-full my-10 duration-1000 ease-out rounded-sm transition-filter"
              />
            </ProgressiveImgWrapper>
            <ProgressiveImgWrapper
              thumbnail={
                <img
                  src={ctdbLogCompressed}
                  alt="ctdbLogCompressed"
                  className="w-full my-10 rounded-sm filter blur-md"
                />
              }
            >
              <img
                src={ctdbLog}
                alt="ctdbLog"
                className="w-full my-10 duration-1000 ease-out rounded-sm transition-filter"
              />
            </ProgressiveImgWrapper>
          </p>
        </FadeinWrapper>

        <FadeinWrapper>
          <p className="p-5 text-4xl font-normal">Thank you</p>
          <p className="p-5 text-md">
            thank you for giving a chance to introduce myself. I really apprecicate
            that. Feel free to contact me if you want.
          </p>
        </FadeinWrapper>
      </div>
    </main>
  );
};

export default Main;
