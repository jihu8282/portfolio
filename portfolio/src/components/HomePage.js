
import "./HomePage.css";
import profpic from "../assets/home/profpic.svg";
import ProjectBlock from "./ProjectBlock";
import daybreak from "../assets/home/daybreakHome.svg";
import scrappy from "../assets/home/scrappyHome.svg";
import kakao from "../assets/home/kakaoHome.svg";
export default function HomePage() {
  return (
    <div className="body">
      <div className="topHome">
        <div className="textWrapper">
          <div className="bigTitle">
            <div className="big1">
              HI THERE,
            </div>
            <div className="big2">
              <div className="big3">
                I'm
              </div>
              <div className="big4">
                JIHU!
              </div>
            </div>
          </div>
          <div className="homePageText">
            I enjoy seeing the world through people’s eyes and build empathy to <br />
            solve complex problems that can be impacted by user-centered design.<br />
            <br />
            Currently, I am pursuing dual Master’s degree in Integrated Product <br />
            Design and Computer Science at UPenn.
          </div>
        </div>

        <div className="profPic">
          <img src={profpic} alt="profPic" />
        </div>
      </div>

      <div className="projectBlocks">
          <ProjectBlock src= {daybreak} title="DAYBREAK" subtitle="UI UX DESIGN" href= "/daybreak"></ProjectBlock>
          <ProjectBlock src= {scrappy} title="SCRAPPY" subtitle="UI UX DESIGN" href= "/scrappy"></ProjectBlock>
          <ProjectBlock src= {kakao} title="KAKAO" subtitle="UX DESIGN INTERNSHIP" href= "/kakao"></ProjectBlock>
      
      </div>

      

    </div>
  )
}