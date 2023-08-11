import Axios from "axios";
import { api_url } from "../config";
import { getCookie } from "../function";

export default Axios.create(
    {
        baseURL:api_url,
       headers:{
        "content-Type":"application/json",
        "Authrization":getCookie('token')
       }
    }
)