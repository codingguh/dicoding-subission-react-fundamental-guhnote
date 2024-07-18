import { Link } from "react-router-dom";
import Empty from "../../../assets/empty.png";
import styles from "./empty.module.css";
const EmptyNotes = () => {
  return (
    <div className={styles.boxEmpty}>
      <img className={styles.boxImage} width="400px" src={Empty} />
      <p className={styles.paragraph}>
        No data available {' '}
        <Link className={styles.link} to="/">
          add now
        </Link>
        
        .
      </p>
    </div>
  )
}

export default EmptyNotes
