"use strict";
exports.__esModule = true;
var MailDelete = /** @class */ (function () {
    function MailDelete() {
    }
    MailDelete.prototype.deleteMail = function (email, statusChanger) {
        statusChanger.changeStatus(email);
        return email;
    };
    return MailDelete;
}());
exports["default"] = MailDelete;
