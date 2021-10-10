"use strict";
exports.__esModule = true;
var MailSender = /** @class */ (function () {
    function MailSender() {
    }
    MailSender.prototype.sendMail = function (email, statusChanger) {
        statusChanger.changeStatus(email);
        return email;
    };
    return MailSender;
}());
exports["default"] = MailSender;
