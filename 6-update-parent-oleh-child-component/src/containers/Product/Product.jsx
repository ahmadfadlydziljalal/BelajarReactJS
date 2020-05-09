import React, { Component, Fragment } from "react";
import { Card, Button, Container, Row, Col } from "react-bootstrap";

/**
 * props : onCounterChange => function
 */
class Product extends Component {
  state = {
    order: 0,
    "version-app": 1,
  };

  // ES6 function
  handleCounterChange = (newValue) => {
    // props pada Home.js bernama onCounterChange,
    // parameter nya adalah nilai yang dikirimkan ke parent component
    this.props.onCounterChange(newValue);
  };

  // ES6 function
  handlePlus = () => {
    // update di component ini sendiri
    this.setState(
      {
        order: this.state.order + 1,
      },
      () => {
        // update di component parent
        this.handleCounterChange(this.state.order);
      }
    );
  };

  handleMinus = () => {
    if (this.state.order > 0) {
      this.setState(
        {
          order: this.state.order - 1,
        },
        () => {
          // update di component parent
          this.handleCounterChange(this.state.order);
        }
      );
    } else {
      console.log("Dibawah 0");
    }
  };

  // ES 5 function; Not Worked
  // Variable this hanya mengarah ke dalam block function itu saja
  // Bukan ke globalnya
  // handleMinus(){
  //   this.setState({
  //     order: this.state.order - 1
  //   });
  // }

  render() {
    return (
      <Fragment>
        <main role="main">
          <Container fluid>
            <Row>
              <Col>
                <Card style={{ width: "18rem" }}>
                  <Card.Img variant="top" src="holder.js/100px180" />
                  <Card.Body>
                    <Card.Title>Card Title</Card.Title>
                    <Card.Text>
                      Some quick example text to build on the card title and
                      make up the bulk of the card's content.
                    </Card.Text>
                    <Button variant="primary">Go somewhere</Button>
                  </Card.Body>
                  <Card.Footer>
                    <Row>
                      <Col>
                        <Button
                          onClick={this.handleMinus}
                          variant="outline-primary"
                          size="sm"
                          block
                        >
                          -
                        </Button>
                      </Col>
                      <Col xs={5}>
                        <input
                          type="text"
                          className="form-control text-center"
                          // defaultValue={this.state.order || ''}
                          value={this.state.order}
                        />
                      </Col>
                      <Col>
                        <Button
                          onClick={this.handlePlus}
                          variant="outline-primary"
                          size="sm"
                          block
                        >
                          +
                        </Button>
                      </Col>
                    </Row>
                  </Card.Footer>
                </Card>
              </Col>
            </Row>
          </Container>
        </main>
      </Fragment>
    );
  }
}

export default Product;
