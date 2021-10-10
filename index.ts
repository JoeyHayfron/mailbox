import MailReceiverController from "./controller/MailReceiverController";
import MailSenderController from "./controller/MailSenderController";
import MailReaderController from "./controller/MailReaderController";
import Email from "./model/email";
import MailUnreadController from "./controller/MailUnreadController";
import MailArchiverController from "./controller/MailArchiverController";
import MailDeleteController from "./controller/MailDeleteController";

//Init Controllers
const mailSender = new MailSenderController();
const mailReceiver = new MailReceiverController();
const mailReader = new MailReaderController();
const mailUnread = new MailUnreadController();
const mailArchive = new MailArchiverController();
const mailDelete = new MailDeleteController();

const email: Email = {
    id: 1,
  sender: "kwame@yahoo.com",
  receiver: "gee@yahoo.com",
  title: "MailBox",
  content: "Wow",
  status: undefined
}

//Send mail
console.log(mailSender.sendMailSuccessfully(email))

//Receive mail
console.log(mailReceiver.receiveEmailSuccess(email));
console.log(mailReceiver.receiveEmailFailed(email));

//Read mail
console.log(mailReader.readMailSuccess(email))
console.log(mailReader.readMailFailed(email))

//Mark mail as unread 
console.log(mailUnread.markMailAsUnreadSuccess(email))
console.log(mailUnread.markMailAsUnreadFailed(email))

//Archive mail
console.log(mailArchive.archiveMailSuccess(email))
console.log(mailArchive.archiveMailFailed(email))

//Delete Mail
console.log(mailDelete.deleteMailSuccess(email))
console.log(mailDelete.deleteMailFailed(email))