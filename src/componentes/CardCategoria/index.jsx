import Card from "../Card";
import styles from "./CardCategoria.module.css";
import { useEffect, useState } from "react";

function CardCategoria({ categoria,categoriaTitulo})
{
    const [videos,setVideos] = useState([]);

    useEffect(() => {
    fetch("http://localhost:3000/videos")
    .then(resposta => resposta.json())
    .then(dados => setVideos(dados))
   },[]);

   const videoCategoria = videos.filter(video => {
    return video.categoria === categoriaTitulo;
   })

    return (
        <div className={styles.container}>
            <h2 className={`${styles.cardCategoria} ${styles[categoriaTitulo]}`}>{categoria}</h2>
            <div className={styles.containerCards}>      
                {videoCategoria.map(video => {
                    return <Card key={video.id} 
                                imagem={video.imagem} 
                                corCategoria={video.categoria}
                                categoria={video.categoria}
                                titulo={video.titulo}
                                link={video.link}
                                id={video.id}
                            />
                })}
            </div>
        </div> 
    )
}

export default CardCategoria