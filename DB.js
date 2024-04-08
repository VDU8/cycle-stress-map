const {createPool} = require('mysql');
// const mdb = require('mariadb');

const db = createPool({
    host: "localhost",
    user: "root",
    password: "root",
    database: "stesting",
    connectionLimit: 10
  });

// const mb = mdb.createPool({
//     host: "mydb.com",
//     user: "root",
//     password: " ",
//     database: "stress_test",
//     connectionLimit: 10
//   });

  // db.query(`select * from gender`, (err, result, fields)=> {
  //   if(err){
  //       return console.log(err)
  //   }
  //   return console.log(result);
  // })

  db.query(`select * from gender`, (err, result, fields)=> {
    if(err){
        return console.log(err)
    }
    return console.log(result);
  })