import { useContext, useState } from 'react'
import Styles from './style.module.css'
import DataContext from '../../dataContext/UseContex';

export const Popup = () => {
    const { setPopup, popup, popupValue } = useContext(DataContext);
    console.log(popup);
    return (
        <div className={Styles.Container} onClick={() => { setPopup(!popup) }}>
            <div className={Styles.popupContent} onClick={(e) => e.stopPropagation()}>
                <div className={Styles.close} onClick={() => { setPopup(!popup) }}>x</div>
            </div>
        </div>
    )
}