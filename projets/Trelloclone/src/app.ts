// Delete an HTMLElement
const itemsContainer = document.querySelectorAll(".items-container") as NodeListOf<HTMLDivElement>

function addContainerListners(currentContainer : HTMLDivElement) {
    const currentContainerDeletionBtn = currentContainer.querySelector(".delete-container-btn") as HTMLButtonElement

    deleteBtnListeners(currentContainerDeletionBtn) 
}
itemsContainer.forEach((container: HTMLDivElement) => addContainerListners(container))
function deleteBtnListeners(btn: HTMLButtonElement) {
    btn.addEventListener("click", handleContainerDeletion)
}

function handleContainerDeletion(e: MouseEvent) {
    const btn = e.target as HTMLButtonElement
    const btnArray = [...document.querySelectorAll(".delete-container-btn")] as HTMLButtonElement[]
    const containers = [...document.querySelectorAll(".items-container")] as HTMLDivElement[]
    containers[btnArray.indexOf(btn)].remove()
}