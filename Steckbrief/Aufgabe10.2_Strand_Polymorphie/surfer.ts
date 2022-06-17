namespace BeachClasses10_2 {
    export class Surfer extends Movable {

        move(_timeslice: number): void {
            let offset: Vector = new Vector(this.velocity.x, this.velocity.y);
            offset.scale(_timeslice);
            this.position.add(offset);

            if (this.position.x < crc2.canvas.width * 0.4 || this.position.y < horizon + 50) {
                this.velocity.x = this.velocity.x * -1;
                this.velocity.y = this.velocity.y * -1;
            }
            if (this.position.x > crc2.canvas.width * 0.85 || this.position.y > crc2.canvas.height - 20) {
                this.velocity.x = this.velocity.x * -1;
                this.velocity.y = this.velocity.y * -1;
            }
        }
        draw(): void {
            crc2.save();
            crc2.translate(this.position.x, this.position.y);
            crc2.beginPath();
            crc2.moveTo(0, 0);
            crc2.bezierCurveTo(-10, 0, -25, -10, -20, -20);
            crc2.bezierCurveTo(-10, -20, 0, -10, 0, 0);
            crc2.closePath();
            crc2.fillStyle = "white";
            crc2.fill();
            // Ich könnte ich auch die Funktion drawPerson aufrufen aber das hat 
            // beim ausprobieren nicht richtig funktioniert.
            crc2.beginPath();
            crc2.translate(-6, -6);
            crc2.arc(0.5, -23.5, 4, 0, 2 * Math.PI);
            crc2.moveTo(-1, -25.5);
            crc2.lineTo(-0.5, -25.5);
            crc2.moveTo(2, -24.7);
            crc2.lineTo(1.5, -24.7);
            crc2.closePath();

            crc2.lineWidth = 0.6;
            crc2.stroke();
            crc2.beginPath();
            crc2.arc(-0, -23.5, 2, 0, Math.PI);
            crc2.lineWidth = 0.7;
            crc2.stroke();
            crc2.beginPath();
            crc2.moveTo(0, 0);
            crc2.lineTo(-1.5, -10);
            crc2.lineTo(-9, -6);
            crc2.moveTo(-1.5, -10);
            crc2.lineTo(-0.5, -20);
            crc2.moveTo(-1, -15);
            crc2.lineTo(-8, -21);
            crc2.moveTo(-1, -15);
            crc2.lineTo(8, -18);
            crc2.lineWidth = 1.5;
            crc2.stroke();

            crc2.restore();
        }
    }

}