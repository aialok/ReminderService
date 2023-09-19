const sender = require("../config/emailConfig");

const sendBasicEmail = (mailFrom, mailTO, mailSubject, mailBody, mailHtml) => {
  sender.sendMail({
    from: mailFrom,
    to: mailTO,
    subject: mailSubject,
    text: mailBody,
    html: mailHtml,
  });
};

module.exports = {
  sendBasicEmail,
};
