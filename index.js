"use strict";
exports.__esModule = true;
var MailReceiverController_1 = require("./controller/MailReceiverController");
var MailSenderController_1 = require("./controller/MailSenderController");
var MailReaderController_1 = require("./controller/MailReaderController");
var MailUnreadController_1 = require("./controller/MailUnreadController");
var MailArchiverController_1 = require("./controller/MailArchiverController");
var MailDeleteController_1 = require("./controller/MailDeleteController");
//Init Controllers
var mailSender = new MailSenderController_1["default"]();
var mailReceiver = new MailReceiverController_1["default"]();
var mailReader = new MailReaderController_1["default"]();
var mailUnread = new MailUnreadController_1["default"]();
var mailArchive = new MailArchiverController_1["default"]();
var mailDelete = new MailDeleteController_1["default"]();
var email = {
    id: 1,
    sender: "kwame@yahoo.com",
    receiver: "gee@yahoo.com",
    title: "MailBox",
    content: "Wow",
    status: undefined
};
//Send mail
console.log(mailSender.sendMailSuccessfully(email));
//Receive mail
console.log(mailReceiver.receiveEmailSuccess(email));
console.log(mailReceiver.receiveEmailFailed(email));
//Read mail
console.log(mailReader.readMailSuccess(email));
console.log(mailReader.readMailFailed(email));
//Mark mail as unread 
console.log(mailUnread.markMailAsUnreadSuccess(email));
console.log(mailUnread.markMailAsUnreadFailed(email));
//Archive mail
console.log(mailArchive.archiveMailSuccess(email));
console.log(mailArchive.archiveMailFailed(email));
//Delete Mail
console.log(mailDelete.deleteMailSuccess(email));
console.log(mailDelete.deleteMailFailed(email));
