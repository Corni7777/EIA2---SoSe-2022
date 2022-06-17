namespace BeachClasses10_2 {
    export class Movable {
        position: Vector;
        velocity: Vector;

        constructor(_position: Vector, _velocity: Vector) {
            this.position = _position;
            this.velocity = _velocity;

        }
        draw(): void {
            this.draw();
        }
        move(_timeslice: number): void {
            this.move(_timeslice);
        }
    }
}