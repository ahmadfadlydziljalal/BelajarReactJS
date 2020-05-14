import React, { Component, Fragment } from "react";
import { Container } from "react-bootstrap";

class ContactUs extends Component {
    render() {
        return (
            <Fragment>
            <Container>
              <div className="card">
                <h5 className="card-header">Contact Us</h5>
                <div className="card-body">
                  <h5 className="card-title">Ada pertanyaan?</h5>
                  <p className="card-text">
                    Disini nanti ada form
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

export default ContactUs;