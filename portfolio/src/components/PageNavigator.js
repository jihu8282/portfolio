import Header2 from "./Header2";
import Header4 from "./Header4";
import Paragraph from "./Paragraph";
import "./PageNavigator.css";
export default function PageNavigator({ sectionData }) {
  return (
    <div className="wrapper">
      {sectionData.map((section) => {
        return (
          <div key={section.id}>
            <Paragraph className="section" onClick={() => {
              console.log("onclikc")
              document.getElementById(section.id).scrollIntoView()
            }}>
              {section.title}
            </Paragraph>
            <div className="rectangle" />
          </div>

        )
      })}
    </div>
  )
}

