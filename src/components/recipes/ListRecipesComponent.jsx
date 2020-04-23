import React, { Component } from 'react'
import AuthenticationService from './AuthenticationService.js'
import RecipeDataService from '../../api/recipes/RecipeDataService.js'
import { Card, ListGroup, CardColumns, Badge } from 'react-bootstrap';
import { Link } from 'react-router-dom'
import logo from "./logo2.png"


const Recipe = props => (

    <Link to={'/view/' + props.recipe.id} className="link">
        <Card className="shadow grow" bg='light' style={{ marginTop: 10 }} >


            <Card.Img variant='top' src={props.recipe.image}></Card.Img>

            <Card.Header className='h5'>{props.recipe.title} <Badge variant='secondary'>{props.recipe.mealType}</Badge></Card.Header>
            <ListGroup variant="flush" >
            </ListGroup>
        </Card>
    </Link>

)

class ListRecipesComponent extends Component {
    constructor(props) {
        super(props)
        this.state = {
            recipes: []
        }
        this.refreshRecipes = this.refreshRecipes.bind(this);
        this.addRecipeClicked = this.addRecipeClicked.bind(this);
       

    }

    componentDidMount() {

        console.log("component did Mount")
        this.refreshRecipes();
    }

    refreshRecipes() {

        //use the username by using authentication service
        let username = AuthenticationService.getLoggedInUser()
        RecipeDataService.retrieveAllRecipes(username)
            .then(
                response => {
                    // console.log(response)
                    this.setState({ recipes: response.data })
                }
            )
    }

    
    recipeList() {
        
        return this.state.recipes.map(function (currentRecipe, i) {

            return <Recipe recipe={currentRecipe} key={i} />
           
        });
    }
    // push to that new recipe page by id to add
    addRecipeClicked(id) {
        this.props.history.push(`/recipes/-1`)
    }
    
    render() {

        return (

            <div className='container pt-4' role='main'>
                <div className="row">
                    <button className='btn btn-dark' onClick={this.addRecipeClicked}>Add Recipe</button>

                </div>
                <br></br>
             
                <img src={logo} width="200" alt="github.com/klayne1129" />
                <br></br>


                <CardColumns>{this.recipeList()}

                </CardColumns>
                {/* <script src='script.js'></script> */}


            </div>

        )
    }
}

export default ListRecipesComponent


//ALTERNATE VIEW: TABLE FORMAT: 

// import React, { Component } from 'react'
// import RecipeDataService from '../../api/recipes/RecipeDataService.js'
// import AuthenticationService from './AuthenticationService.js'



// class ListRecipesComponent extends Component {

//     constructor(props) {
//         super(props)
//         this.state = {
//             recipes: [],
//             message: null
//         }
//         this.updatrecipeClicked = this.updateRecipeClicked.bind(this);
//         this.viewRecipeClicked = this.viewRecipeClicked.bind(this);
//         this.deleteRecipeClicked = this.deleteRecipeClicked.bind(this);
//         this.refreshRecipes = this.refreshRecipes.bind(this);
//         this.addRecipeClicked = this.addRecipeClicked.bind(this);
//     }

//     //dont call initial api in the constructor
//     //if you do the state doesn't reinitialize until the api is finished 
//     componentDidMount() {

//         console.log("component did Mount")
//         this.refreshRecipes();
//     }

//     refreshRecipes() {

//         //use the username by using authentication service
//         let username = AuthenticationService.getLoggedInUser()
//         RecipeDataService.retrieveAllRecipes(username)
//             .then(
//                 response => {
//                     // console.log(response)
//                     this.setState({ recipes: response.data })
//                 }
//             )
//     }

//     // deletes recipe with username and id match, refreshes the recipe list
//     deleteRecipeClicked(id) {
//         let username = AuthenticationService.getLoggedInUser()
//         // console.log(id + " " + username)
//         RecipeDataService.deleteRecipe(username, id)
//             .then(
//                 response => {
//                     this.setState({ message: `Deletion of recipe ${id} successful.` })
//                     this.refreshRecipes()
//                 }
//             )
//     }
//     // push to that new recipe page by id to add
//     addRecipeClicked(id) {
//         this.props.history.push(`/recipes/-1`)
//     }

//     //ROUTE  /recipes/{$id}
//     //edit button clicked
//     // push to that specific recipe page by id to edit
//     updateRecipeClicked(id) {
//         console.log('update ' + id)
//         this.props.history.push(`/recipes/${id}`)
//     }

//     viewRecipeClicked(id) {
//         console.log('update ' + id)
//         this.props.history.push(`/view/${id}`)
//     }

//     //Right now when the button is clicked it just wants to print the entire list page
//     //should redirect to a single recipe page and THEN print



//     render() {
//         return (
//             <div>
//                 <h1>My List of Recipes</h1>
//                 {this.state.message && <div className="alert alert-success">{this.state.message}</div>}
//                 <div className="container">
//                     <table className="table">
//                         <thead>
//                             <tr>
//                                 <th>Title</th>
//                                 <th>Notes</th>
//                                 <th>Meal Type</th>
//                                 <th>View</th>
//                                 <th>Edit</th>
//                                 <th>Delete</th>


//                             </tr>
//                         </thead>
//                         <tbody>
//                             {
//                                 this.state.recipes.map(
//                                     recipe =>


//                                         <tr key={recipe.id}>
//                                             <td>{recipe.title}</td>
//                                             <td>{recipe.notes}</td>
//                                             <td>{recipe.mealType}</td>
//                                             <td><button className="btn btn-dark" onClick={() => this.viewRecipeClicked(recipe.id)} >View</button></td>
//                                             <td><button className="btn btn-primary" onClick={() => this.updateRecipeClicked(recipe.id)} >Edit</button></td>
//                                             <td><button className="btn btn-danger" onClick={() => this.deleteRecipeClicked(recipe.id)} >Delete</button></td>
//                                             {/* <td><button className="btn btn-success" value="Print" onClick={() => this.printRecipeClicked()}>Print</button></td> */}

//                                         </tr>
//                                 )
//                             }

//                         </tbody>
//                     </table>

//                     <div className="row">
//                         <button className='btn btn-dark' onClick={this.addRecipeClicked}>Add Recipe</button>

//                     </div>
//                 </div>
//             </div>
//         )
//     }
// }

// export default ListRecipesComponent