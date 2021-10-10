import Email from "../../model/email"
import IStatusChanger from "./IStatusChanger";

interface ISendMail{
    sendMail(email: Email, statusChanger: IStatusChanger): Email
}

export default ISendMail;