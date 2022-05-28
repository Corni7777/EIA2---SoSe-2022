namespace BeachClasses09_2 {
    export class Person {
        position: Vector;
        rotation: number;

        constructor(_position: Vector) {
            this.position = _position;
            this.rotation = 4.5;
        }
        draw(): void {
            crc2.save();
            crc2.translate(this.position.x, this.position.y);
            crc2.rotate(this.rotation);
            crc2.beginPath();
            crc2.arc(0, -23.5, 4, 0, 2 * Math.PI);
            crc2.moveTo(-1, -25.5);
            crc2.lineTo(-0.5, -25.5);
            crc2.moveTo(2, -25.5);
            crc2.lineTo(1.5, -25.5);
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