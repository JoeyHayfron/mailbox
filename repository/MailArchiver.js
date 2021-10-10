"use strict";
exports.__esModule = true;
var MailArchiver = /** @class */ (function () {
    function MailArchiver() {
    }
    MailArchiver.prototype.archiveMail = function (email, statusChanger) {
        statusChanger.changeStatus(email);
        return email;
    };
    return MailArchiver;
}());
exports["default"] = MailArchiver;
