import "./Header2.css";
export default function Header2({children,className}) {
  return (
    <h2 className = {`header2 ${className}` }>{children}</h2>
  )
}