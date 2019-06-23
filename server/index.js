const routerApi = require("./api");
const bodyParser = require("body-parser"); // post 数据是需要
const express = require("express");
const app = express();

app.use(bodyParser.json());
app.use(
  bodyParser.urlencoded({
    extended: false
  })
);

app.all("*", function(req, res, next) {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Methods", "PUT, GET, POST, DELETE, OPTIONS");
  res.header(
    "Access-Control-Allow-Headers",
    "Content-Type, access_token, X-Requested-With"
  );
  next();
  //   res.header("Content-Type", "application/json;charset=utf-8");
  //   console.log(req.originalUrl, "11111");
  //   if (
  //     rouetpass.indexOf(req.originalUrl) > -1 ||
  //     req.originalUrl.split("/").indexOf("static") > -1
  //   ) {
  //     next();
  //   } else {
  //     if (req.method != "OPTIONS") {
  //       var accesstoken = req.headers["access_token"];
  //       let datatoken = token.decodeToken(accesstoken);
  //       // console.log(data)
  //       if (datatoken.flag) {
  //         next();
  //       } else {
  //         data.meta.code = 401;
  //         res.send(data);
  //       }
  //     } else {
  //       next();
  //     }
  //   }
});

app.use("/api", routerApi);

app.listen(3000);
console.log("success listen at port:3000...");
