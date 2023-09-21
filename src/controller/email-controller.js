const EmailServices = require("../services/email-services");

const create = async (req, res) => {
  try {
    const data = {
      subject: req.body.subject,
      content: req.body.content,
      recepientEmail: req.body.recepientEmail,
      status: req.body.status,
      notificationTime: new Date(),
    };

    const response = await EmailServices.createNotification(data);
    return res.status(201).json({
      data: response,
      message: "Successfully created a new notification",
      success: true,
      err: {},
    });
  } catch (error) {
    return res.status(500).json({
      data: {},
      message: "failed to create a new notification",
      success: false,
      err: { error },
    });
  }
};

module.exports = { create };
