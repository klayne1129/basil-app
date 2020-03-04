class AuthenticationService {

    // whenever a user logs in successfully, send that data to session storage
    registerSuccessfulLogin(username, password) {
        sessionStorage.setItem('authenticatedUser', username)
        console.log("registered login")
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

}

//for react components export the class directly
//for helper services, export an instance of the class  as an object
export default new AuthenticationService()