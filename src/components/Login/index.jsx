import React, { useContext, useState } from 'react'
import styles from './style.module.css'
import DataContext from '../../dataContext/UseContex';


export const Login = () => {

  const { setIsLog } = useContext(DataContext);


    const handleSubmit = (e) => {
        e.preventDefault();
        setIsLog(true);
    }
    return (
        <div className={styles.container}>
            <form className={styles.form} onSubmit={(e)=>{handleSubmit(e)}} >
                <h1 className={styles.title}>Welcome To MailBox</h1>
                <label htmlFor="email">Email</label>
                <input className={styles.input} type="email" id="email" name="email" /><br />
                <label htmlFor="password">Password</label>
                <input className={styles.input} type="password" id="password" name="password" />
                <div className={styles.btnAforgot}>
                    <input className={styles.login} type="submit"  />
                    <a className={styles.a} href='#'>Forgot Password?</a>
                </div>
                <div className={styles.register}>
                    <span>Don`t have an account?</span>
                    <a className={styles.a} href='#'>Regiter Here</a>
                </div>


            </form>
        </div>
    )
}
