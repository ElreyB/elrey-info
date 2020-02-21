import React from "react";

const Portfolio = ({ data, ...props }) => {
  let projects;
  if (data) {
    const sortProjects = data.projects.sort((a, b) => b.year - a.year);
    projects = sortProjects.map(
      ({ image, title, category, github, url, year }) => {
        const projectImage = "images/portfolio/" + image;
        return (
          <div key={title} className="columns portfolio-item">
            <div className="item-wrap">
              <img alt={title} src={projectImage} />
              <div className="overlay">
                <div className="portfolio-item-meta">
                  <h5>{`${title} - ${year}`}</h5>
                  <p>{category}</p>
                </div>
                {github ? (
                  <div id="linkWrapper">
                    <div className="twoLinks">
                      <a
                        href={url}
                        title={title}
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        <div className="link-icon">
                          <i className="fa fa-link" aria-hidden="true"></i>
                        </div>
                      </a>
                    </div>
                    <div className="twoLinks">
                      <a
                        href={github}
                        title={title}
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        <div className="link-icon">
                          <i className="fa fa-github" aria-hidden="true"></i>
                        </div>
                      </a>
                    </div>
                  </div>
                ) : (
                  <div className="oneLinks">
                    <a
                      href={url}
                      title={title}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <div className="link-icon">
                        <i className="fa fa-link" aria-hidden="true"></i>
                      </div>
                    </a>
                  </div>
                )}
              </div>
            </div>
          </div>
        );
      }
    );
  }

  return (
    <section id="portfolio">
      <div className="row">
        <div className="twelve columns collapsed">
          <h1>Check Out Some of My Works.</h1>

          <div
            id="portfolio-wrapper"
            className="bgrid-quarters s-bgrid-thirds cf"
          >
            {projects}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Portfolio;
