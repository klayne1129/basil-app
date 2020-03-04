import React, {Component} from 'react'
import {BrowserRouter as Router, Route, Switch, Link} from 'react-router-dom'
import { removeTypeDuplicates } from '@babel/types'

class ToDoApp extends Component {
    render() {
        return (
            <div className="ToDoApp">

                {/* allows you to type in browser to route to specific pages */}
                <Router>
                    <>
                        <HeaderComponent/>
                        {/* switch makes sure only one route is active at a time */}
                        <Switch>
                            <Route path="/" exact component={LoginComponent}/>
                            <Route path="/login" component={LoginComponent}/>
                            <Route path="/welcome/:name" component={WelcomeComponent}/>
                            <Route path="/todos" component={ListTodosComponent}/>
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
class HeaderComponent extends Component {
    render() {
        return (
            <header>
                <nav className="navbar navbar-expand-md navbar-dark bg-dark">
                    <div className="navbar-brand">
                        <ul className="navbar-nav">
                            <li><Link to="/welcome/Basil" className="nav-link">Basil</Link></li>
                        </ul>
                        </div>
                    <ul className="navbar-nav"> 
                        <li><Link to="/welcome/Basil" className="nav-link">Home</Link></li>
                        <li><Link to="/todos" className="nav-link">Todos</Link></li>
                    </ul>
                    <ul className="navbar-nav navbar-collapse justify-content-end">
                        <li><Link to="/login" className="nav-link">Login</Link></li>
                        <li><Link to="/logout" className="nav-link">Logout</Link></li>
                    </ul>
                </nav>
            </header>
        )
    }
}

class FooterComponent extends Component {
    render() {
        return (
            <div>
                <hr/>Footer
            </div>
        )
    }
}

class ListTodosComponent extends Component{
    // hardcoding some table information for learning. Will replace
    constructor(props){
        super(props)
        this.state = {
            todos : [
                    {id:1, description: "Leaarn React", done:false, targetDate:new Date()}, 
                    {id:2, description: "Learn SpringBoot Security", done:false, targetDate:new Date()},
                    {id:3, description: "Connect React to SpringBoot", done:false, targetDate:new Date()}
                ]
        }
    }
    render() {
        return  (   
                     <div>
                        <h1>List Todos</h1>
                        <table>
                            <thead>
                                <tr>
                                    <th>Id</th>
                                    <th>Description</th>
                                    <th>Completed</th>
                                    <th>Target Date</th>
                                </tr>
                            </thead>
                            <tbody>
                                {
                                    this.state.todos.map (
                                        todo =>

                                    
                                        <tr>
                                            <td>{todo.id}</td>
                                            <td>{todo.description}</td>
                                            <td>{todo.done.toString()}</td>
                                            <td>{todo.targetDate.toString()}</td>
                                        </tr>
                                    )
                                }

                            </tbody>
                        </table>
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
        return  <div>
                    Welcome {this.props.match.params.name}. You can manage your Todos <Link to="/todos">here</Link>.
                </div>
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
            if(this.state.username=== 'user' && this.state.password=== 'user'){
                // console.log('success!')
                // this.setState({showSuccessMessage:true})
                // this.setState({hasLoginFailed:false})
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
                {/* give userfeedback based on credentials */}
                {/* if true show message */}
                {this.state.hasLoginFailed && <div>Invalid Credentials</div>}
                {this.state.showSuccessMessage && <div>Login Successful</div>}
            
                {/* //value of buttons are tied back to the value of this state */}
                Username: <input type="text" name="username" value={this.state.username} onChange={this.handleChange}/>

                Password: <input type="password" name="password" value={this.state.password} onChange={this.handleChange}/>
                <button type="submit"onClick={this.loginClicked}>Login</button>
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

export default ToDoApp


