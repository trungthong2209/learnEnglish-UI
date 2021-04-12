import StorageKeys from '../constants/storage-key';
import axiosClient from './axiosClient';

const groupsApi = {
  getAll(params) {
    const url = '/group/get-all-group';
    return axiosClient.get(url,{
        headers: {
                   'Access-Control-Allow-Origin': '*',
                   'Access-Control-Allow-Methods': 'GET, POST, OPTIONS, PUT, PATCH, DELETE',
                   'Access-Control-Allow-Headers': 'userid, authorization, Access-Control-Allow-Headers, Origin,Accept, X-Requested-With, Content-Type, Access-Control-Request-Method, Access-Control-Request-Headers',
                   'Access-Control-Allow-Credentials': 'true',
                   'authorization': `${localStorage.getItem(StorageKeys.TOKEN)}`
                },});
    },
    getGroup(id){

    }
  
};

export default groupsApi;