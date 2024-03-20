let messageArea = document.querySelector("#message");
let police = document.querySelector("#police");
let textColor = document.querySelector("#color");
let fondColor = document.querySelector("#fond_color");
let url = document.querySelector("#url");
let submit = document.querySelector("button");
let card = document.querySelector(".card");
let text = document.querySelector(".text");
let img = document.querySelector("#imageCard");
let messageError = document.querySelector("#messageError");
let urlerror = document.querySelector("#urlerror");


submit.addEventListener("click", () => {
    let newMessage = messageArea.value.trim();
    let newPolice = police.value;
    let newColor = textColor.value;
    let newFond = fondColor.value;
    let newUrl = url.value.trim();
    let cardHeight = "430px";
    let imgHeight = "240px";
    let imageWidht = "400px";
    
    
    if(messageArea.value ===""){
        messageError.style.display = "block";
    } else{
        messageError.style.display = "none";
    

    
    if(newUrl === ""){
        urlerror.style.display = "block"
    }   else{

    img.setAttribute("src", newUrl);
    img.style.height = imgHeight;
    card.style.backgroundColor = newFond;
    card.style.height = cardHeight
    img.style.width = imageWidht;
    text.textContent = newMessage;
    text.style.color = newColor;
    text.style.fontSize = newPolice;
}
}
});