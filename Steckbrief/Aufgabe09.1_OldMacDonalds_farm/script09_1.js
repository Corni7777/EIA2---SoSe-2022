var OldMacDonaldsFarm09_1;
(function (OldMacDonaldsFarm09_1) {
    OldMacDonaldsFarm09_1.silo = [];
    window.addEventListener("load", hndLoad);
    function hndLoad() {
        document.querySelector("#nextDay").addEventListener("click", hndLoad);
        var foodList = ["Wheat", "Seeds", "Potatos", "Carrots", "Lettuce"];
        document.querySelector("#content").innerHTML = "";
        document.querySelector("#siloContent").innerHTML = "<br>" + "<br>" + "The silo is filled with: " + "<br>" + "<b>";
        for (var i = 0; i < 5; i++) {
            var todaysFood = getRandomFood(foodList.length - 1);
            var randomFood = { food: foodList[todaysFood], amount: getRandomFood(20) + 1 };
            foodList.splice(todaysFood, 1);
            OldMacDonaldsFarm09_1.silo.push(randomFood);
            document.querySelector("#siloContent").innerHTML += OldMacDonaldsFarm09_1.silo[i].food + " " + OldMacDonaldsFarm09_1.silo[i].amount + "<br>";
        }
        var cow = new OldMacDonaldsFarm09_1.Animal("Jeff", "Cow", OldMacDonaldsFarm09_1.silo[0].food, OldMacDonaldsFarm09_1.silo[0].amount, "Muuh");
        cow.eat();
        cow.sing();
        var chicken = new OldMacDonaldsFarm09_1.Animal("John", "Chicken", OldMacDonaldsFarm09_1.silo[0].food, OldMacDonaldsFarm09_1.silo[0].amount, "Bawk");
        chicken.eat();
        chicken.sing();
        var pig = new OldMacDonaldsFarm09_1.Animal("Joe", "Pig", OldMacDonaldsFarm09_1.silo[0].food, OldMacDonaldsFarm09_1.silo[0].amount, "Oiiink");
        pig.eat();
        pig.sing();
        var donkey = new OldMacDonaldsFarm09_1.Animal("Jeremy", "Donkey", OldMacDonaldsFarm09_1.silo[0].food, OldMacDonaldsFarm09_1.silo[0].amount, "I-Ahh");
        donkey.eat();
        donkey.sing();
        var rabbit = new OldMacDonaldsFarm09_1.Animal("Johnny", "Rabbit", OldMacDonaldsFarm09_1.silo[0].food, OldMacDonaldsFarm09_1.silo[0].amount, "Meep");
        rabbit.eat();
        rabbit.sing();
        emtptySilo();
    }
    function getRandomFood(_max) {
        var randomValue = Math.floor(Math.random() * _max);
        return randomValue;
    }
    function emtptySilo() {
        if (OldMacDonaldsFarm09_1.silo.length == 0) {
            document.querySelector("#emptysilo").innerHTML = "<b>" + "The silo is empty. The farmer needs to refill it until the next day!" + "<b>";
        }
    }
})(OldMacDonaldsFarm09_1 || (OldMacDonaldsFarm09_1 = {}));
//# sourceMappingURL=script09_1.js.map