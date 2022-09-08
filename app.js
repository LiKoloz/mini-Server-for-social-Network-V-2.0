class Post {
    constructor(
        message = '',
        likes = 0,
        disLikes = 0
    ) {
    }
}



class Person {
    id;
    constructor(
        firstName ='',
        secondName = '',
        fullName = '',
        email = '',
        password = '',
        age = 0,
        phone = '89999999999',
    ) {
        this.id = `f${(~~(Math.random()*1e8)).toString(16)}`
    }

    posts = [new Post('123', 4,4)]
}

let admin = new Person()
admin.email ="admin@email.com"
admin.password="admin123"
admin.firstName = 'Admin'
admin.secondName = 'adminovich'
admin.id

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

app.get("/api/user", function (request, response) {

    response.header('Access-Control-Allow-Origin', '*');
    response.header('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept');
    response.header('Access-Control-Allow-Methods', 'GET, PATCH, PUT, POST, DELETE, OPTIONS');

     console.log('API user')
     let userEmail = request.query.email
    let userPassword = request.query.password
     for(let user of persons){
          if(user.email === userEmail && user.password === userPassword){
               console.log('Совпадение User')
               return response.status(200).send(user)
          }
     }
    return response.status(400).send()
})

app.get("api/user/posts", function (request, response) {

    response.header('Access-Control-Allow-Origin', '*');
    response.header('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept');
    response.header('Access-Control-Allow-Methods', 'GET, PATCH, PUT, POST, DELETE, OPTIONS');

    console.log('API userPosts')
    let userId = request.query.id

    for(let user of persons){
        if(user.id === userId){
            return response.status(200).send({posts: user.posts})
        }
    }
    return response.status(400).send()
})

app.listen(4201);