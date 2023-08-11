import { Button } from '@material-ui/core'
import React, { Component } from 'react'
import fetchLocation from '../../../../services/fetchLocation';
import { NotificationManager } from 'react-notifications';
import swal from 'sweetalert';
import AutoSelect from '../../../../common/autoselect'
import fetchArea from '../../../../services/fetchArea';

const Arrays=(array,fieldname,fieldvalue)=>{
    
  const arrayList=[];

  array.map(data=>{
    arrayList.push({label:data[fieldname],value:data[fieldvalue]})
    return null;

  })

  return arrayList;

}

export default class Create extends Component {

  constructor(props){
    super(props);
    this.state={
      status:1,
      area:'',
      getList:[], 
      selectLocation:'',
    }
  }

  getAllLocation=()=>{
    fetchLocation.getAllLocation()
    .then(result=>{
      if (result) {
        this.setState({getList:result.data})
        return
      }
      NotificationManager.error("empty locations")
    })
  }

  componentDidMount(){
    this.getAllLocation()
  }

  handleChange=(e)=>{
    this.setState({
      [e.target.name]:e.target.value
    })
  }

  handleBack(){
    this.props.history.goBack();
  }

  handleSelectChange=(name,selected)=>{
    this.setState({selectLocation:selected})
  }

  handleSubmit=(e)=>{
    e.preventDefault();
    let data={name:this.state.area,status:this.state.status,locationId:this.state.selectLocation.value};


 swal({
  title:"Are you sure?",
  text:"click ok for create area",
  buttons:true,
  dangerMode:true,
  icon:"warning"
 }).then(success=>{

  if (success) {
    fetchArea.createArea(data)
    .then(result=>{
      if (result) {
        window.location.href="/admin/area/list";
        return
      }
      NotificationManager.error("cannot create area")
    })
  }
 })

   
  }

  render() {
    const{ getList, selectLocation} = this.state;
    return (
        <div className="container-fluid">
            <div className="row">
                <div className="col-lg-5 col-md-9 col-lg-6">
                    <h2 className="mt-30 page-title">Areas</h2>
                </div>
                <div className="col-lg-5 col-md-3 col-lg-6 back-btn">
                    <Button variant="contained" onClick={(e) => this.handleBack()}><i class="fas fa-arrow-left" /> Back</Button>
                </div>
            </div>
            <ol className="breadcrumb mb-30">
                <li className="breadcrumb-item"><a href="index.html">Dashboard</a></li>
                <li className="breadcrumb-item"><a href="areas.html">Areas</a></li>
                <li className="breadcrumb-item active">Add Area</li>
            </ol>
            <div className="row">
                <div className="col-lg-5 col-md-6">
                    <div className="card card-static-2 mb-30">
                        <div className="card-title-2">
                            <h4>Add New Area</h4>
                        </div>
                        <div className="card-body-table">
                            <div className="news-content-right pd-20">
                                <div className="form-group">
                                    <label className="form-label">Name*</label>
                                    <input type="text" className="form-control" placeholder="Area Name" name="area" value={this.state.area} onChange={(e) => this.handleChange(e)}/>
                                </div>
                                <div className="form-group">
                                    <label className="form-label">Location*</label>
                                    <AutoSelect
                                        className="basic-single"
                                        value={selectLocation}
                                        onChange={this.handleSelectChange}
                                        isSearchable={true}
                                        name="location_id"
                                        options={Arrays(getList, "name", "id")}
                                    />

                                </div>
                                <div className="form-group">
                                    <label className="form-label">Status*</label>
                                    <select id="status" name="status" className="form-control" value={this.state.status} onChange={(e) => this.handleChange(e)}>
                                        <option value={1}>Active</option>
                                        <option value={0}>Inactive</option>
                                    </select>
                                </div>
                                <button className="save-btn hover-btn" type="submit" onClick={this.handleSubmit}>Add New</button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>

    )
  }
}
