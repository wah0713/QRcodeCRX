

chrome.tabs.query({ active: true, currentWindow: true }, function (tabs) {
    new QRCode(document.getElementById("qrcode"), {
        text: tabs[0].url,
        width: 128,
        height: 128,
        colorDark: "#000000",
        colorLight: "#ffffff",
        correctLevel: QRCode.CorrectLevel.H
    });
})