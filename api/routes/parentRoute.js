const express = require('express');
const sequelize = require('sequelize')
const {Op,QueryTypes } = require('sequelize')
const router = express.Router();

const db = require('../models');
const {add} = require('timelite/time')




router.get('/getall', (req,res) => {
    db.User.findAll({
        raw: true,
    })
    .then((res) => {
        console.log(res,'data')
        // res.sendStatus(200);
    })
    .catch((err) => {
        console.log(err,'error')
    })
})





router.get('/getuserdata/:id', async (req,res) =>{
    //Get Users
    const user = await db.User.findAll({
        raw:true,
        where:{id: req.params.id},
        attributes:[["fname","fname"],["lname","lname"],['target_sat_score',"target_sat_score"],[sequelize.fn('datediff', sequelize.col('sat_exam_date'),sequelize.fn("NOW") ),'sat_days_left']    ]    
    })

    //Function to get first day of the week 
    getMonday = (date) => {
        date = new Date(date);
        let day = date.getDay(),
        diff = date.getDate() - day + (day == 0 ? -6:1); 
        return new Date(date.setDate(diff));
      }

 //Get challenger week-to-date
    const challenges = await db.Challenge_users.findAll({
        raw:true,
        where : {
            user_id: req.params.id,
            [Op.and] : [
                {"completed_at_time" : {[Op.between] : [getMonday(new Date()) , new Date()]}},
                {"completed_at_time" : {[Op.ne]: null} }
            ]
        }
    })
    

    //Calculate Total Hours Spent on challenges
    var query = {
        attributes: [
          'user_id',
          [db.sequelize.literal(`CASE WHEN stopped_time is null then timediff(completed_at_time,start_time) else timediff(stopped_time,start_time) END`), 'time_spent'],
        ],
        
        where: {
          user_id: req.params.id,
        },
        raw: true
      };


    const getTotalStudyTime = await db.Challenge_users.findAll(query);

    let sum = `00:00`;
    if(getTotalStudyTime.length > 0){
        sum = "00:00:00"
    }
    getTotalStudyTime.forEach((el) => {
        
        let tempSum = add([sum, el.time_spent])

        sum = `${tempSum[0]}:${('0' + tempSum[1]).slice(-2)}`
    })


 

    const userFullName = user[0].fname.concat(" ", user[0].lname)
    res.send({
        fullname:userFullName,
        challenges,
        challenges_completed:challenges.length,
        target_sat_score:user[0].target_sat_score,
        sat_days_left:user[0].sat_days_left,
        total_hours_spent:sum
    })

    
})

router.get('/parent/:id', (req, res) => {
    db.Parent.findAll({
        where:{id: req.params.id},
        include:[{
            model:db.User,
            as:"user",
            required:false
        }]
    }).then(profile => {
    
        res.send(profile)
    })
    .catch(err => console.log(err,'errr'))
}) 




module.exports = router;