const loveMe = document.querySelector(".loveMe");
const timesEl = document.getElementById("times");

let clickTime = 0;
let times = 0;

loveMe.addEventListener("dblclick", (e) => {
    const x = e.offsetX;
    const y = e.offsetY;
    createHeart(x, y);

    updateTimes();
});

function createHeart(x, y) {
    const heart = document.createElement("i");
    heart.className = "fas fa-heart";
    loveMe.appendChild(heart);
    heart.style.left = `${x}px`;
    heart.style.top = `${y}px`;
    setTimeout(() => heart.remove(), 2000);
}

function updateTimes() {
    times++;
    timesEl.innerText = times;
}
