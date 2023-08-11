import { NotificationManager } from "react-notifications"
import { apis } from "../../../config"
import ApiConfig from "../../ApiConfig"

const  getAllArea=()=>{

    let result=ApiConfig.get(apis.getAllArea)
    .then(result=>{
        if (result.data.error) {
            NotificationManager.error(result.data.error)
            return 
        }
        return result.data
    })

    return result
}

const  updateArea=(info)=>{

    let result=ApiConfig.post(apis.updateArea,info)
    .then(result=>{
        if (result.data.error) {
            NotificationManager.error(result.data.error)
            return 
        }
        return result.data
    })

    return result
}

const  deleteArea=(id)=>{

    let result=ApiConfig.delete(apis.deleteArea,{params:{id}})
    .then(result=>{
        if (result.data.error) {
            NotificationManager.error(result.data.error)
            return 
        }
        return result.data
    })

    return result
}

const  createArea=(info)=>{

    let result=ApiConfig.post(apis.createArea,info)
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
    getAllArea,
    updateArea,
    createArea,
    deleteArea
}
