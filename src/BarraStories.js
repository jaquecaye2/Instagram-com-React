function Story(props){
    return (
        <div class="story">
            <div><img src={props.source}/></div>
            <h4>{props.title}</h4>
        </div>
    )
}

export default function BarraStories(){
    const stories = [
        {source: "images/perfil-dog-1.jpg", title: "Marnie"},
        {source: "images/perfil-gato-1.jpg", title: "Heidi"},
        {source: "images/perfil-dog-2.jpg", title: "Oshie"},
        {source: "images/perfil-gato-2.jpg", title: "Britney"},
        {source: "images/perfil-dog-3.webp", title: "Cocker"},
        {source: "images/perfil-gato-3.jpg", title: "Moka"},
        {source: "images/perfil-dog-4.jpg", title: "Malu"},
        {source: "images/perfil-gato-4.jpg", title: "Hamilton"},
        {source: "images/perfil-gato-5.jpg", title: "Juscelino"},
    ]

    return(
        <div class="barra-stories">
            {stories.map(story => <Story source={story.source} title={story.title} />)}

            <div class="seta-lateral">
                <ion-icon name="chevron-forward-circle" class="icone"></ion-icon>
            </div>
        </div>
    )
}