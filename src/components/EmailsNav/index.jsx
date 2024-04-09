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
import { axiosReq } from '../../functions/axiosReq';

import { NavLink } from 'react-router-dom';
import { useEffect, useState } from 'react';


const NavIcons = [{ icon: <HiInboxIn />, name: "inbox" },
{ icon: <IoIosSend />, name: "send" },
{ icon: <TiStarFullOutline />, name: "Favorite" },
{ icon: <BiSolidPencil />, name: "Draft" },
{ icon: <MdDeleteForever />, name: "Deleted" },
{ icon: <MdExpandMore />, name: "More" }
]

export const EmailsNav = () => {

    const [notifications, setNotifications] = useState({});

    const fechNotifications = async()=>{
        const data = await axiosReq({ method:'GET',url:'chat/notifications'})
        setNotifications(data)
    }
    useEffect(() => {
      fechNotifications();
    }, [])
    
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
                                <NavLi iconObj={icon} notifications={notifications} />
                            </NavLink>
                        ))}
                    </ul>
                </nav>
            </div>
        </>
    )
}
