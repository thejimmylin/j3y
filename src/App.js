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
      <p className="max-w-screen-sm p-5 mx-auto text-3xl">I am Jimmy Lin.</p>
      <p className="max-w-screen-sm p-5 mx-auto"></p>
      <p className="max-w-screen-sm p-5 mx-auto text-3xl">I like to create amazing things and share them with people.</p>
      <p className="max-w-screen-sm p-5 mx-auto"></p>
      <p className="max-w-screen-sm p-5 mx-auto text-3xl">
        I like Python and Web development. I have 3 year experience of web development of Django.
      </p>
      <p className="max-w-screen-sm p-5 mx-auto"></p>
      <p className="max-w-screen-sm p-5 mx-auto text-2xl text-gray-500">
        <a href="https://github.com/j3ygithub">Github</a>
      </p>
      <p className="max-w-screen-sm p-5 mx-auto text-2xl text-gray-500">
        <a href="https://www.cakeresume.com/b00502013">Cakeresume</a>
      </p>
      <p className="max-w-screen-sm p-5 mx-auto text-2xl text-gray-500">
        <a href="https://www.linkedin.com/in/jimmy-lin-5779a61b5/">LinkedIn</a>
      </p>
      <p className="max-w-screen-sm p-5 mx-auto text-5xl"></p>
    </>
  );
};

export default App;
