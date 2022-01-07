import Header2 from "./Header2";
import Paragraph from "./Paragraph";
import "./AboutRightBlock.css";
export default function AboutRightBlock({ title, text }) {
  return (
    <div className="block" >
      <Header2 className="title">{title}</Header2>
      <Paragraph className="text">{text}</Paragraph>
    </div>
  )
}