import styles from './style.module.css';
import { TbMailFilled } from "react-icons/tb";
export const NewMsgBtn = () => {
  return (
    <div className={styles.container}>
      <TbMailFilled className={styles.svg} />
      <span>New Mssage</span>
    </div>


  )
}
