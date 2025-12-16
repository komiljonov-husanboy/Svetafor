let elBox1 = document.querySelector(".box1")
let elBox2 = document.querySelector(".box2")
let elBox3 = document.querySelector(".box3")

function removeCol() {
    elBox1.classList.remove("color-box1")
    elBox2.classList.remove("color-box2")
    elBox3.classList.remove("color-box3")
}

function Svetafor() {
    removeCol()
    elBox1.classList.add("color-box1")
    setTimeout(() => {
        removeCol()
    elBox2.classList.add("color-box2")
    setTimeout(() => {
        removeCol()
    elBox3.classList.add("color-box3")
    setTimeout(() => {
        Svetafor()
    }, 3000);
    }, 2000);
    }, 3000);
}
Svetafor()

// xatolarni togrilash uchun ozroq chatgptdan foydalanildi leki kodni toliq ozim yozdim copy emas va tushindim kodni