 var monstros = [
    {
        id: 1,
        Name: 'Roberto',
        Height: 2.65,
        Skills: 'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Incidunt cupiditate repellendus veritatis modi, laborum maxime velit ut ad voluptate maiores. Necessitatibus, dolorum culpa incidunt enim exercitationem expedita in quibusdam praesentium.',
        Picture: 'https://robohash.org/189.37.78.71.png/roberto',
    },

    {
        id: 2,
        Name: 'Marciano',
        Height: 3.10,
        Skills: 'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Incidunt cupiditate repellendus veritatis modi, laborum maxime velit ut ad voluptate maiores. Necessitatibus, dolorum culpa incidunt enim exercitationem expedita in quibusdam praesentium.',
        Picture: 'https://robohash.org/189.37.78.71.png/marciano',
    },

    {
        id: 3,
        Name: 'Kaleb',
        Height: 2.88,
        Skills: 'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Incidunt cupiditate repellendus veritatis modi, laborum maxime velit ut ad voluptate maiores. Necessitatibus, dolorum culpa incidunt enim exercitationem expedita in quibusdam praesentium.',
        Picture: 'https://robohash.org/189.37.78.71.png/kaleb',
    },

    {
        id: 4,
        Name: 'James',
        Height: 2.42,
        Skills: 'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Incidunt cupiditate repellendus veritatis modi, laborum maxime velit ut ad voluptate maiores. Necessitatibus, dolorum culpa incidunt enim exercitationem expedita in quibusdam praesentium.',
        Picture: 'https://robohash.org/189.37.78.71.png/james',
    },
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