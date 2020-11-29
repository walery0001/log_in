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
		emptyInput(password, 'erfordert Groß, Klein buchstaben, Zahl, Sonderzeichen')
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
		emptyInput(confirmP, 'stimmen nicht überein')
		
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

