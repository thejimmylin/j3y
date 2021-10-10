import Image from "next/image";

import { P, H1, H2, H3, A } from "./markdown-components";
import avatar from "../public/static/avatar-1440x1440.jpg";
import ntu from "../public/static/ntu-360x360.png";
import chief from "../public/static/chief-450x200.png";
import shopee from "../public/static/shopee-360x360.png";
import ctdbI18n from "../public/static/ctdb-i18n-1920x1080.png";
import ctdbLog from "../public/static/ctdb-log-1920x1080.png";
import fortiadminLogin from "../public/static/fortiadmin-login-1920x1080.png";
import fortiadminExample from "../public/static/fortiadmin-example-1920x1080.png";

const AboutMe = () => {
  return (
    <>
      <H1>About me</H1>
      <div className="mb-8">
        <Image
          src={avatar}
          alt={avatar}
          className="rounded-lg"
          priority={true}
        />
      </div>
      <H1>Hello world</H1>
      <P>
        I'm Jimmy. I love programming. I like to create things and programming
        gives me the chance to do so.
      </P>
      <P>
        I have five years of programming experience, mostly in{" "}
        <A href="https://www.python.org/">Python</A> and web development.
      </P>
      <H1>Education</H1>
      <div className="mb-5 flex gap-8 justify-between items-center">
        <div>
          <div>
            <A href="https://www.ntu.edu.tw/">NTU</A>, Taipei. Mech Eng.
          </div>
          <div className="text-sm">Sep. 2011 - Jun. 2016</div>
        </div>
        <div className="w-24 h-24 xs:w-36 xs:h-36 relative mb-5">
          <Image
            src={ntu}
            alt="ntu"
            layout="fill"
            objectFit="contain"
            priority={true}
          />
        </div>
      </div>
      <H1>Experience</H1>
      <div className="mb-5 flex gap-8 justify-between items-center">
        <div>
          <div>
            <A href="https://www.chief.com.tw/">Chief Telecom</A>
          </div>
          <div className="text-sm">Jun. 2017 - Jun. 2021</div>
          <P>Cloud service engineer.</P>
        </div>
        <div className="w-24 h-24 xs:w-36 xs:h-36 relative mb-5">
          <Image
            src={chief}
            alt="chief"
            layout="fill"
            objectFit="contain"
            priority={true}
          />
        </div>
      </div>
      <div className="mb-5 flex gap-8 justify-between items-center">
        <div>
          <div>
            <A href="https://shopee.tw/">Shopee Taiwan</A>
          </div>
          <div className="text-sm">Oct. 2021 -</div>
          <P>Backend engineer.</P>
        </div>
        <div className="w-24 h-24 xs:w-36 xs:h-36 relative mb-5">
          <Image
            src={shopee}
            alt="shopee"
            layout="fill"
            objectFit="contain"
            priority={true}
          />
        </div>
      </div>
      <H1>Skills</H1>
      <P>Here are my skills and the techniques I use:</P>
      <H2>Python</H2>
      <P>
        <A href="https://www.python.org/">Python</A> is my primary programming
        language. I am familiar with Python's language features and many of its
        standard libraries such as{" "}
        <A href="https://docs.python.org/3/library/unittest.html">unittest</A>
        , <A href="https://docs.python.org/3/library/logging.html">
          logging
        </A>{" "}
        and <A href="https://docs.python.org/3/library/shlex.html">shlex</A>,
        etc. I care about code quality, following{" "}
        <A href="https://www.python.org/dev/peps/pep-0008/">PEP8</A>
         and many other code style conventions. I follow the{" "}
        <A href="https://en.wikipedia.org/wiki/KISS_principle">KISS</A>. I keep
        my code clean, modular and reusable.
      </P>
      <H2>Django</H2>
      <P>
        <A href="https://www.djangoproject.com/">Django</A> is a Python's web
        framework I've spent most of my time with. I've been doing web
        development with Django for over 5 years. I can build modern,
        well-tested web application with it.
      </P>
      <H2>Django REST Framwork</H2>
      <P>
        Django is pretty good, but when you combine it with 
        <A href="https://www.django-rest-framework.org/">
          Django REST Framework
        </A>
        , it gets even better. Modern web applications often require REST APIs,
        and this is where the Django REST Framework comes in.
      </P>
      <H2>SQL</H2>
      <P>
        Django has a great model/ORM system, which makes it possible to creating
        a web application without writing SQL. But sometimes SQL knowledge is
        important, too. It is true especially when it comes to a extremely
        complicated queriy or some performance issue.
      </P>
      <H2>React.js / Next.js</H2>
      <P>
        Now, when it comes to frontend things, 
        <A href="https://reactjs.org/">React.js</A> is my favorite. Its
        philosophy is so graceful, making you enjoy coding and building things
        with it. This website is built with React.js, too.{" "}
        <A href="https://nextjs.org/">Next.js</A> gives me a lot of things out
        of the box. It lets me not worry about the 
        <A href="https://nextjs.org/docs/basic-features/data-fetching">
          SSG/SSR
        </A>
         things, which is pretty annoying to implement on our own.
      </P>
      <H2>Vue.js</H2>
      <P>
        In addition to React.js, I also use 
        <A href="https://vuejs.org/">Vue.js</A>. I personally like React.js
        more, but they are both very powerful andd reliable frameworks.
      </P>
      <H2>Tailwind CSS</H2>
      <P>
        <A href="https://tailwindcss.com/">Tailwind CSS</A> is another tool that
        I love and use a lot. It is similar to 
        <A href="https://getbootstrap.com/">Bootstrap</A>, but it is much more
        flexible and easy to customize, which prevents you from building a lot
        of similar web.
      </P>
      <H2>HTML / CSS / JavaScript</H2>
      <P>
        In addition to developing with frontend frameworks, I also know about
        HTML/CSS/JavaScript. I think, after all, frameworks are based on these
        three elements, so it is important to have a solid understanding of
        them.
      </P>
      <H2>GitHub Actions</H2>
      <P>
        I use <A href="https://docs.github.com/en/actions">Github actions</A> to
        handle CI/CD things. I believe that deployment is just as important as
        development. If a feature can't be delivered to the users, the resources
        spent on development will be wasted.
      </P>
      <H2>Docker</H2>
      <P>
        I mostly run my services in <A href="https://www.docker.com/">Docker</A>
        , which frees me from a lot of environment and compatibility concerns.
        Docker greatly increases the portability and flexibility of the
        services.
      </P>
      <H2>GCP</H2>
      <P>
        <A href="https://cloud.google.com/gcp">GCP</A> is where most of my
        services are hosted. This website is such a example. I usually use their
        compute engines with Docker.
      </P>
      <H1>Portfolios</H1>
      <P>Here are some screenshots of them:</P>
      <H2>CTDB</H2>
      <div className="mb-8">
        <Image
          src={ctdbI18n}
          alt={ctdbI18n}
          className="rounded-lg"
          priority={true}
        />
      </div>
      <div className="mb-8">
        <Image
          src={ctdbLog}
          alt={ctdbLog}
          className="rounded-lg"
          priority={true}
        />
      </div>
      <P>
        CTDB is mainly built with 
        <A href="https://www.djangoproject.com/">Django</A>, 
        <A href="https://www.django-rest-framework.org/">
          Django REST Framework
        </A>
        , <A href="https://vuejs.org/">Vue.js</A>, containing several useful
        applications, such as Diary, Reminder, Telecom, News, Archive, etc. It
        also has its own log system. It is mainly used by engineers in the
        technical department of the company.
      </P>
      <H3>Features:</H3>
      <P>i18n / Log system</P>
      <H3>Tech stack:</H3>
      <P>
        <A href="https://www.djangoproject.com/">Django</A> /{" "}
        <A href="https://www.django-rest-framework.org/">
          Django REST Framework
        </A>{" "}
        / <A href="https://vuejs.org/">Vue.js</A>
      </P>
      <H2>FortiAdmin</H2>
      <div className="mb-8">
        <Image
          src={fortiadminExample}
          alt={fortiadminExample}
          className="rounded-lg"
          priority={true}
        />
      </div>
      <div className="mb-8">
        <Image
          src={fortiadminLogin}
          alt={fortiadminLogin}
          className="rounded-lg"
          priority={true}
        />
      </div>
      <P>
        FortiAdmin is mainly built with 
        <A href="https://www.djangoproject.com/">Django</A>
        , <A href="https://docs.python.org/3/library/shlex.html">shlex</A>
        , <A href="https://www.fortinet.com/">Forti</A> REST API which is a
        multi-tenant portal for Fortigate/Fortios. With FortiAdmin, It is
        possible to set their own config without interfere with each other for
        different users.
      </P>
      <H3>Features</H3>
      <P>
        Multi-tenant / <A href="https://www.fortinet.com/">Forti</A> REST API
      </P>
      <H3>Tech stack:</H3>
      <P>
        <A href="https://www.djangoproject.com/">Django</A> /{" "}
        <A href="https://docs.python.org/3/library/shlex.html">shlex</A> /{" "}
        <A href="https://www.fortinet.com/">Forti</A>
      </P>
      <H1>Thank you</H1>
      <P>
        thank you for giving a chance to introduce myself. I really appreciate
        that. Feel free to contact me if you want.
      </P>
    </>
  );
};

export default AboutMe;
