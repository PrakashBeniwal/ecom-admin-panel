import React, { Component } from 'react'
import MainCategory from './create'
import {Switch,Route} from 'react-router-dom'
import SubCategory from './create/subcategory'
import ChildCategory from './create/childcategory'
import List from './list'

export default class Category extends Component {
  render() {
    const{match}=this.props
    return (
      <div id='layoutSidenav_content'>
        
        <Switch>
        <Route path={`${match.path}/create`} component={MainCategory} />
        <Route path={`${match.path}/list`} component={List} />
        <Route path={`${match.path}/sub-create`} component={SubCategory} />
        <Route path={`${match.path}/sub-child-create`} component={ChildCategory} />

        </Switch>
      </div>
    )
  }
}
