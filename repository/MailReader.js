"use strict";
exports.__esModule = true;
var MailReader = /** @class */ (function () {
    function MailReader() {
    }
    MailReader.prototype.readMail = function (email, statusChanger) {
        statusChanger.changeStatus(email);
        return email;
    };
    return MailReader;
}());
exports["default"] = MailReader;
