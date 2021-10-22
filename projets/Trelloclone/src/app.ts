
const itemsContainer = document.querySelectorAll(".items-container") as NodeListOf<HTMLDivElement>
let actualContainer: HTMLDivElement,
    actualBtn: HTMLButtonElement,
    actualUl: HTMLUListElement,
    actualForm: HTMLFormElement,
    actualTextInput: HTMLInputElement,
    actualValidation: HTMLSpanElement;

function addContainerListners(currentContainer: HTMLDivElement) {
    const currentContainerDeletionBtn = currentContainer.querySelector(".delete-container-btn") as HTMLButtonElement
    const currentAddItemBtn = currentContainer.querySelector(".add-item-btn") as HTMLButtonElement
    const currentCloseFormBtn = currentContainer.querySelector(".close-form-btn") as HTMLButtonElement

    deleteBtnListeners(currentContainerDeletionBtn)
    addItemBtnListeners(currentAddItemBtn)
    closingFormBtnListenenrs(currentCloseFormBtn)
}


itemsContainer.forEach((container: HTMLDivElement) => addContainerListners(container))


function deleteBtnListeners(btn: HTMLButtonElement) {
    btn.addEventListener("click", handleContainerDeletion)
}


function addItemBtnListeners(btn: HTMLButtonElement) {
    btn.addEventListener("click", handleAddItem)
}

function closingFormBtnListenenrs(btn: HTMLButtonElement) {
    btn.addEventListener("click" , () => toggleForm(actualBtn, actualForm, false))
}

function handleContainerDeletion(e: MouseEvent) {
    const btn = e.target as HTMLButtonElement
    const btnArray = [...document.querySelectorAll(".delete-container-btn")] as HTMLButtonElement[]
    const containers = [...document.querySelectorAll(".items-container")] as HTMLDivElement[]
    containers[btnArray.indexOf(btn)].remove()
}


function handleAddItem(e: Event) {
    const btn = e.target as HTMLButtonElement
    if(actualContainer) toggleForm(actualBtn , actualForm , false)
    setContainerItems(btn)
    toggleForm(actualBtn, actualForm, true)
}


function toggleForm(btn: HTMLButtonElement, form: HTMLFormElement , action: boolean) {
    if(!action) {
        form.style.display = "none"
        btn.style.display = "block"
    } else if (action) {
        form.style.display = "block"
        btn.style.display = "none"
    }
}

function setContainerItems(btn: HTMLButtonElement) {
    actualBtn = btn
    actualContainer = btn.parentElement as HTMLDivElement
    actualUl = actualContainer.querySelector("ul") as HTMLUListElement
    actualForm = actualContainer.querySelector("form") as HTMLFormElement
    actualTextInput = actualContainer.querySelector("input") as HTMLInputElement
    actualValidation = actualContainer.querySelector(".validation-msg") as HTMLSpanElement
}

