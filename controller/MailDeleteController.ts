import EmailStatus from "../enums/emailStatus";
import Email from "../model/email";
import IDeleteMail from "../repository/interfaces/IDeleteMail";
import IStatusChanger from "../repository/interfaces/IStatusChanger";
import MailDelete from "../repository/MailDelete";
import StatusChanger from "../utils/StatusChanger";

class MailDeleteController {
    private mailDelete: IDeleteMail = new MailDelete()
    private successStatusChanger: IStatusChanger = new StatusChanger(EmailStatus.DELETED)
    private failedStatusChanger: IStatusChanger = new StatusChanger(EmailStatus.FAILED)

    deleteMailSuccess(email: Email): Email {
        return this.mailDelete.deleteMail(email, this.successStatusChanger)
    }

        deleteMailFailed(email: Email): Email {
        return this.mailDelete.deleteMail(email, this.failedStatusChanger)
    }
}

export default MailDeleteController;