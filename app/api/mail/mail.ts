const nodemailer = require("nodemailer");

interface MailObj {
    email: string
}
interface EmailResponse {
    response: string
}

const sendMail = async(client: string, content: MailObj) => {
    const mailSentResponse = await sendMailHandler(client, content);
    console.log("email sent, emailResponse: ", mailSentResponse);
}

const sendMailHandler = async(client: string, content: MailObj) => {
    return new Promise((resolve, reject) => {
    
        const transport = nodemailer.createTransport({
            host: 'smtp.gmail.com',
            port: 587,
            secure: false,
            auth: {
                user: process.env.EMAIL,
                pass: process.env.EMAIL_PASSWORD
            }
        });

        const emailInfo = {
            from: process.env.EMAIL,
            to: `${content.email}`,
            subject: "Order Confirmation from REKANSTRUCTED",
            html: getHTMLMessage(client, content),
        }

        const emailResponse = transport.sendMail(emailInfo,
            (err: Error, result: EmailResponse) => {
                if(err) {
                    console.error('error sending mail');
                    reject(err);
                } else {
                    transport.close();
                    resolve(result.response);
                }
            })
    })
}


const getHTMLMessage = (client: string, content: MailObj) => {
    // return `
    // <h1>Hi, ${content.name}!</h1>
    // <h1>Thank you for your order!</h1>
    // <img src="https://media.giphy.com/media/l4q7VhGsL6BnXJrc4/giphy.gif"/>
    // <p>Order details: </p>
    // <ul>${content.htmlStr}</ul>
    // <p>Order total: $${content.total}</p>
    // `;
}

module.exports = { sendMail };