import React from "react";
import ReactFullpage from "@fullpage/react-fullpage";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Home from "./pages/Home";
import Works from "./pages/Works";
import Services from "./pages/Services";
import Contact from "./pages/Contact";
import About from "./components/About";

const App = () => {
  return (
    <div className="flex flex-col min-h-screen">
      <Navbar />
      <main className="flex-grow">
        <ReactFullpage
        licenseKey={'gplv3-license'}
          scrollingSpeed={700}
          navigation
          anchors={["home", "about", "works", "services", "contact"]} // URL anchors
          onLeave={(origin, destination, direction) => {
            // Optional: do something when leaving a section
            console.log(
              "Leaving section",
              origin.index,
              "to",
              destination.index
            );
          }}
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
                <Services />
              </div>
              <div className="section">
                <Contact />
              </div>
            </ReactFullpage.Wrapper>
          )}
        />
      </main>
      <Footer />
    </div>
  );
};

export default App;
