"use strict";
exports.__esModule = true;
var emailStatus_1 = require("../enums/emailStatus");
var MailArchiver_1 = require("../repository/MailArchiver");
var StatusChanger_1 = require("../utils/StatusChanger");
var MailArchiverController = /** @class */ (function () {
    function MailArchiverController() {
        this.mailArchiver = new MailArchiver_1["default"]();
        this.successStatusChanger = new StatusChanger_1["default"](emailStatus_1["default"].ARCHIVED);
        this.failedStatusChanger = new StatusChanger_1["default"](emailStatus_1["default"].FAILED);
    }
    MailArchiverController.prototype.archiveMailSuccess = function (email) {
        return this.mailArchiver.archiveMail(email, this.successStatusChanger);
    };
    MailArchiverController.prototype.archiveMailFailed = function (email) {
        return this.mailArchiver.archiveMail(email, this.failedStatusChanger);
    };
    return MailArchiverController;
}());
exports["default"] = MailArchiverController;
