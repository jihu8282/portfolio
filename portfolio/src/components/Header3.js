import "./Header3.css";
export default function Header3({children,className}) {
  return (
    <h3 className = {`header3 ${className}` }>{children}</h3>
  )
}