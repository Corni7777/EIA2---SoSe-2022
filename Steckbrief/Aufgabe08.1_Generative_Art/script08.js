var GenerativeArt08;
(function (GenerativeArt08) {
    window.addEventListener("load", hndLoad);
    var canvas;
    var crc2;
    var gradient;
    var x1;
    var y1;
    var x2;
    var y2;
    var r;
    var g;
    var b;
    var colorStop;
    var lineWidth;
    function hndLoad() {
        document.querySelector("#reload").addEventListener("click", newPainting);
        canvas = document.querySelector("canvas");
        crc2 = canvas.getContext("2d");
        fillBackground();
        lines();
        circles();
    }
    function fillBackground() {
        colorStop = 0;
        gradient = crc2.createRadialGradient(450, 225, 0, 450, 225, 600);
        /* gradient = crc2.createLinearGradient(0, 0, 869, 550); */
        for (var i = 1; i < 4; i++) {
            colorStop = colorStop + 0.25;
            r = Math.floor(Math.random() * 256);
            g = Math.floor(Math.random() * 256);
            b = Math.floor(Math.random() * 256);
            gradient.addColorStop(colorStop, "rgb" + "(" + r + "," + g + "," + b + ")");
            crc2.fillStyle = gradient;
        }
        crc2.lineCap = "round";
        crc2.fillRect(0, 0, 869, 550);
    }
    function lines() {
        for (var i = 0; i < 300; i++) {
            r = Math.floor(Math.random() * 256);
            g = Math.floor(Math.random() * 256);
            b = Math.floor(Math.random() * 256);
            x1 = Math.floor(Math.random() * 869);
            y1 = Math.floor(Math.random() * 530);
            x2 = Math.floor(Math.random() * 869);
            y2 = Math.floor(Math.random() * 530);
            lineWidth = Math.floor(Math.random() * 30);
            crc2.beginPath();
            crc2.moveTo(x1, y1);
            crc2.lineTo(x2, y2);
            crc2.strokeStyle = "rgb" + "(" + r + "," + g + "," + b + ")";
            crc2.lineWidth = lineWidth;
            crc2.closePath();
            crc2.stroke();
        }
    }
    function circles() {
        for (var i = 0; i < 300; i++) {
            r = Math.floor(Math.random() * 256);
            g = Math.floor(Math.random() * 256);
            b = Math.floor(Math.random() * 256);
            x1 = Math.floor(Math.random() * 869);
            y1 = Math.floor(Math.random() * 530);
            x2 = Math.floor(Math.random() * 869);
            y2 = Math.floor(Math.random() * 530);
            lineWidth = Math.floor(Math.random() * 50);
            crc2.beginPath();
            crc2.arc(x1, y1, x2, 0, 0);
            crc2.strokeStyle = "rgb" + "(" + r + "," + g + "," + b + ")";
            crc2.lineWidth = lineWidth;
            crc2.closePath();
            crc2.stroke();
        }
    }
    function newPainting() {
        hndLoad();
    }
})(GenerativeArt08 || (GenerativeArt08 = {}));
//# sourceMappingURL=script08.js.map