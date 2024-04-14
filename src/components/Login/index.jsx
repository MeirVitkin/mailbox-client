import React, { useContext, useState } from 'react'
import styles from './style.module.css'
import DataContext from '../../dataContext/UseContex';
import { NavLink, Navigate, useNavigate } from 'react-router-dom';
import useAxiosReq from '../../hooks/useAxiosReq';
import { axiosReq } from '../../functions/axiosReq';



export const Login = () => {
    const { setUser } = useContext(DataContext);
    const navigate = useNavigate();
    const [error, setError] = useState()


    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            const fd = new FormData(e.target)
            const formData = Object.fromEntries(fd);
            console.log(formData);
            const user = await axiosReq({ method: 'POST', body: formData, url: '/user/login' })
            if (user) {
                setUser(user);
                navigate('/home', { replace: true });
            }
        } catch (error) {
            setError('email or password are not match');
        }
    }
    return (
        <div className={styles.container}>
            <form className={styles.form} onSubmit={(e) => { handleSubmit(e) }} >
                <h1 className={styles.title}>Welcome To MailBox</h1>
                <label htmlFor="email">Email</label>
                <input className={styles.input} type="email" id="email" name="email" /><br />
                <label htmlFor="password">Password</label>
                <input className={styles.input} type="password" id="password" name="password" />
                {error && (<p className={styles.error}>{error}</p>)}
                <div className={styles.btnAforgot}>
                    <input className={styles.login} type="submit" />
                    <a className={styles.a} href='#'>Forgot Password?</a>
                </div>
                <div className={styles.register}>
                    <span>Don`t have an account?</span>
                    <NavLink className={styles.a}
                        to={{ pathname: '/register', state: { replace: true } }}
                    >Register Here</NavLink>
                </div>


            </form>
        </div>
    )
}
