import React from "react";

const About = ({ data, ...props }) => {
  let profilepic, bio, resumeDownload;
  if (data) {
    profilepic = "images/" + data.image;
    bio = data.bio;
    resumeDownload = data.resumedownload;
  }

  const bioHtml = bio => bio && bio.map((info, i) => <p key={i}>{info}</p>);

  return (
    <section id="about">
      <div className="row">
        <div className="three columns">
          <img
            className="profile-pic"
            src={profilepic}
            alt="Elrey Belmonti Profile Pic"
          />
        </div>
        <div className="nine columns main-col">
          <h2>About Me</h2>
          {bioHtml(bio)}
          <div className="row">
            <div className="columns download">
              <p>
                <a
                  href={resumeDownload}
                  className="button"
                  rel="noopener noreferrer"
                  target="_blank"
                >
                  <i className="fa fa-download"></i>Download Resume
                </a>
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
