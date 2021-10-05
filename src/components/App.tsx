
import React from 'react'
import { Switch, Route } from 'react-router-dom'

import routes from 'pages/routes';

const App: React.FC = () => {
  
  return (
    <div className="app">

      <div className="container">
        <Switch>
          {
            routes.map( (route) => {
              return <Route path={route.path} component={route.Component} exact key={route.path} />
            })
          }
        </Switch>
      </div>
    </div>
  );
}

export default App;
