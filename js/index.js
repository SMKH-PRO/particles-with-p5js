let particles = []
function setup() {
    console.log("setup")
    createCanvas(innerWidth, innerHeight)
    // particle = new Particles()

    let particlesLength = Math.floor(innerWidth / 10)

    for (let i = 0; i <= particlesLength; i++) {
        particles.push(new Particles())
    }
    console.log("length", particlesLength)
}

function draw() {
    background("bisque")
    particles.forEach((p, i) => {
        p.update()
        p.drawParticle()
        p.connectParticles(particles.slice(i))
    });

}


class Particles {
    constructor() {
        this.position = createVector(random(width), random(height));
        this.size = 10;
        this.velocity = createVector(random(-2, 2), random(-2, 2))
    }

    update() {
        this.position.add(this.velocity)
        this.edges()
    }
    drawParticle() {
        console.log(this?.position?.x, this?.position?.y, this?.size)
        fill(255)
        circle(this?.position?.x, this?.position?.y, this?.size)
    }

    edges() {
        if (this.position.x < 0 || this.position.x > width) {
            this.velocity.x *= -1
        }
        if (this.position.y < 0 || this.position.y > height) {
            this.velocity.y *= -1

        }
    }


    connectParticles(particles) {
        particles.forEach(particle => {
            const distance = dist(this.position.x, this.position.y, particle.position.x, particle.position.y)

            if (distance < 100) {
                stroke(255)
                line(this.position.x, this.position.y, particle.position.x, particle.position.y)
            }
        });
    }
}

