import * as QRCode from "qrcode";
import * as fs from "fs";

const channelUrls: string[] = [
    "https://www.youtube.com/@codeorg",
    "https://www.youtube.com/@CoderbyteDevelopers",
    "https://www.youtube.com/@Codesmith",
    "https://www.youtube.com/@craigndave",
    "https://www.youtube.com/@decomplexify",
    "https://www.youtube.com/@Fireship",
    "https://www.youtube.com/@freecodecamp",
    "https://www.youtube.com/@funfunfunction",
    "https://www.youtube.com/@KevinPowell",
    "https://www.youtube.com/@NetNinja",
    "https://www.youtube.com/@TraversyMedia",
    "https://www.youtube.com/@WesBos",
];

function extractChannelName(channelUrl: string): string {
    return channelUrl.slice(25);
}

function generateQrCode(channelUrl: string): void {
    const channelName = extractChannelName(channelUrl);
    const outputPath = `../outputImages/qrcode_${channelName}.png`;
    fs.open(outputPath, "w", function (err) {
        if (err) throw err;
    });
    QRCode.toFile(
        outputPath,
        channelUrl,
        {
            errorCorrectionLevel: "H",
        },
        function (err) {
            if (err) throw err;
            console.log(`QR code created for ${channelName}!`);
        }
    );
}

channelUrls.forEach((channelUrl) => generateQrCode(channelUrl));
