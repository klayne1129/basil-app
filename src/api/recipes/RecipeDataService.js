import Axios from "axios"

class RecipeDataService {
    //passing name as a parameter and removing the hardcode makes it customizable for users
    retrieveAllRecipes(name) {
        // console.log('executed service')
        //tell promise to get desired url we created in java and eclipse
        return Axios.get(`http://localhost:8080/users/${name}/recipes`)   
    }

}

export default new RecipeDataService()