import { Modal } from '@material-ui/core'
import React, { Component } from 'react'
import getcategorydetails from '../../../../services/getcategorydetails';
import fetchLocation from '../../../../services/fetchLocation';
import fetchArea from '../../../../services/fetchArea';

export default class Edit extends Component {

  constructor(props){
    super(props);
    this.state={
      name:this.props.state.name,
      status:this.props.state.status,
      open:false
    }
  }

  handleOpen(){
    this.setState({open:!this.state.open,loading:true})
  }

  handleClose(){
    this.setState({open:!this.state.open})
  }

  handleChange(e){
    this.setState({[e.target.name]:e.target.value})
  }

  handleSubmit(){
    let data={id:this.props.state.id,status:this.state.status,name:this.state.name}

    fetchArea.updateArea(data)
    .then(data=>{
      if (data) {
        window.location.reload()
        this.handleOpen()
      }
    })
  }
  render() {
    return (
      <div >
      <a className="edit-btn" onClick={(e) => this.handleOpen()}><i className="fas fa-edit" /></a>
      <Modal
          aria-labelledby="simple-modal-title"
          aria-describedby="simple-modal-description"
          open={this.state.open}
      >
          <div className="modal-dialog" role="document">
              <div className="modal-content">
                  <div className="modal-header">
                      <h5 className="modal-title" id="exampleModalLabel">Update Location</h5>
                      <button type="button" className="close" data-dismiss="modal" aria-label="Close" onClick={()=>this.handleClose()}>
                          <span aria-hidden="true">×</span>
                      </button>
                  </div>
                  <div className="modal-body">
                      <div className="form-group">
                          <label className="form-label">Name*</label>
                          <input type="text" className="form-control" name="name"value={this.state.name} onChange={(e) => this.handleChange(e)} />
                      </div>
                      <div className="form-group">
                          <label className="form-label">Status*</label>
                          <select id="status" name="status" className="form-control" value={this.state.status} onChange={(e) => this.handleChange(e)}>
                              <option value={1}>Active</option>
                              <option value={0}>Inactive</option>
                          </select>
                      </div>
                  </div>
                  <div className="modal-footer">
                      <button type="button" className="btn btn-secondary" data-dismiss="modal" onClick={()=>this.handleClose()}>Close</button>
                      <button type="button" className="btn btn-primary" onClick={()=>this.handleSubmit()}>Save changes</button>
                  </div>
              </div>
          </div>
      </Modal>
  </div>
    )
  }
}
