import Email from '../model/email'
import IUnreadMail from './interfaces/IUnreadMail';
import IStatusChanger from './interfaces/IStatusChanger';

class MailUnread implements IUnreadMail{
    markMailAsUnread(email: Email, statusChanger: IStatusChanger): Email {
        statusChanger.changeStatus(email);
        return email;
    }
}

export default MailUnread;