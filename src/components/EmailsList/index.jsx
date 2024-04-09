import React, { useEffect, useState } from 'react'
import styles from './style.module.css'
import { EmailLi } from '../EmailLi'
import { InputSearch } from '../InputSearch'
import { axiosReq } from '../../functions/axiosReq';

import { useParams } from 'react-router';
const obj = [
    {
        "chat": {
            "_id": "6614e0ba2018f4d5b33dd96a",
            "subject": "Hello, how are you?",
            "msg": [
                {
                    "from": "6614e0b92018f4d5b33dd95f",
                    "date": "2024-03-21T10:00:00.000Z",
                    "content": "Greeting and you??",
                    "_id": "6614e0ba2018f4d5b33dd96b"
                },
                {
                    "from": "6614e0b92018f4d5b33dd95d",
                    "date": "2024-03-21T10:08:00.000Z",
                    "content": "Fine, and you?",
                    "_id": "6614e0ba2018f4d5b33dd96c"
                },
                {
                    "from": "6614e0b92018f4d5b33dd968",
                    "date": "2024-03-21T10:24:00.000Z",
                    "content": "Walla Sababa !!",
                    "_id": "6614e0ba2018f4d5b33dd96d"
                }
            ],
            "members": [
                {
                    "_id": "6614e0b92018f4d5b33dd95d",
                    "fullName": "Moshe Cohen",
                    "avatar": "https://avataaars.io/?avatarStyle=Circle&topType=ShortHairTheCaesar&accessoriesType=Sunglasses&hairColor=Auburn&facialHairType=Blank&clotheType=BlazerShirt&eyeType=Side&eyebrowType=RaisedExcitedNatural&mouthType=Smile&skinColor=Yellow"
                },
                {
                    "_id": "6614e0b92018f4d5b33dd95f",
                    "fullName": "Haim Levi",
                    "avatar": "https://avataaars.io/?avatarStyle=Circle&topType=LongHairFro&accessoriesType=Kurt&hairColor=SilverGray&facialHairType=BeardMedium&facialHairColor=BrownDark&clotheType=BlazerShirt&eyeType=Wink&eyebrowType=RaisedExcitedNatural&mouthType=Sad&skinColor=Light"
                },
                {
                    "_id": "6614e0b92018f4d5b33dd963",
                    "fullName": "Sivan Tov",
                    "avatar": "https://avataaars.io/?avatarStyle=Circle&topType=LongHairStraight&accessoriesType=Blank&hairColor=BrownDark&facialHairType=Blank&clotheType=BlazerShirt&eyeType=Default&eyebrowType=Default&mouthType=Default&skinColor=Light"
                },
                {
                    "_id": "6614e0b92018f4d5b33dd968",
                    "fullName": "Smadar Omer",
                    "avatar": "https://avataaars.io/?avatarStyle=Circle&topType=LongHairNotTooLong&accessoriesType=Blank&hairColor=Blonde&facialHairType=Blank&clotheType=ShirtScoopNeck&clotheColor=PastelGreen&eyeType=Wink&eyebrowType=RaisedExcitedNatural&mouthType=Smile&skinColor=Tanned"
                }
            ],
            "lastDate": "2024-03-21T10:24:00.000Z",
            "__v": 0
        },
        "isRecieved": true,
        "isRead": false,
        "labels": [],
        "_id": "6614e0ba2018f4d5b33dd971"
    }
]
//const [{chat}] = obj;



export const EmailsList = () => {
    const {emailType}=useParams();
    const [emailList, setEmailList] = useState([])
    const fechData = async()=>{
      const chat= await  axiosReq({ method : 'GET', url:`chat/${emailType}` })
      setEmailList(chat);
      console.log(chat );
    }
    useEffect(()=>{
        fechData();
    },[])

        const hendalSearch = (value) => {
            const filteredEmails = emailList.filter(email => email.chat.subject.toLowerCase().includes(value.toLowerCase()) || email.chat.lastDate.includes(value));
            setEmailList(filteredEmails);
        }
        



    return (
        <>
            <div className={styles.contaner} >
                <div className={styles.inputSearch}> <InputSearch hendalSearch={hendalSearch} /> </div>
                <div className={styles.emailsList}>
                    {emailList.map((chat, i) => (<EmailLi chat={chat} key={i} />))}
                </div>
            </div>
        </>
    )
}
