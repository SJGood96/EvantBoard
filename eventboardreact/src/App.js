import React, { Component } from "react";
import { Switch } from "react-router-dom/cjs/react-router-dom.min";
import { Route } from "react-router-dom"
import './App.css'
import NavBar from "./components/navigation_bar"
import HomePage from './pages/home_page'
import PostsPage from './pages/posts_page'
import CreatePage from './pages/create_page'

import EventDisplayForm from "./components/CreateEventForm";
 
class App extends Component {
  render() {
    return (
      <div className="container App">
        <h1 className="text-center App-heading-text">Event Board</h1>
        <NavBar />
        <main>
          <Switch>
            <Route exact path='/' component={HomePage} />
            <Route path='/home' component={HomePage} />
            <Route path='/posts' component={PostsPage} />
            <Route path='/create' component={CreatePage} />
          </Switch>
        </main>
        <br />
      </div>
    );
  }
}
 
export default App;