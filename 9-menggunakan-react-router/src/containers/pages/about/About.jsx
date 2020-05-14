import React, { Component, Fragment } from "react";
import { Container } from "react-bootstrap";

class About extends Component {
  render() {
    return (
      <Fragment>
        <Container>
          <div className="card">
            <h5 className="card-header">About</h5>
            <div className="card-body">
              <h5 className="card-title">Siapa Kami ?</h5>
              <p className="card-text">
                Gambaran singkat tentang perusahaan...
              </p>
            </div>
            <div className='card-footer'>
            <a href="#" className="btn btn-primary">
                Go somewhere
              </a>
            </div>
          </div>
        </Container>
      </Fragment>
    );
  }
}

export default About;
