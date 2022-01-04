import "./Footer.css";
import Paragraph from "./Paragraph";
import balloon from '../assets/footer/balloon.svg';
import linkedIn from '../assets/footer/linkedIn.svg';
import instagram from '../assets/footer/insta.svg';
import github from '../assets/footer/github.svg';

export default function Footer() {

  return (
    <div className="footer">
      <Paragraph className="footerText">
        Thanks for stopping by and scrolling the bottom of this page! <br></br>
        If you want to learn more about my works or just chat, feel free to reach me
        <img src={balloon} alt="balloon" />

      </Paragraph>

      <div className="icons">

        <a href="https://www.instagram.com/jihukim/" target="_blank" rel="noreferrer">
          <img src={instagram} alt="insta" />

        </a>
        <a href="https://www.instagram.com/jihukim/"  target="_blank" rel="noreferrer">
          <img src={linkedIn} alt="linkedIn" />

        </a>
        <a href="https://www.instagram.com/jihukim/"  target="_blank" rel="noreferrer">
          <img src={github} alt="github" />


        </a>



      </div>

    </div>


  );

}

