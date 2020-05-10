/**
 * Belajar Lifecycle:
 * Sumber diagram bisa dilihat disini:
 *
 * https://medium.com/@mksglu/react-16-3-lifecycle-methods-7ac4e2f2024a
 *
 * Keyword: Mounting, Updating, Unmounting
 *
 */

import React, { Component } from "react";
import { Button } from "react-bootstrap";

class LifeCycleComponent extends Component {

    constructor(){
        super();

        this.state ={
            count : 1
        }

        console.log('constructor');
    }

    static getDerivedStateFromProps(props, state){
        console.log('getDerivedStaticFromProps');
        return null;
    }

    handleChangeCount = () => {
        this.setState({
            count : this.state.count + 1
        });
    }

    

    render() {
        console.log('render');
        return (
            <div>
                <Button variant='primary' onClick={this.handleChangeCount}> Component {this.state.count} </Button>
            </div>
        );
    }

    componentDidMount(){
        console.log('componentDidMount');
    }

    shouldComponentUpdate(nextProps, nextState){
        console.group('shouldComponentUpdate');
        // console.log('nextProps', nextProps);
        console.log('this.state', this.state);
        console.log('nextState', nextState);
        console.groupEnd();

        if(nextState.count >= 5){
            return false;
        }

        return true;
    }

    getSnapshotBeforeUpdate(prevProps, prevState){
        console.group('getSnapshotBeforeUpdate');
        console.log('this.state', this.state);
        console.log('prevState', prevState);
        console.groupEnd();
        return null;
    }

    componentDidUpdate(prevProps, prevState, snapshot){
        console.group('componentDidUpdate');
        console.log('this.state', this.state);
        console.log('prevState', prevState);
        console.log('snapshot', snapshot);
        console.groupEnd();
    }

    componentWillUnmount(){
        console.log('componentWillUnmount');
    }
}

export default LifeCycleComponent;
