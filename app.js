// Here we will create our express app and all the configurations related to the express app will be done in this file. This will help in code distribution and organizing the code will become easier.

// Importing express as we have set the "type" to "module" in the package.json file for enabling the ES6 module import system. Also includes other imports
import express from "express";
import cookieParser from "cookie-parser";

// Creating our Express app
const app = express();

// Enabling the Express app to tackle with json data
app.use(express.json({
    limit : '16kb'
}));

// Enabling the Express app to also tackle with the encoded URL's
app.use(express.urlencoded({
    extended: true
}));

// Enabling the Express app to use the public folder for any static data i.e (Views)
app.use(express.static("public"));

// Enabling the Express app to use cookies within the project
app.use(cookieParser());

export default app;