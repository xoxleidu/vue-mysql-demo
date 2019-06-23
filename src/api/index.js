import ajax from "./ajax";
import qs from "qs";

export const getUser = data => {
  return ajax.get("/getValue", { params: data });
};

export const addUser = data => {
  console.log(data)
  //return ajax.post("/setValue", data);
  return ajax.post("/setValue", qs.stringify(data));
};
