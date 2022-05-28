var BeachClasses09_2;
(function (BeachClasses09_2) {
    var Bird = /** @class */ (function () {
        function Bird() {
            this.position = new BeachClasses09_2.Vector(0, 0);
            this.velocity = new BeachClasses09_2.Vector(0, 0);
            this.velocity.random(50, 100);
        }
        Bird.prototype.move = function (_timeslice) {
            var offset = new BeachClasses09_2.Vector(this.velocity.x, this.velocity.y);
            offset.scale(_timeslice);
            this.position.add(offset);
            if (this.position.x < 0) {
                this.position.x += BeachClasses09_2.crc2.canvas.width;
            }
            if (this.position.y < 0) {
                this.position.y += BeachClasses09_2.crc2.canvas.height;
            }
            if (this.position.x > BeachClasses09_2.crc2.canvas.width) {
                this.position.x -= BeachClasses09_2.crc2.canvas.width;
            }
            if (this.position.y > BeachClasses09_2.crc2.canvas.height) {
                this.position.y -= BeachClasses09_2.crc2.canvas.height;
            }
        };
        Bird.prototype.draw = function () {
            BeachClasses09_2.crc2.save();
            BeachClasses09_2.crc2.translate(this.position.x, this.position.y);
            BeachClasses09_2.crc2.beginPath();
            BeachClasses09_2.crc2.moveTo(0, -2);
            BeachClasses09_2.crc2.bezierCurveTo(5, -5, 5, -5, 10, 0);
            BeachClasses09_2.crc2.moveTo(10, 0);
            BeachClasses09_2.crc2.bezierCurveTo(15, -5, 15, -5, 20, -2);
            BeachClasses09_2.crc2.stroke();
            BeachClasses09_2.crc2.restore();
        };
        return Bird;
    }());
    BeachClasses09_2.Bird = Bird;
})(BeachClasses09_2 || (BeachClasses09_2 = {}));
//# sourceMappingURL=bird.js.map