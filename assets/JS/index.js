let parrafo = document.getElementById("texto")
let texto = parrafo.innerHTML

const palabrasAContar = {
sed: 0,
vehicula: 0,
vivamus: 0,
nam: 0,
eros: 0,
vestibulum: 0,
quam: 0,
sollicitudin: 0,
finibus: 0,
dictum: 0,
morbi: 0
}


palabrasAReemplazar = [
    /sed/g,
    /vehicula/g,
    /vivamus/g,
    /nam/g,
    /eros/g,
    /vestibulum/g,
    / quam/g,
    /sollicitudin/g,
    /finibus/g,
    /dictum/g,
    /morbi/g
]

for (let i = 0; i < palabrasAReemplazar.length; i++) {
nuevoTexto = texto.replaceAll(palabrasAReemplazar[i], function (match) {
    palabrasAContar[match.trimStart()]++

    switch (match) {
        case 'sed': return `<b>UNO</b>`;
        case 'vehicula': return `<b>DOS</b>`;
        case 'vivamus': return `<b>TRES </b>`;
        case 'nam': return `<b>CUATRO</b>`;
        case 'eros': return `<b>CINCO</b>`;
        case 'vestibulum': return `<b>SEIS</b>`;
        case ' quam': return `<b> SIETE</b>`;
        case 'sollicitudin': return `<b>OCHO</b>`;
        case 'finibus': return `<b>NUEVE</b>`;
        case 'dictum': return `<b>DIEZ</b>`;
        case 'morbi': return `<b>ONCE</b>`;
    }
})

texto = nuevoTexto
}

parrafo.innerHTML = texto

console.log(`%csed: ${palabrasAContar.sed}`,'color: #FF5500')
console.log(`%cvehicula: ${palabrasAContar.vehicula}`,'color: #FF99B2')
console.log(`%cvivamus: ${palabrasAContar.vivamus}`,'color: #FF99F5')
console.log(`%cnam: ${palabrasAContar.nam}`,'color: #BB99FF')
console.log(`%ceros: ${palabrasAContar.eros}`,'color: #99C5FE')
console.log(`%cvestibulum: ${palabrasAContar.vestibulum}`,'color: #00CEFF')
console.log(`%cquam: ${palabrasAContar.quam}`,'color: #01FFFE')
console.log(`%csollicitudin: ${palabrasAContar.sollicitudin}`,'color: #00FF9F')
console.log(`%cfinibus: ${palabrasAContar.finibus}`,'color: #B6FF01')
console.log(`%cdictum: ${palabrasAContar.dictum}`,'color: #FFFF00')
console.log(`%cmorbi: ${palabrasAContar.morbi}`,'color: #FFB600')
