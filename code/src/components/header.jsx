import React from "react";

export const Header = (props) => {
  return (
    <header id="header">
      <div className="intro">
        <div className="overlay">
          <div className="container">
            <div className="row">
              <div className="col-md-8 col-md-offset-2 intro-text">
                <div className="divheader">
                  <img
                    src="img/portfolio/logo.webp"
                    className="img-responsive"
                    alt=""
                  />
                  <h1>
                    {props.data ? props.data.title : "Loading"}
                    <span></span>
                  </h1>
                </div>
                <p>{props.data ? props.data.paragraph : "Loading"}</p>
                <p className="p2">
                  {props.data ? props.data.paragraph2 : "Loading"}
                </p>
                <a
                  href="#features"
                  className="btn btn-custom btn-lg page-scroll"
                >
                  saber más
                </a>{" "}
              </div>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};
