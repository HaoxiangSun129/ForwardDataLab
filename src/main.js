function setFormMessage(formElement, type, message){
	const messageElement = formElement.querySelector(".form__message");

	messageElement.textContent = message;
	messageElement.classList.remove("form__message--success", "form__message--error");
	messageElement.classList.add('form__message--${type}');
}

function setInputerror(inputElement, message){
	inputElement.classList.add("form__input--error");
	inputElement.parentElement.querySelector(".form__input-error-message").textContent = message;
}

function clearInputError(inputElement){
	inputElement.classList.remove("form__input--error");
	inputElement.parentElement.querySelector(".form__input-error-message").textContent = "";
}
//setFormMessage(loginForm, "success", "You're logged in!");

document.addEventListener("DOMContentLoaded", ()=>{
	const loginForm = document.querySelector("#login");
	const createAccountForm = document.querySelector("#createAccount");
	const forgotPasswordForm = document.querySelector("#forgotPassword");

	document.querySelector("#linkCreateAccount").addEventListener("click", e=>{
		e.preventDefault();
		loginForm.classList.add("form--hidden");
		createAccountForm.classList.remove("form--hidden");
		forgotPasswordForm.classList.add("form--hidden");
	});

	document.querySelector("#linkLogin").addEventListener("click", e=>{
		e.preventDefault();
		loginForm.classList.remove("form--hidden");
		createAccountForm.classList.add("form--hidden");
		forgotPasswordForm.classList.add("form--hidden");
	});

	document.querySelector("#linkForgotPassword").addEventListener("click", e=>{
		e.preventDefault();
		loginForm.classList.add("form--hidden");
		createAccountForm.classList.add("form--hidden");
		forgotPasswordForm.classList.remove("form--hidden");
		e.preventDefault();
	});

	loginForm.addEventListener("submit", e =>{
		e.preventDefault();
		setFormMessage(loginForm, "error", "OK!!!");
	});


	document.querySelectorAll(".form__input").forEach(inputElement =>{
		inputElement.addEventListener("blur", e =>{
			if(e.target.id == "signupUsername" && e.target.value.length==0){
				setInputerror(inputElement, "Hey! This text should not be blank");
			}
			if(e.target.id == "loginEmail" && e.target.value.length==0){
				setInputerror(inputElement, "Hey! This text should not be blank");
			}
			if(e.target.id == "loginPassword" && e.target.value.length==0){
				setInputerror(inputElement, "Hey! This text should not be blank");
			}
			if(e.target.id == "signupEmail" && e.target.value.length==0){
				setInputerror(inputElement, "Hey! This text should not be blank");
			}
			if(e.target.id == "signupPassword" && e.target.value.length==0){
				setInputerror(inputElement, "Hey! This text should not be blank");
			}
		});

		inputElement.addEventListener("input", e=>{
			clearInputError(inputElement);
		});
	});



});