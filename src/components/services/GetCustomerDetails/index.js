import api from '../../ApiConfig';
import {  apis } from '../../../config';
import { NotificationManager } from 'react-notifications';

const getAllCustomerList = async () => {
    try {
        let result = await api.post(apis.GetAllCustomerDetails);
        if (result.errors) {
            NotificationManager.error(result.errors);
            return null;
        }
        return result.data;
    } catch (error) {
        console.log(error);
        return null;
    }
};

const getCustomerDeleteById = async (id) => {
    try {
        let result = await api.delete(apis.GetCustomerDeleteById,{params: {id}});
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
export default {
    getAllCustomerList,
    getCustomerDeleteById
};