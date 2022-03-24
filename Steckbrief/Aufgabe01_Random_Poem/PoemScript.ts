namespace RandomPoem {
    let subjects: string[] = ["Peter Parker", "Tony Stark", "Anakin Skywalker", "Cal Kestis", "Zelda"];
    let predicates: string[] = ["liebt", "hasst", "spielt Tic Tac Toe mit", "kämpft gegen", "kocht Essen mit"];
    let objects: string[] = ["Waluigi", "Avatar Aang", "Eren Yeager", "Link", "Thanos"];

    for (let index: number = subjects.length; index >= 1; index--) {
        //console.log(index);
        console.log(getVerse(subjects, predicates, objects));
    }
    function getVerse (_subjects: string[], _predicates: string[], _objects: string[] ): string {
        //return "test";
        _subjects = subjects;
        _predicates = predicates;
        _objects = objects;

        let verse: string = "";
        let randomSubject: number = Math.floor(Math.random() * subjects.length);
        let randomPredicate: number = Math.floor(Math.random() * predicates.length);
        let randomObject: number = Math.floor(Math.random() * objects.length);
        //console.log(randomSubject);

        verse = _subjects[randomSubject] + " " + _predicates[randomPredicate] + " " + _objects[randomObject];

        _subjects.splice(randomSubject, 1);
        _predicates.splice(randomPredicate, 1);
        _objects.splice(randomObject, 1);

        return verse;
    }
}