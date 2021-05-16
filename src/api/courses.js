import StorageKeys from "../constants/storage-key";
import axiosClient from "./axiosClient";

const CoursesApi = {
  getAll() {
    const url = "/courses";
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

  createCourses(data) {
    const url = "/courses";
    return axiosClient.post(url, data);
  },

  getCoursesById(id) {
    const url = '/courses/get-course-id/'+id;
    return axiosClient.get(url);
  },
  deleteCourses(data) {
    const url = '/courses/delete-course-id';
    return axiosClient.delete(url, { data: data});
  },
  

};


export default CoursesApi;
