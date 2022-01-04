import "./Paragraph.css";
export default function Paragraph({children, className}) {
  return (
    <p className = {`paragraph ${className}` }>{children}</p>
  )
}