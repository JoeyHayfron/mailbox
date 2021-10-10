"use strict";
exports.__esModule = true;
var emailStatus_1 = require("../enums/emailStatus");
var MailDelete_1 = require("../repository/MailDelete");
var StatusChanger_1 = require("../utils/StatusChanger");
var MailDeleteController = /** @class */ (function () {
    function MailDeleteController() {
        this.mailDelete = new MailDelete_1["default"]();
        this.successStatusChanger = new StatusChanger_1["default"](emailStatus_1["default"].DELETED);
        this.failedStatusChanger = new StatusChanger_1["default"](emailStatus_1["default"].FAILED);
    }
    MailDeleteController.prototype.deleteMailSuccess = function (email) {
        return this.mailDelete.deleteMail(email, this.successStatusChanger);
    };
    MailDeleteController.prototype.deleteMailFailed = function (email) {
        return this.mailDelete.deleteMail(email, this.failedStatusChanger);
    };
    return MailDeleteController;
}());
exports["default"] = MailDeleteController;
