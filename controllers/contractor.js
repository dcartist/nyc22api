const express = require("express");
const router = express.Router();
const Contractor = require('../models/Contractor.js')
const Job = require('../models/Job.js')

router.get("/", (req, res) => {
    Contractor.find().then(contractor => {
        res.json(contractor)
    })
})

router.get("/name/:conLastName", (req, res) => {
    let theName = req.params.conLastName
    Contractor.find({ conLastName: theName }).then(showName => res.json(showName))
})
router.get("/id/:id", (req, res) => {
    Contractor.find({  conLicense: req.params.conLicense }).then(showName => res.json(showName))
})


router.get("/jobs/:id", async (req, res) =>{ 
    let firstresults = await Contractor.find({ conLicense:req.params.id})
    var results = []
    for (let i = 0; i<firstresults[0].contractorJobs.length; i++){
        console.log(firstresults[0].contractorJobs[i])
        let jobDetails = await Job.findOne({jobId: firstresults[0].contractorJobs[i]});
        results.push(jobDetails)
    }
    res.json(results)
})


router.post("/new", (req, res) => {
    Contractor.create(req.body).then(contractor => res.json(contractor))
})

router.put("/update/:id", (req, res) => {
    Contractor.findOneAndUpdate({ _id: req.params.id }, req.body, { new: true })
        .then(update => res.json(update))
})

router.delete("/delete/:id", (req, res) => {
    Contractor.findOneAndDelete({ _id: req.params.id }).then(deleted => res.json(deleted))
})

module.exports = router