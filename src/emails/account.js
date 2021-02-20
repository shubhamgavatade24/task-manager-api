
// to install sendgrid npm module
// npm i @sendgrid/mail@6.3.1

const sgMail = require('')

const sendgridAPIKey = ''

sgMail.setApiKey(sendgridAPIKey)

const sendWelcomeEmail = (email,name) => {
    sgMail.send({
        to: email,
        from: 'redwinner24@gmail.com',
        subject: 'Thanks for joining in',
        text: `Welcome to the app, ${name}. let me know how you get along with the app`
    })
}

const sendCancelationEmail = (email,name) => {
    sgMail.send({
        to: email,
        from: 'redwinner24@gmail.com',
        subject: 'Sorry to see you go',
        text: `GoodBye, ${name}. Hope to see you bacj soon`
    })
}

// module.exports = {
//     sendWelcomeEmail,
//     sendCancelationEmail
// }