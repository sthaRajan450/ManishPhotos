import React from "react";
import ReactFullpage from "@fullpage/react-fullpage";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Home from "./pages/Home";
import Works from "./pages/Works";
import About from "./components/About";
import Featured from "./pages/Featured";

const App = () => {
  return (
    <div className="flex flex-col min-h-screen">
      <Navbar />
      <main className="flex-grow">
        <ReactFullpage
          licenseKey={"gplv3-license"}
          scrollingSpeed={700}
          navigation
          anchors={["home", "about", "works", "featured", "contact", "footer"]}
          render={() => (
            <ReactFullpage.Wrapper>
              <div className="section">
                <Home />
              </div>
              <div className="section">
                <About />
              </div>
              <div className="section">
                <Works />
              </div>
              <div className="section">
                <Featured />
              </div>
             
              <div className="section">
                <Footer />
              </div>
            </ReactFullpage.Wrapper>
          )}
        />
      </main>
    </div>
  );
};

export default App;
