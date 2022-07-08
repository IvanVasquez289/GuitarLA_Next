import Image from 'next/image'
import Layout from '../../components/Layout'
import { formatearFecha } from '../../helpers'
import styles from '../../styles/Entrada.module.css'
const EntradaBlog = ({data}) => {

  const {contenido,titulo,imagen, published_at} = data
  return (
    <Layout>
      <main className='contenedor'>`
        <h1 className='heading'> {titulo} </h1>
        <article className={styles.entrada}>
          <Image priority layout='responsive' width={800} height={600} src={imagen.url} alt={`Imagen entrada ${titulo}`} />
          <div className={styles.contenido}>
            <p className={styles.fecha}> {formatearFecha(published_at)} </p>
            <p className={styles.texto}> {contenido} </p>
          </div>
        </article>
      </main>
    </Layout>
  )
}

export async function getStaticPaths(){
  const url = `${process.env.API_URL}/blogs`
  const respuesta = await fetch(url)
  const entradas = await respuesta.json()

  const paths = entradas.map(entrada =>({
    params: {id: entrada.id}
  }))

  console.log(paths)

  return{
    paths,
    fallback:true
  }
}

export async function getStaticProps({params: {id} }){
  
  const url = `${process.env.API_URL}/blogs/${id}`
  const respuesta = await fetch(url)
  const data = await respuesta.json()
  // console.log(data)

  return{
    props: {
      data
    }
  }
}

// export async function getServerSideProps({query: {id} }){
//   // estos console.log solo los podemos ver en la terminal de next
//   const url = `http://localhost:1337/blogs/${id}` este ya no nos servira
//   const url = `${process.env.API_URL}/blogs/${id}`
//   const respuesta = await fetch(url)
//   const data = await respuesta.json()
//   // console.log(data)

//   return{
//     props: {
//       data
//     }
//   }
// }

export default EntradaBlog