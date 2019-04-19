import React from 'react';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';

function App() {
  return (
    <Router>
      <div className='App'>
        <ul>
          <li>
            <Link to='/login'>Login</Link>
          </li>
          <li>
          <Link to='/friendslist'>Friends List</Link>
          </li>
        </ul>
        <Route path='/login' component={Login} />
        <PrivateRoute />
        <ProtectedRoute exact path='/friendslist' component={FriendsList}/>
      </div>
    </Router>
  )
}

export default App;
