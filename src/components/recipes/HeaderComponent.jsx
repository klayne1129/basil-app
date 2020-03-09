import React, {Component} from 'react'
import {Link} from 'react-router-dom'
import AuthenticationService from './AuthenticationService.js'
import { withRouter } from 'react-router'

//headers wont update when the Routers are called unless
//HeaderComponent wrapped with a call to withRouter


//the nav bar 
//menu links enabled/disabled based on user authentication
//onClick with call to AuthenticationService.logout added to logout button
//clears the session storage data
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

export default withRouter(HeaderComponent)