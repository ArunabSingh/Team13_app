//test stop.
var stars = [false, false, false, false, false];

function addModoReview() {
    let reviewTitle = document.getElementById('reviewTitleModo');
    let reviewContent = document.getElementById('reviewContentModo');
    firebase.firestore().collection('Companies').doc('Modo').collection('Reviews').add({
        title: reviewTitle.value,
        content: reviewContent.value,
        rating: stars
    });
    reviewTitle.value = '';
    reviewContent.value = '';
}

function colorModo(key, star) {
    for (let index = 0; index <= star; index++) {
        document.getElementById('star' + key + (index)).style.color = "orange";
    }
}

function nocolorModo(key) {
    for (let index = 0; index <= stars.length; index++) {
        document.getElementById('star' + key + (index)).style.color = "initial";
    }
}

function markModo(name, writing, key, star) {
    for (let index = 0; index <= star; index++) {
        stars[index] = true
    }
    firebase.firestore().collection('Companies').doc('Modo').collection('Reviews').doc(key).set({
        title: name,
        content: writing,
        rating: stars
    })
    stars = [false, false, false, false, false];
}
(() => {
    firebase.firestore().collection('Companies').doc('Modo').collection('Reviews')
    .onSnapshot(function(querySnapshot) {

        document.getElementById('divRenderModo').innerHTML = '';
        querySnapshot.forEach(function(doc) {
            console.log(doc.id)
            if (doc.data().rating[0]) {

                document.getElementById('divRenderModo').innerHTML += `
                <div class="row" id="${doc.id}">
                <div class="col">
                <h5 id="existingTitleInputModo"> ${doc.data().title}</h5>
                <h6 id="existingDetailsInputModo">${doc.data().content}</h6>
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
                document.getElementById('divRenderModo').innerHTML += `
                <div class="row" id="${doc.id}">
                    <div class="col">
                    <h5 id="existingTitleInputModo"> ${doc.data().title}</h5>
                    <h6 id="newDetailsInputModo">${doc.data().content}</h6>



                            <i onmouseover="colorModo('${doc.id}','0')" onclick="markModo('${doc.data().title}','${doc.data().content}','${doc.id}','0')" onmouseleave="nocolorModo('${doc.id}')" id='${'star'+doc.id+0}' class="fas fa-star"></i>
                            <i onmouseover="colorModo('${doc.id}','1')" onclick="markModo('${doc.data().title}','${doc.data().content}','${doc.id}','1')" onmouseleave="nocolorModo('${doc.id}')" id='${'star'+doc.id+1}' class="fas fa-star"></i>
                            <i onmouseover="colorModo('${doc.id}','2')" onclick="markModo('${doc.data().title}','${doc.data().content}','${doc.id}','2')" onmouseleave="nocolorModo('${doc.id}')" id='${'star'+doc.id+2}' class="fas fa-star"></i>
                            <i onmouseover="colorModo('${doc.id}','3')" onclick="markModo('${doc.data().title}','${doc.data().content}','${doc.id}','3')" onmouseleave="nocolorModo('${doc.id}')" id='${'star'+doc.id+3}' class="fas fa-star"></i>
                            <i onmouseover="colorModo('${doc.id}','4')" onclick="markModo('${doc.data().title}','${doc.data().content}','${doc.id}','4')" onmouseleave="nocolorModo('${doc.id}')" id='${'star'+doc.id+4}' class="fas fa-star"></i> 
                    </div>
                </div>
                </hr>            
                `;
            }
        });

    });



})();