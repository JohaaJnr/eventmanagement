var express = require('express')
var router = express.Router()
var db = require('../config/db')

router.get('/:id', (req,res)=>{
    const id = req.params.id
    db.query(`SELECT * FROM events WHERE id= ${id}`, (err,result)=>{
        if(err) throw err
        if(result.length == 0){
            res.json({
                messege: 'No event found'
            })
        }else{
            db.query(`SELECT * FROM workshops WHERE event_id = ${id} AND start_at > NOW()`, (err,events)=>{
                if(err) throw err
                res.json({
                    id: result[0].id,
                    title: result[0].title,
                    start_at: result[0].start_at,
                    end_at: result[0].end_at,
                    workshops: events.length
                })
            })
        }
    })
})

router.get('/details/:id', (req,res)=>{
    var id = req.params.id
    db.query(`SELECT * FROM workshops WHERE id = ${id}`, (err,result)=>{
        if(err) throw err
        if(result.length == 0){
            res.json({
                messege: 'No workshops found'
            })
        }else{
            db.query(`SELECT * FROM reservations WHERE workshop_id = ${id}`, (err,reservations)=>{
                if(err) throw err
                res.json({
                    id: result[0].id,
                    title: result[0].title,
                    description: result[0].description,
                    start_at: result[0].start_at,
                    end_at: result[0].end_at,
                    Reservations: reservations.length
                })
            })
        }
    })
})

module.exports = router