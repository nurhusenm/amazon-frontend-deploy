import axios from "axios";

const axiosInstance = axios.create({
  // baseURL: "http://127.0.0.1:5001/clone-c421b/us-central1/api",
  //deploy version of amazon server on render.com
  baseURL: "https://amazon-api-deploy-mjpq.onrender.com/",
});

export { axiosInstance };
