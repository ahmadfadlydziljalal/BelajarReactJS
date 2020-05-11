import React, { Fragment } from "react";
import { Card, Button, ButtonGroup } from "react-bootstrap";
import './Posts.css'

const Posts = (props) => {
  return (
    <Fragment>
      <div className="col-12">
        
        <Card className='card-blog'>
          <Card.Body>
            <Card.Title>
                {props.data.title}
            </Card.Title>
            <Card.Subtitle className="mb-2 text-muted"></Card.Subtitle>
            <Card.Text>
                {props.data.body}
            </Card.Text>

            <ButtonGroup aria-label="Actions">
              
              <Button variant="info"
                onClick = {() => {
                  props.update(props.data)
                }}
                >Update
              </Button>

              <Button variant="danger"
                 onClick={() => {
                if (
                  window.confirm(
                    `Are You sure ? This action cannot be undone...`
                  )
                ) {
                  props.remove(props.data.id);
                }
              }}
              >Delete</Button>
            </ButtonGroup>
          </Card.Body>
        </Card>
      </div>
    </Fragment>
  );
};

export default Posts;
