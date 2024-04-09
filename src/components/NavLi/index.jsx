import { useEffect, useState } from 'react';
import { Badge } from '../Badge';
import styles from './style.module.css';


export const NavLi = ({ iconObj, notifications={} }) => {
  const { icon, name } = iconObj
  const [hesNotifications, setHesNotifications] = useState();
  useEffect(()=>{
    setHesNotifications(notifications[name]);
  })
  return (
    <div className={styles.container}>
      <div className={styles.icon}>{icon}</div>
      <div className={styles.text}>{name}</div>
      {hesNotifications > 0 && (
        <Badge>{hesNotifications}</Badge>
      )}
    </div>
  )
}
