import Paragraph from "./Paragraph";
import linkedIn from '../assets/footer/linkedIn.svg';
import instagram from '../assets/footer/insta.svg';
import github from '../assets/footer/github.svg';
import memoji from '../assets/about/memoji.svg';
import AboutRightBlock from "./AboutRightBlock";
import dog from '../assets/about/dog.svg';
import dance from '../assets/about/dance.svg';
import film from '../assets/about/film.svg';
import "./AboutPage.css";
export default function AboutPage() {
  return (
    <div className="about">
      <div className="leftText">
        <img className="memoji" src={memoji} alt="memoji" />
        <div className="hello">Hello there!</div>
        <Paragraph className="hi">
          I’m a Product Design+Front End Engineering student with a <br />
          love for user experience that leads me to create joyful yet <br />
          accessible products for diverse audience. I am passionate to <br />
          design for others through deep empathy in people’s needs, <br />
          and ultimately, empower their daily lives. <br />
          <br />
          With my dual Master’s degree in Computer Science and <br />
          Product Design at University of Pennsylvania, I hope to <br />
          become a designer who creates mindful human experiences <br />
          by simplifying complex problems.<br />
          <br />
          Feel free to reach out for any questions - I would love to <br />
          connect with you!<br />
          <br />
        </Paragraph>

        <div className="icons">
          <a href="https://www.instagram.com/jihukim/" target="_blank" rel="noreferrer">
            <img src={instagram} alt="insta" />
          </a>
          <a href="https://www.linkedin.com/in/katejkim1/" target="_blank" rel="noreferrer">
            <img src={linkedIn} alt="linkedIn" />
          </a>
          <a href="https://github.com/jihu8282" target="_blank" rel="noreferrer">
            <img src={github} alt="github" />
          </a>
        </div>
      </div>

      <div className="rightText">
      <a class="resume" href="https://github.com/jihu8282" target="_blank" rel="noreferrer">view resume</a>
        <AboutRightBlock className="rightBlock" title="My Superpower" text="Observing underlying issues +
Appreciating multiple perspectives through empathy" ></AboutRightBlock>
        <AboutRightBlock className="rightBlock" title="My Weakness" text="Overthinking my overthoughts.." ></AboutRightBlock>
        <AboutRightBlock className="rightBlock" title="Favorite UX Tools" text="Figma + post-its" ></AboutRightBlock>
        <AboutRightBlock className="rightBlock" title="Favorite part of Design Process" text="User research, Journey mapping, and Wireframing " ></AboutRightBlock>
        <div className="outside"> Outside of Work </div>
        <div className="iconBlocks">
          <div className="iconBlock">
            <img className="icon" src={dog} alt="dog" />
            volunteer at animal shelters
          </div>
          <div className="iconBlock">
            <img className="icon" src={dance} alt="dance" />
            dance - tiktok!
          </div>
          <div className="iconBlock">
            <img className="icon" src={film} alt="film" />
            binge watch behind the scenes of Disney movies
          </div>
        </div>

      </div>
    </div>
  )
}