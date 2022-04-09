var L03_1_memory;
(function (L03_1_memory) {
    var values = ["1", "2", "3", "4", "5", "6", "7", "8", "9", "10", "11", "12", "13", "14", "15", "16", "17", "18", "19", "20", "21", "22", "23", "24", "25"];
    var turnedCard1 = [];
    var turnedCard2 = [];
    var allCards = [];
    var wrapper;
    var donecard;
    var card;
    var input;
    var startbutton;
    var inputvalue;
    window.addEventListener("load", handleLoad);
    function handleLoad() {
        wrapper = document.querySelector("#wrapper");
        document.querySelector("#button").addEventListener("click", createCards);
    }
    function createCards(_event) {
        input = document.querySelector("#input");
        startbutton = document.querySelector("#button");
        parseInt(input.value);
        inputvalue = parseInt(input.value);
        startbutton.remove();
        input.remove();
        for (var index = 0; index < 2; index++) {
            for (var i = 0; i < inputvalue; i++) {
                card = document.createElement("div");
                card.classList.add("card");
                card.innerHTML = values[i];
                donecard = { value: values[i] };
                allCards.push(donecard);
            }
        }
    }
    function shuffle() {
        for (var r = allCards.length - 1; r > 0; r--) {
            var j = Math.floor(Math.random() * (r + 1));
            var temp = allCards[r];
            allCards[r] = allCards[j];
            allCards[j] = temp;
        }
        for (var i = 0; i < inputvalue; i++) {
            allCards.push(donecard);
            wrapper.appendChild(card);
            allCards.pop();
        }
    }
})(L03_1_memory || (L03_1_memory = {}));
//# sourceMappingURL=memory_script.js.map