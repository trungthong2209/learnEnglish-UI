import StorageKeys from "../constants/storage-key";
import axiosClient from "./axiosClient";

const groupsApi = {
  getAll(params) {
    const url = "/groups";
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

  createGroup(data) {
    const url = "/groups/insert-group";
    return axiosClient.post(url, data);
  },

  getMess(id) {
    const url = "/publicMessage/"+id;
    return axiosClient.get(url)},


  getGroupById(groupId) {
    const url = '/groups/getGroupsById/'+groupId;
    return axiosClient.get(url);
  },
  uploadFile(data,id){
    const url = '/groups/upload-files/'+id;
    return axiosClient.post(url, data,{
      headers: {
        'Content-Type': 'multipart/form-data',
      },
    });

  }
  
};


export default groupsApi;
