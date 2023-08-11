import { NotificationManager } from "react-notifications"
import { apis } from "../../../config"
import ApiConfig from "../../ApiConfig"




 const addProductList=(info,config)=>{
    const data= ApiConfig.post(apis.createProduct,info,config)
    .then(result=>{
        if (result.data.error) {
            NotificationManager.error(result.data.error)
            return null
        }
        return result.data
    }).catch(err=>{
        console.log(err)
        return null
    })
return (data)
 }

 const getProductList=()=>{
    const data= ApiConfig.get(apis.getAllProduct)
    .then(result=>{
        if (result.data.error) {
            NotificationManager.error(result.data.error)
            return null
        }
        return result.data
    }).catch(err=>{
        console.log(err)
        return null
    })
return (data)
 }
 const deleteProduct=(id)=>{
    const data= ApiConfig.delete(apis.deleteProduct,{params:{id}})
    .then(result=>{
        if (result.data.error) {
            NotificationManager.error(result.data.error)
            return null
        }
        return result.data
    }).catch(err=>{
        console.log(err)
        return null
    })
return (data)
 }
 const getUpdateProduct=(info,config)=>{
    const data= ApiConfig.post(apis.updateProduct,info,config)
    .then(result=>{
        if (result.data.error) {
            NotificationManager.error(result.data.error)
            return null
        }
        return result.data
    }).catch(err=>{
        console.log(err)
        return null
    })
return (data)
 }

 const getAllProductList = async () => {
    try {
        let result = await ApiConfig.get(apis.GetAllProductList);
        if (result.data.error) {
            NotificationManager.error(result.data.error);
            return null;
        }
        return result.data;
    } catch (error) {
        console.log(error);
        return null;
    }
};
const getAllProductPhoto = async () => {
    try {
        let result = await ApiConfig.get(apis.GetAllProductPhoto);
        if (result.data.error) {
            NotificationManager.error(result.data.error);
            return null;
        }
        return result.data;
    } catch (error) {
        console.log(error);
        return null;
    }
};

const getUploadProductImage = async (data,config) => {
    try {
        let result = await ApiConfig.post(apis.GetUploadProductImage,data,config);
        if (result.data.error) {
            NotificationManager.error(result.data.error);
            return null;
        }
        return result.data;
    } catch (error) {
        console.log(error);
        return null;
    }
};

const getProductPhotoDeleteById = async (data) => {
    try {
        let result = await ApiConfig.post(apis.GetProductPhotoDeleteById,{
            id: data.id, imgUrl: data.imgUrl
        });
        if (result.data.error) {
            NotificationManager.error(result.data.error);
            return null;
        }
        return result.data;
    } catch (error) {
        console.log(error);
        return null;
    }
};
const getProductById = async (id) => {
    try {
        let result = await ApiConfig.get(apis.GetProductById,{params: {id}});
        if (result.data.error) {
            NotificationManager.error(result.data.error);
            return null;
        }
        return result.data;
    } catch (error) {
        console.log(error);
        return null;
    }
};

 export default{
    addProductList,
    getProductList,
    deleteProduct,
    getUpdateProduct,
    getAllProductList,
    getAllProductPhoto,
    getUploadProductImage,
    getProductPhotoDeleteById,
    getProductById
 }