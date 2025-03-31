import React from "react";
import style from "../css/OutCome.module.css";
import { Link } from "react-router-dom";

const Accordion = () => {
  return (
    <div>
      <div className={style.AccordionMain}>
        <h2 className={style.AccordionHead}>WE HAVE ALL THE ANSWERS</h2>
        <div className={style.AccordionData}>
          <div className="collapse collapse-plus  bg-white  border-b-2 ">
            <input type="radio" name="my-accordion-3" defaultChecked />
            <div
              className={`collapse-title text-xl font-medium ${style.AccordionText}`}
            >
              What is The PR TREE?
            </div>
            <div className="collapse-content">
              <p className="font-sans text-xl">
                Savin Communication's technology-driven platform, The PR Tree,
                is created to meet the growing needs of the communication
                industry by evolving the art of storytelling with the shifting
                media landscape. The AI-based platform can deliver 360-degree
                comprehensive branding solutions with just a few clicks. Since
                we at TPT value genuine storytelling, we have storytellers and
                skilled PR advisors on call around the clock.
              </p>
            </div>
          </div>
          <div className="collapse collapse-plus bg-white">
            <input type="radio" name="my-accordion-3" />
            <div
              className={`collapse-title text-xl font-medium ${style.AccordionText}`}
            >
              What is Digital PR?
            </div>
            <div className="collapse-content">
              <p className="font-sans text-xl">
                Digital PR means digitally partnering with brands, corporations,
                global interests, start-ups, unicorn technology companies,
                national organizations, consumer companies, high-profile
                individuals, regional businesses, and others to get the work
                done. We are an advanced company with a creative team of PR
                Professionals powered by technology and an analytical approach.
              </p>
            </div>
          </div>
          <div className="collapse collapse-plus bg-white">
            <input type="radio" name="my-accordion-3" />
            <div
              className={`collapse-title text-xl font-medium ${style.AccordionText}`}
            >
              Why is it important for you?
            </div>
            <div className="collapse-content">
              <p className="font-sans text-xl">
                In a world led by media technocrats, digital presence, and
                virtual engagement, The PR Tree helps in branding & product
                placements, product launches, celebrity and influencer seeding,
                sponsorships at events, and more by providing you with a
                platform that can transform your big announcement into the news.
                With this, we intend to provide powerful tools that speak to the
                consumers directly.
              </p>
            </div>
          </div>
          <div className="collapse collapse-plus bg-white">
            <input type="radio" name="my-accordion-3" />
            <div
              className={`collapse-title text-xl font-medium ${style.AccordionText}`}
            >
              Difference in Advertising and PR?
            </div>
            <div className="collapse-content">
              <p className="font-sans text-xl">
                It goes without saying that advertising is paid media while PR
                is earned media via Press releases and Pitches. Public Relations
                also builds trust, gives third-party validation, uses language
                to express, and is less expensive. It has been an essential part
                of brand image building and credibility for decades
              </p>
            </div>
          </div>
        </div>
      </div>
      <div className={style.helpMain}>
        <div className={style.needHelp}>
          <p>Need Help? Our specialist is one click away</p>
          <Link to={"/auth"} className={style.bookBtn}>
            Book Free Consultation
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Accordion;
