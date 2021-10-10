import MailReader from "../repository/MailReader";
import IReadMail from "../repository/interfaces/IReadMail";
import IStatusChanger from "../repository/interfaces/IStatusChanger";
import StatusChanger from "../utils/StatusChanger";
import EmailStatus from "../enums/emailStatus";
import Email from "../model/email";

class MailReaderController {
    private mailReader: IReadMail = new MailReader()
    private successStatusChanger: IStatusChanger = new StatusChanger(EmailStatus.READ)
    private failedStatusChanger: IStatusChanger = new StatusChanger(EmailStatus.FAILED)

    readMailSuccess(email: Email): Email{
        return this.mailReader.readMail(email, this.successStatusChanger)
    }

        readMailFailed(email: Email): Email{
        return this.mailReader.readMail(email, this.failedStatusChanger)
    }
}

export default MailReaderController;