import React, { Component } from 'react'
import AuthenticationService from './AuthenticationService.js'
import RecipeDataService from '../../api/recipes/RecipeDataService.js'
import { Card, ListGroup, CardColumns, Badge } from 'react-bootstrap';
import { Link } from 'react-router-dom'
import logo from "./logo2.png"

//list view of recipes
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
