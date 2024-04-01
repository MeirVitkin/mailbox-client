import styles from './style.module.css'

export const EmailTitle = ({ email }) => {
  const { subject, lastDate } = email;
  return (
    <div className={styles.container}  >
      <span className={styles.date}>{lastDate}</span>
      <h3 className={styles.text}> {subject} </h3>
    </div>
  )
}
