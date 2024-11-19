const https = require("https");

exports.handler = async (event) => {
  const webhookUrl = "DISCORD_WEBHOOK_URL";

  const message = JSON.stringify({
    content: "這是一條測試訊息，來自 AWS Lambda!",
  });

  const options = {
    hostname: "discord.com",
    path: "WEBHOOK_PATH",
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      "Content-Length": Buffer.byteLength(message),
    },
  };

  try {
    const result = await new Promise((resolve, reject) => {
      const req = https.request(options, (res) => {
        let responseBody = "";

        res.on("data", (chunk) => {
          responseBody += chunk;
        });

        res.on("end", () => {
          if (res.statusCode >= 200 && res.statusCode < 300) {
            resolve({
              statusCode: res.statusCode,
              body: responseBody,
            });
          } else {
            reject(
              new Error(`HTTP Error: ${res.statusCode} - ${responseBody}`)
            );
          }
        });
      });

      req.on("error", (error) => {
        reject(new Error(`Request Failed: ${error.message}`));
      });

      req.write(message);
      req.end();
    });

    return {
      statusCode: result.statusCode,
      body: result.body,
    };
  } catch (error) {
    console.error("Error sending message to Discord:", error);
    return {
      statusCode: 500,
      body: JSON.stringify({ error: error.message }),
    };
  }
};
