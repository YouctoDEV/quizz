const nbrpoint = document.getElementById('point');
// Question 1
const reponse1 = document.getElementById('q1');
let btn1 = document.getElementById('btn1');
let btn2 = document.getElementById('btn2');
let btn3 = document.getElementById('btn3');
let point = 0;
// Question 2
const reponse2 = document.getElementById('q2');
let btn4 = document.getElementById('btn4');
let btn5 = document.getElementById('btn5');
let btn6 = document.getElementById('btn6');
//Question 3
const reponse3 = document.getElementById('q3');
let btn7 = document.getElementById('btn7');
let btn8 = document.getElementById('btn8');
let btn9 = document.getElementById('btn9');
//Question 4
const reponse4 = document.getElementById('q4');
let btn10 = document.getElementById('btn10');
let btn11 = document.getElementById('btn11');
let btn12 = document.getElementById('btn12');
//Question 5
const reponse5 = document.getElementById('q5');
let btn13 = document.getElementById('btn13');
let btn14 = document.getElementById('btn14');
let btn15 = document.getElementById('btn15');

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
btn3.addEventListener('click', () => {
    Desactiver1();
    reponse1.classList.add('reponse');
    reponse1.style.background = "red";
    reponse1.style.borderRadius = "8px";
});
function Desactiver1 (){
    btn1.disabled  = true;
    btn2.disabled = true;
    btn3.disabled = true;
}

//Question 2
btn4.addEventListener('click', () => {
    Desactiver2();
    reponse2.classList.add('reponse')
    reponse2.style.background = "red";
    reponse2.style.borderRadius = "8px";
});
btn5.addEventListener('click', () => {
    Desactiver2()
    reponse2.classList.add('reponse');
    reponse2.style.background = "green";
    reponse2.style.borderRadius = "8px";
    point++;
});
btn6.addEventListener('click', () => {
    Desactiver2();
    reponse2.classList.add('reponse')
    reponse2.style.background = "red";
    reponse2.style.borderRadius = "8px";
});
function Desactiver2(){
    btn4.disabled  = true;
    btn5.disabled  = true;
    btn6.disabled  = true;
}

//Question 3
btn7.addEventListener('click', () => {
    Desactiver3();
    reponse3.classList.add('reponse');
    reponse3.style.background = "red";
    reponse3.style.borderRadius = "8px";
});
btn8.addEventListener('click', () => {
    Desactiver3();
    reponse3.classList.add('reponse');
    reponse3.style.background = "green";
    reponse3.style.borderRadius = "8px";
    point++;
});
btn9.addEventListener('click', () => {
    Desactiver3();
    reponse3.classList.add('reponse');
    reponse3.style.background = "red";
    reponse3.style.borderRadius = "8px";
});
function Desactiver3 (){
    btn7.disabled = true;
    btn8.disabled = true;
    btn9.disabled = true;
}

//Question 4
btn10.addEventListener('click', () => {
    Desactiver4();
    reponse4.classList.add('reponse');
    reponse4.style.background = "red";
    reponse4.style.borderRadius = "8px";
});
btn11.addEventListener('click', () => {
    Desactiver4();
    reponse4.classList.add('reponse');
    reponse4.style.background = "green";
    reponse4.style.borderRadius = "8px";
    point++;
});
btn12.addEventListener('click', () => {
    Desactiver4();
    reponse4.classList.add('reponse');
    reponse4.style.background = "red";
    reponse4.style.borderRadius = "8px";
});
function Desactiver4 (){
    btn10.disabled = true;
    btn11.disabled = true;
    btn12.disabled = true;
}

//Question 5
btn13.addEventListener('click', () => {
    Desactiver5();
    reponse5.classList.add('reponse');
    reponse5.style.background = "green";
    reponse5.style.borderRadius = "8px";
    point++;
});
btn14.addEventListener('click', () => {
    Desactiver5();
    reponse5.classList.add('reponse');
    reponse5.style.background = "red";
    reponse5.style.borderRadius = "8px";
});
btn15.addEventListener('click', () => {
    Desactiver5();
    reponse5.classList.add('reponse');
    reponse5.style.background = "red";
    reponse5.style.borderRadius = "8px";
});
function Desactiver5 (){
    btn13.disabled = true;
    btn14.disabled = true;
    btn15.disabled = true;
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




