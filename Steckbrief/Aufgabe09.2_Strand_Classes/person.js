var BeachClasses09_2;
(function (BeachClasses09_2) {
    var Person = /** @class */ (function () {
        function Person(_position) {
            this.position = _position;
            this.rotation = 4.5;
        }
        Person.prototype.draw = function () {
            BeachClasses09_2.crc2.save();
            BeachClasses09_2.crc2.translate(this.position.x, this.position.y);
            BeachClasses09_2.crc2.rotate(this.rotation);
            BeachClasses09_2.crc2.beginPath();
            BeachClasses09_2.crc2.arc(0, -23.5, 4, 0, 2 * Math.PI);
            BeachClasses09_2.crc2.moveTo(-1, -25.5);
            BeachClasses09_2.crc2.lineTo(-0.5, -25.5);
            BeachClasses09_2.crc2.moveTo(2, -25.5);
            BeachClasses09_2.crc2.lineTo(1.5, -25.5);
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
        return Person;
    }());
    BeachClasses09_2.Person = Person;
})(BeachClasses09_2 || (BeachClasses09_2 = {}));
//# sourceMappingURL=person.js.map