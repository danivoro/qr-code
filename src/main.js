"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var QRCode = require("qrcode");
QRCode.toDataURL("I am a pony!", function (err, url) {
    console.log(url);
});
