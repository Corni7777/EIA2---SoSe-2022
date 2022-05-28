var BeachClasses09_2;
(function (BeachClasses09_2) {
    var Surfer = /** @class */ (function () {
        function Surfer(_position, _velocity) {
            this.position = _position;
            this.velocity = _velocity;
        }
        Surfer.prototype.move = function (_timeslice) {
            var offset = new BeachClasses09_2.Vector(this.velocity.x, this.velocity.y);
            offset.scale(_timeslice);
            this.position.add(offset);
            if (this.position.x < BeachClasses09_2.crc2.canvas.width * 0.4 || this.position.y < BeachClasses09_2.horizon + 50) {
                this.velocity.x = this.velocity.x * -1;
                this.velocity.y = this.velocity.y * -1;
            }
            if (this.position.x > BeachClasses09_2.crc2.canvas.width * 0.85 || this.position.y > BeachClasses09_2.crc2.canvas.height - 20) {
                this.velocity.x = this.velocity.x * -1;
                this.velocity.y = this.velocity.y * -1;
            }
        };
        Surfer.prototype.draw = function () {
            BeachClasses09_2.crc2.save();
            BeachClasses09_2.crc2.translate(this.position.x, this.position.y);
            BeachClasses09_2.crc2.beginPath();
            BeachClasses09_2.crc2.moveTo(0, 0);
            BeachClasses09_2.crc2.bezierCurveTo(-10, 0, -25, -10, -20, -20);
            BeachClasses09_2.crc2.bezierCurveTo(-10, -20, 0, -10, 0, 0);
            BeachClasses09_2.crc2.closePath();
            BeachClasses09_2.crc2.fillStyle = "white";
            BeachClasses09_2.crc2.fill();
            // Ich könnte ich auch die Funktion drawPerson aufrufen aber das hat 
            // beim ausprobieren nicht richtig funktioniert.
            BeachClasses09_2.crc2.beginPath();
            BeachClasses09_2.crc2.translate(-6, -6);
            BeachClasses09_2.crc2.arc(0.5, -23.5, 4, 0, 2 * Math.PI);
            BeachClasses09_2.crc2.moveTo(-1, -25.5);
            BeachClasses09_2.crc2.lineTo(-0.5, -25.5);
            BeachClasses09_2.crc2.moveTo(2, -24.7);
            BeachClasses09_2.crc2.lineTo(1.5, -24.7);
            BeachClasses09_2.crc2.closePath();
            BeachClasses09_2.crc2.lineWidth = 0.6;
            BeachClasses09_2.crc2.stroke();
            BeachClasses09_2.crc2.beginPath();
            BeachClasses09_2.crc2.arc(-0, -23.5, 2, 0, Math.PI);
            BeachClasses09_2.crc2.lineWidth = 0.7;
            BeachClasses09_2.crc2.stroke();
            BeachClasses09_2.crc2.beginPath();
            BeachClasses09_2.crc2.moveTo(0, 0);
            BeachClasses09_2.crc2.lineTo(-1.5, -10);
            BeachClasses09_2.crc2.lineTo(-9, -6);
            BeachClasses09_2.crc2.moveTo(-1.5, -10);
            BeachClasses09_2.crc2.lineTo(-0.5, -20);
            BeachClasses09_2.crc2.moveTo(-1, -15);
            BeachClasses09_2.crc2.lineTo(-8, -21);
            BeachClasses09_2.crc2.moveTo(-1, -15);
            BeachClasses09_2.crc2.lineTo(8, -18);
            BeachClasses09_2.crc2.lineWidth = 1.5;
            BeachClasses09_2.crc2.stroke();
            BeachClasses09_2.crc2.restore();
        };
        return Surfer;
    }());
    BeachClasses09_2.Surfer = Surfer;
})(BeachClasses09_2 || (BeachClasses09_2 = {}));
//# sourceMappingURL=surfer.js.map