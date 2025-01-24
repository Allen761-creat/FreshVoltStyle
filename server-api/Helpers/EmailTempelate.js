// import { SES_SENDER_EMAIL } from "../Configuration/config";

// const EmailTemplate = (reciverEmail, subject, content) => {
//   return {
//     source: SES_SENDER_EMAIL,
//     Destination: {
//       ToAddresses: [reciverEmail],
//     },
//     Message: {
//       Subject: {
//         Charset: "UTF-8",
//         Data: `FreshVoltStyle -- ${subject}`,
//       },

//       Body: {
//         Html: {
//           Charset: "UTF-8",
//           Data: `
//                 <html>
//                     <body>
//                     <h1>Welcome to FreshVoltStyle</h1>
//                     ${content}
//                     <p>Thank you for verification at FreshVoltStyle</p>
//                     <p> &copy All right reserved 2024-2026 </p>

//                     </body>

//                     </html>
                    
                
                
//                 `,
//         },
//       },
//     },
//   };
// };

// export default EmailTemplate;
