namespace RandomPoem {
    let subjects: string[] = ["Peter Parker", "Tony Stark", "Anakin Skywalker", "Cal Kestis", "Zelda"];
    let predicates: string[] = ["liebt", "hasst", "spielt Tic Tac Toe mit", "kämpft gegen", "kocht Essen mit"];
    let objects: string[] = ["Waluigi", "Avatar Aang", "Eren Yeager", "Link", "Thanos"];

    for (let index: number = subjects.length; index >= 1; index--) {
        //console.log(index);
        console.log(getVerse(subjects, predicates, objects));
    }
    function getVerse (_subjects: string[], _verbs: string[], _objects: string[] ): string {
        //return "test";
        let verse: string = "";
        let randomSubject: number = Math.floor(Math.random() * subjects.length);
        let randomPredicate: number = Math.floor(Math.random() * predicates.length);
        let randomObject: number = Math.floor(Math.random() * objects.length);
        //console.log(randomSubject);

        verse = subjects[randomSubject] + " " + predicates[randomPredicate] + " " + objects[randomObject];

        subjects.splice(randomSubject, 1);
        predicates.splice(randomPredicate, 1);
        objects.splice(randomObject, 1);

        return verse;
    }
}