const App = () => {
  return (
    <>
      {/* header */}
      <div className="h-full header">
        <div className="animate-pulse">
          <p className="px-8 pt-8 text-4xl text-white bodoni-moda">
            <a href="/">Jimmy Lin</a>
          </p>
          <p className="px-8 pt-2 text-xs text-white">
            <a href="/">– PERSONAL INFO</a>
          </p>
        </div>
      </div>
      {/* content */}
      <section className="py-12 bg-gray-100 content">
        <div className="max-w-screen-sm mx-auto bg-gray-50">
          <p className="p-5"></p>

          <p className="p-5 text-4xl bodoni-moda">Hello, I'm Jimmy Lin.</p>
          <p className="p-5 text-sm">
            I have worked in{" "}
            <a href="https://www.chief.com.tw" target="_blank" rel="noreferrer" className="text-gray-500 underline hover:text-gray-600">
              Chief Telecom
            </a>{" "}
            for 4 years. I like web development very well. I especially like to build a website with Django and react.
          </p>

          <p className="p-5 text-4xl bodoni-moda">I like to create things that amazes people.</p>
          <p className="p-5 text-sm">
            I like to amaze people with what I've done. Creating things are incredible, and programming gives us the power to create. That is why I love
            programming so well.
          </p>

          <p className="p-5 text-4xl bodoni-moda">Lorem ipsum</p>
          <p className="p-5 text-sm">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Orci a scelerisque purus
            semper eget duis at tellus. Eleifend quam adipiscing vitae proin sagittis. Auctor elit sed vulputate mi sit amet mauris commodo. Nunc vel risus
            commodo viverra maecenas. Enim blandit volutpat maecenas volutpat.
          </p>

          <p className="p-5 text-4xl bodoni-moda">More Lorem ipsum</p>
          <p className="p-5 text-sm">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Porttitor massa id neque
            aliquam. Dolor sit amet consectetur adipiscing elit duis tristique. Viverra vitae congue eu consequat ac. Nisl condimentum id venenatis a
            condimentum vitae. Cras semper auctor neque vitae tempus. Neque sodales ut etiam sit amet nisl.
          </p>

          <p className="max-w-screen-sm p-5 mx-auto text-4xl bodoni-moda">Thank you for watching.</p>
          <p className="max-w-screen-sm p-5 mx-auto text-sm">
            I really appreciate that you've given me sometimes to introduce myself. For now, if you are interested with me, maybe you would like to know more
            about me with:
          </p>

          <p className="max-w-screen-sm p-5 mx-auto text-1xl">
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
      </section>
    </>
  );
};

export default App;
