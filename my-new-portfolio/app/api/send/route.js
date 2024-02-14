import { Resend } from 'resend';

const resend = new Resend(process.env.RESEND_API_KEY);
const fromEmail = process.env.FROM_EMAIL

export async function POST(req, res) {
    const { body } = await req.json()
    const { email, subject, message } = body
    try {
        const data = await resend.emails.send({
            from: fromEmail,
            to: [''],
            subject,
            react: (
                <>
                    <h1>{subject}</h1>
                    <p>Thank you for contacting us!</p>
                    <p>New message submitted:</p>
                    <p>{message}</p>
                </>
            ),
        });

        return Response.json(data);
    } catch (error) {
        return Response.json({ error });
    }
}
