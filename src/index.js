const express = require("express");
const bodyParser = require("body-parser");

//Imports
const { PORT } = require("../src/config/serverConfig");
const { sendBasicEmail, subscribeEvents } = require("../src/services/email-services");
const setupJobs = require("./utils/jobs");
const EmailController = require("./controller/email-controller");
const {subscribeMessage, createChannel}= require("./utils/messageQueue")
const {REMINDER_BINDING_KEY}= require("./config/serverConfig")
const {testing} = require("./services/email-services")

const SetupAndStartServer = async (req, res) => {
  const app = express();
  app.use(bodyParser.json());
  app.use(bodyParser.urlencoded({ extended: true }));

  const channel = await createChannel();

  subscribeMessage(channel, subscribeEvents, REMINDER_BINDING_KEY).then(()=>{
    console.log("success")
  }).catch((err)=>{
    console.log(err)
  });


  app.post("/api/v1/notification", EmailController.create);

  setupJobs();

  app.listen(PORT, () => {
    console.log(`Server Started on ${PORT}`);
  });
};

SetupAndStartServer();
