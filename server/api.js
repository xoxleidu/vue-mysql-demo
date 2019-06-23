const mysql = require("mysql");
const dbConfig = require("./db");
const sqlMap = require("./sqlMap");

const pool = mysql.createPool({
  host: dbConfig.mysql.host,
  user: dbConfig.mysql.user,
  password: dbConfig.mysql.password,
  database: dbConfig.mysql.database,
  port: dbConfig.mysql.port,
  multipleStatements: true // 多语句查询
});

module.exports = {
  getValue(req, res, next) {
    var id = req.query.id;
    pool.getConnection((err, connection) => {
      var sql = sqlMap.getValue;
      connection.query(sql, [id], (err, result) => {
        res.header("Access-Control-Allow-Origin", "*");
        res.header(
          "Access-Control-Allow-Headers",
          "X-Requested-With,Content-Type"
        );
        res.header(
          "Access-Control-Allow-Methods",
          "PUT,POST,GET,DELETE,OPTIONS"
        );
        //next();
        res.json(result);
        connection.release();
      });
    });
  },
  setValue(req, res, next) {
    // if (req.method === "OPTIONS") {
    //   return;
    // }
    console.log(req.body);
    var id = req.body.id,
      name = req.body.name;
    pool.getConnection((err, connection) => {
      var sql = sqlMap.setValue;
      connection.query(sql, [name, id], (err, result) => {
        // res.setHeader("Content-Type", "application/json");
        res.header("Access-Control-Allow-Origin", "*");
        res.header(
          "Access-Control-Allow-Headers",
          "X-Requested-With,Content-Type"
        );
        res.header(
          "Access-Control-Allow-Methods",
          "PUT,POST,GET,DELETE,OPTIONS"
        );
        res.json(result);
        connection.release();
      });
    });
  }
};

// var setValue = function(){
//     pool.getConnection((err,connection)=>{
//         var sql = 'INSERT INTO user(id,name) VALUES (1,"admin")'
//         connection.query(sql,(err,result)=>{
//             console.log(result);
//             connection.release();
//         })
//     })
// }

// setValue();
