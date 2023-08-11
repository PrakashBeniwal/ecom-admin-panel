import React, { Component } from 'react'
import { Button, Typography } from '@material-ui/core'
import getcategorydetails from '../../../../services/getcategorydetails';
import { NotificationManager } from 'react-notifications';
import swal from 'sweetalert';
import Edit from './edit';
// import {io} from 'socket.io-client';

export default class MainCategory extends Component {

    constructor(props) {
        super(props);
        this.state = {
            getList: [],
            name: '',
            slug: ''
        }

    // this.socket = io('http://localhost:8000');

    // this.socket.on('connect', () => {
    //     console.log('Connected to Socket.IO server');
    // });


    

    }


    // handleSocket=(data)=>{

    //     // this.socket.emit('add-category',data);
    //     this.socket.emit('add-category',data);

    
    //     this.socket.on('receive',user=>{
    //         this.setState({ getList: [...this.state.getList,user] })

    //     });
    // }

    handleBack() {
        this.props.history.goBack();
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

    handleChange(e) {
        this.setState({ [e.target.name]: e.target.value })
    }

    handleSubmit = (e) => {
        e.preventDefault();

        let data = { name: this.state.name, slug: this.state.slug };
        getcategorydetails.MainCategoryCreate(data)
            .then(result => {
                if (!result) {
                    NotificationManager.error("can't create category")
                }
            
                this.setState({ getList: [...this.state.getList,result.data.data] })
                // this.handleSocket(result.data.data)

            })

    }

    getMainCategory() {

        getcategorydetails.getMainCategory()
            .then(result => {
                if (!result) {
                    NotificationManager.error("empty category")
                }
                this.setState({ getList: result.data })
            })
    }

    handleDelete(id) {

        swal({
            title:"Are you sure?",
            text:"Delete the category",
            icon:"warning",
            dangerMode:true,
            buttons:true

        })
        .then(success=>{
            if (success) {
                getcategorydetails.deletecategorylist(id)
            .then(result => {
                if (!result) {
                    NotificationManager.error("cannot deleted category")
                    return
                }
                NotificationManager.success("deleted successfully");
                this.getMainCategory()
            })  
            }
        })
      
    }

    componentDidMount() {
        this.getMainCategory()
    }

    render() {
        let self = this.state.getList
        // console.log({self})
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
                                <h4>Add Main Category</h4>
                            </div>
                            <div className="card-body-table">
                                <div className="news-content-right pd-20">
                                    <div className="form-group">
                                        <label className="form-label">Name*</label>
                                        <input type="text" className="form-control" placeholder="Category name" name="name" value={this.state.name} onChange={(e) => this.handleChange(e)} />
                                    </div>
                                    <div className="form-group mb-0">
                                        <label className="form-label">Slug*</label>
                                        <input type="text" className="form-control" placeholder="grocery-staple" name="slug" value={this.state.slug} onChange={(e) => this.handleChange(e)} />
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
                                            <h4>All Main Categories</h4>
                                        </div>
                                        <div className="card-body-table">
                                            <div className="table-responsive">
                                                <table className="table ucp-table table-hover">
                                                    <thead>
                                                        <tr>
                                                            <th style={{ width: 60 }}><input type="checkbox" className="check-all" /></th>
                                                            <th scope="col">Name</th>
                                                            <th scope="col">Slug</th>
                                                            <th scope="col">Date</th>
                                                            <th scope="col">Action</th>
                                                        </tr>
                                                    </thead>
                                                    <tbody>
                                                        {
                                                            self.map((row, index) => (
                                                                <tr key={index}>
                                                                    <td><input type="checkbox" className="check-item" name="ids[]" defaultValue={5} /></td>
                                                                    <td>{row.name}</td>
                                                                    <td>{row.slug}</td>
                                                                    <td>
                                                                        <span className="delivery-time">{this.formatDate(row.createdAt)}</span>
                                                                    </td>
                                                                    <td className="action-btns">
                                                                        <Edit state={row} />
                                                                        <Typography className="delete-btn" onClick={(e) => this.handleDelete(row.id)} ><i className="fas fa-trash-alt" /></Typography>
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
