import Image from "next/image"
import styles from '../../styles/Guitarra.module.css'
import Layout from '../../components/Layout'
const Producto = ({guitarra}) => {
  console.log(guitarra)
  const {descripcion, imagen, nombre, precio} = guitarra[0]

  return (
    <Layout
        pagina={`GuitarLA - Guitarra ${nombre}`}
    >
        <div className={styles.guitarra}>
            <Image layout='responsive' width={150} height={350} src={imagen[0].url} alt={`imagen guitarra ${nombre}`} />  
            <div className={styles.contenido}>
                <h3>{nombre}</h3>
                <p className={styles.descripcion}> {descripcion} </p>
                <p className={styles.precio}> ${precio} </p>
            </div>
        </div>
    </Layout>
  )
}

// Para poder leer la url http://localhost:3000/guitarras/holly por ejemplo, le tenemos que pasar el nombre del archivo 
// en este caso [url] entonces le pasamos url
export async function getServerSideProps({query: {url}}){
    console.log(url)

    const urlGuitarra = `${process.env.API_URL}/guitarras?url=${url}`
    const respuesta = await fetch(urlGuitarra)
    const guitarra = await respuesta.json()

    // nos da como respuesta un array y dentro el obj, por eso ponemos  [0] para acceder al obj
    // console.log(guitarra[0])
    return {
        props: {
            guitarra
        }
    }
}

export default Producto