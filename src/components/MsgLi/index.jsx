import { useState } from 'react';
import styles from './style.module.css'
import { BiSolidShare } from "react-icons/bi";


export const MsgLi = ({ msg, user }) => {
  const [expand, setExpand] = useState(false);
  const { mail } = user
  const { from, content } = msg
  const isRecive = from == mail


  return (
    <>
      <div onClick={() => setExpand(prev => !prev)} className={`${styles.container} ${expand ? styles.expandedContainer : ''}`}>
        <div className={ styles.headerContainer}>
          {isRecive ? (<>
            <div className={styles.img}><img src="./vite.svg" alt="" /></div>
            <div className={styles.content} >
              <h3>Jessica Koel</h3>
            </div></>) : <><BiSolidShare className={styles.svg} /> <h3>you</h3></>}

          <p className={styles.text}> {!expand && (content)} </p>
          <p>27/11/2023</p>
          <p>11:34</p>
        </div>

      <p className={styles.textExpand}> {expand && (content)} </p>
      </div>
    </>

  )
}
