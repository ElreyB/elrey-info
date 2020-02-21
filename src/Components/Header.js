import React from "react";

const Header = ({ data, ...props }) => {
  let name, occupation, description, networks;
  if (data) {
    name = data.name;
    occupation = data.occupation;
    description = data.description;
    networks = data.social.map(network => {
      return (
        <li key={network.name}>
          <a href={network.url}>
            <i className={network.className}></i>
          </a>
        </li>
      );
    });
  }

  return (
    <header id="home">
      <nav id="nav-wrap">
        <a className="mobile-btn" href="#nav-wrap" title="Show navigation">
          Show navigation
        </a>
        <a className="mobile-btn" href="#home" title="Hide navigation">
          Hide navigation
        </a>

        <ul id="nav" className="nav">
          <li className="current">
            <a className="smoothscroll" href="#home">
              Home
            </a>
          </li>
          <li>
            <a className="smoothscroll" href="#about">
              About
            </a>
          </li>
          <li>
            <a className="smoothscroll" href="#portfolio">
              Works
            </a>
          </li>
          <li>
            <a className="smoothscroll" href="#resume">
              Resume
            </a>
          </li>
        </ul>
      </nav>

      <div className="row banner ">
        <div className="banner-text">
          <div id="headline-wrapper ">
            <h1 className="responsive-headline fadeIn-fast">{name}</h1>
            <span id="occupation" className="fadeIn-med">
              {occupation}
            </span>
          </div>
          <h3 className="fadeIn-slow" id="about-h3">
            {description}
          </h3>
          <hr />
          <ul className="social">{networks}</ul>
        </div>
      </div>

      <p className="scrolldown">
        <a className="smoothscroll" href="#about">
          <i className="icon-down-circle"></i>
        </a>
      </p>
    </header>
  );
};

export default Header;
