const cardOutput = document.querySelector('#cardOutput');
const btnGet = document.querySelector('#btnGet');

function getApi() {

    let uri='https://deckofcardsapi.com/api/deck/new/shuffle/?deck_count=1';
    
    fetch( uri )
        .then(res => res.json())
        .then(data => {
            console.log(data);
            console.log(data.deck_id);
            getCard(data.deck_id);
        })
        .catch(err => console.error(err));
}

function getCard(id) {
    let link = 'https://deckofcardsapi.com/api/deck/<<deck_id>>/draw/';
    let uri = link.replace('<<deck_id>>', id)
    
    fetch( uri )
        .then(res => res.json())
        .then(data => {
            console.log(data);
            data.cards.forEach( item => {
                console.log(item.image); 
                showImg(item.image);
                
                //message.innerHTML = `<p>${item.remaining}</p>`
            })
        })
        .catch(err => console.error(err));
}

btnGet.addEventListener('click', getApi);

function showImg(link) {
    document.getElementById('cardOutput').innerHTML = '';
    let img = document.createElement('img');
    img.src = link;
    document.getElementById('cardOutput').appendChild(img);

}
