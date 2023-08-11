import { Link } from 'react-router-dom'
import React, { Component } from 'react'
import { getUserLogin } from '../../services'

export default class Header extends Component {
  render() {
    return (
        <div>
        <nav className="sb-topnav navbar navbar-expand-lg navbar-light bg-clr">
            <a className="navbar-brand logo-brand" href="/">Big SuperMarket</a>
            {/* <button className="btn btn-link btn-sm order-1 order-lg-0" id="sidebarToggle" ><i className="fas fa-bars" /></button> */}
            <a href="/admin" className="frnt-link"><i className="fas fa-external-link-alt" />Home</a>
            
            <ul className="navbar-nav ml-auto mr-4 d-none d-lg-block ">
                <li className="nav-item dropdown">
                    <a className="nav-link dropdown-toggle" id="userDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false"><i className="fas fa-user fa-fw" /></a>
                    <div className="dropdown-menu dropdown-menu-right " aria-labelledby="userDropdown">
                        <a className="dropdown-item admin-dropdown-item" href="edit_profile.html">Edit Profile</a>
                        <a className="dropdown-item admin-dropdown-item" href="change_password.html">Change Password</a>
                        <span className="dropdown-item admin-dropdown-item" onClick={() =>getUserLogin.logout()}>Logout</span>
                    </div>
                </li>
            </ul>

            <button className="navbar-toggler navbar-toggler-white" type="button" data-toggle="collapse" data-target="#navbarText" aria-controls="navbarText" aria-expanded="false" aria-label="Toggle navigation">
                                <span className="navbar-toggler-icon" />
                            </button>
                            

                            <div className="collapse" id='navbarText'>
                                <div  id='layoutSidenav' >
                                <div id="layoutSidenav_nav"  style={{transform: "translateX(0)"}}>
                <nav className="sb-sidenav accordion sb-sidenav-dark" id="sidenavAccordion">
                    <div className="sb-sidenav-menu">
                        <div className="nav">
                            <Link className="nav-link active" to="/admin">
                                <div className="sb-nav-link-icon"><i className="fas fa-tachometer-alt" /></div>
                                Dashboard
                            </Link>

                            {/* <Link className="nav-link collapsed" to="#" data-toggle="collapse" data-target="#collapseShops" aria-expanded="false" aria-controls="collapseShops">
                                <div className="sb-nav-link-icon"><i className="fas fa-store" /></div>
                                Vendors
                            <div className="sb-sidenav-collapse-arrow"><i className="fas fa-angle-down" /></div>
                            </Link> */}
                            {/* <div className="collapse" id="collapseShops" aria-labelledby="headingTwo" data-parent="#sidenavAccordion">
                                <nav className="sb-sidenav-menu-nested nav">
                                    <Link className="nav-link sub_nav_link" to="/admin/shop/list">list</Link>
                                    <Link className="nav-link sub_nav_link" to="/admin/shop/create">create</Link>
                                    <Link className="nav-link sub_nav_link" to="/admin/vendor/product/list">Product</Link>
                                </nav>
                            </div> */}
                            <Link className="nav-link collapsed" to="#" data-toggle="collapse" data-target="#collapseProducts" aria-expanded="false" aria-controls="collapseProducts">
                                <div className="sb-nav-link-icon"><i className="fas fa-box" /></div>
                                Products
                                <div className="sb-sidenav-collapse-arrow"><i className="fas fa-angle-down" /></div>
                            </Link>
                            <div className="collapse" id="collapseProducts" aria-labelledby="headingTwo" data-parent="#sidenavAccordion">
                                <nav className="sb-sidenav-menu-nested nav">
                                    <Link className="nav-link sub_nav_link" to="/admin/product/list">All Products</Link>
                                    <Link className="nav-link sub_nav_link" to="/admin/product/create">Add Product</Link>
                                    <Link className="nav-link sub_nav_link" to="/admin/product/more-photo">Add More Image</Link>
                                </nav>
                            </div>
                            <Link className="nav-link collapsed" to="#" data-toggle="collapse" data-target="#collapseCategories" aria-expanded="false" aria-controls="collapseCategories">
                                <div className="sb-nav-link-icon"><i className="fas fa-list" /></div>
                                Categories
                                <div className="sb-sidenav-collapse-arrow"><i className="fas fa-angle-down" /></div>
                            </Link>
                            <div className="collapse" id="collapseCategories" aria-labelledby="headingTwo" data-parent="#sidenavAccordion">
                                <nav className="sb-sidenav-menu-nested nav">
                                    <Link className="nav-link sub_nav_link" to="/admin/category/list">All Categories</Link>
                                    <Link className="nav-link sub_nav_link" to="/admin/category/create">Add Category</Link>
                                    <Link className="nav-link sub_nav_link" to="/admin/category/sub-create">Add Sub-Category</Link>
                                    <Link className="nav-link sub_nav_link" to="/admin/category/sub-child-create">Add Child-Category</Link>

                                </nav>
                            </div>
                            <Link className="nav-link collapsed" to="#" data-toggle="collapse" data-target="#collapseLocations" aria-expanded="false" aria-controls="collapseLocations">
                                <div className="sb-nav-link-icon"><i className="fas fa-map-marker-alt" /></div>
                                Locations
                                <div className="sb-sidenav-collapse-arrow"><i className="fas fa-angle-down" /></div>
                            </Link>
                            <div className="collapse" id="collapseLocations" aria-labelledby="headingTwo" data-parent="#sidenavAccordion">
                                <nav className="sb-sidenav-menu-nested nav">
                                    <Link className="nav-link sub_nav_link" to="/admin/location/list">All Locations</Link>
                                    <Link className="nav-link sub_nav_link" to="/admin/location/create">Add Location</Link>
                                </nav>
                            </div>
                            <Link className="nav-link collapsed" to="#" data-toggle="collapse" data-target="#collapseAreas" aria-expanded="false" aria-controls="collapseAreas">
                                <div className="sb-nav-link-icon"><i className="fas fa-map-marked-alt" /></div>
                                Areas
                             <div className="sb-sidenav-collapse-arrow"><i className="fas fa-angle-down" /></div>
                            </Link>
                            <div className="collapse" id="collapseAreas" aria-labelledby="headingTwo" data-parent="#sidenavAccordion">
                                <nav className="sb-sidenav-menu-nested nav">
                                    <Link className="nav-link sub_nav_link" to="/admin/area/list">All Areas</Link>
                                    <Link className="nav-link sub_nav_link" to="/admin/area/create">Add Area</Link>
                                </nav>
                            </div>
                             {/* <Link className={role === "admin"?"nav-link":"d-none"} to="/admin/user/list">
                                <div className="sb-nav-link-icon"><i className="fas fa-users" /></div>
                                Roles Management
                            </Link> */}
                            <Link className="nav-link" to="/admin/customer/list">
                                <div className="sb-nav-link-icon"><i className="fas fa-users" /></div>
                                Customers
                            </Link>
                            <Link className="nav-link" to="/admin/payment/list">
                                <div className="sb-nav-link-icon"><i className="fas fa-users" /></div>
                                Payment
                            </Link>
                            <Link className="nav-link" to="/edit_profile.html">
                                {/* <div className="sb-nav-link-icon"><i className="fas fa-" /></div> */}
                                Edit Profile
                            </Link>
                            <Link className="nav-link" to="/change_password.html">
                                {/* <div className="sb-nav-link-icon"><i className="fas fa-users" /></div> */}
                                Change Password
                            </Link>
                            <span className="dropdown-item admin-dropdown-item text-white bg-danger" onClick={() =>getUserLogin.logout()}>Logout</span>


                            {/* <Link className="nav-link collapsed" to="#" data-toggle="collapse" data-target="#collapseLayouts" aria-expanded="false" aria-controls="collapseLayouts">
                                <div className="sb-nav-link-icon"><i className="fas fa-newspaper" /></div>
                                Posts
                                 <div className="sb-sidenav-collapse-arrow"><i className="fas fa-angle-down" /></div>
                            </Link>
                            <div className="collapse" id="collapseLayouts" aria-labelledby="headingOne" data-parent="#sidenavAccordion">
                                <nav className="sb-sidenav-menu-nested nav">
                                    <Link className="nav-link sub_nav_link" to="posts.html">All Posts</Link>
                                    <Link className="nav-link sub_nav_link" to="add_post.html">Add New</Link>
                                    <Link className="nav-link sub_nav_link" to="post_categories.html">Categories</Link>
                                    <Link className="nav-link sub_nav_link" to="post_tags.html">Tags</Link>
                                </nav>
                            </div>
                            <Link className="nav-link collapsed" to="#" data-toggle="collapse" data-target="#collapseAreas" aria-expanded="false" aria-controls="collapseAreas">
                                <div className="sb-nav-link-icon"><i className="fas fa-map-marked-alt" /></div>
                                Areas
          <div className="sb-sidenav-collapse-arrow"><i className="fas fa-angle-down" /></div>
                            </Link>
                            <div className="collapse" id="collapseAreas" aria-labelledby="headingTwo" data-parent="#sidenavAccordion">
                                <nav className="sb-sidenav-menu-nested nav">
                                    <Link className="nav-link sub_nav_link" to="areas.html">All Areas</Link>
                                    <Link className="nav-link sub_nav_link" to="add_area.html">Add Area</Link>
                                </nav>
                            </div>
                            
                            
                            <Link className="nav-link" to="orders.html">
                                <div className="sb-nav-link-icon"><i className="fas fa-cart-arrow-down" /></div>
                                Orders
        </Link>
                            <Link className="nav-link" to="customers.html">
                                <div className="sb-nav-link-icon"><i className="fas fa-users" /></div>
                                Customers
        </Link>
                            <Link className="nav-link" to="offers.html">
                                <div className="sb-nav-link-icon"><i className="fas fa-gift" /></div>
                                Offers
        </Link>
                            <Link className="nav-link" to="pages.html">
                                <div className="sb-nav-link-icon"><i className="fas fa-book-open" /></div>
                                Pages
        </Link>
                            <Link className="nav-link" to="menu.html">
                                <div className="sb-nav-link-icon"><i className="fas fa-layer-group" /></div>
                                Menu
        </Link>
                            <Link className="nav-link" to="updater.html">
                                <div className="sb-nav-link-icon"><i className="fas fa-cloud-upload-alt" /></div>
                                Updater
        </Link>
                            <Link className="nav-link collapsed" to="#" data-toggle="collapse" data-target="#collapseSettings" aria-expanded="false" aria-controls="collapseSettings">
                                <div className="sb-nav-link-icon"><i className="fas fa-cog" /></div>
                                Setting
          <div className="sb-sidenav-collapse-arrow"><i className="fas fa-angle-down" /></div>
                            </Link>
                            <div className="collapse" id="collapseSettings" aria-labelledby="headingTwo" data-parent="#sidenavAccordion">
                                <nav className="sb-sidenav-menu-nested nav">
                                    <Link className="nav-link sub_nav_link" to="general_setting.html">General Settings</Link>
                                    <Link className="nav-link sub_nav_link" to="payment_setting.html">Payment Settings</Link>
                                    <Link className="nav-link sub_nav_link" to="email_setting.html">Email Settings</Link>
                                </nav>
                            </div>
                            <Link className="nav-link" to="reports.html">
                                <div className="sb-nav-link-icon"><i className="fas fa-chart-bar" /></div>
                                Reports
        </Link> */}
                        </div>
                    </div>
                </nav>
            </div>
                                    
                                </div>

                            </div>
            
           
        </nav>

    </div>
    )
  }
}
