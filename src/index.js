import prompt from "prompt";
import  mainPrompt  from "./prompts/prompt-main.js";
import createQrCode from "./services/qr-code/create.js";

async function main() {
  

  prompt.get(mainPrompt, function(err, result){
    if (result.select == 1) await createQrCode()
    else if (result.select == 2) console.log("Escolheu o prompt");
  });

  prompt.start();
}

main();
