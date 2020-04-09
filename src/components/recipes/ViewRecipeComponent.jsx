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
            mealType: ''
        }
        this.refreshRecipe = this.refreshRecipe.bind(this);
        this.printRecipeClicked = this.printRecipeClicked.bind(this);
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
                mealType: response.data.mealType
            }))
    }

    printRecipeClicked(id) {
        console.log("print")
        window.print();
    }


    render() {
        return (
            <div>
                <div>

                    <div>
                        <h1>{this.state.title}</h1>
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

                        <h2>Notes:</h2>
                        <p><ul>{this.state.notes}</ul></p>

                        <h2>Meal Type:</h2>
                        <p><ul>{this.state.mealType}</ul></p>


                    </div>

                </div>
                <div>
                        <button className="btn btn-success" value="Print" onClick={() => this.printRecipeClicked()}>Print</button>
                    </div>
            </div>
        )
    }
}








export default ViewRecipeComponent