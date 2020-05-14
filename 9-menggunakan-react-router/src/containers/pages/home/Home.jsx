import React, { Component, Fragment } from "react";
import {Container ,Jumbotron, Button } from "react-bootstrap";
import { Link } from "react-router-dom";

const REACT_VERSION = React.version;
class Home extends Component {
  render() {
    return (
      <Fragment>
        <Container>

        
          <Jumbotron>
            <h1>Welcome To Front End</h1>
            <p>
               
               Powered By <a href="https://reactjs.org/"  target='_blank'>React JS</a> <br></br>
               Versi: {REACT_VERSION}
            </p>
            <p>
              <Button variant="primary">Learn more</Button>
            </p>
          </Jumbotron>
          </Container>
      </Fragment>
    );
  }
}

export default Home;
