var link = document.querySelector(".write-us");

var popup = document.querySelector(".modal-feedback");
var close = popup.querySelector(".modal-close");

var form = popup.querySelector("form");
var fullname = popup.querySelector("[name=fullname]");
var email = popup.querySelector("[name=email]");
var comment = popup.querySelector("[name=comment]");

var isStorageSupport = true;
var storage ="";

try {
	storage = localStorage.getItem("email");
} catch (err) {
	isStorageSupport = false;
}

link.addEventListener("click", function (evt) 
{
	evt.preventDefault();
	popup.classList.add("modal-show");

	if (storage) {
		email.value = storage;
		comment.focus();
	} else {
		fullname.focus();
	}
});

close.addEventListener("click", function (evt) 
{
	evt.preventDefault();
	popup.classList.remove("modal-show");
	popup.classList.remove("modal-error");
});

form.addEventListener("submit", function (evt) {
	if (!fullname || !email || !comment) {
		evt.preventDefault();
		popup.classList.add("modal-error");
	} else {
		if (isStorageSupport) {
				localStorage.setItem("email", email.value);
		}	
	}
});

window.addEventListener("keydown", function (evt) {
	if (evt.keyCode === 27) {
		evt.preventDefault();
		if (popup.classList.contains("modal-show")) {
			popup.classList.remove("modal-show");
			popup.classList.remove("modal-error");
		}
	}
});