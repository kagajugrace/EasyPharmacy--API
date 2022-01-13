import dotenv from "dotenv"

dotenv.config();

const client = require("twilio")(
  process.env.TWILIO_ACCOUNT_ID,
  process.env.TWILIO_AUTH_ID
);

const sendSms=(userName,orderId,applicationId,userPhone)=>{
    client.messages.create({ body:
    "Dear " +
    userName + " "
    +
    "your order was" + " " 
    +
    orderId +" " +
    "and it will be delivered  to you AS SOON AS POSSIBLE" + " "
    +
    "your refId is" +  " "
    +
    applicationId,
    from:"+1(769)210-5725",
    to:userPhone

    }).then((message)=> console.log(message.sid));
};

export default sendSms;