// Your code here
const dodger = document.getElementById("dodger")
dodger.style.backgroundColor = "#FF69B4"
function moveDodgerLeft() {
    const leftpx = dodger.style.left.replace("px", "")
    const left = parseInt(leftpx, 10);
    if (left > 0) {
        dodger.style.left = `${left - 1}px`
    }
}
function moveDodgerRight() {
    const leftpx = dodger.style.left.replace("px", "")
    const left = parseInt(leftpx, 10);
    if (left > 0) {
        dodger.style.left = `${left + 1}px`
    }
}


document.addEventListener("keydown", (e) => {
    if (e.key === "ArrowLeft") {
        moveDodgerLeft()
    }
})
document.addEventListener("keydown", (e) => {
    if (e.key === "ArrowRight") {
        moveDodgerRight()
    }
})
