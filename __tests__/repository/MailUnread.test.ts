import StatusChanger from '../../utils/StatusChanger'
import MailUnread from '../../repository/MailUnread'
import Email from '../../model/email';
import EmailStatus from '../../enums/emailStatus';

jest.mock('../../utils/StatusChanger')
const mockStatusChanger = StatusChanger as jest.MockedClass<typeof StatusChanger>;

let email: Email = undefined;
const mailUnread = new MailUnread()
const mockedStatusChanger = new mockStatusChanger(EmailStatus.UNREAD)
let unreadMail = undefined;

beforeEach(() => {
    mockStatusChanger.mockClear();
    email = {
        id: 1,
        sender: "kwame@yahoo.com",
        receiver: "gee@yahoo.com",
        title: "MailBox",
        content: "Wow",
        status: undefined
    }
 //   unreadMail = mailUnread.markMailAsUnread(email, mockStatusChanger)
})
test('it should run', () => {})
// test('should call change status method of status changer', () => {
//     expect(mockedStatusChanger.changeStatus).toBeCalled()
// })

// test('should return an email when mail is sent whether successful or not', () => {
//     expect(sentMail).not.toBeUndefined()
// })