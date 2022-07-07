// import { useEffect } from "react";
import Layout from "../components/Layout";
import Entrada from "../components/Entrada";
import styles from '../styles/Blog.module.css'

const Blog = ({data}) => {
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
  const url = `${process.env.NEXT_PUBLIC_API_URL}/blogs`
  console.log(url)
  return (
    <Layout
     pagina='GuitarLA - Blog'
    >
      <main className="contenedor">
        <h2 className="heading">Blog</h2>
        <div className={styles.blog}>
          {data.map(entrada => (
            <Entrada
              key={entrada.id}
              entrada = {entrada}
            />
          ))}
        </div>
      </main>
    </Layout>
  );
};

export async function getServerSideProps(){

  const url = `${process.env.API_URL}/blogs`
  console.log(url)
  const respuesta = await fetch(url)
  const data = await respuesta.json()

  console.log(data)

  return{
    props: {
      data
    }
  }
}

export default Blog;