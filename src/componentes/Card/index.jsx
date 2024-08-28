import { useState } from "react";
import ModalCard from "../ModalCard";
import styles from "./Card.module.css";

function Card({ imagem,corCategoria,titulo,categoria,link,id })
{
    const [openModal,setOpenModal] = useState(false);

    function deletarCard()
    {
        const url = `http://localhost:3000/videos/${id}`;

        fetch(url,{
            method: "DELETE",
        })
    }
    return (
        <div className={styles.container}>
            <figure className={styles[corCategoria]}>
                <img className={styles.imagem} src={imagem} alt="Alt da Foto" />
                <div className={styles.botoes}>                    
                    <button onClick={deletarCard} className={styles.botao}>Excluir</button>
                    <button onClick={() => setOpenModal(true)} className={styles.botao}>Editar</button>
                    
                    <ModalCard openModal={openModal} 
                        setCloseModal={() => setOpenModal(!openModal)}
                        id={id}
                    /> 
                </div>
            </figure>
        </div>
    )
}

export default Card