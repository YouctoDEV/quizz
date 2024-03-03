const nbrpoint = document.getElementById('point');
// Question 1
const reponse1 = document.getElementById('q1');
let btn1 = document.getElementById('btn1');
let btn2 = document.getElementById('btn2');
let point = 0;
// Question 2
const reponse2 = document.getElementById('q2');
let btn3 = document.getElementById('btn3');
let btn4 = document.getElementById('btn4');
//Question 3
const reponse3 = document.getElementById('q3');
let btn5 = document.getElementById('btn5');
let btn6 = document.getElementById('btn6');
//Question 4
let btn7 = document.getElementById('btn7');
let btn8 = document.getElementById('btn8');
const reponse4 = document.getElementById('q4');

//Nombre de point en temps réel
setInterval(() => {
    nbrpoint.innerHTML = `${point}`;
    nbrpoint.classList.add('style-point');
});

//Question 1
btn1.addEventListener('click', () => {
    // Désactive tous les boutons après le clic
    Desactiver1();
    reponse1.classList.add('reponse');
    reponse1.style.background = "green";
    reponse1.style.borderRadius = "8px";
    point++;
});
btn2.addEventListener('click', () => {
    Desactiver1();
    reponse1.classList.add('reponse');
    reponse1.style.background = "red";
    reponse1.style.borderRadius = "8px";
});
function Desactiver1 (){
    btn2.disabled = true;
    btn1.disabled  = true;
}

//Question 2
btn3.addEventListener('click', () => {
    Desactiver2();
    reponse2.classList.add('reponse')
    reponse2.style.background = "red";
    reponse2.style.borderRadius = "8px";
});
btn4.addEventListener('click', () => {
    Desactiver2()
    reponse2.classList.add('reponse');
    reponse2.style.background = "green";
    reponse2.style.borderRadius = "8px";
    point++;
});
function Desactiver2(){
    btn4.disabled  = true;
    btn3.disabled  = true;
}

//Question 3
btn5.addEventListener('click', () => {
    Desactiver3();
    reponse3.classList.add('reponse');
    reponse3.style.background = "red";
    reponse3.style.borderRadius = "8px";
});
btn6.addEventListener('click', () => {
    Desactiver3();
    reponse3.classList.add('reponse');
    reponse3.style.background = "green";
    reponse3.style.borderRadius = "8px";
    point++;
})
function Desactiver3 (){
    btn5.disabled = true;
    btn6.disabled = true;
}

//Question 4
btn7.addEventListener('click', () => {
    Desactiver4();
    reponse4.classList.add('reponse');
    reponse4.style.background = "red";
    reponse4.style.borderRadius = "8px";
});
btn8.addEventListener('click', () => {
    Desactiver4();
    reponse4.classList.add('reponse');
    reponse4.style.background = "green";
    reponse4.style.borderRadius = "8px";
    point++;
});
function Desactiver4 (){
    btn7.disabled = true;
    btn8.disabled = true;
}

//Boutton Valider
const valider = document.getElementById('valider');
valider.addEventListener('click', () => {
    let name = prompt('Veuillez saisir votre nom');
    let nom = document.getElementById('nom');
    nom.textContent = name;
    // console.log(name);
    if(name === null) {
        alert('Vous n\'aviez pas choisi de nom');
    }
});

//Resultat
let scoretext = document.getElementById('scoretext');
let score = document.getElementById('score');
valider.addEventListener('click', () => {
    score.style.visibility = "visible";
    scoretext.textContent = point;
});




