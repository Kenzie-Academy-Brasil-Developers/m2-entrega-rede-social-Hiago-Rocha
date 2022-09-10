export class ApiRequests {
    static baseUrl = "https://m2-rede-social.herokuapp.com/api/"
    static token = localStorage.getItem("@kenzieRedeSocial:token") || ""
    static headers = {
        "Content-Type": "application/json",
        Authorization: `Bearer ${this.token}`
    }

    static async login(body) {
        const userLogin = await fetch(`${this.baseUrl}users/login/`,{
            method: "POST",
            headers: this.headers,
            body: JSON.stringify(body)
        })
        .then(res => res.json())
        .then(res => {
            localStorage.setItem("@kenzieRedeSocial:token", res.token)
            localStorage.setItem("@KenzieRedeSocial:user_id", res.user_uuid)
            window.location.assign("./src/pages/home.html")
            return res  
        })
        .catch(err => {
             const modal = document.querySelector(".modal-wrapper")
            modal.classList.toggle("show-modal")
            return userLogin
        })
    }

    static async cadastro(body){
        const newUser = await fetch(`${this.baseUrl}users/` ,{
            method: "POST",
            headers: this.headers,
            body: JSON.stringify(body)
        })
        .then(res => res.json())
        .then(res => {
            window.location.assign("../../../index.html")
            return res
        })
        .catch(err => console.log(err))

        return userLogin    
    }
}