import { GrProjects } from "react-icons/gr"

const Header = () => {
  return (
    <nav className="navbar bg-light mb-4 p-0">
      <div className="container">
        <a 
          className="navbar-brand" 
          href="/"
        >
          <div className="d-flex align-items-center gap-2">
            <GrProjects />
            <div>Project Management App</div>
          </div>
        </a>
      </div>
    </nav>
  )
}

export default Header