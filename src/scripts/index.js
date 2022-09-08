import { ApiRequests } from "./models/api.js"

const btnEntendi = document.querySelector(".modal-btn")
btnEntendi.addEventListener("click", (event) => {
    event.preventDefault()
    document.querySelector(".modal-wrapper").classList.toggle("show-modal")
})

class LoginPage {
    static renderLoginPage(){
        const token = localStorage.getItem("@kenzieStore:token")

        if(token){
            window.location.assign("src/pages/home.html")
        }

        const emailInput = document.getElementById("email")
        const senhaInput = document.getElementById("senha")
        const btnLogin = document.querySelector(".btn-logar")

        btnLogin.addEventListener("click", (event) => {
            event.preventDefault()

            const data = {
                email: emailInput.value,
                password: senhaInput.value
            }

            ApiRequests.login(data)
            window.location.assign("src/pages/home.html")
        })
    }
    static handleSignup() {
        const handleSignupBtn = document.querySelector(".btn-registro")

        handleSignupBtn.addEventListener("click", (event) => {
            event.preventDefault()
            window.location.assign("src/pages/cadastro.html")
        })
    }
}

LoginPage.renderLoginPage()
LoginPage.handleSignup()