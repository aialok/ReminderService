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

const subscribeEvents = async (payload) => {
  const service = payload.service;
  const data = payload.data;

  switch (service) {
    case "CREATE_NOTIFICATION":
      createNotification(data);
      break;
    default:
      console.log("No valid event is choosen");
      break;
  }
};

module.exports = {
  sendBasicEmail,
  fetchPendingEmails,
  createNotification,
  subscribeEvents
};
