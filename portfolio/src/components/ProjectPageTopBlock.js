import Header2 from "./Header2";
import Header4 from "./Header4";
import Paragraph from "./Paragraph";
import "./ProjectPageTopBlock.css";
export default function ProjectPageTopBlock({ src, title, subtitle, duration, team, tools, featured, myrole, roleHexColor}) {
  return (
    <div className="topBlock">
      <img classname ="projectPageProject" src={src} alt="projectPageProject" />
      <div className="projectPagerightBlock">
        <Header2>{title}</Header2>
        <Header4>{subtitle}</Header4>

        <Paragraph><b>DURATION: </b>{duration}</Paragraph>
        <Paragraph>
          <b>TOOLS: </b>{tools}
        </Paragraph>
        <Paragraph>
          <b>TEAM: </b>{team}
        </Paragraph>
        <Paragraph>
          <b>FEATURED: </b>{featured}
        </Paragraph>
        <div className="myRole" style= {{backgroundColor: roleHexColor}}>
        <Paragraph><b>MY ROLE: </b>{myrole}</Paragraph>
        </div>
        
      </div>

    </div>
  )
}

