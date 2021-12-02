let qrcode = select("img");
let qrtext = select("textarea");
let qrbtn = select("button");

qrbtn.addEventListener("click", generateQRC);

function generateQRC() {
    let size = "1000x1000";
    let data = qrtext.value;
    let baseURL = "http://api.qrserver.com/v1/create-qr-code/";
    let URL = `${baseURL}?data=${data}&size=${size}`;
    qrcode.src = URL;
}

function select(el){
    return document.querySelector(el);
}