const qrcode = require("qrcode-terminal");

const { Client } = require("whatsapp-web.js");
const client = new Client();

const { HadistArbain } = require("../../models");

let mode = "";

client.on("qr", (qr) => {
  qrcode.generate(qr, { small: true });
});

client.on("ready", () => {
  console.log("Client is ready!");
});

client.on("message", async (message) => {
  console.log(message.body);

  const key = message.body.split("-");

  console.log("key >>>", key);

  if (key[0] === "ARBAIN") {
    const data = await HadistArbain.findOne({
      where: {
        no: parseInt(key[1])
      }
    });

    console.log(data);

    const response = `*HADIST ARBAIN*\n\nHadist ke - ${data.dataValues.no}\n\n*${data.dataValues.title}*\n\n${data.dataValues.description}`;

    message.reply(response);
  }

  if (message.body === "RTXBOT") {
    mode = "RTXBOT";
    message.reply("Silahkan pilih mode:\n1. Robot\n2. Human");
  }

  if (message.body === "1" && mode === "RTXBOT") {
    mode = "";
    message.reply("Halo saya robot");
  }

  if (message.body === "2" && mode === "RTXBOT") {
    mode = "";
    message.reply("Halo saya Human");
  }

  if (message.body === "halo abdan") {
    message.reply("hai");
  }

  if (message.body === "gimana kabarnya?") {
    message.reply("alhamdulillah sehat, kamu?");
  }

  if (message.body === "lagi dimana?") {
    message.reply("bumi Allah nih, kamu?");
  }

  if (message.body === "lagi ngapain?") {
    message.reply("tugas negara");
  }
});

module.exports = client;
