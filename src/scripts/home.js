import { ApiRequests } from "./models/api.js";
import { Render } from "./models/render.js";

class Home {
    static renderHome(posters) {
        const token = localStorage.getItem("@kenzieRedeSocial:token")
        const postList = document.getElementById("sessao-posters")

        postList.innerHTML = ""

        if(!token){
            window.location.assign("../../index.html")
        }

        console.log(posters)

        Render.renderPostersList(posters)
    }

    static renderUser(userId) {
        Render.renderInfoUser(userId)
    }

    static createPost() {
        const titlePost = document.getElementById("post-titulo")
        const descricaoPost = document.getElementById("post-conteudo").value
        const btnPostar = document.getElementById("btn-Postar")

        btnPostar.addEventListener("click", async () => {
            
            const data = {
                title: titlePost.value,
                description: descricaoPost
            }

            await ApiRequests.CriaPost(data)
        })

    }

    static darLike() {
        const btnLike = document.querySelectorAll(".Like")
        for(let i = 0; i<btnLike.length;i++){
            btnLike[i].addEventListener("click", async (coracao) => {
                const data = {
                    post_uuid: coracao.path[2].key
                }
    
                btnLike[i].src = "../assets/heartRed.png"
                await ApiRequests.LikePost(data)
            })
        }
    }

    static abrirModal(posters) {
        const buttonModal = document.querySelectorAll(".btn-abrir-post")
        for(let i=0;i<buttonModal.length;i++){
            buttonModal[i].addEventListener("click", (botao) => {
                for(let i=0;i<posters.length;i++){
                    const post = posters[i]
                    if(post.uuid === botao.path[2].key){
                        Render.modalPost(post)
                    }
                }
            })
        }
    }
}

const btnSair = document.getElementById("btnSair")
btnSair.addEventListener("click", () => {
    localStorage.clear()
    window.location.assign("../../index.html")
})

const btnFechaModal = document.getElementById("btn-fecha-modal")
btnFechaModal.addEventListener("click", () => {
    
    document.querySelector(".modal-wrapper").classList.toggle("show-modal")
})

const posters = await ApiRequests.getAllPosters()
Home.renderHome(posters)

const userId = await ApiRequests.usuario()
Home.renderUser(userId)

Home.createPost()

Home.darLike()

Home.abrirModal(posters)

