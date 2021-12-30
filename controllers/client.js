const express = require("express");
const router = express.Router();
// const Property = require('../models/Property.js')
// const Contractor = require('../models/Contractor.js')
const Job = require('../models/Job.js')
const Client = require('../models/Client.js')
const Result = require('../models/Results.js')

router.get("/", (req, res) => {
    console.log(Client.estimatedDocumentCount())
    Client.find().then(clients => {
        // console.log()
        res.json(clients)
    })
})
router.get("/results", (req, res) => {
    // console.log(Client.estimatedDocumentCount())
    Result.find().then(clients => {
        // console.log()
        res.json(clients)
    })
})

router.get("/name/last/:lastName", (req, res) => {

    Client.find({ ownLastName: { "$regex": req.params.lastName, "$options": "i" } }).then(showName => res.json(showName))
    // Client.find({ ownLastName: req.params.lastName }).then(showName => res.json(showName))
})
router.get("/name/first/:firstName", (req, res) => {

    Client.find({ ownFirstName: { "$regex": req.params.firstName, "$options": "i" } }).then(showName => res.json(showName))
})
router.get("/jobs/:id", async (req, res) =>{ 
    let firstresults = await Client.find({ ownerId:req.params.id})
    var results = []
    for (let i = 0; i<firstresults[0].clientJobs.length; i++){
        console.log(firstresults[0].clientJobs[i])
        let jobDetails = await Job.findOne({jobId: firstresults[0].clientJobs[i]});
        results.push(jobDetails)
    }
    res.json(results)
})

router.post("/new", (req, res) => {
    let conditions = { },
    update = { $inc: { clientCount: 1 }};
    // let details = {}
    let details = req.body
    Result.find({}).select('clientCount').then(results=>{
        details.ownerId = parseInt(results[0].clientCount+1)
        Result.updateOne({clientCount: results[0].clientCount}, update).then(
            items => {
                Client.create(details).then(clients => res.json(clients)).catch(err=>console.log(err))
            }).catch(err=>console.log(err))
        // res.json(details.ownerId)
    }).catch(err=>console.log(err))
// # update documents matching condition
    // Result.updateOne(clientCount, update).then(
    //     items => {
    //         Client.create(details).then(clients => res.json(clients))
    //     })
    

})

router.put("/update/:ownerId", (req, res) => {
    Client.findOneAndUpdate({ ownerId: req.params.ownerId }, req.body, { new: true })
        .then(update => res.json(update))
})

router.delete("/delete/:id", (req, res) => {
    Client.findOneAndDelete({ ownerId: req.params.ownerId }).then(deleted => res.json(deleted))
})

module.exports = router