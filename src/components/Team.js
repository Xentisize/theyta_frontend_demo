import React from "react"

const Team = () => {
  return (
    <div className="container-fluid bg-4 text-center" id="team">
      {/* <!-- silver: Container makes anything within 1200px --> */}
      <div className="container">
        <h2 className="margin">Our Team</h2>
        <p>
          Our team is composed of a variety of talents in every field so as to
          ensure theyta fits every demand from you
        </p>
        <br />
        <div className="row">
          <div className="col-lg-3 col-md-3 col-sm-3 col-xs-3">
            <h3>Charlie Poon</h3>
            <p className="lead">Chief Russian Girls Contact Officer</p>
            <img
              src="img01.jpg"
              className="img-responsive margin"
              style={{ width: 100 + "%" }}
              alt="Image1"
            />
          </div>
          <div className="col-lg-3 col-md-3 col-sm-3 col-xs-3">
            <h3>Ricky Chan</h3>
            <p className="lead">Chief Supporter of Russian Girls</p>
            <img
              src="img01.jpg"
              className="img-responsive margin"
              style={{ width: 100 + "%" }}
              alt="Image1"
            />
          </div>
          <div className="col-lg-3 col-md-3 col-sm-3 col-xs-3">
            <h3>Rova Wong</h3>
            <p className="lead">Chief Russian Girls Financial Officer</p>
            <img
              src="img01.jpg"
              className="img-responsive margin"
              style={{ width: 100 + "%" }}
              alt="Image1"
            />
          </div>
          <div className="col-lg-3 col-md-3 col-sm-3 col-xs-3">
            <h3>Silver Ng</h3>
            <p className="lead">Chief Russian Girls Fashion Officer</p>
            <img
              src="img01.jpg"
              className="img-responsive margin"
              style={{ width: 100 + "%" }}
              alt="Image1"
            />
          </div>
        </div>
      </div>
    </div>
  )
}

export default Team
