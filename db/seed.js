// const Property = require('../models/Property.js')
// const Contractor = require('../models/Contractor.js')
// const Owner = require('../models/Owner.js')
// const jobsedit = require('./jobsEdit.json')
const Job = require('../models/Job')
const Contractor = require('../models/Contractor')
const data = require('../data/jobs.json')

//  let alteredData = data.map((items, index)=>
   
//     {   
//         items.jobId = index
//         items.ownerId = index
    
//     }
     
//  )

data.forEach(function (element, index) {
    element.jobId = index
    element.ownerId = index
    element.jobs = []
  });

let alteredData = data.map((element, idx)=>{
  element.conLicense
  data.forEach(function (item, index) {
    if (element.conLicense == item.conLicense){
      element.jobs.push(item.jobId)
    }

  });

})


  Job.deleteMany({}).then(
    deleted => {
        console.log("deleted DB & Adding info")
        // createdb()

        Contractor.deleteMany().then(
          deletedContractor => {

            Job.insertMany(data).then(
              results => {
                  // console.log(results)
                  // console.log("added data")
                  Contractor.insertMany(data).then(
                    contractorResults => {
                        console.log(contractorResults)
                        console.log("added data")
                    }
                )
              }
          )
          }
        )
       
    }
).catch(err => { console.log(err) })
  console.log(data)
//  alteredData.map(items => console.log(items))
// console.log(alteredData)
// function createdb() {
//     Contractor.insertMany(jobsedit).then(cont => {
//         console.log('contractor');
//     })
//     Property.insertMany(jobsedit).then(prop => {
//             console.log('property')
//         })
//         .then(
//             Owner.insertMany(jobsedit).then(own => {
//                 console.log('owner');
//             })
//         ).then( //End of the inserting

//         ).catch(err => { console.log(err) })

// }

// function dbRun() {
//     //begin of function
//     Property.deleteMany({}).then(
//         Contractor.deleteMany({}).then(
            // Owner.deleteMany({}).then(
            //     deleted => {
            //         console.log("deleted DB & Adding info")
            //         createdb()
            //     }
            // )
//         ) //finish deleting the database
//     ).then()

//     //end of function
// }

// dbRun()