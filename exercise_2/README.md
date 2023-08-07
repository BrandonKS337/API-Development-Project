Exercise_2 slide 26

Try creating an express application for a blog website using MongoDB.
You can refer to db model from Module 8 for this

Requirements
-System should have a proper MVC structure
-System should be able to create users
-Users should be able to create multiple posts (basic with title/description/img)
-Other users should be able to like and comment on posts

Will need to inset the ability to react to posts.

will need a .env file that contains the local host path for my_blog_db in mongodb. Please let me know if you need this sent off to you I have it available at request

to start make sure to run nodemon or node
aka in bash terminal

- $npm run server
- in separate terminal run $mongosh
- run the mongod shell terminal on your desktop
- open mongoDB compass gui for easy viewing of server details

MVC = directory folders example for a well organized express/node.js app. "MVC architecture"
MVC is mainly (controller, model and view)
controllers/
models/
views/
routes/
server.js

class vid covering content: July 3rd about half way through

postman checks
User - POST schema example
{
"firstName": "John",
"lastName": "JingleHiemerSchmit",
"emailId": "johnJS@email.com",
"password": 123456
}
Posts - POST schema
{
    "title": "random lorem output text",
  "description": "Lorem ipsum dolor sit amet consectetur adipisicing elit. Officiis, incidunt molestiae? Deserunt?",
  "content": "Lorem ipsum dolor sit amet consectetur adipisicing elit. Expedita libero, quaerat inventore corrupti laudantium omnis perferendis debitis voluptates velit pariatur cumque quia magnam consectetur beatae iusto dolorum, ut ipsa explicabo nisi. Nam impedit inventore quod libero vitae. Beatae quis, quibusdam nam ipsa itaque ad. Natus autem aspernatur labore delectus nihil blanditiis commodi, quod iste accusamus et nobis nulla voluptas necessitatibus reprehenderit illo."
 
}
