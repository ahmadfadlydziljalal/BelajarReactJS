import React, { Component } from "react";
import LifeCycleComponent from "../LifeCycleComponent/LifeCycleComponent";

class Home extends Component {
  state = {
    showComponent: true,
  };

//   componentDidMount() {
//     setTimeout(() => {
//       this.setState({
//         showComponent: false,
//       });
//     }, 5000);
//   }

  render() {
    return this.state.showComponent ? <LifeCycleComponent /> : null;
  }
}

export default Home;
