import Api from "./Configuration";

export default {
  getTodos(param, header) {
    return Api().get("todos", header);
  }
};
