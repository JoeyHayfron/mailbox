import Email from "../../model/email";
import IStatusChanger from "./IStatusChanger";

interface IReadMail{
    readMail(email: Email, statusChanger: IStatusChanger): Email
}

export default IReadMail;