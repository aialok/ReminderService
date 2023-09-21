const sender = require("../config/emailConfig");
const TicketRepository = require("../repository/notification-ticket");
const notificationRepository = new TicketRepository();
const sendBasicEmail = (mailFrom, mailTO, mailSubject, mailBody, mailHtml) => {
  sender.sendMail({
    from: mailFrom,
    to: mailTO,
    subject: mailSubject,
    text: mailBody,
    html: mailHtml,
  });
};

const fetchPendingEmails = async () => {
  try {
    const response = await notificationRepository.getAllNotification({
      status: "PENDING",
    });

    return response;
  } catch (error) {
    console.log(error);
  }
};

const createNotification = async (data) => {
  try {
    const response = await notificationRepository.createTicket(data);
    return response;
  } catch (error) {}
};

module.exports = {
  sendBasicEmail,
  fetchPendingEmails,
  createNotification,
};
