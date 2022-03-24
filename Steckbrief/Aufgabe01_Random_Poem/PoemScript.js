var RandomPoem;
(function (RandomPoem) {
    var subjects = ["Peter Parker", "Tony Stark", "Anakin Skywalker", "Cal Kestis", "Zelda"];
    var predicates = ["liebt", "hasst", "spielt Tic Tac Toe mit", "kämpft gegen", "kocht Essen mit"];
    var objects = ["Waluigi", "Avatar Aang", "Eren Yeager", "Link", "Thanos"];
    for (var index = subjects.length; index >= 1; index--) {
        //console.log(index);
        console.log(getVerse(subjects, predicates, objects));
    }
    function getVerse(_subjects, _predicates, _objects) {
        //return "test";
        _subjects = subjects;
        _predicates = predicates;
        _objects = objects;
        var verse = "";
        var randomSubject = Math.floor(Math.random() * subjects.length);
        var randomPredicate = Math.floor(Math.random() * predicates.length);
        var randomObject = Math.floor(Math.random() * objects.length);
        //console.log(randomSubject);
        verse = _subjects[randomSubject] + " " + _predicates[randomPredicate] + " " + _objects[randomObject];
        _subjects.splice(randomSubject, 1);
        _predicates.splice(randomPredicate, 1);
        _objects.splice(randomObject, 1);
        return verse;
    }
})(RandomPoem || (RandomPoem = {}));
//# sourceMappingURL=PoemScript.js.map