import { useState } from 'react'
import styles from './style.module.css'
import { NavLink, Navigate, useNavigate } from 'react-router-dom';
import { axiosReq } from '../../functions/axiosReq';


export const Register = () => {
  const [formData, setFormData] = useState({});
  const navigate = useNavigate();


  const handleChange = e => { setFormData(prev => ({ ...prev, [e.target.name]: e.target.value })) }
  const handleSubmit = async e => {
    e.preventDefault();
    const createUser = await axiosReq({ method: 'POST', body: formData, url: '/user/register' })
    if (!createUser) { console.log('i realy try but somthing didnt work'); return }
    setFormData({});
    navigate('/login', { replace: true });
  }
  return (
    <div className={styles.container}>
      <form className={styles.form} >
        <h1 className={styles.title}>your first MailBox is here</h1>
        <label htmlFor="fName">First Name <span className={styles.star}>*</span></label>
        <input className={styles.input}
          type="fName"
          id="fName"
          name="firstName"
          value={formData.firstName || ''}
          onChange={handleChange}
          required /><br />
        <label htmlFor="lName">Last Name <span className={styles.star}>*</span></label>
        <input className={styles.input}
          type="lName"
          id="lName"
          name="lastName"
          value={formData.lastName || ''}
          onChange={handleChange}
          required /><br />
        <label htmlFor="email">Our Email Address <span className={styles.star}>*</span></label>
        <input className={styles.input}
          type="email"
          id="email"
          name="email"
          value={formData.email || ''}
          onChange={handleChange}
          required /><br />
        <label htmlFor="password">Password <span className={styles.star}>*</span></label>
        <input className={styles.input}
          type="password"
          id="password"
          name="password"
          value={formData.password || ''}
          onChange={handleChange}
          required /><br />
        <label htmlFor="confirmPassword">Confirm Password <span className={styles.star}>*</span></label>
        <input className={styles.input}
          type="password"
          id="confirmPassword"
          name="confirmPassword"
          value={formData.confirmPassword || ''}

          onChange={handleChange}
          required />

        <div className={styles.btn}>
          <button className={styles.register} onClick={e => handleSubmit(e)} type="submit" >Register</button>

        </div>
        <div className={styles.login}>
          <span>Already have an account?</span>
          <NavLink className={styles.a} to={{ pathname: '/login', state: { replace: true } }}>Login Here</NavLink>
        </div>
        <div className={styles.login}>
          <span>By registering, you agree to our</span>
          <a className={styles.a} href='#'> Terms of Use</a>
        </div>


      </form>
    </div>
  )
}
