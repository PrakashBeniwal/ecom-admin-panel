import { Button,  Typography } from '@material-ui/core';
import React, { Component } from 'react'
import ReactPaginate from 'react-paginate';
import AutoSelect from '../../../../common/autoselect';
import fetchProductDetails from '../../../../services/fetchProductDetails';
import { NotificationManager } from 'react-notifications';
import swal from 'sweetalert';
import {Link} from "react-router-dom"

const Arrays=(array,fieldname,fieldvalue)=>{
    
    const arrayList=[];
  
    array.map(data=>{
      arrayList.push({label:data[fieldname],value:data[fieldvalue]})
      return null;
  
    })
  
    return arrayList;
  
  }

export default class List extends Component {

    constructor(props){
        super(props);
        this.state={
            getList:[],
            isloaded:true,
            selectedProduct:''
        }
    }

    getproduct=()=>{
        this.setState({isloaded:false})
        fetchProductDetails.getProductList()
        .then(result=>{
            if (result.product.length==0) {
                NotificationManager.error("empty productlist")
                return
            }
            this.setState({
                getList:result.product,
                isloaded:true
            })
        })
    }

    searchProduct=()=>{
        if (this.state.selectedProduct.value==undefined) {
            NotificationManager.error("please select first product","not selected")
            return
        }
        this.setState({isloaded:false})
        fetchProductDetails.getProductById(this.state.selectedProduct.value)
        .then(result=>{
            if (!result.data) {
                NotificationManager.error("empty productlist")
                return
            }
            this.setState({
                getList:[result.data],
                isloaded:true
            })
        })
    }

    handleSelectedProduct=(name,selected)=>{
        this.setState({selectedProduct:selected})
    }


    componentDidMount(){
        this.getproduct()
    }

    handlDeleteById(id){
        this.setState({isloaded:true})
        swal({
            title: "Are you sure?",
            text: "You want to delete  Product",
            icon: "warning",
            buttons: true,
            dangerMode: true,
        })
            .then(async (success) => {

                if (success) {
                        fetchProductDetails.deleteProduct(id)
                        .then(success=>{
                            if (success) {
                                this.setState({isloaded:false})
                                NotificationManager.success("successfully  deleted product")
                                this.getproduct()
                                return
                            }
                            NotificationManager.error("cant deleted product")
                        })
                }
            })
    }
    
  render() {
    const { getList, selectedProduct, isloaded } = this.state;
        return (
            <div className="container-fluid">
                <div className="row">
                    <div className="col-lg-5 col-md-9 col-lg-6">
                        <h2 className="mt-30 page-title">Products</h2>
                    </div>
                    <div className="col-lg-5 col-md-3 col-lg-6 back-btn">
                        <Button variant="contained" onClick={(e) => this.handleBack()}><i className="fas fa-arrow-left" /> Back</Button>
                    </div>
                </div>
                <ol className="breadcrumb mb-30">
                    <li className="breadcrumb-item"><a href="index.html">Dashboard</a></li>
                    <li className="breadcrumb-item active">Products</li>
                </ol>
                <div className="row justify-content-between">
                    <div className="col-lg-12">
                        <a href="/admin/product/create" className="add-btn hover-btn">Add New</a>
                    </div>

                    <div className="col-lg-12">
                        <div className="row">
                            <div className="col-lg-8 col-md-8">
                                {/* <label className="form-label"><b>Select Product*</b></label> */}
                                <br />
                                <AutoSelect
                                    className="basic-single"
                                    value={selectedProduct}
                                    onChange={this.handleSelectedProduct}
                                    isSearchable={true}
                                    name="product_id"
                                    options={Arrays(getList, "name", "id")}
                                />
                            </div>
                            <div className="col-lg-2 col-md-2">
                                <button className="save-btn hover-btn" type="submit" onClick={this.searchProduct}>Search</button>
                            </div>

                            <div className='p-3'>

                            <button className="view-btn hover-btn p-2" type="submit" onClick={()=>this.getproduct()}>View All</button>
                            </div>

                        </div>
                    </div>



                    <div className="col-lg-12 col-md-12">
                        <div className="card card-static-2 mt-30 mb-30">
                            <div className="card-title-2">
                                <h4>All Products</h4>
                            </div>
                            <div className="card-body-table">
                                <div className="table-responsive">
                                    <table className="table ucp-table table-hover">
                                        <thead>
                                            <tr>
                                                <th style={{ width: 60 }}>Id</th>
                                                <th style={{ width: 100 }}>Image</th>
                                                <th>Name</th>
                                                <th>Category</th>
                                                <th>Brand</th>
                                                <th>Unit</th>
                                                <th>BuyerPrice</th>
                                                <th>Seller Price</th>
                                                {/* <th>Qty</th>
                                                <th>Discount(%)</th> */}
                                                <th>Discount</th>
                                                <th>Total</th>
                                                <th>Net Price</th>
                                                <th>Status</th>
                                                <th>Action</th>
                                            </tr>
                                        </thead>
                                        <tbody>
                                            {isloaded ?
                                                getList.map((row, index) => (
                                                    <tr key={index}>
                                                        <td>{row.id}</td>
                                                        <td>
                                                            <div className="cate-img-5">
                                                                <img src={row.photo} alt="product-name" />
                                                            </div>
                                                        </td>
                                                        <td>{row.name}</td>
                                                        <td>{row.SubCategory ? row.SubCategory.category.name : '..'}</td>
                                                        <td>{row.brand}</td>
                                                        <td>{row.unitSize}</td>
                                                        <td>&#x20B9;{row.buyerPrice}</td>
                                                        <td>&#x20B9;{row.price}</td>
                                                        {/* <td>&#x20B9;{row.qty}</td>
                                                        <td>{row.discountPer}%</td> */}
                                                        <td>&#x20B9;{row.discount}</td>
                                                        <td>&#x20B9;{row.total}</td>
                                                        <td>&#x20B9;{row.netPrice}</td>
                                                        <td>
                                                            {row.status === 'active' ? <span className="badge-item badge-status-success">{row.status}</span> :
                                                                <span className="badge-item badge-status">{row.status}</span>
                                                            }
                                                        </td>
                                                        <td className="action-btns">
                                                            <Link to={{
                                                                pathname: `/admin/product/edit`,
                                                                state: { row }
                                                            }}>
                                                                <Typography className="edit-btn"><i className="fas fa-edit" /></Typography>
                                                            </Link>
                                                            <Typography className="delete-btn" onClick={(e) => this.handlDeleteById(row.id)} ><i className="fas fa-trash-alt" /></Typography>
                                                        </td>
                                                    </tr>
                                                ))
                                                : 'Loading...'

                                            }
                                        </tbody>
                                    </table>
                                </div>
                                <ReactPaginate
                                    previousLabel={"prev"}
                                    nextLabel={"next"}
                                    breakLabel={"..."}
                                    breakClassName={"break-me"}
                                    pageCount={this.state.pageCount}
                                    marginPagesDisplayed={2}
                                    pageRangeDisplayed={5}
                                    onPageChange={this.handlePageClick}
                                    containerClassName={"pagination"}
                                    subContainerClassName={"pages pagination"}
                                    activeClassName={"active"} />
                            </div>
                        </div>
                    </div>
                </div>
            </div>


        )
  }
}
