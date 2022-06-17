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
    var Surfer = /** @class */ (function (_super) {
        __extends(Surfer, _super);
        function Surfer() {
            return _super !== null && _super.apply(this, arguments) || this;
        }
        Surfer.prototype.move = function (_timeslice) {
            var offset = new BeachClasses10_2.Vector(this.velocity.x, this.velocity.y);
            offset.scale(_timeslice);
            this.position.add(offset);
            if (this.position.x < BeachClasses10_2.crc2.canvas.width * 0.4 || this.position.y < BeachClasses10_2.horizon + 50) {
                this.velocity.x = this.velocity.x * -1;
                this.velocity.y = this.velocity.y * -1;
            }
            if (this.position.x > BeachClasses10_2.crc2.canvas.width * 0.85 || this.position.y > BeachClasses10_2.crc2.canvas.height - 20) {
                this.velocity.x = this.velocity.x * -1;
                this.velocity.y = this.velocity.y * -1;
            }
        };
        Surfer.prototype.draw = function () {
            BeachClasses10_2.crc2.save();
            BeachClasses10_2.crc2.translate(this.position.x, this.position.y);
            BeachClasses10_2.crc2.beginPath();
            BeachClasses10_2.crc2.moveTo(0, 0);
            BeachClasses10_2.crc2.bezierCurveTo(-10, 0, -25, -10, -20, -20);
            BeachClasses10_2.crc2.bezierCurveTo(-10, -20, 0, -10, 0, 0);
            BeachClasses10_2.crc2.closePath();
            BeachClasses10_2.crc2.fillStyle = "white";
            BeachClasses10_2.crc2.fill();
            // Ich könnte ich auch die Funktion drawPerson aufrufen aber das hat 
            // beim ausprobieren nicht richtig funktioniert.
            BeachClasses10_2.crc2.beginPath();
            BeachClasses10_2.crc2.translate(-6, -6);
            BeachClasses10_2.crc2.arc(0.5, -23.5, 4, 0, 2 * Math.PI);
            BeachClasses10_2.crc2.moveTo(-1, -25.5);
            BeachClasses10_2.crc2.lineTo(-0.5, -25.5);
            BeachClasses10_2.crc2.moveTo(2, -24.7);
            BeachClasses10_2.crc2.lineTo(1.5, -24.7);
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
        return Surfer;
    }(BeachClasses10_2.Movable));
    BeachClasses10_2.Surfer = Surfer;
})(BeachClasses10_2 || (BeachClasses10_2 = {}));
//# sourceMappingURL=surfer.js.map