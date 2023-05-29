import { Link } from "react-router-dom/cjs/react-router-dom.min"
const Navbar = () => {
  return (
    <div>
      <nav className="navbar">
        <h1>Hi rize</h1>
        <Link to="/">Home</Link>
        <Link to="/create">Create</Link>
      </nav>
    </div>
  )
}

export default Navbar
