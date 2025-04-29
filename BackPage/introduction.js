function toggleContent() {
    var card = document.getElementById("card");
    var content = document.getElementById("content");


    if (card.classList.contains("hide")) {
        card.classList.remove("hide");
        content.classList.add("hide");
        document.title = "預告函";
   
    } else {
        card.classList.add("hide");
        content.classList.remove("hide");
        document.title = "什麼是釣魚網站？";
    }
}
