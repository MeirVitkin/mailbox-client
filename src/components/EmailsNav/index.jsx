import styles from './style.module.css';
import { NewMsgBtn } from '../NewMsgBtn'
import { NavLi } from '../NavLi'
import { Logo } from "../Logo";


import { HiInboxIn } from "react-icons/hi";
import { IoIosSend } from "react-icons/io";
import { TiStarFullOutline } from "react-icons/ti";
import { MdDeleteForever } from "react-icons/md";
import { BiSolidPencil } from "react-icons/bi";
import { MdExpandMore } from "react-icons/md";


const NavIcons = [{ icon: <HiInboxIn />, name: "inbox" },
{ icon: <IoIosSend />, name: "Sent Emails" },
{ icon: <TiStarFullOutline />, name: "Favorite" },
{ icon: <BiSolidPencil />, name: "Draft" },
{ icon: <MdDeleteForever />, name: "Deleted" },
{ icon: <MdExpandMore />, name: "More" }
]

export const EmailNav = () => {
    return (
            <div className={styles.container}  >
                <Logo />
                <div className={styles.mewMsg}  ><a title='link' href="/login"><NewMsgBtn /> </a></div>
                <nav>
                    <ul>
                        {NavIcons.map((icon, index) => (
                            <li> <a title='link' href="/login"><NavLi key={index} iconObj={icon} /> </a> </li>
                        ))}
                    </ul>
                </nav>
            </div>
    )
}