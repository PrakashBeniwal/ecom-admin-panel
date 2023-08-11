import React, { Component } from 'react'
import Autoselect from '../../autoselect'
import getcategorydetails from '../../../services/getcategorydetails'
const Arrays=(array,fieldname,fieldvalue)=>{
    
  const arrayList=[];

  array.map(data=>{
    arrayList.push({label:data[fieldname],value:data[fieldvalue]})
    return null;

  })

  return arrayList;

}

export default class MainCategoryList extends Component {

  constructor(props){
    super(props);
    this.state={
      selectCategory:'',
      getList:[]
    }
  }

  handleSelectChange=(name,selected)=>{
  //   this.setState({
  //     list: {
  //         ...this.state.list,
  //         [name]: selected.value,
  //     },
  //     selectCategory: selected,
  // });
    this.setState({selectCategory:selected})
    this.props.onSelectCategory(selected.value)
    // this.setState({ changed: true });
  }

  getCategoryList(){
    getcategorydetails.getMainCategory()
    .then(result=>{
      this.setState({getList:result.data})
    })
  }

  componentDidMount(){
    this.getCategoryList()
  }

  render() {

    const{getList,selectCategory}=this.state
    return (
      
        <Autoselect
                    className="basic-single"
                    value={selectCategory}
                    onChange={this.handleSelectChange}
                    isSearchable={true}
                    name="category_id"
                    options={Arrays(getList, "name", "id")}
        />
      
    )
  }
}
