const input = document.getElementById('#input');
const btnGet = document.querySelector('#btnGet');

const getApi = () => {
    fetch('https://www.swapi.tech/api/people/?name=chewbacca')
        .then(res => res.json())
        .then(data => console.log(data))
        .catch(err => console.error(err));
}

// fetch('https://www.swapi.tech/api/people/?name=chewbacca')

const getName = () => {
    let name = document.getElementById('input').value
    if (name === '') return;
    else {
        let uri= `https://www.swapi.tech/api/people/?name=${name}`;
        fetch( uri , {
            method: 'GET',
            headers: {
                'Accept': 'application/json'
            }
        })
        .then(res =>{
            if(res.ok)
             return res.json();
             throw new Error('Failed to download data');
        })
        .then(data => {
            console.log(data);
            let output = '';

            data.result.forEach(item => {
                output = `Height: ${item.properties.height} Mass: ${item.properties.mass} Gender: ${item.properties.gender} Hair Color: ${item.properties.hair_color}`
            })
            document.getElementById('textArea').value = output;
        })
        .catch(err => console.log('Error: ' + err));
    }
}

btnGet.addEventListener('click', getName);

