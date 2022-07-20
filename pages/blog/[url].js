import Image from 'next/image'
import {useRouter} from 'next/router'
import Layout from '../../components/Layout'
import { formatearFecha } from '../../helpers'
import styles from '../../styles/Entrada.module.css'
import NoEncontrado from '../404'
const EntradaBlog = ({data}) => {
  const router = useRouter()
  console.log(router.query)
  if(data == null){
    return(<NoEncontrado/>)
  }
  console.log(data)
  const {contenido,titulo,imagen, published_at} = data
  return (
    <Layout
      pagina={titulo}
    >
      <main className='contenedor'>
        <h1 className='heading'> {titulo} </h1>
        <article className={styles.entrada}>
          {imagen && ( <Image priority layout='responsive' width={800} height={600} src={imagen.url} alt={`Imagen entrada ${titulo}`} />) }
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
    params: {url: entrada.url}
  }))

  console.log(paths)

  return{
    paths,
    fallback:true
  }
}

export async function getStaticProps({params: {url} }){
  
  const urlBlog = `${process.env.API_URL}/blogs?url=${url}`
  const respuesta = await fetch(urlBlog)
  const data = await respuesta.json()
  // console.log(data)

  return{
    props: {
      data: data[0]
    }
  }
}

// export async function getServerSideProps({query: {id} }){
//   // estos console.log solo los podemos ver en la terminal de next
//   // const url = `http://localhost:1337/blogs/${id}` este ya no nos servira
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