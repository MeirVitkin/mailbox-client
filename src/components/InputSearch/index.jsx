import { useState } from 'react';
import styles from './style.module.css';
import { FiSearch } from "react-icons/fi";

export const InputSearch = ({hendalSearch}) => {

 
  return (
    <div className={styles.container}>
      <input className={styles.input}  onChange={(e)=>hendalSearch(e.target.value)} placeholder='Search'/> 
      <div><FiSearch className={styles.svg}  /> </div>
    </div>
  )
}
