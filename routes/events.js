var express = require('express');
var router = express.Router();
var db = require('../config/db')
var moment = require('moment')

//GET all events paginated
router.get('/', (req,res)=>{
    const page = req.query.page
    const limit = req.query.limit
   
    const startIndex = (page - 1) * limit
    const endIndex = page * limit
    db.query(`SELECT * FROM events WHERE start_at > NOW()`, (err,response)=>{
        if(err) throw err
        
        const paginated = response.slice(startIndex, endIndex)
        if(paginated.length == 0){
            res.json({
                events: response
            })
        }else{
            res.json({
                events : paginated,
                pagination: {
                    Total: response.length,
                    page : req.query.page,
                    Per_page: req.query.limit
                }
            })
        }
    })
})

//Single event route

router.get('/details/:id', (req,res)=>{
    const id = req.params.id
    db.query(`SELECT * FROM events WHERE id = ${id}`, (err, result) => {
        if (err) throw err
        if (result.length == 0) {
            res.json({
                msg: "No event Found"
            })
        } else {
            db.query(`SELECT * FROM workshops WHERE event_id = ${id}`, (err,events)=>{
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

//workshop list





module.exports = router;
