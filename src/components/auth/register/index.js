import React, { Component } from 'react'
import { getUserLogin } from '../../services';
import {Redirect} from 'react-router-dom'
export default class Register extends Component {

    constructor(props){
        super(props);
        this.state= {
            firstName:"",
            lastName:"",
            phoneNo:"",
            address:"",
            email:"",
            password:"",
            redirectToReference:false 
        }

    }

    handleChangeUser(e){
        this.setState({[e.target.name]: e.target.value})
    }

 handleSubmit=async(e)=>{
        e.preventDefault();
        // let data={firstName:this.state.firstName,lastName:this.state.lastName,password:this.state.password,email:this.state.email,phoneNo:this.state.phoneNo,address:this.state.address}
        
        const{ firstName, lastName, phoneNo, address, email, password } = this.state;
        let data = { firstName: firstName, lastName: lastName, phoneNo: phoneNo, address: address, email, password };

        let result = await getUserLogin.registerUser(data);

        if (result) {
            this.setState({redirectToReference:true})
            window.location.reload();
        }
        

    }

  render() {

    if (this.state.redirectToReference) {
        return <Redirect to={"/auth/login"}/>
    }


    return (
        <div className="bg-sign">
        <div id="layoutAuthentication">
            <div id="layoutAuthentication_content">
                <main>
                    <div className="container">
                        <div className="row justify-content-center">
                            <div className="col-lg-5">
                                <div className="card shadow-lg border-0 rounded-lg mt-5">
                                    <div className="card-header card-sign-header">
                                        <h3 className="text-center font-weight-light my-4">Register</h3>
                                    </div>
                                    <div className="card-body">
                                        <form>
                                            <div className="form-group">
                                                <label className="form-label">First Name*</label>
                                                <input className="form-control py-3" type="text" placeholder="Enter firstname" name="firstName" value={this.state.firstName} onChange={(e) => this.handleChangeUser(e)} />
                                            </div>
                                            <div className="form-group">
                                                <label className="form-label" >Last Name*</label>
                                                <input className="form-control py-3"  type="text" placeholder="Enter lastName" name="lastName" value={this.state.lastName} onChange={(e) => this.handleChangeUser(e)} />
                                            </div>
                                            <div className="form-group">
                                                <label className="form-label">Phone*</label>
                                                <input className="form-control py-3" type="number" placeholder="Enter phone" name="phoneNo" value={this.state.phoneNo} onChange={(e) => this.handleChangeUser(e)} />
                                            </div>
                                            <div className="form-group">
                                                <label className="form-label" >Address*</label>
                                                <input className="form-control py-3"  type="text" placeholder="Enter address" name="address" value={this.state.address} onChange={(e) => this.handleChangeUser(e)} />
                                            </div>
                                            <div className="form-group">
                                                <label className="form-label">Email*</label>
                                                <input className="form-control py-3" type="email" placeholder="Enter email address" name="email" value={this.state.email} onChange={(e) => this.handleChangeUser(e)} />
                                            </div>
                                            <div className="form-group">
                                                <label className="form-label" >Password*</label>
                                                <input className="form-control py-3"  type="password" placeholder="Enter password" name="password" value={this.state.password} onChange={(e) => this.handleChangeUser(e)} />
                                            </div>

                                            <div className="form-group d-flex align-items-center justify-content-between mt-4 mb-0" onClick={this.handleSubmit}>
                                                <a className="btn btn-sign hover-btn">Submit</a>
                                            </div>
                                        </form>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </main>
            </div>
        </div>
    </div>
    )
  }
}
