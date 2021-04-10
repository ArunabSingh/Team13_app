//test stop.
var stars = [false, false, false, false, false];

function addEvoReview() {
    let reviewTitle = document.getElementById('reviewTitleEvo');
    let reviewContent = document.getElementById('reviewContentEvo');
    firebase.firestore().collection('Companies').doc('Evo').collection('Reviews').add({
        title: reviewTitle.value,
        content: reviewContent.value,
        rating: stars
    });
    reviewTitle.value = '';
    reviewContent.value = '';
}

function colorEvo(key, star) {
    for (let index = 0; index <= star; index++) {
        document.getElementById('star' + key + (index)).style.color = "orange";
    }
}

function nocolorEvo(key) {
    for (let index = 0; index <= stars.length; index++) {
        document.getElementById('star' + key + (index)).style.color = "initial";
    }
}

function markEvo(name, writing, key, star) {
    for (let index = 0; index <= star; index++) {
        stars[index] = true
    }
    firebase.firestore().collection('Companies').doc('Evo').collection('Reviews').doc(key).set({
        title: name,
        content: writing,
        rating: stars
    })
    stars = [false, false, false, false, false];
}
(() => {
    firebase.firestore().collection('Companies').doc('Evo').collection('Reviews')
    .onSnapshot(function(querySnapshot) {

        document.getElementById('divRenderEvo').innerHTML = '';
        querySnapshot.forEach(function(doc) {
            console.log(doc.id)
            if (doc.data().rating[0]) {

                document.getElementById('divRenderEvo').innerHTML += `
                <div class="row" id="${doc.id}">
                <div class="col">
                <h5 id="existingTitleInputEvo"> ${doc.data().title}</h5>
                <h6 id="existingDetailsInputEvo">${doc.data().content}</h6>
                <div id="starsR${doc.id}"></div>
                </div>
                
                </div>
                <hr>
                `;
                for (let index = 0; index < doc.data().rating.length; index++) {
                    if (doc.data().rating[index]) {
                        document.getElementById('starsR' + doc.id).innerHTML += `
                            
                            
                            <i style="color:orange" class="fas fa-star"></i>


                            
                            `;
                    } else {
                        document.getElementById('starsR' + doc.id).innerHTML += `
                            
                            <i style="color:initial" class="fas fa-star"></i>


                            `;
                    }
                }
            } else {
                document.getElementById('divRenderEvo').innerHTML += `
                <div class="row" id="${doc.id}">
                    <div class="col">
                    <h5 id="existingTitleInputEvo"> ${doc.data().title}</h5>
                    <h6 id="newDetailsInputEvo">${doc.data().content}</h6>



                            <i onmouseover="colorEvo('${doc.id}','0')" onclick="markEvo('${doc.data().title}','${doc.data().content}','${doc.id}','0')" onmouseleave="nocolorEvo('${doc.id}')" id='${'star'+doc.id+0}' class="fas fa-star"></i>
                            <i onmouseover="colorEvo('${doc.id}','1')" onclick="markEvo('${doc.data().title}','${doc.data().content}','${doc.id}','1')" onmouseleave="nocolorEvo('${doc.id}')" id='${'star'+doc.id+1}' class="fas fa-star"></i>
                            <i onmouseover="colorEvo('${doc.id}','2')" onclick="markEvo('${doc.data().title}','${doc.data().content}','${doc.id}','2')" onmouseleave="nocolorEvo('${doc.id}')" id='${'star'+doc.id+2}' class="fas fa-star"></i>
                            <i onmouseover="colorEvo('${doc.id}','3')" onclick="markEvo('${doc.data().title}','${doc.data().content}','${doc.id}','3')" onmouseleave="nocolorEvo('${doc.id}')" id='${'star'+doc.id+3}' class="fas fa-star"></i>
                            <i onmouseover="colorEvo('${doc.id}','4')" onclick="markEvo('${doc.data().title}','${doc.data().content}','${doc.id}','4')" onmouseleave="nocolorEvo('${doc.id}')" id='${'star'+doc.id+4}' class="fas fa-star"></i> 
                    </div>
                </div>
                </hr>            
                `;
            }
        });

    });



})();