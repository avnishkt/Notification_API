const { Op } = require('sequelize');
const { NotificationTicket} =require('../models/index')

class  TicketRepository{
    async getAll(){
        try {
            const tickets =await NotificationTicket.findAll();
            return tickets
        } catch (error) {
            throw error;
        }
    }

    async create(data){
        try {
            console.log(data)
            const tickets =await NotificationTicket.create(data);
            return tickets;
        } catch (error) {
            throw error;
        }
    }
    async get(filter){
        try {
            const ticket = await NotificationTicket.findAll({
                where:{
                    satus:filter.satus,
                    notificationTime:{
                        [Op.lte]:new Date()
                    }
                }
            })
            return ticket
        } catch (error) {
            
        }
    }

    async update(ticketId,data){
try {
    console.log("Updating ticket with ID:", ticketId); // Log ticketId to check its value
        console.log("Update data:", data); // Log data to check its value
        const ticket = await NotificationTicket.findByPk(ticketId);
        if (!ticket) {
            throw new Error(`Ticket with ID ${ticketId} not found`);
        }
    if(data.satus){
        ticket.satus =data.satus;
    }
    await ticket.save();
} catch (error) {
    throw error;
}
    }
}
module.exports =TicketRepository;
