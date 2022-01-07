import "./Header4.css";
export default function Header4({children,className}) {
  return (
    <h4 className = {`header4 ${className}` }>{children}</h4>
  )
}