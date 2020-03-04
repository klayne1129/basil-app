import React, { Component } from 'react';
import Counter from './components/counter/Counter'
import ToDoApp from './components/todo/ToDoApp'
import RecipeApp from './components/recipes/RecipeApp'
import 'bootstrap/dist/css/bootstrap.min.css'

import './App.css';
 

// Anything you want to appear on your browser you must ask the "app" to show it bc its the root
//use jsx
class App extends Component {
  render() {
    return (
      <div className="App">
        {/* <Counter/> */}
        {/* <ToDoApp/> */}
        <RecipeApp/>
        
      </div>
    );
  }
}


export default App;