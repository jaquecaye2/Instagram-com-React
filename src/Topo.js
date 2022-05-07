export default function Topo() {
    return (
        <div class="topo-desktop">
            <div>
                <div class="logo">
                    <ion-icon name="logo-instagram" class="icone"></ion-icon>
                    <div></div>
                    <img src="images/logo.png" alt="logo" />
                </div>
                <div class="input-pesquisa">
                    <input type="text" name="pesquisar" id="pesquisar" placeholder="Pesquisar"/>
                </div>
                <div class="icones">
                    <ion-icon name="paper-plane-outline" class="icone"></ion-icon>
                    <ion-icon name="compass-outline" class="icone"></ion-icon>
                    <ion-icon name="heart-outline" class="icone"></ion-icon>
                    <ion-icon name="person-outline" class="icone"></ion-icon>
                </div>
            </div>
        </div>
    )
}

