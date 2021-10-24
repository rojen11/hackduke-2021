from twilio.rest import Client
import sched, os

account_sid = os.environ.get("ACCOUNT_SID")
auth_token = os.environ.get("AUTH_TOKEN")
messaging_sid = os.environ.get("MESSAGING_SID")

if account_sid and auth_token:
    client = Client(account_sid, auth_token)



def job(message_to, message_body):

    message = client.messages.create(
        messaging_service_sid=messaging_sid, body=message_body, to=message_to
    )

    print(message.sid)


def schedule_sms(time, message_to, message_body):
    if not account_sid and not auth_token:
        return

    s = sched.scheduler()
    s.enter(time, 1, job, (message_to, message_body))
    s.run()
