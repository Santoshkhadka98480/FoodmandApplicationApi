import React, { Component } from 'react'
import axios from 'axios'


export default class  extends Component {
    constructor(props) {
        super(props)
        this.state = {
            userId: 1,
            title: '',
            completed: false
        }
    }
    
    handleTitleChange = (event) => {
        this.setState({
            title: event.target.value
        })
    }
    
    submitTitle = (event) => {
        event.preventDefault();
        axios.post('https://jsonplaceholder.typicode.com/todos', this.state)
       
        .then((response) => {
            console.log(response);
            this.setState({
                title: ''
            })
        }).catch((err) => console.log(err));

        
    }
    
    render() {
        return (
            <div>
                <h2>ToDO Form</h2>
                <form>
                    <label>Title</label>
                    <input type="text" value={this.state.title} onChange={this.handleTitleChange}/>
                    <button type="submit" onClick={this.submitTitle}>Submit</button>
                </form>
            </div>
        )
    }
}
