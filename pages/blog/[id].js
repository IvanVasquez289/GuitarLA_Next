import {useRouter} from 'next/router'

const EntradaBlog = ({data}) => {
  // const router = useRouter()
  // console.log(router.query)
  console.log(data)
  return (
    <div>
      desde entrada blog
    </div>
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