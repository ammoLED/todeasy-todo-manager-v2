
import React from 'react'
import { Route, Switch } from 'react-router-dom'

import Navbar from 'components/Navbar'

import { publicRoutes } from 'pages/routes'

const App: React.FC = () => {
  
  return (
    <div className="app">
      <Navbar/>

      <div className="container">
        <Switch>
          {publicRoutes.map(({ path, Component }) => {

            return <Route path={path} component={Component} exact key={path} />

          })}       
        </Switch>
      </div>
      
    </div>
  );
}

export default App;
