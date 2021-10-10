import ISendMail from "./interfaces/ISendMail";
import Email from '../model/email'
import IStatusChanger from "./interfaces/IStatusChanger";

class MailSender implements ISendMail{
    sendMail(email: Email, statusChanger: IStatusChanger): Email {
        statusChanger.changeStatus(email)
        return email;
    }
}

export default MailSender;