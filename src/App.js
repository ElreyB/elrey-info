import React, { useState, useEffect } from "react";
// import ReactGA from "react-ga";
import $ from "jquery";
import "./App.css";
import Header from "./Components/Header";
import Footer from "./Components/Footer";
import About from "./Components/About";
import Resume from "./Components/Resume";
import Portfolio from "./Components/Portfolio";

const App = () => {
  const [resumeData, setResumeData] = useState({});

  // ReactGA.initialize("UA-110570651-1");
  // ReactGA.pageview(window.location.pathname);

  const getResumeData = () => {
    $.ajax({
      url: "/resumeData.json",
      dataType: "json",
      cache: false,
      success: function(data) {
        const { main, portfolio, resume } = data;
        setResumeData({ main, portfolio, resume });
      },
      error: function(xhr, status, err) {
        console.log(err);
        alert(err);
      }
    });
  };

  useEffect(() => getResumeData(), []);

  const { main, portfolio, resume } = resumeData;

  return (
    <main className="App">
      <Header data={main} />
      <About data={main} />
      <Portfolio data={portfolio} />
      <Resume data={resume} />
      <Footer data={main} />
    </main>
  );
};

export default App;
