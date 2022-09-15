const fs = require("fs");
const qrcode = require("qrcode-terminal");
const { Client, LocalAuth } = require("whatsapp-web.js");

const client = new Client({
  authStrategy: new LocalAuth({ clientId: "client-one" })
});

client.on("qr", (qr) => {
  qrcode.generate(qr, { small: true });
});

client.on("ready", () => {
  console.log("Client is ready!");
});

client.on("message", async (message) => {
  const key = message.body.split("-");
  const flag = key.length > 0 ? "-" : "";

  if (
    key[0] === "ARBAIN" &&
    flag === "-" &&
    typeof parseInt(key[1]) === "number"
  ) {
    const response = await require("./hadistArbain")(message.body);

    if (response) message.reply(response);
  } else {
    const response = await require("./questionDetection")(message.body);

    if (response) message.reply(response);
  }
});

module.exports = client;
