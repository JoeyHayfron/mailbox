import Email from "../../model/email";
import IStatusChanger from "./IStatusChanger";

interface IDeleteMail{
    deleteMail(email: Email, statusChanger: IStatusChanger): Email
}

export default IDeleteMail;