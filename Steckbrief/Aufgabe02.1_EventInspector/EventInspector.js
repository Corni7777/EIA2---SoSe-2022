var EventInspector02_1;
(function (EventInspector02_1) {
    window.addEventListener("load", handleLoad);
    function handleLoad() {
        var div0 = document.querySelector("#div0");
        var div1 = document.querySelector("#div1");
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
    function setInfoBox(_event) {
        var mouseinfo = document.querySelector("#mouseinfo");
        var positionX = _event.clientX;
        var positionY = _event.clientY;
        mouseinfo.style.left = (positionX + 20) + "px";
        mouseinfo.style.top = (positionY + 20) + "px";
        mouseinfo.innerHTML = "Position X: " + positionX + "<br>" + "Position Y: " + positionY + "<br>" + _event.target;
    }
    function logInfo(_event) {
        console.log("type: ", _event.type);
        console.log("target: ", _event.target);
        console.log("Current target: ", _event.currentTarget);
        console.log("Whole event: ", _event);
    }
})(EventInspector02_1 || (EventInspector02_1 = {}));
//# sourceMappingURL=EventInspector.js.map