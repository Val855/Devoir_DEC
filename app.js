//Show error message
function showError() {
	errorMessage.style.display = "block";
}
//Hide error message
function hideError() {
	errorMessage.style.display = "none";
}


form.addEventListener("submit", (event) => {
	//Error if empty first name
	if (firstName.value === "") {
		showError();
	}

	//Error if empty last name
	if (lastName.value === "") {
		showError();
	}

	//Error if empty message
	if (message.value === "") {
		showError();
	}

	//Else call function
	else {
		createComment();
		hideError();
	}

	event.preventDefault();
});