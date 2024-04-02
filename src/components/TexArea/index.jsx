import styles from './style.module.css';
import { FaBold } from "react-icons/fa6";
import { FaItalic } from "react-icons/fa6";
import { BsPaintBucket } from "react-icons/bs";
import { FaUnderline } from "react-icons/fa";

import { GrTextAlignLeft } from "react-icons/gr";
import { PiTextAlignCenterBold } from "react-icons/pi";
import { GrTextAlignRight } from "react-icons/gr";

const leftIcons = [<FaBold/>,<FaItalic/>,<FaUnderline/>,<BsPaintBucket/>]
const rightIcons = [<GrTextAlignLeft/>,<PiTextAlignCenterBold/>,<GrTextAlignRight/>]

export const TextArae = () => {
  return (
    <div className={styles.container}>
        <textarea className={styles.text} placeholder='Write your massage...'/>
        <div className={styles.buttonContainer}>
            <div className={styles.lefBtns}>
                {leftIcons.map((icon, i )=>(
                    <button key={i} className={styles.btn}> {icon} </button>
                ))}
            </div>
            <div className={styles.rightBtns}>
                {rightIcons.map((icon, i )=>(
                    <button key={i}> {icon} </button>
                ))}

            </div>

        </div>
            
       

    </div>
  )
}
