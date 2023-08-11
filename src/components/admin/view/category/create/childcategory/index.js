import { Button, Typography } from '@material-ui/core';
import React, { Component } from 'react'
import MainCategoryList from '../../../../../common/category/main-category';
import getcategorydetails from '../../../../../services/getcategorydetails';
import { NotificationManager } from 'react-notifications';
import SubCategorylist from '../../../../../common/category/sub-category';
import swal from 'sweetalert';
import ChildEdit from './childEdit';

export default class ChildCategory extends Component {

  constructor(props) {
    super(props);
    this.state = {
      getList: [],
      getdata: [],
      name: '',
      selectedCategory: '',
      selectedSubCategory: ''
    }
  }

  handleBack() {
    this.props.history.goBack();
  }
  handleSubCategory = (value) => {
    this.setState({ selectedSubCategory: value })
  }

  handleCategory=(value)=>{

    this.setState({
      selectedCategory:value
    })

    let categoryId=value;

    getcategorydetails.getAllSubCategory(categoryId)
    .then(result=>{
      if (result.data) {
        this.setState({getList:result.data})
        return
      }
      NotificationManager.error("can't get subcategories")
    })

  }

  formatDate(date) {
    var d = new Date(date),
      month = '' + (d.getMonth() + 1),
      day = '' + d.getDate(),
      year = d.getFullYear();
    if (month.length < 2)
      month = '0' + month;
    if (day.length < 2)
      day = '0' + day;
    return [year, month, day].join('-');
  }



  getCategory = () => {
    getcategorydetails.getSubChildCategory()
      .then(data => {
        if (data) {
          this.setState({
            getdata: data.data
          })
          return
        }
        NotificationManager.error("can't get childcategories")
      })
  }

  componentDidMount() {
    this.getCategory()
  }

  handleChange=(e)=>{
    this.setState({[e.target.name]:e.target.value})
  }

  handlDeleteById(id){

    swal({
      title:"Are you sure?",
      text:"Delete child category",
      buttons:true,
      dangerMode:true,
      icon:"warning"
    }).then(success=>{
      if (success) {
    getcategorydetails.deleteSubChildCategory(id)
    .then(success=>{
      if (success) {
        NotificationManager.success("deleted successfully")
        this.getCategory();
        return
      }
      NotificationManager.error("can't deleted")
    })
        
      }
    })

  }

  handleSubmit=()=>{

    const {name,selectedCategory,selectedSubCategory}=this.state;

    if (!name&&!selectedCategory&&!selectedSubCategory) {
      NotificationManager.error("please fill all fields")
      return 
    }
    let data={name,categoryId:selectedCategory,subcategoryId:selectedSubCategory}


    swal({
      title: "Are you sure?",
      text: "You want to Add New Child Category",
      icon: "warning",
      buttons: true,
      dangerMode: true,
    }).then(success=>{
      if (success) {
        getcategorydetails.createSubChildCategory(data)
    .then(success=>{
      if (success) {
        this.getCategory();
        return
      }
      NotificationManager.error("can't create child category")
    })
    return
      }

      NotificationManager.error("press ok for delete")

    })

    
  }

  render() {
    const { getList, getdata } = this.state;
    return (
      <div className="container-fluid">
        <div className="row">
          <div className="col-lg-5 col-md-9 col-lg-6">
            <h2 className="mt-30 page-title">Categories</h2>
          </div>
          <div className="col-lg-5 col-md-3 col-lg-6 back-btn">
            <Button variant="contained" onClick={(e) => this.handleBack()}><i className="fas fa-arrow-left" /> Back</Button>
          </div>
        </div>
        <ol className="breadcrumb mb-30">
          <li className="breadcrumb-item"><a href="/">Dashboard</a></li>
          <li className="breadcrumb-item active">Category</li>
        </ol>
        <div className="row">
          <div className="col-lg-4 col-md-5">
            <div className="card card-static-2 mb-30">
              <div className="card-title-2">
                <h4>Add Child Category</h4>
              </div>
              <div className="card-body-table">
                <div className="news-content-right pd-20">
                  <div className="form-group">
                    <label className="form-label">Name*</label>
                    <input type="text" className="form-control" placeholder="Category Name" name="name" value={this.state.name} onChange={(e) => this.handleChange(e)} />
                  </div>
                  <div className="form-group mb-0">
                    <label className="form-label">Main Category*</label>
                    <MainCategoryList onSelectCategory={this.handleCategory} />
                  </div>
                  <div className="form-group">
                    <label className="form-label">Sub Category*</label>
                    <SubCategorylist state={getList} onSelectSubCategory={this.handleSubCategory} />
                  </div>
                  <button className="save-btn hover-btn" type="submit" onClick={this.handleSubmit}>Add New</button>
                </div>
              </div>
            </div>
          </div>
          <div className="col-lg-8 col-md-7">
            <div className="all-cate-tags">
              <div className="row justify-content-between">
                <div className="col-lg-12 col-md-12">
                  <div className="card card-static-2 mb-30">
                    <div className="card-title-2">
                      <h4>All Child Categories</h4>
                    </div>
                    <div className="card-body-table">
                      <div className="table-responsive">
                        <table className="table ucp-table table-hover">
                          <thead>
                            <tr>
                              <th style={{ width: 60 }}><input type="checkbox" className="check-all" /></th>
                              <th scope="col">Category    </th>
                              <th scope="col">Sub Category</th>
                              <th scope="col">Item Name</th>
                              <th scope="col">Date</th>
                              <th scope="col">Action</th>
                            </tr>
                          </thead>
                          <tbody>
                            {
                              getdata.map((row, index) => (
                                <tr key={index}>
                                  <td><input type="checkbox" className="check-item" name="ids[]" defaultValue={5} /></td>
                                  <td>{row.SubCategory&&row.SubCategory.category ? row.SubCategory.category.name : ''}</td>
                                  <td>{row.SubCategory ? row.SubCategory.sub_name : ''}</td>
                                  <td>{row.name}</td>
                                  <td>
                                    <span className="delivery-time">{this.formatDate(row.createdAt)}</span>
                                  </td>
                                  <td className="action-btns">
                                    <ChildEdit state={row} />
                                    <Typography className="delete-btn" onClick={(e) => this.handlDeleteById(row.id)} ><i className="fas fa-trash-alt" /></Typography>
                                  </td>
                                </tr>
                              ))
                            }
                          </tbody>
                        </table>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

    )
  }
}
