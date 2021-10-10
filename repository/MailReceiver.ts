import Email from '../model/email'
import IReceiveMail from './interfaces/IReceiveMail';
import IStatusChanger from './interfaces/IStatusChanger';

class MailReceiver implements IReceiveMail{
    receiveMail(email: Email, statusChanger: IStatusChanger): Email {
        statusChanger.changeStatus(email)
        return email;
    }
}

export default MailReceiver;