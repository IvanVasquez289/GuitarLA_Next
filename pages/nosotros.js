import Layout from "../components/Layout";
import Image from "next/image";
import styles from '../styles/Nosotros.module.css'
const Nosotros = () => {
  return (
    <Layout
     pagina='GuitarLA - Nosotros'
    >
      <main className="contenedor">
        <h2 className="heading">Nosotros</h2>
        <div className={styles.contenido}>
          <Image layout='responsive' width={600} height={450} src='/img/nosotros.jpg' alt="imagen sobre nosotros" />
          <div>
            <p>
              Praesent bibendum posuere vulputate. Cras felis arcu, consequat ut eros mattis, iaculis sollicitudin elit. Etiam dignissim justo et vulputate eleifend. Nullam varius lectus id dolor varius, lobortis lobortis eros tempor. Integer nec dui gravida, venenatis elit eu, convallis ex. Suspendisse dictum, enim 
            </p>
            <p>
              Praesent bibendum posuere vulputate. Cras felis arcu, consequat ut eros mattis, iaculis sollicitudin elit. Etiam dignissim justo et vulputate eleifend. Nullam varius lectus id dolor varius, lobortis lobortis eros tempor. Integer nec dui gravida, venenatis elit eu, convallis ex. Suspendisse dictum, enim in pellentesque porta, arcu tortor semper nisl, porttitor finibus lectus lectus auctor neque. Proin quam dolor, pharetra nec diam sit amet, gravida mattis sapien. 
            </p>
          </div>
        </div>
      </main>
    </Layout>
  ); 
};

export default Nosotros;
