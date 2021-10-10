import MailDeleteController from "../../controller/MailDeleteController";
import EmailStatus from "../../enums/emailStatus";
import Email from "../../model/email"

let email: Email = undefined;
let mailDelete = new MailDeleteController()

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

describe('it should make call to delete email', () => {
    test('should delete mail successfully', () => {
        mailDelete.deleteMailSuccess(email)
        expect(email.status).toBe(EmailStatus.DELETED)
    })

    test('should fail to delete email', () => {
        mailDelete.deleteMailFailed(email)
        expect(email.status).toBe(EmailStatus.FAILED)
    })
    
})