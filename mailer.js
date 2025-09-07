import nodemailer from 'nodemailer';
import { promises as fs } from 'fs';
import path from 'path';
import dotenv from 'dotenv';

dotenv.config();


// Get the file path from command-line arguments
const filePath = process.argv[2];

if (!filePath) {
    console.error('No file provided!');
    process.exit(1);
}

const absolutePath = path.resolve(filePath);
console.log(`Reading "${absolutePath}"...`);


// file reading function
async function readFile(filePath) {
    try {
        return await fs.readFile(filePath, 'utf-8');
    } catch (error) {
        console.error('Failed to read file', filePath);
        throw error;
    }
}


const emailHtml = await readFile(absolutePath, 'utf8');
console.log(`File read successfully...`);


let user = '';
let username = '';
let pass = '';

const activeAccountNumber = process.env.MAILER_ACTIVE_ACCOUNT_NUM || "1";

switch (activeAccountNumber) {
    case '1':
        // Account
        user = process.env.MAILER_AUTH_USER_1;
        username = process.env.MAILER_AUTH_USERNAME_1;
        pass = process.env.MAILER_AUTH_PASSWORD_1;
        break;
    case '2':
        // Backup account
        user = process.env.MAILER_AUTH_USER_2;
        username = process.env.MAILER_AUTH_USERNAME_2;
        pass = process.env.MAILER_AUTH_PASSWORD_2;
        break;
    default:
        user = process.env.MAILER_AUTH_USER_1;
        username = process.env.MAILER_AUTH_USERNAME_1;
        pass = process.env.MAILER_AUTH_PASSWORD_1;
}

const recipient = process.env.MAILER_RECIPIENT;

const transporter = nodemailer.createTransport({
    service: 'Gmail',
    host: 'smtp.gmail.com',
    port: 465,
    secure: true,
    auth: {
        user: user,
        pass: pass,
    },
});


async function main() {

    console.log(`Sending from ${user} to ${recipient}...`);

    const info = await transporter.sendMail({
        from: `"${username}" <${user}>`,
        to: recipient,
        subject: `Hello ✔ ${Math.random()}`,
        text: `Test`,
        html: emailHtml,
    });

    console.log('Message sent: %s', info.messageId);
    console.log('Response: %s', info.response);
    console.log('Recipient: %s', info.accepted);
}


main().catch(console.error);


