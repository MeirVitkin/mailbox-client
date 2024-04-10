import styles from './style.module.css'
import { TiStarFullOutline } from "react-icons/ti";
import { MdEmail } from "react-icons/md";
import { useState } from 'react';
import { NavLink } from 'react-router-dom';


export const EmailLi = ({ chat }) => {
    const hesNotification = !chat.isRead;
    const [isFavorite, setIsFavorite] = useState(chat.isFavorite || false);
    const className = (isFavorite ? "favorite" : "not-favorite");
    const numOfMembers = chat.chat.members.length;

    const handelFavoriteBtn = () => setIsFavorite(!isFavorite);


    return (
        <NavLink to={chat.chat._id} state={chat} className={styles.container}  >
            <img className={styles.img} src={chat.chat.members[numOfMembers - 1].avatar} alt="" />
            <div className={styles.content} >
                <h3>{ chat.chat.members[numOfMembers - 1].fullName } + {numOfMembers-1}</h3>
                <p className={styles.text}> {chat.chat.subject} </p>
            </div>
            <div className={styles.timeAndBadgeContainor} >
                <p>11:34</p>
                {hesNotification ? (<div className={styles.svg}><MdEmail/></div>) : (
                    <button onClick={handelFavoriteBtn}><TiStarFullOutline className={styles[className]} />
                    </button>
                )}
            </div>
        </NavLink>
    )
}
