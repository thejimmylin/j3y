import { useState, useEffect } from "react";
import Image from "next/image";
import classNames from "classnames";
import FadeinWrapper from "./FadeinWrapper";
import avatar from "../../public/avatar-1440x1440.jpg";
import ntu from "../../public/ntu-360x360.png";
import chief from "../../public/chief-500x300.png";
import ctdbI18n from "../../public/ctdb-i18n-1920x1080.png";
import ctdbLog from "../../public/ctdb-log-1920x1080.png";
import fortiadminLogin from "../../public/fortiadmin-login-1920x1080.png";
import fortiadminExample from "../../public/fortiadmin-example-1920x1080.png";

const Main = ({ refMain }) => {
  const [loaded, setLoaded] = useState(false);
  useEffect(() => {
    setLoaded(true);
  });
  return (
    <main
      ref={refMain}
      className="font-pretty font-extralight text-ink bg-paper dark:text-light dark:bg-night py-20"
    >
      <div className="max-w-screen-md p-4 mx-auto">
        <FadeinWrapper>
          <div
            className={classNames(
              "mt-8",
              "mb-16",
              "mx-4",
              "transition-filter",
              "ease-out",
              "duration-1000",
              "shadow-2xl",
              {
                "blur-md": !loaded,
              }
            )}
          >
            <Image
              src={avatar}
              alt="avatar"
              layout="responsive"
              className="rounded-sm"
            />
          </div>
        </FadeinWrapper>

        <FadeinWrapper>
          <p className="mx-4 my-8 text-4xl font-medium">Hello world</p>
          <p className="mx-4 my-8">
            I'm Jimmy. I love programming. I like to create things and programming gives
            me the chance to do so.
          </p>
          <p className="mx-4 my-8">
            I have five years of programming experience, mostly in Python.
          </p>
        </FadeinWrapper>

        <FadeinWrapper>
          <p className="my-8 mx-4 text-4xl font-medium">Education</p>
          <div className="my-8 mr-4 ml-12 grid grid-cols-12 gap-x-3">
            <div className="col-span-9">
              <p className="text-xl font-light">
                <a
                  href="https://www.ntu.edu.tw/"
                  target="_blank"
                  rel="noreferrer"
                  className="underline text-pencil hover:text-ink dark:text-moonlight dark:hover:text-light"
                >
                  National Taiwan University
                </a>
                , Taipei, Mechanical engineering.{" "}
                <span className="text-lg whitespace-nowrap">(2011/09 ~ 2016/06)</span>
              </p>
            </div>
            <div className="col-span-3">
              <div
                className={classNames(
                  "transition-filter",
                  "ease-out",
                  "duration-1000",
                  {
                    "blur-md": !loaded,
                  }
                )}
              >
                <Image src={ntu} alt="ntu" />
              </div>
            </div>
          </div>
        </FadeinWrapper>

        <FadeinWrapper>
          <p className="my-8 mx-4 text-4xl font-medium">Experience</p>
          <div className="my-8 mr-4 ml-12 grid grid-cols-12 gap-x-3">
            <div className="col-span-9">
              <p className="text-2xl font-normal">
                <a
                  href="https://www.chief.com.tw"
                  target="_blank"
                  rel="noreferrer"
                  className="underline text-pencil hover:text-ink dark:text-moonlight dark:hover:text-light"
                >
                  Chief Telecom
                </a>{" "}
                <span className="text-xl whitespace-nowrap">(2017/06 ~ )</span>
              </p>
              <p className="mt-8">
                I work for their cloud service department. I maintain and develop
                products and services about{" "}
                <a
                  href="https://www.chief.com.tw/cloud/"
                  target="_blank"
                  rel="noreferrer"
                  className="underline text-pencil hover:text-ink dark:text-moonlight dark:hover:text-light"
                >
                  Chief Cloud
                </a>
                . Major Achievements:
              </p>
            </div>
            <div className="col-span-3">
              <div
                className={classNames(
                  "transition-filter",
                  "ease-out",
                  "duration-1000",
                  {
                    "blur-md": !loaded,
                  }
                )}
              >
                <Image src={chief} alt="chief" />
              </div>
            </div>
          </div>
        </FadeinWrapper>

        <FadeinWrapper>
          <p className="my-8 mr-4 ml-20 text-lg font-medium">CTDB</p>
          <p className="my-8 mr-4 ml-20">
            CTDB is mainly built with{" "}
            <a
              href="https://www.djangoproject.com/"
              target="_blank"
              rel="noreferrer"
              className="underline text-pencil hover:text-ink dark:text-moonlight dark:hover:text-light"
            >
              Django
            </a>
            ,{" "}
            <a
              href="https://www.django-rest-framework.org/"
              target="_blank"
              rel="noreferrer"
              className="underline text-pencil hover:text-ink dark:text-moonlight dark:hover:text-light"
            >
              Django REST Framework
            </a>
            ,{" "}
            <a
              href="https://vuejs.org/"
              target="_blank"
              rel="noreferrer"
              className="underline text-pencil hover:text-ink dark:text-moonlight dark:hover:text-light"
            >
              Vue.js
            </a>
            , containing several useful applications, such as Diary, Reminder, Telecom,
            News, Archive, etc. It also has its own log system. It is mainly used by
            engineers in the technical department of the company.
          </p>
          <p className="my-8 mr-4 ml-20">
            Features:
            <br />
            i18n / Log system
          </p>
          <p className="my-8 mr-4 ml-20">
            Tech stack:
            <br />
            <a
              href="https://www.djangoproject.com/"
              target="_blank"
              rel="noreferrer"
              className="underline text-pencil hover:text-ink dark:text-moonlight dark:hover:text-light"
            >
              Django
            </a>{" "}
            /{" "}
            <a
              href="https://www.django-rest-framework.org/"
              target="_blank"
              rel="noreferrer"
              className="underline text-pencil hover:text-ink dark:text-moonlight dark:hover:text-light"
            >
              Django REST Framework
            </a>{" "}
            /{" "}
            <a
              href="https://vuejs.org/"
              target="_blank"
              rel="noreferrer"
              className="underline text-pencil hover:text-ink dark:text-moonlight dark:hover:text-light"
            >
              Vue.js
            </a>
          </p>
        </FadeinWrapper>

        <FadeinWrapper>
          <p className="my-8 mr-4 ml-20 text-lg font-normal">FortiAdmin</p>
          <p className="my-8 mr-4 ml-20">
            FortiAdmin is mainly built with{" "}
            <a
              href="https://www.djangoproject.com/"
              target="_blank"
              rel="noreferrer"
              className="underline text-pencil hover:text-ink dark:text-moonlight dark:hover:text-light"
            >
              Django
            </a>
            ,{" "}
            <a
              href="https://docs.python.org/3/library/shlex.html"
              target="_blank"
              rel="noreferrer"
              className="underline text-pencil hover:text-ink dark:text-moonlight dark:hover:text-light"
            >
              shlex
            </a>
            ,{" "}
            <a
              href="https://www.fortinet.com/"
              target="_blank"
              rel="noreferrer"
              className="underline text-pencil hover:text-ink dark:text-moonlight dark:hover:text-light"
            >
              Forti
            </a>{" "}
            REST API which is a multi-tenant portal for Fortigate/Fortios. With{" "}
            FortiAdmin, It is possible to set their own config without interfere with
            each other for different users.
          </p>
          <p className="my-8 mr-4 ml-20">
            Features:
            <br />
            Multi-tenant /{" "}
            <a
              href="https://www.fortinet.com/"
              target="_blank"
              rel="noreferrer"
              className="underline text-pencil hover:text-ink dark:text-moonlight dark:hover:text-light"
            >
              Forti
            </a>{" "}
            REST API{" "}
          </p>
          <p className="my-8 mr-4 ml-20">
            Tech stack:
            <br />
            <a
              href="https://www.djangoproject.com/"
              target="_blank"
              rel="noreferrer"
              className="underline text-pencil hover:text-ink dark:text-moonlight dark:hover:text-light"
            >
              Django
            </a>{" "}
            /{" "}
            <a
              href="https://docs.python.org/3/library/shlex.html"
              target="_blank"
              rel="noreferrer"
              className="underline text-pencil hover:text-ink dark:text-moonlight dark:hover:text-light"
            >
              shlex
            </a>{" "}
            /{" "}
            <a
              href="https://www.fortinet.com/"
              target="_blank"
              rel="noreferrer"
              className="underline text-pencil hover:text-ink dark:text-moonlight dark:hover:text-light"
            >
              Forti
            </a>{" "}
            REST API{" "}
          </p>
        </FadeinWrapper>

        <FadeinWrapper>
          <p className="my-8 mx-4 text-4xl font-medium">Skills</p>
          <p className="my-8 mx-4 text-md">
            Here are my skills and the techniques I use:
          </p>
        </FadeinWrapper>

        <FadeinWrapper>
          <p className="my-8 mr-4 ml-12 text-2xl font-normal">Python</p>
          <p className="my-8 mr-4 ml-12">
            <a
              href="https://www.python.org/"
              target="_blank"
              rel="noreferrer"
              className="underline text-pencil hover:text-ink dark:text-moonlight dark:hover:text-light"
            >
              Python
            </a>{" "}
            is my primary programming language. I am familiar with Python's language
            features and many of its standard libraries such as{" "}
            <a
              href="https://docs.python.org/3/library/unittest.html"
              target="_blank"
              rel="noreferrer"
              className="underline text-pencil hover:text-ink dark:text-moonlight dark:hover:text-light"
            >
              unittest
            </a>
            ,{" "}
            <a
              href="https://docs.python.org/3/library/logging.html"
              target="_blank"
              rel="noreferrer"
              className="underline text-pencil hover:text-ink dark:text-moonlight dark:hover:text-light"
            >
              logging
            </a>
            , and{" "}
            <a
              href="https://docs.python.org/3/library/shlex.html"
              target="_blank"
              rel="noreferrer"
              className="underline text-pencil hover:text-ink dark:text-moonlight dark:hover:text-light"
            >
              shlex
            </a>
            , etc. I care about code quality, following{" "}
            <a
              href="https://www.python.org/dev/peps/pep-0008/"
              target="_blank"
              rel="noreferrer"
              className="underline text-pencil hover:text-ink dark:text-moonlight dark:hover:text-light"
            >
              PEP 8
            </a>{" "}
            and many other code style conventions. I follow the{" "}
            <a
              href="https://en.wikipedia.org/wiki/KISS_principle"
              target="_blank"
              rel="noreferrer"
              className="underline text-pencil hover:text-ink dark:text-moonlight dark:hover:text-light"
            >
              KISS principle
            </a>
            . I keep my code clean, modular and reusable.
          </p>
        </FadeinWrapper>

        <FadeinWrapper>
          <p className="my-8 mr-4 ml-12 text-2xl font-normal">Django</p>
          <p className="my-8 mr-4 ml-12">
            <a
              href="https://www.djangoproject.com/"
              target="_blank"
              rel="noreferrer"
              className="underline text-pencil hover:text-ink dark:text-moonlight dark:hover:text-light"
            >
              Django
            </a>{" "}
            is a Python's web framework I've spent most of my time with. I've been doing
            web development with Django for over 5 years. I can build modern,
            well-tested web application with it.
          </p>
        </FadeinWrapper>

        <FadeinWrapper>
          <p className="my-8 mr-4 ml-12 text-2xl font-normal">Django REST Framwork</p>
          <p className="my-8 mr-4 ml-12">
            Django is pretty good, but when you combine it with{" "}
            <a
              href="https://www.django-rest-framework.org/"
              target="_blank"
              rel="noreferrer"
              className="underline text-pencil hover:text-ink dark:text-moonlight dark:hover:text-light"
            >
              Django REST Framework
            </a>
            , it gets even better. Modern web applications often require REST APIs, and
            this is where the Django REST Framework comes in.
          </p>
        </FadeinWrapper>

        <FadeinWrapper>
          <p className="my-8 mr-4 ml-12 text-2xl font-normal">SQL</p>
          <p className="my-8 mr-4 ml-12">
            Django has a great model/ORM system, which makes it possible to creating a
            web application without writing SQL. But sometimes SQL knowledge is
            important, too. It is true especially when it comes to a extremely
            complicated queriy or some performance issue.
          </p>
        </FadeinWrapper>

        <FadeinWrapper>
          <p className="my-8 mr-4 ml-12 text-2xl font-normal">React.js / Next.js</p>
          <p className="my-8 mr-4 ml-12">
            Now, when it comes to frontend things,{" "}
            <a
              href="https://reactjs.org/"
              target="_blank"
              rel="noreferrer"
              className="underline text-pencil hover:text-ink dark:text-moonlight dark:hover:text-light"
            >
              React.js
            </a>{" "}
            is my favorite. Its philosophy is so graceful, making you enjoy coding and
            building things with it. This website is built with React.js, too.
          </p>
          <p className="my-8 mr-4 ml-12">
            <a
              href="https://nextjs.org/"
              target="_blank"
              rel="noreferrer"
              className="underline text-pencil hover:text-ink dark:text-moonlight dark:hover:text-light"
            >
              Next.js
            </a>{" "}
            gives me a lot of things out of the box. It lets me not worry about the{" "}
            <a
              href="https://nextjs.org/docs/basic-features/data-fetching"
              target="_blank"
              rel="noreferrer"
              className="underline text-pencil hover:text-ink dark:text-moonlight dark:hover:text-light"
            >
              SSG/SSR
            </a>{" "}
            things, which is pretty annoying to implement on our own.
          </p>
        </FadeinWrapper>

        <FadeinWrapper>
          <p className="my-8 mr-4 ml-12 text-2xl font-normal">Vue.js</p>
          <p className="my-8 mr-4 ml-12">
            In addition to React.js, I also use{" "}
            <a
              href="https://vuejs.org"
              target="_blank"
              rel="noreferrer"
              className="underline text-pencil hover:text-ink dark:text-moonlight dark:hover:text-light"
            >
              Vue.js
            </a>
            . I personally like React.js more, but they are both very powerful andd
            reliable frameworks.
          </p>
        </FadeinWrapper>

        <FadeinWrapper>
          <p className="my-8 mr-4 ml-12 text-2xl font-normal">Tailwind CSS</p>
          <p className="my-8 mr-4 ml-12">
            <a
              href="https://tailwindcss.com/"
              target="_blank"
              rel="noreferrer"
              className="underline text-pencil hover:text-ink dark:text-moonlight dark:hover:text-light"
            >
              Tailwind CSS
            </a>{" "}
            is another tool that I love and use a lot. It is similar to{" "}
            <a
              href="https://getbootstrap.com/"
              target="_blank"
              rel="noreferrer"
              className="underline text-pencil hover:text-ink dark:text-moonlight dark:hover:text-light"
            >
              Bootstrap
            </a>
            , but it is much more flexible and easy to customize, which prevents you
            from building a lot of similar web.
          </p>
        </FadeinWrapper>

        <FadeinWrapper>
          <p className="my-8 mr-4 ml-12 text-2xl font-normal">
            HTML / CSS / JavaScript
          </p>
          <p className="my-8 mr-4 ml-12">
            In addition to developing with frontend frameworks, I also know about
            HTML/CSS/JavaScript. I think, after all, frameworks are based on these three
            elements, so it is important to have a solid understanding of them.
          </p>
        </FadeinWrapper>

        <FadeinWrapper>
          <p className="my-8 mr-4 ml-12 text-2xl font-normal">CI / CD</p>
          <p className="my-8 mr-4 ml-12">
            I use{" "}
            <a
              href="https://docs.github.com/en/actions"
              target="_blank"
              rel="noreferrer"
              className="underline text-pencil hover:text-ink dark:text-moonlight dark:hover:text-light"
            >
              Github action
            </a>{" "}
            to handle CI/CD things. I believe that deployment is just as important as
            development. If a feature can't be delivered to the users, the resources
            spent on development will be wasted.
          </p>
        </FadeinWrapper>

        <FadeinWrapper>
          <p className="my-8 mr-4 ml-12 text-2xl font-normal">Docker</p>
          <p className="my-8 mr-4 ml-12">
            I mostly run my services in{" "}
            <a
              href="https://www.docker.com/"
              target="_blank"
              rel="noreferrer"
              className="underline text-pencil hover:text-ink dark:text-moonlight dark:hover:text-light"
            >
              Docker
            </a>
            , which frees me from a lot of environment and compatibility concerns.
            Docker greatly increases the portability and flexibility of the services.
          </p>
        </FadeinWrapper>

        <FadeinWrapper>
          <p className="my-8 mr-4 ml-12 text-2xl font-normal">GCP</p>
          <p className="my-8 mr-4 ml-12">
            <a
              href="https://cloud.google.com/gcp"
              target="_blank"
              rel="noreferrer"
              className="underline text-pencil hover:text-ink dark:text-moonlight dark:hover:text-light"
            >
              GCP
            </a>{" "}
            is where most of my services are hosted. This website is such a example. I
            usually use their compute engines with Docker.
          </p>
        </FadeinWrapper>

        <FadeinWrapper>
          <p className="my-8 mx-4 text-4xl font-medium">Portfolios</p>
        </FadeinWrapper>

        <FadeinWrapper>
          <p className="my-8 mr-4 ml-12 text-2xl font-normal">CTDB</p>
          <div
            className={classNames(
              "mt-8",
              "mb-16",
              "mr-4",
              "ml-12",
              "transition-filter",
              "ease-out",
              "duration-1000",
              "shadow-2xl",
              {
                "blur-md": !loaded,
              }
            )}
          >
            <Image
              src={ctdbI18n}
              alt="ctdbI18n"
              layout="responsive"
              className="rounded-sm"
            />
          </div>
          <div
            className={classNames(
              "mt-8",
              "mb-16",
              "mr-4",
              "ml-12",
              "transition-filter",
              "ease-out",
              "duration-1000",
              "shadow-2xl",
              {
                "blur-md": !loaded,
              }
            )}
          >
            <Image
              src={ctdbLog}
              alt="ctdbLog"
              layout="responsive"
              className="rounded-sm"
            />
          </div>
        </FadeinWrapper>

        <FadeinWrapper>
          <p className="my-8 mr-4 ml-12 text-2xl font-normal">FortiAdmin</p>
          <div
            className={classNames(
              "mt-8",
              "mb-16",
              "mr-4",
              "ml-12",
              "transition-filter",
              "ease-out",
              "duration-1000",
              "shadow-2xl",
              {
                "blur-md": !loaded,
              }
            )}
          >
            <Image
              src={fortiadminLogin}
              alt="fortiadminLogin"
              className="rounded-sm"
              layout="responsive"
            />
          </div>
          <div
            className={classNames(
              "mt-8",
              "mb-16",
              "mr-4",
              "ml-12",
              "transition-filter",
              "ease-out",
              "duration-1000",
              "shadow-2xl",
              {
                "blur-md": !loaded,
              }
            )}
          >
            {/* <img src="/fortiadmin-example-1920x1080.png" alt="fortiadminExample" /> */}
            <Image
              src={fortiadminExample}
              alt="fortiadminExample"
              className="rounded-sm"
              layout="responsive"
            />
          </div>
        </FadeinWrapper>

        <FadeinWrapper>
          <p className="my-8 mx-4 text-4xl font-medium">Thank you</p>
          <p className="my-8 mx-4">
            thank you for giving a chance to introduce myself. I really apprecicate
            that. Feel free to contact me if you want.
          </p>
        </FadeinWrapper>
      </div>
    </main>
  );
};

export default Main;
