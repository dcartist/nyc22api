const express = require('express')
// const parser = require('body-parser')
const app = express()
const cors = require('cors')
// const conController = require('./controllers/contractor.js')
// const ownController = require('./controllers/owner.js')
// const propController = require('./controllers/property.js')
const jobController = require('./controllers/job.js')
const clientController = require('./controllers/client.js')
// app.use(parser.urlencoded({ extended: true }))
// app.use(parser.json())
app.use(cors())
app.use(express.json());
    // app.get("/", (req, res) => {
    //     res.send("Welcome")
    // })
app.get('/', function(req, res){
    res.send("test")
})
app.use('/api/client', clientController)
// app.use('/api/contractor', conController)
// app.use("/api/owner", ownController)
// app.use("/api/property", propController)
app.use("/api/job", jobController)

// app.get('/api', function(req, res) {
//     res.redirect('/api/property')
// })
// app.get('/', function(req, res) {
//     res.redirect('/api/property')
// })
    
app.set("port", process.env.PORT || 8080);

app.listen(app.get("port"), () => {
    console.log(`http://localhost:${app.get("port")} works`);
});