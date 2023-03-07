
import React from 'react';
import { Switch, Route } from 'react-router-dom';
import Splash from './components/Splash'

function App() {
  return (
    <>
        <Switch>
          <Route exact path='/' component={Splash}></Route>    
        </Switch>
    </>
  );
}

export default App;
