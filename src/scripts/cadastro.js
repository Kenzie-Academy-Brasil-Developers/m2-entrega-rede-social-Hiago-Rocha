import { ApiRequests } from "./models/api.js"

class signup {
    static createNewUser(){
        const nome = document.getElementById("nome")
        const email = document.getElementById("email")
        const password = document.getElementById("password")
        const trabalho = document.getElementById("trabalho")
        const imgPerfil = document.getElementById("imgPerfil")
        const btnRegister = document.querySelector(".btn-register")

        btnRegister.addEventListener("click", async (event) => {
            event.preventDefault()

            const data = {
                username: nome.value,
                email: email.value,
                password: password.value,
                work_at: trabalho.value,
                image: imgPerfil.value
            }

            await ApiRequests.cadastro(data)
        })
    }

    static botoesCadastro(){
        const btnLogin = document.getElementById("btn-login")
        btnLogin.addEventListener("click", () => {
            window.location.assign("../../../index.html")
        })

        const botãoDistaque = document.querySelector(".botão-distaque")
        botãoDistaque.addEventListener("click", () => {
            window.location.assign("")
        })

        const btnVoltar = document.querySelector(".btn-volta")
        btnVoltar.addEventListener("click", (event) => {
            event.preventDefault()
            window.location.assign("../../../index.html")
        })

        const btnLembreiLogin = document.querySelector(".btn-volta-login")
        btnLembreiLogin.addEventListener("click", (event) => {
            event.preventDefault()
            window.location.assign("../../../index.html")
        })
    }
}

signup.createNewUser()
signup.botoesCadastro()