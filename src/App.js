
import React from 'react';
import { Route, Switch, BrowserRouter as Router } from 'react-router-dom';
import Home from './component/Home';
import NotFoundPage from './component/ErrorPage';
import Navbar from './component/NavBar';
import ShowsDetails from './component/ShowsDetails';
import ShowsList from './component/ShowList';
import './styles/Home.css';
function App() {
  return (
    <div className="App-header">
      <Router>
        <Navbar />
        <Switch>
          <Route exact path="/" component={Home} />
          <Route exact path="/tv/showsearch/:searchvalue" component={ShowsList} />
          <Route exact path="/tv/:name/:episodeId" component={ShowsDetails} />
          <Route exact path="/showsearch/:searchvalue" component={ShowsList} />
          <Route component={NotFoundPage} />
        </Switch>
      </Router></div>
  );
}

export default App;


