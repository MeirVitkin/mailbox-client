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
import { Outlet } from 'react-router';
import { NavLink } from 'react-router-dom';


const NavIcons = [{ icon: <HiInboxIn />, name: "inbox" },
{ icon: <IoIosSend />, name: "Sent Emails" },
{ icon: <TiStarFullOutline />, name: "Favorite" },
{ icon: <BiSolidPencil />, name: "Draft" },
{ icon: <MdDeleteForever />, name: "Deleted" },
{ icon: <MdExpandMore />, name: "More" }
]

export const EmailsNav = () => {
    return (
        <>
            <div className={styles.container}  >
                <Logo />
                <div className={styles.mewMsg}  ><a title='link' href="/login"><NewMsgBtn /> </a></div>
                <nav>
                    <ul>
                        {NavIcons.map((icon, index) => (
                            <li key={index}>
                                <NavLink to={icon.name}><NavLi iconObj={icon} /> </NavLink>
                            </li>
                        ))}
                    </ul>
                </nav>
            </div>
        </>
    )
}
