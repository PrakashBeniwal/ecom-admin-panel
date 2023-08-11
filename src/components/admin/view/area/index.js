
import{Route,Switch} from "react-router-dom"
import React, { Component } from 'react'
import List from './list';
import Create from "./create";

export default class Area extends Component {
  render() {
    const{match}=this.props;
    return (
        <div id="layoutSidenav_content">
      <Switch>
        <Route path={`${match.path}/list`} component={List}/>
        <Route path={`${match.path}/create`} component={Create}/>
      </Switch>
        </div>
    )
  }
}
