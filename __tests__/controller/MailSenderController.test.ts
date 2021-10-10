import MailSenderController from "../../controller/MailSenderController";
import EmailStatus from "../../enums/emailStatus";
import Email from "../../model/email"

let email: Email = undefined;
let mailSender = new MailSenderController();

beforeEach(() => {
    email = {
id: 1,
  sender: "kwame@yahoo.com",
  receiver: "gee@yahoo.com",
  title: "MailBox",
  content: "Wow",
  status: undefined
    }

})

afterEach(() => {
    email = undefined;
})

describe('it should send email to receiver', () => {
    test('should send mail successfully', () => {
        mailSender.sendMailSuccessfully(email)
        expect(email.status).toBe(EmailStatus.OUTGOING)
    })

    test('should fail to send email', () => {
        mailSender.sendMailFailed(email)
        expect(email.status).toBe(EmailStatus.FAILED)
    })
    
})