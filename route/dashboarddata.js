const express = require("express");
const router = express.Router();
const data = require("../model/dataSchema");
require("../db/conn");
const bodyParser = require("body-parser");
const mongoose = require("mongoose");


router.post("/Dashboard", async (req, res) => {
    let {
        limit,
        skip,
        type
    } = req.body;

    if(type==="intensity"){
        let result = await data.find();
        res.json({ data: result })
    }
    else {
        if (limit === 0) {
            limit = 5;
        }
        if (!skip) {
            skip = 0;
        }

        const result = await data.find({ country: "" }).limit(limit).skip(skip);
        res.json({ data: result })
    }
});

module.exports = router;