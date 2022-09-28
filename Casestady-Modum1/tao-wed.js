let arr = ["img1.jpg","Bánh%20Xèo-%20Miền%20Nam.jpg", "ca-loc-nuong-trui.jpg", "gỏi%20cá%20bình%20định-9.jpg","img5Mì quảng 6.jpg"]
let index = 1

document.getElementById("slide").src = arr[0]

function changeImg() {
    let img = document.getElementById("slide")
    img.src = arr[index]
    index++
    if (index === 3) {
        index = 0
    }
}