// const Property = require('../models/Property.js')
// const Contractor = require('../models/Contractor.js')
// const Owner = require('../models/Owner.js')
// const jobsedit = require('./jobsEdit.json')
const Job = require('../models/Job')
const Contractor = require('../models/Contractor')
const Client = require('../models/Client')
const data = require('../data/jobs.json')

//  let alteredData = data.map((items, index)=>
   
//     {   
//         items.jobId = index
//         items.ownerId = index
    
//     }
     
//  )

data.forEach(function (element, index) {
    element.jobId = index
    element.contractorJobs = []
    element.clientJobs = []
  });

data.forEach((element, idx)=>{
  element.conLicense
  data.map(function (item, index) {
    if (element.conLicense == item.conLicense){
      element.contractorJobs.push(item.jobId)
    }
  });
  data.map(function (item, index) {
    if (element.owner_sphone__ == item.owner_sphone__){
      element.clientJobs.push(item.jobId)
    }
  });

})

let clientsData = data.filter((v,i,a)=>a.findIndex(t=>(t.owner_sphone__===v.owner_sphone__))===i)

clientsData.forEach((element, idx)=> element.ownerId = idx)
// let clientsData = data.reduce((unique, o) => {
//   if(!unique.some(obj => obj.clientJobs == o.clientJobs)) {
//     unique.push(o);
//     // console.log(obj.clientJobs)
//   }
//   return unique;
// },[]);
// clientsData.map(items=>console.log(items.clientJobs))

// console.log(clientsData);

  Job.deleteMany({}).then(
    deleted => {
        console.log("deleted DB & Adding info")
        // createdb()

        Contractor.deleteMany().then(
          deletedContractor => {

        Client.deleteMany().then(
          deletedClients => {

            Job.insertMany(data).then(
              results => {
                  // console.log(results)
                  // console.log("added data")
                  Contractor.insertMany(data).then(
                    contractorResults => {
                      // console.log(contractorResults)
                        Client.insertMany(clientsData).then(
                          clientResults => {
                              console.log(clientResults)
                              console.log("added data")
                              
                          }
                      )
                        
                    }
                )
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