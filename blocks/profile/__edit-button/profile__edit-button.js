let profile__editButton = document.querySelector(".profile__edit-button");

let editFormPopup = document.querySelector(".profile__edit-form");
let closeButton = document.querySelector(".profile__close-button");
let profileSubmitButton = document.querySelector(".profile__submit-button");
let heartButton = document.querySelector(".card__like-button");

closeButton.addEventListener("click", hidePopup);

profile__editButton.addEventListener("click", editForm);

profileSubmitButton.addEventListener("click", submitHandle);

heartButton.addEventListener("click", heartClicked);

function editForm() {
  editFormPopup.setAttribute("style", "display: flex;");
}

function hidePopup() {
  editFormPopup.setAttribute("style", "display: none; ");
}

function submitHandle(e) {
  e.preventDefault();
  editFormPopup.setAttribute("style", "display: none; ");
}

function heartClicked() {
  heartButton.setAttribute(
    "style",
    "filter: invert(0%) sepia(3%) saturate(0%) hue-rotate(235deg) brightness(105%) contrast(105%);"
  );
}
