var BeachClasses09_2;
(function (BeachClasses09_2) {
    /* Name: Cornelius Schill
       Matrikelnummer: 269357
       Datum: 29.05.2022 01:15 Uhr
       Zusätzl. Quellen: keine
    */
    var canvas;
    var beachFG;
    var beachBG;
    var birds = [];
    var ships = [];
    var surfers = [];
    var palms = [];
    var towels = [];
    var persons = [];
    window.addEventListener("load", hndLoad);
    function hndLoad() {
        canvas = document.querySelector("canvas");
        BeachClasses09_2.crc2 = canvas.getContext("2d");
        BeachClasses09_2.horizon = canvas.height * 0.3235;
        beachFG = canvas.width * 0.625;
        beachBG = canvas.width * 0.375;
        createBirds(5);
        createShip();
        createSurfers();
        createPalms(41);
        createTowels();
        createPersons();
        window.setInterval(update, 20);
    }
    function update() {
        drawSky();
        drawSun();
        drawBeach();
        drawWater();
        for (var _i = 0, ships_1 = ships; _i < ships_1.length; _i++) {
            var ship = ships_1[_i];
            ship.move(1 / 50);
            ship.draw();
        }
        for (var _a = 0, palms_1 = palms; _a < palms_1.length; _a++) {
            var plam = palms_1[_a];
            plam.draw();
        }
        drawSunlight();
        for (var _b = 0, surfers_1 = surfers; _b < surfers_1.length; _b++) {
            var surfer = surfers_1[_b];
            surfer.move(1 / 50);
            surfer.draw();
        }
        for (var _c = 0, towels_1 = towels; _c < towels_1.length; _c++) {
            var towel = towels_1[_c];
            towel.draw();
        }
        for (var _d = 0, persons_1 = persons; _d < persons_1.length; _d++) {
            var person = persons_1[_d];
            person.draw();
        }
        for (var _e = 0, birds_1 = birds; _e < birds_1.length; _e++) {
            var bird = birds_1[_e];
            bird.move(1 / 50);
            bird.draw();
        }
    }
    function createBirds(_nBirds) {
        for (var i = 0; i < _nBirds; i++) {
            var bird = new BeachClasses09_2.Bird;
            birds.push(bird);
        }
    }
    function createShip() {
        var ship = new BeachClasses09_2.Ship();
        ships.push(ship);
    }
    function createSurfers() {
        var pos1 = new BeachClasses09_2.Vector(400, 260);
        var vel1 = new BeachClasses09_2.Vector(-8, -6);
        var surfer1 = new BeachClasses09_2.Surfer(pos1, vel1);
        surfers.push(surfer1);
        var pos2 = new BeachClasses09_2.Vector(390, 220);
        var vel2 = new BeachClasses09_2.Vector(-9, -7);
        var surfer2 = new BeachClasses09_2.Surfer(pos2, vel2);
        surfers.push(surfer2);
        var pos3 = new BeachClasses09_2.Vector(440, 240);
        var vel3 = new BeachClasses09_2.Vector(-6, -4);
        var surfer3 = new BeachClasses09_2.Surfer(pos3, vel3);
        surfers.push(surfer3);
    }
    function createPalms(_nPalms) {
        for (var i = 0; i < _nPalms; i++) {
            var palm = new BeachClasses09_2.Palm;
            palms.push(palm);
        }
    }
    function createTowels() {
        var pos1 = new BeachClasses09_2.Vector(40, 260);
        var color1 = "lightblue";
        var towel1 = new BeachClasses09_2.Towel(pos1, color1);
        towels.push(towel1);
        var pos2 = new BeachClasses09_2.Vector(120, 280);
        var color2 = "lawngreen";
        var towel2 = new BeachClasses09_2.Towel(pos2, color2);
        towels.push(towel2);
        var pos3 = new BeachClasses09_2.Vector(60, 300);
        var color3 = "salmon";
        var towel3 = new BeachClasses09_2.Towel(pos3, color3);
        towels.push(towel3);
    }
    function createPersons() {
        var pos1 = new BeachClasses09_2.Vector(73, 265);
        var person1 = new BeachClasses09_2.Person(pos1);
        persons.push(person1);
        var pos2 = new BeachClasses09_2.Vector(153, 285);
        var person2 = new BeachClasses09_2.Person(pos2);
        persons.push(person2);
        var pos3 = new BeachClasses09_2.Vector(93, 305);
        var person3 = new BeachClasses09_2.Person(pos3);
        persons.push(person3);
    }
    function drawBeach() {
        BeachClasses09_2.crc2.beginPath();
        BeachClasses09_2.crc2.moveTo(beachFG, canvas.height);
        BeachClasses09_2.crc2.bezierCurveTo(50, 200, 200, 110, beachBG, BeachClasses09_2.horizon);
        BeachClasses09_2.crc2.lineTo(0, BeachClasses09_2.horizon);
        BeachClasses09_2.crc2.lineTo(0, canvas.height);
        BeachClasses09_2.crc2.closePath();
        BeachClasses09_2.crc2.fillStyle = "gold";
        BeachClasses09_2.crc2.fill();
    }
    function drawSky() {
        BeachClasses09_2.crc2.beginPath();
        BeachClasses09_2.crc2.moveTo(0, BeachClasses09_2.horizon);
        BeachClasses09_2.crc2.lineTo(canvas.width, BeachClasses09_2.horizon);
        BeachClasses09_2.crc2.lineTo(canvas.width, 0);
        BeachClasses09_2.crc2.lineTo(0, 0);
        BeachClasses09_2.crc2.closePath();
        var gradient = BeachClasses09_2.crc2.createLinearGradient(0, 0, 0, BeachClasses09_2.horizon);
        gradient.addColorStop(0, "blue");
        gradient.addColorStop(1, "lightblue");
        BeachClasses09_2.crc2.fillStyle = gradient;
        BeachClasses09_2.crc2.fill();
    }
    function drawWater() {
        BeachClasses09_2.crc2.beginPath();
        BeachClasses09_2.crc2.moveTo(canvas.width, BeachClasses09_2.horizon);
        BeachClasses09_2.crc2.lineTo(canvas.width, canvas.height);
        BeachClasses09_2.crc2.lineTo(beachFG, canvas.height);
        BeachClasses09_2.crc2.bezierCurveTo(50, 200, 200, 110, beachBG, BeachClasses09_2.horizon);
        BeachClasses09_2.crc2.closePath();
        BeachClasses09_2.crc2.fillStyle = "blue";
        BeachClasses09_2.crc2.fill();
    }
    function drawSun() {
        var position = new BeachClasses09_2.Vector(canvas.width * 0.5, BeachClasses09_2.horizon);
        var r1 = canvas.width * 0.0334;
        var r2 = canvas.width * 0.0669;
        var innerGradient = BeachClasses09_2.crc2.createRadialGradient(0, 0, r1, 0, 0, r2);
        innerGradient.addColorStop(0, "HSL(0, 100%, 50%");
        innerGradient.addColorStop(1, "HSLA(32, 100%, 50%, 0");
        BeachClasses09_2.crc2.save();
        BeachClasses09_2.crc2.translate(position.x, position.y);
        BeachClasses09_2.crc2.fillStyle = innerGradient;
        BeachClasses09_2.crc2.arc(0, 0, r2, 0, Math.PI, true);
        BeachClasses09_2.crc2.fill();
        BeachClasses09_2.crc2.restore();
    }
    function drawSunlight() {
        var position = new BeachClasses09_2.Vector(canvas.width * 0.5, BeachClasses09_2.horizon);
        var r2 = canvas.width * 0.0334;
        var r3 = canvas.width;
        var outerGradient = BeachClasses09_2.crc2.createRadialGradient(0, 0, r2, 0, 0, r3);
        outerGradient.addColorStop(0, "HSLA(32, 100%, 50%, 0.7");
        outerGradient.addColorStop(1, "HSLA(32, 100%, 50%, 0");
        BeachClasses09_2.crc2.save();
        BeachClasses09_2.crc2.translate(position.x, position.y);
        BeachClasses09_2.crc2.arc(0, 0, r3, 0, 2 * Math.PI);
        BeachClasses09_2.crc2.fillStyle = outerGradient;
        BeachClasses09_2.crc2.fill();
        BeachClasses09_2.crc2.restore();
    }
    function drawPerson(_position, _rotation) {
        BeachClasses09_2.crc2.save();
        BeachClasses09_2.crc2.translate(_position.x, _position.y);
        BeachClasses09_2.crc2.rotate(_rotation);
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
    }
    BeachClasses09_2.drawPerson = drawPerson;
})(BeachClasses09_2 || (BeachClasses09_2 = {}));
//# sourceMappingURL=script09_2.js.map