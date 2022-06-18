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
    var Towel = /** @class */ (function (_super) {
        __extends(Towel, _super);
        function Towel(_position, _color) {
            var _this = _super.call(this, _position) || this;
            _this.color = _color;
            return _this;
        }
        Towel.prototype.draw = function () {
            BeachClasses10_2.crc2.save();
            BeachClasses10_2.crc2.translate(this.position.x, this.position.y);
            BeachClasses10_2.crc2.fillStyle = this.color;
            BeachClasses10_2.crc2.fillRect(0, 0, 40, 20);
            BeachClasses10_2.crc2.restore();
        };
        return Towel;
    }(BeachClasses10_2.Immovable));
    BeachClasses10_2.Towel = Towel;
})(BeachClasses10_2 || (BeachClasses10_2 = {}));
//# sourceMappingURL=towel.js.map