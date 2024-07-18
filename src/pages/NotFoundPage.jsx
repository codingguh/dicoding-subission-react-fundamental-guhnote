import { Link } from "react-router-dom";
import NotFound from "../assets/404.png";
import styles from "./NotFound.module.css";
export default function NotFoundPage() {
  return (
    <main className={styles.main}>
      <img className={styles.boxImage} width="500px" src={NotFound} />
      <h1 className={styles.title}>Oops, an error occurred!</h1>
      <p className={styles.paragraph}>
        The page you are looking for was not found. Please return to {' '}
        <Link className={styles.link} to="/">
          homepage
        </Link>
        .
      </p>
    </main>
  );
}
