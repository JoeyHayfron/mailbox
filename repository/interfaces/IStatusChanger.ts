import Email from "../../model/email";

interface IStatusChanger{
    changeStatus(email: Email): Email
}

export default IStatusChanger