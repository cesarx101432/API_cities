/*
 ============================================================================
 Name        : Index.py
 Author      : César Alexis Segura 
 Version     : v1.0
 Date        : 15/03/22
 Copyright   : Your copyright notice
 Description : this servidor conect with  GraphQL 
 ============================================================================
*/
console.log("---------------------------------------- \n")
console.log("REMEMBER INIT API POSTGRAPHILE(GRAPHQL) \n ")
console.log("---------------------------------------- \n")
const express = require('express');
const app = express();

// Settings
app.set('port', process.env.PORT || 4020);

// Middlewares
app.use(express.json());

// Routes
app.use(require('./routes/function'));

// Starting the server
app.listen(app.get('port'), () => {
  console.log(`Server on port ${app.get('port')}`);
});
