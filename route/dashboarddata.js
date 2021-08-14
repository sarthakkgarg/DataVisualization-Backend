const express = require("express");
const router = express.Router();
const data = require("../model/dataSchema");
require("../db/conn");
const bodyParser = require("body-parser");
const mongoose = require("mongoose");


router.get("/init", async (req,res) => {
    let countriesList = await data.distinct('country');
    let countryWithNumber = []
    await countriesList.forEach( async (one) => {
        let res = await data.countDocuments({country:one});
        countryWithNumber.push({"country": one,"number":res})
        // console.log("PRINTING")
    })

    let startYearList = await data.distinct('start_year')
    let endYearList = await data.distinct('end_year')
    let startYearWithNumber = []
    let endYearWithNumber = []
    await startYearList.forEach( async (one) => {
        let res = await data.countDocuments({country:one});
        await startYearWithNumber.push({"startYear": one,"number":res})
        // console.log("PRINTING")
    })
    await startYearList.forEach( async (one) => {
        let res = await data.countDocuments({country:one});
        await endYearWithNumber.push({"endYear": one,"number":res})
        // console.log("PRINTING")
    })


    res.send({startYearList,endYearWithNumber,startYearWithNumber,endYearList,countryWithNumber,countriesList})

})

router.post("/Dashboard", async (req, res) => {
    let {
        limit,
        skip,
        type,
        startYear,
        endYear,
        country,
        filterKey
    } = req.body;

    if(type==="intensity"){
        let result = await data.find({});
        res.json({ data: result })
        return
    }
    if(type==="country"){
        let result = await data.find({country:filterKey});
        res.json({ data: result })
        return
    }
    else {
        if (limit === 0) {
            limit = 5;
        }
        if (!skip) {
            skip = 0;
        }

        const result = await data.find().limit(limit).skip(skip);
        res.json({ data: result })
    }
});

module.exports = router;