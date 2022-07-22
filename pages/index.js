import Layout from "../components/Layout";
import Listado from "../components/Listado";

export default function Home({guitarras, curso}) {
  console.log(guitarras)
  console.log(curso)
  return (
    <Layout
      pagina='GuitarLA - Inicio'
    >
      <main className="contenedor">
        <h1 className="heading">Nuestra coleccion</h1>
        <Listado
          guitarras={guitarras}
        />
      </main>
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

  const [resGuitarras, resCursos] =  await Promise.all([ fetch(urlGuitarras), fetch(urlCursos) ])
  const [guitarras, curso] = await Promise.all([ resGuitarras.json(), resCursos.json() ])



  console.log(guitarras)
  return{
    props: {
      guitarras,
      curso
    }
  }
}