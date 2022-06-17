var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var BeachClasses10_2;
(function (BeachClasses10_2) {
    var Person = /** @class */ (function (_super) {
        __extends(Person, _super);
        function Person(_position) {
            var _this = _super.call(this, BeachClasses10_2.nullvector) || this;
            _this.position = _position;
            _this.rotation = 4.5;
            return _this;
        }
        Person.prototype.draw = function () {
            BeachClasses10_2.crc2.save();
            BeachClasses10_2.crc2.translate(this.position.x, this.position.y);
            BeachClasses10_2.crc2.rotate(this.rotation);
            BeachClasses10_2.crc2.beginPath();
            BeachClasses10_2.crc2.arc(0, -23.5, 4, 0, 2 * Math.PI);
            BeachClasses10_2.crc2.moveTo(-1, -25.5);
            BeachClasses10_2.crc2.lineTo(-0.5, -25.5);
            BeachClasses10_2.crc2.moveTo(2, -25.5);
            BeachClasses10_2.crc2.lineTo(1.5, -25.5);
            BeachClasses10_2.crc2.closePath();
            BeachClasses10_2.crc2.lineWidth = 0.6;
            BeachClasses10_2.crc2.stroke();
            BeachClasses10_2.crc2.beginPath();
            BeachClasses10_2.crc2.arc(-0, -23.5, 2, 0, Math.PI);
            BeachClasses10_2.crc2.lineWidth = 0.7;
            BeachClasses10_2.crc2.stroke();
            BeachClasses10_2.crc2.beginPath();
            BeachClasses10_2.crc2.moveTo(0, 0);
            BeachClasses10_2.crc2.lineTo(-1.5, -10);
            BeachClasses10_2.crc2.lineTo(-9, -6);
            BeachClasses10_2.crc2.moveTo(-1.5, -10);
            BeachClasses10_2.crc2.lineTo(-0.5, -20);
            BeachClasses10_2.crc2.moveTo(-1, -15);
            BeachClasses10_2.crc2.lineTo(-8, -21);
            BeachClasses10_2.crc2.moveTo(-1, -15);
            BeachClasses10_2.crc2.lineTo(8, -18);
            BeachClasses10_2.crc2.lineWidth = 1.5;
            BeachClasses10_2.crc2.stroke();
            BeachClasses10_2.crc2.restore();
        };
        return Person;
    }(BeachClasses10_2.Immovable));
    BeachClasses10_2.Person = Person;
})(BeachClasses10_2 || (BeachClasses10_2 = {}));
//# sourceMappingURL=person.js.map