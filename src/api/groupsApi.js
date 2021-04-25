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

  getMess(data) {
    const url = "/publicMessage";
    return axiosClient.get(url,{params: {
      groupId : data
    }})},

  getGroupById(data) {
    const url = '/groups/getGroupsById';
    return axiosClient.get(url, {"_id" : data });
  },
  
};


export default groupsApi;
