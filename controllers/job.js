const express = require("express");
const router = express.Router();
const Job = require('../models/Job.js')

// const Property = require('../models/Property.js')
// const Contractor = require('../models/Contractor.js')
// const Jobs = require('../models/Jobs.js')
// const Owner = require('../models/Owner.js')


router.get("/", (req, res) => {
    console.log(Job.estimatedDocumentCount())
    Job.find().then(clients => {
        // console.log()
        res.json(clients)
    })
})

router.get("/id/:id", (req, res) => {
    console.log(Job.estimatedDocumentCount())
    Job.findOne({jobId: req.params.id}).then(jobDetails => {
        res.json(jobDetails)
    })
})


router.post("/ids", async (req, res) => {
    console.log(req.body.clientJobs)
    var results = []
    for (let i = 0; i<req.body.clientJobs.length; i++){
        console.log(req.body.clientJobs[i])
        let jobDetails = await Job.findOne({jobId: req.body.clientJobs[i]});
        results.push(jobDetails)
                console.log(results)
    }
    res.json(results)
})

// router.get("/", (req, res) => {
//     Job.find({}).then(results=>{
//         // res.json(results)
//         res.send("somethign else")
//     }).catch(err=>console.log(err))
//     // Jobs.find()
//     //     .populate("property")
//     //     .populate("owner")
//     //     .populate("contractor")
//     //     .then(jobs => {
//     //         res.json(jobs)
//     //     })
// })


// router.get("/id/:jobId", (req, res) => {
//     let thejob = req.params.jobId
//     Jobs.find({ jobId: thejob })
//         .populate("contractor")
//         .populate("property")
//         .populate("owner")
//         .then(showinfo => res.json(showinfo))
// })


module.exports = router