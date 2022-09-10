import { ApiRequests } from "./models/api.js"

const btnEntendi = document.querySelector(".modal-btn")
btnEntendi.addEventListener("click", (event) => {
    event.preventDefault()
    document.querySelector(".modal-wrapper").classList.toggle("show-modal")
})

class LoginPage {
    static renderLoginPage(){
        const token = localStorage.getItem("@kenzieRedeSocial:token")

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
        })
    }
    static handleSignup() {
        const handleSignupBtn = document.querySelector(".btn-registro")

        handleSignupBtn.addEventListener("click", (event) => {
            event.preventDefault()
            window.location.assign("./src/pages/cadastro.html")
        })

        const btnRegistrar = document.getElementById("btn-registrar")

        btnRegistrar.addEventListener("click", () => {
            window.location.assign("./src/pages/cadastro.html")
        })

        const botãoDistaque = document.querySelector(".botão-distaque")

        botãoDistaque.addEventListener("click", () => {
            window.location.assign("./index.html")
        })
    }
}

LoginPage.renderLoginPage()
LoginPage.handleSignup()