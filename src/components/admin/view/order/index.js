import React, { Component } from 'react'
import {Route,Switch} from 'react-router-dom'
import View from './view'
import Edit from './edit'
export default class Order extends Component {
  render() {
    const{match}=this.props
    return (

      <div id='layoutSidenav_content'>
    
      <main>

        <Switch>
            <Route path={`${match.path}/view/:id`} component={View}/>
            <Route path={`${match.path}/edit/:id`} component={Edit}/>
        </Switch>

      </main>
          
      </div>
    )
  }
}
