import React, { Component } from 'react'
import AuthenticationService from './AuthenticationService.js'
import RecipeDataService from '../../api/recipes/RecipeDataService.js'
import {Card, ListGroup, CardColumns, ButtonGroup, ToggleButton, Badge} from 'react-bootstrap';
import {Link} from 'react-router-dom'
import logo from "./logo2.png"


const Recipe = props => (
    
    <Link to={'/view/' + props.recipe.id} className="link">
    <Card className="shadow grow"bg='light' style={{ marginTop: 10}} >
        
        
            
        
               <Card.Header className='h5'>{props.recipe.title} <Badge variant='success'>{props.recipe.mealType}</Badge></Card.Header> 
                    <ListGroup variant="flush" >
                    
                    </ListGroup>
            
        
    </Card>
    </Link>
  

)

class SearchComponent extends Component {
    constructor(props) {
        super(props)
        this.state = {
            recipes: [],
            filterByField: "all",
            filterByTerm: ''
        }
        this.refreshRecipes = this.refreshRecipes.bind(this);
        this.handleFilter = this.handleFilter.bind(this);
        this.handleTerm = this.handleTerm.bind(this);
    }

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
    
// model code

//This function looks at the state's filterByField and filterByTerm and then returns a list of Recipe objects based on the parameters
recipeList() {
    let filterBy = this.state.filterByField
    let searchterm = this.state.filterByTerm.replace(/^\s+|\s+$/g, '') 
    return this.state.recipes.map(function(currentRecipe, i){


        if ((filterBy === 'all' && (currentRecipe.title.toLowerCase().includes(searchterm.toLowerCase()) 
                                 || currentRecipe.ingredients.toLowerCase().includes(searchterm.toLowerCase())
                                 || currentRecipe.mealType.toLowerCase().includes(searchterm.toLowerCase()))) 
            || (filterBy === 'title' && currentRecipe.title.toLowerCase().includes(searchterm.toLowerCase()))
            || (filterBy === 'ingredients' && currentRecipe.ingredients.toLowerCase().includes(searchterm.toLowerCase()))
            || (filterBy === 'mealType' && currentRecipe.mealType.toLowerCase().includes(searchterm.toLowerCase())))
        return <Recipe recipe={currentRecipe} key={i} />
    });
}
//This will handle any changes to the search category
handleFilter(e) {
    this.setState({
        filterByTerm: '',
        filterByField: e.target.value
    })
}
//Handles any changes to search term
handleTerm(e) {
    this.setState({
        filterByTerm: e.target.value
    })
}


    render() {
        //Creates a searchbar variable
        let searchBar;

        //if the search field is filtering by recipe category, it will set searchBar to a group of radio buttons
        if (this.state.filterByField === 'mealType') {
            searchBar =
            <div className='form-group row'><ButtonGroup toggle className="mt-1 ml-3" >
            
                    <ToggleButton type="radio" 
                            name="radio" 
                            value="breakfast" 
                            checked={this.state.filterByTerm === "breakfast"}
                            onChange={this.handleTerm}
                            variant='primary'>
                    Breakfast
                    </ToggleButton>
                    <ToggleButton type="radio" 
                            name="radio" 
                            value="lunch" 
                            checked={this.state.filterByTerm === "lunch"}
                            onChange={this.handleTerm}
                            variant='primary'>
                    Lunch
                    </ToggleButton>
                    <ToggleButton type="radio" 
                            name="radio" 
                            value="dessert" 
                            checked={this.state.filterByTerm === "dessert"}
                            onChange={this.handleTerm}
                            variant='primary'>
                    Desserts
                    </ToggleButton>
                    <ToggleButton type="radio" 
                            name="radio" 
                            value="snack" 
                            checked={this.state.filterByTerm === "snack"}
                            onChange={this.handleTerm}
                            variant='primary'>
                    Snacks
                    </ToggleButton><ToggleButton type="radio" 
                            name="radio" 
                            value="dinner" 
                            checked={this.state.filterByTerm === "dinner"}
                            onChange={this.handleTerm}
                            variant='primary'>
                    Dinner
                    </ToggleButton>
                    
    
                </ButtonGroup></div>
        
        //if search Field is set to anything other than category, it sets searchBar to a text input that will live update due to how the onChange attribute works
        } else {
            searchBar =
            <div className='form-group row'>
                <div className='col-xs-4'>
                    <input placeholder='SearchTerm'
                           value ={this.state.filterByTerm}
                           className='inputmargin form-control'
                           type='text'
                           onChange={this.handleTerm}>
                    </input>
                </div>
            </div>
        }

        return (
            
            <div className='container pt-4' role='main'>
                <br></br>
                {/* <h3 className='mt-3 ml-2 display-3'>Basil</h3> */}
                <img src={logo} width="70" alt="github.com/klayne1129"/>
                
                <div className='container '>
                    <h5>Search by:</h5>
                    <ButtonGroup toggle className="" >
                        <ToggleButton type="radio" 
                                name="radio" 
                                defaultChecked 
                                value="all" 
                                checked={this.state.filterByField === "all"}
                                onChange={this.handleFilter}
                                variant='success'>
                                    
                        All
                        </ToggleButton>
                        <ToggleButton type="radio" 
                                name="radio" 
                                defaultChecked 
                                value="title" 
                                checked={this.state.filterByField === "title"}
                                onChange={this.handleFilter}
                                variant='success'>
                        Name
                        </ToggleButton>
                        <ToggleButton type="radio" 
                                name="radio" 
                                defaultChecked 
                                value="ingredients" 
                                checked={this.state.filterByField === "ingredients"}
                                onChange={this.handleFilter}
                                variant='success'>
                        Ingredients
                        </ToggleButton>
                        <ToggleButton type="radio" 
                                name="radio" 
                                defaultChecked 
                                value="mealType" 
                                checked={this.state.filterByField === "mealType"}
                                onChange={this.handleFilter}
                                variant='success'>
                        Meal Type
                        </ToggleButton>
        
                    </ButtonGroup>

                    
                    {searchBar}
                    

                
                </div>
                    
                    
                    
                <CardColumns>{this.recipeList()}</CardColumns>
                {/* <script src='script.js'></script> */}
            </div>
        )
    }
}








export default SearchComponent