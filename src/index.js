import prompt from "prompt";
import  mainPrompt  from "./prompts/prompt-main.js";

async function main() {
  

  prompt.get(mainPrompt, function(err, result){
    if (result.select == 1) console.log("Escolheu o qrCode");
    else if (result.select == 2) console.log("Escolheu o prompt");
  });

  prompt.start();
}

main();
