import ajax from "./ajax";
import qs from "qs";

export const addUser = data => {
  return ajax.post("/addUser", qs.stringify(data));
};

export const delUser = id => {
  const params = {
    id: id
  };
  return ajax.get("/delUser", { params: params });
};

export const updataUser = row => {
  const data = { id: row.id, name: "测试" };
  return ajax.post("/updataUser", qs.stringify(data));
};

export const getUser = id => {
  const params = {
    id: id
  };
  return ajax.get("/getUser", { params: params });
};
