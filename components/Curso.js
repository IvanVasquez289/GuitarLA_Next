import styles from '../styles/Curso.module.css'

const Curso = ({curso}) => {
  const {contenido, titulo, imagen} = curso
  return (
    <section>
        <div className={`contenedor ${styles.grid}`}>
            <div className={styles.contenido}>
                <h2 className='heading'>{titulo}</h2>
                <p className={styles.texto}>{contenido}</p>

                <a href="#" className={styles.enlace}>Mas informacion</a>
            </div>
        </div>

        <style jsx>{`
            section{
                background-color: blue;
            }
            
            @media (min-width:992px){
                section{
                    padding: 10rem 0;
                    margin-top: 10rem;
                    background-image: linear-gradient(to right, rgb(0 0 0 / 0.65), rgb(0 0 0 / 0.7)), url(${imagen.url}) ;
                    background-size:cover ;
                    background-position: 50% ;
                }
            }
        `}

        </style>
    </section>
  )
}

export default Curso