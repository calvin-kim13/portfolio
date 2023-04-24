import { memo, useContext } from "react";
import { Context } from "../context/context";

const ProjectDetails = () => {
  const {
    activeProject,
    showProject,
    showProjectFunction,
    activeProjectFunction,
  } = useContext(Context);

  return (
    <div
      className={`bl-panel-items ${showProject ? "bl-panel-items-show" : ""}`}
      id="bl-panel-work-items"
    >
      {/* Project Starts */}
      <div
        data-panel="panel-1"
        className={activeProject == 1 ? "bl-show-work" : ""}
      >
        <div className="row">
          {/* Project Main Content Starts */}
          <div className="col s12 l6 xl6 section-padding section-padding-right-none">
            <img
              className="responsive-img"
              src="images/projects/messenger.jpg"
              alt="project"
            />
          </div>
          {/* Project Main Content Ends */}
          {/* Project Details Starts */}
          <div className="col s12 l6 xl6 section-padding">
            <h3 className="font-weight-700 uppercase">
              Social Media - Twitter Clone
            </h3>
            <ul className="project-details second-font">
              <li>
                <i className="fa fa-calendar-o" />
                <span className="font-weight-700"> Start Date </span>:{" "}
                <span className="font-weight-400 uppercase">02/2023</span>
              </li>
              <li>
                <i className="fa fa-calendar-check-o" />
                <span className="font-weight-700"> End Date </span>:{" "}
                <span className="font-weight-400 uppercase">03/2023</span>
              </li>
              <li>
                <i className="fa fa-cogs" />{" "}
                <span className="font-weight-700"> Used Technologies</span> :{" "}
                <span className="font-weight-400 uppercase">
                  Next.js, Typescript, Tailwind CSS, Prisma, MongoDB, Git
                </span>
              </li>
            </ul>
            <hr />
            <a
              href="https://social-media-liart.vercel.app/"
              target="_blank"
              rel="noreferrer"
              className="waves-effect waves-light btn font-weight-700"
            >
              Live Site <i className="fa fa-external-link" />
            </a>
          </div>
          {/* Project Details Ends */}
        </div>
      </div>
      {/* Project Ends */}
      {/* Project Starts */}
      <div
        data-panel="panel-2"
        className={activeProject == 2 ? "bl-show-work" : ""}
      >
        <div className="row">
          {/* Project Main Content Starts */}
          <div className="col s12 l6 xl6 section-padding section-padding-right-none">
            <img
              className="responsive-img"
              src="images/projects/messenger.jpg"
              alt="project"
            />
          </div>
          {/* Project Main Content Ends */}
          {/* Project Details Starts */}
          <div className="col s12 l6 xl6 section-padding">
            <h3 className="font-weight-700 uppercase">Messenger</h3>
            <ul className="project-details second-font">
              <li>
                <i className="fa fa-calendar-o" />
                <span className="font-weight-700"> Start Date </span>:{" "}
                <span className="font-weight-400 uppercase">11/2022</span>
              </li>
              <li>
                <i className="fa fa-calendar-check-o" />
                <span className="font-weight-700"> End Date </span>:{" "}
                <span className="font-weight-400 uppercase">01/2023</span>
              </li>
              <li>
                <i className="fa fa-cogs" />{" "}
                <span className="font-weight-700"> Used Technologies</span> :{" "}
                <span className="font-weight-400 uppercase">
                  React, javascript, node, express, mongodb, scss, socket.io
                </span>
              </li>
            </ul>
            <hr />
            <a
              href="https://github.com/calvin-kim13/messenger"
              target="_blank"
              rel="noreferrer"
              className="waves-effect waves-light btn font-weight-700"
            >
              GitHub Repo <i className="fa fa-external-link" />
            </a>
          </div>
          {/* Project Details Ends */}
        </div>
      </div>
      {/* Project Ends */}
      {/* Project Starts */}
      <div
        data-panel="panel-3"
        className={activeProject == 3 ? "bl-show-work" : ""}
      >
        <div className="row">
          {/* Project Main Content Starts */}
          <div className="col s12 l6 xl6 section-padding section-padding-right-none">
            <img
              className="responsive-img"
              src="images/projects/soundify.jpg"
              alt="project"
            />
          </div>
          {/* Project Main Content Ends */}
          {/* Project Details Starts */}
          <div className="col s12 l6 xl6 section-padding">
            <h3 className="font-weight-700 uppercase">Soundify</h3>
            <ul className="project-details second-font">
              <li>
                <i className="fa fa-calendar-o" />
                <span className="font-weight-700"> Start Date </span>:{" "}
                <span className="font-weight-400 uppercase">03/2022</span>
              </li>
              <li>
                <i className="fa fa-calendar-check-o" />
                <span className="font-weight-700"> End Date </span>:{" "}
                <span className="font-weight-400 uppercase">06/2022</span>
              </li>
              <li>
                <i className="fa fa-cogs" />{" "}
                <span className="font-weight-700"> Used Technologies</span> :{" "}
                <span className="font-weight-400 uppercase">
                  react, javascript, node, express, mongodb, AWS S3, styled
                  components
                </span>
              </li>
            </ul>
            <hr />
            <a
              href="https://soundify.live/"
              target="_blank"
              rel="noreferrer"
              className="waves-effect waves-light btn font-weight-700"
            >
              Live Site <i className="fa fa-external-link" />
            </a>
          </div>
          {/* Project Details Ends */}
        </div>
      </div>
      {/* Project Ends */}
      {/* Project Starts */}
      <div
        data-panel="panel-4"
        className={activeProject == 4 ? "bl-show-work" : ""}
      >
        <div className="row">
          {/* Project Main Content Starts */}
          <div className="col s12 l6 xl6 section-padding section-padding-right-none">
            <img
              className="responsive-img"
              src="images/projects/crypto.jpg"
              alt="project"
            />
          </div>
          {/* Project Main Content Ends */}
          {/* Project Details Starts */}
          <div className="col s12 l6 xl6 section-padding">
            <h3 className="font-weight-700 uppercase">Crypto Price Tracker</h3>
            <ul className="project-details second-font">
              <li>
                <i className="fa fa-calendar-o" />
                <span className="font-weight-700"> Start Date </span>:{" "}
                <span className="font-weight-400 uppercase">04/2022</span>
              </li>
              <li>
                <i className="fa fa-calendar-check-o" />
                <span className="font-weight-700"> End Date </span>:{" "}
                <span className="font-weight-400 uppercase">04/2022</span>
              </li>
              <li>
                <i className="fa fa-cogs" />{" "}
                <span className="font-weight-700"> Used Technologies</span> :{" "}
                <span className="font-weight-400 uppercase">
                  react, chart js, material ui
                </span>
              </li>
            </ul>
            <hr />
            <a
              href="https://coinio.netlify.app/"
              target="_blank"
              rel="noreferrer"
              className="waves-effect waves-light btn font-weight-700"
            >
              Live Site <i className="fa fa-external-link" />
            </a>
          </div>
          {/* Project Details Ends */}
        </div>
      </div>
      {/* Project Ends */}
      {/* Project Starts */}
      <div
        data-panel="panel-5"
        className={activeProject == 5 ? "bl-show-work" : ""}
      >
        <div className="row">
          {/* Project Main Content Starts */}
          <div className="col s12 l6 xl6 section-padding section-padding-right-none">
            <img
              className="responsive-img"
              src="images/projects/bug.jpg"
              alt="project"
            />
          </div>
          {/* Project Main Content Ends */}
          {/* Project Details Starts */}
          <div className="col s12 l6 xl6 section-padding">
            <h3 className="font-weight-700 uppercase">Bug Tracker</h3>
            <ul className="project-details second-font">
              <li>
                <i className="fa fa-calendar-o" />
                <span className="font-weight-700"> Start Date </span>:{" "}
                <span className="font-weight-400 uppercase">01/2022</span>
              </li>
              <li>
                <i className="fa fa-calendar-check-o" />
                <span className="font-weight-700"> End Date </span>:{" "}
                <span className="font-weight-400 uppercase">02/2022</span>
              </li>
              <li>
                <i className="fa fa-cogs" />{" "}
                <span className="font-weight-700"> Used Technologies</span> :{" "}
                <span className="font-weight-400 uppercase">
                  Html, css, javascript, jquery, handlebars, node, express,
                  MySQL
                </span>
              </li>
            </ul>
            <hr />
            <a
              href="https://bug-zapper-app.herokuapp.com/"
              target="_blank"
              rel="noreferrer"
              className="waves-effect waves-light btn font-weight-700"
            >
              Live Site <i className="fa fa-external-link" />
            </a>
          </div>
          {/* Project Details Ends */}
        </div>
      </div>
      {/* Project Ends */}
      {/* Project Starts */}
      <div
        data-panel="panel-6"
        className={activeProject == 6 ? "bl-show-work" : ""}
      >
        <div className="row">
          {/* Project Main Content Starts */}
          <div className="col s12 l6 xl6 section-padding section-padding-right-none">
            <img
              className="responsive-img"
              src="images/projects/stock.jpg"
              alt="project"
            />
          </div>
          {/* Project Main Content Ends */}
          {/* Project Details Starts */}
          <div className="col s12 l6 xl6 section-padding">
            <h3 className="font-weight-700 uppercase">Market Talk</h3>
            <ul className="project-details second-font">
              <li>
                <i className="fa fa-calendar-o" />
                <span className="font-weight-700"> Start Date </span>:{" "}
                <span className="font-weight-400 uppercase">12/2021</span>
              </li>
              <li>
                <i className="fa fa-calendar-check-o" />
                <span className="font-weight-700"> End Date </span>:{" "}
                <span className="font-weight-400 uppercase">01/2022</span>
              </li>
              <li>
                <i className="fa fa-cogs" />{" "}
                <span className="font-weight-700"> Used Technologies</span> :{" "}
                <span className="font-weight-400 uppercase">
                  Html, css, javascript, rest api
                </span>
              </li>
            </ul>
            <hr />
            <a
              href="https://calvin-kim13.github.io/marketTalk/"
              target="_blank"
              rel="noreferrer"
              className="waves-effect waves-light btn font-weight-700"
            >
              Live Site <i className="fa fa-external-link" />
            </a>
          </div>
          {/* Project Details Ends */}
        </div>
      </div>
      {/* Project Ends */}

      {/* Portfolio Navigation Starts */}
      <nav>
        {/* Close Work Icon Starts */}
        <img
          alt="close"
          src="images/close-button.png"
          className="control-button bl-icon-close"
          onClick={() => {
            showProjectFunction();
            activeProjectFunction(null);
          }}
        />
        {/* Close Work Icon Ends */}
      </nav>
      {/* Portfolio Navigation Ends */}
    </div>
  );
};
export default memo(ProjectDetails);
