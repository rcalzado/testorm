# testnestjs
Basic CRUD using NestJS TypeORM MySQL

# Insert
POST http://localhost:3000/users

{
	"name": "Usuário 1",
	"photos": 
	[
		{ "url": "foto4.jpg" },
		{ "url": "foto5.jpg" },
		{ "url": "foto6.jpg" }
	]
}

# Update

PUT http://localhost:3000/users/1   ( 1 == user.id )
  
{
	"name": "Novo Nome"
}

# Get all records

 GET http://localhost:3000/users
 
 # Get specific record by Id
 
 http://localhost:3000/users/1  ( 1 == user.id )
 
# Delete specific record by Id

Delete http://localhost:3000/users/1  ( 1 == user.id )