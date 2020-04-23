import React, { Component } from 'react'
import logo from "./logo2.png"



class ContactComponent extends Component {

    constructor(props) {
        super(props)
        this.handleSuccessfulResponse = this.handleSuccessfulResponse.bind(this)
        this.handleError = this.handleError.bind(this)
        this.state = {
            welcomeMessage: '',
            errorMessage: ''

        }
    }
    render() {
        return (
            <>
                <div>

                </div>
                <br></br>
                <img src={logo} width="200" alt="github.com/klayne1129" />
                <br></br>

                <div className="container">
                    <h3>You can contact me here:</h3>
                    
                    <div id="list">
                        <ul>
                            <li><a href="https://github.com/klayne1129" target="_blank" rel="noopener noreferrer">GitHub</a></li>
                            <li><a href="https://www.linkedin.com/in/katie-layne-5892031a2/" target="_blank" rel="noopener noreferrer">LinkedIn</a></li>
                        </ul>
                    </div>
                    <p>Or, you can send me an email <a href="mailto:klayne1129@gmail.com" target="_blank" rel="noopener noreferrer">here</a>.</p>
                </div>

                {/* <div className="container">
                            Click here for a customized welcome message. 
                            <button onClick={this.retrieveWelcomeMessage}
                                 className="btn btn-success">Welcome Message</button>
                        </div> */}
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
    // retrieveWelcomeMessage() {
    //     // HelloWorldService.executeHelloWorldService()
    //     // .then( response => this.handleSuccessfulResponse(response) )

    //     // HelloWorldService.executeHelloWorldBeanService()
    //     // .then( response => this.handleSuccessfulResponse(response) )

    //     HelloWorldService.executeHelloWorldPathVariableService(this.props.match.params.name)
    //     .then( response => this.handleSuccessfulResponse(response) )
    //     .catch( error => this.handleError(error))
    // }

    handleSuccessfulResponse(response) {
        this.setState({ welcomeMessage: response.data.message })
    }


   

    handleError(error) {
        console.log(error.response)
        let errorMessage = '';
        if (errorMessage) {
            errorMessage += error.message
        }

        if (error.response && error.response.data) {
            errorMessage += error.response.data.message
        }
        this.setState({ errorMessage: errorMessage })
    }

}


export default ContactComponent