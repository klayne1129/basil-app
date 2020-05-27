import React, { Component } from 'react'
import UserDataService from '../../api/recipes/UserDataService.js'
import { Formik, Form, Field, ErrorMessage } from 'formik';




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
        // this.handleKeyPress = this.handleKeyPress.bind(this)
        this.validate = this.validate.bind(this)

    }

    handleChange(event) {
        this.setState(
            {
                [event.target.name]
                    : event.target.value
            }
        )
    }

    signUpClicked() {
        let user = {
            username: this.state.username,
            password: this.state.password,
            role: "ROLE_USER"
        }

      
            UserDataService.createUser(user)
            this.setState({ showSuccessMessage: true })
    }

    // signUpClicked() {
    //     let user = {
    //         username: this.state.username,
    //         password: this.state.password,
    //         role: "ROLE_USER"
    //     }

    //     if (this.state.password === this.state.verifyPassword) {
    //         UserDataService.createUser(user)
    //         this.setState({ showSuccessMessage: true })
    //         this.setState({ hasSignUpFailed: false })
    //     } else {
    //         this.setState({ showSuccessMessage: false })
    //         this.setState({ hasSignUpFailed: true })
    //     }
    // }

    validate(values) {
        let errors = {}
        if (!values.username) {
            errors.username = 'Username can not be blank.'
        } else if (values.username.length < 3 || values.username.length > 50) {
            errors.username = 'Username must be between 3 - 50 characters in length'
        }

        if (!values.password) {
            errors.password = 'Password can not be blank.'
        } else if (values.password.length < 3 || values.password.length > 50) {
            errors.password = 'Password must be between 3 - 50 characters in length'
        }

        if (values.verifyPassword !== values.password) {
            errors.verifyPassword = 'Password do not match' 
        } 

        return errors
    }

    // handleKeyPress = e => {
    //     if (e.key === "Enter") {
    //         let user = {
    //             username: this.state.username,
    //             password: this.state.password,
    //             role: "ROLE_USER"
    //         }

    //         if (this.state.password === this.state.verifyPassword) {
    //             UserDataService.createUser(user)
    //             this.setState({ showSuccessMessage: true })
    //             this.setState({ hasSignUpFailed: false })
    //         } else {
    //             this.setState({ showSuccessMessage: false })
    //             this.setState({ hasSignUpFailed: true })
    //         }
    //     }
    // }



    render() {

        let {username, password, verifyPassword, showSuccessMessage, hasSignUpFailed } = this.state
        return (
            <div>


                <h1>Registration</h1>
            
                {this.state.showSuccessMessage && <div className="alert alert-success">Registration successful. Return to login page.</div>}
                <div className="container">

                    <Formik
                            initialValues={{ username, password, verifyPassword, showSuccessMessage, hasSignUpFailed }}
                        //sends ErrorMessages when validation fails only whens button clicked
                        //form only submited if validation passed 
                        //enable reinitialization on formic or it will
                        //not update initial values, default is false
                        onSubmit={this.signUpClicked}
                        validateOnChange={false}
                        validateonBlur={false}
                        validate={this.validate}
                        enableReinitialize={true}
                    >
                        {
                            (props) => (
                                <Form>

                                    <ErrorMessage name='username' component='div' className='alert alert-warning' />
                                    <ErrorMessage name='password' component='div' className='alert alert-warning' />
                                    <ErrorMessage name='verifyPassword' component='div' className='alert alert-warning' />
             


                                    <fieldset className='form-group'>
                                        <label>Username:</label>
                                        <Field className='form-control' type="text" name="username" value={this.state.username} onChange={this.handleChange} />
                                    </fieldset>
                                    <fieldset className='form-group'>
                                        <label>Password:</label>
                                        <Field className='form-control' type="password" name="password" value={this.state.password} onChange={this.handleChange} />
                                    </fieldset>
                                    <fieldset>
                                        <label>Verify Password</label>
                                        <Field className='form-control' type="password" name="verifyPassword" value={this.state.verifyPassword} onChange={this.handleChange} />
                                    </fieldset>


                                    <button type="submit" className='btn btn-success'>Sign up</button>
                                    {/* <button type='submit' className="btn btn-success" onClick={this.signUpClicked}>Sign Up</button> */}
                                </Form>
                            )
                        }
                    </Formik>


                </div>
            </div>
        )
    }
}

export default RegisterComponent