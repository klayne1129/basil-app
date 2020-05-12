import React, { Component } from 'react'
import UserDataService from '../../api/recipes/UserDataService.js'
import AuthenticationService from './AuthenticationService.js'



class RegisterComponent extends Component {
    constructor(props) {
        super(props)
        this.state = {
            username: '',
            password: '',
            verifyPassword: ''
        }
        this.handleChange = this.handleChange.bind(this)
        this.signUpClicked = this.signUpClicked.bind(this)
    }

    handleChange(event) {
        this.setState(
            {
                [event.target.name]
                    : event.target.value
            }
        )
    }

    signUpClicked(values) {
        console.log("signUp clicked");
        let user = {
            username: values.username,
            password: values.password
        }
        AuthenticationService
            .executeJWTAuthenticationService("basil", "admin")
            .then((response) => {
                AuthenticationService.registerSuccessfulLoginForJwt(this.state.username, response.data.token)
                UserDataService.createUser(user)
                this.props.history.push(`/login}`)
            })
    }



    render() {
        return (
            <div >
                <h1>Registration</h1>

                <div className="container">



                    {/* //value of buttons are tied back to the value of this state */}
                    Username: <input type="text" name="username" value={this.state.username} onChange={this.handleChange} />

                    Password: <input type="password" name="password" value={this.state.password} onChange={this.handleChange} />
                    Verify Password: <input type="password" name="verifyPassword" value={this.state.verifyPassword} onChange={this.handleChange} />
                    <button type='submit' className="btn btn-success" onClick={this.signUpClicked}>Sign Up</button>

                </div>
            </div>
        )
    }
}

export default RegisterComponent