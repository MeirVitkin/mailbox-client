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
{ icon: <IoIosSend />, name: "Sent" },
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
                <div className={styles.mewMsg}  ><NavLink title='newMessage' to="newMessage"><NewMsgBtn /> </NavLink></div>
                <nav>
                    <ul>
                        {NavIcons.map((icon, index) => (
                            <NavLink
                                to={icon.name}
                                key={index}
                                className={({ isActive }) => isActive ? styles.active : ''}>
                                <NavLi iconObj={icon} />
                            </NavLink>
                        ))}
                    </ul>
                </nav>
            </div>
        </>
    )
}
