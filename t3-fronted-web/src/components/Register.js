import React, { Component } from 'react'
import {
  Input,Form
} from 'reactstrap';

export default class Register extends Component {
    render() {
        return (
            <div>
                <h2>Register Form</h2>
                <Form>
                    <Input type="text" name="firstName" id="" placeholder="Enter the First Name"/>
                    <Input type="text" name="lastName" id="" placeholder="Enter the Last Name"/>
                    <Input type="username" name="username" id="" placeholder="Enter Your UserName"/>
                    <Input type="password" name="password" id="" placeholder="Enter Your Password"/>
                    <Input type="button" value="Register"/>
                </Form>
            </div>
        )
    }
}
