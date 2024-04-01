import styles from './style.module.css'
import { BiSolidShare } from "react-icons/bi";


export const MsgLi = ({ msg, user }) => {
  const { mail } = user
  const { from,content}=msg
  const isRecive = from == mail
  return (
    <>
    <div className={styles.container}>
      {isRecive ? (<>
        <div className={styles.img}><img src="./vite.svg" alt="" /></div>
        <div className={styles.content} >
          <h3>Jessica Koel</h3>
        </div></>) : <><BiSolidShare className={styles.svg} /> <h3>you</h3></> }

      <p className={styles.text}> {content} </p>
      <p>27/11/2023</p>
      <p>11:34</p>
    </div>
      <div className={styles.line}></div>
    </>
  )
}
