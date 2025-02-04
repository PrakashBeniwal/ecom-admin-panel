import { Button, Typography } from '@material-ui/core'
import React, { Component } from 'react'
import getcategorydetails from '../../../../services/getcategorydetails';
import { NotificationManager } from 'react-notifications';
import swal from 'sweetalert';

export default class List extends Component {
    constructor(props) {
        super(props);
        this.state = { getdata:null }
    }

    handleBack() {
        this.props.history.goBack();
    }

    formatDate(data){

        let date=new Date(data);

        let month=""+(date.getMonth()+1);
        let day=""+date.getDate();
        let year=date.getFullYear();
        
        if (month.length < 2)
        month = '0' + month;
    if (day.length < 2)
        day = '0' + day;

        return [day,month,year].join('-')

    // return data
    }

    handlDeleteById(id){


        swal({
            title: "Are you sure?",
            text: "You want to delete Category from the List",
            icon: "warning",
            buttons: true,
            dangerMode: true,
        }).then(success=>{

            if (!success) {
                NotificationManager.error("press ok for delete")
                return 
            }
            getcategorydetails.getcategorydelete(id)
            .then(success=>{
                if (!success) {
                    NotificationManager.error("error in deleting")
                    return null
                }
                NotificationManager.success("successfully deleted category","success")
                this.getcategorylist()
            })
        })


    }

    getcategorylist(){

        getcategorydetails.getcategorylist()
        .then(result=>{
            if (!result) {
                NotificationManager.error("empty result")
                return null
            }
            this.setState({getdata:result.data})
        })


    }

    componentDidMount(){
        this.getcategorylist()
    }

  render() {
    const { getdata } = this.state;
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
            <li className="breadcrumb-item active">Categories</li>
        </ol>
        <div className="row justify-content-between">
            <div className="col-lg-12">
                <a href="add_category.html" className="add-btn hover-btn">Add New</a>
            </div>
            <div className="col-lg-3 col-md-4">
                <div className="bulk-section mt-30">
                    <div className="input-group">
                        <select id="action" name="action" className="form-control">
                            <option defaultValue>Bulk Actions</option>
                            <option value={1}>Active</option>
                            <option value={2}>Inactive</option>
                            <option value={3}>Delete</option>
                        </select>
                        <div className="input-group-append">
                            <button className="status-btn hover-btn" type="submit">Apply</button>
                        </div>
                    </div>
                </div>
            </div>
            <div className="col-lg-5 col-md-6">
                <div className="bulk-section mt-30">
                    <div className="search-by-name-input">
                        <input type="text" className="form-control" placeholder="Search" />
                    </div>
                    <div className="input-group">
                        <select id="categeory" name="categeory" className="form-control">
                            <option defaultValue>Active</option>
                            <option value={1}>Inactive</option>
                        </select>
                        <div className="input-group-append">
                            <button className="status-btn hover-btn" type="submit">Search Category</button>
                        </div>
                    </div>
                </div>
            </div>
            <div className="col-lg-12 col-md-12">
                <div className="card card-static-2 mt-30 mb-30">
                    <div className="card-title-2">
                        <h4>All Categories</h4>
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
                                    {getdata&&
                                        getdata.map((row, index) => (
                                            <tr key={index}>
                                                <td><input type="checkbox" className="check-item" name="ids[]" defaultValue={5} /></td>
                                                <td>{row.SubCategory&&row.SubCategory.category? row.SubCategory.category.name : ''}</td>
                                                <td>{row.SubCategory ? row.SubCategory.sub_name : ''}</td>
                                                <td>{row.name}</td>
                                                <td>
                                                    <span className="delivery-time">{this.formatDate(row.createdAt)}</span>
                                                </td>
                                                <td className="action-btns">
                                                    {/* <SubEdit state={row} /> */}
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

    )
  }
}
