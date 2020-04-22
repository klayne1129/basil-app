import React, { Component } from 'react'
import AuthenticationService from './AuthenticationService.js'
import RecipeDataService from '../../api/recipes/RecipeDataService.js'


class ViewRecipeComponent extends Component {
    constructor(props) {
        super(props)
        this.state = {
            id: this.props.match.params.id,
            title: '',
            directions: '',
            ingredients: '',
            notes: '',
            mealType: '',
            image: '',
            tags: '',

        }
        this.refreshRecipe = this.refreshRecipe.bind(this);
        this.printRecipeClicked = this.printRecipeClicked.bind(this);
        this.updatrecipeClicked = this.updateRecipeClicked.bind(this);
        this.deleteRecipeClicked = this.deleteRecipeClicked.bind(this);
    }
    componentDidMount() {

        console.log("component did Mount")
        this.refreshRecipe();
    }

    refreshRecipe() {

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
                image: response.data.image,
                tags: response.data.tags
            }))
    }

    printRecipeClicked(id) {
        console.log("print")
        window.print();
    }
    //edit button clicked
    // push to that specific recipe page by id to edit
    updateRecipeClicked(id) {
        console.log('update ' + id)
        this.props.history.push(`/recipes/${this.state.id}`)
    }
    //    deletes recipe with username and id match, refreshes the recipe list
    deleteRecipeClicked(id) {
        let username = AuthenticationService.getLoggedInUser()
        // console.log(id + " " + username)
        RecipeDataService.deleteRecipe(username, id)
        this.props.history.push(`/recipes`)

    }
    render() {



        return (


            <div className='container pt-4' role='main'>
                <div className="row">
                    <button className="btn btn-dark" value="Print" onClick={() => this.printRecipeClicked()}>Print</button>
                    <button className="btn btn-primary" onClick={() => this.updateRecipeClicked(this.state.id)} >Edit</button>
                    <button className="btn btn-danger" onClick={() => this.deleteRecipeClicked(this.state.id)} >Delete</button>
                </div>
                <div>

                    <div>
                        <h1>{this.state.title}</h1>
                        <img className='recipelistimage' src={this.state.image} alt='recipe'></img>
                    </div>

                    <div>
                        <h2>Ingredients:</h2>
                        <p className='lead'><ul>{this.state.ingredients.split('\n').map((item, key) => {
                            return <li key={key}>{item}</li>
                        })}</ul></p>

                        <h2>Steps:</h2>
                        <p className='lead'><ol>{this.state.directions.split('\n').map((item, key) => {
                            return <li key={key}>{item}</li>
                        })}</ol></p>

                        <h2>Tags:</h2>
                        <p className='lead'><ul>{this.state.tags.split(',').map((item, key) => {
                            return <li key={key}>{item}</li>
                        })}</ul></p>

                        <h2>Notes:</h2>
                        <p className='lead'><ul>{this.state.notes}</ul></p>

                        <h2>Meal Type:</h2>
                        <p className='lead'><ul>{this.state.mealType}</ul></p>


                    </div>

                </div>
                <div>


                </div>
            </div>
        )
    }
}

export default ViewRecipeComponent