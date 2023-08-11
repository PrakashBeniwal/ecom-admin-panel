import { NotificationManager } from "react-notifications"
import { apis } from "../../../config"
import ApiConfig from "../../ApiConfig"

const getcategorylist=()=>{

   const data= ApiConfig.get(apis.getcategoryList)
    .then(result=>{
        if (result.data.error) {
            NotificationManager.error("empty categories")
            return null
        }
        return result.data
    }).catch(err=>{
        console.log(err)
        return null
    })
return (data)

}

const deletecategorylist=(id)=>{

   const data= ApiConfig.delete(apis.deleteMainCategory,{params:{id}})
    .then(result=>{
        if (result.data.error) {
            NotificationManager.error("empty categories")
            return null
        }
        return result.data
    }).catch(err=>{
        console.log(err)
        return null
    })
return (data)

}


const getcategorydelete=(id)=>{

    const data= ApiConfig.delete(apis.getCategoryDeleteById,{params:{id}})
     .then(result=>{
         if (result.data.error) {
             NotificationManager.error(result.data.error)
             return null
         }
         return result
     }).catch(err=>{
         console.log(err)
         return null
     })
 return (data)
 
 }

const MainCategoryCreate=(info)=>{

    const data= ApiConfig.post(apis.MainCatCreate,info)
     .then(result=>{
         if (result.data.error) {
             NotificationManager.error(result.data.error)
             return null
         }
         return result
     }).catch(err=>{
         console.log(err)
         return null
     })
 return (data)
 
 }
const getMainCategory=()=>{

    const data= ApiConfig.get(apis.getMainList)
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
const getMainCatUpdate=(info)=>{

    const data= ApiConfig.post(apis.getMainCatUpdate,info)
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


const getSubCatUpdate=(info)=>{

    const data= ApiConfig.post(apis.getSubCatUpdate,info)
     .then(result=>{
         if (result.data.error) {
             NotificationManager.error(result.data.error)
             return null
         }
         console.log(result)
         return result.data
     }).catch(err=>{
         console.log(err)
         return null
     })
 return (data)
 
 }



const getSubCategory=()=>{

    const data= ApiConfig.get(apis.getSubCategoryList)
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


const createSubCategory=(info)=>{

    const data= ApiConfig.post(apis.getSubCategoryCreat,info)
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

const deleteSubCategory=(id)=>{

    const data= ApiConfig.delete(apis.deleteSubCategory,{params:{id}})
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

const getSubChildCategory=()=>{

    const data= ApiConfig.get(apis.getSubChildCategory)
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
const createSubChildCategory=(info)=>{

    const data= ApiConfig.post(apis.createSubChildCategory,info)
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

const deleteSubChildCategory=(id)=>{

    const data= ApiConfig.delete(apis.deleteSubChildCategory+`?id=${id}`)
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

const updateSubChildCategory=(info)=>{

    const data= ApiConfig.post(apis.updateSubChildCategory,info)
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


const getAllSubCategory=(id)=>{

    const data= ApiConfig.get(apis.getAllSubCategory+`${id}`)
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
const getAllSubChildCategory=(id)=>{

    const data= ApiConfig.get(apis.getAllChildSubCategory+`${id}`)
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

export default{
    getcategorylist,
    deletecategorylist,
    getcategorydelete,
    MainCategoryCreate,
    getMainCategory,
    getMainCatUpdate,
    getSubCategory,
    getSubCatUpdate,
    createSubCategory,
    deleteSubCategory,
    getSubChildCategory,
    createSubChildCategory,
    deleteSubChildCategory,
    getAllSubCategory,
    updateSubChildCategory,
    getAllSubChildCategory
}