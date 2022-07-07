import {useRouter} from 'next/router'

const EntradaBlog = ({data}) => {
  // const router = useRouter()
  // console.log(router.query)
  console.log(data)
  return (
    <div>
        {data.titulo}
    </div>
  )
}

export async function getServerSideProps({query: {id} }){
  // estos console.log solo los podemos ver en la terminal de next
  const url = `http://localhost:1337/blogs/${id}`
  const respuesta = await fetch(url)
  const data = await respuesta.json()
  // console.log(data)

  return{
    props: {
      data
    }
  }
}

export default EntradaBlog