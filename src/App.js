import { useState, useEffect } from "react";
import Loader from "./components/Loader";
import Home from "./components/Home";

const App = () => {
  const [isLoading, setIsLoadig] = useState(true);
  useEffect(() => {
    setTimeout(setIsLoadig(false), 8000);
  }, []);
  return <>{isLoading ? <Loader /> : <Home />}</>;
};

export default App;
