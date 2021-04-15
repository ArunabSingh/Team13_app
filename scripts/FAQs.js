function displayQuestions() {
    db.collection("FAQs").get()
        .then(function (snap) {
            snap.forEach(function (doc) {
                let question = doc.data().Question;
                console.log(question);
                let ID = doc.data().ID;
                console.log(ID);
                document.getElementById(ID).innerText = question;
            })

        })
}
displayQuestions();

function displayAnswers() {
    db.collection("FAQsAnswers").get()
        .then(function (snap) {
            snap.forEach(function (doc) {
                let answer = doc.data().Answer;
                console.log(answer);
                let ID = doc.data().ID;
                console.log(ID);
                document.getElementById(ID).innerText = answer;
            })

        })
}
displayAnswers();