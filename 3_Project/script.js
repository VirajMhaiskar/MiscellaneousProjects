const alphaNumericChars = "ABCDEF0123456789";
const changeColor = document.querySelector(".change-color");

const createColor = () => {
    for(let i = 1; i < 13; i++) {
        let randomColor = "#";
        for(let i = 0; i < 6; i++) {
            const randomNumber = Math.floor(Math.random() * 16);
            randomColor += alphaNumericChars[randomNumber];
        }
        appendColor(randomColor);
    }
    
}

createColor();

function appendColor(color) {
    const div = document.createElement("div");
    div.classList.add("color-container");
    div.style.backgroundColor = color;
    const container = document.querySelector(".container");
    container.appendChild(div);
    const span = document.createElement("span");
    span.textContent = color;
    span.classList.add("hex-codes");
    div.appendChild(span);
}

let newDivEle = document.querySelectorAll(".color-container");

newDivEle.forEach((d) => {
    d.addEventListener("click", (e) => {
        const hexCodeElement = e.currentTarget.querySelector('.hex-codes');
        const hexCode = e.target.textContent;
        copyToClip(hexCode);

        hexCodeElement.classList.add("highlight");

        setTimeout(() => {
            hexCodeElement.classList.remove("highlight");
        }, 1000)
    })
});

function copyToClip(color) {
    const textArea = document.createElement("textarea");
    textArea.value = color;

    document.body.appendChild(textArea);
    textArea.focus();
    textArea.select();

    document.execCommand("copy");

    document.body.removeChild(textArea);
}

changeColor.addEventListener("click", () => {
    const container = document.querySelector(".container");
    container.innerHTML = ""; 
    createColor();
})