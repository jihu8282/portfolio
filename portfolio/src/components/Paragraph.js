import "./Paragraph.css";
export default function Paragraph({children, className, onClick}) {
  return (
    <p className = {`paragraph ${className}` } onClick= {onClick}>{children}</p>
  )
}