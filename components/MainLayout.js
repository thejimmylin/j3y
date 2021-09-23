const MainLayout = ({ children }) => {
  return (
    <>
      <main className="font-sans text-ink bg-paper dark:text-light dark:bg-night transition-bg min-h-screen py-20">
        <div className="max-w-screen-lg mx-auto">
          <div className="max-w-screen-md">{children}</div>
          <div></div>
        </div>
      </main>
    </>
  );
};

export default MainLayout;
