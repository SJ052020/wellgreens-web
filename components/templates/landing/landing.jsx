import Image from 'next/image'
import React from 'react'
import styles from './landing.module.css'
import logo from '../../../assests/images/logo.svg'
import Button from '../../atoms/button/button'
import { useRouter } from 'next/router'

const LandingPage = () => {
    const router = useRouter();

    return (
        <div className={styles.mainContainer}>
            <Image src={logo} alt="main logo" />
            <h1 className={styles.title}>WellGreens</h1>
            <div className={styles.buttonSec}>
                <Button className={styles.signupbtn} onClickHandler={() => router.push('/signup')} text={'Sign up'} />
                <Button className={styles.loginbtn} onClickHandler={() => router.push('/login')} text={'Log in'} />
            </div>
        </div>
    )
}

export default LandingPage