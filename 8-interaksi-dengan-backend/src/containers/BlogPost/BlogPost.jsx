import React, { Component, Fragment } from "react";
import Posts from "../../components/Posts/Posts";
import axios from "axios";
import { Form, Button, Card } from "react-bootstrap";

class BlogPost extends Component {
  state = {
    post: [],
    form: [
      {
        id: 1,
        title: "",
        body: "",
        userId: 1,
      },
    ],
    isNewRecord : false
  };

  resetForm = () => {
    this.setState({
      form: [
        {
          id: 1,
          title: "",
          body: "",
          userId: 1,
        },
      ],
      isNewRecord : false
    })
  }

  getDataFromAPI = () => {
    // Paket npm
    axios
      .get("http://10.60.36.60:3001/posts?_sort=id&_order=desc")
      .then((response) => {
        this.setState({
          post: response.data,
        });
      });
  };

  postDataToAPI = () => {
    axios.post("http://10.60.36.60:3001/posts", this.state.form).then(
      (response) => {
        console.log(response);
        this.getDataFromAPI();
        this.resetForm();
      },
      (error) => {
        console.log(error);
      }
    );
  };

  putDataToAPI = () => {
    axios.put(`http://10.60.36.60:3001/posts/${this.state.form.id}`, this.state.form).then((response) => {
      console.log(response);
      this.getDataFromAPI();
      this.resetForm();
    });
  }

  handleFormChange = (event) => {
    // copy form state yang default menjadi form state baru yang akan mendapatkan nilai baru dari change
    let formNew = { ...this.state.form };

    // Untuk ID, di dunia nyata adalah auto_increment pada sisi server
    // Namun saat ini, ikuti saran Mas Wiro
    // Saat method update, ID harus tetap dari backend
    
    if(!this.state.isNewRecord){
      let timestamp = new Date().getTime();
      formNew["id"] = timestamp;
    }
    
    // rubah nilai state yang sudah dicopy,
    // key => element_name, value => element.value
    formNew[event.target.name] = event.target.value;

    // rubah nilai default state
    this.setState(
      {
        form: formNew,
      },
      () => {
        console.log("form", this.state.form);
      }
    );
  };

  handleSubmit = () => {
    if(this.state.isNewRecord){
      this.putDataToAPI();
    }else{
      this.postDataToAPI();
    }
    
  };

  handleRemove = (id) => {
    axios.delete(`http://10.60.36.60:3001/posts/${id}`).then((response) => {
      this.getDataFromAPI();
    });
  };

  handleUpdate = (data) => {

    this.setState({
      form: data,
      isNewRecord : true
    });
    
  }

  componentDidMount = () => {
    this.getDataFromAPI();
  };

  render() {
    return (
      <Fragment>
        <div className="row">
          <div className="col-md-4">
            <Card className="card-blog">
              <Card.Header>Form Blog</Card.Header>

              <Card.Body>
                <Form>
                  <Form.Group controlId="title">
                    <Form.Label>Title</Form.Label>
                    <Form.Control
                      placeholder="Isikan title blog..."
                      name="title"
                      onChange={this.handleFormChange}
                      value= {this.state.form.title || ''}
                    />
                  </Form.Group>

                  <Form.Group controlId="body">
                    <Form.Label>Body</Form.Label>
                    <Form.Control
                      as="textarea"
                      rows="3"
                      onChange={this.handleFormChange}
                      name="body"
                      value= {this.state.form.body || ''}
                    />
                  </Form.Group>

                  <Button
                    variant="primary"
                    type="button"
                    onClick={this.handleSubmit}
                  >
                    Submit
                  </Button>
                </Form>
              </Card.Body>
            </Card>
          </div>

          <div className="col-md-8">
            <div className="row">
              {this.state.post.map((post) => {
                return (
                  <Posts
                    key={post.id}
                    data={post}
                    remove={this.handleRemove}
                    update={this.handleUpdate}
                  />
                );
              })}
            </div>
          </div>
        </div>
      </Fragment>
    );
  }
}

export default BlogPost;
