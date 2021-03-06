import StorageKeys from '../constants/storage-key';
import axiosClient from './axiosClient';

const userApi = {
  register(data) {
    const url = '/register';
    return axiosClient.post(url, data);
  },

  login(data) {
    const url = '/login';
    return axiosClient.post(url, data,{
      headers: {
                 'Access-Control-Allow-Origin': '*',
                 'Access-Control-Allow-Methods': 'GET, POST, OPTIONS, PUT, PATCH, DELETE',
                 'Access-Control-Allow-Headers': 'userid, authorization, Access-Control-Allow-Headers, Origin,Accept, X-Requested-With, Content-Type, Access-Control-Request-Method, Access-Control-Request-Headers',
                 'Access-Control-Allow-Credentials': 'true',
        
              },});
  },
  logout(data){
    const url ='/logout';
    return axiosClient.post(url, data,{
      headers: {
                 'Access-Control-Allow-Origin': '*',
                 'Access-Control-Allow-Methods': 'GET, POST, OPTIONS, PUT, PATCH, DELETE',
                 'Access-Control-Allow-Headers': 'userid, authorization, Access-Control-Allow-Headers, Origin,Accept, X-Requested-With, Content-Type, Access-Control-Request-Method, Access-Control-Request-Headers',
                 'Access-Control-Allow-Credentials': 'true',
                 'x-wfg-token': `${localStorage.getItem(StorageKeys.TOKEN)}`,
        
              },});

  }
  ,

  infoProfile(data) {
    const url = "/profile";
    return axiosClient.get(url, {
      headers: {
        "Access-Control-Allow-Origin": "*",
        "Access-Control-Allow-Methods":
          "GET, POST, OPTIONS, PUT, PATCH, DELETE",
        "Access-Control-Allow-Headers":
          "userid, authorization, Access-Control-Allow-Headers, Origin,Accept, X-Requested-With, Content-Type, Access-Control-Request-Method, Access-Control-Request-Headers",
        "Access-Control-Allow-Credentials": "true",
        authorization: `${localStorage.getItem(StorageKeys.TOKEN)}`,
      },
    });
  },
  getMess() {
    const url = "/privateMessage/60685a61a8953bc885582b70";
    return axiosClient.get(url)}
    ,
  
};

export default userApi;