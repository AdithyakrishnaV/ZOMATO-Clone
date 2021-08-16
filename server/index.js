// Importing Env Variables
require ("dotenv").config();

// Libraries
import express from "express";
import cors from "cors";
import helmet from "helmet";
import passport from "passport";

// config
import googleAuthConfig from "./config/google.config";

// microservice routes
import Auth from "./API/Auth";
import Restaurant from "./API/Restaurant";
import Food from "./API/Food";
import Image from "./API/Image";
import Order from "./API/orders";
import Reviews from "./API/reviews";
import User from "./API/User";

// Database connection
import ConnectDB from "./database/connection";
const zomato = express();

//application middlewares
zomato.use(express.json());
zomato.use(express.urlencoded({ extended: false }));
zomato.use(helmet());
zomato.use(cors());
zomato.use(passport.initialize());
zomato.use(passport.session());

//Passport configuration
googleAuthConfig(passport);

// Application Routes
zomato.use("/auth", Auth); 
zomato.use("/restaurant", Restaurant); 
zomato.use("/food", Food);
zomato.use("/image", Image);
zomato.use("/order", Order);
zomato.use("/reviews", Reviews);
zomato.use("/user", User);


zomato.get("/", (req,res) => res.json({ message:"setup successful" }));

zomato.listen(4000, () => ConnectDB()
   .then(() =>  console.log("server is running🔥"))
   .catch(() => console.log("Server is running but database connection failed..."))
);