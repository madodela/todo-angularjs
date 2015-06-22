#Task manager with AngularJS

##Running front-end
1. Go to */web*
2. Run `bower install`
3. Run `npm install http-server && http-server`
4. You can see the app runing in http://localhost:8080

##Running back-end
1. Go to */api*
2. Run `npm install`
3. Execute `nodemon`
4. Now you can see it in http://localhost:3000

#Routes for back-end

GET ALL TASKS
Method: GET
http://localhost:3000/tasks

GET SPECIFIC TASK
Method: GET
http://localhost:3000/tasks/2

INSERT NEW TASK
Method: POST
Header: Content-Type: application/json
http://localhost:3000/tasks
{
   "title": "Create a new repo",
   "description": "Create a new repo in github to put all this code",
   "overDue": "15-06-2015",
   "status": "P",
   "priority": "H"
}

UPDATE SPECIFIC TASK
Method: POST
Header: Content-Type: application/json
http://localhost:3000/tasks/10
{
'title': 'Get presentation done',
"description": "In slides"
}

DELETE TASK
Method: DELETE
Header: Content-Type: application/json
http://localhost:3000/tasks/10

