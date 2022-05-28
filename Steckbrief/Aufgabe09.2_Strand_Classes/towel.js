var BeachClasses09_2;
(function (BeachClasses09_2) {
    var Towel = /** @class */ (function () {
        function Towel(_position, _color) {
            this.position = _position;
            this.color = _color;
            this.personRotation = 4.5;
        }
        Towel.prototype.draw = function () {
            BeachClasses09_2.crc2.save();
            BeachClasses09_2.crc2.translate(this.position.x, this.position.y);
            BeachClasses09_2.crc2.fillStyle = this.color;
            BeachClasses09_2.crc2.fillRect(0, 0, 40, 20);
            BeachClasses09_2.crc2.restore();
        };
        return Towel;
    }());
    BeachClasses09_2.Towel = Towel;
})(BeachClasses09_2 || (BeachClasses09_2 = {}));
//# sourceMappingURL=towel.js.map