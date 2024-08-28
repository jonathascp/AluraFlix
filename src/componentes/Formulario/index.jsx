import { useState } from "react";
import Botao from "../Botao";
import styles from "./Formulario.module.css";

function Formulario() {
    const [titulo, setTitulo] = useState("");
    const [categoria, setCategoria] = useState("");
    const [imagem, setImagem] = useState("");
    const [link, setLink] = useState("");

    const novoVideo = { titulo, categoria, imagem, link };

    function enviarNovoVideo(e) {
        e.preventDefault();
        fetch("http://localhost:3000/videos", {
            method: "POST",
            body: JSON.stringify(novoVideo),
            headers: {
                "Content-type": "application/json",
            },
        })
        console.log(`Novo video enviado ${novoVideo}`);
    }

    function limparCampos() {
        console.log(document.getElementById("titulo").value);
    }

    return (
        <>
            <form className={styles.formulario} onSubmit={enviarNovoVideo}>
                <div className={styles.input}>
                    <label htmlFor="titulo">Título</label>
                    <input
                        id="titulo"
                        type="text"
                        required
                        placeholder="Digite o título do vídeo"
                        onChange={(e) => setTitulo(e.target.value)}
                    />
                </div>
                <div className={styles.input}>
                    <label htmlFor="categoria">Categoria</label>
                    <select className={styles.selecao} required onChange={(e) => setCategoria(e.target.value)} >
                        <option value="" selected >Escolha a categoria</option>
                        <option value="frontEnd">Front-End</option>
                        <option value="backEnd">Back-End</option>
                        <option value="mobile">Mobile</option>
                    </select>
                </div>
                <div className={styles.input}>
                    <label htmlFor="imagem">Imagem</label>
                    <input
                        id="imagem"
                        type="text"
                        required
                        placeholder="Imagem do vídeo"
                        onChange={(e) => setImagem(e.target.value)}
                    />
                </div>
                <div className={styles.input}>
                    <label htmlFor="link">Link</label>
                    <input
                        id="link"
                        type="text"
                        required
                        placeholder="Link do vídeo"
                        onChange={(e) => setLink(e.target.value)}
                    />
                </div>
                <div className={styles.botoes}>
                    <Botao estiloBotao="azul" type="submit">
                        ENVIAR
                    </Botao>
                    <Botao type="button" onClick={limparCampos} estiloBotao="branco">
                        LIMPAR
                    </Botao>
                </div>
            </form>


        </>


    )
}

export default Formulario