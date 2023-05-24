// import logo from './logo.svg';
// import './App.css';

// function App() {
//   return (
//     <div className="App">
//       <header className="App-header">
//         <img src={logo} className="App-logo" alt="logo" />
//         <p>
//           Edit <code>src/App.js</code> and save to reload.
//         </p>
//         <a
//           className="App-link"
//           href="https://reactjs.org"
//           target="_blank"
//           rel="noopener noreferrer"
//         >
//           Learn React
//         </a>
//       </header>
//     </div>
//   );
// }

// export default App;
import React, { useState } from 'react';
import { BrowserRouter as Router, Switch, Route, Redirect } from 'react-router-dom';
import LoginPage from './pages/LoginPage';
import DashboardPage from './pages/DashboardPage';

const App = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  const handleLogin = () => {
    // Lógica de autenticação...
    setIsLoggedIn(true);
  };

  const handleLogout = () => {
    // Lógica de logout...
    setIsLoggedIn(false);
  };

  return (
    <Router>
      <div>
        <h1>My App</h1>
        <Switch>
          <Route path="./pages/LoginPage.js">
            {isLoggedIn ? <Route to="./pages/DashboardPage.js" /> : <LoginPage onLogin={handleLogin} />}
          </Route>
          <Route path="/pages/DashboardPage.js">
            {isLoggedIn ? <DashboardPage onLogout={handleLogout} /> : <Route to="/pages/LoginPage.js" />}
          </Route>
          <Route path="/">
            <Route to="/pages/LoginPage.js" />
          </Route>
        </Switch>
      </div>
    </Router>
  );
};

export default App;

