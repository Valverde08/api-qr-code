import prompt from "prompt";
import mainPrompt from "./prompts/prompt-main.js";
import createQrCode from "./services/qr-code/create.js";
import creatPassword from "./services/password/create-password.js";

async function main() {
  prompt.get(mainPrompt, async function (err, result) {
    if (result.select == 1) createQrCode();
    else if (result.select == 2) await creatPassword();
  });

  prompt.start();
}

main();
