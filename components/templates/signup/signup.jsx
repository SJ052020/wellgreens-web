import React, { useState } from 'react'
import styles from './signup.module.css'
import LoginSignUpForm from '../../molecules/loginSignUpForm/loginSignUpForm';
import { Header } from '../../molecules/header/header';

const SignupTemplate = () => {
  const [selectedTab, setSelectedTab] = useState(0)
  return (
    <div className={styles.signup_wrapper}>

      <Header pageTitle='Sign Up' />
      <section className={styles.pageContainer}>
        <h1 className={styles.signup_title}>Sign Up</h1>
        <div className={styles.tabsSec}>
          <a
            className={styles.tabBtn + ' ' + (selectedTab === 0 ? styles.activeTab : '')}
            onClick={() => setSelectedTab(0)}> Email </a>
          <a
            className={styles.tabBtn + ' ' + (selectedTab === 1 ? styles.activeTab : '')}
            onClick={() => setSelectedTab(1)}> Phone Number</a>
        </div>
        {selectedTab === 0 ? <LoginSignUpForm isSignUp={true} /> : <LoginSignUpForm isSignUp={true} isEmail={false} />}
      </section>
    </div>
  )
}

export default SignupTemplate