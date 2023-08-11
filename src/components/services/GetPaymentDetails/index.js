import api from '../../ApiConfig';
import {  apis } from '../../../config';
import { NotificationManager } from 'react-notifications';

const getAllPaymentList = async () => {
    try {
        let result = await api.get(apis.GetAllPaymentList);
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
    getAllPaymentList,
};