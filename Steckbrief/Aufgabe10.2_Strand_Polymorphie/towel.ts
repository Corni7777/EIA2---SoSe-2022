namespace BeachClasses10_2 {
    export class Towel extends Immovable {
        color: string;

        constructor(_position: Vector, _color: string) {
            super(_position);
            this.color = _color;
        }

        draw(): void {
            crc2.save();
            crc2.translate(this.position.x, this.position.y);
            crc2.fillStyle = this.color;
            crc2.fillRect(0, 0, 40, 20);
            crc2.restore();
        }
    }
}