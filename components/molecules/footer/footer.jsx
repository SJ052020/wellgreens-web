import React from 'react'
import { useRouter } from 'next/router'
import Link from "next/link";
import styles from './footer.module.css'
import dashboardIcon from '../../../assests/images/dashboard.svg'
import plateIcon from '../../../assests/images/plate.svg'
import challengeIcon from '../../../assests/images/challenges.svg'
import goalIcon from '../../../assests/images/goals.svg'
import orderIcon from '../../../assests/images/bag.svg'
import Image from 'next/image';

export const Footer = () => {
  const router = useRouter();
  const pagePath = router.pathname;
 
  return (
    <nav className={styles.navBar}>
      <ul className={styles.menuList}>
        <Link href="/home">
          <li className={styles.menuLink + ' ' + (pagePath == "/home" ? styles.activeLink : '')}>
            <Image src={dashboardIcon} alt="Home tab"
              className={(pagePath == "/home" ? styles.activeIcon : '')}
            />
            <span className={styles.linkText}>
              Dashboard
            </span>
          </li>
        </Link>
        <Link href="/goal">
          <li className={styles.menuLink + ' ' + (pagePath == "/goal" ? styles.activeLink : '')}>
            <Image src={goalIcon} alt="My Goal tab"
              className={(pagePath == "/goal" ? styles.activeIcon : '')}
            />
            <span className={styles.linkText}>
              My Goals
            </span>
          </li >
        </Link>
        <Link  href="/plate">
          <li className={styles.menuLink + ' ' + (pagePath == "/plate" ? styles.activeLink : '')}>

            <Image src={plateIcon} alt="My Plate tab"
              className={(pagePath == "/plate" ? styles.activeIcon : '')}
            />
            <span className={styles.linkText}>
              My Plate
            </span>
          </li>
        </Link>
        <Link href="/orders">
          <li className={styles.menuLink + ' ' + (pagePath == "/orders" ? styles.activeLink : '')}>

            <Image src={orderIcon} alt="orders"
              className={(pagePath == "/orders" ? styles.activeIcon : '')}
            />
            <span className={styles.linkText}>
              Orders
            </span>
          </li>
        </Link>
        <Link href="/rewards">
          <li className={styles.menuLink + ' ' + (pagePath == "/rewards" ? styles.activeLink : '')}>

            <Image src={challengeIcon} alt="My Challenges tab"
              className={(pagePath == "/rewards" ? styles.activeIcon : '')}
            />
            <span className={styles.linkText}>
              Rewards
            </span>
          </li>
        </Link>
      </ul>

    </nav>
  )
}
