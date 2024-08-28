import styles from "./ModalCard.module.css";
import Botao from "../Botao";
import { useState } from "react";
export default function ModalCard({ openModal,setCloseModal,valorTitulo,valorCategoria,valorImagem,valorLink,id })
{

    const [titulo,setTitulo] = useState("");
    const [categoria,setCategoria] = useState("");
    const [imagem,setImagem] = useState("");
    const [link,setLink] = useState("");

    const cardAtualizado = { titulo,categoria, imagem, link };

    function atualizarCard(e)
    {
        e.preventDefault();
        const url = `http://localhost:3000/videos/${id}`;

        fetch(url,{
            method: "PATCH",
            headers: {
                "Content-type" : "application/json"
            },
            body:JSON.stringify(cardAtualizado),
        })

        console.log(cardAtualizado);
    }

    if(openModal)
    {
        return (
            <div className={styles.overlay}>
                <div className={styles.modal}>
                    <button className={styles.closeBtn} onClick={setCloseModal}>X</button>
                    <form onSubmit={atualizarCard}>
                        <div className={styles.input_label}>
                            <label htmlFor="titulo">Título</label>
                            <input  onChange={(e) => setTitulo(e.target.value)} id="titulo" type="text" />
                        </div>
                        <div className={styles.input_label}>
                            <label htmlFor="categoria">Categoria</label>
                            <select onChange={(e) => setCategoria(e.target.value)}>
                                <option selected ></option>
                                <option value="frontEnd">Front-End</option>
                                <option value="backEnd">Back-End</option>
                                <option value="mobile">Mobile</option>
                            </select>
                        </div>
                        <div className={styles.input_label}>
                            <label htmlFor="imagem">Imagem</label>
                            <input onChange={(e) => setImagem(e.target.value)} id="imagem" type="text" />
                        </div>
                        <div className={styles.input_label}>
                            <label htmlFor="link">Link</label>
                            <input  onChange={(e) => setLink(e.target.value)} id="link" type="text" />
                        </div>

                        <Botao type="submit" estiloBotao={"azul"}>
                            Atualizar
                        </Botao> 
                    </form>
                    
                </div>
            </div>
        )
    }
        return null;
}

 