import nodemailer from 'nodemailer';
import template  from './template'
import template_raw from './template_raw'

export default function sendAdminNotification(name, email, message, callback) {

  let mailClient = {
    service: process.env.ANDRIENKOCO_MAIL_SERVICE,
    user: process.env.ANDRIENKOCO_MAIL_USER,
    pass: process.env.ANDRIENKOCO_MAIL_PASS
  };

  //the two template string exports
  const text = template_raw({name:name, email:email, message:message}), 
  html = template({name:name, email:email, message:message});

  let transporter = nodemailer.createTransport('SMTP', {
    service: mailClient.service,
    auth: {
        user: mailClient.user,
        pass: mailClient.pass
    }
  });

  let mailOptions = {
      from: mailClient.user,
      to: 'andrienko@live.ca',
      subject: '✔ Andrienko.co Contact Form',
      text: text, 
      html: html,
  };

  transporter.sendMail(mailOptions, function(error, info) {
    let send = error ? error : info;
    typeof callback === 'function' && callback(send);
  });

}