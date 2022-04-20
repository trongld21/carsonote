function responsiveHeader() {
    var x = document.getElementById("nav");
    if (x.className === "header-item") {
        x.className = "responsive-header";
    } else {
        x.className = "header-item";
    }
}
const theCanvas = document.querySelector('canvas');
const ctx = theCanvas.getContext('2d');
const objects = []
class Circle {
    constructor() {
        this.x = Math.random() * theCanvas.width
        this.y = Math.random() * theCanvas.height
        this.size = Math.random() * +1
        this.speedX = Math.random() * 3 - 1.5
        this.speedY = Math.random() * 3 - 1.5
    }
    create() {
        ctx.fillStyle = '#fff'
        ctx.beginPath()
        ctx.arc(this.x, this.y, this.size, 0, Math.PI * 2)
        ctx.fill()
    }
    update() {
        this.x += this.speedX
        if (this.x > theCanvas.width) {
            this.x = 0
        }
        this.y += this.speedY
        if (this.y > theCanvas.height) {
            this.y = 0
        }
    }
}

function addObject() {
    for (let i = 0; i < 200; i++) {
        objects.push(new Circle())
    }
}

addObject()

function createCircle() {
    for (let i = 0; i < objects.length; i++) {
        objects[i].create();
        objects[i].update();
    }
}

createCircle();

function clear() {
    ctx.clearRect(0, 0, theCanvas.width, theCanvas.height)
    createCircle()
    requestAnimationFrame(clear)
}
clear()


const span = document.querySelectorAll('.circle span')
const bgs = ['red', 'blue', 'green', 'white', 'yellow', 'aqua']

setInterval(() => {

    for (let i = 0; i < span.length; i++) {
        let color = bgs[Math.floor(Math.random() * bgs.length)]
        span[i].style.border = `5px solid ${color}`
        span[i].style.animationName = "rotation";
        span[i].style.animationDuration = "15s";
        span[i].style.animationIterationCount = "infinite"
        span[i].style.animationDelay = i + "s"
    }
}, 200)