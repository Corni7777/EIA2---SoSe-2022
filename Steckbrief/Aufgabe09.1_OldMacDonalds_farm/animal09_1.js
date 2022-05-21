var OldMacDonaldsFarm09_1;
(function (OldMacDonaldsFarm09_1) {
    var Animal = /** @class */ (function () {
        function Animal(_name, _breed, _food, _amount, _sound) {
            this.name = _name;
            this.breed = _breed;
            this.food = _food;
            this.amount = _amount;
            this.sound = _sound;
        }
        Animal.prototype.eat = function () {
            document.querySelector("#content").innerHTML += "<b>" + "<br>" + this.name + " the " + this.breed + " eats " + this.amount + " " + this.food + "<br>" + "<b>";
            OldMacDonaldsFarm09_1.silo.splice(0, 1);
        };
        Animal.prototype.sing = function () {
            document.querySelector("#content").innerHTML += "Old MacSilvan had a farm Ee i ee i oh! " + "<br>" +
                "And on that farm he had a " + this.breed + " Ee i ee i oh! " + "<br>" +
                "With a " + this.sound + " " + this.sound + " here " + "<br>" +
                "And a " + this.sound + " " + this.sound + " there " + "<br>" +
                "Here a " + this.sound + " there a " + this.sound + "<br>" +
                "Everywhere a " + this.sound + " " + this.sound + "<br>" +
                "Old MacSilvan had a farm Ee i ee i oh!" + "<br>";
        };
        return Animal;
    }());
    OldMacDonaldsFarm09_1.Animal = Animal;
})(OldMacDonaldsFarm09_1 || (OldMacDonaldsFarm09_1 = {}));
//# sourceMappingURL=animal09_1.js.map