export class Render {
    
    static renderPostersList(array){
        const sessaoPosters = document.getElementById("sessao-posters")

        array.forEach((poster) => {
            const post = Render.renderPoster(poster)

            sessaoPosters.appendChild(post) 
        })
    }
    
    static renderPoster(poster){
        const userId        = localStorage.getItem("@KenzieRedeSocial:user_id")
        const divConteiner  = document.createElement("div")
        const divPerfilPost = document.createElement("div")
        const imgPefil      = document.createElement("img")
        const divPerfilNome = document.createElement("div")
        const h4            = document.createElement("h4")
        const tagPdoPerfil  = document.createElement("p")
        const h3            = document.createElement("h3")
        const tagPdoPoster  = document.createElement("p")
        const divLike       = document.createElement("div")
        const buttonModal   = document.createElement("button")
        const buttonLike    = document.createElement("img")
        const spanLike      = document.createElement("span")
        const user          = localStorage.getItem("@KenzieRedeSocial:user_id")

        divConteiner.key = poster.uuid
        divConteiner.id = poster.uuid

        divConteiner.classList.add("containerPost")
        divPerfilPost.classList.add("perfil-do-post")
        imgPefil.src = poster.author.image
        imgPefil.alt = `imagem de perfil de ${poster.author.username}`
        h4.innerText = poster.author.username
        tagPdoPerfil.innerText = poster.author.work_at
        h3.innerText = poster.title
        tagPdoPoster.innerText = poster.description
        divLike.classList.add("botoes-like-post")
        buttonModal.classList.add("btn-abrir-post")
        buttonModal.innerText = "Abrir Post"
        for(let i=0;i<poster.likes.length;i++){
            const confereId = poster.likes[i].uuid
            if(userId === confereId){
                return buttonLike.src = "../assets/heartRed.png"
            }
            buttonLike.src = "../assets/heartBlack.png"
        }
        buttonLike.alt = "Imagem de coração para dar likes"
        buttonLike.classList.add("Like")
        spanLike.innerText = `${poster.likes.length}`

        divConteiner.append(divPerfilPost, h3, tagPdoPoster, divLike)
        divPerfilPost.append(imgPefil, divPerfilNome)
        divPerfilNome.append(h4, tagPdoPerfil)
        divLike.append(buttonModal, buttonLike, spanLike)

        return divConteiner
    }

    static renderInfoUser(userId){
        const imgPerfil = document.getElementById("img-perfil")
        const nomePerfil = document.getElementById("nome-perfil")
        const followPerfil = document.getElementById("follow-perfil")
        const workPerfil = document.getElementById("work-perfil")

        console.log(userId.followers_amount)

        imgPerfil.src = userId.image
        imgPerfil.alt = `imagem de perfil de ${userId.username}`
        nomePerfil.innerText = userId.username
        followPerfil.innerText = `${userId.followers} seguidores`
        workPerfil.innerText = userId.work_at
    }

    static modalPost(post){
        const imgPerfilPost     = document.getElementById("img-perfil-post")
        const userNamePost      = document.getElementById("nome-perfil-post")
        const workPefilPost     = document.getElementById("work-perfil-post")
        const titleModalPost    = document.getElementById("titulo-modal-post")
        const conteudoModalPost = document.getElementById("conteudo-modal-post")

        imgPerfilPost.src = post.author.image
        userNamePost.innerText = post.author.username
        workPefilPost.innerText = post.author.work_at
        titleModalPost.innerText = post.title
        conteudoModalPost.innerText = post.description

        const modal = document.querySelector(".modal-wrapper")
        modal.classList.toggle("show-modal")
    }

    static rederizaSugestao(NewArrUsers){
        const Roll = document.querySelector(".roll")
        NewArrUsers.forEach((sugestao) => {
            const card = Render.criaCard(sugestao)

            Roll.appendChild(card)
        })
    }

    static criaCard(sugestao){
        const divCard   = document.createElement("div")
        const imgCard   = document.createElement("img")
        const divPerfil = document.createElement("div")
        const h4Nome    = document.createElement("h4")
        const pTrabalho = document.createElement("p")
        const btn1      = document.createElement("button")
        const btn2      = document.createElement("button")

        divCard.classList.add("card")
        divPerfil.classList.add("perfil-seguir")
        imgCard.src = sugestao.image
        imgCard.alt = `imagem de perfil de ${sugestao.username}`
        h4Nome.innerText = sugestao.username
        pTrabalho.innerText = sugestao.work_at
        btn1.innerText = "Seguir"
        btn2.innerText = "Seguir"

        divCard.append(imgCard, divPerfil, btn2)
        divPerfil.append(h4Nome, pTrabalho, btn1)

        return divCard
    }
}

/*<div class="card">
                    <img id="img-sugestao" src="" alt="">
                    <div class="perfil-seguir">
                        <h4 id="nomeSugest">Carlos Lima</h4>
                        <p>UX e UI Desginer</p>
                        <button>Seguindo</button>
                    </div>
                    <button>Seguindo</button>
                </div>*/