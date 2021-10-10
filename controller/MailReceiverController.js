"use strict";
exports.__esModule = true;
var emailStatus_1 = require("../enums/emailStatus");
var MailReceiver_1 = require("../repository/MailReceiver");
var StatusChanger_1 = require("../utils/StatusChanger");
var MailReceiverController = /** @class */ (function () {
    function MailReceiverController() {
        this.getMail = new MailReceiver_1["default"]();
        this.successStatusChanger = new StatusChanger_1["default"](emailStatus_1["default"].INCOMING);
        this.failedStatusChanger = new StatusChanger_1["default"](emailStatus_1["default"].FAILED);
    }
    MailReceiverController.prototype.receiveEmailSuccess = function (email) {
        return this.getMail.receiveMail(email, this.successStatusChanger);
    };
    MailReceiverController.prototype.receiveEmailFailed = function (email) {
        return this.getMail.receiveMail(email, this.failedStatusChanger);
    };
    return MailReceiverController;
}());
exports["default"] = MailReceiverController;
