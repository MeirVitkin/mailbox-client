import styles from './style.module.css';
import { MdAvTimer } from "react-icons/md";
import { MdOutlineCheckBox } from "react-icons/md";
import { GoEye } from "react-icons/go";
import { IoMdContacts } from "react-icons/io";
import { VscGraph } from "react-icons/vsc";
import { IoVideocam } from "react-icons/io5";
import { NavLink } from 'react-router-dom';

const NavMainIconsObj = [{ icon: <MdAvTimer />, title: 'timer' },
{ icon: <MdOutlineCheckBox />, title: 'task' },
{ icon: <GoEye />, title: 'eye' },
{ icon: <IoMdContacts />, title: 'messages' },
{ icon: <VscGraph />, title: 'graph' }, { icon: <IoVideocam />, title: 'video' },]

export const NavMain = () => {
  return (
    <div className={styles.container}>
      <div ><img className={styles.logo} src='../logo-mail-box.png' /></div>
      <nav >
        <ul className={styles.iconsContainer}>
          {NavMainIconsObj.map((iconObj, index) => (
              <NavLink key={index}
               to={iconObj.title} 
               className={ ({isActive})=> { return  `${styles.icon}  ${isActive ? styles.active : ''} `} }>
                <li >{iconObj.icon}</li>
              </NavLink> 
          ))}
        </ul>
      </nav>
      <div ><img className={styles.img} src='./vite.svg' /></div>
    </div>
  )
}
