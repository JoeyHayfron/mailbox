import MailReceiverController from "../../controller/MailReceiverController";
import EmailStatus from "../../enums/emailStatus";
import Email from "../../model/email"

let email: Email = undefined;
const mailReceiver = new MailReceiverController()

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
    test('should receive mail successfully', () => {
        mailReceiver.receiveEmailSuccess(email)
        expect(email.status).toBe(EmailStatus.INCOMING)
    })

    test('should fail to receive email', () => {
        mailReceiver.receiveEmailFailed(email)
        expect(email.status).toBe(EmailStatus.FAILED)
    })
    
})