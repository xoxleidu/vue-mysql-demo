const mysql = require("mysql");
const dbConfig = require("./db");

const pool = mysql.createPool({
  host: dbConfig.mysql.host,
  user: dbConfig.mysql.user,
  password: dbConfig.mysql.password,
  database: dbConfig.mysql.database,
  port: dbConfig.mysql.port,
  multipleStatements: true // 多语句查询
});

module.exports = {
  addUser(req, res, next) {
    pool.getConnection((err, connection) => {
      connection.query(
        "INSERT INTO user(id,name) VALUES (?,?)",
        [req.body.id, req.body.name],
        (err, result) => {
          res.json(result);
          connection.release();
        }
      );
    });
  },
  delUser(req, res, next) {
    pool.getConnection((err, connection) => {
      connection.query(
        "DELETE FROM user WHERE id = ?",
        [req.query.id],
        (err, result) => {
          res.json(result);
          connection.release();
        }
      );
    });
  },
  updataUser(req, res, next) {
    var id = req.body.id,
      name = req.body.name;
    pool.getConnection((err, connection) => {
      connection.query(
        "UPDATE user SET name = ? WHERE id = ?",
        [name, id],
        (err, result) => {
          res.json(result);
          connection.release();
        }
      );
    });
  },
  getUser(req, res, next) {
    var id = req.query.id;
    if (id) {
      pool.getConnection((err, connection) => {
        connection.query(
          "SELECT * FROM user WHERE id = ?",
          [id],
          (err, result) => {
            res.json(result);
            connection.release();
          }
        );
      });
    } else {
      pool.getConnection((err, connection) => {
        connection.query("SELECT * FROM user", (err, result) => {
          res.json(result);
          connection.release();
        });
      });
    }
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
