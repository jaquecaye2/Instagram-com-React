import Conteudo from "./Conteudo"
import SideBar from "./Sidebar"

export default function Container(){
    return (
        <div class="container">
            <Conteudo />
            <SideBar />
        </div>
    )
}