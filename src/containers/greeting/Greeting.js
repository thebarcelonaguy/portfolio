import React from "react";
import "./Greeting.css";
// import SocialMedia from "../../components/socialMedia/SocialMedia";
import Button from "../../components/button/Button";
import { greeting } from "../../portfolio";
import { Fade } from "react-reveal";
import BannerImg from "./BannerImg";
import Typewriter from "typewriter-effect";
import CompetitiveSites from "../../components/competitiveSites/CompetitiveSites";
import { competitiveSites } from "../../portfolio";
export default function Greeting(props) {
  const theme = props.theme;
  return (
    <Fade bottom duration={2000} distance="40px">
      <div className="greet-main" id="greeting">
        <div className="greeting-main">
          <div className="greeting-text-div">
            <div>
              <h1 className="greeting-text" style={{ color: theme.orange }}>
                {greeting.title}
              </h1>
              <h1 className="greeting-sub" style={{ color: theme.grayText }}>
                I'm <span style={{ color: "#86BBD8" }}>Riten Bhagra</span>{" "}
                <mark data-entity="goal">{greeting.sub}</mark>
              </h1>

              <h1 className="greeting-typewriter" style={{ color: theme.blue }}>
                <Typewriter
                  onInit={(typewriter) => {
                    typewriter
                      .typeString("Data Scientist")
                      .pauseFor(200)
                      .deleteAll()
                      .typeString("Full Stack Developer")
                      .pauseFor(200)
                      .deleteAll()
                      // .typeString("UI/UX Designer")
                      // .pauseFor(200)
                      // .deleteAll()
                      .typeString("IT Engineer")
                      .pauseFor(200)
                      .start();
                  }}
                  options={{
                    autoStart: true,
                    loop: true,
                  }}
                />
              </h1>
              <span
                className="greeting-text-span subTitle"
                style={{ color: theme.text }}
              >
                <div className="entities">
                  {/* <p>
                    A{" "}
                    <mark data-entity="noun">
                      Master's graduate in Applied Data Science
                    </mark>{" "}
                    from the{" "}
                    <mark data-entity="institution">
                      University of Southern California
                    </mark>
                    passionate about
                    <mark data-entity="noun">Data Science</mark>
                  </p> */}
                  <p>
                    Boasting skills in
                    <mark data-entity="skill">Machine Learning</mark>
                    <mark data-entity="skill">Data Visualization</mark> and
                    <mark data-entity="skill">Web Development</mark> with an aim
                    to
                    <mark data-entity="verb">enhance</mark>
                    business insights and decision-making capabilities through
                    AI-driven analytics.
                  </p>
                  {/* <p>
                    Dedicated to <mark data-entity="verb">leveraging</mark> a
                    combination of advanced analytics and full-stack development
                    expertise to <mark data-entity="verb">drive</mark>{" "}
                    innovation and tackle complex challenges.
                  </p> */}
                  {/* <p>
                    <mark data-entity="verb">Looking </mark>for summer 2024{" "}
                    <mark data-entity="noun">INTERNSHIP</mark> and{" "}
                    <mark data-entity="noun">FULL TIME</mark> opportunities
                  </p> */}
                </div>
              </span>
              <CompetitiveSites logos={competitiveSites.competitiveSites} />
              <div className="button-greeting-div">
                <Button
                  text="About me"
                  newTab={true}
                  href={greeting.resumeLink}
                />
                <Button text="Contact me" href="/contact" />
                <Button
                  text="See my resume"
                  newTab={true}
                  href={greeting.resumeLink}
                />
              </div>
            </div>
          </div>
          <div className="greeting-image-div">
            <BannerImg />
          </div>
        </div>
      </div>
    </Fade>
  );
}
