const mysql = require('mysql')
const dbconnect = mysql.createConnection({
    host     : 'localhost',
    user     : 'root',
    password : '',
    database : 'eventdb'
})

dbconnect.connect((err)=>{
    if(err){
        console.log(err)
    }else{
        console.log('Mysql Database Connected')
    }
})

module.exports = dbconnect