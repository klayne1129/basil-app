import React, {Component} from 'react'
import {Link} from 'react-router-dom'
import HelloWorldService from '../../api/recipes/HelloWorldService.js'


class WelcomeComponent extends Component {

    constructor(props) {
        super(props)
        this.retrieveWelcomeMessage = this.retrieveWelcomeMessage.bind(this)
        this.handleSuccessfulResponse = this.handleSuccessfulResponse.bind(this)
        this.handleError = this.handleError .bind(this)
        this.state = {
            welcomeMessage : '',
            errorMessage : ''
        }
    }
    render() {
        return  (
                     <>
                        <h1>Welcome!</h1>
                        <div className="container">
                            Welcome {this.props.match.params.name}. 
                            You can manage your recipes <Link to="/recipes">here</Link>.
                        </div>
                        <div className="container">
                            Click here for a customized welcome message. 
                            <button onClick={this.retrieveWelcomeMessage}
                                 className="btn btn-success">Welcome Message</button>
                        </div>
                        <div className="container">
                            {this.state.welcomeMessage}
                        </div>
                        {/* errors */}
                        {/* <div className="container">
                            {this.state.errorMessage}
                        </div> */}

                    </>
        )  
    }

    // call the promise method. Once called THEN define what should be done with a
    // successful response
    retrieveWelcomeMessage() {
        // HelloWorldService.executeHelloWorldService()
        // .then( response => this.handleSuccessfulResponse(response) )

        // HelloWorldService.executeHelloWorldBeanService()
        // .then( response => this.handleSuccessfulResponse(response) )

        HelloWorldService.executeHelloWorldPathVariableService(this.props.match.params.name)
        .then( response => this.handleSuccessfulResponse(response) )
        .catch( error => this.handleError(error))
    }

    handleSuccessfulResponse(response){
        this.setState({welcomeMessage : response.data.message})   
    }

    handleError(error){
        console.log(error.response)
        this.setState({errorMessage : error.response.data.message})   
    }

}


export default WelcomeComponent