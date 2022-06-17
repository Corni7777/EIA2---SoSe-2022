var BeachClasses09_2;
(function (BeachClasses09_2) {
    var Boat = /** @class */ (function () {
        function Boat(_postion) {
            this.position = _postion;
        }
        Boat.prototype.draw = function () {
            BeachClasses09_2.crc2.save();
            BeachClasses09_2.crc2.translate(this.position.x, this.position.y);
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
        Boat.prototype.move = function () {
        };
        return Boat;
    }());
    BeachClasses09_2.Boat = Boat;
})(BeachClasses09_2 || (BeachClasses09_2 = {}));
//# sourceMappingURL=boat.js.map