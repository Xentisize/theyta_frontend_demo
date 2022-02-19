import React from "react"
import NavBar from "./NavBar"
import Footer from "./Footer"
import { useParams } from "react-router-dom"

const Feature = () => {
  let params = useParams()
  return (
    <>
      <NavBar active="features" />
      <div className="container-fluid" style={{ marginTop: "2em" }}>
        <div className="row">
          <div className="col-lg-12 col-md-12 col-sm-12 col-xs-12">
            <img
              src={"/" + params.featureId + ".png"}
              alt="feature"
              className="img-responsive"
            />
          </div>
        </div>
      </div>
      <Footer />
    </>
  )
}

export default Feature
