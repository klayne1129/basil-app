import Axios from "axios"
import {JPA_API_URL} from '../../Constants.js'

class MealTypeDataService {

    retrieveMealType(name) {
        
        return Axios.get(`${JPA_API_URL}/users/${name}/hello`)   
    }
}

export default new MealTypeDataService()