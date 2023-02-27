/*
<script>

    console.log('Hola');

</script>
*/
//Leyendo HTML desde JS

//querySelector() -> Accede al elemento mediante la etiqueta html
const h1 = document.querySelector('h1');
const p = document.querySelector('p');
const parrafito = document.querySelector('.parrafito');
const pid = document.querySelector('#pid');
const input = document.querySelector('input');

console.log('h1');

console.log({
    h1,
    p,
    parrafito,
    pid,
    input,
});

h1.innerHTML = 'Patito <br> feo';
p.innerText = 'Patito 2<br> feo';
//leyendo atributos del elemento
console.log(h1.getAttribute('class'));
h1.setAttribute('class','rojo');

h1.classList.add('rojo');
h1.classList.remove('verde');

input.value = "456";

const img = document.createElement('img');
img.setAttribute('src','https://pbs.twimg.com/media/EH6a2ALWwAIZPY_?format=jpg&name=900x900');

pid.append(img);