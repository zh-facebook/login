function toggleContent() {
    var card = document.getElementById("card");
    var content = document.getElementById("content");

    if (card.classList.contains("hide")) {
        card.classList.remove("hide");
        content.classList.add("hide");
    } else {
        card.classList.add("hide");
        content.classList.remove("hide");
    }
}
