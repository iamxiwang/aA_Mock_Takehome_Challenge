
import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import Splash from './components/Splash'

function App() {
  return (
    <>
    <BrowserRouter>
        <Switch>
    
          <Route exact path='/' component={Splash}></Route>
          
        </Switch>
    </BrowserRouter>
    </>
  );
}

export default App;
