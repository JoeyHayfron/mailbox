import EmailStatus from "../enums/emailStatus";
import Email from "../model/email";
import IReceiveMail from "../repository/interfaces/IReceiveMail";
import IStatusChanger from "../repository/interfaces/IStatusChanger";
import MailReceiver from "../repository/MailReceiver";
import StatusChanger from "../utils/StatusChanger";

class MailReceiverController {
    private getMail: IReceiveMail = new MailReceiver()
    private successStatusChanger: IStatusChanger = new StatusChanger(EmailStatus.INCOMING);
    private failedStatusChanger: IStatusChanger = new StatusChanger(EmailStatus.FAILED);

    receiveEmailSuccess(email: Email): Email{
        return this.getMail.receiveMail(email, this.successStatusChanger)
    }

        receiveEmailFailed(email: Email): Email{
        return this.getMail.receiveMail(email, this.failedStatusChanger)
    }
}

export default MailReceiverController;