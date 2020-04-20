import React, { Component } from 'react'

import { Formik, Form, Field, ErrorMessage } from 'formik';
import RecipeDataService from '../../api/recipes/RecipeDataService.js'
import AuthenticationService from './AuthenticationService.js'




class RecipeComponent extends Component {
    constructor(props) {
        super(props)

        this.state = {
            id: this.props.match.params.id,
            title: '',
            directions: '',
            ingredients: '',
            notes: '',
            mealType: 'selectOne',
            image: ''
        }
        // this.onChangeImage = this.onChangeImage.bind(this);
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
                title: response.data.title,
                directions: response.data.directions,
                ingredients: response.data.ingredients,
                notes: response.data.notes,
                mealType: response.data.mealType,
                image: response.data.image
            }))
    }

    

    // if no value present 'enter blank'
    // custom error message using errorMessage props
    //errororMessage below unde render()

    validate(values) {
        let errors = {}
        if (!values.title) {
            errors.title = 'Enter title'
        } else if (values.title.length < 2) {
            errors.title = 'Title must be at least 2 characters in length'
        }

        if (!values.directions) {
            errors.directions = 'Enter directions'
        } else if (values.directions.length < 5) {
            errors.directions = 'Directions must be at least 5 characters in length'
        }

        if (!values.ingredients) {
            errors.ingredients = 'Enter ingredients'
        } else if (values.ingredients.length < 2) {
            errors.ingredients = 'Ingredients must be at least 2 characters in length'
        }

        if (values.mealType === "selectOne") {
            errors.mealType = 'Select a meal type'
        } 

        return errors
    }

    // onChangeImage(e) {
    //     this.setState({image: e.target.value})
    //   }

    //if successfuly updated redirect to list recipes page 
    onSubmit(values) {

        let username = AuthenticationService.getLoggedInUser()

        let recipe = {
            id: this.state.id,
            title: values.title,
            directions: values.directions,
            ingredients: values.ingredients,
            notes: values.notes,
            mealType: values.mealType,
            image: values.image
        }

        if (this.state.id === -1) {
            RecipeDataService.createRecipe(username, recipe)
                .then(() => this.props.history.push(`/recipes`))

        } else {
            RecipeDataService.updateRecipe(username, this.state.id, recipe)
                .then(() => this.props.history.push(`/recipes`))
        }

    }

    render() {
        //destructuring 
        let { title, directions, ingredients, notes, mealType, image} = this.state

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
                        initialValues={{ title, directions, ingredients, notes, mealType, image}}

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

                                    <ErrorMessage name='title' component='div' className='alert alert-warning' />
                                    <ErrorMessage name='directions' component='div' className='alert alert-warning' />
                                    <ErrorMessage name='ingredients' component='div' className='alert alert-warning' />
                                    <ErrorMessage name='mealType' component='div' className='alert alert-warning' />

                                    <fieldset className='form-group'>
                                        <label>Title</label>
                                        <Field className='form-control' type='text' name='title' />
                                    </fieldset>

                                    <fieldset className='form-group'>
                                        <label>Directions</label>
                                        <Field as='textarea' className='form-control' type='text' name='directions' id='textBox' />
                                        <p>Please press enter after each step except the last step. Each step should be on it's own line.</p>
                                    </fieldset>

                                    <fieldset className='form-group'>
                                        <label>Ingredients</label>
                                        <Field as='textarea' className='form-control' type='text' name='ingredients' id='textBox'/>
                                        <p>Please press enter after each ingredient except the last one. Each ingredient should be on it's own line.</p>
                                    </fieldset>

                                    <fieldset className='form-group'>
                                        <label>Notes (Optional)</label>
                                        <Field className='form-control' type='text' name='notes' id='textBox'/>
                                    </fieldset>
 
                                    <fieldset className='form-group'>
                                        <label>Meal Type</label>
                                            <Field as='select' name='mealType'>
                                                <option selected value='selectOne'>Select One</option>
                                                <option value='breakfast'>Breakfast</option>
                                                <option value='lunch'>Lunch</option>
                                                <option value='dinner'>Dinner</option>
                                                <option value='snack'>Snack</option>
                                                <option value='dessert'>Dessert</option>
                                             </Field>
                                    </fieldset>

                                    <fieldset className="form-group">
                                        <label>Image URL(Optional)</label>
                                        <Field type="text" className="form-control" name='image'/>
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

