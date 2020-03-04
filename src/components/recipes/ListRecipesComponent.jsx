import React, {Component} from 'react'


class ListRecipesComponent extends Component{
    // hardcoding some table information for learning. Will replace
    constructor(props){
        super(props)
        this.state = {
            recipes : [
                    {id:1, name:"French Toast", directions: "Make it good.", ingredients: "4 eggs, 2/3 cups of milk, 8 slices of bread, butter, maple syrup"}, 
                    {id:2, name:"Scrambled Eggs", directions: "Step 1 beat eggs. Step 2 fry them.", ingredients: "2 eggs"},
                    {id:4, name:"Cereal", directions: "Step 1 add cereal to bowl. Step 2 add milk to bowl.", ingredients: "cereal, milk"}
                ]
        }
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