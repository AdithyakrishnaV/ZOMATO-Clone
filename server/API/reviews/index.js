// Libraries
import express from "express";
import passport from "passport";

// Database model 
import { ReviewModel } from "../../database/allModels";

const Router = express.Router();

/*
Route    /new
Des      Add new food review/rating
Params   none
BODY     review object
Access   public
Method   POST
*/
Router.post("/new",  async (req, res) => {
    try {
        const { reviewData } = req.body;

        await ReviewModel.create(reviewData);

        return res.json({ review: "Successfully Created Review." });

    } catch (error) {
        return res.status(500).json({ error: error.message });
    }
});

/*
Route    /delete/:_id
Des      Add new food review/rating
Params   _id
BODY     none
Access   public
Method   DELETE
*/
Router.delete("/delete/:_id", async (req, res) => {
    try {
        const { _id } = req.params;
        
        await ReviewModel.findByIdAndDelete(_id);

        return res.json({ review: "Successfully Deleted the Review." });
    } catch (error) {
        return res.status(500).json({ error: error.message });
    }
});

export default Router;