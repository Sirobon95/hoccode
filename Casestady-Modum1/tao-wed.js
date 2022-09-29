let arr = ["img1.jpg","img2.jpg","jmg3.jpg","img4.jpg","img5.jpg","img6.jpg.webp","img7.jpg.webp","img8-min.jpg.webp",]

document.getElementById("slide").src = arr[0]

function changeImg() {
    let img = document.getElementById("slide")
    img.src = arr[index]
    index++
    if (index === 7) {
        index = 0
    }
}