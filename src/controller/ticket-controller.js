const TicketService =require('../services/emailService');

const create =async (req,res)=>{
    try {
        const ticket =await TicketService.createNotification(req.body);
    return res.status(201).json({
        success:true,
        data:ticket,
        err:{},
        message: "succesfully registered email an email reminder"
    });
    } catch (error) {
        return res.status(201).json({
            success:false,
            data:req.body,
            err:error,
            message: "failed at email an email reminder"
    });
}

    
}

module.exports={
    create
}