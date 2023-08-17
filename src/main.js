"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var QRCode = require("qrcode");
var fs = require("fs");
var channelUrls = [
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
function extractChannelName(channelUrl) {
    return channelUrl.slice(25);
}
function generateQrCode(channelUrl) {
    var channelName = extractChannelName(channelUrl);
    var outputPath = "../outputImages/qrcode_".concat(channelName, ".png");
    fs.open(outputPath, "w", function (err) {
        if (err)
            throw err;
    });
    QRCode.toFile(outputPath, channelUrl, {
        errorCorrectionLevel: "H",
    }, function (err) {
        if (err)
            throw err;
        console.log("QR code created for ".concat(channelName, "!"));
    });
}
channelUrls.forEach(function (channelUrl) { return generateQrCode(channelUrl); });
