import React, { Component } from 'react'
import { getUserLogin } from '../../services';
import { NotificationManager } from 'react-notifications';
import {Redirect} from 'react-router-dom'
import Loader from '../../loader';
export default class Login extends Component {
    constructor(props){
        super(props);

        this.state={
            email: "",
            password: "",
            emailerror: '',
            passworderror: '',
            redirectToReferrer: false,
            isloaded: false
        }
    }

    handleChangeUser=(e)=>{
        this.setState({[e.target.name]:e.target.value})
    }

    handleSubmit=async(e)=>{
        e.preventDefault();
        let data={email:this.state.email,password:this.state.password};
        this.setState({isloaded:true})
        let result=await getUserLogin.getUserLogin(data);

        if (result) {
            getUserLogin.authenticate(result,()=>{
                this.setState({redirectToReferrer:true,isloaded:false})
                window.location.reload()
            })
        }else{
            NotificationManager.error("Please! Check Username & Password","Input Field")
            this.setState({isloaded:false})
        }
    }

  render() {
    if (this.state.redirectToReferrer || localStorage.getItem('token')) {
        return (<Redirect to={'/admin'}/>)
    }
    const{isloaded}=this.state
    return (
        <div className="bg-sign">
        <div id="layoutAuthentication">
            <div id="layoutAuthentication_content">
                <main>
                    <div className="container">
                        {
                            isloaded ? <Loader />:''
                        }
                        <div className="row justify-content-center">
                            <div className="col-lg-5">
                                <div className="card shadow-lg border-0 rounded-lg mt-5">
                                    <div className="card-header card-sign-header">
                                        <h3 className="text-center font-weight-light my-4">Login</h3>
                                    </div>
                                    <div className="card-body">
                                        <form>
                                            <div className="form-group">
                                                <label className="form-label" htmlFor="inputEmailAddress">Email*</label>
                                                <input className="form-control py-3" id="inputEmailAddress" type="email" placeholder="Enter email address" name="email" value={this.state.email} onChange={(e) => this.handleChangeUser(e)} />
                                            </div>
                                            <div className="form-group">
                                                <label className="form-label" htmlFor="inputPassword">Password*</label>
                                                <input className="form-control py-3" id="inputPassword" type="password" placeholder="Enter password" name="password" value={this.state.password} onChange={(e) => this.handleChangeUser(e)} />
                                            </div>
                                            <div className="form-group">
                                                <div className="custom-control custom-checkbox">
                                                    <input className="custom-control-input" id="rememberPasswordCheck" type="checkbox" />
                                                    <label className="custom-control-label" htmlFor="rememberPasswordCheck">Remember password</label>
                                                </div>
                                            </div>
                                            <div className="form-group d-flex align-items-center justify-content-between mt-4 mb-0" onClick={this.handleSubmit}>
                                                <a className="btn btn-sign hover-btn">Login</a>
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
