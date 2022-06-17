namespace BeachClasses10_2 {
    /* Name: Cornelius Schill
       Matrikelnummer: 269357
       Datum: 29.05.2022 01:15 Uhr
       Zusätzl. Quellen: keine
    */

    let canvas: HTMLCanvasElement;
    export let crc2: CanvasRenderingContext2D;
    export let horizon: number;
    export let nullvector: Vector;
    let palmPos: Vector;

    let beachFG: number;
    let beachBG: number;
    let palms: Palm[] = [];


    let immovables: Immovable[] = [];
    let movables: Movable[] = [];

    window.addEventListener("load", hndLoad);
    function hndLoad(): void {
        nullvector = new Vector(0, 0);
        canvas = document.querySelector("canvas");
        crc2 = canvas.getContext("2d");
        horizon = canvas.height * 0.3235;
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
    function update(): void {
        drawSky();
        drawSun();
        drawBeach();
        drawWater();
        drawSunlight();
        for (let immovable of immovables) {
            immovable.draw();
        }

        for (let movable of movables) {
            movable.move(1 / 50);
            movable.draw();
        }

    }
    function createBirds(_nBirds: number): void {
        for (let i: number = 0; i < _nBirds; i++) {
            movables.push(new Bird);
        }
    }
    function createShip(): void {
        let ship: Ship = new Ship();
        movables.push(ship);

    }
    function createSurfers(): void {
        let pos3: Vector = new Vector(440, 240);
        let vel3: Vector = new Vector(-6, -4);
        movables.push(new Surfer(pos3, vel3));
        let pos2: Vector = new Vector(390, 220);
        let vel2: Vector = new Vector(-9, -7);
        movables.push(new Surfer(pos2, vel2));
        let pos1: Vector = new Vector(400, 260);
        let vel1: Vector = new Vector(-8, -6);
        movables.push(new Surfer(pos1, vel1));
    }
    function createPalms(_nPalms: number): void {
        for (let i: number = 0; i < _nPalms; i++) {
            palmPos = new Vector(Math.random() * 165, (Math.random() * 120) + horizon);
            immovables.push(new Palm(palmPos));
        }
    }
    function createTowels(): void {
        let pos1: Vector = new Vector(40, 260);
        let color1: string = "lightblue";
        immovables.push(new Towel(pos1, color1));
        let pos2: Vector = new Vector(120, 280);
        let color2: string = "lawngreen";
        immovables.push(new Towel(pos2, color2));
        let pos3: Vector = new Vector(60, 300);
        let color3: string = "salmon";
        immovables.push(new Towel(pos3, color3));

    }
    function createPersons(): void {
        let pos1: Vector = new Vector(73, 265);
        immovables.push(new Person(pos1));
        let pos2: Vector = new Vector(153, 285);
        immovables.push(new Person(pos2));
        let pos3: Vector = new Vector(93, 305);
        immovables.push(new Person(pos3));
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