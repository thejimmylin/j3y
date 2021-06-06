const App = () => {
  const fullHeightPage = (
    <div className="h-full header">
      <p className="p-5 text-5xl text-white">J3y Info</p>
    </div>
  );
  return (
    <>
      {fullHeightPage}
      <p className="max-w-screen-sm p-5 mx-auto"></p>
      <p className="max-w-screen-sm p-5 mx-auto"></p>
      <p className="max-w-screen-sm p-5 mx-auto text-5xl">I am Jimmy Lin.</p>
      <p className="max-w-screen-sm p-5 mx-auto"></p>
      <p className="max-w-screen-sm p-5 mx-auto text-3xl">I like to create amazing things and share them with people.</p>
      <p className="max-w-screen-sm p-5 mx-auto text-3xl"></p>
      <p className="max-w-screen-sm p-5 mx-auto text-2xl">
        I’m Jimmy Lin, I like Python and Web development. I have 3 year experience of web development of Django. My Skills:
        <ol className="p-5">
          Language
          <li className="p-2">Python</li>
          <li className="p-2">HTML</li>
          <li className="p-2">CSS</li>
          <li className="p-2">Javascript</li>
        </ol>
        <ol className="p-5">
          Framework
          <li className="p-2">Django</li>
          <li className="p-2">django-rest-framework</li>
          <li className="p-2">Vue.js</li>
          <li className="p-2">React.js</li>
          <li className="p-2">Tailwind CSS</li>
        </ol>
      </p>
      <p className="max-w-screen-sm p-5 mx-auto text-5xl"></p>
      <p className="max-w-screen-sm p-5 mx-auto text-3xl text-gray-400">
        <a href="https://github.com/j3ygithub">Github</a>
      </p>
      <p className="max-w-screen-sm p-5 mx-auto text-3xl text-gray-400">
        <a href="https://www.cakeresume.com/b00502013">Cakeresume</a>
      </p>
      <p className="max-w-screen-sm p-5 mx-auto text-3xl text-gray-400">
        <a href="https://www.linkedin.com/in/jimmy-lin-5779a61b5/">LinkedIn</a>
      </p>
      <p className="max-w-screen-sm p-5 mx-auto text-5xl"></p>
    </>
  );
};

export default App;
