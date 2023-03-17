import admin from "firebase-admin";

// if (!admin.apps.length) {
//   admin.initializeApp({
//     credential: admin.credential.cert({
//       clientEmail:
//         "firebase-adminsdk-hz5ji@blogs-e8354.iam.gserviceaccount.com",
//       privateKey:
//         "-----BEGIN PRIVATE KEY-----\nMIIEvAIBADANBgkqhkiG9w0BAQEFAASCBKYwggSiAgEAAoIBAQDz0QG4SxR5OLgO\nJGWsX+EdOw7ANTtelu3/LEHKEr5NX40uYRBFmOZnvV6TGxYJM2W7wJDcokPLckGd\nQRe3RcN/04Qfx3ZIiqcxR3f7u55vvtTS6vTr1hWQz8oqWZX898oyXBpE9xpAenZJ\nCS6V80Qi9CEzxtlYENUnQH2Wa3A2Y9hvUnLJ/d7LEGRwPLbG6SIOcD/0hQh4KE4q\npsEupF+FA8HXOxxaf00lqVSlGEJQNSTjbkQLnA5fIxl4wAVhb+dMWXinECQ6pILf\nSKQUWswIQ918YCsrfxIy214Sc80vMRBLb7jR63XjMQ8IHeEC13HoGa7PmDe/6oU+\nFxTrlUovAgMBAAECggEAHHiqr7+su18hNx2O9esYWZZ86XsN3MTZM/QSFqvLpzNi\nRCk3gjkRpsmZUqpWD2r+FUeuYuVb71T/ToK8Zz1xT+r+QcvEB0KRtZJ382B8ZuYs\n6hhf025jhE6PeBSQDENPTEQvGSCV4zOpvmuhEgefTEmf2vD8jmkgyv2f7MHND7ys\nvzN9i1NtYA3u20cOthLh1LNp+FHNo9RomTJ8bgDG1DyfzgCdm8WBaDZqEfzvmKw1\nYXbzENAgRSYloSUufSnYmrOsSN/D9pWg8/0k5RStURSmkNSROCp3IkAtDoeywIpc\nh9LzliBbXrIHlmq7CrywHCh3g8jinZEITC12OSXLYQKBgQD6Bmrv/nXsGHvXspkS\njmr7C3XscFPq/+CZSJLCvRXnl477I+7EvxNkbDxQ7YzCruEUcqTaGAZm8GX0WxAi\niHo+/MeSSW4NCVdtcei7JyxxQ6AniljjSmNavpbFPaINiD6EMLREt82s5CeHpyQU\nXqAz2PTNZ7KAv68ydCwzBD/0PwKBgQD5pJs3xU9ke0aLkB2JfS5gBqY1SSAF5jLA\ngPebR1WkFRSR5NMyKZ4c6s4uFfoIysfWC9Igd74pC7XLDmgDJkl1tvUdpFA1SWZB\nF/ANyCpLMCbiN+cqjUHfxaTKpkwaS9LEOphIaZkAdMVpyxJNtoXBwrkLre4hj3r8\nLWAMMt1uEQKBgF/cLA396uptbLYDhMrnjb7Y4wqW+qXEGzHJ8HL3mjlkE27YlQgc\nFmxPT0Tb/zb5Y9S6K9huk63OB9kLPQFwgCY8NqwwuSAIb9vHa6qt101J11KxqWjj\nsXouTpIrEkHL9eQq5ELgkdvy0fEhtSSWLygRy7IhSwAv/hUDE5svyvFzAoGAW969\n2HpeS0YqofW5SP2ucVxBEl8Ez+b1Sm6rsJNB6w5u8XnaVx2FuHKYydEAoPevLxBO\nlfA7JPPQRRfaIz6VziI0dmIfulx2qwHaL9g36E+iH6IfCkPNuEIN8R3d59d7iwdd\nP1jNG6Pdep9m7v56nuHAI5Iwjl01D1TLgfG+F2ECgYBQ0sVIdqRLe1U6aDidY8Hd\nsvtN1Zt0Zr2Sg+wgYR0d6qwTYF5DYAdYOYALxTWL8WPkXXORFSGkr94OZpRkmjfL\nn5cXFipiS1/N3viRtangXuceP539rNlgMzZOFWluWB4pOffSjFspu0xUzjKX0eiz\nTfsfbRRvHm4QUc4YrmfVLw==\n-----END PRIVATE KEY-----\n",
//       projectId: "blogs-e8354",
//     }),
//     // databaseURL:
//   });
// }
var serviceAccount = require("./secret.json");
if (!admin.apps.length) {
  admin.initializeApp({
    credential: admin.credential.cert(serviceAccount),
  });
}
const auth = admin.auth();
export default auth;
// export admin.firestore();

// var serviceAccount = require("../secret.json");
// admin.initializeApp({
//   credential: admin.credential.cert(serviceAccount),
// });

/*import admin from "firebase-admin";

// const admin = require("firebase-admin");
const serviceAccount = require("./secret.json");

admin.initializeApp({
  credential: admin.credential.cert(serviceAccount),
});

const db = admin.firestore();
*/
// const functions = require("firebase-functions");
// const admin = require("firebase-admin");

// admin.initializeApp();

// exports.createUser = functions.https.onCall((data, context) => {
//   const { email, password } = data;
//   return admin
//     .auth()
//     .createUser({ email, password })
//     .then((userRecord) => {
//       const { uid, email } = userRecord;
//       return admin
//         .firestore()
//         .collection("users")
//         .doc(email)
//         .set({ uid, email });
//     })
//     .then(() => {
//       return { message: "User created successfully." };
//     })
//     .catch((error) => {
//       throw new functions.https.HttpsError("internal", error.message);
//     });
// });
