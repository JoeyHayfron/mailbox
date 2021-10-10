import StatusChanger from '../../utils/StatusChanger'
import MailSender from '../../repository/MailSender'
import Email from '../../model/email';
import EmailStatus from '../../enums/emailStatus';

jest.mock('../../utils/StatusChanger')
const mockStatusChanger = StatusChanger as jest.MockedClass<typeof StatusChanger>;

let email: Email = undefined;
const mailSender = new MailSender()
const mockedStatusChanger = new mockStatusChanger(EmailStatus.OUTGOING)
let sentMail = undefined;

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
    sentMail = mailSender.sendMail(email, mockedStatusChanger);
})

test('should call change status method of status changer', () => {
    expect(mockedStatusChanger.changeStatus).toBeCalled()
})

test('should return an email when mail is sent whether successful or not', () => {
    expect(sentMail).not.toBeUndefined()
})