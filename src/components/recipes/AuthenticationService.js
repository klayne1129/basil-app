import axios from 'axios'
class AuthenticationService {
   

        //connect to backend BasicAuthenticationController using path
        executeBasicAuthenticationService(username, password) {
            
            return axios.get('http://localhost:8080/basicauth', 
                {headers: {authorization: this.createBasicAuthToken(username,password)}})
        }

        // need to send a post request with the username and password
        executeJWTAuthenticationService(username, password) {
            
            return axios.post('http://localhost:8080/authenticate', {
                username,
                password
            })
        }

        createBasicAuthToken(username, password){
            return 'Basic ' + window.btoa(username + ":" + password)
        }

    // whenever a user logs in successfully, send that data to session storage
    registerSuccessfulLogin(username, password) {

        // console.log("registered login")
        sessionStorage.setItem('authenticatedUser', username)
        this.setupAxiosInterceptors(this.createBasicAuthToken(username,password))

    }

    registerSuccessfulLoginForJwt(username,token) {
        sessionStorage.setItem('authenticatedUser', username)
        this.setupAxiosInterceptors(this.createJWTToken(token))
    }

    createJWTToken(token) {
        return 'Bearer ' +  token
    }

    //when a user logs out the value from session storage is removed
    logout() {
        sessionStorage.removeItem('authenticatedUser')
    }

    //checks to see if a user has logged in to app
    isUserLoggedIn() {
        let user = sessionStorage.getItem('authenticatedUser')
        if (user=== null) {
            return false
        } 
        return true      
    }

    getLoggedInUser() {
        let user = sessionStorage.getItem('authenticatedUser')
        if (user=== null) {
            return ''
        } 
        return user
    }

//this will add an dditional parameter to axios get method call to make sure it sends an 
//authorization header
// Method adding an intercepter (see axios github documentation) by creating a simple method that
//adds an authorization header to every request.
// you want to call this method at log in.
    setupAxiosInterceptors(token) { 
        axios.interceptors.request.use(
         (config) => {
             if(this.isUserLoggedIn()){
                config.headers.authorization = token
             }
             return config
         }
        )
    }
}

//for react components export the class directly
//for helper services, export an instance of the class  as an object
export default new AuthenticationService()