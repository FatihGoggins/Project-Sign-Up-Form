const password = document.querySelector("#password");
const confirmedPassword = document.querySelector("#confirm-password");
const passwordArray = [password, confirmedPassword];
passwordArray.forEach((psw) => {
	psw.addEventListener("input", function (event) {
		if (password.validity.valueMissing === true && confirmedPassword.validity.valueMissing === false) {
			password.setCustomValidity("Please fill out this field");
		} else if (password.validity.valueMissing === false && confirmedPassword.validity.valueMissing === true) {
			confirmedPassword.setCustomValidity("Please fill out this field");
		} else if (password.validity.valueMissing === false && confirmedPassword.validity.valueMissing === false) {
			if (password.value !== confirmedPassword.value) {
				confirmedPassword.setCustomValidity("Password does not match");
			} else {
				password.setCustomValidity("");
				confirmedPassword.setCustomValidity("");
			}
		}
	});
});
