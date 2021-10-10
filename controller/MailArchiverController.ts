import EmailStatus from "../enums/emailStatus";
import Email from "../model/email";
import IArchiveMail from "../repository/interfaces/IArchiveMail";
import IStatusChanger from "../repository/interfaces/IStatusChanger";
import MailArchiver from "../repository/MailArchiver";
import StatusChanger from "../utils/StatusChanger";

class MailArchiverController {
    private mailArchiver: IArchiveMail = new MailArchiver()
    private successStatusChanger: IStatusChanger = new StatusChanger(EmailStatus.ARCHIVED)
    private failedStatusChanger: IStatusChanger = new StatusChanger(EmailStatus.FAILED)


    archiveMailSuccess(email: Email): Email {
        return this.mailArchiver.archiveMail(email, this.successStatusChanger)
    }

        archiveMailFailed(email: Email): Email {
        return this.mailArchiver.archiveMail(email, this.failedStatusChanger)
    }
}

export default MailArchiverController