export class ApiRequests {
    static baseUrl = "https://m2-rede-social.herokuapp.com/api/"
    static token = localStorage.getItem("@kenzieRedeSocial:token") || ""
    static headers = {
        "Content-Type": "application/json",
        Authorization: `Token ${this.token}`
    }

    static async login(body) {
        const userLogin = await fetch(`${this.baseUrl}users/login/`,{
            method: "POST",
            headers: this.headers,
            body: JSON.stringify(body)
        })
        .then(res => res.json())
        .then(res => {
            if(res.token != undefined){
                localStorage.setItem("@kenzieRedeSocial:token", res.token)
                localStorage.setItem("@KenzieRedeSocial:user_id", res.user_uuid)
                window.location.assign("./src/pages/home.html")
            }else{
                const modal = document.querySelector(".modal-wrapper")
                modal.classList.toggle("show-modal")
            }
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

    static async getAllPosters() {
        const posters = await fetch(`${this.baseUrl}posts/`, {
            method: "GET" ,
            headers: this.headers
        })
        .then(res => res.json())

        .catch(err => console.log(err))

        return posters.results
    }

    static async usuario(){
        const userId = localStorage.getItem("@KenzieRedeSocial:user_id")
        const user = await fetch(`${this.baseUrl}users/${userId}/`, {
            method: "GET",
            headers: this.headers
        })
        .then(res => res.json())

        .catch(err => console.log(err))

        return user
    }

    static async CriaPost(body){
        const newPost = await fetch(`${this.baseUrl}posts/`, {
            method: "POST",
            headers: this.headers,
            body: JSON.stringify(body)
        })
        .then(res => res.json())
        .then(res => {
            window.location.assign("")
            return res
        })

        .catch(err => console.log(err))

        return newPost
    }

    static async LikePost(body){
        const newLike = await fetch(`${this.baseUrl}likes/`, {
            method: "POST",
            headers: this.headers,
            body: JSON.stringify(body)
        })
        .then(res => res.json())

        .catch(err => console.log(err))

        return newLike
    }

    static async PegaUsers(){
        const usuarios = await fetch(`${this.baseUrl}users/`,{
            method: "GET",
            headers: this.headers
        })
        .then(res => res.json())

        .catch(err => console.log(err))

        return usuarios
    }

    
}