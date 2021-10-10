import MailReaderController from "../../controller/MailReaderController";
import EmailStatus from "../../enums/emailStatus";
import Email from "../../model/email"

let email: Email = undefined;
let mailReader = new MailReaderController()

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

describe('it should make call to read email', () => {
    test('should read mail successfully', () => {
        mailReader.readMailSuccess(email)
        expect(email.status).toBe(EmailStatus.READ)
    })

    test('should fail to read email', () => {
        mailReader.readMailFailed(email)
        expect(email.status).toBe(EmailStatus.FAILED)
    })
    
})