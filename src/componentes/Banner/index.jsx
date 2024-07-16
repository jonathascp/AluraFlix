import styles from "./Banner.module.css";

function Banner() {
    return (
        <div className={styles.banner}>
            <div className={styles.card}>
                <div className={styles.card_titulo}>
                    <h2 className={styles.categoria}>FRONT END</h2>
                    <p className={styles.titulo}>SEO com React</p>
                    <p className={styles.texto}>Lorem ipsum dolor, sit amet consectetur adipisicing elit. In consequuntur harum, dolore nihil sunt aut. Suscipit temporibus dolores aut nisi reprehenderit corrupti autem ipsam obcaecati. Iure sed nemo nobis ad.</p>
                </div>
                <img src="/player-pequeno.png" alt="imagem player" className={styles.player_imagem} />
            </div>
        </div>


    )
}

export default Banner