import styles from './style.module.css';
import { FiSearch } from "react-icons/fi";

export const InputSearch = () => {
  return (
    <div className={styles.container}>
      <input className={styles.input} placeholder='Search'/> 
      <div><FiSearch className={styles.svg} /> </div>
    </div>
  )
}
