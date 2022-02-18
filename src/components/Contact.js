import React from "react"
import NavBar from "./NavBar"
import Footer from "./Footer"

const Contact = () => {
  return (
    <>
      <div className="container-fluid">
        <NavBar />
        <a href="mailto:info@theyta.com">
          <img src="./contact.png" alt="contact info" />
        </a>
      </div>
      <Footer />
    </>
  )
}

export default Contact
