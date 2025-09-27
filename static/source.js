const ROTATION = 0.3

class Source {
    constructor(v) {
        this.v = v
        this.rays = []
        for (const o of Array(90).keys()) {
            this.rays.push(new Ray(this.v, radians(o)))
        }
        this.yoff = 0
        this.xoff = 0
    }

    update(x, y) {
        //
        this.v.set(x, y)
        for (const ray of this.rays) {
            ray.update(this.v, radians(ROTATION))
        }
        this.xoff += random(1) / 500
        this.yoff += random(1) / 500
    }

    cast(walls) {
        for (const ray of this.rays) {
            let closest = null
            let max = Infinity
            for (const wall of walls) {
                const point = ray.cast(wall)
                if (point) {
                    const distance = p5.Vector.dist(this.v, point)
                    if (distance < max) {
                        max = distance
                        closest = point
                    }
                }
            }
            if (closest) {
                ray.draw(closest)
            }
        }
    }

    draw() {
        this.update(noise(this.xoff) * width, noise(this.yoff) * height);
        fill(255)
        ellipse(this.v.x, this.v.y, 3)
    }
}