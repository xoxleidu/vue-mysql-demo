const routerApi = require("./router");
const bodyParser = require("body-parser"); // post 数据是需要
const express = require("express");
const app = express();

app.use(bodyParser.json());
app.use(
  bodyParser.urlencoded({
    extended: false
  })
);

app.use("/api", routerApi);

// app.get("/api/getUser", (req, res, next) => {
//   // res.header("Access-Control-Allow-Origin", "*");
//   // res.header("Access-Control-Allow-Headers", "X-Requested-With,Content-Type");
//   // res.header("Access-Control-Allow-Methods", "PUT,POST,GET,DELETE,OPTIONS");
//   // next();
//   res.json({
//     data: "后台返回结果"
//   });
// });

app.listen(3000);
console.log("success listen at port:3000...");
