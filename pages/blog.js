// import { useEffect } from "react";
import Layout from "../components/Layout";
import ListadoBlog from "../components/ListadoBlog";

const Blog = ({entradas}) => {
  // no consumiremos la api de esta forma, sino como se indica abajo
  // useEffect(() => {
  //   const consultarApi = async ()=>{
  //     try {
  //       const url = 'http://localhost:1337/blogs'
  //       const respuesta = await fetch(url)
  //       const data = await respuesta.json()
  //       console.log(data)
        
  //     } catch (error) {
  //       console.log(error)
  //     }
  //   }

  //   consultarApi()
  // }, [])
  
  // console.log(data)

  return (
    <Layout
     pagina='GuitarLA - Blog'
    >
      <main className="contenedor">
        <ListadoBlog
          entradas={entradas}
        />
      </main>
    </Layout>
  );
};

export async function getStaticProps(){

  const url = `${process.env.API_URL}/blogs?_sort=createdAt:desc`
  console.log(url)
  const respuesta = await fetch(url)
  const entradas = await respuesta.json()

  console.log(entradas)

  return{
    props: {
      entradas
    }
  }
}

export default Blog;