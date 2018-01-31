README

Loopback is build on top of Express and provide very good structure of your code and also help you to generate quickly your API. You can also browse your API using an integrated built in Explorer.

Cd into folder application and run npm install
To run application type node .
Then it will show this information “Web server listening at: http://localhost:3000
Browse your REST API at http://localhost:3000/explorer”

Create new users
POST | localhost:3000/api/users/
Headers :
Content-Type:application/json
Body : {
	“email”: “ineprinusantari@gmail.com”,
	“password”: “12345”,
	”username" : "inne_prinusantari"
}

Update user details
PATCH | localhost:3000/api/users/{{id}}
Headers :
Content-Type:application/json
Authorization:{{access token}}
Body : {
	"username" : "inne_prinusantari"
}

Read users detail
GET | localhost:3000/api/users/{{id}}
Headers :
Content-Type:application/json
Authorization:{{access token}}

Delete user record
DELETE | localhost:3000/api/users/{{id}}
Headers :
Content-Type:application/json
Authorization:{{access token}}

Login users to get AccessToken
POST | localhost:3000/api/users/login
Headers : 
Content-Type:application/json
Body : {
	“email” : “ineprinusantari@gmail.com”,
	“password” : ‘12345’
}

Loopback For Sort Order By https://loopback.io/doc/en/lb3/Order-filter.html
Example : localhost:3000/api/todos/?filter[order]=timestart%20ASC

Search all to-do record
GET | localhost:3000/api/todos/
Headers :
Content-Type:application/json
Authorization:{{access token}}

Search all to-do record and sorting
GET | localhost:3000/api/todos/?filter[order]=timestart%20ASC
Headers :
Content-Type:application/json
Authorization:{{access token}}

Create new to-do record
POST | localhost:3000/api/todos/
Headers :
Content-Type:application/json
Authorization:{{access token}}
Body :
{
	"name":"Name 2",
	"priority":10,
	"location":"Bandung",
	"timestart": "2018-01-13 06:06:00",
	"id":0,
	"xcreate":"inne"
}

Update to-do details
PATCH | localhost:3000/api/todos/{{id}}
Headers :
Content-Type:application/json
Authorization:{{access token}}
Body : {
	“location” : “Cimahi”
}

Delete to-do record
DELETE | localhost:3000/api/todos/{{id}}
Headers :
Content-Type:application/json
Authorization:{{access token}}
