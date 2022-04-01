namespace EventInspector02_1 {

    window.addEventListener("load", handleLoad);

    function handleLoad(): void {
        let div0: HTMLDivElement = document.querySelector("#div0");
        let div1: HTMLDivElement = document.querySelector("#div1");
        div0.addEventListener("click", logInfo);
        div0.addEventListener("keyup", logInfo);
        div1.addEventListener("click", logInfo);
        div1.addEventListener("keyup", logInfo);

        document.addEventListener("mousemove", setInfoBox);
        document.addEventListener("click", logInfo);
        document.addEventListener("keyup", logInfo);
        document.body.addEventListener("click", logInfo);
        document.body.addEventListener("keyup", logInfo);

    }

    function setInfoBox(_event: MouseEvent): void {
        let mouseinfo: HTMLSpanElement = document.querySelector("#mouseinfo");
        let positionX: number = _event.clientX;
        let positionY: number = _event.clientY;

        mouseinfo.style.left = (positionX + 20) + "px";
        mouseinfo.style.top = (positionY + 20) + "px";
        mouseinfo.innerHTML = "Position X: " + positionX + "<br>" + "Position Y: " + positionY + "<br>" + _event.target;
    }

    function logInfo(_event: Event): void {
        console.log("type: ", _event.type);
        console.log("target: ", _event.target);
        console.log("Current target: ", _event.currentTarget);
        console.log("Whole event: ", _event);
    }

}