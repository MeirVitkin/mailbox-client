import styles from './style.module.css';
import { IoIosSend } from "react-icons/io";
export const SendBtn = () => {
  return (
    <div className={styles.container}> <span>Send</span><IoIosSend className={styles.svg} />  </div>
  )
}
