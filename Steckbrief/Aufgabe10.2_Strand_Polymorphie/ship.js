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
    var Ship = /** @class */ (function (_super) {
        __extends(Ship, _super);
        function Ship() {
            var _this = _super.call(this, BeachClasses10_2.nullvector, BeachClasses10_2.nullvector) || this;
            _this.position = new BeachClasses10_2.Vector(BeachClasses10_2.crc2.canvas.width * 0.76, BeachClasses10_2.horizon);
            _this.velocity = new BeachClasses10_2.Vector(40, 0);
            return _this;
        }
        Ship.prototype.move = function (_timeslice) {
            var offset = new BeachClasses10_2.Vector(this.velocity.x, this.velocity.y);
            offset.scale(_timeslice);
            this.position.add(offset);
            if (this.position.x < BeachClasses10_2.crc2.canvas.width * 0.44) {
                this.velocity.x = this.velocity.x * -1;
            }
            if (this.position.x > BeachClasses10_2.crc2.canvas.width * 0.90) {
                this.velocity.x = this.velocity.x * -1;
            }
        };
        Ship.prototype.draw = function () {
            BeachClasses10_2.crc2.save();
            BeachClasses10_2.crc2.translate(this.position.x, this.position.y);
            if (this.velocity.x > 0) {
                BeachClasses10_2.crc2.scale(-1, 1);
            }
            BeachClasses10_2.crc2.beginPath();
            BeachClasses10_2.crc2.moveTo(-30, 0);
            BeachClasses10_2.crc2.lineTo(-37, -8);
            BeachClasses10_2.crc2.lineTo(4, -8);
            BeachClasses10_2.crc2.lineTo(0, 0);
            BeachClasses10_2.crc2.closePath();
            BeachClasses10_2.crc2.fillStyle = "#965000";
            BeachClasses10_2.crc2.fill();
            //Segel
            BeachClasses10_2.crc2.beginPath();
            BeachClasses10_2.crc2.translate(-15, -23);
            BeachClasses10_2.crc2.moveTo(0, 0);
            BeachClasses10_2.crc2.bezierCurveTo(-5, 0, -15, 10, 0, 13);
            BeachClasses10_2.crc2.strokeStyle = "#FFB662";
            BeachClasses10_2.crc2.lineWidth = 2;
            BeachClasses10_2.crc2.stroke();
            //Mast
            BeachClasses10_2.crc2.beginPath();
            BeachClasses10_2.crc2.translate(0, 15);
            BeachClasses10_2.crc2.moveTo(0, 0);
            BeachClasses10_2.crc2.lineTo(0, -16);
            BeachClasses10_2.crc2.strokeStyle = "#965000";
            BeachClasses10_2.crc2.lineWidth = 1;
            BeachClasses10_2.crc2.stroke();
            BeachClasses10_2.crc2.restore();
        };
        return Ship;
    }(BeachClasses10_2.Movable));
    BeachClasses10_2.Ship = Ship;
})(BeachClasses10_2 || (BeachClasses10_2 = {}));
//# sourceMappingURL=ship.js.map