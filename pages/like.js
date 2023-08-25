const likeButton = document.getElementById("likeButton");
const dislikeButton = document.getElementById("dislikeButton");
const likeGif = document.getElementById("likeGif");
const dislikeGif = document.getElementById("dislikeGif");

likeButton.addEventListener("click", () => {
    likeGif.classList.remove("hidden");
    dislikeGif.classList.add("hidden");
});

dislikeButton.addEventListener("click", () => {
    likeGif.classList.add("hidden");
    dislikeGif.classList.remove("hidden");
});
