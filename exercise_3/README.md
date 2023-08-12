Exercise 3

Try creating an express application for a blog website using Sequelize. You can refer to Module 8 for the logical/physical models

Requirements
- Your system should have a proper MVC structure
- The system should be able to create users
- The users should be able to create multiple posts (posts should be very basic, title/desc/img)
- other users should be able to like the posts and comment on them

copy and pasted this code into previous exercise to just update both files for sequelize requirement.



Video reference: Wed July 5 Recording 2
reference 26 min in for dbConnect and npm run server @32 min
*** IMPORTANT. SWAPPING FROM mongodb TO MYsql FOR THIS ***


COPIED from exercise 2
postman checks
User - GET users
http://localhost:8000/api/users


User - POST schema example
http://localhost:8000/api/users/createUser
{
"firstName": "John",
"lastName": "JingleHiemerSchmit",
"emailId": "johnJS@email.com",
"password": "123456"
}

USER - PUT aka Update Schema
http://localhost:8000/api/users/2
{
"firstName": "23",
"lastName": "23",
"emailId": "emai3l@email",
"password": "123456"
}

USER - DELETE aka.....delete user
http://localhost:8000/api/users/2



to create Posts - POST schema
http://localhost:8000/api/users/createPost
{
"title": "random lorem output text",
"description": "Lorem ipsum dolor sit amet consectetur adipisicing elit. Officiis, incidunt molestiae? Deserunt?",
"content": "Lorem ipsum dolor sit amet consectetur adipisicing elit. Expedita libero, quaerat inventore corrupti laudantium omnis perferendis debitis voluptates velit pariatur cumque quia magnam consectetur beatae iusto dolorum, ut ipsa explicabo nisi. Nam impedit inventore quod libero vitae. Beatae quis, quibusdam nam ipsa itaque ad. Natus autem aspernatur labore delectus nihil blanditiis commodi, quod iste accusamus et nobis nulla voluptas necessitatibus reprehenderit illo."
}

check posts or users for changes
- http://localhost:8000/api/posts
-http://localhost:8000/api/users

Likes - PUT method
- example: http://localhost:8000/api/posts/64d094358e8ee55d5a90c8b2/like
- change Headers if needed: may need to add key:Content-Type and value: application/json....MAY need to
- Body: none.
- SEND IT

Comments - POST method
- example: http://localhost:8000/api/posts/64d094358e8ee55d5a90c8b2/comment
- change Headers if needed: may need to add key:Content-Type and value: application/json....MAY need to
- example body
{
  "text": "Easily Best post ever. Glad it only took 10hours to figure out how to comment on it!!!!!!"
}
- SEND IT
