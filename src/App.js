import './App.css';
import Todo_list from './todo_list/Todo_list.js';
import React,{ useState, useRef,useEffect } from 'react';
import { v4 as uuidv4 } from 'uuid';
import axios from 'axios'
import {  BrowserRouter as Router ,Route,Link,Switch } from 'react-router-dom';
import Login from './login/login';
import Signup from './signup/Signup';
import { useHistory } from 'react-router';
import Verify from './signup/Verify';
function App() {
  
  // let token = localStorage.getItem('token')
  const token = "Ssldk"

  console.log(token == null)
  return (
    <div>
      {token == null ? <Login/>:(
        <Router>
          <Switch>
            <Route exact path="/verify"><Verify/></Route>
            <Route exact path="/signup">
              <Signup/>
            </Route>
        <Route exact path="/todos">
          <Todo_list />
        </Route>
        <Route exact path="/">
          <Login/>
        </Route>
          </Switch>
      </Router>
      )}
    </div>
    
    
  );
}


export default App;
