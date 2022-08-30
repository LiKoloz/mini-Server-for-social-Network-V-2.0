class Person {
     email;
     password
}

let admin = new Person()
admin.email ="admin@email.com"
admin.password="admin123"

let marik = new Person()
marik.email = "marik1@email.com"
marik.password = "marik2011"

let persons = [admin, marik]
console.log(persons)


const express = require("express");

const app = express();

app.get("/api", function (request, response) {
     response.header('Access-Control-Allow-Origin', '*');
     response.header('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept');
     response.header('Access-Control-Allow-Methods', 'GET, PATCH, PUT, POST, DELETE, OPTIONS');
     console.log('API')
     let  userEmail = request.query.email
     let userPassword = request.query.password
     for(let user of persons) {
          if (user.email === userEmail && user.password === userPassword) {
               console.log('Совпадение')
               return response.status(200).send({bool: 0})
          }
     }
     console.log('Совпадений не обнаружено!')
     return response.status(400).send({bool: 1})
})
app.listen(4201);