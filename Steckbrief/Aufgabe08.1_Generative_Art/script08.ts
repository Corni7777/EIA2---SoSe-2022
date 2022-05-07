namespace GenerativeArt08 {
    // Name: Cornelius Schill
    // Matrikelnummer: 269357
    // Datum(erstes Mal hochgeladen): 07.05.2022
    // Zusätzl. Quellen: Silvan
    window.addEventListener("load", hndLoad);

    let canvas: HTMLCanvasElement;
    let crc2: CanvasRenderingContext2D;
    let gradient: CanvasGradient;
    let x1: number;
    let y1: number;
    let x2: number;
    let y2: number;
    let r: number;
    let g: number;
    let b: number;
    let colorStop: number;
    let lineWidth: number;

    function hndLoad(): void {
        document.querySelector("#reload").addEventListener("click", newPainting);
        canvas = document.querySelector("canvas");
        crc2 = canvas.getContext("2d");
        fillBackground();
        lines();
        circles();
    }

    function fillBackground(): void {
        colorStop = 0;
        gradient = crc2.createRadialGradient(450, 225, 0, 450, 225, 600);
        /* gradient = crc2.createLinearGradient(0, 0, 869, 550); */

        for (let i: number = 1; i < 4; i++) {
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

    function lines(): void {

        for (let i: number = 0; i < 300; i++) {
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
    function circles(): void {

        for (let i: number = 0; i < 300; i++) {
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
    function newPainting(): void {
        hndLoad();
    }
}