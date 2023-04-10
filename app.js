import express from 'express';
import mongoose from "mongoose";
import cors from 'cors'
import dotenv from "dotenv";

import HelloController
    from "./controllers/hello-controller.js"
import UserController
    from "./controllers/users/users-controller.js"
import TuitsController
    from "./controllers/tuits/tuits-controller.js";


//dotenv.config();
const app = express()


//mongoose.connect('mongodb+srv://mccune124:Cowboy2499@cluster0.igxhyiz.mongodb.net/tuiter?retryWrites=true&w=majority');
const CONNECTION_STRING = process.env.DB_CONNECTION_STRING
            || 'mongodb+srv://mccune124:Cowboy2499@cluster0.igxhyiz.mongodb.net/tuiter-node-server-app?retryWrites=true&w=majority';

//const CONNECTION_STRING = process.env.DB_CONNECTION_STRING
  //                        || 'mongodb://127.0.0.1:27017/tuiter';

//mongoose.connect('mongodb://127.0.0.1:27017/tuiter');

mongoose.connect(CONNECTION_STRING).then(r => console.log('db connection'));
app.use(express.json())
app.use(cors())
TuitsController(app)
HelloController(app)
UserController(app)
app.listen(process.env.PORT || 4000)
