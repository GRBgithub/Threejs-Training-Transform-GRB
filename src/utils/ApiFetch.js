import axios from "axios";
import { useHistory } from "react-router-dom";
const headers = {
  "Content-Type": "application/json",
};

 const ApiFetch ={
  Fetch: (url) => {
    return axios.post(url, { headers: headers });
  },
  isAuth: function () {
    return localStorage.getItem("token") !== null;
  },
  logout: function () {
    localStorage.clear();
  },
};

export default ApiFetch;