import { IoTrash } from "react-icons/io5";
import { IoMdMore } from "react-icons/io";
import styles from "./style.module.css"
import DataContext from '../../dataContext/UseContex';
import {useContext} from 'react'
import { DeleteConfirm } from "../DeleteConfirm";



export const TrashBtn = () => {
  const { setPopup } = useContext(DataContext);

  return (
    <div className={styles.container}>
      <div className={styles.trash} onClick={ ()=> {setPopup(<DeleteConfirm/>)
         setPopupValue(<TrashBtn/>) } }>  <IoTrash /></div>
      <div className={styles.more}><IoMdMore /></div>
    </div>
  )
}



