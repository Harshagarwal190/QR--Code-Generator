
const qrFormEL = document.getElementById("qrForm");
const qrImageEl = document.getElementById("qrimage"); // match 'qrimage' in HTML
const qrContainerEl = document.getElementById("qrcontainer"); // match 'qrcontainer' in HTML
const qrInputTextEL = document.getElementById("qrInputText");
const generateBtnEL = document.getElementById("generateBtn");

const renderQRCode = (url) => {
    if (!url) return;

    generateBtnEL.innerText = "Generating QR Code...";
    qrImageEl.src = url;

    const onImageLoad = () => {
        setTimeout(() => {
            qrContainerEl.classList.add("show");
            generateBtnEL.innerText = "Generate QR Code";
        }, 500);
    };

    qrImageEl.addEventListener("load", onImageLoad);
};

qrFormEL.addEventListener("submit", (event) => {
    event.preventDefault();

    const formData = new FormData(qrFormEL);
    const text = formData.get("qrText");

    if (!text.trim()) {
        return;
    }

    const qrCodeUrl = `https://api.qrserver.com/v1/create-qr-code/?size=150x150&data=${text}`;
    renderQRCode(qrCodeUrl);
});

qrInputTextEL.addEventListener("keyup", () => {
    if (!qrInputTextEL.value.trim()) {
        qrContainerEl.classList.remove("show");
    }
});
