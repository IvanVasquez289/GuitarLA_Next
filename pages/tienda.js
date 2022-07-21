import Layout from "../components/Layout";
import Listado from "../components/Listado";

const Tienda = ({guitarras}) => {
  console.log(guitarras)
  return (
    <Layout
     pagina='GuitarLA - Tienda'
    >
      <main className="contenedor">
        <h1 className="heading">Nuestra Colleccion</h1>
        <Listado
          guitarras={guitarras}
        />
      </main>
    </Layout>
  );
};

export async function getServerSideProps(){

  const url = `${process.env.API_URL}/guitarras?_sort=createdAt:desc`
  const respuesta = await fetch(url)
  const guitarras = await respuesta.json()

  console.log(guitarras)
  return{
    props: {
      guitarras
    }
  }
}

export default Tienda;