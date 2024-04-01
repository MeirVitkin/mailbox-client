import styles from './style.module.css'
import { Badge } from '../Badge'
import { TiStarFullOutline } from "react-icons/ti";
import { useState } from 'react';

export const EmailLi = ({ email }) => {
    const hesNotification = !email.isRead;
    const {subject}= email.email;
    const [isFavorite, setIsFavorite] = useState(email.isFavorite);
    const className = (isFavorite ? "favorite" : "not-favorite")

    const handelFavoriteBtn = () => {
        setIsFavorite(!isFavorite);
    }

    return (
        <div className={styles.container}  >
            <div className={styles.img}><img src="./vite.svg" alt="" /></div>
            <div className={styles.content} >
                <h3>Jessica Koel</h3>
                <p> {subject} </p>
            </div>
            <div className={styles.timeAndBadgeContainor} >
                                    <p>11:34</p>
                {hesNotification ? (<div className={styles.badge}><Badge>1</Badge></div>) : (

                                    <button onClick={handelFavoriteBtn}><TiStarFullOutline className={styles[className]} />
                    </button>
                )}



            </div>
        </div>
    )
}
