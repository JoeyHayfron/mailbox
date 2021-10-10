import MailArchiverController from "../../controller/MailArchiverController";
import EmailStatus from "../../enums/emailStatus";
import Email from "../../model/email"

let email: Email = undefined;
let mailArchiver = new MailArchiverController()

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

describe('it should make call to archive email', () => {
    test('should archive mail successfully', () => {
        mailArchiver.archiveMailSuccess(email)
        expect(email.status).toBe(EmailStatus.ARCHIVED)
    })

    test('should fail to archive email', () => {
        mailArchiver.archiveMailFailed(email)
        expect(email.status).toBe(EmailStatus.FAILED)
    })
    
})