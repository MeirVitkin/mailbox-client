import { useContext, useState } from 'react'
import Styles from './style.module.css'
import DataContext from '../../dataContext/UseContex';

export const Popup = () => {
    const { setPopup, popup } = useContext(DataContext);
    console.log(popup);
    return (
        <div className={Styles.Container} onClick={() => { setPopup(false) }}>
            <div className={Styles.popupContent} onClick={(e) => e.stopPropagation()}>
                {popup}
            </div>
        </div>
    )
}