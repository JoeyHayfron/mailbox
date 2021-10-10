"use strict";
exports.__esModule = true;
var StatusChanger = /** @class */ (function () {
    function StatusChanger(status) {
        this.status = status;
    }
    StatusChanger.prototype.changeStatus = function (email) {
        email.status = this.status;
        return email;
    };
    return StatusChanger;
}());
exports["default"] = StatusChanger;
