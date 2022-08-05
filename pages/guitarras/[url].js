import { useState } from "react";
import Image from "next/image";
import styles from "../../styles/Guitarra.module.css";
import Layout from "../../components/Layout";
const Producto = ({ guitarra, isNewProduct }) => {

  const [cantidad, setCantidad] = useState(1);
  const { descripcion, imagen, nombre, precio,id } = guitarra[0];

  const handleSubmit = (e) => {
    e.preventDefault();

    if(cantidad < 1 ) return alert('Cantidad no valida')

    const guitarraSeleccionada = {
        id,
        imagen: imagen[0].url,
        nombre,
        precio,
        cantidad
    }

    isNewProduct(guitarraSeleccionada);
  };

  return (
    <Layout pagina={`GuitarLA - Guitarra ${nombre}`}>
      <div className={styles.guitarra}>
        <Image
          layout="responsive"
          width={150}
          height={350}
          src={imagen[0].url}
          alt={`imagen guitarra ${nombre}`}
        />
        <div className={styles.contenido}>
          <h3>{nombre}</h3>
          <p className={styles.descripcion}> {descripcion} </p>
          <p className={styles.precio}> ${precio} </p>

          <form className={styles.formulario} onSubmit={handleSubmit}>
            <label>Cantidad:</label>
            <select
                value={cantidad}
                onChange= { e => setCantidad(parseInt(e.target.value))}
            >
              <option value="0">--Seleccione--</option>
              <option value="1">1</option>
              <option value="2">2</option>
              <option value="3">3</option>
              <option value="4">4</option>
              <option value="5">5</option>
              <option value="6">6</option>
              <option value="7">7</option>
            </select>

            <input type="submit" value="Agregar al carrito" />
          </form>
        </div>
      </div>
    </Layout>
  );
};

// Para poder leer la url http://localhost:3000/guitarras/holly por ejemplo, le tenemos que pasar el nombre del archivo
// en este caso [url] entonces le pasamos url
export async function getServerSideProps({ query: { url } }) {
  console.log(url);

  const urlGuitarra = `${process.env.API_URL}/guitarras?url=${url}`;
  const respuesta = await fetch(urlGuitarra);
  const guitarra = await respuesta.json();

  // nos da como respuesta un array y dentro el obj, por eso ponemos  [0] para acceder al obj
  // console.log(guitarra[0])
  return {
    props: {
      guitarra,
    },
  };
}

export default Producto;
