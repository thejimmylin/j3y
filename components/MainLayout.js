const MainLayout = ({ children }) => {
  return (
    <>
      <main className="font-pretty text-ink bg-paper dark:text-light dark:bg-night transition-bg min-h-screen py-20">
        <div className="max-w-screen-md mx-auto">{children}</div>
      </main>
    </>
  );
};

export default MainLayout;
