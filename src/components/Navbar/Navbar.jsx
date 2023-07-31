import { Link } from "react-router-dom"

const Navbar = () => {
  return (
    <nav>
        <Link>
        Mini <span>Blog</span>
        </Link>
        <ul>
            <li>
                <Link to={'/'}>Home</Link>
            </li>
            <li>
                <Link to={'/about'}>About</Link>
            </li>
        </ul>
    </nav>
  )
}

export default Navbar