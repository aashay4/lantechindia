'use strict';
const express = require('express');
const app = express();
const cors = require('cors');
const bodyParser = require('body-parser');
const nodemailer = require("nodemailer");

const PORT = process.env.PORT || 5000;

app.use(cors());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
// retrieves all the notes
// create a new note
app.get('/', (req, res) => {
  res.send("fucj");
  console.log("fuck!!!");
});
app.post('/api/note/create', (req, res) => {
  console.log(req.body);
  res.send("fucj");
  const output = `<p>A new inquiry</p>
                  <h3>Contact Details</h3>
                  <ul>
                  <li>Regarding: ${req.body.networkmigra}</li>
                  <li>email: ${req.body.email}</li>
                  <li>Phone: ${req.body.phone}</li>
                  <li>Question: ${req.body.question}</li>
                  </ul>
  `
  async function main() {
  // Generate test SMTP service account from ethereal.email
  // Only needed if you don't have a real mail account for testing
  let testAccount = await nodemailer.createTestAccount();

  // create reusable transporter object using the default SMTP transport
  const transporter = nodemailer.createTransport({
    service: 'Gmail',
    auth: {
        user: 'aashay.trivedi1@gmail.com',
        pass: 'Blue_shark4422'
    },
    tls:{
        rejectUnauthorized: false
    }
});

  // send mail with defined transport object
  let info = await transporter.sendMail({
    from: '"Contact Us Form Filled 👻" <aashay.trivedi1@gmail.com>', // sender address
    to: 'jayesh@lantechinfocom.co.in', // list of receivers
    subject: "Lantechinfocom.co.in Inquiry", // Subject line
    text: "Below is the information filled by the user on Lantechinfocom.co.in", // plain text body
    html: output // html body
  });

  console.log("Message sent: %s", info.messageId);
  // Message sent: <b658f8ca-6296-ccf4-8306-87d57a0b4321@example.com>

  // Preview only available when sending through an Ethereal account
  console.log("Preview URL: %s", nodemailer.getTestMessageUrl(info));
  // Preview URL: https://ethereal.email/message/WaQKMgKddxQDoou...
}

main().catch(console.error);
});


app.listen(PORT);
console.log('api runnging on port ' + PORT + ': ');
