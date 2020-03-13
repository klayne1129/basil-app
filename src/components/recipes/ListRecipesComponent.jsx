import React, {Component} from 'react'
import RecipeDataService from '../../api/recipes/RecipeDataService.js'
import AuthenticationService from './AuthenticationService.js'

class ListRecipesComponent extends Component{
    
    constructor(props){
        super(props)
        this.state = {
            recipes : [],
            message: null
        }
        this.updatrecipeClicked = this.updateRecipeClicked.bind(this);
        this.deleteRecipeClicked = this.deleteRecipeClicked.bind(this);
        this.refreshRecipes = this.refreshRecipes.bind(this);
        this.addRecipeClicked = this.addRecipeClicked.bind(this);
    }

    //dont call initial api in the constructor
    //if you do the state doesn't reinitialize until the api is finished 
    componentDidMount() {

        console.log("component did Mount")
        this.refreshRecipes();
    }

    refreshRecipes(){

        //use the username by using authentication service
        let username = AuthenticationService.getLoggedInUser()
        RecipeDataService.retrieveAllRecipes(username)
            .then(
                response => {
                    // console.log(response)
                    this.setState({recipes : response.data})
                }
            )
    }

    deleteRecipeClicked(id) {
        let username = AuthenticationService.getLoggedInUser()
        // console.log(id + " " + username)
        RecipeDataService.deleteRecipe(username, id)
        .then (
            response => {
                this.setState({message : `Deletion of recipe ${id} successful.`})
                this.refreshRecipes()
            }
        )
    }

    addRecipeClicked(id) {
        this.props.history.push(`/recipes/-1`)
    }

    //ROUTE  /recipes/{$id}
    updateRecipeClicked(id) {
        console.log('update ' + id)
        this.props.history.push(`/recipes/${id}`)

        // let username = AuthenticationService.getLoggedInUser()
        // // console.log(id + " " + username)
        // RecipeDataService.deleteRecipe(username, id)
        // .then (
        //     response => {
        //         this.setState({message : `Delete of recipe ${id} successful.`})
        //         this.refreshRecipes()
        //     }
        // )
    }

    render() {
        return  (   
                     <div>
                        <h1>List of Recipes</h1>
                        {this.state.message && <div className="alert alert-success">{this.state.message}</div>}
                        <div className="container">
                            <table className="table">
                                <thead>
                                    <tr>
                                        <th>Name</th>
                                        <th>Directions</th>
                                        <th>Ingredients</th>
                                        <th>Notes</th>
                                        <th>Edit</th>
                                        <th>Delete</th>

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
                                                <td>{recipe.notes}</td>
                                                <td><button className="btn btn-success" onClick={() => this.updateRecipeClicked(recipe.id)} >Edit</button></td>
                                                <td><button className="btn btn-warning" onClick={() => this.deleteRecipeClicked(recipe.id)} >Delete</button></td>
                                            
                                            </tr>
                                        )
                                    }

                                </tbody>
                            </table>
                            <div className="row">
                                <button className='btn btn-success' onClick={this.addRecipeClicked}>Add</button>

                            </div>
                        </div>
                    </div>
                )
    }
}

export default ListRecipesComponent