import express from "express";
import cookieParser from "cookie-parser";
import mongoose from "mongoose";
import { Server, createServer } from "http"; // to run app use Command => npm run dev or npm run runtime
import cors from "cors";
import * as conf from "./config/config";
import path from "path";
import routes from "./routes/v1";

const app = express();

app.use(cookieParser());
const server = createServer(app);
const config = conf.default;
app.set("port", process.env.PORT || config.port);

// parse json request body
app.use(express.json());

// parse urlencoded request body
app.use(express.urlencoded({ extended: true }));

//************************** Access Origin ****************************************/
app.use((req, res, next) => {
  res.header("Access-Control-Allow-Origin", "*");
  res.header(
    "Access-Control-Allow-Headers",
    "Origin, X-Requested-With, Content-Type, Accept"
  );
  res.setHeader("Access-Control-Allow-Methods", "GET,POST,PUT,DELETE");
  next();
});


// enable cors
app.use(cors());
app.options('*', cors());

//************************* routeing  ********************************************/

app.use('/assets', express.static(path.join(__dirname, "../assets")));
routes(app);

//************************ Create Server *****************************************/

server.listen(app.get("port"), () => {
  console.log(
    "Server is running on port : " +
    app.get("port") +
    ` - ${process.env.NODE_ENV} mode -`
  );

  //***** Mogodb Connect *****/

  mongoose.connect(config.mongoose.url, {
    useNewUrlParser: true,
    useCreateIndex: true,
    useFindAndModify: false,
    useUnifiedTopology: true
  });

  mongoose.connection.on("open", () => {
    console.log("mongo_db connected successfully");
  });
  mongoose.connection.on("error", (err) => {
    console.log("can't connect to mongo_db !!! " + err);
  });

});