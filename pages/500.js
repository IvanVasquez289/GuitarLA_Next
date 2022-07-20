import styles from "../styles/NoEncontrado.module.css";
export default function Custom500({ error }) {
  console.log("Desde la pagina 500.js");
  console.log(error);
  return (
    <div className={styles.no_encontrado}>
      <h1 className="heading">Pagina No Encontrada</h1>
      <Link href="/">Volver al inicio</Link>
    </div>
  );
}
