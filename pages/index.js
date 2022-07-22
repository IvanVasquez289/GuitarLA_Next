import Layout from "../components/Layout";
import Listado from "../components/Listado";
import Curso from "../components/Curso";
import ListadoBlog from "../components/ListadoBlog";

export default function Home({guitarras, curso, entradas}) {
  console.log(entradas)
  return (
    <Layout
      pagina='GuitarLA - Inicio'
      guitarra = {guitarras[3]}
    >
      <main className="contenedor">
        <h1 className="heading">Nuestra coleccion</h1>
        <Listado
          guitarras={guitarras}
        />
      </main>

      <Curso
        curso={curso}
      />

      <section className="contenedor">
        <ListadoBlog
          entradas={entradas}
        />
      </section>
      
    </Layout>
  );
}

export async function getServerSideProps(){

  // const url = `${process.env.API_URL}/guitarras`
  // const respuesta = await fetch(url)
  // const guitarras = await respuesta.json()

  // const url = `${process.env.API_URL}/seccion-cursos`
  // const respuesta = await fetch(url)
  // const cursos = await respuesta.json()

  // Podemos hacerlo de una manera donde se llamen simultaneamente
  const urlGuitarras = `${process.env.API_URL}/guitarras`
  const urlCursos = `${process.env.API_URL}/seccion-cursos`
  const urlBlog = `${process.env.API_URL}/blogs?_limit=3&_sort=createdAt:desc`

  const [resGuitarras, resCursos, resBlog] =  await Promise.all([ fetch(urlGuitarras), fetch(urlCursos), fetch(urlBlog) ])
  const [guitarras, curso, entradas] = await Promise.all([ resGuitarras.json(), resCursos.json(), resBlog.json() ])



  console.log(guitarras)
  return{
    props: {
      guitarras,
      curso,
      entradas
    }
  }
}