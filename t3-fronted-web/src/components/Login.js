import React, { Component } from 'react'


export default class Login extends Component {
    render() {
        return (
            <div className="container">
                <div className="d-flex justify-content-center h-100">
		            <div className="card">
                        <div class="card-header">
				            <h3>Sign In</h3>
			            </div>
                        <div className="card-body">
				            <form action="">
                                <div className="input-group form-group">
                                    <div clasclassNames="input-group-prepend">
                                         <input type="text" className="form-control" name="email" id="" placeholder="Enter Your Email Address"/>
                                     </div>
                                </div>
                                <div className="input-group form-group">
                                    <div className="input-group-prepend">
                                         <input type="text" className="form-control" name="password" id="" placeholder="Enter Your Password"/>
                                    </div>
                                </div>
                                <div class="custom-control custom-checkbox">
                                     <input type="checkbox" class="custom-control-input" id=""/>
                                    <label class="custom-control-label" > Remember me</label>
                                </div>
                                <div  className="form-group">
                                    <input type="submit" value="Login" className="btn float-right login_btn"/>    
                                </div>
                             </form>
			            </div>
                        <div class="card-footer">
				            <div class="d-flex justify-content-center links">
					            Don't have an account?<a href="#">Sign Up</a>
				            </div>
				            <div class="d-flex justify-content-center">
					            <a href="#">Forgot your password?</a>
				            </div>
			            </div>
                    </div>
                </div>
            </div>
        )
    }
}
