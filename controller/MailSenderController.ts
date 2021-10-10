import EmailStatus from "../enums/emailStatus";
import Email from "../model/email";
import ISendMail from "../repository/interfaces/ISendMail";
import IStatusChanger from "../repository/interfaces/IStatusChanger";
import MailSender from "../repository/MailSender";
import StatusChanger from "../utils/StatusChanger";

class MailSenderController {
    private mailSenderRepo: ISendMail = new MailSender()
    private successStatusChanger: IStatusChanger = new StatusChanger(EmailStatus.OUTGOING)
    private failureStatusChanger: IStatusChanger = new StatusChanger(EmailStatus.FAILED)
    
    sendMailSuccessfully(email: Email): Email {
        return this.mailSenderRepo.sendMail(email, this.successStatusChanger)
    }

    sendMailFailed(email: Email): Email {
        return this.mailSenderRepo.sendMail(email, this.failureStatusChanger)
    }
}

export default MailSenderController;