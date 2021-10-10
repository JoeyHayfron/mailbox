import Email from "../../model/email";
import IStatusChanger from "./IStatusChanger";

interface IReceiveMail{
    receiveMail(email: Email, statusChanger: IStatusChanger): Email
}

export default IReceiveMail;