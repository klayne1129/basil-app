import Axios from "axios"
import {JPA_API_URL} from '../../Constants.js'


class RecipeDataService {
    //passing name as a parameter and removing the hardcode makes it customizable for users

    //retrieves all the recipes the current user has saved.
    retrieveAllRecipes(name) {
        // console.log('executed service')
        //tell promise to get desired url we created in java and eclipse
        return Axios.get(`${JPA_API_URL}/users/${name}/recipes`)   
    }

    //retireves a specific recicipe using the username and id of recipe
    retrieveRecipe(name, id) {
        
        return Axios.get(`${JPA_API_URL}/users/${name}/recipes/${id}`)   
    }

    //delete recipe
    deleteRecipe(name, id) {
        // console.log('executed service')
        //tell promise to get desired url we created in java and eclipse
        return Axios.delete(`${JPA_API_URL}/users/${name}/recipes/${id}`)   
    }

    //
    updateRecipe(name, id, recipe) {
        // console.log('executed service')
        //tell promise to get desired url we created in java and eclipse
        return Axios.put(`${JPA_API_URL}/users/${name}/recipes/${id}`, recipe)   
    }

    createRecipe(name, recipe) {
        // console.log('executed service')
        //tell promise to get desired url we created in java and eclipse
        return Axios.post(`${JPA_API_URL}/users/${name}/recipes`, recipe)   
    }

}

export default new RecipeDataService()