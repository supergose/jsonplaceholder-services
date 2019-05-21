import axios from "axios";

export default (porta, head) => {
  porta = porta === undefined || porta == "" ? "" : ":" + porta;
  let myBaseUrl = "http://jsonplaceholder.typicode.com/";
  return axios.create({
    baseURL: myBaseUrl,
    withCredentials: false,
    header: head
  });
};
