"use strict";
exports.__esModule = true;
var MailReader_1 = require("../repository/MailReader");
var StatusChanger_1 = require("../utils/StatusChanger");
var emailStatus_1 = require("../enums/emailStatus");
var MailReaderController = /** @class */ (function () {
    function MailReaderController() {
        this.mailReader = new MailReader_1["default"]();
        this.successStatusChanger = new StatusChanger_1["default"](emailStatus_1["default"].READ);
        this.failedStatusChanger = new StatusChanger_1["default"](emailStatus_1["default"].FAILED);
    }
    MailReaderController.prototype.readMailSuccess = function (email) {
        return this.mailReader.readMail(email, this.successStatusChanger);
    };
    MailReaderController.prototype.readMailFailed = function (email) {
        return this.mailReader.readMail(email, this.failedStatusChanger);
    };
    return MailReaderController;
}());
exports["default"] = MailReaderController;
