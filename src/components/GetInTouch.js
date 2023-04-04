import { memo } from "react";
import SectionContainer from "./SectionContainer";

const GetInTouch = () => {
  return (
    <SectionContainer
      sectionName="Contact"
      title={{ first: "get", last: "in touch" }}
    >
      <div className="bl-content">
        {/* Main Heading Starts */}
        <div className="container page-title center-align">
          <h2 className="center-align">
            <span data-hover="get">get&#160;</span>
            {""}
            <span data-hover="in touch">in touch</span>
          </h2>
        </div>
        {/* Main Heading Ends */}
        <div className="container">
          {/* Divider Starts */}
          <div className="divider center-align">
            <span className="outer-line" />
            <span className="fa fa-envelope-open" aria-hidden="true" />
            <span className="outer-line" />
          </div>
          {/* Divider Ends */}
          <div className="row contact section-padding">
            {/* Contact Infos Starts */}
            <div className="col s12 m5 l5 xl4 leftside">
              {/* Contacts Starts */}
              <h6 className="font-weight-700 uppercase">Phone</h6>
              <span className="font-weight-400 second-font">
                <i className="fa fa-phone" /> (714) 477-3232
              </span>
              <h6 className="font-weight-700 uppercase">Email</h6>
              <span className="font-weight-400 second-font">
                <i className="fa fa-envelope" /> calvinkim1230@gmail.com
              </span>

              <h6 className="font-weight-700 uppercase">Location</h6>
              <span className="font-weight-400 second-font">
                <i className="fa fa-home" /> Seattle, Washington
              </span>
              <br />
              {/* Contacts Ends */}
              {/* Social Media Profiles Starts */}
              <h6 className="font-weight-700 uppercase">Other Links</h6>
              <div className="social">
                <ul className="list-inline social social-intro center-align p-none">
                  <li className="linkedin">
                    <a
                      href="https://www.linkedin.com/in/calvinkimm/"
                      target="_blank"
                      rel="noreferrer"
                    >
                      <i className="fa fa-linkedin" />
                    </a>
                  </li>
                  <li className="github">
                    <a
                      href="https://github.com/calvin-kim13"
                      target="_blank"
                      rel="noreferrer"
                    >
                      <i className="fa fa-github" />
                    </a>
                  </li>
                  <li className="resume">
                    <a
                      href="https://docs.google.com/document/d/1p8DRidh4qIpikrJjJAPMERjFCKRj5fonEWZwZv6g80o/edit?usp=sharing"
                      target="_blank"
                      rel="noreferrer"
                    >
                      <i className="fa fa-file-pdf-o" />
                    </a>
                  </li>
                </ul>
              </div>
              {/* Social Media Profiles Ends */}
            </div>
            {/* Contact Infos Ends */}
            {/* Contact Form Starts */}
            <div className="col s12 m7 l7 xl8 rightside">
              <h6 className="uppercase m-none font-weight-700">
                Feel free to drop me a line
              </h6>
              <div className="row">
                <p className="col s12 m12 l12 xl10 second-font">
                  If you need to reach me, please fill out the form below and I
                  will reply to you shortly.
                </p>
              </div>
              <form
                className="contactform"
                action="mailto:calvinkim1230@gmail.com"
                method="GET"
                encType="text/plain"
              >
                {/* Name Field Starts */}
                <div className="input-field second-font">
                  <i className="fa fa-user prefix" />
                  <input
                    id="name"
                    name="name"
                    type="text"
                    className="validate"
                  />
                  <label className="font-weight-400" htmlFor="name">
                    Your Name
                  </label>
                </div>
                {/* Name Field Ends */}
                {/* Email Field Starts */}
                <div className="input-field second-font">
                  <i className="fa fa-envelope prefix" />
                  <input
                    id="email"
                    type="email"
                    name="subject"
                    className="validate"
                    required=""
                  />
                  <label htmlFor="email">Your Email</label>
                </div>
                {/* Email Field Ends */}
                {/* Comment Textarea Starts */}
                <div className="input-field second-font">
                  <i className="fa fa-comments prefix" />
                  <textarea
                    id="comment"
                    name="body"
                    className="materialize-textarea"
                    required=""
                    defaultValue={""}
                  />
                  <label htmlFor="comment">Your Comment</label>
                </div>
                {/* Comment Textarea Ends */}
                {/* Submit Form Button Starts */}
                <div className="col s12 m12 l9 xl8 submit-form">
                  <button
                    className="btn font-weight-700"
                    type="submit"
                    name="send"
                  >
                    Send Message <i className="fa fa-send" />
                  </button>
                </div>
                {/* Submit Form Button Ends */}
              </form>
            </div>
            {/* Contact Form Ends */}
          </div>
        </div>
      </div>
    </SectionContainer>
  );
};
export default memo(GetInTouch);
