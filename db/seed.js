const Job = require('../models/Job')
const Contractor = require('../models/Contractor')
const Client = require('../models/Client')
const Result = require('../models/Results')
const data = require('../data/jobs.json')

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

function counter(name){
  let name = people.reduce(function (n, person) {
    return n + (person.gender == 'boy');
  }, 0);
}

let clientsData = data.filter((v,i,a)=>a.findIndex(t=>(t.owner_sphone__===v.owner_sphone__))===i)
let contractosData = data.filter((v,i,a)=>a.findIndex(t=>(t.conLicense===v.conLicense))===i)



clientsData.forEach((element, idx)=> element.ownerId = idx)
let FinalResults = {
  clientCount: clientsData[clientsData.length-1].ownerId,
  jobCount: data[data.length-1].jobId,
  jobsDeletedCount: 0,
  contractorCount: contractosData[contractosData.length-1].ownerId,
}

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
                  Contractor.insertMany(contractosData).then(
                    contractorResults => {
                      // console.log(contractorResults)
                        Client.insertMany(clientsData).then(
                          clientResults => {
                              console.log(clientResults)
                              console.log("added data")
                              Result.deleteMany().then(
                                itemReults => {
                                  Result.insertMany(FinalResults).then(
                                    details => console.log( details)
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