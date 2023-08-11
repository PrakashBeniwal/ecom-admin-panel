import { NotificationManager } from "react-notifications";
import { apis } from "../../../config"
import ApiConfig from "../../ApiConfig"



const  getOrderCount=async()=>{
    const result=await ApiConfig.get(apis.getAllOrderCount);
    if (result) {
        return result.data
    }

    NotificationManager.error("data not found")
    return null
}

const getAllOrderList=async()=>{
    const result=await ApiConfig.get(apis.getAllOrderList);

    if (!result) {
        NotificationManager.error("order not found")
        return null
    }
    return result.data
}

const getOrderByStatus=async(status)=>{
    const data={status}
    const result=await ApiConfig.post(apis.getAllOrderByStatus,data);

    if (!result) {
        NotificationManager.error("order not found")
        return null
    }
    return result.data
}

const getUpdateOrder=async(data)=>{
    const result=await ApiConfig.post(apis.getUpdateOrder,data);

    if (!result) {
        NotificationManager.error("order not found")
        return null
    }
    return result.data
}


export default {
    getOrderCount,
    getAllOrderList,
    getOrderByStatus,
    getUpdateOrder
}