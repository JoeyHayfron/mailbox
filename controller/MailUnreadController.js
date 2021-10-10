"use strict";
exports.__esModule = true;
var emailStatus_1 = require("../enums/emailStatus");
var MailUnread_1 = require("../repository/MailUnread");
var StatusChanger_1 = require("../utils/StatusChanger");
var MailUnreadController = /** @class */ (function () {
    function MailUnreadController() {
        this.unreadMail = new MailUnread_1["default"]();
        this.successStatusChanger = new StatusChanger_1["default"](emailStatus_1["default"].UNREAD);
        this.failedStatusChanger = new StatusChanger_1["default"](emailStatus_1["default"].FAILED);
    }
    MailUnreadController.prototype.markMailAsUnreadSuccess = function (email) {
        return this.unreadMail.markMailAsUnread(email, this.successStatusChanger);
    };
    MailUnreadController.prototype.markMailAsUnreadFailed = function (email) {
        return this.unreadMail.markMailAsUnread(email, this.failedStatusChanger);
    };
    return MailUnreadController;
}());
exports["default"] = MailUnreadController;
