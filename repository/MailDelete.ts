import Email from '../model/email'
import IDeleteMail from './interfaces/IDeleteMail';
import IStatusChanger from "./interfaces/IStatusChanger";


class MailDelete implements IDeleteMail{
    deleteMail(email: Email, statusChanger: IStatusChanger): Email {
        statusChanger.changeStatus(email);
        return email;
    }
}

export default MailDelete;