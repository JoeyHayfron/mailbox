import Email from '../model/email'
import IReadMail from './interfaces/IReadMail';
import IStatusChanger from './interfaces/IStatusChanger';


class MailReader implements IReadMail{
    readMail(email: Email, statusChanger: IStatusChanger): Email {
        statusChanger.changeStatus(email)
        return email;
    }
}

export default MailReader;