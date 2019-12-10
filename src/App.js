import React, { Component } from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import jwt_decode from 'jwt-decode';
import setAuthToken from './utils/setAuthToken';
import { setCurrentUser } from './actions/authActions';
import { Provider } from 'react-redux';
import store from './store';
import CreateTodo from './components/create-todo.component';
import EditTodo from './components/edit-todo.component';
import TodosList from './components/todos/ToDoList';
import Navbar from './components/layout/Navbar';
import Register from './components/auth/Register';
import Login from './components/auth/Login';
import Dashboard from './components/dashboard/Dashboard';

// Check for token to keep user logged in
if (localStorage.jwtToken) {
  // Set auth token header auth
  const token = localStorage.jwtToken;
  setAuthToken(token);
  // Decode token and get user info and exp
  const decoded = jwt_decode(token);
  // Set user and isAuthenticated
  store.dispatch(setCurrentUser(decoded));
  // // Check for expired token
  //   const currentTime = Date.now() / 1000; // to get in milliseconds
  //   if (decoded.exp < currentTime) {
  //     // Logout user
  //     store.dispatch(logoutUser());
  //     // Redirect to login
  //     window.location.href = "./login";
  //   }
}

class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <Router>
          <div className='container'>
            <Navbar />
            <Route exact path='/login' component={Login} />
            <Route exact path='/register' component={Register} />
            <Route exact path='/' component={Dashboard} />
            <Route exact path='/' component={TodosList} />
            <Route exact path='/todo/edit/:id' component={EditTodo} />
            <Route exact path='/todo_create' component={CreateTodo} />
          </div>
        </Router>
      </Provider>
    );
  }
}

export default App;
