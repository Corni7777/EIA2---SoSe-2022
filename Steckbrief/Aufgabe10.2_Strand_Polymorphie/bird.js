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
    var Bird = /** @class */ (function (_super) {
        __extends(Bird, _super);
        function Bird() {
            var _this = _super.call(this, BeachClasses10_2.nullvector, BeachClasses10_2.nullvector) || this;
            _this.position = new BeachClasses10_2.Vector(0, 0);
            _this.velocity = new BeachClasses10_2.Vector(0, 0);
            _this.velocity.random(50, 100);
            return _this;
        }
        Bird.prototype.move = function (_timeslice) {
            var offset = new BeachClasses10_2.Vector(this.velocity.x, this.velocity.y);
            offset.scale(_timeslice);
            this.position.add(offset);
            if (this.position.x < 0) {
                this.position.x += BeachClasses10_2.crc2.canvas.width;
            }
            if (this.position.y < 0) {
                this.position.y += BeachClasses10_2.crc2.canvas.height;
            }
            if (this.position.x > BeachClasses10_2.crc2.canvas.width) {
                this.position.x -= BeachClasses10_2.crc2.canvas.width;
            }
            if (this.position.y > BeachClasses10_2.crc2.canvas.height) {
                this.position.y -= BeachClasses10_2.crc2.canvas.height;
            }
        };
        Bird.prototype.draw = function () {
            BeachClasses10_2.crc2.save();
            BeachClasses10_2.crc2.translate(this.position.x, this.position.y);
            BeachClasses10_2.crc2.beginPath();
            BeachClasses10_2.crc2.moveTo(0, -2);
            BeachClasses10_2.crc2.bezierCurveTo(5, -5, 5, -5, 10, 0);
            BeachClasses10_2.crc2.moveTo(10, 0);
            BeachClasses10_2.crc2.bezierCurveTo(15, -5, 15, -5, 20, -2);
            BeachClasses10_2.crc2.stroke();
            BeachClasses10_2.crc2.restore();
        };
        return Bird;
    }(BeachClasses10_2.Movable));
    BeachClasses10_2.Bird = Bird;
})(BeachClasses10_2 || (BeachClasses10_2 = {}));
//# sourceMappingURL=bird.js.map