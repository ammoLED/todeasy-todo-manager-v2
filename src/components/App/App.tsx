
import './App.scss'
import React from "react";
import { Switch, Route } from "react-router-dom";

import Header from "components/Header";
import routes from "pages/routes";


const App: React.FC = () => {
  
  return (
    <div className="app">
      <div className="container">
        <Header/>
        
        <Switch>
          {
            routes.map( (route) => {
              return <Route 
                exact 
                path={route.path} 
                component={route.Component} 
                key={route.path} 
              />
            })
          }
        </Switch>
      </div>
    </div>
  );
}

export default App;
