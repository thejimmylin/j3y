import Image from "next/image";

import A from "./A";
import avatar from "../public/avatar-1440x1440.jpg";
import ntu from "../public/ntu-360x360.png";
import chief from "../public/chief-500x300.png";
import ctdbI18n from "../public/ctdb-i18n-1920x1080.png";
import ctdbLog from "../public/ctdb-log-1920x1080.png";
import fortiadminLogin from "../public/fortiadmin-login-1920x1080.png";
import fortiadminExample from "../public/fortiadmin-example-1920x1080.png";

const AboutMe = () => {
  return (
    <>
      <h1>About me</h1>
      <div className="mb-8">
        <Image
          src={avatar}
          alt={avatar}
          className="rounded-lg"
          priority={true}
        />
      </div>
      <h1>Hello world</h1>
      <p>
        I'm Jimmy. I love programming. I like to create things and programming
        gives me the chance to do so.
      </p>
      <p>I have five years of programming experience, mostly in Python.</p>
      <h1>Education</h1>
      <div className="my-5 flex gap-8 justify-between items-center">
        <div>
          <div>
            <A href="https://www.ntu.edu.tw/">NTU</A>, Taipei. Mech Eng.
          </div>
          <div className="text-sm">Sep. 2011 - Jun. 2016</div>
        </div>
        <div className="w-12 h-12 xs:w-24 xs:h-24 relative my-5">
          <Image
            src={ntu}
            alt="ntu"
            layout="fill"
            objectFit="contain"
            priority={true}
          />
        </div>
      </div>
      <div className="my-5 flex gap-8 justify-between items-center">
        <div>
          <div>
            <A href="https://www.chief.com.tw/">Chief Telecom</A>
          </div>
          <div className="text-sm">Jun. 2017 - Jun. 2021</div>
        </div>
        <div className="w-12 h-12 xs:w-24 xs:h-24 relative my-5">
          <Image
            src={chief}
            alt="chief"
            layout="fill"
            objectFit="contain"
            priority={true}
          />
        </div>
      </div>
      <p>
        I work for their cloud service department. I maintain and develop
        products and services about{" "}
        <A href="https://www.chief.com.tw/cloud/">Chief Cloud.</A>
      </p>
      <h1>Skills</h1>
      <p>Here are my skills and the techniques I use:</p>
      <h2>Python</h2>
      <p>
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
      </p>
      <h2>Django</h2>
      <p>
        <A href="https://www.djangoproject.com/">Django</A> is a Python's web
        framework I've spent most of my time with. I've been doing web
        development with Django for over 5 years. I can build modern,
        well-tested web application with it.
      </p>
      <h2>Django REST Framwork</h2>
      <p>
        Django is pretty good, but when you combine it with 
        <A href="https://www.django-rest-framework.org/">
          Django REST Framework
        </A>
        , it gets even better. Modern web applications often require REST APIs,
        and this is where the Django REST Framework comes in.
      </p>
      <h2>SQL</h2>
      <p>
        Django has a great model/ORM system, which makes it possible to creating
        a web application without writing SQL. But sometimes SQL knowledge is
        important, too. It is true especially when it comes to a extremely
        complicated queriy or some performance issue.
      </p>
      <h2>React.js / Next.js</h2>
      <p>
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
      </p>
      <h2>Vue.js</h2>
      <p>
        In addition to React.js, I also use 
        <A href="https://vuejs.org/">Vue.js</A>. I personally like React.js
        more, but they are both very powerful andd reliable frameworks.
      </p>
      <h2>Tailwind CSS</h2>
      <p>
        <A href="https://tailwindcss.com/">Tailwind CSS</A> is another tool that
        I love and use a lot. It is similar to 
        <A href="https://getbootstrap.com/">Bootstrap</A>, but it is much more
        flexible and easy to customize, which prevents you from building a lot
        of similar web.
      </p>
      <h2>HTML / CSS / JavaScript</h2>
      <p>
        In addition to developing with frontend frameworks, I also know about
        HTML/CSS/JavaScript. I think, after all, frameworks are based on these
        three elements, so it is important to have a solid understanding of
        them.
      </p>
      <h2>GitHub Actions</h2>
      <p>
        I use <A href="https://docs.github.com/en/actions">Github actions</A> to
        handle CI/CD things. I believe that deployment is just as important as
        development. If a feature can't be delivered to the users, the resources
        spent on development will be wasted.
      </p>
      <h2>Docker</h2>
      <p>
        I mostly run my services in <A href="https://www.docker.com/">Docker</A>
        , which frees me from a lot of environment and compatibility concerns.
        Docker greatly increases the portability and flexibility of the
        services.
      </p>
      <h2>GCP</h2>
      <p>
        <A href="https://cloud.google.com/gcp">GCP</A> is where most of my
        services are hosted. This website is such a example. I usually use their
        compute engines with Docker.
      </p>
      <h1>Portfolios</h1>
      <p>Here are some screenshots of them:</p>
      <h2>CTDB</h2>
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
      <p>
        CTDB is mainly built with 
        <A href="https://www.djangoproject.com/">Django</A>, 
        <A href="https://www.django-rest-framework.org/">
          Django REST Framework
        </A>
        , <A href="https://vuejs.org/">Vue.js</A>, containing several useful
        applications, such as Diary, Reminder, Telecom, News, Archive, etc. It
        also has its own log system. It is mainly used by engineers in the
        technical department of the company.
      </p>
      <h3>Features:</h3>
      <p>i18n / Log system</p>
      <h3>Tech stack:</h3>
      <p>
        <A href="https://www.djangoproject.com/">Django</A> /{" "}
        <A href="https://www.django-rest-framework.org/">
          Django REST Framework
        </A>{" "}
        / <A href="https://vuejs.org/">Vue.js</A>
      </p>
      <h2>FortiAdmin</h2>
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
      <p>
        FortiAdmin is mainly built with 
        <A href="https://www.djangoproject.com/">Django</A>
        , <A href="https://docs.python.org/3/library/shlex.html">shlex</A>
        , <A href="https://www.fortinet.com/">Forti</A> REST API which is a
        multi-tenant portal for Fortigate/Fortios. With FortiAdmin, It is
        possible to set their own config without interfere with each other for
        different users.
      </p>
      <h3>Features</h3>
      <p>
        Multi-tenant / <A href="https://www.fortinet.com/">Forti</A> REST API
      </p>
      <h3>Tech stack:</h3>
      <p>
        <A href="https://www.djangoproject.com/">Django</A> /{" "}
        <A href="https://docs.python.org/3/library/shlex.html">shlex</A> /{" "}
        <A href="https://www.fortinet.com/">Forti</A>
      </p>
      <h1>Thank you</h1>
      <p>
        thank you for giving a chance to introduce myself. I really appreciate
        that. Feel free to contact me if you want.
      </p>
    </>
  );
};

export default AboutMe;
