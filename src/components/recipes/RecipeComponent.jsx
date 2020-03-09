import React, {Component} from 'react'
import moment from 'moment'
import { Formik, Form, Field, ErrorMessage } from 'formik';

class RecipeComponent extends Component {
    constructor(props){
        super(props)

        this.state = {
            id : this.props.match.params.id,
            name : "Cooked Chicken",
            directions : "Cook it.",
            ingredients : "a chicken"
        }
        this.onSubmit = this.onSubmit.bind(this)
        this.validate = this.validate.bind(this)
        
    }

    validate(values){
        let errors = {}
       if(!values.name){
           errors.name = 'Enter name'
       } else if(values.name.length<2){
            errors.directions = 'Name must be at least 2 characters in length'
       }

       if(!values.directions){
            errors.directions = 'Enter directions'
        } else if(values.directions.length<5){
            errors.directions = 'Directions must be at least 5 characters in length'
        }

        if(!values.ingredients){
            errors.ingredients = 'Enter ingredients'
        } else if(values.ingredients.length<2){
            errors.directions = 'Ingredients must be at least 2 characters in length'
        }

        return errors
    }

    onSubmit(values){
        console.log(values);
    }

    render() {
        //destructuring 
        let {name, directions, ingredients} = this.state
    
        return (
    
            <div>
                <h1>Recipe</h1>
                <div className='container'>

                    {/* defining a method that accepts props as input 
                        and reutns the html of the form */}
                    <Formik  

                        // usually you would need to list IVs as key value pairs
                        // but if the key is the same as the value you only have to 
                        // list the value (name, directions, ingredients)
                        initialValues={{name, directions,ingredients}}

                        //sends ErrorMessages when validation fails only onSubmit 
                        onSubmit={this.onSubmit}
                        validateOnChange={false}
                        validateonBlur={false}
                        validate={this.validate}
                    >
                        {
                            (props) => (
                                <Form>
                                    <ErrorMessage name='name' component='div' className='alert alert-warning'/>
                                    <ErrorMessage name='directions' component='div' className='alert alert-warning'/>
                                    <ErrorMessage name='ingredients' component='div' className='alert alert-warning'/>
                                    <fieldset className='form-group'>
                                        <label>Name</label>
                                       <Field className='form-control' type='text' name='name'/>
                                    </fieldset>

                                    <fieldset className='form-group'>
                                        <label>Directions</label>
                                       <Field className='form-control' type='text' name='directions'/>
                                    </fieldset>

                                    <fieldset className='form-group'>
                                        <label>Ingredients</label>
                                       <Field className='form-control' type='text' name='ingredients'/>
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