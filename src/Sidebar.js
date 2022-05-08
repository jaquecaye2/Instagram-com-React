function Sugestao(props) {
    return (
        <div class="sugestao">
            <div class="perfil">
                <img src={props.sourceImgPerfil} alt="" />
                <div>
                    <h3>{props.nomePerfil}</h3>
                    <p>Novo no Instagram</p>
                </div>
            </div>
            <div>
                <h6>Seguir</h6>
            </div>
        </div>
    )
}

function Usuario(props) {
    return (
        <div class="meu-perfil">
            <img src="images/perfil-dog-5.jpg" alt="" />
            <div>
                <h5><strong>{props.user}</strong></h5>
                <h5>{props.nome}</h5>
            </div>
        </div>
    )
}

export default function SideBar() {

    const usuario = [
        {
            user: "kateviegas",
            nome: "Kate Viegas"
        }
    ]

    const sugestoes = [
        {
            sourceImgPerfil: "images/perfil-dog-6.jpg",
            nomePerfil: "Santos Dumont"
        },
        {
            sourceImgPerfil: "images/perfil-gato-5.jpg",
            nomePerfil: "Agostinho Carrara"
        },
        {
            sourceImgPerfil: "images/perfil-rato-1.webp",
            nomePerfil: "Neymar Jr"
        },
        {
            sourceImgPerfil: "images/perfil-dog-7.jpg",
            nomePerfil: "Lady Kate"
        },
        {
            sourceImgPerfil: "images/perfil-gato-6.jpg",
            nomePerfil: "Teresa Cristina"
        }
    ]

    return (
        <div class="sidebar">
            {usuario.map(usuario => <Usuario user={usuario.user} nome={usuario.nome}/>)}

            <div class="sugestoes">
                <div class="titulo-sugestao">
                    <p>Sugestões para você</p>
                    <h3>Ver tudo</h3>
                </div>

                {sugestoes.map(sugestao => <Sugestao sourceImgPerfil={sugestao.sourceImgPerfil} nomePerfil={sugestao.nomePerfil} />)}

                <div class="links-uteis">
                    <p>Sobre • Ajuda • Imprensa • API • Carreiras • Privacidade • Termos • Localizações • Contas mais relevantes • Hashtags • Idioma</p>
                    <br />
                    <p>© 2021 INSTAGRAM DO FACEBOOK</p>
                </div>
            </div>
        </div>
    )
}