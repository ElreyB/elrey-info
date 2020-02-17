import React, { Component } from "react";

class Portfolio extends Component {
  render() {
    if (this.props.data) {
      const sortProjects = this.props.data.projects.sort(
        (a, b) => b.year - a.year
      );
      var projects = sortProjects.map(function(projects) {
        var projectImage = "images/portfolio/" + projects.image;
        return (
          <div key={projects.title} className="columns portfolio-item">
            <div className="item-wrap">
              <img alt={projects.title} src={projectImage} />
              <div className="overlay">
                <div className="portfolio-item-meta">
                  <h5>{`${projects.title} - ${projects.year}`}</h5>
                  <p>{projects.category}</p>
                </div>
                {projects.github ? (
                  <div
                    style={{ display: "flex", justifyContent: "space-around" }}
                  >
                    <div
                      style={{
                        flexBasis: "50%",
                        textAlign: "center",
                        height: "84px"
                      }}
                    >
                      <a
                        href={projects.url}
                        title={projects.title}
                        target="_blank"
                        rel="noopener"
                      >
                        <div
                          className="link-icon"
                          style={{ display: "contents" }}
                        >
                          <i className="fa fa-link" aria-hidden="true"></i>
                        </div>
                      </a>
                    </div>
                    <div
                      style={{
                        flexBasis: "50%",
                        textAlign: "center",
                        height: "84px"
                      }}
                    >
                      <a
                        href={projects.github}
                        title={projects.title}
                        target="_blank"
                        rel="noopener"
                      >
                        <div
                          className="link-icon"
                          style={{ display: "contents" }}
                        >
                          <i className="fa fa-github" aria-hidden="true"></i>
                        </div>
                      </a>
                    </div>
                  </div>
                ) : (
                  <div
                    style={{
                      flexBasis: "100%",
                      textAlign: "center",
                      height: "84px"
                    }}
                  >
                    <a
                      href={projects.url}
                      title={projects.title}
                      target="_blank"
                      rel="noopener"
                    >
                      <div
                        className="link-icon"
                        style={{ display: "contents" }}
                      >
                        <i className="fa fa-link" aria-hidden="true"></i>
                      </div>
                    </a>
                  </div>
                )}
              </div>
            </div>
          </div>
        );
      });
    }

    return (
      <section id="portfolio">
        <div className="row">
          <div className="twelve columns collapsed">
            <h1>Check Out Some of My Works.</h1>

            <div
              id="portfolio-wrapper"
              className="bgrid-quarters s-bgrid-thirds cf"
              style={{ display: "flex", flexWrap: "wrap" }}
            >
              {projects}
            </div>
          </div>
        </div>
      </section>
    );
  }
}

export default Portfolio;
