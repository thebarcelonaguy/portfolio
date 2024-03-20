import React, { Component } from "react";
import Header from "../../components/header/Header";
import Footer from "../../components/footer/Footer";
// import Button from "../../components/button/Button";
// import Badge from "react-bootstrap/Badge";
// import TopButton from "../../components/topButton/TopButton";
import { Fade } from "react-reveal";
import { projectsHeader } from "../../portfolio.js";
// import { projectcards } from "../../portfolio";
// import { CardColumns, Card } from "react-bootstrap";
// import ProjectsImg from "../projects/ProjectsImg";
import "../projects/Projects.css";

export default class About extends Component {
  render() {
    const theme = this.props.theme;
    return (
      <div className="aboutme-main">
        <Header theme={theme} />
        <div className="basic-projects">
          <Fade bottom duration={2000} distance="40px">
            <div className="projects-heading-div">
              <div className="projects-heading-text-div">
                <h1
                  className="projects-heading-text"
                  style={{ color: theme.orange }}
                >
                  {projectsHeader.title}
                </h1>
                <p
                  className="projects-header-detail-text subTitle"
                  style={{ color: theme.text }}
                >
                  {projectsHeader["description"]}
                </p>
              </div>
            </div>
          </Fade>
        </div>
        <Footer theme={this.props.theme} onToggle={this.props.onToggle} />
      </div>
    );
  }
}
