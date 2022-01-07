import Paragraph from "./Paragraph";
import Header3 from "./Header3";
import Header4 from "./Header4";
import ProjectPageTopBlock from "./ProjectPageTopBlock";
import SmallTitle from "./SmallTitle";
import interactive from "../assets/home/intProjHome.svg";
import fanpage from "../assets/interactiveProjects/fanpage.svg";
import personalData from "../assets/interactiveProjects/personalDataa.svg";
import reedit from "../assets/interactiveProjects/reedit.svg";
import next from "../assets/nextArrow.svg";
import ImageBlock from "./ImageBlock";
import "./InteractiveProjectsPage.css"
import PageNavigator from "./PageNavigator";
export default function IntercativeProjectsPage() {
  return (
    <div className="bodyforProject">
      <PageNavigator sectionData={[{ title: "FAN PAGE", id: "FAN PAGE" }, { title: "PERSONAL DATA", id: "PERSONAL DATA" }, { title: "REEDIT", id: "REEDIT" }]} />
      <ProjectPageTopBlock
        src={interactive}
        title="INTERACTIVE PROJECTS"
        subtitle="I also write code :)"
        tools="HTML, CSS, JAVASCRIPT, REACT..."
      />
      <div className="box" id="FAN PAGE">
        <SmallTitle className="smallTitle" number="1" title="FAN PAGE"></SmallTitle>
        <div className="boxTopIntProj">
          <div className="leftBlockIntProj">
            <Header3>Fan Page</Header3>
            <Paragraph>For this project, I designed a fan page for Korean choreographers and linked their dance moves to their fashion styles by creating a lookbook interface. As much as I love dancing, I personally enjoy following choreographers works and styles. As K-pop industry is massively growing in 2021, they not only create iconic moves for k-pop performers but also influence trends.<br />
              <b>DURATION:</b> 2 weeks<br />
              <b>CLASS:</b> DSGN 634 (Art of the Web)</Paragraph>

            <div className="links">
              <a className="live" href="/interactive">
                <Paragraph>live</Paragraph>
              </a>
              <a className="code" href="/interactive">
                <Paragraph>code</Paragraph>
              </a>
            </div>

          </div>

          <div className="problemRightBlock">
            <ImageBlock src={fanpage}></ImageBlock>
          </div>

        </div>
      </div>

      <div className="box" id="PERSONAL DATA">
        <SmallTitle className="smallTitle" number="2" title="PERSONAL DATA"></SmallTitle>
        <div className="boxTopIntProj">
          <div className="leftBlockIntProj">
            <Header3>Personal Data</Header3>
            <Paragraph>Data visualization is an effective tool for storytelling. For this project, I was challenged to develop a web-bsed visualization about myself.
              I collected data by asking friends to share a keyword or a phrase that could describe me, and displayed them by how much I agree, and how close I am with the participant to validate the keyword.<br />
              <b>DURATION:</b> 2 weeks<br />
              <b>CLASS:</b> DSGN 634 (Art of the Web)</Paragraph>

            <div className="links">
              <a className="live" href="/interactive">
                <Paragraph>live</Paragraph>
              </a>
              <a className="code" href="/interactive">
                <Paragraph>code</Paragraph>
              </a>
            </div>

          </div>

          <div className="problemRightBlock">
            <ImageBlock src={personalData}></ImageBlock>
          </div>

        </div>
      </div>



      
      <div className="box" id="REEDIT">
        <SmallTitle className="smallTitle" number="3" title="REEDIT"></SmallTitle>
        <div className="boxTopIntProj">
          <div className="leftBlockIntProj">
            <Header3>Reedit</Header3>
            <Paragraph>Reedit is a group centric social platform where it contains over 30 features such as joining group, posting media, filtering groups by tags, messaging etc. Our team utilized using React, MongoDB, Travis, and Heroku. I was in charge of designing the entire UI and building front-end pages for the website.<br />
              <b>DURATION:</b> 4 weeks<br />
              <b>CLASS:</b> CIS 557 (Programming for Web)</Paragraph>

            <div className="links">
              <a className="live" href="/interactive">
                <Paragraph>live</Paragraph>
              </a>
              <a className="code" href="/interactive">
                <Paragraph>code</Paragraph>
              </a>
            </div>

          </div>

          <div className="problemRightBlock">
            <ImageBlock src={reedit}></ImageBlock>
          </div>

        </div>
      </div>


      


      <div className="arrows">
        <a className="prevPage" href="/scrappy">
          <img className="prev" src={next} alt="next" />
          <Header4 className="prevProject">PREVIOUS: SCRAPPY</Header4>
        </a>

        <a className="nextPage" href="/kakao">
          <Header4 className="nextProject">NEXT: KAKAO</Header4>
          <img src={next} alt="next" />
        </a>


      </div>


    </div>
  )
}