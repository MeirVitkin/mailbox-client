import styles from './style.module.css';
import { MdAvTimer } from "react-icons/md";
import { MdOutlineCheckBox } from "react-icons/md";
import { GoEye } from "react-icons/go";
import { IoMdContacts } from "react-icons/io";
import { VscGraph } from "react-icons/vsc";
import { IoVideocam } from "react-icons/io5";

const NvaMainIcons = [<MdAvTimer/>,<MdOutlineCheckBox/>,<GoEye/>,<IoMdContacts/>,<VscGraph/>,<IoVideocam/>,]

export const NavMain = () => {
  return (
    <div className={styles.container}>
        <div ><img className={styles.logo} src='./public/logo-mail-box.png' /></div>
        <nav >
          <ul className={styles.iconsContainer}>
            {NvaMainIcons.map((icon, index) =>(
                <li key={index} > <a title= 'link' href="/login"> <div className={styles.icon}>{icon}</div> </a> </li>
                ))}
          </ul>
        </nav>
        <div ><img className={styles.img} src='./public/vite.svg' /></div>
    </div>
  )
}
