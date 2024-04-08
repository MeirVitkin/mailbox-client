import React from 'react'
import styles from './style.module.css'

export const Register = () => {
  return (
    <div className={styles.container}>
      <form className={styles.form} onSubmit={ (e)=> handleSubmit(e)} >
        <h1 className={styles.title}>your first MailBox is here</h1>
        <label htmlFor="fName">First Name <span className={styles.star}>*</span></label>
        <input className={styles.input} type="fName" id="fName" name="fName" required /><br />
        <label htmlFor="lName">Last Name <span className={styles.star}>*</span></label>
        <input className={styles.input} type="lName" id="lName" name="lName" required /><br />
        <label htmlFor="email">Our Email Address <span className={styles.star}>*</span></label>
        <input className={styles.input} type="email" id="email" name="email" required /><br />
        <label htmlFor="password">Password <span className={styles.star}>*</span></label>
        <input className={styles.input} type="password" id="password" name="password" required /><br />
        <label htmlFor="cpassword">Confirm Password <span className={styles.star}>*</span></label>
        <input className={styles.input} type="password" id="cpassword" name="cpassword" required />

        <div className={styles.btn}>
          <button className={styles.register} type="submit" >Register</button>

        </div>
        <div className={styles.login}>
          <span>Already have an account?</span>
          <a className={styles.a} href='#'>Login Here</a>
        </div>
        <div className={styles.login}>
          <span>By registering, you agree to our</span>
          <a className={styles.a} href='#'> Terms of Use</a>
        </div>


      </form>
    </div>
  )
}
