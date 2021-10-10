"use strict";
exports.__esModule = true;
var MailUnread = /** @class */ (function () {
    function MailUnread() {
    }
    MailUnread.prototype.markMailAsUnread = function (email, statusChanger) {
        statusChanger.changeStatus(email);
        return email;
    };
    return MailUnread;
}());
exports["default"] = MailUnread;
