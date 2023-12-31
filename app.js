
let form = document.querySelector("form");
let firstName = document.getElementById("first-name");
let lastName = document.getElementById("last-name");
let message = document.getElementById("message");
let commentList = document.getElementById("comment-list");
let errorMessage = document.getElementById("error-message");


//Create new comment
function createComment() {

	//Create new element
	let newDiv1 = document.createElement("div");
	let newDiv2 = document.createElement("div");
	let newDiv3 = document.createElement("div");
	let newH3 = document.createElement("h3");
	let newP = document.createElement("p");

	//Get values
	newTextH3 = document.createTextNode(firstName.value + " " + lastName.value);
	newTextP = document.createTextNode(message.value);

	//Organisation new elements
	newDiv1.appendChild(newDiv2);
	newDiv2.appendChild(newH3);
	newDiv2.appendChild(newDiv3);
	newDiv3.appendChild(newP);
	newH3.appendChild(newTextH3);
	newP.appendChild(newTextP);

	//Get CSS class

	newDiv1.classList.add("flex");
	newDiv1.classList.add("space-x-4");
	newDiv1.classList.add("text-sm");
	newDiv1.classList.add("text-gray-500");

	newDiv2.classList.add("flex-1");
	newDiv2.classList.add("py-10");
	newDiv2.classList.add("border-t");
	newDiv2.classList.add("border-gray-200");

	newDiv3.classList.add("prose");
	newDiv3.classList.add("prose-sm");
	newDiv3.classList.add("mt-4");
	newDiv3.classList.add("max-w-none");
	newDiv3.classList.add("text-gray-500");

	newH3.classList.add("font-medium");
	newH3.classList.add("text-gray-900");

	//Send comment
	commentList.appendChild(newDiv1);

	//Reset form
	form.reset();
}

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
