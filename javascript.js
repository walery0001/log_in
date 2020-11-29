const formula = document.getElementById('formular');
const name = document.getElementById('Name');
const email = document.getElementById('Email');
const password = document.getElementById('Password');
const confirmP = document.getElementById('Bestätigung');
//wrong style 
function emptyInput(myInput,myText){
let parentMyinput = myInput.parentElement
parentMyinput.className = 'contLabel falsch';
let idInput = myInput.id;
let small = parentMyinput.querySelector('small');
small.innerText = idInput +' '+ myText;
}
//and positive
function completedInput(myInput){
	let parentMyinput = myInput.parentElement
	parentMyinput.className = 'contLabel korekt';
		}
//check length
function lengthName(name, min,max){
if(name.value.length < min){
	emptyInput(name, `muss mehr als ${min} Zeichen haben`)
}else if(name.value.length > max){
	emptyInput(name, `muss weniger als ${max} Zeichen haben`)
}else{
	completedInput(name)
}
} // }else if(!email_unkorrekt(email.value)){
//check email
function validateEmail(email) {
    const re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return re.test(String(email).toLowerCase());
}
function checkEmail(email){
	if(email.value === ''){
		emptyInput(email,'eingeben')
	}
	else if(!email.value === validateEmail(email.value)){
		emptyInput(email,'ist unkorrekt')
	}else{
		completedInput(email)
	}
}
//check password 
function validatePassword(password) {
   let rege = /^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#\$%\^&\*])(?=.{8,})/;
	return rege.test(password)	
   	}
function checkPassword(password){
	if(password.value === ''){
		emptyInput(password, 'eingeben')
	}
	else if(!password.value === validatePassword(password.value)){
		emptyInput(password, 'erfordert Groß-, Klein- buchstaben,eine Zahl, ein Sonderzeichen')
	}else{
		completedInput(password)
	}
}
//check pass 1 to pass 2
function passwordSame(password, confirmP){
	if(password.value === ''){
		emptyInput(password, 'eingeben')
	}
	else if(password.value !== confirmP.value){
		emptyInput(confirmP, 'ojej')
		
	}else{
		completedInput(confirmP)
	}
}
//check each inpur epmty or not
function checkAllInput(arra){
	arra.forEach(function(myInput){

if(myInput.value === ""){
		emptyInput(myInput,"eingeben");
}else{
	completedInput(myInput)
}
	})
}
formula.addEventListener('submit',e =>{
	e.preventDefault();
	checkAllInput([name,email,password,confirmP]);
	lengthName(name,3,13);
	checkEmail(email);
	checkPassword(password);
	passwordSame(password,confirmP);
		})

/* get all input and container
const formular = document.getElementById('formular');
const name = document.getElementById('name');
const email = document.getElementById('email');
const password = document.getElementById('password');
const confirmP = document.getElementById('confirmP');

//falsch function
function showFalsch(a,b){
const contLabels = a.parentElement;
contLabels.className = 'contLabel falsch'

const small = contLabels.querySelector('small');
small.innerText = b;
}

//korekt function
function showKorekt(c){
const contLabels = c.parentElement;
contLabels.className = 'contLabel korekt'
}

//email check
function email_unkorrekt(et){
	const re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return re.test(String(et).toLowerCase());
}
//confirm check
function confirm_check(feld1,feld2){
	if(feld1.value !== feld2.value){
		showFalsch(feld2, 'nicht korekt');
	}
}
//check all felds input
function checkAllInput(arr){
	arr.forEach(function(feld){
if(feld.value === '' ){
	showFalsch(feld, `${makeGros(feld)} benötigt`);
}else{
	showKorekt(feld)
}
	});
}
//feld input gross
function makeGros(d){
return d.id.charAt(0).toUpperCase() + d.id.slice(1);
}
//check length 
function check_length(text,mini,maxi){
	if(text.value.length < mini){
		showFalsch(text,`${makeGros(text)} muss grösser als ${mini} sein`);
	}else if(text.value.length > maxi){
		showFalsch(text,`${makeGros(text)} muss weniger als ${maxi} sein`);
	}else{showKorekt(text)}
}
//send button
formular.addEventListener('submit', function(e){
	e.preventDefault();

checkAllInput([name, email, password, confirmP]);

check_length(name,3,15);
check_length(password,6,19);
confirm_check(password,confirmP)
// //name feld input	
// if(name.value === '') {
// 	showFalsch(name, 'Feld deine Name')
// }else{
// 	showKorekt(name)
// }
// //email feld input	
// if(email.value === '') {
// 	showFalsch(email, 'Feld deine email')
// }else if(!email_unkorrekt(email.value)){
// 	showFalsch(email, 'email ist nicht korrekt ')
// }
// else{
// 	showKorekt(email)
// }
// //password feld input
// if(password.value === '') {
// 	showFalsch(password, 'Feld ein sicherheitscode');
// }
// else{
// 	showKorekt(password)
// }
// // bestätigen feld input
// if(confirmP.value === '') {
// 	showFalsch(confirmP, 'Feld deine Überprüfungscode')
// }else{
// 	showKorekt(confirmP)
// }
});
*/
//'muss mindestens 8 Zeichen umfassen, aus kleinen, grossen Buchstaben, Zahl und Sonderzeichen'