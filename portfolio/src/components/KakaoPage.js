import Paragraph from "./Paragraph";
import Header4 from "./Header4";
import ProjectPageTopBlock from "./ProjectPageTopBlock";
import SmallTitle from "./SmallTitle";
import kakao from "../assets/home/kakaoHome.svg";
import next from "../assets/nextArrow.svg";
import img1 from "../assets/kakao/img1.svg";
import img2 from "../assets/kakao/img2.svg";
import img3 from "../assets/kakao/img3.svg";
import img4 from "../assets/kakao/img4.svg";
import img5 from "../assets/kakao/img5.svg";
import img6 from "../assets/kakao/img6.svg";
import "./KakaoPage.css"
import PageNavigator from "./PageNavigator";
export default function KakaoPage() {
  return (
    <div className="bodyforProject">
      <PageNavigator sectionData={[{ title: "MY ROLE", id: "MY ROLE" }, { title: "REFLECTIONS", id: "REFLECTIONS" }]} />
      <ProjectPageTopBlock
        src={kakao}
        title="KAKAO INTERNSHIP"
        subtitle="designed a product to give impact to the world"
        duration=" Jun '21 - Aug '21"
        role="UX Design Intern"
        team="GP TF"
      />
      <div className="box" id="MY ROLE">
        <SmallTitle className="smallTitle" number="1" title="MY ROLE"></SmallTitle>
        <div className="boxTopIntProj">
          <div className="leftBlockIntProj">
            <Paragraph>
              During our internship, all interns was challenged to create a product/service that could give impact to the real world, and our team built a community platform for women’s menstruation health called ‘Better’. I was part of women-only team, with members who had backgrounds in business, communication, design, and data science. As the only team member who was pursuing UX degree and had a full experience of end-to-end design process, I was the key decision maker of the overall user experience design process. I led the enitre UX process (from problem definition to insights analysis) and conducted ideation workshops for our team. I also collaborated with a UI designer to design wireframes and presented to our senior designers during our weekly check-in meetings. For our final presentaion, I was responsible for structuring our presentation, and answering q&a session.
            </Paragraph>

          </div>
        </div>
      </div>

      <div className="box" id="REFLECTIONS">
        <SmallTitle className="smallTitle" number="2" title="REFLECTIONS"></SmallTitle>
        <div className="boxTopIntProj">
          <div className="leftBlockIntProj">
            <Paragraph>
              I am beyond grateful for this internship experience. It was definitely challenging to collaborate with interns who had different backgrounds and experiences, and come up with a product from scratch in such short amount of time.
              It was not easy at first. Our team was one of the teams that encountered most frictions during meetings. To compromise these conflicts, I mediated between teammates and suggested a better communication tool for healthier and safer conversations. This led us to have more fruitful discussions and ideation sessions, which allowed us to come up with a strong product at the end.
              Countless days of working overtime, and receiving negative feedback, our team sometimes lost confident if we our decision was right. I would check-in our teammates to make sure they continue to stay motivated, and conducted individual coffee chats so we can endure the uncertainties together.
              Also, it was my first time to lead an enitre ideation session. I had to constantly emphasize the importance of users’ and became the advocate for their voice. This overall experience ensured that I am strongly passionate for UX as my future career path, and how I really care about user empathy, and ultimately creating a service that can give impact to individuals.
              Working with 16 other talented interns for 8 weeks was an experience I would not trade for anything in the world!
              P.S. Special thanks to our Global Pioneers team!
            </Paragraph>
          </div>
        </div>
        <div className="allPic">
          <div className="col1">
            <img src={img1} alt="img1" />
            <img src={img2} alt="img2" />

          </div>

          <div className="col2">
            <img src={img3} alt="img3" />
            <img src={img4} alt="img4" />

          </div>

          <div className="col3">
            <img src={img5} alt="img5" />
            <img src={img6} alt="img6" />

          </div>


        </div>




        <div className="arrows">
          <a className="prevPage" href="/interactive">
            <img className="prev" src={next} alt="next" />
            <Header4 className="prevProject">PREVIOUS: INTERACTIVE PROJECTS</Header4>
          </a>



        </div>


      </div>
    </div>
  )
}