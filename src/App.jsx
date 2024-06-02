import { useState, useRef, useEffect } from "react";
import "./App.scss";
import Header from "./Components/Header/Header";
import MainScreen from "./Components/MainScreen/MainScreen";
import Services from "./Components/Services/Services";

const App = () => {
  const mainRef = useRef(null);
  const [isMainVisible, setIsMainVisible] = useState(true);

  useEffect(() => {
    const handleScroll = () => {
      if (mainRef.current) {
        const { bottom } = mainRef.current.getBoundingClientRect();
        setIsMainVisible(bottom > 0);
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <>
      <div className="main_bckgr">
        <Header isScrolled={!isMainVisible} />
        <MainScreen ref={mainRef} />
      </div>
      <Services />
    </>
  );
};

export default App;
