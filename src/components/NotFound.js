import React from "react"
import NavBar from "./NavBar"
import Footer from "./Footer"

const NotFound = () => {
  return (
    <>
      <NavBar />
      <div className="jumbotron" style={{ height: 100 + "%" }}>
        <div className="container-fluid" style={{ color: "black" }}>
          <h1>404 - Your Data Is Coming.</h1>
          <p>
            Data are everywhere. If you can't find your data, it means that is
            the right time to contribute.
          </p>
          <p>
            <a
              className="btn btn-primary btn-lg"
              style={{ color: "white" }}
              href="/"
              role="button"
            >
              Hail TheyTa
            </a>
          </p>
        </div>
      </div>
      <Footer />
    </>
  )
}

export default NotFound
