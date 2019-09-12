var express = require('express');
var router = express.Router();
var ObjectId = require('mongodb').ObjectId;
var fs = require('fs');
//var bodyParser = require('body-parser')


const userController = require('./../controllers/usercontroller')
/* GET home page. */
router.get('/', function (req, res, next) {
  res.render('index', { title: 'Express' });
});

router.post('/register', function (req, res, next) {
  userController.create(req.body, (error, response) => {
    if (error) {
      res.send({
        error: error
      })
    } else {
      res.send({
        resposne: response,
        message: "Submitted Succesfully"
      })
    }
  })
})

router.get('/getusers', function (req, res, next) {
  userController.find({}, (error, response) => {
    if (error) {
      res.send({
        error: error
      })
    } else {
      res.send({
        response: response
      })
    }
  })
})

router.get('/getUserById', function (req, res, next) {
  console.log('getresuser:', res.req.headers._id)
  userController.findOne({ _id: req.headers._id }, (error, response) => {
    if (error) {
      res.send({
        error: "No User in the Collection"
      })
    } else {
      res.send({
        response: response
      })
    }
  })
})

router.post('/updateUser', function (req, res, next) {
  console.log('findByIdAndUpdate', req.query._id);
  
   userController.findByIdAndUpdate({ _id: req.query._id },(error, response) => {
	  console.log("hello",req.body);
    if (error) {
      res.send({
        error: error
      })
    } else {
      res.send({
        response: response
      })
    }
  })
})

router.get('/getColors', function (req, res, next) {
  fs.readFile(__dirname + "/" + "colors.json", (error, response) => {
    console.log('resposne:', response)
    // if(error){
    //   res.send({
    //     error:error
    //   })
    // }else{
    //   res.send({
    //     resposne:response
    //   })
    // }
    res.send(response)
  })
})

router.delete('/deleteuser',function(req, res, next){
	
	//console.log(req.query._id);deleteById
	userController.findByIdAndRemove({ _id: req.query._id },(error, response) => {
	  //console.log("hello",req.body);
    if (error) {
      res.send({
        error: error
      })
    } else {
      res.send({
        response: response
      })
    }
  })
	
})

module.exports = router;
