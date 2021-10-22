"use strict";
const itemsContainer = document.querySelectorAll(".items-container");
let actualContainer, actualBtn, actualUl, actualForm, actualTextInput, actualValidation;
function addContainerListners(currentContainer) {
    const currentContainerDeletionBtn = currentContainer.querySelector(".delete-container-btn");
    const currentAddItemBtn = currentContainer.querySelector(".add-item-btn");
    const currentCloseFormBtn = currentContainer.querySelector(".close-form-btn");
    deleteBtnListeners(currentContainerDeletionBtn);
    addItemBtnListeners(currentAddItemBtn);
    closingFormBtnListenenrs(currentCloseFormBtn);
}
itemsContainer.forEach((container) => addContainerListners(container));
function deleteBtnListeners(btn) {
    btn.addEventListener("click", handleContainerDeletion);
}
function addItemBtnListeners(btn) {
    btn.addEventListener("click", handleAddItem);
}
function closingFormBtnListenenrs(btn) {
    btn.addEventListener("click", () => toggleForm(actualBtn, actualForm, false));
}
function handleContainerDeletion(e) {
    const btn = e.target;
    const btnArray = [...document.querySelectorAll(".delete-container-btn")];
    const containers = [...document.querySelectorAll(".items-container")];
    containers[btnArray.indexOf(btn)].remove();
}
function handleAddItem(e) {
    const btn = e.target;
    if (actualContainer)
        toggleForm(actualBtn, actualForm, false);
    setContainerItems(btn);
    toggleForm(actualBtn, actualForm, true);
}
function toggleForm(btn, form, action) {
    if (!action) {
        form.style.display = "none";
        btn.style.display = "block";
    }
    else if (action) {
        form.style.display = "block";
        btn.style.display = "none";
    }
}
function setContainerItems(btn) {
    actualBtn = btn;
    actualContainer = btn.parentElement;
    actualUl = actualContainer.querySelector("ul");
    actualForm = actualContainer.querySelector("form");
    actualTextInput = actualContainer.querySelector("input");
    actualValidation = actualContainer.querySelector(".validation-msg");
}
