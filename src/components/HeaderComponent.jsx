import { Link } from "react-router-dom"
import { AiOutlineHome } from "react-icons/ai"
import { FaBlog } from "react-icons/fa"
import "./HeaderComponent.css"

function HeaderComponent(){
  return(
    <header className="header">
      <h1 className="title">Welcome</h1>
      <nav>
        <ul className="link-list">
          <li>
            <Link className="link" to="/"><AiOutlineHome /> Home</Link>
          </li>
          <li>
            <Link className="link" to="/blog"><FaBlog /> Blog</Link>
          </li>
        </ul>
      </nav>
    </header>
  )
}

export default HeaderComponent