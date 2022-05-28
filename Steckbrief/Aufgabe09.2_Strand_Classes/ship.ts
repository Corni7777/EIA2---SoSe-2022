namespace BeachClasses09_2 {
    export class Ship {
        position: Vector;
        velocity: Vector;

        constructor() {
            this.position = new Vector(crc2.canvas.width * 0.76, horizon);
            this.velocity = new Vector(40, 0);
        }
        move(_timeslice: number): void {
            let offset: Vector = new Vector(this.velocity.x, this.velocity.y);
            offset.scale(_timeslice);
            this.position.add(offset);

            if (this.position.x < crc2.canvas.width * 0.44) {
                this.velocity.x = this.velocity.x * -1;
            }

            if (this.position.x > crc2.canvas.width * 0.90) {
                this.velocity.x = this.velocity.x * -1;
            }

        }
        draw(): void {
            crc2.save();
            crc2.translate(this.position.x, this.position.y);
            if (this.velocity.x > 0) {
                crc2.scale(-1, 1);
            }
            crc2.beginPath();
            crc2.moveTo(-30, 0);
            crc2.lineTo(-37, -8);
            crc2.lineTo(4, -8);
            crc2.lineTo(0, 0);
            crc2.closePath();
            crc2.fillStyle = "black";
            crc2.fill();
            //Segel
            crc2.beginPath();
            crc2.translate(-15, -23);
            crc2.moveTo(0, 0);
            crc2.bezierCurveTo(-5, 0, -15, 10, 0, 13);
            crc2.strokeStyle = "white";
            crc2.lineWidth = 2;
            crc2.stroke();
            //Mast
            crc2.beginPath();
            crc2.translate(0, 15);
            crc2.moveTo(0, 0);
            crc2.lineTo(0, -16);
            crc2.strokeStyle = "black";
            crc2.lineWidth = 1;
            crc2.stroke();
            crc2.restore();
        }
    }
}