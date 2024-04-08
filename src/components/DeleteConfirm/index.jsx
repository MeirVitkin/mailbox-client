import React, { useContext } from 'react'
import styles from './style.module.css'
import DataContext from '../../dataContext/UseContex'

export const DeleteConfirm = ()=> {
    const {setPopup} = useContext(DataContext);
  return (
    <div className={styles.container}>
        <h1>Are you sure you went to<br/> delete this message?</h1>
    <div  className={styles.buttons}>
    <button className={`${styles.button} ${styles.confirmButton}`}>Confirm</button>
  
 
  <button className={`${styles.button} ${styles.cancelButton}`} onClick={()=>setPopup(false)}>Cancel</button>
    </div>
    
    </div>
  )
}
