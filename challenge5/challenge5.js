let lineOne = document.querySelector('.lineOne');
let lineTwo = document.querySelector('.lineTwo');
let addition = document.querySelector('.addition');
let subtraction = document.querySelector('.subtraction');
let multiply = document.querySelector('.multiplication');
let division = document.querySelector('.division');
let mod = document.querySelector('.modulus');
let form = document.querySelector('form');
let results = document.querySelector('ul');

addition.addEventListener('click', add)
subtraction.addEventListener('click', sub)
multiply.addEventListener('click', multi)
division.addEventListener('click', divi)
mod.addEventListener('click', modu)

function add(e){
    e.preventDefault();
    let p = document.createElement('p')
    p.innerText = Number(lineOne.value)+Number(lineTwo.value)
    results.appendChild(p)
}

function sub(e){
    e.preventDefault();
    let p = document.createElement('p')
    p.innerText = Number(lineOne.value)-Number(lineTwo.value);
    results.appendChild(p)
}

function multi(e){
    e.preventDefault();
    let p = document.createElement('p')
    p.innerText = Number(lineOne.value)*Number(lineTwo.value)
    results.appendChild(p)

}

function divi(e){
    e.preventDefault();
    let p = document.createElement('p')
    p.innerText = Number(lineOne.value)/Number(lineTwo.value)
    results.appendChild(p)
}

function modu(e){
    e.preventDefault();
    let p = document.createElement('p')
    p.innerText = Number(lineOne.value)%Number(lineTwo.value)
    results.appendChild(p)
}





















// function calculator(e){
//     e.preventDefault();

//     if(addition){
//         lineOne.value+lineTwo.value
//     } else if(subtraction){
//         lineOne.value-lineTwo.value
//     } else if(multiply){
//         lineOne.value * LineTwo.value
//     } else if(division){
//         lineOne.value / lineTwo.value
//     } else if(mod){
//         lineOne.value % lineTwo.value
//     }
// }



