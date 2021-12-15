import * as functions from 'firebase-functions';
import { adminMailBody, thanksMailBody } from './lib/mailBody';

const admin = require('firebase-admin');
admin.initializeApp();
const db = admin.firestore();

// MEMO: 認証情報なくてもTrigger Emailは連携できた
// const cert = {
//   projectId: functions.config().cert.project_id,
//   clientEmail: functions.config().cert.client_email,
//   privateKey: functions.config().cert.private_key,
// };
// admin.initializeApp({
//   credential: admin.credential.cert(cert),
// });
// const db = admin.firestore();

export const sendMail = functions.region('asia-northeast1').https.onCall(async (data, context) => {
  const { email } = data;
  if (!email) {
    throw new functions.https.HttpsError('invalid-argument', 'email is required');
  }

  const adminMailData = {
    to: functions.config().gmail.email,
    message: {
      subject: 'ホームページお問い合わせ',
      text: adminMailBody(data),
    },
  };

  const thanksMailData = {
    to: email,
    message: {
      subject: 'お問い合わせありがとうございます',
      text: thanksMailBody(data),
    },
  };

  await db.collection('mail').add(adminMailData);
  await db.collection('mail').add(thanksMailData);
});
