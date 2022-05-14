var BeachCanvas08_2;
(function (BeachCanvas08_2) {
    /* Name: Cornelius Schill
       Matrikelnummer: 269357
       Datum: 14.05.2022
       Zusätzl. Quellen: keine
    */
    var canvas;
    var crc2;
    var horizon;
    var beachFG;
    var beachBG;
    window.addEventListener("load", hndLoad);
    function hndLoad() {
        canvas = document.querySelector("canvas");
        crc2 = canvas.getContext("2d");
        horizon = canvas.height * 0.3235;
        beachFG = canvas.width * 0.625;
        beachBG = canvas.width * 0.375;
        drawSky();
        drawSun({ x: canvas.width * 0.5, y: horizon });
        drawWater();
        drawShip({ x: canvas.width * 0.83, y: horizon });
        drawBeach();
        drawPalms({ x: 165, y: 120 });
        drawSunlight({ x: canvas.width * 0.5, y: horizon });
        // Ich hatte erst überlegt die Surfer, Urlauber und Vögel mit for-Schleifen random 
        // anzuordnen,aber sie haben sich dabei manchmal überlappt, deshalb habe die Positionen
        // lieber "stumpf" festgelegt und die Funktionen mehrmals gecalled. 
        drawSurfboard({ x: 380, y: 260 });
        drawSurfboard({ x: 390, y: 220 });
        drawSurfboard({ x: 440, y: 250 });
        drawTowels({ x: 40, y: 260 }, "lightblue");
        drawTowels({ x: 120, y: 280 }, "lawngreen");
        drawTowels({ x: 60, y: 300 }, "salmon");
        drawBirds({ x: 440, y: 80 });
        drawBirds({ x: 420, y: 69 });
        drawBirds({ x: 410, y: 90 });
    }
    function drawBeach() {
        crc2.beginPath();
        crc2.moveTo(beachFG, canvas.height);
        crc2.bezierCurveTo(50, 200, 200, 110, beachBG, horizon);
        crc2.lineTo(0, horizon);
        crc2.lineTo(0, canvas.height);
        crc2.closePath();
        crc2.fillStyle = "gold";
        crc2.fill();
    }
    function drawSky() {
        crc2.beginPath();
        crc2.moveTo(0, horizon);
        crc2.lineTo(canvas.width, horizon);
        crc2.lineTo(canvas.width, 0);
        crc2.lineTo(0, 0);
        crc2.closePath();
        var gradient = crc2.createLinearGradient(0, 0, 0, horizon);
        gradient.addColorStop(0, "blue");
        gradient.addColorStop(1, "lightblue");
        crc2.fillStyle = gradient;
        crc2.fill();
    }
    function drawWater() {
        crc2.beginPath();
        crc2.moveTo(canvas.width, horizon);
        crc2.lineTo(canvas.width, canvas.height);
        crc2.lineTo(beachFG, canvas.height);
        crc2.bezierCurveTo(50, 200, 200, 110, beachBG, horizon);
        crc2.closePath();
        crc2.fillStyle = "blue";
        crc2.fill();
    }
    function drawSun(_position) {
        var r1 = canvas.width * 0.0334;
        var r2 = canvas.width * 0.0669;
        var innerGradient = crc2.createRadialGradient(0, 0, r1, 0, 0, r2);
        innerGradient.addColorStop(0, "HSL(0, 100%, 50%");
        innerGradient.addColorStop(1, "HSLA(32, 100%, 50%, 0");
        crc2.save();
        crc2.translate(_position.x, _position.y);
        crc2.fillStyle = innerGradient;
        crc2.arc(0, 0, r2, 0, Math.PI, true);
        crc2.fill();
        crc2.restore();
    }
    function drawSunlight(_position) {
        var r2 = canvas.width * 0.0334;
        var r3 = canvas.width;
        var outerGradient = crc2.createRadialGradient(0, 0, r2, 0, 0, r3);
        outerGradient.addColorStop(0, "HSLA(32, 100%, 50%, 0.7");
        outerGradient.addColorStop(1, "HSLA(32, 100%, 50%, 0");
        crc2.save();
        crc2.translate(_position.x, _position.y);
        crc2.arc(0, 0, r3, 0, 2 * Math.PI);
        crc2.fillStyle = outerGradient;
        crc2.fill();
        crc2.restore();
    }
    function drawPalms(_position) {
        var nPlams = 42;
        for (var i = 0; i < nPlams; i++) {
            var x = Math.random() * _position.x;
            var y = (Math.random() * _position.y) + horizon;
            //Stamm
            crc2.save();
            crc2.translate(x, y);
            crc2.beginPath();
            crc2.moveTo(0, 0);
            crc2.lineTo(6, 0);
            crc2.lineTo(8, -10);
            crc2.lineTo(6, -10);
            crc2.lineTo(8, -18);
            crc2.lineTo(6, -18);
            crc2.lineTo(8, -26);
            crc2.lineTo(6, -26);
            crc2.lineTo(7, -34);
            crc2.lineTo(-1, -34);
            crc2.lineTo(0, -26);
            crc2.lineTo(-2, -26);
            crc2.lineTo(0, -18);
            crc2.lineTo(-2, -18);
            crc2.lineTo(0, -10);
            crc2.lineTo(-2, -10);
            crc2.closePath();
            crc2.fillStyle = "brown";
            crc2.fill();
            //Blätter rechts
            crc2.translate(0, -34);
            crc2.beginPath();
            crc2.moveTo(0, 0);
            crc2.bezierCurveTo(20, -10, 20, 10, 20, 17);
            crc2.bezierCurveTo(20, 30, 20, 10, 0, 0);
            crc2.bezierCurveTo(20, -15, 25, -10, 30, 10);
            crc2.bezierCurveTo(20, -5, -10, 0, 0, 0);
            crc2.bezierCurveTo(20, -25, 25, -20, 40, -5);
            crc2.bezierCurveTo(30, -20, -10, 5, 0, 0);
            crc2.closePath();
            crc2.fillStyle = "#6E8600";
            crc2.fill();
            //Blätter links
            crc2.beginPath();
            crc2.moveTo(0, 0);
            crc2.translate(6, 0);
            crc2.scale(-1, 1);
            crc2.bezierCurveTo(20, -5, 20, 10, 20, 17);
            crc2.bezierCurveTo(20, 35, 20, 10, 0, 0);
            crc2.bezierCurveTo(25, -14, 25, -10, 30, 10);
            crc2.bezierCurveTo(30, -5, -10, 0, 0, 0);
            crc2.bezierCurveTo(10, -25, 25, -20, 40, -5);
            crc2.bezierCurveTo(30, -20, -10, 5, 0, 0);
            crc2.closePath();
            if (i == 41) {
                crc2.fillStyle = "#6E8600";
            }
            else {
                crc2.fillStyle = "green";
            }
            crc2.fill();
            crc2.restore();
        }
    }
    function drawSurfboard(_position) {
        crc2.save();
        crc2.translate(_position.x, _position.y);
        crc2.beginPath();
        crc2.moveTo(0, 0);
        crc2.bezierCurveTo(-10, 0, -25, -10, -20, -20);
        crc2.bezierCurveTo(-10, -20, 0, -10, 0, 0);
        crc2.closePath();
        crc2.fillStyle = "white";
        crc2.fill();
        // Ich könnte ich auch die Funktion drawPerson aufrufen aber das hat 
        // beim ausprobieren nicht richtig funktioniert.
        crc2.beginPath();
        crc2.translate(-6, -6);
        crc2.arc(0.5, -23.5, 4, 0, 2 * Math.PI);
        crc2.moveTo(-1, -25.5);
        crc2.lineTo(-0.5, -25.5);
        crc2.moveTo(2, -24.7);
        crc2.lineTo(1.5, -24.7);
        crc2.closePath();
        // crc2.fillStyle = "#FFAAA5";
        // crc2.fill();
        crc2.lineWidth = 0.6;
        crc2.stroke();
        crc2.beginPath();
        crc2.arc(-0, -23.5, 2, 0, Math.PI);
        crc2.lineWidth = 0.7;
        crc2.stroke();
        crc2.beginPath();
        crc2.moveTo(0, 0);
        crc2.lineTo(-1.5, -10);
        crc2.lineTo(-9, -6);
        crc2.moveTo(-1.5, -10);
        crc2.lineTo(-0.5, -20);
        crc2.moveTo(-1, -15);
        crc2.lineTo(-8, -21);
        crc2.moveTo(-1, -15);
        crc2.lineTo(8, -18);
        crc2.lineWidth = 1.5;
        crc2.stroke();
        crc2.restore();
    }
    function drawTowels(_position, _color) {
        crc2.save();
        crc2.translate(_position.x, _position.y);
        crc2.fillStyle = _color;
        crc2.fillRect(0, 0, 40, 20);
        crc2.restore();
        drawPerson({ x: _position.x + 33, y: _position.y + 5 }, 4.5);
    }
    function drawPerson(_position, _rotation) {
        crc2.save();
        crc2.translate(_position.x, _position.y);
        crc2.rotate(_rotation);
        crc2.beginPath();
        crc2.arc(0, -23.5, 4, 0, 2 * Math.PI);
        crc2.moveTo(-1, -25.5);
        crc2.lineTo(-0.5, -25.5);
        crc2.moveTo(2, -25.5);
        crc2.lineTo(1.5, -25.5);
        crc2.closePath();
        // crc2.fillStyle = "#FFAAA5";
        // crc2.fill();
        crc2.lineWidth = 0.6;
        crc2.stroke();
        crc2.beginPath();
        crc2.arc(-0, -23.5, 2, 0, Math.PI);
        crc2.lineWidth = 0.7;
        crc2.stroke();
        crc2.beginPath();
        crc2.moveTo(0, 0);
        crc2.lineTo(-1.5, -10);
        crc2.lineTo(-9, -6);
        crc2.moveTo(-1.5, -10);
        crc2.lineTo(-0.5, -20);
        crc2.moveTo(-1, -15);
        crc2.lineTo(-8, -21);
        crc2.moveTo(-1, -15);
        crc2.lineTo(8, -18);
        crc2.lineWidth = 1.5;
        crc2.stroke();
        crc2.restore();
    }
    function drawShip(_position) {
        //Rumpf
        crc2.save();
        crc2.translate(_position.x, _position.y);
        crc2.beginPath();
        crc2.moveTo(-30, 0);
        crc2.lineTo(-37, -8);
        crc2.lineTo(4, -8);
        crc2.lineTo(0, 0);
        crc2.closePath();
        crc2.fillStyle = "black";
        crc2.fill();
        //Segel
        crc2.beginPath();
        crc2.translate(-15, -23);
        crc2.moveTo(0, 0);
        crc2.bezierCurveTo(-5, 0, -15, 10, 0, 13);
        crc2.strokeStyle = "white";
        crc2.lineWidth = 2;
        crc2.stroke();
        //Mast
        crc2.beginPath();
        crc2.translate(0, 15);
        crc2.moveTo(0, 0);
        crc2.lineTo(0, -16);
        crc2.strokeStyle = "black";
        crc2.lineWidth = 1;
        crc2.stroke();
        crc2.restore();
    }
    function drawBirds(_position) {
        crc2.save();
        crc2.translate(_position.x, _position.y);
        crc2.beginPath();
        crc2.moveTo(0, -2);
        crc2.bezierCurveTo(5, -5, 5, -5, 10, 0);
        crc2.moveTo(10, 0);
        crc2.bezierCurveTo(15, -5, 15, -5, 20, -2);
        crc2.stroke();
        crc2.restore();
    }
})(BeachCanvas08_2 || (BeachCanvas08_2 = {}));
//# sourceMappingURL=script08_2.js.map