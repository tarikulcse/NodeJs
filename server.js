console.log("sadasd")



var models = require("./models")
// db.User.create({
//         firstName: 'John',
//         lastName: 'Doe',
//         email: 'demo@demo.com'
//       });
  
models.User.findAll().then((todos) =>console.log(todos))