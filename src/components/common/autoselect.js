import React from 'react'
import Select from 'react-select'


const renderOption=(props)=>{
const{options}=props;
return options
}

function autoselect(props) {

  const{
    onChange,
    name,
    value,
    loading,
    disabled,
    classNames,}=props;
  return (
    // <div id='layoutSidenav_content'>
        <Select
        className={classNames}
        isSearchable={true}
        isLoading={loading}
        isDisabled={disabled}
        name={name}
        classNamePrefix="Project"
        value={value}
        options={renderOption(props)}
        onChange={(value,action)=>{
        onChange(action.name,value)
        }}
        />
    // </div>
  )
}

export default autoselect