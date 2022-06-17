var BeachClasses10_2;
(function (BeachClasses10_2) {
    /* Name: Cornelius Schill
       Matrikelnummer: 269357
       Datum: 29.05.2022 01:15 Uhr
       Zusätzl. Quellen: keine
    */
    var canvas;
    var palmPos;
    var beachFG;
    var beachBG;
    var palms = [];
    var immovables = [];
    var movables = [];
    window.addEventListener("load", hndLoad);
    function hndLoad() {
        BeachClasses10_2.nullvector = new BeachClasses10_2.Vector(0, 0);
        canvas = document.querySelector("canvas");
        BeachClasses10_2.crc2 = canvas.getContext("2d");
        BeachClasses10_2.horizon = canvas.height * 0.3235;
        beachFG = canvas.width * 0.625;
        beachBG = canvas.width * 0.375;
        createShip();
        createSurfers();
        createPalms(41);
        createTowels();
        createPersons();
        createBirds(5);
        window.setInterval(update, 20);
    }
    function update() {
        drawSky();
        drawSun();
        drawBeach();
        drawWater();
        drawSunlight();
        for (var _i = 0, immovables_1 = immovables; _i < immovables_1.length; _i++) {
            var immovable = immovables_1[_i];
            immovable.draw();
        }
        for (var _a = 0, movables_1 = movables; _a < movables_1.length; _a++) {
            var movable = movables_1[_a];
            movable.move(1 / 50);
            movable.draw();
        }
    }
    function createBirds(_nBirds) {
        for (var i = 0; i < _nBirds; i++) {
            movables.push(new BeachClasses10_2.Bird);
        }
    }
    function createShip() {
        var ship = new BeachClasses10_2.Ship();
        movables.push(ship);
    }
    function createSurfers() {
        var pos3 = new BeachClasses10_2.Vector(440, 240);
        var vel3 = new BeachClasses10_2.Vector(-6, -4);
        movables.push(new BeachClasses10_2.Surfer(pos3, vel3));
        var pos2 = new BeachClasses10_2.Vector(390, 220);
        var vel2 = new BeachClasses10_2.Vector(-9, -7);
        movables.push(new BeachClasses10_2.Surfer(pos2, vel2));
        var pos1 = new BeachClasses10_2.Vector(400, 260);
        var vel1 = new BeachClasses10_2.Vector(-8, -6);
        movables.push(new BeachClasses10_2.Surfer(pos1, vel1));
    }
    function createPalms(_nPalms) {
        for (var i = 0; i < _nPalms; i++) {
            palmPos = new BeachClasses10_2.Vector(Math.random() * 165, (Math.random() * 120) + BeachClasses10_2.horizon);
            immovables.push(new BeachClasses10_2.Palm(palmPos));
        }
    }
    function createTowels() {
        var pos1 = new BeachClasses10_2.Vector(40, 260);
        var color1 = "lightblue";
        immovables.push(new BeachClasses10_2.Towel(pos1, color1));
        var pos2 = new BeachClasses10_2.Vector(120, 280);
        var color2 = "lawngreen";
        immovables.push(new BeachClasses10_2.Towel(pos2, color2));
        var pos3 = new BeachClasses10_2.Vector(60, 300);
        var color3 = "salmon";
        immovables.push(new BeachClasses10_2.Towel(pos3, color3));
    }
    function createPersons() {
        var pos1 = new BeachClasses10_2.Vector(73, 265);
        immovables.push(new BeachClasses10_2.Person(pos1));
        var pos2 = new BeachClasses10_2.Vector(153, 285);
        immovables.push(new BeachClasses10_2.Person(pos2));
        var pos3 = new BeachClasses10_2.Vector(93, 305);
        immovables.push(new BeachClasses10_2.Person(pos3));
    }
    function drawBeach() {
        BeachClasses10_2.crc2.beginPath();
        BeachClasses10_2.crc2.moveTo(beachFG, canvas.height);
        BeachClasses10_2.crc2.bezierCurveTo(50, 200, 200, 110, beachBG, BeachClasses10_2.horizon);
        BeachClasses10_2.crc2.lineTo(0, BeachClasses10_2.horizon);
        BeachClasses10_2.crc2.lineTo(0, canvas.height);
        BeachClasses10_2.crc2.closePath();
        BeachClasses10_2.crc2.fillStyle = "gold";
        BeachClasses10_2.crc2.fill();
    }
    function drawSky() {
        BeachClasses10_2.crc2.beginPath();
        BeachClasses10_2.crc2.moveTo(0, BeachClasses10_2.horizon);
        BeachClasses10_2.crc2.lineTo(canvas.width, BeachClasses10_2.horizon);
        BeachClasses10_2.crc2.lineTo(canvas.width, 0);
        BeachClasses10_2.crc2.lineTo(0, 0);
        BeachClasses10_2.crc2.closePath();
        var gradient = BeachClasses10_2.crc2.createLinearGradient(0, 0, 0, BeachClasses10_2.horizon);
        gradient.addColorStop(0, "blue");
        gradient.addColorStop(1, "lightblue");
        BeachClasses10_2.crc2.fillStyle = gradient;
        BeachClasses10_2.crc2.fill();
    }
    function drawWater() {
        BeachClasses10_2.crc2.beginPath();
        BeachClasses10_2.crc2.moveTo(canvas.width, BeachClasses10_2.horizon);
        BeachClasses10_2.crc2.lineTo(canvas.width, canvas.height);
        BeachClasses10_2.crc2.lineTo(beachFG, canvas.height);
        BeachClasses10_2.crc2.bezierCurveTo(50, 200, 200, 110, beachBG, BeachClasses10_2.horizon);
        BeachClasses10_2.crc2.closePath();
        BeachClasses10_2.crc2.fillStyle = "blue";
        BeachClasses10_2.crc2.fill();
    }
    function drawSun() {
        var position = new BeachClasses10_2.Vector(canvas.width * 0.5, BeachClasses10_2.horizon);
        var r1 = canvas.width * 0.0334;
        var r2 = canvas.width * 0.0669;
        var innerGradient = BeachClasses10_2.crc2.createRadialGradient(0, 0, r1, 0, 0, r2);
        innerGradient.addColorStop(0, "HSL(0, 100%, 50%");
        innerGradient.addColorStop(1, "HSLA(32, 100%, 50%, 0");
        BeachClasses10_2.crc2.save();
        BeachClasses10_2.crc2.translate(position.x, position.y);
        BeachClasses10_2.crc2.fillStyle = innerGradient;
        BeachClasses10_2.crc2.arc(0, 0, r2, 0, Math.PI, true);
        BeachClasses10_2.crc2.fill();
        BeachClasses10_2.crc2.restore();
    }
    function drawSunlight() {
        var position = new BeachClasses10_2.Vector(canvas.width * 0.5, BeachClasses10_2.horizon);
        var r2 = canvas.width * 0.0334;
        var r3 = canvas.width;
        var outerGradient = BeachClasses10_2.crc2.createRadialGradient(0, 0, r2, 0, 0, r3);
        outerGradient.addColorStop(0, "HSLA(32, 100%, 50%, 0.7");
        outerGradient.addColorStop(1, "HSLA(32, 100%, 50%, 0");
        BeachClasses10_2.crc2.save();
        BeachClasses10_2.crc2.translate(position.x, position.y);
        BeachClasses10_2.crc2.arc(0, 0, r3, 0, 2 * Math.PI);
        BeachClasses10_2.crc2.fillStyle = outerGradient;
        BeachClasses10_2.crc2.fill();
        BeachClasses10_2.crc2.restore();
    }
})(BeachClasses10_2 || (BeachClasses10_2 = {}));
//# sourceMappingURL=script10_2.js.map