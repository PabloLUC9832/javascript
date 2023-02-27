const h1 = document.querySelector('h1');
const form = document.querySelector('#form');
const input1 = document.querySelector('#calculo1');
const input2 = document.querySelector('#calculo2');
const btn = document.querySelector('#btnCalcular');
const pResult = document.querySelector('#result');

//solo se le pasa el nombre de la funcion

//btn.addEventListener('click',btnOnClick);
form.addEventListener('submit',sumarInputValues);


//function btnOnClick(){
function sumarInputValues(event){
    console.log('Escuchando el evento del click');
    console.log(input1.value + input2.value);
    event.preventDefault();
    const sumaInputs = input1.value + input2.value;
    pResult.innerText = "Resultado: " + sumaInputs;
}
