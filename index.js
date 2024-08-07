// Here in the index file we will only keep the necessary imports and will keep the least amount of code

// Importing the Express app from the app folder along with other necessary imports
import app from "./app.js";
import dotenv from 'dotenv';

// Configuring dotenv for using the environment variables
dotenv.config({
    path: "./.env"
});

// Making the port private by accessing its values from the environment
const PORT = process.env.PORT || 5080;

// Listening our server on a desired port
app.listen(PORT,() => {
    console.log(`The server is up and running on port ${PORT} 🚀`);
})




