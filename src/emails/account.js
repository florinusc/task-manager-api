const sgMail = require('@sendgrid/mail')

sgMail.setApiKey(process.env.SENDGRID_API_KEY)

const sendWelcomeEmail = (email, name) => {
    sgMail.send({
        to: email,
        from: 'florinusc@gmail.com',
        subject: 'Thanks for joining',
        content: [{
            type: 'text/plain',
            value: `Welcome to the app, ${name}. Let me know how you get along with the app.`
        }]
    }).then(() => {}, error => {
        console.log(error.response.body)
    })
}

const sendCancellationEmail = (email, name) => {
    sgMail.send({
        to: email,
        from: 'florinusc@gmail.com',
        subject: 'We are sorry to see you go',
        content: [{
            type: 'text/plain',
            value: `Hey ${name}, we are sorry that it didn't work out, could you please let us know what made you delete your account?`
        }]
    }).then(() => {}, error => {
        console.log(error.response.body)
    })
}

module.exports = {
    sendWelcomeEmail,
    sendCancellationEmail
}