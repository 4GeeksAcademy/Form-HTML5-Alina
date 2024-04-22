
const sendButton = document.querySelector("#form-project")

sendButton.addEventListener("submit", (e)=>{
    e.preventDefault()
    sendButton.classList.add("was-validated")
})