import React from "react"

function Post(props) {
    const [tipoCoracao, setTipoCoracao] = React.useState("heart-outline");
    const [corCoracao, setCorCoracao] = React.useState("black")

    function curtirPublicacao(){
        if (tipoCoracao === "heart-outline"){
            setTipoCoracao("heart")
            setCorCoracao("danger")
        }
        if (tipoCoracao === "heart"){
            setTipoCoracao("heart-outline")
            setCorCoracao("black")
        }
    }

    function curtirPublicacaoFoto(){
        setTipoCoracao("heart")
        setCorCoracao("danger")
    }

    return (
        <div class="post">
            <div class="barra-superior">
                <div class="perfil">
                    <img src={props.sourceImgPerfil} alt="" />
                    <h3>{props.titlePerfil}</h3>
                </div>
                <div class="mais-info">
                    <ion-icon name="ellipsis-horizontal"></ion-icon>
                </div>
            </div>
            <div class="foto" onClick={curtirPublicacaoFoto}>
                <img src={props.sourceImgPublicada} alt="" />
            </div>
            <div class="icones-reagir">
                <div>
                    <ion-icon name={tipoCoracao} color={corCoracao} class="icone" onClick={curtirPublicacao}></ion-icon>
                    <ion-icon name="chatbubble-outline" class="icone"></ion-icon>
                    <ion-icon name="paper-plane-outline" class="icone"></ion-icon>
                </div>
                <div>
                    <ion-icon name="bookmark-outline" class="icone margin-direita"></ion-icon>
                </div>
            </div>
            <div class="curtidas">
                <img src={props.sourceImgPerfilQCurtiu} alt="" />
                <p>Curtido por <strong>{props.titlePerfilQCurtiu}</strong> e <strong>outras {props.quantCurtidas} pessoas</strong></p>
            </div>
            <div class="comentarios">
                <div class="lengenda">
                    <p><strong>{props.titlePerfil}</strong> {props.legenda}</p>
                </div>
                <div class="quant-comentarios">
                    <p><a href="#">Ver todos os {props.quantComentarios} comentários</a></p>
                </div>
                <div class="comentario">
                    <p><strong>{props.titlePerfilComentou1}</strong> {props.comentario1}</p>
                    <div>
                        <ion-icon name="heart-outline" class="icone"></ion-icon>
                    </div>
                </div>
                <div class="comentario">
                    <p><strong>{props.titlePerfilComentou2}</strong> {props.comentario2}</p>
                    <div>
                        <ion-icon name="heart-outline" class="icone"></ion-icon>
                    </div>
                </div>
                <div class="hora-publicacao">
                    <p>HÁ {props.dataPublicacao}</p>
                </div>
                <div class="adicionar-comentario">
                    <div>
                        <ion-icon name="happy-outline" class="icone"></ion-icon>
                    </div>
                    <input type="text" name="comentario" id="comentario" placeholder="Adicione um comentário..." />
                    <button>Publicar</button>
                </div>
            </div>
        </div>
    )
}

