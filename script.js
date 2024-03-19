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
    let imageWidht = "auto";
    let font;
    
    
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
    img.style.widht = imageWidht;
    text.textContent = newMessage;
    text.style.color = newColor;

    if (newPolice === "choice_one") {
        font = "20px"
    } else if (newPolice === "choice_two") {
        font = "40px"
    } else if (newPolice === "choice_three") {
        font = "60px"
    }
    text.style.fontSize = font;
}

}
});