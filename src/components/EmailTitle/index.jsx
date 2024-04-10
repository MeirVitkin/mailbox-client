import styles from './style.module.css'

export const EmailTitle = ({ chat }) => {
  console.log( 'emailtitle', chat);
  const { subject, lastDate } = chat;
  const messageDate = new Date(lastDate);
  const dateString = messageDate.toLocaleDateString();
  // const hours = messageDate.getHours();
  // const minutes = messageDate.getMinutes();
  // const timeString = `${hours}:${minutes < 10 ? '0' : ''}${minutes}`;

  return (
    <div className={styles.container}  >
      <span className={styles.date}>{`${dateString}`}</span>
      <h3 className={styles.text}> {subject} </h3>
    </div>
  )
}
