const cron = require('node-cron');
const { fetchPendingEmails, sendBasicEmail, updateTicket } = require('../services/emailService');

const setupJobs = () => {
    cron.schedule('*/1 * * * *', async () => {
        try {
            const response = await fetchPendingEmails();
            console.log("Fetching pending emails...");

            for (const email of response) {
                try {
                    await sendBasicEmail("Reminder@gmail.com", // Corrected recipient email address
                        email.recepientEmail,
                        email.subject,
                        email.content);
       const id=email.id;
       const data= {satus:"SUCCESS"}
                    await updateTicket(id ,data);
                    console.log(`Email sent successfully to ${email.recepientEmail}`);
                } catch (error) {
                    console.error(`Error sending email to ${email.recepientEmail}:`, error);
                }
            }
        } catch (error) {
            console.error("Error fetching pending emails:", error);
        }
    });
};

module.exports = setupJobs;
