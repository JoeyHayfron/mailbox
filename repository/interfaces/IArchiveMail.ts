import Email from '../../model/email'
import IStatusChanger from './IStatusChanger';

interface IArchiveMail{
    archiveMail(email: Email, statusChanger: IStatusChanger): Email
}

export default IArchiveMail;