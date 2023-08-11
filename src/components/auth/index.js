import React, { Component } from 'react'
import { BrowserRouter,Route,Switch } from 'react-router-dom/cjs/react-router-dom.min';
import Login from './login';
import Register from './register';
export default class Main extends Component {
  render() { 
    const { match } = this.props;
    return (
    <div>
     <BrowserRouter>
     
    <Switch>
<Route exact path={[`${match.path}/login`,match.path]} component={Login}/>
<Route exact path={[`${match.path}/register`,match.path]} component={Register}/>
    </Switch>


     </BrowserRouter>
    </div>
    );
  }
}