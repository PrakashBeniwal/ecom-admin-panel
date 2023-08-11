import { NotificationManager } from "react-notifications"
import { apis } from "../../../config"
import ApiConfig from "../../ApiConfig"

const  getAllLocation=()=>{

    let result=ApiConfig.get(apis.getAllLocation)
    .then(result=>{
        if (result.data.error) {
            NotificationManager.error(result.data.error)
            return 
        }
        return result.data
    })

    return result
}

const  updateLocation=(info)=>{

    let result=ApiConfig.post(apis.updateLocation,info)
    .then(result=>{
        if (result.data.error) {
            NotificationManager.error(result.data.error)
            return 
        }
        return result.data
    })

    return result
}

const  deleteLocation=(id)=>{

    let result=ApiConfig.delete(apis.deleteLocation,{params:{id}})
    .then(result=>{
        if (result.data.error) {
            NotificationManager.error(result.data.error)
            return 
        }
        return result.data
    })

    return result
}

const  createLocation=(info)=>{

    let result=ApiConfig.post(apis.createLocation,info)
    .then(result=>{
        if (result.data.error) {
            NotificationManager.error(result.data.error)
            return 
        }
        return result.data
    })

    return result
}

export default{
    getAllLocation,
    updateLocation,
    createLocation,
    deleteLocation
}
