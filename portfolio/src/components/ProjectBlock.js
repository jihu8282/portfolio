import Header2 from "./Header2";
import Paragraph from "./Paragraph";
import "./ProjectBlock.css";
export default function ProjectBlock({ src, title, subtitle, href }) {
  return (
    <div className="block" >
      <a href={href}>
      <img src={src} alt = "project"/>
      </a>
      <Header2>{title}</Header2>
      <Paragraph>{subtitle}</Paragraph>
    </div>
  )
}