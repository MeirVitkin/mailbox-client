import { IoTrash } from "react-icons/io5";
import { IoMdMore } from "react-icons/io";
import styles from "./style.module.css"
import DataContext from '../../dataContext/UseContex';
import {useContext} from 'react'
import { Popup } from "../Popup";



export const TrashBtn = () => {
  const { setPopup,popup,setPopupValue } = useContext(DataContext);

  return (
    <div className={styles.container}>
    
      <div className={styles.trash} onClick={ ()=> {setPopup(true)
         setPopupValue(<TrashBtn/>) } }>  <IoTrash /></div>
      <div className={styles.more}><IoMdMore /></div>
    </div>
  )
}



