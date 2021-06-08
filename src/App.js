const App = () => {
  return (
    <>
      <div className="h-full header">
        <p className="px-8 pt-8 text-4xl text-white bodoni-moda">Jimmy Lin</p>
        <p className="px-8 pt-2 text-xs text-white">– PERSONAL INFO</p>
      </div>
      <p className="max-w-screen-sm p-10 mx-auto"></p>
      <p className="max-w-screen-sm p-5 mx-auto text-4xl text-gray-800 bodoni-moda">Hello, I'm Jimmy Lin.</p>
      <p className="max-w-screen-sm p-5 mx-auto text-sm">
        I have worked in{" "}
        <a href="https://www.chief.com.tw" target="_blank" rel="noreferrer" className="text-gray-500 underline hover:text-gray-600">
          Chief Telecom
        </a>{" "}
        for 4 years. I like web development very well. I especially like to build a website with Django and react.
      </p>
      <p className="max-w-screen-sm p-5 mx-auto text-4xl text-gray-800 bodoni-moda">I like to create things that amazes people.</p>
      <p className="max-w-screen-sm p-5 mx-auto text-sm">
        I like to amaze people with what I've done. Creating things are incredible, and programming gives us the power to create. That is why I love programming
        so well.
      </p>
      <p className="max-w-screen-sm p-5 mx-auto text-4xl text-gray-800 bodoni-moda">Thank you for watching.</p>
      <p className="max-w-screen-sm p-5 mx-auto text-sm">
        I really appreciate that you've given me sometimes to introduce myself. For now, if you are interested with me, maybe you would like to know more about
        me with:
      </p>
      <p className="max-w-screen-sm p-5 mx-auto text-gray-500 text-1xl">
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
      <p className="max-w-screen-sm p-10 mx-auto"></p>
    </>
  );
};

export default App;
