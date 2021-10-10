import EmailStatus from "../enums/emailStatus";
import Email from "../model/email";
import IStatusChanger from "../repository/interfaces/IStatusChanger";
import IUnreadMail from "../repository/interfaces/IUnreadMail";
import MailUnread from "../repository/MailUnread";
import StatusChanger from "../utils/StatusChanger";

class MailUnreadController{

    private unreadMail: IUnreadMail = new MailUnread()
    private successStatusChanger: IStatusChanger = new StatusChanger(EmailStatus.UNREAD)
    private failedStatusChanger: IStatusChanger = new StatusChanger(EmailStatus.FAILED)
    
    markMailAsUnreadSuccess(email: Email): Email {
        return this.unreadMail.markMailAsUnread(email, this.successStatusChanger)
    }

        markMailAsUnreadFailed(email: Email): Email {
        return this.unreadMail.markMailAsUnread(email, this.failedStatusChanger)
    }
}

export default MailUnreadController;