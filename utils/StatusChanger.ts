import EmailStatus from "../enums/emailStatus";
import Email from "../model/email";
import IStatusChanger from '../repository/interfaces/IStatusChanger'

class StatusChanger implements IStatusChanger{
    status: EmailStatus;

    constructor(status: EmailStatus) {
        this.status = status
    }

    changeStatus(email: Email): Email{
        email.status = this.status;
        return email
    }
}

export default StatusChanger;