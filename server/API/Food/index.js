// Libraries
import express from "express";
import passport from "passport";

// Database model 
import { FoodModel } from "../../database/allModels";

const Router = express.Router();

/*
Route    /
Des      Get all restaurant details based on city
Params   none
Access   public
Method   GET
*/
Router.get("", async (req, res) => {});