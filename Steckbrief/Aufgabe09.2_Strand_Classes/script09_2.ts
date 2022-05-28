namespace BeachClasses09_2 {
    /* Name: Cornelius Schill
       Matrikelnummer: 269357
       Datum: 29.05.2022 01:15 Uhr
       Zusätzl. Quellen: keine
    */

    let canvas: HTMLCanvasElement;
    export let crc2: CanvasRenderingContext2D;
    export let horizon: number;
    let beachFG: number;
    let beachBG: number;
    let birds: Bird[] = [];
    let ships: Ship[] = [];
    let surfers: Surfer[] = [];
    let palms: Palm[] = [];
    let towels: Towel[] = [];
    let persons: Person[] = [];

    window.addEventListener("load", hndLoad);
    function hndLoad(): void {
        canvas = document.querySelector("canvas");
        crc2 = canvas.getContext("2d");
        horizon = canvas.height * 0.3235;
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
    function update(): void {
        drawSky();
        drawSun();
        drawBeach();
        drawWater();
        for (let ship of ships) {
            ship.move(1 / 50);
            ship.draw();
        }
        for (let plam of palms) {
            plam.draw();
        }
        drawSunlight();
        for (let surfer of surfers) {
            surfer.move(1 / 50);
            surfer.draw();
        }
        for (let towel of towels) {
            towel.draw();
        }
        for (let person of persons) {
            person.draw();
        }
        for (let bird of birds) {
            bird.move(1 / 50);
            bird.draw();
        }
    }
    function createBirds(_nBirds: number): void {
        for (let i: number = 0; i < _nBirds; i++) {
            let bird: Bird = new Bird;
            birds.push(bird);
        }
    }
    function createShip(): void {
        let ship: Ship = new Ship();
        ships.push(ship);

    }
    function createSurfers(): void {
        let pos1: Vector = new Vector(400, 260);
        let vel1: Vector = new Vector(-8, -6);
        let surfer1: Surfer = new Surfer(pos1, vel1);
        surfers.push(surfer1);
        let pos2: Vector = new Vector(390, 220);
        let vel2: Vector = new Vector(-9, -7);
        let surfer2: Surfer = new Surfer(pos2, vel2);
        surfers.push(surfer2);
        let pos3: Vector = new Vector(440, 240);
        let vel3: Vector = new Vector(-6, -4);
        let surfer3: Surfer = new Surfer(pos3, vel3);
        surfers.push(surfer3);
    }
    function createPalms(_nPalms: number): void {
        for (let i: number = 0; i < _nPalms; i++) {
            let palm: Palm = new Palm;
            palms.push(palm);
        }
    }
    function createTowels(): void {
        let pos1: Vector = new Vector(40, 260);
        let color1: string = "lightblue";
        let towel1: Towel = new Towel(pos1, color1);
        towels.push(towel1);
        let pos2: Vector = new Vector(120, 280);
        let color2: string = "lawngreen";
        let towel2: Towel = new Towel(pos2, color2);
        towels.push(towel2);
        let pos3: Vector = new Vector(60, 300);
        let color3: string = "salmon";
        let towel3: Towel = new Towel(pos3, color3);
        towels.push(towel3);

    }
    function createPersons(): void {
        let pos1: Vector = new Vector(73, 265);
        let person1: Person = new Person(pos1);
        persons.push(person1);
        let pos2: Vector = new Vector(153, 285);
        let person2: Person = new Person(pos2);
        persons.push(person2);
        let pos3: Vector = new Vector(93, 305);
        let person3: Person = new Person(pos3);
        persons.push(person3);
    }
    function drawBeach(): void {
        crc2.beginPath();
        crc2.moveTo(beachFG, canvas.height);
        crc2.bezierCurveTo(50, 200, 200, 110, beachBG, horizon);
        crc2.lineTo(0, horizon);
        crc2.lineTo(0, canvas.height);
        crc2.closePath();
        crc2.fillStyle = "gold";
        crc2.fill();
    }

    function drawSky(): void {
        crc2.beginPath();
        crc2.moveTo(0, horizon);
        crc2.lineTo(canvas.width, horizon);
        crc2.lineTo(canvas.width, 0);
        crc2.lineTo(0, 0);
        crc2.closePath();
        let gradient: CanvasGradient = crc2.createLinearGradient(0, 0, 0, horizon);
        gradient.addColorStop(0, "blue");
        gradient.addColorStop(1, "lightblue");
        crc2.fillStyle = gradient;
        crc2.fill();
    }

    function drawWater(): void {
        crc2.beginPath();
        crc2.moveTo(canvas.width, horizon);
        crc2.lineTo(canvas.width, canvas.height);
        crc2.lineTo(beachFG, canvas.height);
        crc2.bezierCurveTo(50, 200, 200, 110, beachBG, horizon);
        crc2.closePath();
        crc2.fillStyle = "blue";
        crc2.fill();
    }

    function drawSun(): void {
        let position: Vector = new Vector(canvas.width * 0.5, horizon);
        let r1: number = canvas.width * 0.0334;
        let r2: number = canvas.width * 0.0669;
        let innerGradient: CanvasGradient = crc2.createRadialGradient(0, 0, r1, 0, 0, r2);
        innerGradient.addColorStop(0, "HSL(0, 100%, 50%");
        innerGradient.addColorStop(1, "HSLA(32, 100%, 50%, 0");
        crc2.save();
        crc2.translate(position.x, position.y);
        crc2.fillStyle = innerGradient;
        crc2.arc(0, 0, r2, 0, Math.PI, true);
        crc2.fill();
        crc2.restore();
    }

    function drawSunlight(): void {
        let position: Vector = new Vector(canvas.width * 0.5, horizon);
        let r2: number = canvas.width * 0.0334;
        let r3: number = canvas.width;
        let outerGradient: CanvasGradient = crc2.createRadialGradient(0, 0, r2, 0, 0, r3);
        outerGradient.addColorStop(0, "HSLA(32, 100%, 50%, 0.7");
        outerGradient.addColorStop(1, "HSLA(32, 100%, 50%, 0");
        crc2.save();
        crc2.translate(position.x, position.y);
        crc2.arc(0, 0, r3, 0, 2 * Math.PI);
        crc2.fillStyle = outerGradient;
        crc2.fill();
        crc2.restore();

    }
}