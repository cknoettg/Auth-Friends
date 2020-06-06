import React from 'react';
import { BrowserRouter as Router, Route, Link, Switch } from 'react-router-dom';
import './App.css';

import Login from "./components/Login";
import FriendsList from "./components/FriendsList";
import PrivateRoute from "./utils/PrivateRoute";


function App() {
  return (
    <Router>
      <div className="App">
        <div>
         <Link to="/login"> Login</Link>
        </div>
        <div>
          <Link to="/protected">Friends List</Link>
        </div>
       

        <Switch>
          <PrivateRoute path="/protected" component={FriendsList}/>
          <Route path="/login" component={Login}/>
          <Route component={Login}/>
        </Switch>

      </div>
    </Router>
  );
}

export default App;

//EARLY ATTEMPT:
// import React from 'react';
// import './App.css';
// import { Route, Router } from 'react-router-dom';
// import Login from "./components/Login";

// //Add Route For Login Page
// function App() {
//   return (
//     <div className="App">
//       <h1>Auth Friends App</h1>
//       <Router>
//         <Route exact path="/" component={Login} />
//       </Router>
//     </div>
//   );
// }

// export default App;