import qr from "qrcode-terminal";

async function handle(error, result) {
  if (error) {
    console.log("error on application");
    return;
  }

  const isSmall = result.type == 2;
  qr.generate(
    result.link,
    {
      small: isSmall,
    },
    (qrcode) => {
      console.log("QR code gerado com sucesso:\n");
      console.log(qrcode);
    },
  );
}

export default handle;
