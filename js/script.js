const pfields = document.querySelectorAll('.pfields');          //Password Fields
const passConf = document.getElementById("confirmPassword");

const reqDiv = document.getElementById('message');          //Messages
const confirmDiv = document.getElementById('mismatchMessage');

const letter = document.getElementById("letter");           //Password Requirements
const capital = document.getElementById("capital");
const number = document.getElementById("number");
const plength = document.getElementById("length");
const match = document.getElementById("match");

function requirements() {           //Show or hide password requirements

    if (this.id == 'password') {
        if (reqDiv.className == 'show') {
            reqDiv.setAttribute('class','hidden');
        } else {
            reqDiv.setAttribute('class','show');                       
        };
    };

    if (this.id == 'confirmPassword') {
        if (confirmDiv.className == 'show') {
            confirmDiv.setAttribute('class','hidden');
        } else {
            confirmDiv.setAttribute('class','show');
        };
    };
};

function verifyPassword() {         //Show when specific password requirements are met
    let pass = document.getElementById('password').value;
    let conf = passConf.value;
    const lowCase = /^.*[a-z]/;
    const upCase = /^.*[A-Z]/;
    const numCase = /^.*\d/;

    if(pass.match(lowCase)) {
        letter.setAttribute('class','valid');
    }   else {
        letter.setAttribute('class','invalid');
    }
    
    if(pass.match(upCase)) {
        capital.setAttribute('class','valid');
    }   else {
        capital.setAttribute('class','invalid');
    }

    if(pass.match(numCase)) {
        number.setAttribute('class','valid');
    }   else {
        number.setAttribute('class','invalid');
    }
    
    if (pass.length>7) {
        plength.setAttribute('class','valid');
    }   else {
        plength.setAttribute('class','invalid');
    }

    if(conf == pass) {
        passConf.setAttribute('style','border-color: rgb(170,226,170)');
        match.setAttribute('class','valid');
    }   else {
        passConf.removeAttribute('style');
        match.setAttribute('class','invalid');
    } 
 }

pfields.forEach(field => field.addEventListener('focus', requirements));
pfields.forEach(field => field.addEventListener('blur', requirements));
pfields.forEach(field => field.addEventListener('keyup', verifyPassword));