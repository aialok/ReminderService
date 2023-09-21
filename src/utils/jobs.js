const cron = require("node-cron");
const emailServices = require("../services/email-services");
const sender = require("../config/emailConfig");
const htmlTemplate = require("./email-template");

// const { sendBasicEmail } = require("../src/services/email-services");

const newNotificationTicket = new NotificationTicket();

const cronSetup = () => {
  cron.schedule("*/1 * * * *", async () => {
    const newNotification = await emailServices.fetchPendingEmails();
    newNotification.forEach((email) => {
      sender.sendMail(
        {
          from: "reminderservices@gmail.com",
          to: email.recepientEmail,
          subject: email.subject,
          text: email.content,
          html: htmlTemplate,
        },
        async (err, data) => {
          if (err) {
            console.log(err);
          } else {
            console.log(data);

            email.status = "SUCCESS";
            await email.save();
          }
        }
      );
    });
  });
};

module.exports = cronSetup;
