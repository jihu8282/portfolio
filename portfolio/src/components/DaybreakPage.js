import Paragraph from "./Paragraph";
import Header3 from "./Header3";
import Header4 from "./Header4";
import ProjectPageTopBlock from "./ProjectPageTopBlock";
import SmallTitle from "./SmallTitle";
import daybreak from "../assets/home/daybreakHome.svg";
import beforeCovid from "../assets/daybreak/beforeCovid.svg";
import afterCovid from "../assets/daybreak/afterCovid.svg";
import ImageBlock from "./ImageBlock";
import insightSyn from "../assets/daybreak/insightSyn.svg";
import crazy8 from "../assets/daybreak/crazy8.svg";
import sln1 from "../assets/daybreak/sln1.svg";
import sln2 from "../assets/daybreak/sln2.svg";
import sln3 from "../assets/daybreak/sln3.svg";
import testing1 from "../assets/daybreak/testing1.svg";
import testing2 from "../assets/daybreak/testing2.svg";
import testing3 from "../assets/daybreak/testing3.svg";
import next from "../assets/nextArrow.svg";
import "./DaybreakPage.css"
import PageNavigator from "./PageNavigator";
export default function DaybreakPage() {
  return (
    <div className="bodyforProject">
      <PageNavigator sectionData={[{ title: "PROBLEM", id: "PROBLEM" }, { title: "RESEARCH", id: "RESEARCH" }, { title: "KEY INSIGHTS", id: "KEY INSIGHTS" },
    { title: "IDEATION", id: "IDEATION" },{ title: "TESTING", id: "TESTING" },{ title: "FEEDBACK", id: "FEEDBACK"},{ title: "PRODUCT HIGHLIGHTS", id: "PRODUCT HIGHLIGHTS" },{ title: "REFLECTION", id: "REFLECTION" }]} />
      <ProjectPageTopBlock
        src={daybreak}
        title="DAYBREAK"
        subtitle="Habit building social app to improve work from home experience in a midst of COVID-19"
        duration="Feb ‘20 - May ‘20"
        tools="Figma, Miro"
        team="Bianca Jimenez, Shivam Dehinwal"
        featured={<a class="daybreakIpd" href="https://ipd.me.upenn.edu/portfolio/relay-roulette-daybreak/" target="_blank" rel="noreferrer">Daybreak</a>}
        myrole="As the lead ux designer of the team, I worked on early stage of the design process including conducting interviews and implementing key insights. I then connected the dots from pain points to actionable needs. Because I fully understood the problem in user’s perspectives, I also was in charge of storytelling of our final presentation."
        roleHexColor="#FF772A"
      />
      <div className="box" id="PROBLEM">
        <SmallTitle className="smallTitle" number="1" title="PROBLEM"></SmallTitle>
        <div className="boxTop">
          <Header3>People are stuck at home during a crisis trying to do work
          </Header3>
          <Paragraph>During the Covid-19 pandemic, working from home is not a typical work from home (WFH) that we are familiar with. As people are limited to stay at home during a crisis trying to do work, our team started to wonder - how has this pandemic influenced their mental state and overall well being? How can we help them to better take care of themselves amidst this crisis? By fully understanding their challenges, our team addressed a real problem through a product that will last past the pandemic. </Paragraph>
        </div>
      </div>


      <div className="box" id="RESEARCH">
        <SmallTitle className="smallTitle" number="2" title="RESEARCH | USER INTERVIEWS"></SmallTitle>

        <div className="researchContext">
          <div className="researchContextLeft">
            <Header3>Understanding what ‘time’ means in this new-normal era</Header3>
            <Paragraph>Because WFH creates a lot more flexibility with time, it makes it difficult to know when to switch off.
              During this pandemic, the individuals don’t have any social cues or physical transitions, while being stuck at home. They struggle with the fluidity of time when doing everything at home. Activities including meetings, cooking, cleaning, eating, socializing, and sleeping all now happen at home.</Paragraph>
          </div>
          <img className="beforeCovid" src={beforeCovid} alt="beforeCovid" />

        </div>

        <img className="afterCovid" src={afterCovid} alt="afterCovid" />

        <div className="hmw">
          “How might we motivate the individuals to mentally and physically transition out of their work day?”
        </div>
      </div>



      <div className="box" id="KEY INSIGHTS">
        <SmallTitle className="smallTitle" number="3" title="KEY INSIGHTS"></SmallTitle>

        <div className="keyInsightsContext">
          <div className="boxTop">
            <Header3>People miss people</Header3>
            <Paragraph>Other than the confusion and stress an individual was facing due to this weird blob of time, we also found other external factors that affected an individual’s mood and motivation while WFH.
              Considering these insights before our ideation prior to our ideation phase helped our team to create more user-centric solution. </Paragraph>
          </div>

          <Header4>KEY INSIGHTS</Header4>
          <Paragraph>
            1. Individuals miss the motivations from group activities - like.. everyone sweating together in crossfit classes, or going to Central Park for morning runs with friends in pre-covid world<br />
            2. Individuals are participating in unique digital social interactions to maintain their relationships - they’ve tried so many things from ‘zoom birthday’ to ‘watch netflix with screen sharing’ <br />
            3. Individuals engage in self-selected wellness activities to reduce stress - recently purchased water coloring kit, or even started practicing piano that was getting dusty for months <br />
          </Paragraph>
        </div>
      </div>


      <div className="box" id="IDEATION">
        <SmallTitle className="smallTitle" number="4" title="IDEATION"></SmallTitle>

        <div className="ideationContext">
          <div className="boxTop">
            <Header3>Creating positive social experiences that users can look forward to</Header3>
            <Paragraph>Based on the research and key insights, we ran some Crazy 8s activities to quickly generate creative ideas. </Paragraph>
          </div>
          <div className="ideationImages">
            <ImageBlock src={insightSyn} text="insights synthesis"></ImageBlock>
            <ImageBlock src={crazy8} text="crazy 8s"></ImageBlock>
          </div>


        </div>

      </div>


      <div className="box" id="TESTING">
        <SmallTitle className="smallTitle" number="5" title="TESTING"></SmallTitle>

        <div className="testingContext">
          <div className="boxTop">
            <Header3>Testing our MVP:
              build your habit with friends!</Header3>
            <Paragraph>Our team utilized the Wizard of Oz testing method to understand how introducing a structured personal routine that is motivated by social engagement would affect their daily life and overall mental health.  </Paragraph>
          </div>
          <div className="ideationImages">
            <ImageBlock className = "testingImg" src={testing1} title="Test 1" text="each friend sets personal goals and completes the task in random order"></ImageBlock>
            <ImageBlock className = "testingImg" src={testing2} title= "Test 2" text="each group sets their running goal by total distance and each friend contributes by running at their own pace "></ImageBlock>
            <ImageBlock className = "testingImg" src={testing3} title= "Test 3" text="each group completes same activity at the same time"></ImageBlock>
          </div>


        </div>

      </div>

      <div className="box" id="FEEDBACK">
        <SmallTitle className="smallTitle" number="6" title="FEEDBACK IMPLEMENTATION"></SmallTitle>

        <div className="feedbackContext">
          <div className="boxTop">
            <Header3>Design choices by implementing most impactful experiences from testing </Header3>
            <Paragraph>1. They preferred to be part of a more supportive than competitive environment<br />
              2. They fulfilled the lack of social interaction through this testing<br />
              3. Our tests worked as an indicator of when to take breaks during their work day<br />
              4. As they complete their goals, they have something they can reflect back on and be proud of themselves
            </Paragraph>
          </div>
        </div>
      </div>


      <div className="box" id="PRODUCT HIGHLIGHTS">
        <SmallTitle className="smallTitle" number="7" title="PRODUCT HIGHLIGHTS"></SmallTitle>

        <div className="productContext">
          <div className="ideationImages">
            <ImageBlock src={sln1} text="Like or comment friends completed activity to share emotional support"></ImageBlock>
            <ImageBlock src={sln2} text="Add a quick photo by pressing the button below after completing the upcoming activity for the day"></ImageBlock>
            <ImageBlock src={sln3} text="Collect teams badges to motivate themselves and maintain positive state of mind"></ImageBlock>
          </div>
          <ImageBlock src={sln3} text="sln3"></ImageBlock>


        </div>

      </div>


      <div className="box" id="REFLECTION">
        <SmallTitle className="smallTitle" number="8" title="REFLECTION "></SmallTitle>

        <div className="reflectionContext">
          <div className="boxTopReflection">
            <Header4>WHAT I LEARNED - </Header4>
            <Paragraph>One of the biggest learnings was the importance of the users’ voice. 
Our project started right when the world was closing down due to pandemic, and our team was trying to solve a real problem that was unpredictable. Thus, I suggested to heavily weigh on the users’ voice, and ensured that our goal should be building a strong rapport in user interviews. This approach allowed me to observe the problem through empathy, and understood the problem as we were all on a same boat. As I felt like I was the advocate for them, I felt more and more responsible on creating a product that could give true impact for our future users.
            </Paragraph>
            <Header4>NEXT STEPS - </Header4>
            <Paragraph>If more time was given for the project, I would like to explore how we could attract the users to start the app and stay longer (e.g reward system). Because ‘Daybreak’ is a social app, where the user can have a full experinece with more than one user, developing a model on how to bring people together and motivate them to use this product is important.
            </Paragraph>
          </div>
        </div>
      </div>

      <a className="nextPage" href="/scrappy">
        <Header3 className="nextProject">NEXT PROJECT: SCRAPPY</Header3>
        <img src={next} alt="next"/>
      </a>


    </div>
  )
}