const dictionary = async () => {
    let data = await fetch ('https://random-word-api.herokuapp.com/word?number=9000&length=5')
    let json = await data.json();
    console.log(json.length)
}

dictionary()

const getWord = async ()=> {
    let data = await fetch ('https://random-word-api.herokuapp.com/word?length=5')
    let json = await data.json()
    console.log(json)
}

getWord()

//under her begynner koden
let grid = document.getElementById('grid')
let riktigord = ''
let antallforsok = 0;
const maxforsok = 6

    for (let i = 0; i < 30; i++) {
        let item = document.createElement('div');
        item.className = 'grid-item';
        grid.appendChild(item);
    }

const genererord = async () => {
    let data = await fetch ('https://random-word-api.herokuapp.com/word?length=5')
    let json = await data.json()
    riktigord = json[0].toUpperCase();
    console.log("Ordet å gjette er", riktigord) //bare for test, skal fjernes når spillet er ferdig
}

const startSpill = async () => {
    await genererord()
    antallforsok = 0;
    document.getElementById('melding').innerText
    document.getElementById('brukerInnput').value
    document.querySelectorAll('.grid-item').forEach(item => {
        item.innerText=''
        item.className='grid-item'
    })
}

const skjekkOrd = (gjett) =>{
    let resultat = []
    let ordArray = riktigord.split('')

}
const gjettOrd = () => {
    const gjett = document.getElementById('brukerInnput').value.toUpperCase()
    
    
}