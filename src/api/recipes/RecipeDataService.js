import Axios from "axios"

class RecipeDataService {
    //passing name as a parameter and removing the hardcode makes it customizable for users
    retrieveAllRecipes(name) {
        // console.log('executed service')
        //tell promise to get desired url we created in java and eclipse
        return Axios.get(`http://localhost:8080/users/${name}/recipes`)   
    }

    retrieveRecipe(name, id) {
        
        return Axios.get(`http://localhost:8080/users/${name}/recipes/${id}`)   
    }

    deleteRecipe(name, id) {
        // console.log('executed service')
        //tell promise to get desired url we created in java and eclipse
        return Axios.delete(`http://localhost:8080/users/${name}/recipes/${id}`)   
    }

    updateRecipe(name, id, recipe) {
        // console.log('executed service')
        //tell promise to get desired url we created in java and eclipse
        return Axios.put(`http://localhost:8080/users/${name}/recipes/${id}`, recipe)   
    }

    createRecipe(name, recipe) {
        // console.log('executed service')
        //tell promise to get desired url we created in java and eclipse
        return Axios.post(`http://localhost:8080/users/${name}/recipes`, recipe)   
    }

}

export default new RecipeDataService()