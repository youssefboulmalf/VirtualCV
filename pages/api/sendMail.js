const mailgun = require("mailgun-js");
const DOMAIN = 'sandbox0304d39733614d449f9c822f42e72be3.mailgun.org';

export default function sendMail(req, res) {
  if (req.method !== 'POST') {
    res.status(405).send({ message: 'Only POST requests allowed' })
    return
  }

  const {payload} = req.body;
  const message = `${payload.message}\n \nReply to: ${payload.email}`
  console.log(message)

  var data = {
    from: "youssefboulmalf@gmail.com",
    to: "youssefboulmalf@gmail.com",
    subject: `New message from ${payload.name}`,
    text: message
  };

  const mg = mailgun({apiKey: process.env.MAILGUN_API_KEY, domain: DOMAIN});
  mg.messages().send(data, function (error, body) {
    console.log(error, body)
    error ? res.status(400).send({ error: error }) : res.status(200).send({ message: 'Succes' })
  });
}
