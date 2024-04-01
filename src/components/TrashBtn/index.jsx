import React from 'react'
import { IoTrash } from "react-icons/io5";
import { IoMdMore } from "react-icons/io";
import styles from "./style.module.css"


export const TrashBtn = () => {
  return (
    <div className={styles.container}>
<div className={styles.trash}>  <IoTrash /></div>      
<div className={styles.more}><IoMdMore /></div>
  
    </div>
  )
}



