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
            return res  
        })
        .catch(err => {
           return document.querySelector(".modal-wrapper").classList.toggle("show-modal")
        })
        return userLogin
    }
}

