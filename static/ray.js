class Ray {
    constructor(v, rad) {
        this.v = v
        this.rad = rad
        this.direction = p5.Vector.fromAngle(rad)
    }

    draw(p) {
      stroke(255, 100)
      line(this.v.x, this.v.y, p.x, p.y);
    }

    update(v, rad) {
      //move absolute position, and shift the angle
      this.v.set(v.x, v.y)
      this.rad += rad
      this.direction = p5.Vector.fromAngle(this.rad)
    }

    cast(wall) {
      // https://en.wikipedia.org/wiki/Line%E2%80%93line_intersection#Given_two_points_on_each_line_segment
        const x1 = wall.a.x;
        const y1 = wall.a.y;
        const x2 = wall.b.x;
        const y2 = wall.b.y;
    
        const x3 = this.v.x;
        const y3 = this.v.y;
        const x4 = x3 + this.direction.x;
        const y4 = y3 + this.direction.y;
    
        const den = (x1 - x2) * (y3 - y4) - (y1 - y2) * (x3 - x4);
        if (den == 0) {
          return;
        }
    
        const t = ((x1 - x3) * (y3 - y4) - (y1 - y3) * (x3 - x4)) / den;
        const u = -((x1 - x2) * (y1 - y3) - (y1 - y2) * (x1 - x3)) / den;
        if (t > 0 && t < 1 && u > 0) {
          const pt = createVector(x1 + t * (x2 - x1), y1 + t * (y2 - y1));
          return pt;
        } else {
          return;
        }
      }
}