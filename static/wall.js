class Wall {
    constructor(v1, v2) {
        this.a = v1;
        this.b = v2;
    }

    draw() {
        stroke(255)
        line(this.a.x, this.a.y, this.b.x, this.b.y)
    }
}