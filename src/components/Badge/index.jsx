import styles from './style.module.css'
export const Badge = ({children}) => {

  return (
    <p className={styles.container}>
        {children}
    </p>
  )
}
