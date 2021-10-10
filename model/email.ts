import EmailStatus from "../enums/emailStatus";

type Email = {
  id: number
  sender: string;
  receiver: string;
  title: string;
  content: string;
  status: EmailStatus;
}

export default Email;

