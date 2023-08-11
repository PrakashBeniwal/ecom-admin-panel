import React, { Component } from 'react'
import { Switch,Route, Link} from 'react-router-dom/cjs/react-router-dom.min'
import Header from './header'
import Sidebar from './sidebar'
import Home from './home'
import Order from './view/order'
import Category from './view/category'
import autoselect from '../common/autoselect'
import Location from './view/location'
import Area from './view/area'
import Product from './view/product'
import Customer from './view/customer'
import Payment from './view/payment'

export class rootRoutes extends Component {
  render() {
    const{match}=this.props
    return (
      <main>

      <Header/>
        <div id="layoutSidenav">
          {/* <div> */}
        <Sidebar/>

        <Switch>
          <Route exact path={[`${match.path}/home`, `${match.path}`]} component={Home}/>
          <Route path={`${match.path}/order`} component={Order}/>
          <Route path={`${match.path}/category`} component={Category}/>
          <Route path={`${match.path}/location`} component={Location}/>
          <Route path={`${match.path}/area`} component={Area}/>
          <Route path={`${match.path}/product`} component={Product}/>
          <Route path={`${match.path}/customer`} component={Customer}/>
          <Route path={`${match.path}/Payment`} component={Payment}/>
        </Switch>
          
        </div>

      </main>
    )
  }
}

export default rootRoutes