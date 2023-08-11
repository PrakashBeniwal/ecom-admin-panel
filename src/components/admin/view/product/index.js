// import { Switch } from '@material-ui/core'
import React, { Component } from 'react'
import Create from './create'
import {Route,Switch} from 'react-router-dom'
import List from './list';
import Edit from './edit';
import Uploadphoto from './product-slider';

export default class Product extends Component {
  render() {
    const{match}=this.props;
    return (
      <div id='layoutSidenav_content'>

        <Switch>
            <Route path={`${match.path}/create`} component={Create}/>
            <Route path={`${match.path}/list`} component={List}/>
            <Route path={`${match.path}/edit`} component={Edit}/>
            <Route path={`${match.path}/more-photo`} component={Uploadphoto}/>
        </Switch>
      </div>
    )
  }
}
