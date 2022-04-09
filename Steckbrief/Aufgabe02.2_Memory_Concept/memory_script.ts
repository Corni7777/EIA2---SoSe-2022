namespace L03_1_memory {

    interface Card {
        value: string;
    }
    let values: string[] = ["1", "2", "3", "4", "5", "6", "7", "8", "9", "10", "11", "12", "13", "14", "15", "16", "17", "18", "19", "20", "21", "22", "23", "24", "25"];
    let turnedCard1: Card[] = [];
    let turnedCard2: Card[] = [];
    let allCards: Card[] = [];

    let wrapper: HTMLDivElement;


    let donecard: Card;
    let card: HTMLDivElement;

    let input: HTMLInputElement;
    let startbutton: HTMLButtonElement;
    let inputvalue: number;




    window.addEventListener("load", handleLoad);

    function handleLoad(): void {
        wrapper = document.querySelector("#wrapper");
        document.querySelector("#button").addEventListener("click", createCards);

    }

    function createCards(_event: MouseEvent): void {

        input = document.querySelector("#input");
        startbutton = document.querySelector("#button");
        parseInt(input.value);
        inputvalue = parseInt(input.value);
        startbutton.remove();
        input.remove();

        for (let index: number = 0; index < 2; index++) {
            for (let i: number = 0; i < inputvalue; i++) {
                card = document.createElement("div");
                card.classList.add("card");
                card.innerHTML = values[i];
                donecard = { value: values[i] };
                allCards.push(donecard);
                
            }
            
        }
      
    }
    function shuffle(): void {
        
        for (let r: number = allCards.length - 1; r > 0; r--) {
            let j: number = Math.floor(Math.random() * (r + 1));
            let temp: Card = allCards[r];
            allCards[r] = allCards[j];
            allCards[j] = temp;

        }
        for (let i: number = 0; i < inputvalue; i++) {
        allCards.push(donecard);
        wrapper.appendChild(card);
        allCards.pop(); }
    }
}

