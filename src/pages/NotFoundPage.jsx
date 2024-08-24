import { Link } from "react-router-dom";
import NotFound from "../assets/404.png";
import styles from "./NotFound.module.css";
import useLanguage from "../hooks/useLanguage";

export default function NotFoundPage() {
  const text = useLanguage('app')
  return (
    <main className={styles.main}>
      <img className={styles.boxImage} width="500px" src={NotFound} />
      <h1 className={styles.title}></h1>
      <p className={styles.paragraph}>
        {text.messagePageNotFound} {' '}
        <Link className={styles.link} to="/">
          {text.homepage}
        </Link>
        .
      </p>
    </main>
  );
}
