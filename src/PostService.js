import Api from "./Configuration";

export default {
  getPosts(param, header) {
    return Api().get("posts", header);
  }
};
