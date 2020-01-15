import React, { Component } from 'react'

export default class Message extends Component {
    constructor(props) {
        super(props)
    
        this.state = {
             message: '22B'
        }
    }
    
    handleClick(){
        this.setState({message: '22D'});
    }

    render() {
        return (
            <div>
                <h1>Hello, {this.props.name}</h1>
                <h2>Hello, {this.state.message}</h2>
                <button onClick={() => this.handleClick()}>Click me!</button>
            </div>
        )
    }
}
