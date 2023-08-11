const api_url=document.domain=='localhost'?"http://localhost:4000":"";
// const API_URL =
//     document.domain === 'localhost'
//     ? "https://localhost:4000"
//     : "https://localhost:4000";

const apis={
    //Authentication
    GetUserLogin:`${api_url}/api/auth/rootLogin`,
    GetUserRegister:`${api_url}/api/auth/register`,

    getAllOrderCount:`${api_url}/api/order/count`,
    getAllOrderList:`${api_url}/api/order/list`,
    getAllOrderByStatus:`${api_url}/api/order/status`,
    getUpdateOrder:`${api_url}/api/order/status/update`,


    // category
    getcategoryList:`${api_url}/api/category/list`,
    MainCatCreate:`${api_url}/api/category/create`,
    getMainList:`${api_url}/api/category/main-list`,
    getMainCatUpdate:`${api_url}/api/category/main-list/update`,
    deleteMainCategory:`${api_url}/api/category/main-list/delete`,
    getCategoryDeleteById:`${api_url}/api/category/child/deleteById`,


    //subcategory
    getSubCategoryList:`${api_url}/api/category/sub-list`,
    getSubCatUpdate:`${api_url}/api/category/sub-list/update`,
    getSubCategoryCreat:`${api_url}/api/category/create-sub`,
    deleteSubCategory:`${api_url}/api/category/sub-list/delete`,
    getAllSubCategory:`${api_url}/api/category/getAllSubCategory?categoryId=`,


    //childcategory
    getSubChildCategory:`${api_url}/api/category/list`,
    createSubChildCategory:`${api_url}/api/category/create-sub-child`,
    deleteSubChildCategory:`${api_url}/api/category/child/deleteById`,
    updateSubChildCategory:`${api_url}/api/category/child/updateById`,
    getAllChildSubCategory:`${api_url}/api/category/getAllSubChildCategory?subcategoryId=`,


    //Location
    getAllLocation:`${api_url}/api/location/list`,
    createLocation:`${api_url}/api/location/create`,
    deleteLocation:`${api_url}/api/location/delete`,
    updateLocation:`${api_url}/api/location/update`,


     //area
     getAllArea:`${api_url}/api/location/area/getAllAreaList`,
     createArea:`${api_url}/api/location/area/create`,
     deleteArea:`${api_url}/api/location/area/delete`,
     updateArea:`${api_url}/api/location/area/update`,

     //product
     getAllProduct:`${api_url}/api/Product/getAllProductList`,
     createProduct:`${api_url}/api/Product/add`,
     deleteProduct:`${api_url}/api/Product/delete`,
     updateProduct:`${api_url}/api/Product/update`,
     GetAllProductList: `${api_url}/api/product/getAllproductList`,
     GetAllProductPhoto: `${api_url}/api/product/getAllPhoto`,
     GetUploadProductImage: `${api_url}/api/product/upload-img`,
     GetProductPhotoDeleteById: `${api_url}/api/product/aws/delete/photo`,
     GetProductById: `${api_url}/api/product/getWebProductById`,

 // customer details
 GetAllCustomerDetails: `${api_url}/api/customer/list`,
 GetCustomerDeleteById: `${api_url}/api/customer/delete`,

 // payment details

 GetAllPaymentList: `${api_url}/api/payment/getAllPayment`

}

export{api_url,apis};