namespace OldMacDonaldsFarm09_1 {
    /* Name: Cornelius Schill
   Matrikelnummer: 269357
   Datum: 21.05.2022
   Zusätzl. Quellen: Zusammenarbeit mit Silvan
*/
    interface FoodStock {
        food: string;
        amount: number;
    }
    export let silo: FoodStock[] = [];
    window.addEventListener("load", hndLoad);
    function hndLoad(): void {

        document.querySelector("#nextDay").addEventListener("click", hndLoad);

        let foodList: string[] = ["Wheat", "Seeds", "Potatos", "Carrots", "Lettuce"];

        document.querySelector("#content").innerHTML = "";
        document.querySelector("#siloContent").innerHTML = "<br>" + "<br>" + "The silo is filled with: " + "<br>" + "<b>";

        for (let i: number = 0; i < 5; i++) {
            let todaysFood: number = getRandomFood(foodList.length - 1);
            let randomFood: FoodStock = { food: foodList[todaysFood], amount: getRandomFood(20) + 1 };
            foodList.splice(todaysFood, 1);
            silo.push(randomFood);
            document.querySelector("#siloContent").innerHTML += silo[i].food + " " + silo[i].amount + "<br>";
        }

        let cow: Animal = new Animal("Jeff", "Cow", silo[0].food, silo[0].amount, "Muuh");
        cow.eat();
        cow.sing();

        let chicken: Animal = new Animal("John", "Chicken", silo[0].food, silo[0].amount, "Bawk");
        chicken.eat();
        chicken.sing();

        let pig: Animal = new Animal("Joe", "Pig", silo[0].food, silo[0].amount, "Oiiink");
        pig.eat();
        pig.sing();

        let donkey: Animal = new Animal("Jeremy", "Donkey", silo[0].food, silo[0].amount, "I-Ahh");
        donkey.eat();
        donkey.sing();

        let rabbit: Animal = new Animal("Johnny", "Rabbit", silo[0].food, silo[0].amount, "Meep");
        rabbit.eat();
        rabbit.sing();
        emtptySilo();
    }
    function getRandomFood(_max: number): number {
        let randomValue: number = Math.floor(Math.random() * _max);
        return randomValue;
    }

    function emtptySilo(): void {

        if (silo.length == 0) {
            document.querySelector("#emptysilo").innerHTML = "<b>" + "The silo is empty. The farmer needs to refill it until the next day!" + "<b>";
        }

    }
}