import React from 'react';

export default function SignUp() {

    let submitted = false

    return (
        <div class="myPanel" style={{borderRight: '5px solid #3d6fbd', padding: 30}}>
            <div class="row">
                <div class="col-sm-7">
                    <h4>💰 Sign up to get discounts from sustainable companies every week!</h4>
                </div>
                <div class="col-sm-5">
                    <div class="input-group pull-right">
                        <input name="email" type="text"
                            class="form-control pull-right" placeholder="Enter your email" />
                        <span class="input-group-addon btn btn-success success">
                            <span class="glyphicon glyphicon-envelope" aria-hidden="true"></span>
                            Subscribe
				</span>
                    </div>
                </div>
            </div>
            <div style={{margin: 20, display: submitted ? 'inline' : 'none'}}>
                <h4 style={{textAlign:'center'}}>Thanks! You're signed up.</h4>
            </div>
        </div>
    );
}


