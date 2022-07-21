import Guitarra from "./Guitarra";
import styles from '../styles/Listado.module.css'
const Listado = ({ guitarras }) => {
  return (
    <div className={styles.listado}>
      {guitarras.map(guitarra => (
        <Guitarra
          guitarra={guitarra}
          key={guitarra.url}
        />
      ))}
    </div>
  )
};

export default Listado;
