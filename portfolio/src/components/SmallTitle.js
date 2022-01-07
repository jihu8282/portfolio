import Paragraph from "./Paragraph";
import "./SmallTitle.css";
export default function SmallTitle({number, title}) {
  return (
    <div className="smalltitle">
      {number} - {title}
    </div>
  )
}