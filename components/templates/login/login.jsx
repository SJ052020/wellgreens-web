import React, { useState } from 'react'
import { useRouter } from 'next/router'
import styles from './login.module.css'
import Button from '../../atoms/button/button';
import LoginSignUpForm from '../../molecules/loginSignUpForm/loginSignUpForm';
import { useAppContext } from '../../../context';
import { Header } from '../../molecules/header/header';

export const LoginTemplate = (props) => {
  const [selectedTab, setSelectedTab] = useState(0)

  return (
    <div className={styles.login_wrapper}>
      <Header pageTitle='Log In' />
      <section className={styles.pageContainer}>
        <h1 className={styles.login_title}>Log In</h1>
        <div className={styles.tabsSec}>
          <a
            className={styles.tabBtn + ' ' + (selectedTab === 0 ? styles.activeTab : '')}
            onClick={() => setSelectedTab(0)}
          > Email </a>
          <a
            className={styles.tabBtn + ' ' + (selectedTab === 1 ? styles.activeTab : '')}
            onClick={() => setSelectedTab(1)}> Phone Number</a>
        </div>
        {selectedTab === 0 ? <LoginSignUpForm /> : <LoginSignUpForm isEmail={false} />}
      </section>
    </div>
  )
}
