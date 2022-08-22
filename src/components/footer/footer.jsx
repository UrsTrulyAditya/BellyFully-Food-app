import React from 'react'
import { Link} from 'react-router-dom'
const Footer = () => {
   
  return (
    <>
    
  <>
  <div className="foot" style={{ backgroundColor: "rgba(0, 0, 0, 0.5)" }}>
    {/* Footer */}
    <footer
      className="text-center text-white bg-dark"
      style={{ backgroundColor: "#3f51b5" }}
    >
      {/* Grid container */}
      <div className="container">
        {/* Section: Links */}
        <section className="mt-5">
          {/* Grid row*/}
          <div className="row text-center d-flex justify-content-center pt-5">
            {/* Grid column */}
            <div className="col-md-2">
              <h6 className="text-uppercase font-weight-bold">
                {/* <Link to="/"> */}
                  <a href='/' className="text-white">
                  Home
                </a>
                {/* </Link> */}
              </h6>
            </div>
            {/* Grid column */}
            {/* Grid column */}
            <div className="col-md-2">
              <h6 className="text-uppercase font-weight-bold">
                <a href="#!" className="text-white">
                  Recipes
                </a>
              </h6>
            </div>
            {/* Grid column */}
            {/* Grid column */}
            <div className="col-md-2">
              <h6 className="text-uppercase font-weight-bold">
                <a href="#!" className="text-white">
                  Our story
                </a>
              </h6>
            </div>
            {/* Grid column */}
            {/* Grid column */}
            <div className="col-md-2">
              <h6 className="text-uppercase font-weight-bold">
                <a href="#!" className="text-white">
                  Contact
                </a>
              </h6>
            </div>
            {/* Grid column */}
            {/* Grid column */}
            <div className="col-md-2">
              <h6 className="text-uppercase font-weight-bold">
                {/* <Link to='/policies'> */}
                <a href='/policies' className="text-white">
                  Policies
                </a>
                {/* </Link> */}
              </h6>
            </div>
            {/* Grid column */}
          </div>
          {/* Grid row*/}
        </section>
        {/* Section: Links */}
        <hr className="my-3" />
        {/* Section: Text */}
        <section className="mb-3">
          <div className="d-flex justify-content-between align-items-center">
             
            <div className="col-lg-12">
             <Link to="/">
             <img className='logoFooter' src='https://res.cloudinary.com/daari0y7l/image/upload/v1659953941/20220808_141419_dnrzne.png' />
             </Link>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Sunt
                distinctio earum repellat quaerat voluptatibus placeat nam,
                commodi optio pariatur est quia magnam eum harum corrupti dicta,
                aliquam sequi voluptate quas.
              </p>
            </div>
          </div>
        </section>
        {/* Section: Text */}
        {/* Section: Social */}
        <section className="text-center mb-3 ml-3">
          <a href="" className="text-white me-4">
            <i className="fab fa-facebook-f" />
          </a>
          <a href="" className="text-white me-4">
            <i className="fab fa-twitter" />
          </a>
          <a href="" className="text-white me-4">
            <i className="fab fa-google" />
          </a>
          <a href="" className="text-white me-4">
            <i className="fab fa-instagram" />
          </a>
          
          
        </section>
        {/* Section: Social */}
      </div>
      {/* Grid container */}
      {/* Copyright */}
      <div
        className="text-center p-1"
        style={{ backgroundColor: "rgba(0, 0, 0, 0.2)" }}
      >
        
        <a className="text-white" href="https://mdbootstrap.com/">
        © 2022  BELLY FULLY @urstrulyAditya
        </a>
      </div>
      {/* Copyright */}
    </footer>
    {/* Footer */}
  </div>
  {/* End of .container */}
</>

</>

  )
}

export default Footer