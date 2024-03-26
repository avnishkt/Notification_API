const sender =require('../config/emailConfig');
const TicketRepository = require('../repository/ticket_repository');

const sendBasicEmail = async(mailFrom,mailTo,mailSubject,mailBody)=>{
     
    const response=await sender.sendMail({
        from:mailFrom,
        to:mailTo,
        subject:mailSubject,
        text:mailBody

    });
    console.log(response);
}
const fetchPendingEmails= async (timestamp)=>{
    try {
        const repo =new TicketRepository();
        const response = await repo.get({satus:"PENDING"});
        return response;
    } catch (error) {
        throw error;
    }
}
const updateTicket=async(ticketId,data)=>{
    try {
        const repo =new TicketRepository();
        const response = await repo.update(ticketId,data);
        return response;
    } catch (error) {
        throw error;
    }
}

const fetchPendingEmail= async (timestamp)=>{
    try {
        const repo =new TicketRepository();
        const response = await repo.getAll();
        return response;
    } catch (error) {
        throw error;
    }
}

const createNotification  =async (data)=>{
    try {
        const repo =new TicketRepository();
        const response = await repo.create(data);
        return response;
    } catch (error) {
        throw error;
    }
}

module.exports={
    sendBasicEmail,
    fetchPendingEmails,createNotification,updateTicket
}