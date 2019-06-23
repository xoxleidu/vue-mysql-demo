/**
 * 'SELECT * FROM user WHERE id = ?'
 * 'UPDATE user SET name = ? WHERE id = ?'
 * 'DELETE FROM user WHERE id = ?'
 * 'INSERT INTO user(id,name) VALUES (1,"admin")'
 */
var sqlMap = {
  getValue: "SELECT * FROM user WHERE id = ?",
  setValue: "UPDATE user SET name = ? WHERE id = ?"
};

module.exports = sqlMap;
