import React, {Component} from 'react'
import AuthenticationService from './AuthenticationService.js'



class LoginComponent extends Component {
    constructor(props) {
        super(props)
        // added state to component
        this.state = {
            username: 'user',
            password: '',
            hasLoginFailed: false,
            showSuccessMessage: false
        
        }
        //bind methods
        this.handleChange = this.handleChange.bind(this)
        this.loginClicked = this.loginClicked.bind(this)
        
        

        }
        //whenever there is a change in a text element an event will handle it
        //event updates the state 
        handleChange(event) {
            this.setState(
                {
                    [event.target.name]
                        :event.target.value
                }
            )
        }
    
        loginClicked(){
            //username: user, password: user
            //hardcoded for now change later
            //whenever a user logs in successfully, send that data to session storage
            if(this.state.username=== 'user' && this.state.password=== 'user'){
        
                AuthenticationService.registerSuccessfulLogin(this.state.username,this.state.password);
                this.props.history.push(`/welcome/${this.state.username}`)

            } else {
                // console.log('failed')
                this.setState({showSuccessMessage:false})
                this.setState({hasLoginFailed:true})
            }
            // console.log(this.state)
        }


    render() {
        return (
            <div>
                <h1>Login</h1>
                <div className="container">
                {/* give userfeedback based on credentials */}
                {/* if true show message */}
                {this.state.hasLoginFailed && <div className="alert alert-warning">Invalid Credentials</div>}
                {this.state.showSuccessMessage && <div>Login Successful</div>}
            
                {/* //value of buttons are tied back to the value of this state */}
                Username: <input type="text" name="username" value={this.state.username} onChange={this.handleChange}/>

                Password: <input type="password" name="password" value={this.state.password} onChange={this.handleChange}/>
                <button className="btn btn-success" onClick={this.loginClicked}>Login</button>
                </div>
            </div>
        )
    }

    
}

export default LoginComponent