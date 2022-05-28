var BeachClasses09_2;
(function (BeachClasses09_2) {
    var Ship = /** @class */ (function () {
        function Ship() {
            this.position = new BeachClasses09_2.Vector(BeachClasses09_2.crc2.canvas.width * 0.76, BeachClasses09_2.horizon);
            this.velocity = new BeachClasses09_2.Vector(40, 0);
        }
        Ship.prototype.move = function (_timeslice) {
            var offset = new BeachClasses09_2.Vector(this.velocity.x, this.velocity.y);
            offset.scale(_timeslice);
            this.position.add(offset);
            if (this.position.x < BeachClasses09_2.crc2.canvas.width * 0.44) {
                this.velocity.x = this.velocity.x * -1;
            }
            if (this.position.x > BeachClasses09_2.crc2.canvas.width * 0.90) {
                this.velocity.x = this.velocity.x * -1;
            }
        };
        Ship.prototype.draw = function () {
            BeachClasses09_2.crc2.save();
            BeachClasses09_2.crc2.translate(this.position.x, this.position.y);
            if (this.velocity.x > 0) {
                BeachClasses09_2.crc2.scale(-1, 1);
            }
            BeachClasses09_2.crc2.beginPath();
            BeachClasses09_2.crc2.moveTo(-30, 0);
            BeachClasses09_2.crc2.lineTo(-37, -8);
            BeachClasses09_2.crc2.lineTo(4, -8);
            BeachClasses09_2.crc2.lineTo(0, 0);
            BeachClasses09_2.crc2.closePath();
            BeachClasses09_2.crc2.fillStyle = "black";
            BeachClasses09_2.crc2.fill();
            //Segel
            BeachClasses09_2.crc2.beginPath();
            BeachClasses09_2.crc2.translate(-15, -23);
            BeachClasses09_2.crc2.moveTo(0, 0);
            BeachClasses09_2.crc2.bezierCurveTo(-5, 0, -15, 10, 0, 13);
            BeachClasses09_2.crc2.strokeStyle = "white";
            BeachClasses09_2.crc2.lineWidth = 2;
            BeachClasses09_2.crc2.stroke();
            //Mast
            BeachClasses09_2.crc2.beginPath();
            BeachClasses09_2.crc2.translate(0, 15);
            BeachClasses09_2.crc2.moveTo(0, 0);
            BeachClasses09_2.crc2.lineTo(0, -16);
            BeachClasses09_2.crc2.strokeStyle = "black";
            BeachClasses09_2.crc2.lineWidth = 1;
            BeachClasses09_2.crc2.stroke();
            BeachClasses09_2.crc2.restore();
        };
        return Ship;
    }());
    BeachClasses09_2.Ship = Ship;
})(BeachClasses09_2 || (BeachClasses09_2 = {}));
//# sourceMappingURL=ship.js.map