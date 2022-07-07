import Link from "next/link"
import Image from "next/image"
import { formatearFecha } from "../helpers"
import styles from '../styles/Entrada.module.css'

const Entrada = ({entrada}) => {
  const {resumen,titulo,imagen, published_at, id} = entrada

  return (
    <article>
        <Image width={800} height={600} src={imagen.url} alt={`imagen blog ${titulo}`} />
        <div className={styles.contenido}>
            <h3> {titulo} </h3>
            <p className={styles.fecha}> {formatearFecha(published_at)} </p>
            <p className={styles.resumen}> {resumen} </p>
            {/* no podemos poner classname a Link porque css lo ignora, tendremos que crear una etiqueta <a></a> dentro */}
            <Link href={`/blog/${id}`}>
                <a className={styles.enlace}>
                    Leer entrada
                </a>
            </Link>
        </div>
    </article>
  )
}

export default Entrada