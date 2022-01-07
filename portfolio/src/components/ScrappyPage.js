import Paragraph from "./Paragraph";
import Header3 from "./Header3";
import Header4 from "./Header4";
import ProjectPageTopBlock from "./ProjectPageTopBlock";
import SmallTitle from "./SmallTitle";
import scrappy from "../assets/home/scrappyHome.svg";
import messyHallway from "../assets/scrappy/messyHallway.svg";
import minimalist from "../assets/scrappy/minimalist.svg";
import practicalist from "../assets/scrappy/practicalist.svg";
import collector from "../assets/scrappy/collectors.svg";
import ImageBlock from "./ImageBlock";
import journeyMap from "../assets/scrappy/journeyMap.svg";
import postit from "../assets/scrappy/postits.svg";
import insightSynthesis from "../assets/scrappy/insightSynthesis.svg";
import impactVsEffort from "../assets/scrappy/impactVsEffort.svg";
import productHighlights from "../assets/scrappy/productHighlights.svg";
import next from "../assets/nextArrow.svg";
import "./ScrappyPage.css"
import PageNavigator from "./PageNavigator";
export default function ScrappyPage() {
  return (
    <div className="bodyforProject">
      <PageNavigator sectionData={[{ title: "PROBLEM", id: "PROBLEM" }, { title: "RESEARCH", id: "RESEARCH" }, { title: "ANALYSIS", id: "ANALYSIS" },
      { title: "IDEATION", id: "IDEATION" }, { title: "FEEDBACK", id: "FEEDBACK" }, { title: "PRODUCT HIGHLIGHTS", id: "PRODUCT HIGHLIGHTS" }, { title: "REFLECTION", id: "REFLECTION" }]} />
      <ProjectPageTopBlock
        src={scrappy}
        title="SCRAPPY"
        subtitle="Community oriented marketplace for art + design students"
        duration="Jan ‘20 - Feb ‘20"
        tools="Figma, Photoshop"
        team="Yve Tang"
        myrole="As the lead ux designer of the team, I worked on early stage of the design process including conducting interviews and implementing key insights. I then connected the dots from pain points to actionable needs. Because I fully understood the problem in user’s perspectives, I also was in charge of storytelling of our final presentation."
        roleHexColor="#53B894"
      />
      <div className="box" id="PROBLEM">
        <SmallTitle className="smallTitle" number="1" title="PROBLEM"></SmallTitle>
        <div className="boxTop">
          <Header3>How might we help design  students manage their art supplies?</Header3>
          <div className="problemRightBlock">
            <Paragraph>College students who study art and design spend the majority of their time in class projects. They struggle to store their physical artwork and leftover materials.
            </Paragraph>
            <ImageBlock src={messyHallway} text="hallway in front of our studio"></ImageBlock>

          </div>

        </div>
      </div>


      <div className="box" id="RESEARCH">
        <SmallTitle className="smallTitle" number="2" title="RESEARCH | USER INTERVIEWS"></SmallTitle>

        <div className="boxTop">
          <Header3>Understanding how students treat their work and supplies</Header3>
          <Paragraph>We conducted 6 initial interviews to identify pain points with individuals who have design backgrounds and researched their experience taking care of artworks and materials. We also observed each interviewees’ work spaces to better understand how they take care of their artworks and materials.
            Interviewees were categorized by three different modalities based on how they manage their artworks and materials. This synthesis led us to define our key user to be the ‘Practicalists’, who are the general population in between the two extremes.</Paragraph>
        </div>

        <div className="modalities">
          <ImageBlock src={minimalist} title="Minimalists" text="Cleans out as often as possible
Digital models >>> physical models
Low attachment to their works"/>
          <ImageBlock src={practicalist} title="Practicalists" text="Gets rid of unattempted materials
Only keeps selected favorite works"/>
          <ImageBlock src={collector} title="Collectors" text="Keeps all materials, and projects due to various reasons e.g. hard to find again, can’t find anyone who wants it instead, doesn’t know how to throw away
Worries it might be needed in the future"/>

        </div>

      </div>




      <div className="box" id="ANALYSIS">
        <SmallTitle className="smallTitle" number="3" title="ANALYSIS"></SmallTitle>

        <div className="ideationContext">
          <div className="boxTop">
            <Header3>Creating a journey map of the target user</Header3>
            <Paragraph>We created a journey map that divides the overall project experience of an individual into three phases. From our research, we found that individuals struggle with the leftover materials because it is impossible to perfectly anticipate the amount of material before the project starts, and it is often inevitable to purchase tools and materials at the last minute. As a result, individuals always end up having leftover materials.
              One of the key takeaways is that the process happens in a repeated cycle; therefore, we would need to design a sustainable cycle of reduce, reclaim, and recycle to resolve the problem. </Paragraph>
          </div>
          <div className="ideationImages">
            <ImageBlock src={journeyMap}></ImageBlock>

          </div>

        </div>

      </div>



      <div className="box" id="IDEATION">
        <SmallTitle className="smallTitle" number="4" title="IDEATION"></SmallTitle>

        <div className="ideationContext">
          <div className="boxTop">
            <Header3>Designing a sustainable cycle of reduce, reclaim, and recycle</Header3>
            <Paragraph>At this stage, we generated some ideas while keeping our key insights and design criteria in mind. This involved whiteboarding overarching ideas of concepts and Crazy 8s.
              To help the individuals better manage their artwork and materials, our team built a criteria based on key insights, pain points, and needs.<br />
              1\ Reduce waste and cost per projects <br />
              2\ Reduce stress that happens in last minute emergencies<br />
              3\ Make my work more meaningful - more than just getting graded by professors</Paragraph>
          </div>
          <div className="ideationImagesScrappy">
            <ImageBlock src={postit} text="post-its"></ImageBlock>
            <div className="ideationImagesRightBlock">
              <ImageBlock className="insight" src={insightSynthesis} text="insights synthesis"></ImageBlock>
              <ImageBlock src={impactVsEffort} text="placing ideas under impact vs effort graph"></ImageBlock>
            </div>
          </div>


        </div>

      </div>


      <div className="box" id="FEEDBACK">
        <SmallTitle className="smallTitle" number="5" title="FEEDBACK"></SmallTitle>

        <div className="feedbackContext">
          <div className="boxTop">
            <Header3>Implementing users’ feedback through testing</Header3>
            <Paragraph>Our team conducted tests utilizing the ‘Pop App’, which simulates our hand-sketched prototypes. Based on the feedback, we refined the flow and also de-cluttered each wireframe. This feedback implementation process allowed our solution to have more clear and simple design flow focusing on the main features.</Paragraph>
          </div>
        </div>

      </div>

      <div className="box" id="PRODUCT HIGHLIGHTS">
        <SmallTitle className="smallTitle" number="6" title="PRODUCT HIGHLIGHTS"></SmallTitle>

        <div className="productContextScrappy">
          <img src={productHighlights} alt="productHighlights" />
        </div>

      </div>


      <div className="box" id="REFLECTION">
        <SmallTitle className="smallTitle" number="8" title="REFLECTION "></SmallTitle>

        <div className="reflectionContext">
          <div className="boxTopReflection">
            <Header4>WHAT I LEARNED - </Header4>
            <Paragraph>From this project, I learned how pursuasive storytelling is as important as our project process. There was no doubt our team worked really hard for the project but we wanted to make sure we effectively delivered our work and effort to the audience. I constantly questioned what parts should we add? what findings should we emphasize? After creating various drafts for our presentation, I came up with a way to start with a persona, and gave a story that people can easily understand with empathy of the character. I was able to receive a final feedback on how we were able to deliver a story even for the people who never had such experience with art supplies.
            </Paragraph>
            <Header4>NEXT STEPS - </Header4>
            <Paragraph>If given more time to work on this project, I would conduct more usability testing to improve the interface of our prototype. By asking how the full experience was like, what functionailities can be cut out or be added, I would be able to build more user-friendly product.
            </Paragraph>
          </div>
        </div>
      </div>
      <div className="arrows">
        <a className="prevPage" href="/daybreak">
          <img className="prev" src={next} alt="next" />
          <Header4 className="prevProject">PREVIOUS: DAYBREAK</Header4>
        </a>

        <a className="nextPage" href="/interactive">
          <Header4 className="nextProject">NEXT: INTERACTIVE PROJECT</Header4>
          <img src={next} alt="next" />
        </a>


      </div>


    </div>
  )
}