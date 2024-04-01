import { IoChevronBackSharp } from "react-icons/io5";
import styles from './style.module.css'


export const Logo = () => {
    return (
        <div className={styles.container} >
        <div className={styles.backBtn} >
          <IoChevronBackSharp />
        </div>
        <div className={styles.logo}>Mailbox</div>
      </div>
      )
}