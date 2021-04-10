//test stop.
var stars = [false, false, false, false, false];

function addLyftReview() {
    let reviewTitle = document.getElementById('reviewTitleLyft');
    let reviewContent = document.getElementById('reviewContentLyft');
    firebase.firestore().collection('Companies').doc('Lyft').collection('Reviews').add({
        title: reviewTitle.value,
        content: reviewContent.value,
        rating: stars
    });
    reviewTitle.value = '';
    reviewContent.value = '';
}

function colorLyft(key, star) {
    for (let index = 0; index <= star; index++) {
        document.getElementById('star' + key + (index)).style.color = "orange";
    }
}

function nocolorLyft(key) {
    for (let index = 0; index <= stars.length; index++) {
        document.getElementById('star' + key + (index)).style.color = "initial";
    }
}

function markLyft(name, writing, key, star) {
    for (let index = 0; index <= star; index++) {
        stars[index] = true
    }
    firebase.firestore().collection('Companies').doc('Lyft').collection('Reviews').doc(key).set({
        title: name,
        content: writing,
        rating: stars
    })
    stars = [false, false, false, false, false];
}
(() => {
    firebase.firestore().collection('Companies').doc('Lyft').collection('Reviews')
    .onSnapshot(function(querySnapshot) {

        document.getElementById('divRenderLyft').innerHTML = '';
        querySnapshot.forEach(function(doc) {
            console.log(doc.id)
            if (doc.data().rating[0]) {

                document.getElementById('divRenderLyft').innerHTML += `
                <div class="row" id="${doc.id}">
                <div class="col">
                <h5 id="existingTitleInputLyft"> ${doc.data().title}</h5>
                <h6 id="existingDetailsInputLyft">${doc.data().content}</h6>
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
                document.getElementById('divRenderLyft').innerHTML += `
                <div class="row" id="${doc.id}">
                    <div class="col">
                    <h5 id="existingTitleInputLyft"> ${doc.data().title}</h5>
                    <h6 id="newDetailsInputLyft">${doc.data().content}</h6>



                            <i onmouseover="colorLyft('${doc.id}','0')" onclick="markLyft('${doc.data().title}','${doc.data().content}','${doc.id}','0')" onmouseleave="nocolorLyft('${doc.id}')" id='${'star'+doc.id+0}' class="fas fa-star"></i>
                            <i onmouseover="colorLyft('${doc.id}','1')" onclick="markLyft('${doc.data().title}','${doc.data().content}','${doc.id}','1')" onmouseleave="nocolorLyft('${doc.id}')" id='${'star'+doc.id+1}' class="fas fa-star"></i>
                            <i onmouseover="colorLyft('${doc.id}','2')" onclick="markLyft('${doc.data().title}','${doc.data().content}','${doc.id}','2')" onmouseleave="nocolorLyft('${doc.id}')" id='${'star'+doc.id+2}' class="fas fa-star"></i>
                            <i onmouseover="colorLyft('${doc.id}','3')" onclick="markLyft('${doc.data().title}','${doc.data().content}','${doc.id}','3')" onmouseleave="nocolorLyft('${doc.id}')" id='${'star'+doc.id+3}' class="fas fa-star"></i>
                            <i onmouseover="colorLyft('${doc.id}','4')" onclick="markLyft('${doc.data().title}','${doc.data().content}','${doc.id}','4')" onmouseleave="nocolorLyft('${doc.id}')" id='${'star'+doc.id+4}' class="fas fa-star"></i> 
                    </div>
                </div>
                </hr>            
                `;
            }
        });

    });



})();