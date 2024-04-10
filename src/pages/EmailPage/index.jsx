import { useLocation, useParams } from 'react-router';
import { EmailTitle } from '../../components/EmailTitle';
import { MsgLi } from '../../components/MsgLi';
import { SendBtn } from '../../components/SendBtn';
import { TextArae } from '../../components/TexArea';
import { TrashBtn } from '../../components/TrashBtn';
import styles from './style.module.css';


export const EmailPage = () => {
    const location = useLocation();
    const { chat } = location.state || {};
    // const { emailId } = useParams()

    return (
        <div className={styles.container} >
            <EmailTitle chat={chat} />
            <div className={styles.messagesLi}>
                {chat.msg.map((msg) => (
                    <MsgLi key={msg._id} msg={msg} members={chat.members}/>
                ))}
            </div>
            <TextArae />
            <div className={styles.SendBtnContainer}  >
                <TrashBtn />
                <SendBtn />
            </div>
        </div>
    )
}
