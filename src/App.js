import React, { useEffect } from "react";
import Routes from "./router/Routes";
import ScrollToTop from "./components/ScrollToTop";
import AnimatedCursor from "react-animated-cursor";
import AOS from "aos";
import "aos/dist/aos.css";

const App = () => {
  useEffect(() => {
    AOS.init();
  }, []);
  return (
    <>
      <AnimatedCursor
        innerSize={8}
        outerSize={44}
        color="66, 103, 178"
        outerAlpha={0.3}
        innerScale={0.7}
        outerScale={1.4}
      />
      <ScrollToTop />
      <Routes />
    </>
  );
};

export default App;
