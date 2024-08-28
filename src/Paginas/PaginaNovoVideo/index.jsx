import styles from "./PaginaNovoVideo.module.css";
import Formulario from "../../componentes/Formulario";

function PaginaNovoVideo() {

    return (
        <section className={styles.container}>
            <header>
                <h1>NOVO VÍDEO</h1>
                <h3>complete o formulario para criar um novo card de vídeo</h3>
            </header>
            <Formulario/>
        </section>
    )
}

export default PaginaNovoVideo