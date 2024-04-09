import styles from './style.module.css'
import { Badge } from '../Badge'
import { TiStarFullOutline } from "react-icons/ti";
import { useState } from 'react';
import { NavLink } from 'react-router-dom';
let obj = {
    "chat": {
        "_id": "6614e0bc2018f4d5b33dd996",
        "subject": "New Feature Discussion",
        "msg": [
            {
                "from": "6614e0b92018f4d5b33dd95d",
                "date": "2024-04-08T13:00:00.000Z",
                "content": "I have some ideas for a new feature. Can we discuss?",
                "_id": "6614e0bc2018f4d5b33dd997"
            },
            {
                "from": "6614e0b92018f4d5b33dd961",
                "date": "2024-04-08T13:15:00.000Z",
                "content": "Sure! Let's schedule a meeting to brainstorm.",
                "_id": "6614e0bc2018f4d5b33dd998"
            },
            {
                "from": "6614e0b92018f4d5b33dd963",
                "date": "2024-04-08T13:30:00.000Z",
                "content": "Count me in! I'm excited to hear your ideas.",
                "_id": "6614e0bc2018f4d5b33dd999"
            }
        ],
        "members": [
            {
                "_id": "6614e0b92018f4d5b33dd95d",
                "fullName": "Moshe Cohen",
                "avatar": "https://avataaars.io/?avatarStyle=Circle&topType=ShortHairTheCaesar&accessoriesType=Sunglasses&hairColor=Auburn&facialHairType=Blank&clotheType=BlazerShirt&eyeType=Side&eyebrowType=RaisedExcitedNatural&mouthType=Smile&skinColor=Yellow"
            },
            {
                "_id": "6614e0b92018f4d5b33dd961",
                "fullName": "Mor Noam",
                "avatar": "https://avataaars.io/?avatarStyle=Circle&topType=WinterHat2&accessoriesType=Prescription01&hatColor=PastelGreen&facialHairType=MoustacheFancy&facialHairColor=BrownDark&clotheType=BlazerShirt&eyeType=Default&eyebrowType=Default&mouthType=Default&skinColor=Light"
            },
            {
                "_id": "6614e0b92018f4d5b33dd963",
                "fullName": "Sivan Tov",
                "avatar": "https://avataaars.io/?avatarStyle=Circle&topType=LongHairStraight&accessoriesType=Blank&hairColor=BrownDark&facialHairType=Blank&clotheType=BlazerShirt&eyeType=Default&eyebrowType=Default&mouthType=Default&skinColor=Light"
            }
        ],
        "lastDate": "2024-04-08T13:30:00.000Z",
        "__v": 0
    },
    "isSent": true,
    "isRecieved": false,
    "isRead": false,
    "labels": [],
    "_id": "6614e0bc2018f4d5b33dd99c"
}

export const EmailLi = ({ chat }) => {
    console.log(chat);
    const hesNotification = !chat.isRead;
    const [isFavorite, setIsFavorite] = useState(chat.isFavorite || false);
    const className = (isFavorite ? "favorite" : "not-favorite");
    const numOfMembers = chat.chat.members.length;

    const handelFavoriteBtn = () => setIsFavorite(!isFavorite);


    return (
        <NavLink to={chat.chat._id} className={styles.container}  >
            <img className={styles.img} src={chat.chat.members[numOfMembers - 1].avatar} alt="" />
            <div className={styles.content} >
                <h3>{ chat.chat.members[numOfMembers - 1].fullName } + {numOfMembers-1}</h3>
                <p className={styles.text}> {chat.chat.subject} </p>
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
