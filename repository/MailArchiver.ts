import Email from '../model/email'
import IArchiveMail from './interfaces/IArchiveMail';
import IStatusChanger from './interfaces/IStatusChanger';


class MailArchiver implements IArchiveMail{
    archiveMail(email: Email, statusChanger: IStatusChanger): Email {
        statusChanger.changeStatus(email);
        return email;
    }
}

export default MailArchiver;