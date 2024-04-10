import { useState } from 'react';
import styles from './style.module.css'
import { BiSolidShare } from "react-icons/bi";

let user = {_id: "6614e0b92018f4d5b33dd95d", email: "user1@example.com"};

export const MsgLi = ({ msg, members }) => {
  const [expand, setExpand] = useState(false);
  const { from, content } = msg
  const isRecive = from !== user._id;
  const sender = members.find(member => member._id === from);
  const messageDate = new Date(msg.date);
  const dateString = messageDate.toLocaleDateString();
  const hours = messageDate.getHours();
  const minutes = messageDate.getMinutes();
  const timeString = `${hours}:${minutes < 10 ? '0' : ''}${minutes}`;



  return (
    <>
      <div onClick={() => setExpand(prev => !prev)} className={`${styles.container} ${expand ? styles.expandedContainer : ''}`}>
        <div className={styles.headerContainer}>
          {isRecive ? (<>
            <img className={styles.img} src={sender.avatar} alt="" />
            <div className={styles.content} >
              <h3>{ sender.fullName}</h3>
            </div></>) : <><BiSolidShare className={styles.svg} /> <h3>you</h3></>}

          <p className={styles.text}> {!expand && (content)} </p>
          <p> {dateString} </p>
          <p>{timeString}</p>
        </div>

        <p className={styles.textExpand}> {expand && (content)} </p>
      </div>
    </>

  )
}
