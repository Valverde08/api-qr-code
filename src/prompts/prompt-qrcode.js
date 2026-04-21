import chalk from "chalk";

const promptQrCode = [
  {
    name: "link",
    description: chalk.yellow("Digiteo link para gerar o QR COde"),
  },
  {
    name: "type:",
    description: chalk.yellow(
      "Escolha entre o tipo(1 - NORMAL ou (-2 TERMINAL",
    ),
    pattern: /^[1-2]+$/,
    message: chalk.red.italic("Escolhe apenas entre 1 e 2"),
    required: true,
  },
];

export default promptQrCode;
