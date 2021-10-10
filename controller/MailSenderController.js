"use strict";
exports.__esModule = true;
var emailStatus_1 = require("../enums/emailStatus");
var MailSender_1 = require("../repository/MailSender");
var StatusChanger_1 = require("../utils/StatusChanger");
var MailSenderController = /** @class */ (function () {
    function MailSenderController() {
        this.mailSenderRepo = new MailSender_1["default"]();
        this.successStatusChanger = new StatusChanger_1["default"](emailStatus_1["default"].OUTGOING);
        this.failureStatusChanger = new StatusChanger_1["default"](emailStatus_1["default"].FAILED);
    }
    MailSenderController.prototype.sendMailSuccessfully = function (email) {
        return this.mailSenderRepo.sendMail(email, this.successStatusChanger);
    };
    MailSenderController.prototype.sendMailFailed = function (email) {
        return this.mailSenderRepo.sendMail(email, this.failureStatusChanger);
    };
    return MailSenderController;
}());
exports["default"] = MailSenderController;
