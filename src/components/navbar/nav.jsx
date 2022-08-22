import React from 'react'
import { Link } from 'react-router-dom'
const Navbar = () => {
   
  return (
    <nav
      className="navbar navbar-expand-lg navbar-dark d-none d-lg-block "
      style={{ zIndex: 2000 }}>
      <div className="container-fluid ">
        {/* Navbar brand */}
      <Link to="/">
        <img className='logo' src='https://res.cloudinary.com/daari0y7l/image/upload/v1659953941/20220808_141419_dnrzne.png' />
      </Link>

        <div className="collapse navbar-collapse" id="navbarExample01">
          <ul className="navbar-nav m-auto mb-2 mb-lg-0">
            <li className="nav-item">
              <a className="nav-link" aria-current="page" href="#intro">
                Home
              </a>
            </li>
            <li className="nav-item">
              <a
                className="nav-link"
                href="https://www.youtube.com/channel/UC5CF7mLQZhvx8O5GODZAhdA"
                rel="nofollow"
                target="_blank"
              >
                Menu
              </a>
            </li>
            <li className="nav-item">
              <a
                className="nav-link"
                href="https://mdbootstrap.com/docs/standard/"
                target="_blank"
              >
                Our story
              </a>
            </li>

            <li className="nav-item">
              <a
                className="nav-link"
                href="https://mdbootstrap.com/docs/standard/"
                target="_blank"
              >
                Contacts
              </a>
            </li>
          </ul>
          <ul className="navbar-nav d-flex flex-row">
            {/* Icons */}
            <li className="nav-item me-3 me-lg-0">
              <a
                className="nav-link"
                href="https://www.youtube.com/channel/UC5CF7mLQZhvx8O5GODZAhdA"
                rel="nofollow"
                target="_blank"
              >
                <i className="fab fa-youtube" />
              </a>
            </li>
            <li className="nav-item me-3 me-lg-0">
              <a
                className="nav-link"
                href="https://www.facebook.com/mdbootstrap"
                rel="nofollow"
                target="_blank"
              >
                <i className="fab fa-facebook-f" />
              </a>
            </li>
            <li className="nav-item me-3 me-lg-0">
              <a
                className="nav-link"
                href="https://twitter.com/MDBootstrap"
                rel="nofollow"
                target="_blank"
              >
                <i className="fab fa-twitter" />
              </a>
            </li>
            <li className="nav-item me-3 me-lg-0">
              <a
                className="nav-link"
                href="https://github.com/mdbootstrap/mdb-ui-kit"
                rel="nofollow"
                target="_blank"
              >
                <i className="fab fa-github" />
              </a>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  )
}

export default Navbar