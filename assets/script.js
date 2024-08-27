 var monstros = [
    {
        id: 1,
        Name: 'Greenzord ⚙️',
        Height: 2.65,
        Skills: 'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Neque, amet quis commodi cupiditate architecto eligendi culpa harum! Suscipit, aspernatur alias qui porro dolore nam ipsum quas minima, laudantium sed eos?',
        Picture: 'https://robohash.org/189.37.78.71.png/roberto',
    },

    {
        id: 2,
        Name: 'Maracujino ⚙️',
        Height: 3.10,
        Skills: 'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Neque, amet quis commodi cupiditate architecto eligendi culpa harum! Suscipit, aspernatur alias qui porro dolore nam ipsum quas minima, laudantium sed eos?',
        Picture: 'https://robohash.org/189.37.78.71.png/marciano',
    },

    {
        id: 3,
        Name: 'Tomatz ⚙️',
        Height: 2.88,
        Skills: 'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Neque, amet quis commodi cupiditate architecto eligendi culpa harum! Suscipit, aspernatur alias qui porro dolore nam ipsum quas minima, laudantium sed eos?',
        Picture: 'https://robohash.org/189.37.78.71.png/kaleb',
    },

    {
        id: 4,
        Name: 'Silvestro ⚙️',
        Height: 2.42,
        Skills: 'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Neque, amet quis commodi cupiditate architecto eligendi culpa harum! Suscipit, aspernatur alias qui porro dolore nam ipsum quas minima, laudantium sed eos?',
        Picture: 'https://robohash.org/189.37.78.71.png/james',
    }
]

var section = document.getElementById('monstros')
var botao = document.querySelector('.btn')

botao.addEventListener('click', () => {
    document.documentElement.classList.toggle('dark')
})

var todososmonstros = monstros.map((monstro) => {
    return `<div>
    <p>Nome: ${monstro.Name}</p>
    <p>Altura: ${monstro.Height}</p>
    <img src="${monstro.Picture}">
    <p class="habilidades">Skills: ${monstro.Skills}</p>
    </div>`
})

section.innerHTML = todososmonstros