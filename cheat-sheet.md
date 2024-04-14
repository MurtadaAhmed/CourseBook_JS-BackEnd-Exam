1. Initialize project
>> npm init --yes

2. install nodemon and add it in package.json
>> npm install -D nodemon

3. create index.js file

4. express
>> npm install express
* start initial express server
* Add static middleware
* Add resources to public folder
* Add body parser
* create routes module

5. handlebars
* Install express-handlebars
>> npm install express-handlebars
* Config handlebars with express
* Add views folder with resources
* Add home view
* Add home controller
* Add home controller to routes
* Add main layout
* Add partials dir

6. Database
* Install mongose
>> npm install mongoose
* Setup DB Connection
* Add user model

7. Register
* Fix navigation links
* Add register page (controller + view + route)
* Fix register form
* Add post register action
* Add authService
* Hash password
>> npm install bcrypt
* Check confirm password

8. Login
* Install jsonwebtoken
* Install cookie-parser
>> npm install jsonwebtoken
* Add login page 
* Fix login form
* Add login post action
* Add authService login method
- validate user 
- validate password
- generate token
* return cookie
* Modify register for auto login
1:55

