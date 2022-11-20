const { promiseImpl } = require('ejs');
var express = require('express');
var router = express.Router();
var db = require('../config/db')

router.post('/', (req,res)=>{
    const data = req.body
    db.query(`INSERT INTO reservations(name, email, workshop_id) VALUES ('${data.name}','${data.email}','${data.id}')`, (err,result)=>{
        if(err) throw err
        if(result.affectedRows == '1'){
          db.query(`SELECT * FROM reservations WHERE workshop_id = ${data.id}`, (err, reservation)=>{
            if(err) throw err
            db.query(`SELECT * FROM events WHERE id =${data.id}`, (err, event)=>{
                if(err) throw err
                db.query(`SELECT * FROM workshops WHERE event_id = ${data.id}`, (err, workshop)=>{
                    if(err) throw err
                    res.json({
                        reservation: reservation,
                        event: event,
                        workshop: workshop

                    })
                })
            })
          })
        }
    })
})

module.exports = router;
