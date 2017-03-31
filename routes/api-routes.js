// Requiring our models and passport as we've configured it
var db = require("../models");
var path = require("path")
// var passportStudent = require("../config/passportStudent");
// var passportTeacher = require("../config/passportTeacher");


module.exports = function(app) {
  console.log("apiroutes.js function")
  // know that api routes is loaded & working



  app.get("/api/extras", function(req, res) {
    db.Topping.findAll({
      where: {topping_type: "extra"}
    }).then(function(dbExtra) {
      // console.log(dbTop)
      res.json(dbExtra);
    });
  });


  app.get("/api/sauce", function(req, res) {
    db.Topping.findAll({
      where: {topping_type: "sauce"}
    }).then(function(dbSauce) {
      // console.log(dbTop)
      res.json(dbSauce);
    });
  });


  app.get("/api/veggies", function(req, res) {
    db.Topping.findAll({
      where: {topping_type: "veggie"}
    }).then(function(dbVeggie) {
      // console.log(dbTop)
      res.json(dbVeggie);
    });
  });


  app.get("/api/cheese", function(req, res) {
    db.Topping.findAll({
      where: {topping_type: "cheese"}
    }).then(function(dbCheese) {
      // console.log(dbTop)
      res.json(dbCheese);
    });
  });







}





// app.get('/view/studentid', function(req,res){

//   console.log("app get req.body = " + JSON.stringify(req.body))

//   db.Student.findAll({ 
//     where: {
//       // id: req.params.studentid,
//          id: req.body.id,
//     },
//     include: [db.StudentToProject]
//   }).then(function(result) {
//       var student_objs = result; 

//       // Get the ids of each of the projects the student is working on 
//       var projIds = []
//       for (i in student_objs){          
//         projIds.push(student_objs[i].dataValues.StudentToProject.dataValues.ProjectId)
//       }

//       console.log("projIds" + projIds)
//       db.Project.findAll({ 
//         where: {
//           id: projIds,
//         },
//         include: [db.Educator]

//       }).then(function(result) {

//         var obj_for_handlebars = []
//         for (i in result){
//           obj_for_handlebars.push(result[i].dataValues)
//         }

//         console.log(obj_for_handlebars)
//         // res.sendFile(path.join(__dirname + "/../public/students/student-view", obj_for_handlebars ))
//          res.sendFile(path.join(__dirname + "/../public/students/student-view" ))
      

//       });

//     });
// });

  // Route for signing up a user. The user's password is automatically hashed and stored securely thanks to
  // how we configured our Sequelize User Model. If the user is created successfully, proceed to log the user in,
  // otherwise send back an error
  

  // app.get("/api/teachers", function(req, res) {
  //   db.Educator.findAll({
     
  //   }).then(function(dbTeacher) {
  //     res.json(dbTeacher);
  //   });
  // });



    // app.post("/api/studentAndProject", function(req, res) {
    //   console.log(req.body);
    //   db.StudentToProject.create({
    //       ProjectId: req.body.ProjId,
    //       StudentId: req.body.StuId,
    //   }).then(function(){
    //     console.log("added to StudentToProject")
    //   }).catch(function(err){
    //     console.log("error adding to StudentToProject  " + err)
    //   });
    // });

  //   app.post("/api/signup/teacher", function(req, res) {
  //   console.log("teacher sign up" );
  //   console.log(req.body)
  //   db.Educator.create({
  //     email: req.body.email,
  //     password: req.body.password,
  //     username: req.body.username,
  //   }).then(function(dbEducator) {
  //     console.log("post educator sign up then clause")
  //      res.json(dbEducator);
  //   }).catch(function(err) {
  //     console.log("post ed add: "+ err)
  //     if (err != undefined) {
  //          res.status(500).json(err)
  //   }
  //   });
  // });




//   // this posts the student information to the student table
//  app.post("/api/signup/student", function(req, res) {
//     db.Student.create(
//      {
//       email: req.body.email,
//       password: req.body.password,
//       username: req.body.username,
//       country: req.body.country,
//       state: req.body.state,
//       city: req.body.city,
//     }
//     ).then(function(dbStudent) {
//       // return the student information
//        res.json(dbStudent);
            
//     }).catch(function(err) {
//       // catch errors and send them back to the calling function
//       // emails must be unique
//       // some fields are also required
//       // these are the most common errors
//       console.log("app post - " + err);
//      if (err != undefined) {
//            res.status(500).json(err)
//     }
//     });

    
//   });





// //   // Route for logging user out
// //   app.get("/logout", function(req, res) {
// //     req.logout();
// //     res.redirect("/");
// //   });

// //    ////GET Route for entering observations
// // app.get("/api/fieldnotes", function(req, res) {
// //     console.log(req.body);
// //     res.render('notes');
// //   });

// //   //POST Route for entering observations
// //   app.post("/api/fieldnotes", function(req, res) {
// //     console.log(req.body);
// //     /*db.User.create({
// //       email: req.body.email,
// //       password: req.body.password
// //     }).then(function() {
// //       res.redirect(307, "/api/login");
// //     }).catch(function(err) {
// //       res.json(err);
// //     });*/
// //   });

//   // Route for getting some data about our user to be used client side

  // this needs to be updated since we are pulling user info from
  // different tables if it is a student or teacher



