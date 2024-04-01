import { Badge } from '../Badge';
import styles from './style.module.css';

export const NavLi = ({iconObj,notifications}) => {
    const{icon, name} = iconObj
  return (
    <div className={styles.container}>
        <div className={styles.icon}>{icon}</div>
        <div className={styles.text}>{name}</div>
        {notifications&&(
            <Badge>1</Badge> 
        )}
    </div>
  )
}
