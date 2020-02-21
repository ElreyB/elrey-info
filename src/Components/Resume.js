import React from "react";

const Resume = ({ data, ...props }) => {
  let education, work;
  if (data) {
    // var skillmessage = skillmessage;
    const { education: educations, work: works } = data;
    education = educations.map(({ school, degree, graduated, description }) => {
      return (
        <div key={school}>
          <h3>{school}</h3>
          <p className="info">
            {degree} <span>&bull;</span>
            <em className="date">{graduated}</em>
          </p>
          <p>{description}</p>
        </div>
      );
    });
    work = works.map(({ company, years, description, title }) => {
      return (
        <div key={company}>
          <h3>{company}</h3>
          <p className="info">
            {title}
            <span>&bull;</span> <em className="date">{years}</em>
          </p>
          <ul
            id="resume-desciption"
            style={{ listStyle: "square inside none" }}
          >
            {description.map((describe, i) => (
              <li key={i}>{describe}</li>
            ))}
          </ul>
        </div>
      );
    });
    // var skills = skills.map(function(skills){
    //   var className = 'bar-expand '+skills.name.toLowerCase();
    //   return <li key={skills.name}><span style={{width:skills.level}}className={className}></span><em>{skills.name}</em></li>
    // })
  }

  return (
    <section id="resume">
      <div className="row work">
        <div className="three columns header-col">
          <h1>
            <span>Work</span>
          </h1>
        </div>

        <div className="nine columns main-col">{work}</div>
      </div>
      <div className="row education">
        <div className="three columns header-col">
          <h1>
            <span>Education</span>
          </h1>
        </div>

        <div className="nine columns main-col">
          <div className="row item">
            <div className="twelve columns">{education}</div>
          </div>
        </div>
      </div>

      {/* <div className="row skill">
          <div className="three columns header-col">
            <h1>
              <span>Skills</span>
            </h1>
          </div>

          <div className="nine columns main-col">
            <p>{skillmessage}</p>

            <div className="bars">
              <ul className="skills">{skills}</ul>
            </div>
          </div>
        </div> */}
    </section>
  );
};

export default Resume;
