"use strict";
exports.__esModule = true;
var MailReceiver = /** @class */ (function () {
    function MailReceiver() {
    }
    MailReceiver.prototype.receiveMail = function (email, statusChanger) {
        statusChanger.changeStatus(email);
        return email;
    };
    return MailReceiver;
}());
exports["default"] = MailReceiver;
