import React, { Component } from 'react'
// import moment from 'moment'
import { Formik, Form, Field, ErrorMessage } from 'formik';
import RecipeDataService from '../../api/recipes/RecipeDataService.js'
import AuthenticationService from './AuthenticationService.js'


class RecipeComponent extends Component {
    constructor(props) {
        super(props)

        this.state = {
            id: this.props.match.params.id,
            name: '',
            directions: '',
            ingredients: '',
            notes: ''
        }
        this.onSubmit = this.onSubmit.bind(this)
        this.validate = this.validate.bind(this)

    }
    //call api's in this function
    //Get specific recipe using usernamme and Id
    //then update the object
    componentDidMount() {

        if (this.state.id === -1) {
            return
        }

        let username = AuthenticationService.getLoggedInUser()
        RecipeDataService.retrieveRecipe(username, this.state.id)
            .then(response => this.setState({
                name: response.data.name,
                directions: response.data.directions,
                ingredients: response.data.ingredients,
                notes: response.data.notes
            }))
    }

    validate(values) {
        let errors = {}
        if (!values.name) {
            errors.name = 'Enter name'
        } else if (values.name.length < 2) {
            errors.directions = 'Name must be at least 2 characters in length'
        }

        if (!values.directions) {
            errors.directions = 'Enter directions'
        } else if (values.directions.length < 5) {
            errors.directions = 'Directions must be at least 5 characters in length'
        }

        if (!values.ingredients) {
            errors.ingredients = 'Enter ingredients'
        } else if (values.ingredients.length < 2) {
            errors.directions = 'Ingredients must be at least 2 characters in length'
        }

        return errors
    }

    //if successfuly updated redirect to list recipes page 
    onSubmit(values) {

        let username = AuthenticationService.getLoggedInUser()
        let recipe = {
            id: this.state.id,
            name: values.name,
            directions: values.directions,
            ingredients: values.ingredients,
            notes: values.notes
        }
        if (this.state.id === -1) {
            RecipeDataService.createeRecipe(username, recipe)
                .then(() => { this.props.history.push(`/recipes`) })

        } else {
            RecipeDataService.updateRecipe(username, this.state.id, recipe)
                .then(() => { this.props.history.push(`/recipes`) })

        
        }

    }

    render() {
        //destructuring 
        let { name, directions, ingredients, notes } = this.state

        return (

            <div>
                <h1>My Recipe</h1>
                <div className='container'>

                    {/* defining a method that accepts props as input 
                        and returns the html of the form */}
                    <Formik

                        // usually you would need to list initial values as key value pairs
                        // but if the key is the same as the value you only have to 
                        // list the value (name, directions, ingredients)
                        initialValues={{ name, directions, ingredients, notes }}

                        //sends ErrorMessages when validation fails only whens button clicked
                        //form only submited if validation passed 
                        //enable reinitialization on formic or it will
                        //not update initial values, default is false
                        onSubmit={this.onSubmit}
                        validateOnChange={false}
                        validateonBlur={false}
                        validate={this.validate}
                        enableReinitialize={true}
                    >
                        {
                            (props) => (
                                <Form>
                                    <ErrorMessage name='name' component='div' className='alert alert-warning' />
                                    <ErrorMessage name='directions' component='div' className='alert alert-warning' />
                                    <ErrorMessage name='ingredients' component='div' className='alert alert-warning' />
                                    <fieldset className='form-group'>
                                        <label>Name</label>
                                        <Field className='form-control' type='text' name='name' />
                                    </fieldset>

                                    <fieldset className='form-group'>
                                        <label>Directions</label>
                                        <Field className='form-control' type='text' name='directions' />
                                    </fieldset>

                                    <fieldset className='form-group'>
                                        <label>Ingredients</label>
                                        <Field className='form-control' type='text' name='ingredients' />
                                    </fieldset>
                                    <fieldset className='form-group'>
                                        <label>Notes (Optional)</label>
                                        <Field className='form-control' type='text' name='notes' />
                                    </fieldset>
                                    <button type="submit" className='btn btn-success'>Save</button>
                                </Form>
                            )
                        }
                    </Formik>

                </div>

            </div>
        )
    }
}

export default RecipeComponent