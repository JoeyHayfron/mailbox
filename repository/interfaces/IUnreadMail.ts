import Email from "../../model/email";
import IStatusChanger from "./IStatusChanger";

interface IUnreadMail{
    markMailAsUnread(email: Email, statusChanger: IStatusChanger): Email
}

export default IUnreadMail;