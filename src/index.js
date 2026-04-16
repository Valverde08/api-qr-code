import prompt from "prompt";
import { mainPrompt } from "./prompts/prompt-main";

async function main() {
  prompt.get(mainPrompt, async (err, result) => {
    if (result.select == 1) console.log("Escolheu o qrCode");
    else if (result.select == 2) console.log("Escolheu o prompt");
  });
  prompt.start();
}

main();
