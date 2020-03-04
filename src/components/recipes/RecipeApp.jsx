import React, {Component} from 'react'
import {BrowserRouter as Router, Route, Switch, Link} from 'react-router-dom'
import { removeTypeDuplicates } from '@babel/types'
import AuthenticationService from './AuthenticationService.js'
import AuthenticatedRoute from './AuthenticatedRoute.jsx'

class RecipeApp extends Component {
    render() {
        return (
            <div className="RecipeApp">

                {/* allows you to type in browser to route to specific pages */}
                <Router>
                    <>
                        <HeaderComponent/>
                        {/* switch makes sure only one route is active at a time */}
                        {/* AuthenticatedRoute prevents unathenticated users from trying 
                        to access restricted pages via typing in the browser */}
                        <Switch>
                            <Route path="/" exact component={LoginComponent}/>
                            <Route path="/login" component={LoginComponent}/>
                            <AuthenticatedRoute path="/welcome/:name" component={WelcomeComponent}/>
                            <AuthenticatedRoute path="/recipes" component={ListRecipesComponent}/>
                            <AuthenticatedRoute path="/logout" component={LogoutComponent}/>
                            <Route component={ErrorComponent}/>
                        </Switch>
                        <FooterComponent/>
                    </>
                </Router>
                {/* <LoginComponent/>
                <WelcomeComponent/> */}
            </div>
            
        )
    }
}

//the nav bar basic code
//menu links enabled/disabled based on user authentication
class HeaderComponent extends Component {
    render() {

        const isUserLoggedIn = AuthenticationService.isUserLoggedIn()
        // console.log(isUserLoggedIn);

        return (
            <header>
                <nav className="navbar navbar-expand-md navbar-dark bg-dark">
                    <div className="navbar-brand">
                        <ul className="navbar-nav">
                            {isUserLoggedIn && <li><Link to="/welcome/Basil" className="nav-link">Basil</Link></li>}
                        </ul>
                        </div>
                    <ul className="navbar-nav"> 
                        {isUserLoggedIn && <li><Link to="/welcome/Basil" className="nav-link">Home</Link></li>}
                        {isUserLoggedIn && <li><Link to="/recipes" className="nav-link">Recipes</Link></li>}
                    </ul>
                    <ul className="navbar-nav navbar-collapse justify-content-end">
                        {!isUserLoggedIn && <li><Link to="/login" className="nav-link">Login</Link></li>}
                        {isUserLoggedIn && <li><Link to="/logout" className="nav-link" onClick={AuthenticationService.logout}>Logout</Link></li>}
                    </ul>
                </nav>
            </header>
        )
    }
}

class LogoutComponent extends Component {
    render() {
        return (
            <>
                <h1>You are logged out.</h1>
                <div className="container">Thanks for using Basil!</div>
            </>
        )
    }
}

class FooterComponent extends Component {
    render() {
        return (
            <footer className="footer">
                <span className="text-muted">Alrights Reserved 2020 @Basil.com</span>
            </footer>
        )
    }
}

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

class ErrorComponent extends Component {
    render() {
        return  <div>An Error has occured. Page not found.</div>
    }
 }

class WelcomeComponent extends Component {
    render() {
        return  (
                     <>
                        <h1>Welcome!</h1>
                        <div className="container">
                        Welcome {this.props.match.params.name}. You can manage your recipes <Link to="/recipes">here</Link>.
                        </div>

                    </>

        )
        
    }
}


class LoginComponent extends Component {
    constructor(props) {
        super(props)
        // added state to component
        this.state = {
            username: 'user',
            password: '',
            hasLoginFailed: false,
            showSuccessMessage: false
        
        }
        //bind methods
        this.handleChange = this.handleChange.bind(this)
        this.loginClicked = this.loginClicked.bind(this)
        
        

        }
        //whenever there is a change in a text element an event will handle it
        //event updates the state 
        handleChange(event) {
            this.setState(
                {
                    [event.target.name]
                        :event.target.value
                }
            )
        }
    
        loginClicked(){
            //username: user, password: user
            //hardcoded for now change later
            //whenever a user logs in successfully, send that data to session storage
            if(this.state.username=== 'user' && this.state.password=== 'user'){
        
                AuthenticationService.registerSuccessfulLogin(this.state.username,this.state.password);
                this.props.history.push(`/welcome/${this.state.username}`)

            } else {
                // console.log('failed')
                this.setState({showSuccessMessage:false})
                this.setState({hasLoginFailed:true})
            }
            // console.log(this.state)
        }


    render() {
        return (
            <div>
                <h1>Login</h1>
                <div className="container">
                {/* give userfeedback based on credentials */}
                {/* if true show message */}
                {this.state.hasLoginFailed && <div className="alert alert-warning">Invalid Credentials</div>}
                {this.state.showSuccessMessage && <div>Login Successful</div>}
            
                {/* //value of buttons are tied back to the value of this state */}
                Username: <input type="text" name="username" value={this.state.username} onChange={this.handleChange}/>

                Password: <input type="password" name="password" value={this.state.password} onChange={this.handleChange}/>
                <button className="btn btn-success" onClick={this.loginClicked}>Login</button>
                </div>
            </div>
        )
    }

    
}

// function ShowInvalidCredentials(props){
//         if(props.hasLoginFailed) {
//             return <div>Invalid Credentials</div>
//         }
//         return null
// }

// function ShowLoginSuccessMessage(props){
//     if(props.showSuccessMessage){
//         return <div>Login Successful</div>
//     }
//     return null
// }

export default RecipeApp


