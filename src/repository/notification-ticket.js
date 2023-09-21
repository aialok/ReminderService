const { NotificationTicket } = require("../models/index");
const { Op } = require("sequelize");

class TicketRepository {
  async createTicket(data) {
    try {
      const response = await NotificationTicket.create(data);
      return response;
    } catch (error) {
      console.log({ error });
      throw error;
    }
  }

  async getAllNotification(filter) {
    try {
      const tickets = await NotificationTicket.findAll({
        where: {
          status: filter.status,
          notificationTime: { [Op.lte]: new Date() },
        },
      });
      return tickets;
    } catch (error) {
      console.log(error);
      throw { error };
    }
  }
}

module.exports = TicketRepository;