export default function Feed() {
    const feed = [
        {
            sourceImgPerfil: "images/perfil-dog-1.jpg", 
            titlePerfil: "Marnie", 
            sourceImgPublicada: "images/post-1.jpg", 
            sourceImgPerfilQCurtiu: "images/perfil-gato-2.jpg", 
            titlePerfilQCurtiu: "Britney", 
            quantCurtidas: "68.140", 
            legenda: "Lorem ipsum dolor sit", 
            quantComentarios: "16.991", 
            titlePerfilComentou1: "Heidi", 
            comentario1: "Lorem ipsum dolor sit amet consectetur adipisicing elit.  Lorem ipsum dolor sit amet consectetur",
            titlePerfilComentou2: "Cocker",
            comentario2: "Duis neque urna, venenatis id placerat vel, pharetra scelerisque quam. Sed sagittis tortor vestibulum ultricies blandit",
            dataPublicacao: "9 HORAS"
        },
        {
            sourceImgPerfil: "images/perfil-gato-1.jpg", 
            titlePerfil: "Heidi", 
            sourceImgPublicada: "images/post-2.jpg", 
            sourceImgPerfilQCurtiu: "images/perfil-gato-4.jpg", 
            titlePerfilQCurtiu: "Hamilton", 
            quantCurtidas: "85.106", 
            legenda: "Lorem ipsum dolor sit", 
            quantComentarios: "10.959", 
            titlePerfilComentou1: "Hamilton", 
            comentario1: "Lorem ipsum dolor sit amet consectetur adipisicing elit.  Lorem ipsum dolor sit amet consectetur",
            titlePerfilComentou2: "Cocker",
            comentario2: "Duis neque urna, venenatis id placerat vel, pharetra scelerisque quam. Sed sagittis tortor vestibulum ultricies blandit",
            dataPublicacao: "4 HORAS"
        },
        {
            sourceImgPerfil: "images/perfil-gato-3.jpg", 
            titlePerfil: "Moka", 
            sourceImgPublicada: "images/post-3.jpg", 
            sourceImgPerfilQCurtiu: "images/perfil-dog-1.jpg", 
            titlePerfilQCurtiu: "Britney", 
            quantCurtidas: "96.887", 
            legenda: "Lorem ipsum dolor sit", 
            quantComentarios: "19.219", 
            titlePerfilComentou1: "Britney", 
            comentario1: "Lorem ipsum dolor sit amet consectetur adipisicing elit.  Lorem ipsum dolor sit amet consectetur",
            titlePerfilComentou2: "Hamilton",
            comentario2: "Duis neque urna, venenatis id placerat vel, pharetra scelerisque quam. Sed sagittis tortor vestibulum ultricies blandit",
            dataPublicacao: "1 DIA"
        },
        {
            sourceImgPerfil: "images/perfil-dog-3.webp", 
            titlePerfil: "Cocker", 
            sourceImgPublicada: "images/post-4.jpg", 
            sourceImgPerfilQCurtiu: "images/perfil-dog-2.jpg", 
            titlePerfilQCurtiu: "Oshie", 
            quantCurtidas: "53.605", 
            legenda: "Lorem ipsum dolor sit", 
            quantComentarios: "19.805", 
            titlePerfilComentou1: "Malu", 
            comentario1: "Lorem ipsum dolor sit amet consectetur adipisicing elit.  Lorem ipsum dolor sit amet consectetur",
            titlePerfilComentou2: "Oshie",
            comentario2: "Duis neque urna, venenatis id placerat vel, pharetra scelerisque quam. Sed sagittis tortor vestibulum ultricies blandit",
            dataPublicacao: "9 HORAS"
        },
        {
            sourceImgPerfil: "images/perfil-dog-4.jpg", 
            titlePerfil: "Malu", 
            sourceImgPublicada: "images/post-5.jpg", 
            sourceImgPerfilQCurtiu: "images/perfil-gato-3.jpg", 
            titlePerfilQCurtiu: "Moka", 
            quantCurtidas: "60.878", 
            legenda: "Lorem ipsum dolor sit", 
            quantComentarios: "29.520", 
            titlePerfilComentou1: "Marnie", 
            comentario1: "Lorem ipsum dolor sit amet consectetur adipisicing elit.  Lorem ipsum dolor sit amet consectetur",
            titlePerfilComentou2: "Malu",
            comentario2: "Duis neque urna, venenatis id placerat vel, pharetra scelerisque quam. Sed sagittis tortor vestibulum ultricies blandit",
            dataPublicacao: "1 DIA"
        }
    ]

    return (
        <div class="feed">
            {feed.map(publicacao => <Post sourceImgPerfil={publicacao.sourceImgPerfil} titlePerfil={publicacao.titlePerfil} sourceImgPublicada={publicacao.sourceImgPublicada} sourceImgPerfilQCurtiu={publicacao.sourceImgPerfilQCurtiu} titlePerfilQCurtiu={publicacao.titlePerfilQCurtiu} quantCurtidas={publicacao.quantCurtidas} legenda={publicacao.legenda} quantComentarios={publicacao.quantComentarios} titlePerfilComentou1={publicacao.titlePerfilComentou1} comentario1={publicacao.comentario1} titlePerfilComentou2={publicacao.titlePerfilComentou2} comentario2={publicacao.comentario2} dataPublicacao={publicacao.dataPublicacao}/>)}
        </div>
    )
}