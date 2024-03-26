const express =require("express");
const bodyparser=require('body-parser');
const {PORT} =require('./config/serverConfig');
const bodyParser = require("body-parser");
const { sendBasicEmail } = require("./services/emailService");
const setupJobs = require("./utils/job");
const ticket_contoler = require("./controller/ticket-controller");
(()=>{
    const app =express();
    app.use(bodyparser.json());
    app.use(bodyParser.urlencoded({extended:true}))

app.post('/api/v1/tickets',ticket_contoler.create);

    app.listen(PORT,()=>{
        console.log("starting the remonder server engine")
    });
setupJobs();
    // sendBasicEmail(
    //     'avnishkt16@gmail.com',
    //     "avnishkt16@gmail.com",
    //     "hello",
    //     "okkk new service"
    // )
   
})();
