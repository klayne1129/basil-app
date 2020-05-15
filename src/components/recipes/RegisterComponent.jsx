import React, { Component } from 'react'
import UserDataService from '../../api/recipes/UserDataService.js'




class RegisterComponent extends Component {
    constructor(props) {
        super(props)
        this.state = {
            username: '',
            password: '',
            verifyPassword: '',
            role: "ROLE_USER",
            hasSignUpFailed: false,
            showSuccessMessage: false
           
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

    // signUpClicked() {
    //     console.log("signUp clicked");
    //     let user = {
    //         username: this.state.username,
    //         password: this.state.password,
    //         role: "ROLE_USER"

    //     }
    //     // using my default user to authorize any new user
    //     AuthenticationService
    //         .executeJWTAuthenticationService("basil","admin")
    //         .then((response) => {
    //             AuthenticationService.registerSuccessfulLoginForJwt(this.state.username, response.data.token)
    //             UserDataService.createUser(user)
    //             this.props.history.push(`/welcome}`)
    //         })
    // }

    signUpClicked() {
        let user = {
            username: this.state.username,
            password: this.state.password,
            role: "ROLE_USER"

        }

        if(this.state.password === this.state.verifyPassword){
        UserDataService.createUser(user)
        this.setState({showSuccessMessage:true})
        this.setState({hasSignUpFailed:false})
        } else {
            this.setState({showSuccessMessage:false})
            this.setState({hasSignUpFailed:true})
        }  
    }

    // loginClicked(){
    //     AuthenticationService
    //     .executeJWTAuthenticationService(this.state.username, this.state.password)
    //     .then((response) => {
    //         AuthenticationService.registerSuccessfulLoginForJwt(this.state.username,response.data.token)
    //         this.props.history.push(`/welcome/${this.state.username}`)
    //     }).catch( () =>{
    //         this.setState({showSuccessMessage:false})
    //         this.setState({hasLoginFailed:true})
    //     })
    // }

    render() {
        return (
            <div >
                <h1>Registration</h1>
                {this.state.hasSignUpFailed && <div className="alert alert-warning">Passwords do not match!</div>}
                {this.state.showSuccessMessage && <div className="alert alert-success">Registration successful. Return to login page.</div>}
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