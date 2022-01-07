import Header2 from "./Header2";
import Paragraph from "./Paragraph";
import "./ImageBlock.css";
export default function ImageBlock({ title, src, text }) {
  return (
    <div className="imageBlock" >
     <Paragraph className="imageTitle">{title}</Paragraph>
      <img src={src} alt = "imageForBlock"/>
      <Paragraph className="imageText">{text}</Paragraph>
    </div>
  )
}