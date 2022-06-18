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
    var Palm = /** @class */ (function (_super) {
        __extends(Palm, _super);
        function Palm() {
            return _super !== null && _super.apply(this, arguments) || this;
        }
        Palm.prototype.draw = function () {
            //Stamm
            BeachClasses10_2.crc2.save();
            BeachClasses10_2.crc2.translate(this.position.x, this.position.y);
            BeachClasses10_2.crc2.beginPath();
            BeachClasses10_2.crc2.moveTo(0, 0);
            BeachClasses10_2.crc2.lineTo(6, 0);
            BeachClasses10_2.crc2.lineTo(8, -10);
            BeachClasses10_2.crc2.lineTo(6, -10);
            BeachClasses10_2.crc2.lineTo(8, -18);
            BeachClasses10_2.crc2.lineTo(6, -18);
            BeachClasses10_2.crc2.lineTo(8, -26);
            BeachClasses10_2.crc2.lineTo(6, -26);
            BeachClasses10_2.crc2.lineTo(7, -34);
            BeachClasses10_2.crc2.lineTo(-1, -34);
            BeachClasses10_2.crc2.lineTo(0, -26);
            BeachClasses10_2.crc2.lineTo(-2, -26);
            BeachClasses10_2.crc2.lineTo(0, -18);
            BeachClasses10_2.crc2.lineTo(-2, -18);
            BeachClasses10_2.crc2.lineTo(0, -10);
            BeachClasses10_2.crc2.lineTo(-2, -10);
            BeachClasses10_2.crc2.closePath();
            BeachClasses10_2.crc2.fillStyle = "#CF5616";
            BeachClasses10_2.crc2.fill();
            //Blätter rechts
            BeachClasses10_2.crc2.translate(0, -34);
            BeachClasses10_2.crc2.beginPath();
            BeachClasses10_2.crc2.moveTo(0, 0);
            BeachClasses10_2.crc2.bezierCurveTo(20, -10, 20, 10, 20, 17);
            BeachClasses10_2.crc2.bezierCurveTo(20, 30, 20, 10, 0, 0);
            BeachClasses10_2.crc2.bezierCurveTo(20, -15, 25, -10, 30, 10);
            BeachClasses10_2.crc2.bezierCurveTo(20, -5, -10, 0, 0, 0);
            BeachClasses10_2.crc2.bezierCurveTo(20, -25, 25, -20, 40, -5);
            BeachClasses10_2.crc2.bezierCurveTo(30, -20, -10, 5, 0, 0);
            BeachClasses10_2.crc2.closePath();
            BeachClasses10_2.crc2.fillStyle = "#B58700";
            BeachClasses10_2.crc2.fill();
            //Blätter links
            BeachClasses10_2.crc2.beginPath();
            BeachClasses10_2.crc2.moveTo(0, 0);
            BeachClasses10_2.crc2.translate(6, 0);
            BeachClasses10_2.crc2.scale(-1, 1);
            BeachClasses10_2.crc2.bezierCurveTo(20, -5, 20, 10, 20, 17);
            BeachClasses10_2.crc2.bezierCurveTo(20, 35, 20, 10, 0, 0);
            BeachClasses10_2.crc2.bezierCurveTo(25, -14, 25, -10, 30, 10);
            BeachClasses10_2.crc2.bezierCurveTo(30, -5, -10, 0, 0, 0);
            BeachClasses10_2.crc2.bezierCurveTo(10, -25, 25, -20, 40, -5);
            BeachClasses10_2.crc2.bezierCurveTo(30, -20, -10, 5, 0, 0);
            BeachClasses10_2.crc2.closePath();
            BeachClasses10_2.crc2.fillStyle = "#7C8400";
            BeachClasses10_2.crc2.fill();
            BeachClasses10_2.crc2.restore();
        };
        return Palm;
    }(BeachClasses10_2.Immovable));
    BeachClasses10_2.Palm = Palm;
})(BeachClasses10_2 || (BeachClasses10_2 = {}));
//# sourceMappingURL=palm.js.map