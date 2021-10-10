import MailUnreadController from "../../controller/MailUnreadController";
import EmailStatus from "../../enums/emailStatus";
import Email from "../../model/email"

let email: Email = undefined;
let mailUnread = new MailUnreadController();

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

describe('it should make a call to mark mail as unread', () => {
    test('should successfully mark mail as read', () => {
        mailUnread.markMailAsUnreadSuccess(email)
        expect(email.status).toBe(EmailStatus.UNREAD)
    })

    test('should fail to mark mail as unread', () => {
        mailUnread.markMailAsUnreadFailed(email)
        expect(email.status).toBe(EmailStatus.FAILED)
    })
    
})