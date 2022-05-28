var BeachClasses09_2;
(function (BeachClasses09_2) {
    var Palm = /** @class */ (function () {
        function Palm() {
            this.x = Math.random() * 165;
            this.y = (Math.random() * 120) + BeachClasses09_2.horizon;
        }
        Palm.prototype.draw = function () {
            //Stamm
            BeachClasses09_2.crc2.save();
            BeachClasses09_2.crc2.translate(this.x, this.y);
            BeachClasses09_2.crc2.beginPath();
            BeachClasses09_2.crc2.moveTo(0, 0);
            BeachClasses09_2.crc2.lineTo(6, 0);
            BeachClasses09_2.crc2.lineTo(8, -10);
            BeachClasses09_2.crc2.lineTo(6, -10);
            BeachClasses09_2.crc2.lineTo(8, -18);
            BeachClasses09_2.crc2.lineTo(6, -18);
            BeachClasses09_2.crc2.lineTo(8, -26);
            BeachClasses09_2.crc2.lineTo(6, -26);
            BeachClasses09_2.crc2.lineTo(7, -34);
            BeachClasses09_2.crc2.lineTo(-1, -34);
            BeachClasses09_2.crc2.lineTo(0, -26);
            BeachClasses09_2.crc2.lineTo(-2, -26);
            BeachClasses09_2.crc2.lineTo(0, -18);
            BeachClasses09_2.crc2.lineTo(-2, -18);
            BeachClasses09_2.crc2.lineTo(0, -10);
            BeachClasses09_2.crc2.lineTo(-2, -10);
            BeachClasses09_2.crc2.closePath();
            BeachClasses09_2.crc2.fillStyle = "brown";
            BeachClasses09_2.crc2.fill();
            //Blätter rechts
            BeachClasses09_2.crc2.translate(0, -34);
            BeachClasses09_2.crc2.beginPath();
            BeachClasses09_2.crc2.moveTo(0, 0);
            BeachClasses09_2.crc2.bezierCurveTo(20, -10, 20, 10, 20, 17);
            BeachClasses09_2.crc2.bezierCurveTo(20, 30, 20, 10, 0, 0);
            BeachClasses09_2.crc2.bezierCurveTo(20, -15, 25, -10, 30, 10);
            BeachClasses09_2.crc2.bezierCurveTo(20, -5, -10, 0, 0, 0);
            BeachClasses09_2.crc2.bezierCurveTo(20, -25, 25, -20, 40, -5);
            BeachClasses09_2.crc2.bezierCurveTo(30, -20, -10, 5, 0, 0);
            BeachClasses09_2.crc2.closePath();
            BeachClasses09_2.crc2.fillStyle = "#6E8600";
            BeachClasses09_2.crc2.fill();
            //Blätter links
            BeachClasses09_2.crc2.beginPath();
            BeachClasses09_2.crc2.moveTo(0, 0);
            BeachClasses09_2.crc2.translate(6, 0);
            BeachClasses09_2.crc2.scale(-1, 1);
            BeachClasses09_2.crc2.bezierCurveTo(20, -5, 20, 10, 20, 17);
            BeachClasses09_2.crc2.bezierCurveTo(20, 35, 20, 10, 0, 0);
            BeachClasses09_2.crc2.bezierCurveTo(25, -14, 25, -10, 30, 10);
            BeachClasses09_2.crc2.bezierCurveTo(30, -5, -10, 0, 0, 0);
            BeachClasses09_2.crc2.bezierCurveTo(10, -25, 25, -20, 40, -5);
            BeachClasses09_2.crc2.bezierCurveTo(30, -20, -10, 5, 0, 0);
            BeachClasses09_2.crc2.closePath();
            BeachClasses09_2.crc2.fillStyle = "green";
            BeachClasses09_2.crc2.fill();
            BeachClasses09_2.crc2.restore();
        };
        return Palm;
    }());
    BeachClasses09_2.Palm = Palm;
})(BeachClasses09_2 || (BeachClasses09_2 = {}));
//# sourceMappingURL=palm.js.map