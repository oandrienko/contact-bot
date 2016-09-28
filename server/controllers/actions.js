import sendAdminNotification from './../utils/mail';

export default {

    send(request, response) {
      return new Promise(function(resolve, reject) {
        console.log('Calling from actions.send: ', JSON.stringify(response));
        return resolve();
      });
    },

    sendEmail({context, entities}) {
      console.log('\nCalling PROMISE from sendEMail...\n');
      return new Promise(function(resolve, reject) {
        // Here should go the api call, e.g.:
        // context.forecast = apiCall(context.loc)
        // context.forecast = 'sunny';
        return resolve();
      });
    },

};