import React, {Component} from 'react'
import RecipeDataService from '../../api/recipes/RecipeDataService.js'
import AuthenticationService from './AuthenticationService.js'

class ListRecipesComponent extends Component{
    // hardcoding some table information for learning. Will replace
    constructor(props){
        super(props)
        this.state = {
            recipes : []
        }
    }

    //dont call initial api in the constructor
    //if you do the state doesn't reinitialize until the api is finished 
    componentDidMount() {

        //use the username by using authentication service
        let username = AuthenticationService.getLoggedInUser
        RecipeDataService.retrieveAllRecipes(username)
            .then(
                response => {
                    // console.log(response)
                    this.setState({recipes : response.data})
                }
            )
    }
    render() {
        return  (   
                     <div>
                        <h1>List of Recipes</h1>
                        <div className="container">
                            <table className="table">
                                <thead>
                                    <tr>
                                        <th>Name</th>
                                        <th>Directions</th>
                                        <th>Ingredients</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {
                                        this.state.recipes.map (
                                            recipe =>

                                        
                                            <tr key={recipe.id}>
                                                <td>{recipe.name}</td>
                                                <td>{recipe.directions}</td>
                                                <td>{recipe.ingredients}</td>
                                            
                                            </tr>
                                        )
                                    }

                                </tbody>
                            </table>
                        </div>
                    </div>
                )
    }
}

export default ListRecipesComponent