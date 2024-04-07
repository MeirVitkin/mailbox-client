import styles from './style.module.css'
import { Badge } from '../Badge'
import { TiStarFullOutline } from "react-icons/ti";
import { useState } from 'react';
import { NavLink } from 'react-router-dom';

export const EmailLi = ({ email }) => {
    const hesNotification = !email.isRead;
    const { subject } = email.email;
    const [isFavorite, setIsFavorite] = useState(email.isFavorite);
    const className = (isFavorite ? "favorite" : "not-favorite")

    const handelFavoriteBtn = () =>  setIsFavorite(!isFavorite);
    

    return (
        <NavLink to={email.email._id} className={styles.container}  >
            <img className={styles.img} src="https://akm-img-a-in.tosshub.com/indiatoday/images/story/media_bank/202309/elon-musk-252648408-16x9.jpg?VersionId=9KYZpqpoY3WvH8eVZg54mmkpTGfvPCWj&size=690:388" alt="" />
            <div className={styles.content} >
                <h3>Jessica Koel</h3>
                <p className={styles.text}> {subject} </p>
            </div>
            <div className={styles.timeAndBadgeContainor} >
                <p>11:34</p>
                {hesNotification ? (<div className={styles.badge}><Badge>1</Badge></div>) : (
                    <button onClick={handelFavoriteBtn}><TiStarFullOutline className={styles[className]} />
                    </button>
                )}
            </div>
        </NavLink>
    )
}
