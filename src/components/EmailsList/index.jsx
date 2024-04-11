import React, { useEffect, useState } from 'react'
import styles from './style.module.css'
import { EmailLi } from '../EmailLi'
import { InputSearch } from '../InputSearch'
import { axiosReq } from '../../functions/axiosReq';
import useAxiosReq from '../../hooks/useAxiosReq';
import { useParams } from 'react-router';



export const EmailsList = () => {
    const { emailType } = useParams();
    // const [chats, setChats] = useState([])
    const { loading, data, setData, error, fetchData } = useAxiosReq({ defaultVal: [], method: 'GET', url: `/chat/${emailType}` })

    useEffect(() => {
        fetchData();
        // setChats(data)
    }, [emailType])

    const hendalSearch = async (value) => {
        if (value.length === 0) fetchData()
        else {
            const result = await axiosReq({ method: 'GET', url: `/chat/search/${value}` })
            console.log(result);
            setData(result)
        }
    }




    return (
        <>
            <div className={styles.contaner} >
                <div className={styles.inputSearch}> <InputSearch hendalSearch={hendalSearch} /> </div>
                <div className={styles.emailsList}>
                    {data.map((chat, i) => (<EmailLi chat={chat} key={i} />))}
                </div>
            </div>
        </>
    )
}
